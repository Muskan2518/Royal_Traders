import { ACCENT_CLASSES, type Accent } from "@/data/services";

type Props = {
  title: string;
  intro?: string;
  items: string[];
  accent?: Accent;
};

export default function CategorySection({ title, intro, items, accent = "rose" }: Props) {
  const a = ACCENT_CLASSES[accent];
  return (
    <section className="section">
      <div className="container">
        <h2 className="heading-2">{title}</h2>
        {intro && <p className="lead mt-3 max-w-3xl">{intro}</p>}
        <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
          {items.map((item) => (
            <li
              key={item}
              className={`rounded-lg border border-ink-100 bg-white px-4 py-3 text-sm font-medium text-ink-800 transition ${a.hoverBorder} ${a.hoverBgSoft} ${a.hoverText}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
