import Link from "next/link";
import { ACCENT_CLASSES, type Accent } from "@/data/services";

type Props = {
  href: string;
  title: string;
  description: string;
  accent?: Accent;
  icon?: React.ReactNode;
  categories?: string[];
};

const ICON_BY_ACCENT: Record<Accent, React.ReactNode> = {
  amber: <RecycleIcon />,
  rose: <SofaIcon />,
  indigo: <BriefcaseIcon />,
  emerald: <UtensilsIcon />,
  sky: <SnowflakeIcon />,
  violet: <BoltIcon />
};

const TONE_BY_ACCENT: Record<Accent, { gradient: string; ring: string; glow: string; bar: string }> = {
  amber: {
    gradient: "from-accent-50 via-accent-50 to-accent-50",
    ring: "ring-accent-200/60",
    glow: "from-accent-400 to-accent-500",
    bar: "from-accent-400 via-accent-400 to-accent-500"
  },
  rose: {
    gradient: "from-accent-50 via-accent-50 to-accent-50",
    ring: "ring-accent-200/60",
    glow: "from-accent-400 to-accent-500",
    bar: "from-accent-400 via-accent-400 to-accent-500"
  },
  indigo: {
    gradient: "from-brand-50 via-brand-50 to-brand-50",
    ring: "ring-brand-200/60",
    glow: "from-brand-400 to-brand-500",
    bar: "from-brand-400 via-brand-400 to-brand-500"
  },
  emerald: {
    gradient: "from-accent-50 via-accent-50 to-accent-50",
    ring: "ring-accent-200/60",
    glow: "from-accent-400 to-accent-500",
    bar: "from-accent-400 via-accent-400 to-accent-500"
  },
  sky: {
    gradient: "from-brand-50 via-brand-50 to-brand-50",
    ring: "ring-brand-200/60",
    glow: "from-brand-400 to-brand-500",
    bar: "from-brand-400 via-brand-400 to-brand-500"
  },
  violet: {
    gradient: "from-brand-50 via-brand-50 to-accent-50",
    ring: "ring-brand-200/60",
    glow: "from-brand-400 to-brand-500",
    bar: "from-brand-400 via-brand-400 to-accent-500"
  }
};

export default function ServiceCard({ href, title, description, accent = "rose", icon, categories }: Props) {
  const a = ACCENT_CLASSES[accent];
  const tone = TONE_BY_ACCENT[accent];
  const resolvedIcon = icon ?? ICON_BY_ACCENT[accent];
  const topCategories = categories?.slice(0, 4) ?? [];

  return (
    <Link
      href={href}
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-ink-100 bg-white p-5 shadow-sm ring-1 ring-transparent transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-transparent hover:${tone.ring}`}
    >
      <div className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${tone.bar} opacity-0 group-hover:opacity-100 transition`} />
      <div className={`pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-to-br ${tone.glow} opacity-10 blur-3xl group-hover:opacity-25 transition duration-500`} />
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${tone.gradient} opacity-0 group-hover:opacity-60 transition duration-500`} />

      <div className="relative flex items-start gap-3">
        <div className={`relative grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-gradient-to-br ${a.iconGrad} text-white shadow-md ring-4 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
          <div className={`absolute inset-0 -z-10 rounded-xl bg-gradient-to-br ${a.iconGrad} opacity-0 group-hover:opacity-60 blur-md transition`} />
          {resolvedIcon}
        </div>
        <h3 className={`text-base md:text-lg font-bold text-ink-900 leading-tight transition ${a.groupHoverText}`}>
          {title}
        </h3>
      </div>

      <p className="relative mt-3 text-sm text-ink-600 leading-relaxed line-clamp-3">{description}</p>

      {topCategories.length > 0 && (
        <ul className="relative mt-3 space-y-1.5 grow">
          {topCategories.map((c) => (
            <li key={c} className="flex items-center gap-2 text-[12px] text-ink-700">
              <span className={`grid h-4 w-4 shrink-0 place-items-center rounded-full bg-gradient-to-br ${a.iconGrad} text-white`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="truncate">{c}</span>
            </li>
          ))}
        </ul>
      )}

      <div className="relative mt-4 flex items-center justify-between border-t border-ink-100 pt-3">
        <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold ${a.bgSoft} ${a.text} ring-1 ${a.border}`}>
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-current" />
          Free pickup
        </span>
        <span className={`inline-flex items-center gap-1 text-xs font-bold ${a.text} group-hover:gap-2 transition-all`}>
          View details
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
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
function BriefcaseIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M9 7V5a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2" />
      <path d="M2 13h20" />
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
