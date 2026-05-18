import { NextResponse } from "next/server";
import { readAll } from "@/lib/pickup-store";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const rows = await readAll();
    return NextResponse.json({ ok: true, rows });
  } catch (err) {
    console.error("[admin/requests]", err);
    return NextResponse.json(
      { ok: false, message: "Could not load requests from database." },
      { status: 500 }
    );
  }
}
