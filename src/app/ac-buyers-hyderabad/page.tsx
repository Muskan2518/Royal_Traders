import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";
import AcGallery from "@/components/AcGallery";
import LocationLottie from "@/components/LocationLottie";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

const SLUG = "ac-buyers-hyderabad";
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
      <section className="relative pt-6 pb-5 md:pt-8 md:pb-6 bg-gradient-to-br from-white via-brand-50/40 to-white overflow-hidden">
        <SnowflakeIcon className="absolute top-4 left-3 h-6 w-6 text-brand-200 animate-float" />
        <BottomWave className="absolute bottom-0 left-0 right-0 w-full h-10 text-brand-100/70 pointer-events-none" />

        <div className="container grid items-center gap-6 lg:gap-10 lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
          <div className="self-center min-w-0">
            <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-4 py-1.5 text-sm font-semibold text-brand-700 ring-1 ring-brand-100 animate-fade-up animate-float">
              <SnowflakeIcon className="h-4 w-4 text-brand-500" /> AC Buyers
            </span>

            <h1 className="mt-4 text-3xl md:text-4xl lg:text-5xl xl:text-[3.25rem] font-extrabold tracking-tight leading-[1.05] text-[#0f1c36] animate-fade-up animate-fade-up-1">
              Used & Scrap{" "}
              <span className="text-brand-600">AC Buyers</span>{" "}
              <span className="font-serif italic relative text-[#0f1c36] inline-block">
                in {SITE.city}
                <svg
                  className="absolute -bottom-2 left-0 w-full h-2.5 text-brand-500"
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

            <div className="mt-2 flex items-center gap-2 text-brand-500">
              <span className="h-0.5 w-7 bg-brand-500 rounded-full" />
              <span className="h-2 w-2 rounded-full bg-brand-500" />
            </div>

            <p className="mt-4 text-base md:text-lg text-ink-600 max-w-2xl animate-fade-up animate-fade-up-2">
              Working, non-working, and scrap ACs purchased — split, window, cassette, duct, tower, and central AC.
            </p>

            <div className="mt-5 inline-flex flex-wrap items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-md ring-1 ring-brand-100">
              <FeatureLg icon={<AcUnitIcon />} label="All Types of ACs" delay={1} />
              <Divider />
              <FeatureLg icon={<RecycleIcon />} label="Used or Scrap" delay={2} />
              <Divider />
              <FeatureLg icon={<CashStackIcon />} label="Best Price Assured" delay={3} />
              <Divider />
              <FeatureLg icon={<TruckIcon />} label="Quick Pickup Service" delay={4} />
            </div>

            <div className="mt-5 flex flex-wrap gap-3 animate-fade-up animate-fade-up-4">
              <a
                href={telLink()}
                className="relative inline-flex items-center gap-2 rounded-xl bg-[#0f1c36] px-6 py-3 text-white text-base font-semibold shadow-md hover:bg-[#070f22] hover:-translate-y-0.5 transition animate-pulse-ring"
              >
                <PhoneIcon /> Call Now
              </a>
              <a
                href={whatsappLink("Hi, I want to sell used / scrap AC.")}
                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-semibold text-[#0f1c36] ring-2 ring-[#0f1c36]/30 hover:bg-brand-50 hover:-translate-y-0.5 transition"
              >
                <WhatsAppIcon className="text-accent-500" /> WhatsApp Us
              </a>
            </div>

            <div className="mt-5 inline-flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#0f1c36] px-4 py-3 text-white shadow-md w-full max-w-xl animate-fade-up animate-fade-up-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="grid h-9 w-9 place-items-center rounded-full bg-white/10 text-white">
                  <ShieldIcon />
                </span>
                Trusted by 500+ Customers in {SITE.city}
              </div>
              <div className="flex items-center gap-2 text-sm font-bold">
                <Stars />
                4.8/5
              </div>
            </div>
          </div>

          <div className="relative w-full max-w-md mx-auto">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden bg-gradient-to-br from-brand-50 to-white shadow-xl ring-1 ring-brand-100">
              <svg
                className="absolute -top-1 -left-1 w-3/5 h-2/5 text-[#0f1c36]"
                viewBox="0 0 400 240"
                fill="currentColor"
                aria-hidden
              >
                <path d="M0 0 H400 Q260 220, 0 240 Z" />
              </svg>
              <DotsCluster className="absolute top-3 left-3 text-white/40 w-20 h-10" />

              <LocationLottie
                src="/lottie/ac.json"
                className="absolute inset-0 w-full h-full"
              />
            </div>

            <div className="absolute top-2 right-2 lg:top-3 lg:right-3 inline-flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-lg ring-1 ring-brand-100 animate-float">
              <span className="grid h-8 w-8 place-items-center rounded-full bg-brand-50 text-brand-600 ring-2 ring-dashed ring-brand-300">
                <CashIcon />
              </span>
              <span className="leading-tight border-l border-brand-100 pl-2">
                <span className="block text-xs font-bold text-[#0f1c36]">Instant Payment</span>
                <span className="block text-[10px] text-ink-500">Hassle-Free Transactions</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <AcGallery />
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
    <div className={`flex flex-col items-center text-center gap-1.5 px-2 animate-pop-in animate-pop-in-${delay}`}>
      <span className="grid h-10 w-10 place-items-center rounded-full bg-brand-600 text-white shadow">
        {icon}
      </span>
      <span className="text-[11px] font-semibold text-[#0f1c36] leading-tight max-w-[88px]">{label}</span>
    </div>
  );
}

function FeatureLg({
  icon,
  label,
  delay = 0
}: {
  icon: React.ReactNode;
  label: string;
  delay?: number;
}) {
  return (
    <div className={`flex flex-col items-center text-center gap-2 px-3 animate-pop-in animate-pop-in-${delay}`}>
      <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-600 text-white shadow-md">
        {icon}
      </span>
      <span className="text-xs font-bold text-[#0f1c36] leading-tight max-w-[100px]">{label}</span>
    </div>
  );
}

function Divider() {
  return <span className="hidden sm:block self-stretch w-px bg-brand-100" aria-hidden />;
}

function SnowflakeIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}
function AcUnitIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="6" width="18" height="9" rx="2" />
      <path d="M7 11h10M7 19l1-3M12 19l1-3M17 19l-1-3" />
    </svg>
  );
}
function RecycleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 19l-3-3 3-3" />
      <path d="M4 16h11a4 4 0 0 0 0-8h-1" />
      <path d="M17 5l3 3-3 3" />
      <path d="M20 8H9a4 4 0 0 0 0 8h1" />
    </svg>
  );
}
function CashStackIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01M18 14v.01" />
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
function CashIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
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
function DotsCluster({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-8 gap-1.5 pointer-events-none ${className}`} aria-hidden>
      {Array.from({ length: 32 }).map((_, i) => (
        <span key={i} className="h-1 w-1 rounded-full bg-current" />
      ))}
    </div>
  );
}

function BottomWave({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 1200 80"
      fill="currentColor"
      preserveAspectRatio="none"
      aria-hidden
    >
      <path d="M0 50 Q300 0, 600 40 T1200 30 V80 H0 Z" />
    </svg>
  );
}

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-accent-400">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
        </svg>
      ))}
    </span>
  );
}
