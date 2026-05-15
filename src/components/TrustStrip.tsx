"use client";

import { useEffect, useRef, useState } from "react";

type Item = {
  end?: number;
  prefix?: string;
  suffix?: string;
  text?: string;
  v: string;
  sub: string;
  accent: "gold" | "navy";
  icon: React.ReactNode;
};

const items: Item[] = [
  { end: 10, suffix: "K+", v: "Pickups completed", sub: "Across Hyderabad", accent: "gold", icon: <TruckIcon /> },
  { text: "Same-day", v: "Pickup in most areas", sub: "Within hours, not days", accent: "navy", icon: <ClockIcon /> },
  { end: 100, suffix: "%", v: "Transparent weighing", sub: "Digital scale on site", accent: "gold", icon: <ScaleIcon /> },
  { text: "On-the-spot", v: "Cash, UPI or transfer", sub: "Pick your channel", accent: "navy", icon: <CashIcon /> }
];

const TONE = {
  gold: {
    iconBg: "from-accent-400 to-accent-600",
    cardBg: "from-accent-50 via-white to-white",
    ring: "ring-accent-200",
    text: "from-accent-500 to-accent-700",
    chip: "bg-accent-100 text-accent-800 ring-accent-200",
    glow: "from-accent-300/40 to-accent-500/30",
    bar: "bg-gradient-to-r from-accent-400 to-accent-600",
    starColor: "text-accent-500"
  },
  navy: {
    iconBg: "from-brand-500 to-brand-800",
    cardBg: "from-brand-50 via-white to-white",
    ring: "ring-brand-200",
    text: "from-brand-600 to-brand-900",
    chip: "bg-brand-100 text-brand-800 ring-brand-200",
    glow: "from-brand-300/40 to-brand-500/30",
    bar: "bg-gradient-to-r from-brand-500 to-brand-800",
    starColor: "text-brand-700"
  }
};

export default function TrustStrip() {
  const ref = useRef<HTMLElement>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const trigger = () => setActive(true);

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          trigger();
          io.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(el);

    const onScroll = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) {
        trigger();
        window.removeEventListener("scroll", onScroll);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-ink-100 bg-gradient-to-b from-white via-brand-50/40 to-white"
    >
      <div className="pointer-events-none absolute -top-24 left-1/4 h-56 w-56 rounded-full bg-accent-200/40 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-56 w-56 rounded-full bg-brand-200/40 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:radial-gradient(rgb(15_28_54)_1px,transparent_1px)] [background-size:22px_22px]" />

      <div className="relative container py-12 md:py-16">
        <div className="text-center mb-8 md:mb-10">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-800 ring-1 ring-brand-200 animate-float">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            Why customers choose us
          </span>
          <p className="mt-3 text-sm md:text-base text-ink-600 max-w-xl mx-auto">
            Numbers, not promises — what every pickup looks like.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5">
          {items.map((i, idx) => {
            const tone = TONE[i.accent];
            return (
              <div
                key={i.v}
                className={`group relative h-full reveal-from-left delay-${idx + 1} ${active ? "is-visible" : ""}`}
              >
                <div className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${tone.cardBg} ring-1 ${tone.ring} pl-5 pr-4 pt-5 pb-5 shadow-sm transition-all duration-500 hover:-translate-y-1.5 hover:shadow-2xl`}>
                  {/* Left ribbon */}
                  <span className={`pointer-events-none absolute inset-y-0 left-0 w-1 ${tone.bar}`} />
                  {/* Top corner gradient blob */}
                  <span className={`pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-gradient-to-br ${tone.glow} opacity-60 group-hover:opacity-100 blur-2xl transition duration-500`} />
                  {/* Live dot top-right */}
                  <span className="pointer-events-none absolute top-3 right-3 flex h-2 w-2 items-center justify-center">
                    <span className={`absolute h-2 w-2 rounded-full ${tone.bar} opacity-70 animate-ping`} />
                    <span className={`relative h-1.5 w-1.5 rounded-full ${tone.bar}`} />
                  </span>

                  <div className="relative flex items-start gap-3">
                    {/* Icon */}
                    <span className={`grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${tone.iconBg} text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                      {i.icon}
                    </span>
                    <div className="min-w-0">
                      <div className={`text-[10px] font-bold uppercase tracking-wider ${i.accent === "gold" ? "text-accent-700" : "text-brand-700"} mb-0.5`}>
                        {i.v}
                      </div>
                      <div className={`text-2xl md:text-3xl font-extrabold tracking-tight bg-gradient-to-r ${tone.text} bg-clip-text text-transparent !leading-[1.15] whitespace-nowrap`}>
                        {i.end !== undefined ? (
                          <CountUp end={i.end} suffix={i.suffix} prefix={i.prefix} active={active} delayMs={idx * 150} />
                        ) : (
                          i.text
                        )}
                      </div>
                    </div>
                  </div>

                  <p className="relative mt-3 text-xs md:text-sm text-ink-600 leading-snug">
                    {i.sub}
                  </p>

                  {/* Mini meter */}
                  <div className="relative mt-3 h-1.5 w-full overflow-hidden rounded-full bg-ink-100">
                    <div
                      className={`h-full rounded-full ${tone.bar} transition-[width] duration-1000 ease-out`}
                      style={{ width: active ? "92%" : "0%" }}
                    />
                  </div>

                  <div className="relative mt-3 flex items-center justify-between border-t border-ink-100 pt-2.5">
                    <span className={`inline-flex items-center gap-1 ${tone.starColor}`}>
                      {Array.from({ length: 5 }).map((_, k) => (
                        <svg key={k} width="11" height="11" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2l2.9 6.9 7.4.6-5.6 4.9 1.7 7.3L12 17.8 5.6 21.7l1.7-7.3L1.7 9.5l7.4-.6L12 2z" />
                        </svg>
                      ))}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-ink-500">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="text-accent-500">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      Verified
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CountUp({
  end,
  prefix = "",
  suffix = "",
  duration = 1400,
  delayMs = 0,
  active
}: {
  end: number;
  prefix?: string;
  suffix?: string;
  duration?: number;
  delayMs?: number;
  active: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!active) return;
    let interval = 0;
    const startTimer = window.setTimeout(() => {
      const startedAt = Date.now();
      interval = window.setInterval(() => {
        const elapsed = Date.now() - startedAt;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(end * eased));
        if (progress >= 1) window.clearInterval(interval);
      }, 30);
    }, delayMs);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(interval);
    };
  }, [active, end, duration, delayMs]);

  return (
    <>
      {prefix}
      {value}
      {suffix}
    </>
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
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function ScaleIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3v18" />
      <path d="M5 21h14" />
      <path d="M5 6h14" />
      <path d="M5 6l-3 6a4 4 0 0 0 8 0L7 6" />
      <path d="M19 6l-3 6a4 4 0 0 0 8 0l-3-6" />
    </svg>
  );
}
function CashIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <circle cx="12" cy="12" r="3" />
      <path d="M6 10v.01M18 14v.01" />
    </svg>
  );
}
