import CTASection from "@/components/CTASection";
import LocationLottie from "@/components/LocationLottie";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Gallery",
  description:
    "Photos of recent scrap, used furniture, AC, and generator pickups by our team across Hyderabad.",
  path: "/gallery"
});

const items = [
  { tag: "Scrap", tone: "from-accent-400 to-accent-600" },
  { tag: "Office Workstations", tone: "from-brand-400 to-brand-600" },
  { tag: "Used Furniture", tone: "from-accent-400 to-accent-600" },
  { tag: "Split AC", tone: "from-brand-400 to-brand-600" },
  { tag: "DG Set", tone: "from-brand-400 to-brand-600" },
  { tag: "Restaurant Lot", tone: "from-accent-400 to-accent-600" },
  { tag: "Copper Scrap", tone: "from-accent-500 to-accent-500" },
  { tag: "Hotel Furniture", tone: "from-accent-400 to-brand-500" },
  { tag: "Cassette AC", tone: "from-brand-400 to-brand-500" }
];

export default function GalleryPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <div className="absolute -top-32 left-1/3 h-[28rem] w-[28rem] rounded-full bg-brand-200/50 blur-3xl" />
          <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-200/50 blur-3xl" />
        </div>
        <div className="container py-14 md:py-20 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="chip">Gallery</span>
            <h1 className="heading-1 mt-3 max-w-3xl">
              Recent <span className="gradient-text">pickups</span> across Hyderabad
            </h1>
            <p className="lead mt-4 max-w-3xl">
              A glimpse of the work we do — homes, offices, hotels, and industrial sites. Replace these with real photos once provided by the client.
            </p>
          </div>
          <LocationLottie className="w-32 h-32 md:w-48 md:h-48 justify-self-center md:justify-self-end" />
        </div>
      </section>

      <section className="section">
        <div className="container grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <div
              key={i}
              className={`relative aspect-[4/3] rounded-2xl bg-gradient-to-br ${it.tone} overflow-hidden border border-ink-100 shadow-md`}
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_60%)]" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-white font-semibold drop-shadow">{it.tag}</span>
              </div>
              <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-black/40 to-transparent">
                <span className="text-white text-xs">Pickup #{1024 + i}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
