import CTASection from "@/components/CTASection";
import ServiceAreas from "@/components/ServiceAreas";
import LocationLottie from "@/components/LocationLottie";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "About Us",
  description: `Learn about ${SITE.name} — trusted buyers of scrap, used furniture, AC and generators in ${SITE.city}.`,
  path: "/about"
});

const stats = [
  { k: "10+", v: "Years Experience", grad: "from-accent-400 to-accent-600" },
  { k: "5000+", v: "Happy Customers", grad: "from-accent-400 to-accent-600" },
  { k: "10K+", v: "Items Recycled", grad: "from-brand-400 to-brand-600" },
  { k: "85+", v: "Pincodes Served", grad: "from-accent-400 to-accent-600" }
];

const values = [
  { t: "Transparency first", d: "Weighing happens in front of you. The price you see is the price you get.", grad: "from-accent-400 to-accent-600", icon: <ScaleIcon /> },
  { t: "Fair daily rates", d: "We update our rates every morning so you always get the prevailing market price.", grad: "from-accent-400 to-accent-600", icon: <RupeeIcon /> },
  { t: "Trained crews", d: "Our team is trained for safe dismantling, packing, and clean transport.", grad: "from-brand-400 to-brand-600", icon: <UsersIcon /> },
  { t: "Instant payment", d: "Cash, UPI, or bank transfer — your choice. Paid before we leave.", grad: "from-accent-400 to-accent-600", icon: <CashIcon /> },
  { t: "Eco-friendly", d: "Items are sorted, reused, or recycled responsibly — no landfill dumping.", grad: "from-accent-400 to-accent-600", icon: <LeafIcon /> },
  { t: "Always on time", d: "Same-day pickups in most areas. We respect your schedule.", grad: "from-brand-400 to-brand-600", icon: <ClockIcon /> }
];

const approach = [
  { n: "01", t: "Listen first", d: "Understand what you want to sell, the quantity, and your timeline.", grad: "from-accent-400 to-accent-600" },
  { n: "02", t: "Quote fairly", d: "Use prevailing market rates and condition-based valuation — no surprises.", grad: "from-accent-400 to-accent-600" },
  { n: "03", t: "Pickup on time", d: "Arrive at the scheduled hour with crew, tools, and packing material.", grad: "from-brand-400 to-brand-600" },
  { n: "04", t: "Pay & clean up", d: "Weigh in front of you, pay on the spot, and leave the site clean.", grad: "from-accent-400 to-accent-600" }
];

const milestones = [
  { y: "2014", t: "Started in Hyderabad", d: "Began with a single team buying household scrap." },
  { y: "2017", t: "Expanded to commercial", d: "Started serving offices, hotels, and industrial sites." },
  { y: "2020", t: "Crossed 5000 customers", d: "Became one of the most-called buying teams in the city." },
  { y: "2024", t: "85+ pincodes covered", d: "Now serving all of Hyderabad, Secunderabad and Rangareddy." }
];

const trust = [
  { t: "GST registered", d: "All transactions are billed and compliant.", icon: <DocIcon /> },
  { t: "Verified team", d: "ID-carrying crew members on every pickup.", icon: <ShieldIcon /> },
  { t: "Insured transport", d: "Your items are protected during transit.", icon: <TruckIcon /> },
  { t: "100% data wipe", d: "Office hard drives wiped before recycling.", icon: <LockIcon /> }
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-accent-50/30 to-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              About us
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight leading-[1.1] animate-fade-up animate-fade-up-1">
              Trusted buyers of scrap & used items in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                {SITE.city}
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-600 max-w-xl animate-slide-right" style={{ animationDelay: "0.4s" }}>
              We help homes, offices, restaurants, hotels, hospitals, and industrial units convert their unused or end-of-life items into instant cash — with zero pickup hassle.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 animate-fade-up animate-fade-up-3">
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-ink-800 hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> Call our team
              </a>
              <a
                href={whatsappLink("Hi, I want to know more about your services.")}
                className="inline-flex items-center gap-2 rounded-xl bg-accent-500 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-accent-600 hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon /> WhatsApp us
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

          <LocationLottie src="/lottie/furniture-delivery.json" className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 justify-self-center" />
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-accent-100/40 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 grid gap-8 lg:grid-cols-[1.1fr_1fr] items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Who we are
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              A {SITE.city} buying team that{" "}
              <span className="bg-gradient-to-r from-accent-500 via-brand-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                shows up
              </span>
            </h2>
            <p className="mt-4 text-base text-ink-700 leading-relaxed animate-slide-right" style={{ animationDelay: "0.3s" }}>
              We are a {SITE.city}-based buying team focused on scrap, second-hand furniture, used and non-working ACs, and generators of all kVA ranges. Our network covers the entire city — from Hitech City and Gachibowli to LB Nagar and Kukatpally.
            </p>
            <p className="mt-3 text-base text-ink-700 leading-relaxed animate-slide-right" style={{ animationDelay: "0.45s" }}>
              We work with individual sellers as well as bulk clients including corporates, schools, hospitals, hotels, and contractors managing renovations or shut-downs. Whatever the size of the lot, we keep the process transparent: weigh in front of you, share the rate, and pay immediately.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {trust.map((b, i) => (
              <div
                key={b.t}
                className="group flex items-start gap-3 rounded-2xl bg-white ring-1 ring-ink-100 px-4 py-3 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md animate-pop-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "both" }}
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent-400 to-accent-600 text-white shadow ring-2 ring-white transition-transform group-hover:scale-110 group-hover:animate-wiggle">
                  {b.icon}
                </span>
                <div>
                  <div className="text-sm md:text-base font-bold text-ink-900">{b.t}</div>
                  <p className="text-xs md:text-sm text-ink-600 mt-0.5">{b.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              What we stand for
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Six values that guide{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                every pickup
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {values.map((v, i) => (
              <div
                key={v.t}
                className="group relative overflow-hidden rounded-2xl bg-white ring-1 ring-ink-100 p-5 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg animate-pop-in"
                style={{ animationDelay: `${0.4 + i * 0.08}s`, animationFillMode: "both" }}
              >
                <div className={`pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${v.grad} opacity-10 blur-2xl group-hover:opacity-25 transition`} />
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${v.grad} opacity-0 group-hover:opacity-100 transition`} />
                <span className={`relative grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${v.grad} text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:animate-wiggle`}>
                  {v.icon}
                </span>
                <h3 className="relative mt-4 text-base md:text-lg font-bold text-ink-900 transition-all group-hover:translate-x-1">{v.t}</h3>
                <p className="relative mt-1.5 text-xs md:text-sm text-ink-600 leading-relaxed">{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
              Our approach
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              From your call to{" "}
              <span className="bg-gradient-to-r from-brand-500 via-brand-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                your cash
              </span>
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {approach.map((s, i) => (
              <div
                key={s.n}
                className="group relative overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl animate-pop-in"
                style={{ animationDelay: `${0.4 + i * 0.1}s`, animationFillMode: "both" }}
              >
                <div className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${s.grad} opacity-0 group-hover:opacity-100 transition`} />
                <div className={`grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-br ${s.grad} text-white text-base font-extrabold shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                  {s.n}
                </div>
                <h3 className="text-base md:text-lg font-bold text-ink-900 mt-3">{s.t}</h3>
                <p className="mt-1.5 text-xs md:text-sm text-ink-600 leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Our journey
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Over a decade of{" "}
              <span className="bg-gradient-to-r from-accent-500 via-brand-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                scrap excellence
              </span>
            </h2>
          </div>

          <div className="mt-10 relative">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-300 via-accent-300 to-accent-300" />

            <div className="grid gap-6 md:gap-10">
              {milestones.map((m, i) => (
                <div
                  key={m.y}
                  className={`md:grid md:grid-cols-2 md:gap-12 items-center animate-pop-in`}
                  style={{ animationDelay: `${0.4 + i * 0.15}s`, animationFillMode: "both" }}
                >
                  <div className={`${i % 2 === 0 ? "md:text-right md:pr-4" : "md:order-2 md:pl-4"}`}>
                    <div className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-3 py-1 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200`}>
                      {m.y}
                    </div>
                    <h3 className="mt-2 text-base md:text-lg font-bold text-ink-900">{m.t}</h3>
                    <p className="mt-1 text-xs md:text-sm text-ink-600">{m.d}</p>
                  </div>
                  <div className={`hidden md:flex ${i % 2 === 0 ? "" : "md:order-1 md:justify-end"}`}>
                    <span className="grid h-10 w-10 place-items-center rounded-full bg-white ring-4 ring-accent-200 text-accent-600 shadow-lg z-10">
                      <CheckIcon />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="areas" className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Coverage
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Areas we cover in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-brand-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                {SITE.city}
              </span>
            </h2>
            <p className="mt-3 text-base text-ink-600 max-w-2xl mx-auto animate-slide-right" style={{ animationDelay: "0.4s" }}>
              Free pickup across {SITE.city}, Secunderabad, and Rangareddy. View all areas or call us if your pincode isn't listed.
            </p>
          </div>
          <div className="mt-8">
            <ServiceAreas limit={15} intro="" title="" />
          </div>
          <div className="mt-8 text-center">
            <a
              href="/areas"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-br from-brand-700 to-brand-900 px-6 py-3 text-white font-semibold shadow-lg hover:-translate-y-0.5 hover:shadow-xl transition"
            >
              View All 85+ Service Areas
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <CTASection />
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
function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18M5 21h14M5 6h14M5 6l-3 6a4 4 0 0 0 8 0L7 6M19 6l-3 6a4 4 0 0 0 8 0l-3-6" />
    </svg>
  );
}
function RupeeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 4h12M6 9h12M6 14h6a4 4 0 0 0 0-8M14 20l-8-6" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14 14c1-.5 2-.7 3-.7 2.5 0 4.5 2 5 5" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function LeafIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 4 13c0-5 4-9 9-9 5 0 9 4 9 9 0 4-3 7-7 7-4 0-4-3-4-3" />
      <path d="M20 4c-3 8-9 11-15 14" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6M9 13h6M9 17h6" />
    </svg>
  );
}
function ShieldIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function LockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="11" width="16" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 0 1 8 0v4" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
