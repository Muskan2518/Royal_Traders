"use client";

import { useState } from "react";
import { faqs as defaultFaqs, type FAQ as FAQType } from "@/data/faqs";

const ACCENT_RING = [
  "ring-accent-200 hover:ring-accent-300",
  "ring-accent-200 hover:ring-accent-300",
  "ring-brand-200 hover:ring-brand-300",
  "ring-accent-200 hover:ring-accent-300",
  "ring-brand-200 hover:ring-brand-300",
  "ring-brand-200 hover:ring-brand-300",
  "ring-accent-200 hover:ring-accent-300"
];

const ACCENT_BG = [
  "from-accent-100 to-accent-50",
  "from-accent-100 to-accent-50",
  "from-brand-100 to-brand-50",
  "from-accent-100 to-accent-50",
  "from-brand-100 to-brand-50",
  "from-brand-100 to-brand-50",
  "from-accent-100 to-accent-50"
];

const ACCENT_ICON = [
  "from-accent-400 to-accent-500",
  "from-accent-400 to-accent-500",
  "from-brand-400 to-brand-500",
  "from-accent-400 to-accent-500",
  "from-brand-400 to-brand-500",
  "from-brand-400 to-brand-500",
  "from-accent-400 to-accent-500"
];

export default function FAQ({ faqs = defaultFaqs }: { faqs?: FAQType[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative py-10 md:py-14 bg-gradient-to-b from-white via-accent-50/30 to-white overflow-hidden">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="relative w-full max-w-4xl mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            Got Questions?
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight animate-fade-up animate-fade-up-1">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-accent-500 via-brand-500 to-brand-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
              Questions
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-ink-600 animate-slide-right" style={{ animationDelay: "0.4s" }}>
            Everything you need to know before scheduling a pickup.
          </p>
        </div>

        <div className="mt-10 grid gap-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            const ringCls = ACCENT_RING[i % ACCENT_RING.length];
            const bgCls = ACCENT_BG[i % ACCENT_BG.length];
            const iconCls = ACCENT_ICON[i % ACCENT_ICON.length];
            return (
              <div
                key={f.q}
                className={`group rounded-2xl bg-white shadow-sm ring-1 transition-all duration-300 animate-fade-up overflow-hidden ${ringCls} ${
                  isOpen ? "shadow-lg" : "hover:shadow-md hover:-translate-y-0.5"
                }`}
                style={{ animationDelay: `${0.3 + i * 0.08}s`, animationFillMode: "both" }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full text-left px-5 py-4 focus:outline-none focus:ring-2 focus:ring-accent-300 focus:rounded-2xl"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3 flex-1 min-w-0">
                      <span
                        className={`hidden md:grid shrink-0 h-9 w-9 place-items-center rounded-xl bg-gradient-to-br ${iconCls} text-white text-xs font-extrabold shadow-md ring-2 ring-white transition-transform duration-300 ${
                          isOpen ? "scale-110 rotate-3" : "group-hover:scale-105"
                        }`}
                      >
                        Q{i + 1}
                      </span>
                      <span className={`font-bold text-base md:text-lg leading-tight transition-colors ${isOpen ? "text-ink-950" : "text-ink-900"}`}>
                        {f.q}
                      </span>
                    </div>
                    <span
                      className={`grid h-9 w-9 shrink-0 place-items-center rounded-full bg-gradient-to-br ${iconCls} text-white shadow transition-all duration-300 ${
                        isOpen ? "rotate-45 scale-110" : "group-hover:scale-105"
                      }`}
                      aria-hidden
                    >
                      <PlusIcon />
                    </span>
                  </div>
                </button>
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className={`mx-5 mb-4 rounded-xl bg-gradient-to-br ${bgCls} px-4 py-3.5 text-sm md:text-[15px] text-ink-700 leading-relaxed`}>
                      {f.a}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-ink-500 animate-fade-up" style={{ animationDelay: "1s" }}>
          Still have questions?{" "}
          <a href="/contact" className="font-semibold text-accent-700 underline-offset-4 hover:underline">
            Get in touch →
          </a>
        </p>
      </div>
    </section>
  );
}

function PlusIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}
