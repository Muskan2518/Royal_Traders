import Link from "next/link";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

export default function CTASection({
  title = "Ready to clear your scrap or used items?",
  subtitle = "Get the best price in Hyderabad with free pickup and on-the-spot payment."
}: {
  title?: string;
  subtitle?: string;
}) {
  return (
    <section className="section">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-800 via-brand-900 to-ink-900 p-8 md:p-12 grid gap-6 md:grid-cols-2 items-center shadow-2xl ring-1 ring-accent-400/20">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent-500/30 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgb(236,194,87)_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-400/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-accent-300 ring-1 ring-accent-400/30">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400 animate-pulse" />
              Get a quote today
            </span>
            <h2 className="heading-2 text-white mt-3 animate-fade-up animate-fade-up-1">{title}</h2>
            <p className="mt-3 text-ink-200 animate-fade-up animate-fade-up-2">{subtitle}</p>
          </div>

          <div className="relative flex flex-wrap gap-3 md:justify-end animate-fade-up animate-fade-up-3">
            <Link
              href="/pickup-request"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 px-5 py-3 text-sm font-bold text-ink-900 shadow-lg shadow-accent-500/30 ring-1 ring-accent-300 hover:from-accent-300 hover:to-accent-500 hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              <TruckIcon />
              Request Pickup
            </Link>
            <a
              href={telLink()}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-brand-900 shadow-lg shadow-black/20 ring-1 ring-white hover:bg-brand-50 hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              <PhoneIcon />
              Call {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappLink()}
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-5 py-3 text-sm font-bold text-white shadow-lg shadow-[#25D366]/30 hover:bg-[#1DA851] hover:-translate-y-0.5 hover:shadow-xl transition-all"
            >
              <WhatsAppIcon />
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function TruckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .14 5.36.14 11.94a11.9 11.9 0 0 0 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.55 0 11.92-5.36 11.92-11.94 0-3.18-1.24-6.18-3.47-8.41Z" />
    </svg>
  );
}
