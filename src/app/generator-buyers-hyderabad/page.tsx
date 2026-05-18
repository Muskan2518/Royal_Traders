import Image from "next/image";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import GeneratorGallery from "@/components/GeneratorGallery";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

const SLUG = "generator-buyers-hyderabad";
const service = getService(SLUG)!;

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${SLUG}`
});

export default function Page() {
  const s = getService(SLUG);
  if (!s) return notFound();
  return (
    <>
      <section className="relative pt-4 pb-3 md:pt-6 md:pb-4 bg-[#fdf8ec] overflow-hidden">
        <DotsCluster className="absolute top-3 left-1/3 text-[#ecc257] w-28 h-8" />

        <div className="container grid items-center gap-4 lg:gap-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
          <div className="self-center min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#fdf8ec] px-3 py-1 text-xs font-semibold text-[#0f1c36] ring-1 ring-[#ecc257] animate-fade-up animate-float">
              <BoltIcon className="h-3.5 w-3.5" /> Generators
            </span>

            <h1 className="mt-3 text-2xl md:text-3xl lg:text-[2rem] xl:text-[2.25rem] font-extrabold tracking-tight leading-[1.05] text-[#070f22] animate-fade-up animate-fade-up-1">
              Buyers of All Types of Used Generators{" "}
              <span className="font-serif italic relative text-[#070f22]">
                in {SITE.city}
                <svg
                  className="absolute -bottom-1.5 left-0 w-full h-2 text-accent-500"
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
              </span>
            </h1>

            <div className="mt-3 flex gap-2.5 max-w-xl animate-fade-up animate-fade-up-2">
              <span className="w-1 rounded-full bg-[#0f1c36] shrink-0 self-stretch" />
              <p className="text-sm md:text-base text-[#475569]">
                Old, used, and scrap generator buyers. Diesel, kerosene, silent, and industrial sets across all kVA ranges.
              </p>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-2xl">
              <Feature icon={<TagIcon />} label="Best Prices" delay={1} />
              <Feature icon={<GenUnitIcon />} label="All Types & Brands" delay={2} />
              <Feature icon={<TruckIcon />} label="Quick Pickup Service" delay={3} />
              <Feature icon={<ShieldIcon />} label="Safe & Hassle Free" delay={4} />
            </div>

            <div className="mt-4 flex flex-wrap gap-2.5 animate-fade-up animate-fade-up-4">
              <a
                href={telLink()}
                className="relative inline-flex items-center gap-2 rounded-xl bg-[#0f1c36] px-5 py-2.5 text-white text-sm font-semibold shadow-md hover:bg-[#070f22] hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to sell a generator.")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-[#0f1c36] ring-2 ring-[#0f1c36]/30 hover:bg-[#fdf8ec]/40 hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon className="text-accent-500" /> WhatsApp Us
              </a>
            </div>

            <div className="mt-4 inline-flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-white/70 ring-1 ring-[#ecc257] px-3 py-2 max-w-2xl w-full animate-fade-up animate-fade-up-4">
              <div className="flex items-center gap-2 text-xs text-[#0f1c36]">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-[#fdf8ec] text-[#0f1c36]">
                  <PeopleIcon />
                </span>
                Trusted by 1000+ Customers in {SITE.city}
              </div>
              <div className="flex items-center gap-1.5 text-xs font-bold text-[#0f1c36]">
                <Stars />
                4.8/5
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-white shadow-xl ring-1 ring-[#ecc257]">
              <Image
                src="/images/gen-hero.jpg"
                alt="Generator buyers in Hyderabad"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 28rem"
                className="object-cover"
              />
            </div>

            <div className="absolute top-3 right-3 inline-flex items-center gap-2.5 rounded-2xl bg-[#0f1c36] text-white px-3 py-2 shadow-xl ring-2 ring-accent-400/40 animate-float">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-accent-400 text-[#0f1c36] shadow-md">
                <CashHandIcon />
              </span>
              <span className="leading-tight">
                <span className="block text-sm font-bold">Instant Cash</span>
                <span className="block text-[10px] opacity-90">for Your Generator</span>
                <span className="block mt-1 h-0.5 w-10 bg-accent-400 rounded-full" />
              </span>
            </div>

            <div className="mt-2 grid grid-cols-2 sm:grid-cols-4 gap-1 rounded-2xl bg-[#0f1c36] text-white px-2 py-2 shadow-md">
              <FeatureChip icon={<BoltIcon className="h-4 w-4" />} label="Diesel, Kerosene, Silent" />
              <FeatureChip icon={<GearIcon />} label="All kVA Ranges" />
              <FeatureChip icon={<GenUnitIcon />} label="Old, Used & Scrap" />
              <FeatureChip icon={<HandRupeeIcon />} label="Instant Payment" />
            </div>
          </div>
        </div>
      </section>
      <GeneratorGallery />
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
    <div className={`group flex flex-col items-center text-center gap-1.5 cursor-default animate-pop-in animate-pop-in-${delay}`}>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-[#fdf8ec] text-[#0f1c36] transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-md group-hover:animate-wiggle">
        {icon}
      </span>
      <span className="text-[11px] font-bold text-[#070f22] leading-tight">{label}</span>
    </div>
  );
}

function FeatureChip({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-1 px-1 border-r border-white/15 last:border-r-0">
      <span className="text-accent-400">{icon}</span>
      <span className="text-[10px] font-semibold leading-tight">{label}</span>
    </div>
  );
}

function DotsCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-10 gap-1.5 pointer-events-none ${className}`} aria-hidden>
      {Array.from({ length: 30 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-current" />
      ))}
    </div>
  );
}

function BoltIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 11-13h-8z" />
    </svg>
  );
}
function TagIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.59 13.41 13.41 20.59a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" />
    </svg>
  );
}
function GenUnitIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="13" rx="2" />
      <path d="M7 10h2M11 10h2M15 10h2M7 14h10" />
    </svg>
  );
}
function TruckIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M1 3h15v13H1z" />
      <path d="M16 8h4l3 3v5h-7" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
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
function GearIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}
function HandRupeeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 4h7M9 8h7M9 12h4a3 3 0 0 0 0-6M11 16l-2-2" />
      <path d="M3 21l2-3 4-1 5 3 7-3" />
    </svg>
  );
}
function CashHandIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="6" y="4" width="14" height="9" rx="1.5" />
      <circle cx="13" cy="8.5" r="2" />
      <path d="M3 21l2-3 4-1 5 3 7-3" />
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
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .14 5.36.14 11.94a11.9 11.9 0 0 0 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.55 0 11.92-5.36 11.92-11.94 0-3.18-1.24-6.18-3.47-8.41Z" />
    </svg>
  );
}
function PeopleIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="9" cy="8" r="3" />
      <path d="M3 20c.5-3 3-5 6-5s5.5 2 6 5" />
      <circle cx="17" cy="9" r="2.5" />
      <path d="M14 14c1-.5 2-.7 3-.7 2.5 0 4.5 2 5 5" />
    </svg>
  );
}
function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-accent-500">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}
