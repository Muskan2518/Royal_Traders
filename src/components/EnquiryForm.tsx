"use client";

import { useMemo, useState } from "react";
import { services } from "@/data/services";
import { serviceAreas } from "@/data/serviceAreas";

type Props = {
  defaultCategory?: string;
  compact?: boolean;
  title?: string;
};

function normalize(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]/g, "");
}

function isServiceableLocation(input: string) {
  const q = normalize(input);
  if (!q) return false;
  const pinMatch = input.match(/\b\d{6}\b/);
  if (pinMatch && serviceAreas.some((a) => a.pincode === pinMatch[0])) return true;
  return serviceAreas.some((a) => {
    const n = normalize(a.name);
    return n && (q.includes(n) || n.includes(q));
  });
}

export default function EnquiryForm({ defaultCategory, compact, title }: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [location, setLocation] = useState("");
  const [locationTouched, setLocationTouched] = useState(false);

  const locationOk = useMemo(() => isServiceableLocation(location), [location]);
  const showLocationWarning = locationTouched && location.length > 0 && !locationOk;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLocationTouched(true);
    if (!locationOk) {
      setStatus("error");
      setErrorMsg("we don't currently service that area");
      return;
    }
    setStatus("loading");
    setErrorMsg("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/pickup-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      });
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.message || "Submission failed");
      }
      setStatus("success");
      form.reset();
      setLocation("");
      setLocationTouched(false);
    } catch (err: unknown) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
    }
  }

  return (
    <div className={`card ${compact ? "" : "md:p-8"}`}>
      {title && <h3 className="heading-3 mb-4">{title}</h3>}

      {status === "success" ? (
        <div className="rounded-lg bg-accent-50 border border-accent-200 p-4 text-accent-800">
          <p className="font-semibold">Thank you! We have received your request.</p>
          <p className="text-sm mt-1">Our team will call you shortly to confirm the pickup time.</p>
        </div>
      ) : (
        <form onSubmit={onSubmit} className="grid gap-4">
          <div className="grid gap-4 md:grid-cols-2">
            <Field label="Full Name" name="name" required placeholder="Your name" />
            <Field label="Mobile Number" name="phone" required type="tel" placeholder="10-digit mobile" pattern="[0-9+\\- ]{8,15}" />
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div>
              <label htmlFor="location" className="label">Pickup Location</label>
              <input
                id="location"
                name="location"
                required
                list="serviceable-areas"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                onBlur={() => setLocationTouched(true)}
                placeholder="Click to see serviceable areas"
                autoComplete="off"
                className={`field ${showLocationWarning ? "border-red-400 focus:border-red-500" : ""}`}
              />
              <datalist id="serviceable-areas">
                {serviceAreas.map((a) => (
                  <option key={a.pincode} value={`${a.name} - ${a.pincode}`} />
                ))}
              </datalist>
              {showLocationWarning && (
                <p className="mt-1 text-xs text-red-600">
                  We don&apos;t service this area yet. Pick one from the list — see all on the /areas page.
                </p>
              )}
              {locationTouched && locationOk && (
                <p className="mt-1 text-xs text-accent-700">Great — we service this area.</p>
              )}
            </div>
            <div>
              <label className="label">Category</label>
              <select
                name="category"
                defaultValue={defaultCategory || ""}
                required
                className="field"
              >
                <option value="" disabled>Select a category</option>
                {services.map((s) => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Other">Other / Mixed lot</option>
              </select>
            </div>
          </div>

          <div>
            <label className="label">Item Details</label>
            <textarea
              name="message"
              rows={4}
              required
              placeholder="Approximate quantity, condition, brand, photos available, etc."
              className="field"
            />
          </div>

          <fieldset>
            <legend className="text-sm font-medium text-ink-800">Preferred contact</legend>
            <div className="mt-2 flex flex-wrap gap-4 text-sm">
              <label className="flex items-center gap-2"><input type="radio" name="contactPref" value="Call" defaultChecked className="accent-brand-500" /> Call</label>
              <label className="flex items-center gap-2"><input type="radio" name="contactPref" value="WhatsApp" className="accent-accent-500" /> WhatsApp</label>
              <label className="flex items-center gap-2"><input type="radio" name="contactPref" value="Email" className="accent-brand-500" /> Email</label>
            </div>
          </fieldset>

          {status === "error" && (
            <p className="text-sm text-accent-600">Sorry — {errorMsg}. Please call or WhatsApp us directly.</p>
          )}

          <button type="submit" disabled={status === "loading"} className="btn-primary disabled:opacity-60">
            {status === "loading" ? "Sending..." : "Submit Pickup Request"}
          </button>
          <p className="text-xs text-ink-500">By submitting, you agree to be contacted regarding your enquiry.</p>
        </form>
      )}
    </div>
  );
}

function Field({
  label,
  name,
  required,
  type = "text",
  placeholder,
  pattern
}: {
  label: string;
  name: string;
  required?: boolean;
  type?: string;
  placeholder?: string;
  pattern?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        pattern={pattern}
        className="field"
      />
    </div>
  );
}
