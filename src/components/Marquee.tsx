type Props = {
  items: string[];
  className?: string;
};

export default function Marquee({ items, className = "" }: Props) {
  const sequence = [...items, ...items];
  return (
    <div
      className={`relative overflow-hidden border-y border-brand-100 bg-gradient-to-r from-brand-50 via-white to-brand-50 ${className}`}
      role="presentation"
    >
      <div className="flex w-max gap-12 py-3 animate-marquee">
        {sequence.map((it, i) => (
          <span
            key={i}
            className="flex items-center gap-3 text-sm font-semibold tracking-wide text-brand-900 whitespace-nowrap"
          >
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
            {it}
          </span>
        ))}
      </div>
    </div>
  );
}
