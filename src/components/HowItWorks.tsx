import LocationLottie from "@/components/LocationLottie";

const steps: Array<{
  n: string;
  title: string;
  text: string;
  accent: "gold" | "navy";
  icon: React.ReactNode;
  lottie?: string;
}> = [
  {
    n: "01",
    title: "Share details",
    text: "Send a photo and quantity on WhatsApp, call us, or fill the pickup form.",
    accent: "gold" as const,
    icon: <PhotoIcon />,
    lottie: "/lottie/take-a-photo.json"
  },
  {
    n: "02",
    title: "Get a price",
    text: "We give you an estimated quote and confirm a pickup time that suits you.",
    accent: "navy" as const,
    icon: <ChatIcon />,
    lottie: "/lottie/get-a-quote.json"
  },
  {
    n: "03",
    title: "Free pickup",
    text: "Our team arrives, weighs or inspects on-site, and handles loading.",
    accent: "gold" as const,
    icon: <TruckIcon />,
    lottie: "/lottie/transport-blue.json"
  },
  {
    n: "04",
    title: "Instant payment",
    text: "Get paid on the spot — cash, UPI, or bank transfer. No follow-up needed.",
    accent: "navy" as const,
    icon: <CashIcon />,
    lottie: "/lottie/money-hand.json"
  }
];

const TONE = {
  gold: {
    iconBg: "from-accent-400 to-accent-600",
    cardBg: "from-accent-50 via-white to-white",
    ring: "ring-accent-200",
    number: "text-accent-200/70",
    glow: "from-accent-300/50 to-accent-500/30",
    chip: "bg-accent-100 text-accent-800 ring-accent-200"
  },
  navy: {
    iconBg: "from-brand-500 to-brand-800",
    cardBg: "from-brand-50 via-white to-white",
    ring: "ring-brand-200",
    number: "text-brand-200/70",
    glow: "from-brand-300/50 to-brand-500/30",
    chip: "bg-brand-100 text-brand-800 ring-brand-200"
  }
};

export default function HowItWorks() {
  return (
    <section className="relative py-12 md:py-20 overflow-hidden bg-gradient-to-b from-white via-brand-50/40 to-white">
      <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

      <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
            How it works
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight !leading-[1.3] pb-2 animate-fade-up animate-fade-up-1">
            Sell scrap or used items in{" "}
            <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-accent-600 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift pb-1 inline-block">
              4 simple steps
            </span>
          </h2>
          <p className="mt-3 text-base md:text-lg text-ink-600 max-w-2xl mx-auto animate-slide-right" style={{ animationDelay: "0.4s" }}>
            No paperwork, no waiting, no hidden cuts. We keep it straightforward.
          </p>
        </div>

        <div className="relative mt-12 md:mt-16">
          {/* Connector line behind the cards (desktop only) */}
          <div className="hidden lg:block pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-0.5 bg-gradient-to-r from-transparent via-brand-300 to-transparent" />
          <div className="hidden lg:block pointer-events-none absolute left-[12.5%] right-[12.5%] top-[2.75rem] h-0.5 [background:repeating-linear-gradient(to_right,transparent_0,transparent_8px,rgb(15_28_54/0.25)_8px,rgb(15_28_54/0.25)_14px)]" />

          <div className="relative grid gap-6 md:gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, idx) => {
              const t = TONE[s.accent];
              return (
                <div
                  key={s.n}
                  className={`group relative h-full animate-pop-in animate-pop-in-${idx + 1}`}
                >
                  {/* Card */}
                  <div
                    className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br ${t.cardBg} ring-1 ${t.ring} shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl pt-6 pb-6 px-5`}
                  >
                    {/* Hover glow */}
                    <div className={`pointer-events-none absolute -left-12 -bottom-12 h-32 w-32 rounded-full bg-gradient-to-br ${t.glow} opacity-0 group-hover:opacity-100 blur-2xl transition duration-500`} />

                    {/* Icon */}
                    {s.lottie ? (
                      <div className="relative grid h-20 w-20 place-items-center overflow-hidden rounded-2xl bg-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110">
                        <LocationLottie src={s.lottie} className={`h-full w-full ${s.n === "04" ? "scale-[1.6]" : ""}`} />
                      </div>
                    ) : (
                      <div
                        className={`relative grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br ${t.iconBg} text-white shadow-lg ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}
                      >
                        {s.icon}
                      </div>
                    )}

                    {/* Step chip */}
                    <span className={`relative mt-4 inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider ring-1 ${t.chip}`}>
                      Step {s.n}
                    </span>

                    {/* Title */}
                    <h3 className="relative mt-3 text-lg md:text-xl font-extrabold text-ink-900 tracking-tight transition group-hover:text-brand-900">
                      {s.title}
                    </h3>

                    {/* Description */}
                    <p className="relative mt-2 text-sm text-ink-600 leading-relaxed">
                      {s.text}
                    </p>
                  </div>

                  {/* Arrow connector between cards (desktop, all gaps) */}
                  {idx < steps.length - 1 && (
                    <span className="hidden lg:flex pointer-events-none absolute right-0 top-[2.5rem] translate-x-1/2 z-10 h-7 w-7 items-center justify-center rounded-full bg-white ring-2 ring-brand-300 text-brand-700 shadow-md transition group-hover:scale-110">
                      <ArrowIcon />
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
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

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}
