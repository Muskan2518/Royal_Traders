"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/scrap", label: "Scrap" },
  { href: "/scrap-buyers-hyderabad", label: "Dismantling Works" },
  { href: "/old-furniture-buyers-hyderabad", label: "Furniture" },
  { href: "/office-furniture-buyers-hyderabad", label: "Office" },
  { href: "/ac-buyers-hyderabad", label: "AC" },
  { href: "/generator-buyers-hyderabad", label: "Generator" },
  { href: "/areas", label: "Areas" },
  { href: "/contact", label: "Contact" }
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [logoOpen, setLogoOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!logoOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLogoOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [logoOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm">
      {/* Top utility bar */}
      <div className="bg-brand-900 text-white text-xs">
        <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 flex flex-wrap items-center justify-between gap-2 py-2">
          <span className="flex items-center gap-2">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-400" />
            Free pickup across {SITE.city} • On-the-spot cash payment
          </span>
          <div className="flex gap-4">
            <a href={telLink()} className="hover:text-brand-200 transition">
              <span className="hidden sm:inline">📞 </span>Call: {SITE.phoneDisplay}
            </a>
            <a
              href={whatsappLink("Hi, I want to sell my scrap / used items.")}
              className="hover:text-accent-300 transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b border-ink-100 bg-gradient-to-r from-white via-brand-50/20 to-white backdrop-blur supports-[backdrop-filter]:bg-white/90">
        <div className="w-full max-w-[1600px] mx-auto px-3 md:px-4 lg:px-6 flex items-center justify-between gap-4 py-2">
          <div className="flex items-center gap-2 shrink-0">
            <button
              type="button"
              onClick={() => setLogoOpen(true)}
              aria-label={`View ${SITE.name} logo`}
              className="block shrink-0 rounded-md focus:outline-none focus:ring-2 focus:ring-brand-500"
            >
              <Image
                src="/images/logo.png"
                alt={`${SITE.name} logo`}
                width={180}
                height={180}
                priority
                className="h-16 w-16 md:h-20 md:w-20 object-contain transition-transform hover:scale-105"
              />
            </button>
            <Link
              href="/"
              className="hidden sm:flex items-baseline gap-1.5 font-[family-name:var(--font-cinzel)] leading-none tracking-[0.08em] whitespace-nowrap"
              aria-label={`${SITE.name} — Home`}
            >
              <span className="text-base md:text-lg font-black text-[#0f1c36]">ROYAL</span>
              <span className="text-base md:text-lg font-black text-[#c9a449]">TRADERS</span>
            </Link>
          </div>

          <nav className="hidden lg:flex items-center gap-0 xl:gap-0.5 2xl:gap-1 mx-auto">
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`relative px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium transition whitespace-nowrap ${
                    active
                      ? "text-brand-800 bg-brand-50 ring-1 ring-brand-200"
                      : "text-ink-700 hover:text-brand-800 hover:bg-brand-50"
                  }`}
                >
                  {n.label}
                </Link>
              );
            })}
            <Link
              href="/pickup-request"
              className="relative px-1.5 lg:px-2 xl:px-2.5 py-2 rounded-lg text-[12px] xl:text-[13px] 2xl:text-sm font-medium transition whitespace-nowrap text-ink-700 hover:text-brand-800 hover:bg-brand-50"
            >
              Pickup
            </Link>
          </nav>

          <div className="flex items-center gap-2 shrink-0">
            <button
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="lg:hidden p-2 text-ink-900 rounded-md hover:bg-ink-100"
              onClick={() => setOpen((v) => !v)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                {open ? (
                  <path d="M6 6l12 12M6 18L18 6" />
                ) : (
                  <>
                    <path d="M3 6h18" />
                    <path d="M3 12h18" />
                    <path d="M3 18h18" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Logo lightbox */}
      {logoOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${SITE.name} logo`}
          onClick={() => setLogoOpen(false)}
          className="fixed inset-0 z-[60] grid place-items-center bg-black/70 backdrop-blur-sm p-6 animate-fade-up"
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setLogoOpen(false)}
            className="absolute top-4 right-4 grid h-10 w-10 place-items-center rounded-full bg-white/90 text-ink-900 shadow-lg hover:bg-white"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
              <path d="M6 6l12 12M6 18L18 6" />
            </svg>
          </button>
          <Image
            src="/images/logo.png"
            alt={`${SITE.name} logo`}
            width={800}
            height={800}
            onClick={(e) => e.stopPropagation()}
            className="max-h-[80vh] max-w-[90vw] w-auto h-auto rounded-2xl bg-white shadow-2xl p-6 animate-pop-in"
          />
        </div>
      )}

      {/* Mobile menu */}
      {open && (
        <div className="xl:hidden border-t border-ink-100 bg-gradient-to-b from-white to-brand-50 shadow-lg">
          <div className="container flex flex-col py-3">
            {NAV.map((n) => {
              const active = isActive(n.href);
              return (
                <Link
                  key={n.href}
                  href={n.href}
                  className={`py-2.5 px-3 text-sm font-medium rounded-md transition ${
                    active
                      ? "bg-brand-700 text-white shadow-sm"
                      : "text-ink-800 hover:text-brand-800 hover:bg-brand-50"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {n.label}
                </Link>
              );
            })}
            <div className="mt-3">
              <a href={telLink()} className="btn-outline w-full">
                Call
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
