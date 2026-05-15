"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RotatingWords from "@/components/RotatingWords";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

export default function HomeHero() {
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const tick = setInterval(() => {
      setImgIdx((i) => (i + 1) % 5);
    }, 3000);
    return () => clearInterval(tick);
  }, []);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-brand-50/40 to-brand-50/30">
      <DotsPattern className="absolute top-4 left-2 hidden md:block" />
      <DotsPattern className="absolute bottom-10 right-6 hidden md:block opacity-40" />
      <WaveDecoration className="absolute -bottom-2 -left-2 w-44 h-44 text-brand-100 opacity-60 pointer-events-none" />

      <div className="w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 py-4 md:py-6 grid gap-5 lg:gap-8 lg:grid-cols-[1.05fr_1fr] items-center">
        {/* LEFT */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-50/80 px-3 py-1.5 text-xs md:text-sm font-medium text-brand-800 ring-1 ring-brand-100 animate-fade-up">
            <SparkleIcon className="h-3.5 w-3.5 text-brand-600" />
            <span>Trusted by 5000+ customers in {SITE.city}</span>
            <PinIcon className="h-3.5 w-3.5 text-accent-500" />
          </div>

          <h1 className="mt-4 font-extrabold tracking-tight leading-[1.2] text-2xl sm:text-3xl md:text-4xl lg:text-[2.5rem] xl:text-[3rem] animate-fade-up animate-fade-up-1">
            <span className="block text-ink-900">Sell Your</span>
            <span className="block relative w-fit max-w-full mt-1 pr-6 overflow-visible">
              <RotatingWords
                words={[
                  "Old AC Units",
                  "Used Furniture",
                  "Old Generators",
                  "Scrap Metal",
                  "Office Lots"
                ]}
                wordClassName="bg-gradient-to-r from-brand-500 via-brand-500 to-brand-600 bg-clip-text text-transparent leading-[1.2]"
              />
              <SparkleIcon className="absolute -top-1 right-0 h-5 w-5 text-brand-400 rotate-12" />
            </span>
            <span className="block text-ink-900 mt-1">Fast, Easy &</span>
            <span className="block relative mt-1">
              <span className="relative inline-block bg-gradient-to-r from-accent-500 to-accent-700 bg-clip-text text-transparent">
                Best Price
                <UnderlineSwoosh className="absolute -bottom-2 left-0 w-full h-2.5 text-brand-500" />
              </span>
              <span className="text-ink-900"> Guaranteed!</span>
            </span>
          </h1>

          <p className="mt-4 text-sm md:text-base text-ink-600 max-w-2xl animate-fade-up animate-fade-up-2">
            Free pickup, transparent weighing &amp; instant payment.<br className="hidden sm:block" />
            From a single sofa to a complete office shut-down, we handle it all.
          </p>

          <div className="mt-4 flex flex-col sm:flex-row gap-2.5 animate-fade-up animate-fade-up-3">
            <Link
              href="/pickup-request"
              className="flex items-center gap-2.5 rounded-xl bg-brand-600 px-4 py-2.5 text-white shadow-md shadow-brand-600/30 hover:bg-brand-700 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/20">
                <TruckIcon />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold leading-tight">Request Free Pickup</span>
                <span className="block text-[11px] opacity-90">Quick &amp; Hassle-Free</span>
              </span>
            </Link>

            <a
              href={telLink()}
              className="flex items-center gap-2.5 rounded-xl bg-ink-900 px-4 py-2.5 text-white shadow-md hover:bg-ink-800 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/15">
                <PhoneIcon />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold leading-tight">Call Now</span>
                <span className="block text-[11px] opacity-90">{SITE.phoneDisplay}</span>
              </span>
            </a>

            <a
              href={whatsappLink("Hi, I want to sell my scrap / used items.")}
              className="flex items-center gap-2.5 rounded-xl bg-accent-500 px-4 py-2.5 text-white shadow-md shadow-accent-500/30 hover:bg-accent-600 transition"
            >
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-white/25">
                <WhatsAppIcon />
              </span>
              <span className="text-left">
                <span className="block text-sm font-bold leading-tight">WhatsApp Now</span>
                <span className="block text-[11px] opacity-90">Chat on WhatsApp</span>
              </span>
            </a>
          </div>

          <div className="mt-4 flex items-center justify-between gap-4 rounded-2xl border border-ink-100 bg-white/95 backdrop-blur px-3 py-2.5 shadow-md max-w-md animate-fade-up animate-fade-up-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-full bg-gradient-to-br from-accent-400 to-accent-500 text-white shadow">
                <StarIcon />
              </span>
              <div className="leading-tight">
                <div className="text-sm font-bold text-ink-900">4.9/5 Rating</div>
                <div className="text-[10px] text-ink-500">from 1200+ Happy Customers</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-0.5 text-accent-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="rounded-full bg-brand-100 px-2 py-0.5 text-[11px] font-bold text-brand-800 ring-1 ring-brand-200">
                1.2K+
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT — 2x2 grid */}
        <div className="relative">
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <CategoryCard
              href="/scrap-buyers-hyderabad"
              tone="from-brand-700 via-brand-800 to-brand-950"
              icon={<RecycleIcon />}
              title="Scrap"
              desc="All types of metal & electrical scrap"
              images={["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg", "/images/s4.jpg", "/images/s5.jpg"]}
              idx={imgIdx}
            />
            <div className="relative">
              <CategoryCard
                href="/old-furniture-buyers-hyderabad"
                tone="from-accent-600 via-accent-700 to-accent-900"
                icon={<SofaIcon />}
                title="Furniture"
                desc="Old furniture, sofas, tables & more"
                images={["/images/fun1.jpg", "/images/fun2.jpg", "/images/fun3.jpg", "/images/fun4.jpg", "/images/fun5.jpg"]}
                idx={imgIdx}
              />
              <BestPriceBadge className="pointer-events-none absolute -top-4 -right-4 z-20 h-20 w-20 lg:h-24 lg:w-24 rotate-[10deg] drop-shadow-xl" />
            </div>
            <CategoryCard
              href="/ac-buyers-hyderabad"
              tone="from-brand-700 via-brand-800 to-brand-900"
              icon={<SnowflakeIcon />}
              title="AC Units"
              desc="Window AC, Split AC, VRV, Chillers & more"
              images={["/images/ac1.jpg", "/images/ac2.jpg", "/images/ac3.jpg", "/images/ac4.jpg", "/images/ac5.jpg"]}
              idx={imgIdx}
            />
            <CategoryCard
              href="/generator-buyers-hyderabad"
              tone="from-accent-500 via-accent-600 to-accent-800"
              icon={<BoltIcon />}
              title="Generators"
              desc="All types of generators buying at best price"
              images={["/images/gen1.jpg", "/images/gen2.jpg", "/images/gen3.jpg", "/images/gen4.jpg", "/images/gen5.jpg"]}
              idx={imgIdx}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({
  icon,
  tone,
  k,
  v
}: {
  icon: React.ReactNode;
  tone: string;
  k: string;
  v: string;
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${tone} text-white shadow`}>
        {icon}
      </span>
      <div className="leading-tight min-w-0">
        <div className="text-sm font-bold text-ink-900 truncate">{k}</div>
        <div className="text-[10px] text-ink-500 truncate">{v}</div>
      </div>
    </div>
  );
}

function CategoryCard({
  href,
  tone,
  icon,
  title,
  desc,
  images,
  idx
}: {
  href: string;
  tone: string;
  icon: React.ReactNode;
  title: string;
  desc: string;
  images: string[];
  idx: number;
}) {
  const activeIdx = idx % images.length;

  return (
    <Link
      href={href}
      className={`group relative block overflow-hidden rounded-2xl bg-gradient-to-br ${tone} aspect-[4/3] min-h-[8rem] shadow-lg shadow-ink-900/10 transition hover:-translate-y-1 hover:shadow-xl`}
    >
      <span className="absolute inset-0 z-0">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={title}
            fill
            sizes="(max-width: 1024px) 50vw, 240px"
            className={`object-cover transition-opacity duration-700 ease-in-out group-hover:scale-105 ${
              i === activeIdx ? "opacity-65 group-hover:opacity-75" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      <span className="absolute top-0 inset-x-0 z-10 flex items-center gap-2.5 p-3">
        <span className="grid h-9 w-9 place-items-center rounded-full bg-white text-ink-900 shadow ring-1 ring-black/5">
          {icon}
        </span>
        <span className="text-base md:text-lg font-extrabold text-white drop-shadow">{title}</span>
      </span>

      <span className="absolute inset-x-0 bottom-0 z-10 p-3 flex items-end justify-between gap-2">
        <span className="text-[11px] md:text-xs font-medium text-white/95 leading-snug max-w-[70%] drop-shadow">
          {desc}
        </span>
        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-white text-ink-900 shadow-md group-hover:bg-accent-400 transition">
          <ArrowRightIcon />
        </span>
      </span>
    </Link>
  );
}

/* ----------- Icons ----------- */

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

function PhoneIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}

function WhatsAppIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.06 0C5.5 0 .14 5.36.14 11.94a11.9 11.9 0 0 0 1.6 5.96L0 24l6.27-1.65a11.9 11.9 0 0 0 5.79 1.48h.01c6.55 0 11.92-5.36 11.92-11.94 0-3.18-1.24-6.18-3.47-8.41ZM12.07 21.8h-.01a9.86 9.86 0 0 1-5.03-1.38l-.36-.21-3.72.98.99-3.62-.23-.37A9.85 9.85 0 0 1 2.16 11.95c0-5.45 4.43-9.88 9.91-9.88a9.83 9.83 0 0 1 7.01 2.9 9.85 9.85 0 0 1 2.91 7c0 5.45-4.45 9.83-9.92 9.83Zm5.43-7.4c-.3-.15-1.76-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.78.97-.95 1.17-.18.2-.35.22-.65.07-.3-.15-1.27-.47-2.41-1.49a9.06 9.06 0 0 1-1.67-2.09c-.18-.3-.02-.47.13-.62.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.92-2.18-.24-.57-.49-.5-.66-.5l-.57-.01a1.1 1.1 0 0 0-.8.37c-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.13 3.27 5.16 4.58.72.31 1.28.5 1.72.64.72.23 1.38.2 1.9.12.58-.09 1.76-.72 2.01-1.42.25-.7.25-1.3.18-1.42-.07-.12-.27-.2-.57-.35Z" />
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

function CashIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01M18 14v.01" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M5 6h14" />
      <path d="M5 6l-3 6a4 4 0 0 0 8 0L7 6" />
      <path d="M19 6l-3 6a4 4 0 0 0 8 0l-3-6" />
    </svg>
  );
}

function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
    </svg>
  );
}

function RecycleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 19l-3-3 3-3" />
      <path d="M4 16h11a4 4 0 0 0 0-8h-1" />
      <path d="M17 5l3 3-3 3" />
      <path d="M20 8H9a4 4 0 0 0 0 8h1" />
    </svg>
  );
}

function SofaIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 13a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v4H3v-4z" />
      <path d="M5 17v2M19 17v2" />
      <path d="M6 10V8a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v2" />
    </svg>
  );
}

function SnowflakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2v20M2 12h20M5 5l14 14M19 5L5 19" />
    </svg>
  );
}

function BoltIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h7l-1 8 11-13h-8z" />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 5l7 7-7 7" />
    </svg>
  );
}

function SparkleIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l1.5 6.5L20 10l-6.5 1.5L12 18l-1.5-6.5L4 10l6.5-1.5L12 2z" />
    </svg>
  );
}

function UnderlineSwoosh({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
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
  );
}

function DotsPattern({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-6 gap-2 pointer-events-none ${className}`} aria-hidden>
      {Array.from({ length: 36 }).map((_, i) => (
        <span key={i} className="h-1.5 w-1.5 rounded-full bg-brand-400/60" />
      ))}
    </div>
  );
}

function WaveDecoration({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
      <path d="M-10 120 Q40 80, 90 120 T 200 120" />
      <path d="M-10 150 Q40 110, 90 150 T 200 150" />
      <path d="M-10 180 Q40 140, 90 180 T 200 180" />
    </svg>
  );
}

function BestPriceBadge({ className = "" }: { className?: string }) {
  return (
    <div className={className}>
      <div className="relative w-full h-full">
        <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full">
          <defs>
            <radialGradient id="bp-gold" cx="50%" cy="35%" r="65%">
              <stop offset="0%" stopColor="#ecc257" />
              <stop offset="60%" stopColor="#c8902a" />
              <stop offset="100%" stopColor="#85581c" />
            </radialGradient>
          </defs>
          <polygon
            points="50,5 60,15 75,12 80,27 95,35 88,50 95,65 80,73 75,88 60,85 50,95 40,85 25,88 20,73 5,65 12,50 5,35 20,27 25,12 40,15"
            fill="url(#bp-gold)"
            stroke="#85581c"
            strokeWidth="1"
          />
        </svg>
        <div className="relative z-10 grid place-items-center w-full h-full text-center text-white px-2">
          <div className="leading-[0.95]">
            <div className="text-[9px] lg:text-[10px] font-extrabold tracking-tight drop-shadow">BEST PRICE</div>
            <div className="text-[9px] lg:text-[10px] font-extrabold tracking-tight drop-shadow">GUARANTEED</div>
            <div className="mt-0.5 text-[8px] lg:text-[9px]">★★★</div>
          </div>
        </div>
      </div>
    </div>
  );
}
