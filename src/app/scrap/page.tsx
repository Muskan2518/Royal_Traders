import Image from "next/image";
import SGallery from "@/components/SGallery";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `Scrap Buyers in ${SITE.city} — ${SITE.name}`,
  description: `Browse our scrap collection gallery. Free pickup and on-the-spot cash payment across ${SITE.city}.`,
  path: "/scrap"
});

export default function Page() {
  return (
    <>
      <section className="pt-8 pb-4 md:pt-10 md:pb-4 bg-[#fdf8ec]">
        <div className="container grid items-center gap-4 lg:gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdf8ec] px-4 py-1.5 text-sm font-semibold text-[#0f1c36] ring-1 ring-[#ecc257] animate-fade-up animate-float">
              <RecycleChip /> Scrap
            </span>

            <h1 className="mt-5 text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.05] text-[#070f22] animate-fade-up animate-fade-up-1">
              Scrap we buy
              <br />
              in {SITE.city}
            </h1>

            <p className="mt-5 text-base md:text-lg text-[#475569] max-w-xl animate-fade-up animate-fade-up-2">
              A look at the kind of scrap we collect every day. Free pickup, transparent weighing, and instant payment.
            </p>

            <div className="mt-7 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
              <Feature icon={<RupeeIcon />} label="Best Cash Offers" delay={1} />
              <Feature icon={<TruckIcon />} label="Free Door Pickup" delay={2} />
              <Feature icon={<ShieldIcon />} label="Safe & Secure Service" delay={3} />
              <Feature icon={<ClockIcon />} label="Quick & Hassle Free" delay={4} />
            </div>

            <div className="mt-7 flex flex-wrap gap-3 animate-fade-up animate-fade-up-4">
              <a
                href={telLink()}
                className="relative inline-flex items-center gap-2 rounded-xl bg-[#0f1c36] px-6 py-3 text-white font-semibold shadow-md hover:bg-[#070f22] hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to sell scrap.")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 font-semibold text-[#0f1c36] ring-2 ring-[#0f1c36]/30 hover:bg-[#fdf8ec]/40 hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon /> WhatsApp Us
              </a>
            </div>

            <div className="mt-6 flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 ring-1 ring-[#ecc257] px-4 py-3 max-w-2xl animate-fade-up animate-fade-up-4">
              <div className="flex items-center gap-2 text-sm text-[#0f1c36]">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-[#fdf8ec] text-[#0f1c36]">
                  <ShieldIcon />
                </span>
                Trusted by 1000+ Customers Across {SITE.city}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-[#0f1c36]">
                <Stars />
                4.8/5
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-2xl mx-auto">
            <div className="relative aspect-[5/4] rounded-3xl overflow-hidden bg-[#faedc8] shadow-xl">
              <Image
                src="/images/s2.jpg"
                alt="Scrap collection"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0f1c36]/40 via-transparent to-transparent" />
              <div className="absolute top-4 left-4 md:top-5 md:left-5 max-w-[60%] z-10">
                <p className="font-serif italic text-white text-lg md:text-xl lg:text-2xl leading-[1.05] drop-shadow-lg">
                  We collect it,
                  <br />
                  You get paid!
                </p>
                <svg
                  className="mt-1 h-2.5 w-28 md:w-36 text-[#ecc257]"
                  viewBox="0 0 200 12"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  preserveAspectRatio="none"
                  aria-hidden
                >
                  <path d="M2 8 Q50 1, 100 6 T 198 4" />
                </svg>
              </div>
            </div>

            <div className="absolute -bottom-3 right-3 inline-flex items-center gap-2 rounded-2xl bg-[#0f1c36] px-4 py-2 text-white shadow-lg animate-float">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-white text-[#0f1c36]">
                <CashIcon />
              </span>
              <span className="leading-tight font-bold text-sm">
                Instant Cash
                <br />
                <span className="text-[11px] font-medium opacity-90">on the Spot</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <SGallery />
    </>
  );
}

function Feature({
  icon,
  label,
  delay = 0
}: {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}) {
  return (
    <div className={`group flex flex-col items-center text-center gap-2 cursor-default animate-pop-in animate-pop-in-${delay}`}>
      <span className="grid h-12 w-12 place-items-center rounded-full ring-2 ring-accent-300 text-accent-700 bg-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:ring-accent-600 group-hover:shadow-md group-hover:animate-wiggle">
        {icon}
      </span>
      <span className="text-xs font-semibold text-accent-900 leading-tight">{label}</span>
    </div>
  );
}

function RecycleChip() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 19l-3-3 3-3" />
      <path d="M4 16h11a4 4 0 0 0 0-8h-1" />
      <path d="M17 5l3 3-3 3" />
      <path d="M20 8H9a4 4 0 0 0 0 8h1" />
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
function ShieldIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="13" r="8" />
      <path d="M12 8v5l3 2M9 2h6" />
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
function CashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  );
}
function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-accent-600">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}
