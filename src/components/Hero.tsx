"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import LocationLottie from "@/components/LocationLottie";
import RotatingWords from "@/components/RotatingWords";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryHref?: string;
  primaryLabel?: string;
  rotatePrefix?: string;
  rotateWords?: string[];
  rotateSuffix?: string;
};

export default function Hero({
  eyebrow,
  title,
  subtitle,
  primaryHref = "/pickup-request",
  primaryLabel = "Request Free Pickup",
  rotatePrefix,
  rotateWords,
  rotateSuffix
}: Props) {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
        <div className="absolute -top-40 -right-32 h-[34rem] w-[34rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="absolute -top-32 left-1/4 h-[28rem] w-[28rem] rounded-full bg-accent-200/50 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-[32rem] w-[32rem] rounded-full bg-brand-200/50 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-[26rem] w-[26rem] rounded-full bg-accent-200/40 blur-3xl" />
      </div>

      <div className="container py-14 md:py-24 grid gap-10 lg:grid-cols-2 items-center">
        <div>
          <div className="flex items-center gap-3 flex-wrap animate-fade-up">
            {eyebrow && <span className="chip">{eyebrow}</span>}
            <LocationLottie className="w-12 h-12" />
          </div>
          <h1 className="heading-1 mt-3 animate-fade-up animate-fade-up-1">
            {rotateWords && rotateWords.length > 0 ? (
              <>
                {rotatePrefix}
                <RotatingWords words={rotateWords} />
                {rotateSuffix}
              </>
            ) : (
              <>
                {title.split(" — ")[0]}
                {title.includes(" — ") && (
                  <>
                    {" — "}
                    <span className="gradient-text">{title.split(" — ")[1]}</span>
                  </>
                )}
              </>
            )}
          </h1>
          {subtitle && <p className="lead mt-4 max-w-xl animate-fade-up animate-fade-up-2">{subtitle}</p>}

          <div className="mt-7 flex flex-wrap gap-3 animate-fade-up animate-fade-up-3">
            <Link href={primaryHref} className="btn-primary">{primaryLabel}</Link>
            <a href={telLink()} className="btn-secondary">Call {SITE.phoneDisplay}</a>
            <a href={whatsappLink("Hi, I want to sell my scrap / used items.")} className="btn-whatsapp">WhatsApp Now</a>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-ink-700 max-w-md animate-fade-up animate-fade-up-4">
            <li className="flex items-center gap-2"><LocationLottie src="/lottie/location-pin.json" hoverPlay className="w-6 h-6 shrink-0" /> Free pickup across {SITE.city}</li>
            <li className="flex items-center gap-2"><LocationLottie src="/lottie/location-pin.json" hoverPlay className="w-6 h-6 shrink-0" /> On-the-spot cash payment</li>
            <li className="flex items-center gap-2"><LocationLottie src="/lottie/location-pin.json" hoverPlay className="w-6 h-6 shrink-0" /> Transparent digital weighing</li>
            <li className="flex items-center gap-2"><LocationLottie src="/lottie/location-pin.json" hoverPlay className="w-6 h-6 shrink-0" /> Bulk and shut-down lots</li>
          </ul>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border border-ink-100 bg-white shadow-2xl shadow-ink-900/10 overflow-hidden grid grid-cols-2 grid-rows-2 gap-2 p-2">
            <Tile label="Scrap" tone="from-transparent to-transparent" />
            <Tile label="Furniture" tone="from-transparent to-transparent" />
            <Tile label="AC Units" tone="from-transparent to-transparent" />
            <Tile label="Generators" tone="from-transparent to-transparent" />
          </div>
          <div className="absolute -top-5 -right-5 hidden md:block rounded-xl bg-gradient-to-br from-accent-500 to-accent-600 text-white p-4 shadow-lg">
            <div className="text-xs opacity-90">Best price</div>
            <div className="font-semibold">Guaranteed</div>
          </div>
          <LocationLottie className="absolute -bottom-6 -left-6 hidden md:block w-28 h-28 lg:w-36 lg:h-36 drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
}

function Check({ color = "text-brand-600" }: { color?: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${color} mt-0.5 shrink-0`}>
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Tile({ label, tone }: { label: string; tone: string }) {
  const imageMap: Record<string, string[]> = {
    "Scrap": ["/images/s1.jpg", "/images/s2.jpg", "/images/s3.jpg"],
    "Furniture": ["/images/fun1.jpg", "/images/fun2.jpg", "/images/fun3.jpg"],
    "AC Units": ["/images/ac1.jpg", "/images/ac2.jpg", "/images/ac3.jpg"],
    "Generators": ["/images/gen1.jpg", "/images/gen2.jpg", "/images/gen3.jpg"],
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const images = imageMap[label] || [];

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={`group relative bg-gradient-to-br ${tone} rounded-3xl overflow-hidden h-full flex flex-col justify-between p-6 transition-all duration-300 hover:shadow-2xl hover:scale-105 cursor-pointer`}>
      {/* Image Carousel Background */}
      <div className="absolute inset-0 overflow-hidden">
        {images.length > 0 && images.map((img, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-700 ${
              idx === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img}
              alt={`${label} ${idx + 1}`}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>
        ))}
      </div>

      {/* Dark Gradient Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-black/10 to-transparent" />

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white drop-shadow-lg">{label}</h3>

        {/* Image Indicators */}
        {images.length > 1 && (
          <div className="flex gap-1.5 mt-4">
            {images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? "bg-white w-6"
                    : "bg-white/50 w-1.5"
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
