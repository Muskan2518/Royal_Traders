import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import LocationLottie from "@/components/LocationLottie";
import { services } from "@/data/services";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Our Services",
  description:
    "We buy scrap, used furniture, office furniture, restaurant furniture, ACs, and generators across Hyderabad. Free pickup and instant cash.",
  path: "/services"
});

const stats = [
  { k: "6+", v: "Service Categories", grad: "from-accent-400 to-accent-600" },
  { k: "85+", v: "Pincodes Covered", grad: "from-accent-400 to-accent-600" },
  { k: "10K+", v: "Successful Pickups", grad: "from-brand-400 to-brand-600" },
  { k: "24/7", v: "Customer Support", grad: "from-accent-400 to-accent-600" }
];

const industries = [
  { t: "Homes & Apartments", d: "Households shifting, renovating, or decluttering.", icon: <HomeIcon />, grad: "from-accent-400 to-accent-600" },
  { t: "Offices & Corporates", d: "Single floors to complete office shut-downs.", icon: <BuildingIcon />, grad: "from-brand-400 to-brand-600" },
  { t: "Hotels & Restaurants", d: "Renovations, closures, and equipment upgrades.", icon: <UtensilsIcon />, grad: "from-accent-400 to-accent-600" },
  { t: "Hospitals & Schools", d: "Bulk lots from institutions of any size.", icon: <HospitalIcon />, grad: "from-brand-400 to-brand-600" },
  { t: "Factories & Industrial", d: "Heavy machinery, dismantling, and metal scrap.", icon: <FactoryIcon />, grad: "from-accent-400 to-accent-600" },
  { t: "Construction Sites", d: "Demolition scrap, leftover materials, and rebar.", icon: <HardHatIcon />, grad: "from-brand-400 to-brand-600" }
];

const process: Array<{
  n: string;
  t: string;
  d: string;
  accent: "gold" | "navy";
  icon: React.ReactNode;
  lottie?: string;
}> = [
  { n: "01", t: "Tell us what you have", d: "Send a photo on WhatsApp, call us, or fill the pickup form.", accent: "gold", icon: <PhotoIcon />, lottie: "/lottie/take-a-photo.json" },
  { n: "02", t: "Get an honest quote", d: "We share an estimated quote based on item, condition, and quantity.", accent: "navy", icon: <ChatIcon />, lottie: "/lottie/get-a-quote.json" },
  { n: "03", t: "Confirm the pickup", d: "Choose a time that suits you. Most pickups happen the same day.", accent: "gold", icon: <TruckIcon />, lottie: "/lottie/transport-blue.json" },
  { n: "04", t: "Weigh, pay, take away", d: "We weigh in front of you, pay on the spot, and clear the site.", accent: "navy", icon: <CashIcon />, lottie: "/lottie/money-hand.json" }
];

const PROCESS_TONE = {
  gold: { iconBg: "from-accent-400 to-accent-600", cardBg: "from-accent-50 via-white to-white", ring: "ring-accent-200", number: "text-accent-200/70", glow: "from-accent-300/50 to-accent-500/30", chip: "bg-accent-100 text-accent-800 ring-accent-200" },
  navy: { iconBg: "from-brand-500 to-brand-800", cardBg: "from-brand-50 via-white to-white", ring: "ring-brand-200", number: "text-brand-200/70", glow: "from-brand-300/50 to-brand-500/30", chip: "bg-brand-100 text-brand-800 ring-brand-200" }
};

const promises: Array<{
  t: string;
  d: string;
  proof: string;
  accent: "gold" | "navy";
  icon: React.ReactNode;
}> = [
  { t: "Free pickup, always", d: "No charges for inspection, weighing, or transport.", proof: "₹0 fees", accent: "gold", icon: <PickupIcon /> },
  { t: "Best market price", d: "We quote daily-updated rates — never lowballed.", proof: "Daily rates", accent: "navy", icon: <TagPriceIcon /> },
  { t: "Same-day pickup", d: "Most jobs scheduled within hours, not days.", proof: "Within hours", accent: "gold", icon: <ClockBoltIcon /> },
  { t: "Instant payment", d: "Cash, UPI, or bank transfer — your choice.", proof: "On the spot", accent: "navy", icon: <RupeeBillIcon /> }
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-white via-accent-50/30 to-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-10 md:py-14 grid items-center gap-8 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              All Services
            </span>
            <h1 className="mt-3 text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold tracking-tight !leading-[1.3] pb-2 animate-fade-up animate-fade-up-1">
              What we buy in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift pb-1 inline-block">
                {SITE.city}
              </span>
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-600 max-w-xl animate-slide-right" style={{ animationDelay: "0.4s" }}>
              From copper scrap to complete office shut-downs, restaurant lots, ACs, and generators — pick the category closest to what you want to sell.
            </p>

            <div className="mt-6 flex flex-wrap gap-3 animate-fade-up animate-fade-up-3">
              <a
                href={telLink()}
                className="inline-flex items-center gap-2 rounded-xl bg-ink-900 px-5 py-3 text-white text-sm font-semibold shadow-md hover:bg-ink-800 hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> Call for a quote
              </a>
              <a
                href={whatsappLink("Hi, I want to know more about your services.")}
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

          <LocationLottie src="/lottie/services.json" className="w-56 h-56 md:w-72 md:h-72 lg:w-96 lg:h-96 justify-self-center" />
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-white overflow-hidden">
        <div className="pointer-events-none absolute -top-20 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full bg-accent-100/40 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Categories
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Pick the{" "}
              <span className="bg-gradient-to-r from-accent-500 via-brand-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                category
              </span>{" "}
              closest to your items
            </h2>
            <p className="mt-3 text-base md:text-lg text-ink-600 animate-slide-right" style={{ animationDelay: "0.4s" }}>
              Each category page lists exactly what we buy and how the pickup works.
            </p>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s, i) => (
              <div
                key={s.slug}
                className={`animate-pop-in animate-pop-in-${(i % 4) + 1}`}
              >
                <ServiceCard
                  href={`/${s.slug}`}
                  title={s.title}
                  description={s.short}
                  accent={s.accent}
                  categories={s.categories}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 right-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Industries we serve
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              From single sofas to{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-brand-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                full shut-downs
              </span>
            </h2>
            <p className="mt-3 text-base text-ink-600 max-w-2xl mx-auto animate-slide-right" style={{ animationDelay: "0.4s" }}>
              We work with everyone — homeowners, corporates, contractors, hospitality, and bulk industrial sellers.
            </p>
          </div>

          <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((c, i) => (
              <div
                key={c.t}
                className="group flex items-start gap-3 rounded-2xl bg-white ring-1 ring-ink-100 px-5 py-4 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg animate-pop-in"
                style={{ animationDelay: `${0.4 + i * 0.08}s`, animationFillMode: "both" }}
              >
                <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${c.grad} text-white shadow-md ring-2 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg] group-hover:animate-wiggle`}>
                  {c.icon}
                </span>
                <div>
                  <h3
                    className="text-base md:text-lg font-bold text-ink-900 transition-all group-hover:translate-x-0.5 animate-fade-up"
                    style={{ animationDelay: `${0.55 + i * 0.08}s`, animationFillMode: "both" }}
                  >
                    {c.t}
                  </h3>
                  <p
                    className="text-xs md:text-sm text-ink-600 leading-snug mt-1 animate-fade-up"
                    style={{ animationDelay: `${0.65 + i * 0.08}s`, animationFillMode: "both" }}
                  >
                    {c.d}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-12 md:py-20 bg-gradient-to-b from-white via-brand-50/40 to-white overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-700 ring-1 ring-brand-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-500 animate-pulse" />
              How it works
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight !leading-[1.3] pb-2 animate-fade-up animate-fade-up-1">
              From quote to cash in{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift pb-1 inline-block">
                4 simple steps
              </span>
            </h2>
          </div>

          <div className="relative mt-12 md:mt-16">
            <div className="hidden lg:block pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-0.5 [background:repeating-linear-gradient(to_right,transparent_0,transparent_8px,rgb(15_28_54/0.25)_8px,rgb(15_28_54/0.25)_14px)]" />

            <div className="relative grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
              {process.map((s, i) => {
                const t = PROCESS_TONE[s.accent];
                return (
                  <div
                    key={s.n}
                    className={`group relative h-full animate-pop-in animate-pop-in-${i + 1}`}
                  >
                    <div className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${t.cardBg} ring-1 ${t.ring} shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl pt-6 pb-6 px-5`}>
                      <div className={`pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${t.glow} opacity-0 group-hover:opacity-100 blur-2xl transition duration-500`} />

                      {s.lottie ? (
                        <div className="relative grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                          <LocationLottie src={s.lottie} className={`h-full w-full ${s.n === "04" ? "scale-[1.6]" : ""}`} />
                        </div>
                      ) : (
                        <div className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${t.iconBg} text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                          {s.icon}
                        </div>
                      )}

                      <span
                        className={`relative mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ${t.chip} animate-fade-up`}
                        style={{ animationDelay: `${0.4 + i * 0.12}s`, animationFillMode: "both" }}
                      >
                        Step {s.n}
                      </span>

                      <h3
                        className="relative mt-3 text-lg md:text-xl font-extrabold text-ink-900 tracking-tight transition group-hover:text-brand-900 animate-fade-up"
                        style={{ animationDelay: `${0.5 + i * 0.12}s`, animationFillMode: "both" }}
                      >
                        {s.t}
                      </h3>
                      <p
                        className="relative mt-2 text-sm text-ink-600 leading-relaxed animate-fade-up"
                        style={{ animationDelay: `${0.6 + i * 0.12}s`, animationFillMode: "both" }}
                      >
                        {s.d}
                      </p>
                    </div>

                    {i < process.length - 1 && (
                      <span className="hidden lg:flex pointer-events-none absolute right-0 top-[2.5rem] translate-x-1/2 z-10 h-7 w-7 items-center justify-center rounded-full bg-white ring-2 ring-brand-300 text-brand-700 shadow-md transition group-hover:scale-110">
                        <ArrowRightIcon />
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Our promises
            </span>
            <h2 className="mt-3 text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
              Four things you can{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                count on
              </span>
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {promises.map((p, i) => {
              const tone = PROCESS_TONE[p.accent];
              return (
                <div
                  key={p.t}
                  className="group relative animate-pop-in"
                  style={{ animationDelay: `${0.35 + i * 0.1}s`, animationFillMode: "both" }}
                >
                  <div className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${tone.cardBg} ring-1 ${tone.ring} p-5 pt-7 shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl`}>
                    {/* Top accent bar */}
                    <span className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${tone.iconBg}`} />
                    {/* Decorative blob */}
                    <span className={`pointer-events-none absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-gradient-to-br ${tone.glow} opacity-40 group-hover:opacity-90 blur-2xl transition duration-500`} />
                    {/* Watermark check */}
                    <span className="pointer-events-none absolute -top-2 -right-2 text-ink-100 opacity-60 group-hover:opacity-80 transition" aria-hidden>
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M8 12l3 3 5-6" />
                      </svg>
                    </span>

                    <div className="relative flex items-start gap-3">
                      <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${tone.iconBg} text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                        {p.icon}
                      </span>
                      <span className={`mt-1 inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ring-1 ${tone.chip}`}>
                        <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
                        {p.proof}
                      </span>
                    </div>

                    <h3
                      className="relative mt-4 text-base md:text-lg font-extrabold text-ink-900 tracking-tight animate-fade-up"
                      style={{ animationDelay: `${0.5 + i * 0.1}s`, animationFillMode: "both" }}
                    >
                      {p.t}
                    </h3>
                    <p
                      className="relative mt-1.5 text-xs md:text-sm text-ink-600 leading-relaxed animate-fade-up"
                      style={{ animationDelay: `${0.6 + i * 0.1}s`, animationFillMode: "both" }}
                    >
                      {p.d}
                    </p>

                    <div className="relative mt-4 flex items-center gap-1.5 border-t border-ink-100 pt-3 text-[11px] font-semibold text-ink-500 group-hover:text-brand-700 transition">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      Guaranteed
                    </div>
                  </div>
                </div>
              );
            })}
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
function HomeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 12l9-9 9 9" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  );
}
function BuildingIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="3" width="16" height="18" rx="1" />
      <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" />
    </svg>
  );
}
function UtensilsIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 2v7c0 1.1.9 2 2 2v10M5 2v6M7 2v6M14 2c-1.5 0-3 .5-3 3v6c0 1.5 1.5 2 3 2v9" />
    </svg>
  );
}
function HospitalIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1" />
      <path d="M12 8v8M8 12h8" />
    </svg>
  );
}
function FactoryIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V10l5 4V10l5 4V8l8-3v16z" />
      <path d="M9 17v2M14 17v2M19 17v2" />
    </svg>
  );
}
function HardHatIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 18h20v3H2zM5 18V12a7 7 0 0 1 14 0v6" />
      <path d="M9 8v6M15 8v6" />
    </svg>
  );
}
function CheckIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
function PhotoIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
      <circle cx="12" cy="13" r="4" />
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
      <path d="M8 12h.01M12 12h.01M16 12h.01" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01M18 14v.01" />
    </svg>
  );
}
function ArrowRightIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
function PickupIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 7h11v9H3z" />
      <path d="M14 11h4l3 3v2h-7" />
      <circle cx="6.5" cy="18" r="2" />
      <circle cx="17.5" cy="18" r="2" />
      <path d="M3 4h8" />
    </svg>
  );
}
function TagPriceIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7.5" cy="7.5" r="1.4" fill="currentColor" />
      <path d="M12 14l-2 2M14 16l-2 2" />
    </svg>
  );
}
function ClockBoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="12" r="8" />
      <path d="M11 7v5l3 2" />
      <path d="M19 4l-2 4h3l-2 4" />
    </svg>
  );
}
function RupeeBillIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M9 9h6M9 11h6M9 13h3a2 2 0 0 0 0-4M11 16l-2-2" />
    </svg>
  );
}
