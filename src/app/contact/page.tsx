import EnquiryForm from "@/components/EnquiryForm";
import LocationLottie from "@/components/LocationLottie";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description: `Contact ${SITE.name} for pickup requests, bulk lots, and quotes across Hyderabad.`,
  path: "/contact"
});

const stats = [
  { k: "5000+", v: "Customers", grad: "from-accent-400 to-accent-600" },
  { k: "10K+", v: "Pickups Done", grad: "from-accent-400 to-accent-600" },
  { k: "85+", v: "Pincodes", grad: "from-brand-400 to-brand-600" },
  { k: "4.9★", v: "Average Rating", grad: "from-accent-400 to-accent-600" }
];

const reasons = [
  { t: "Same-day pickup", d: "Most jobs scheduled within 2-4 hours.", grad: "from-accent-400 to-accent-600", icon: <ClockIcon /> },
  { t: "Transparent weighing", d: "Calibrated digital scales — every gram visible.", grad: "from-brand-400 to-brand-600", icon: <ScaleIcon /> },
  { t: "Fair market price", d: "Daily-updated rates for every category.", grad: "from-accent-400 to-accent-600", icon: <RupeeIcon /> },
  { t: "On-the-spot payment", d: "Cash, UPI, or instant bank transfer — your call.", grad: "from-accent-400 to-accent-600", icon: <CashIcon /> }
];

const channels = [
  {
    title: "Phone",
    sub: SITE.hours,
    value: SITE.phoneDisplay,
    href: telLink(),
    cta: "Call us",
    grad: "from-accent-400 to-accent-500",
    bg: "from-accent-50 to-white",
    icon: <PhoneIcon />,
    text: "text-accent-700"
  },
  {
    title: "WhatsApp",
    sub: "Fastest response",
    value: "Chat with our team",
    href: whatsappLink(),
    cta: "Open WhatsApp",
    grad: "from-accent-400 to-accent-600",
    bg: "from-accent-50 to-white",
    icon: <WhatsAppIcon />,
    text: "text-accent-700"
  },
  {
    title: "Email",
    sub: "Reply in 24 hours",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    cta: "Send email",
    grad: "from-brand-400 to-brand-600",
    bg: "from-brand-50 to-white",
    icon: <MailIcon />,
    text: "text-brand-700"
  }
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-accent-50/30 to-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Contact us
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] animate-fade-up animate-fade-up-1">
              Get in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-brand-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                touch
              </span>
              <br />
              with our team
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-600 max-w-xl animate-slide-right" style={{ animationDelay: "0.4s" }}>
              Call, WhatsApp, or send us a message. We respond within minutes during business hours and arrange same-day pickups across {SITE.city}.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 animate-fade-up animate-fade-up-3">
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-ink-800 hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> {SITE.phoneDisplay}
              </a>
              <a
                href={whatsappLink("Hi, I want to sell my scrap / used items.")}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-accent-600 hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon /> WhatsApp
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              {stats.map((s, i) => (
                <div
                  key={s.v}
                  className="rounded-2xl bg-white shadow-sm ring-1 ring-ink-100 p-3 animate-pop-in"
                  style={{ animationDelay: `${0.6 + i * 0.1}s`, animationFillMode: "both" }}
                >
                  <div className={`text-xl md:text-2xl font-extrabold bg-gradient-to-br ${s.grad} bg-clip-text text-transparent`}>
                    {s.k}
                  </div>
                  <div className="mt-0.5 text-[11px] md:text-xs font-semibold text-ink-600">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          <LocationLottie className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 justify-self-center" />
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-accent-100/40 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Reach us
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Pick the channel that{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                works for you
              </span>
            </h2>
            <p className="mt-3 text-base text-ink-600 animate-slide-right" style={{ animationDelay: "0.4s" }}>
              We respond on every channel — pick whichever is fastest for you.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {channels.map((c, i) => (
              <a
                key={c.title}
                href={c.href}
                target={c.title === "WhatsApp" ? "_blank" : undefined}
                rel={c.title === "WhatsApp" ? "noopener noreferrer" : undefined}
                className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br ${c.bg} ring-1 ring-ink-100 p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl animate-pop-in animate-pop-in-${i + 1}`}
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${c.grad} opacity-10 blur-2xl group-hover:opacity-25 transition`} />
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${c.grad} opacity-0 group-hover:opacity-100 transition`} />
                <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${c.grad} text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:animate-wiggle`}>
                  {c.icon}
                </div>
                <div className="relative mt-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-ink-900 transition-all group-hover:translate-x-1">{c.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-ink-500">{c.sub}</span>
                  </div>
                  <p className={`mt-1 text-base font-semibold ${c.text} truncate`}>{c.value}</p>
                  <span className={`mt-3 inline-flex items-center gap-1.5 text-sm font-semibold ${c.text}`}>
                    {c.cta}
                    <span className={`grid h-6 w-6 place-items-center rounded-full bg-white ring-1 ring-current/20 transition-all group-hover:bg-current group-hover:translate-x-1`}>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="group-hover:text-white transition-colors">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Why us
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Why people in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-brand-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                {SITE.city}
              </span>{" "}
              call us first
            </h2>
            <p className="mt-3 text-base text-ink-600 max-w-xl animate-slide-right" style={{ animationDelay: "0.4s" }}>
              We have been buying scrap and used items for years. Our crews are trained, our pricing is daily, and our payments are instant.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-3">
              {reasons.map((r, i) => (
                <div
                  key={r.t}
                  className="group flex items-start gap-3 rounded-xl bg-white ring-1 ring-ink-100 px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md hover:ring-accent-200 animate-pop-in"
                  style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "both" }}
                >
                  <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${r.grad} text-white shadow ring-2 ring-white transition-transform group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:animate-wiggle`}>
                    {r.icon}
                  </span>
                  <div>
                    <div className="text-sm md:text-base font-bold text-ink-900 transition-all group-hover:translate-x-0.5">{r.t}</div>
                    <p className="text-xs md:text-sm text-ink-600 leading-snug mt-0.5">{r.d}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 inline-flex items-center gap-3 rounded-2xl bg-white ring-1 ring-ink-100 px-4 py-3 shadow-sm animate-fade-up animate-fade-up-4 hover:shadow-md hover:-translate-y-0.5 transition-all group">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow group-hover:animate-wiggle">
                <PinIcon />
              </span>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-ink-500">Service area</div>
                <div className="text-sm font-semibold text-ink-900">{SITE.address}</div>
                <div className="text-xs text-ink-500 mt-0.5">{SITE.serviceArea.slice(0, 6).join(" • ")} & more</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-200/30 via-accent-200/20 to-brand-200/30 blur-2xl" />
            <div className="relative rounded-3xl bg-white shadow-xl ring-1 ring-ink-100 p-1.5">
              <div className="rounded-[20px] bg-gradient-to-br from-accent-50/60 via-white to-brand-50/40 p-2">
                <EnquiryForm title="Send us a message" />
              </div>
            </div>
            <div className="absolute -top-3 -right-3 inline-flex items-center gap-2 rounded-full bg-accent-600 text-white px-3 py-1.5 text-xs font-bold shadow-lg animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Reply in minutes
            </div>
          </div>
        </div>
      </section>
    </>
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
function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6l-10 7L2 6" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 21h14M5 6h14M5 6l-3 6a4 4 0 0 0 8 0L7 6M19 6l-3 6a4 4 0 0 0 8 0l-3-6" />
    </svg>
  );
}
function RupeeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12M6 9h12M6 14h6a4 4 0 0 0 0-8M14 20l-8-6" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function PinIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}
