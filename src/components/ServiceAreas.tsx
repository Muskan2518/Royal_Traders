import { serviceAreas } from "@/data/serviceAreas";

const tones = [
  { dot: "bg-accent-500", border: "hover:border-accent-300", code: "text-accent-700" },
  { dot: "bg-accent-500", border: "hover:border-accent-300", code: "text-accent-700" },
  { dot: "bg-brand-500", border: "hover:border-brand-300", code: "text-brand-700" },
  { dot: "bg-accent-500", border: "hover:border-accent-300", code: "text-accent-700" },
  { dot: "bg-brand-500", border: "hover:border-brand-300", code: "text-brand-700" },
  { dot: "bg-brand-500", border: "hover:border-brand-300", code: "text-brand-700" }
];

type Props = {
  id?: string;
  title?: string;
  intro?: string;
  limit?: number;
};

export default function ServiceAreas({
  id = "areas",
  title,
  intro,
  limit
}: Props) {
  const list = limit ? serviceAreas.slice(0, limit) : serviceAreas;

  return (
    <section id={id} className="section scroll-mt-20">
      <div className="container">
        <span className="chip">Coverage</span>
        <h2 className="heading-2 mt-3">{title ?? `Areas we cover — ${serviceAreas.length}+ pincodes`}</h2>
        <p className="lead mt-3 max-w-3xl">
          {intro ??
            `Free pickup across Hyderabad, Secunderabad, and Rangareddy. If your area is not listed, give us a call — we usually cover it too.`}
        </p>

        <div className="mt-8 grid gap-3 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((a, i) => {
            const t = tones[i % tones.length];
            return (
              <div
                key={a.pincode}
                className={`group flex items-center gap-3 rounded-lg border border-ink-100 bg-white px-3 py-2.5 text-sm transition ${t.border} hover:shadow-sm`}
              >
                <span className={`h-2 w-2 shrink-0 rounded-full ${t.dot}`} />
                <span className={`font-mono text-xs font-semibold ${t.code}`}>{a.pincode}</span>
                <span className="text-ink-800 truncate">{a.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
