import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { serviceAreas } from "@/data/serviceAreas";
import { append as appendToDb } from "@/lib/pickup-store";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  phone?: string;
  location?: string;
  category?: string;
  message?: string;
  contactPref?: string;
};

// SMTP (sender) — set these in .env.local (dev) and Vercel env vars (prod).
const SMTP_HOST = process.env.SMTP_HOST || "smtp.gmail.com";
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER || "";
// Gmail app password — strip spaces, Gmail accepts with or without them.
const SMTP_PASS = (process.env.SMTP_PASS || "").replace(/\s+/g, "");
const SMTP_FROM = process.env.SMTP_FROM || SMTP_USER;

// Recipient — where each pickup-request email is delivered.
const MAIL_TO = process.env.PICKUP_MAIL_TO || SMTP_USER;

// Google Sheet webhook URL (Apps Script Web App). Set this on Vercel as PICKUP_SHEET_WEBHOOK.
const SHEET_WEBHOOK = process.env.PICKUP_SHEET_WEBHOOK || "";

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isServiceableLocation(input: string) {
  const q = normalize(input);
  if (!q) return false;
  // Match by pincode anywhere in the string, or by area name (substring either way).
  const pinMatch = input.match(/\b\d{6}\b/);
  if (pinMatch && serviceAreas.some((a) => a.pincode === pinMatch[0])) return true;
  return serviceAreas.some((a) => {
    const n = normalize(a.name);
    return n && (q.includes(n) || n.includes(q));
  });
}

async function appendToSheet(row: Record<string, string>) {
  if (!SHEET_WEBHOOK) return; // sheet not configured — silent skip
  await fetch(SHEET_WEBHOOK, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(row)
  });
}

async function sendMail(row: Record<string, string>) {
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465, // 465 = SSL, 587 = STARTTLS (default)
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  const html = `
    <h2>New Pickup Request</h2>
    <table cellpadding="6" style="border-collapse:collapse">
      <tr><td><b>Time</b></td><td>${row.timestamp}</td></tr>
      <tr><td><b>Name</b></td><td>${row.name}</td></tr>
      <tr><td><b>Phone</b></td><td>${row.phone}</td></tr>
      <tr><td><b>Location</b></td><td>${row.location}</td></tr>
      <tr><td><b>Category</b></td><td>${row.category}</td></tr>
      <tr><td><b>Contact Pref</b></td><td>${row.contactPref}</td></tr>
      <tr><td valign="top"><b>Message</b></td><td>${row.message.replace(/\n/g, "<br>")}</td></tr>
    </table>
  `;

  await transporter.sendMail({
    from: `"Royal Traders — Pickup Requests" <${SMTP_FROM}>`,
    to: MAIL_TO,
    subject: `New pickup request — ${row.name} (${row.category})`,
    text:
      `New Pickup Request\n\n` +
      `Time: ${row.timestamp}\nName: ${row.name}\nPhone: ${row.phone}\n` +
      `Location: ${row.location}\nCategory: ${row.category}\n` +
      `Contact Pref: ${row.contactPref}\n\nMessage:\n${row.message}\n`,
    html
  });
}

export async function POST(req: Request) {
  let body: Payload;
  try {
    body = (await req.json()) as Payload;
  } catch {
    return NextResponse.json({ ok: false, message: "Invalid JSON" }, { status: 400 });
  }

  const required: (keyof Payload)[] = ["name", "phone", "location", "category", "message"];
  for (const f of required) {
    if (!body[f] || String(body[f]).trim().length < 2) {
      return NextResponse.json({ ok: false, message: `Missing field: ${f}` }, { status: 400 });
    }
  }

  const phoneClean = String(body.phone).replace(/[^\d]/g, "");
  if (phoneClean.length < 8 || phoneClean.length > 15) {
    return NextResponse.json({ ok: false, message: "Invalid phone number" }, { status: 400 });
  }

  const location = String(body.location).trim();
  if (!isServiceableLocation(location)) {
    return NextResponse.json(
      {
        ok: false,
        code: "AREA_UNAVAILABLE",
        message:
          "Sorry, we don't currently service this area. Please pick a location from the list on our /areas page."
      },
      { status: 400 }
    );
  }

  const row = {
    timestamp: new Date().toISOString(),
    name: String(body.name).trim(),
    phone: String(body.phone).trim(),
    location,
    category: String(body.category).trim(),
    message: String(body.message).trim(),
    contactPref: String(body.contactPref || "").trim()
  };

  // Persist to MySQL — this is the source of truth for the admin dashboard.
  let dbWarning: string | undefined;
  try {
    await appendToDb(row);
  } catch (err) {
    console.error("[pickup-request] db insert failed", err);
    dbWarning = "Saved via email; database write failed.";
  }

  // Best-effort sheet append (optional legacy mirror) — don't block on failure.
  try {
    await appendToSheet(row);
  } catch (err) {
    console.error("[pickup-request] sheet append failed", err);
  }

  try {
    await sendMail(row);
  } catch (err) {
    console.error("[pickup-request] email send failed", err);
    return NextResponse.json(
      { ok: false, message: "Could not send your request. Please try again or call us directly." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true, ...(dbWarning ? { warning: dbWarning } : {}) });
}
