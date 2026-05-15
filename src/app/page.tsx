import Link from "next/link";
import HomeHero from "@/components/HomeHero";
import ServiceCard from "@/components/ServiceCard";
import TrustStrip from "@/components/TrustStrip";
import HowItWorks from "@/components/HowItWorks";
import FAQ from "@/components/FAQ";
import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import LocationLottie from "@/components/LocationLottie";
import Marquee from "@/components/Marquee";
import { services } from "@/data/services";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: `${SITE.name} — Scrap, Furniture, AC & Generator Buyers in Hyderabad`,
  description: SITE.description,
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <Marquee
        items={[
          "Free door-to-door pickup",
          "On-the-spot cash, UPI & bank transfer",
          "Transparent digital weighing",
          "Bulk and shut-down lots welcome",
          "Same-day pickup in most areas",
          "85+ pincodes covered across Hyderabad"
        ]}
      />

      <TrustStrip />

      <section className="relative py-10 md:py-14 overflow-hidden">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-brand-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-100 to-brand-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-brand-800 ring-1 ring-brand-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-brand-600 animate-pulse" />
              Our services
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight !leading-[1.3] pb-2">
              <span className="animate-typewriter inline-block max-w-full pb-1">What we buy across&nbsp;</span>
              <span className="bg-gradient-to-r from-brand-700 via-accent-500 to-brand-900 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift animate-fade-up animate-fade-up-3 pb-1 inline-block">
                {SITE.city}
              </span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-ink-600 max-w-2xl mx-auto animate-slide-right" style={{ animationDelay: "0.6s" }}>
              We handle homes, offices, hotels, restaurants, hospitals, schools, and industrial sites. Pick the category closest to what you want to sell.
            </p>
          </div>

          <div className="mt-8 relative overflow-hidden group [mask-image:linear-gradient(to_right,transparent,black_4%,black_96%,transparent)]">
            <div className="flex w-max gap-5 animate-marquee group-hover:[animation-play-state:paused]">
              {[...services, ...services].map((s, i) => (
                <div
                  key={`${s.slug}-${i}`}
                  className="w-72 md:w-80 aspect-square shrink-0"
                >
                  <ServiceCard
                    href={`/${s.slug}`}
                    title={s.title}
                    description={s.short}
                    accent={s.accent}
                    categories={s.categories}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorks />

      <section className="relative py-10 md:py-14 overflow-hidden bg-gradient-to-b from-white via-accent-50/30 to-white">
        <div className="pointer-events-none absolute -top-32 left-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 right-1/4 h-72 w-72 rounded-full bg-accent-200/30 blur-3xl" />

        <div className="relative w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 grid gap-8 lg:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent-100 to-accent-50 px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent-700 ring-1 ring-accent-200 reveal-from-left is-visible animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500 animate-pulse" />
              Why choose us
            </span>
            <h2 className="mt-3 text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight animate-fade-up animate-fade-up-1">
              Fair price, on-time pickup,{" "}
              <span className="bg-gradient-to-r from-accent-500 via-accent-500 to-accent-500 bg-[length:200%_100%] bg-clip-text text-transparent animate-gradient-shift">
                zero hassle.
              </span>
            </h2>
            <p className="mt-3 text-base md:text-lg text-ink-600 max-w-xl animate-slide-right" style={{ animationDelay: "0.4s" }}>
              We have been buying scrap and used items across {SITE.city} for years. Our team is trained to handle dismantling, packing, and transport so you do not have to lift a finger.
            </p>

            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {[
                { t: "Free door-to-door pickup", c: "from-accent-400 to-accent-600", bg: "from-accent-50 to-white", ring: "ring-accent-200" },
                { t: "On-the-spot cash, UPI, or bank transfer", c: "from-accent-400 to-accent-600", bg: "from-accent-50 to-white", ring: "ring-accent-200" },
                { t: "Calibrated digital weighing in your presence", c: "from-brand-400 to-brand-600", bg: "from-brand-50 to-white", ring: "ring-brand-200" },
                { t: "Trained team for dismantling and loading", c: "from-accent-400 to-accent-600", bg: "from-accent-50 to-white", ring: "ring-accent-200" },
                { t: "Fair quotes for working and non-working items", c: "from-brand-400 to-brand-600", bg: "from-brand-50 to-white", ring: "ring-brand-200" },
                { t: "Single point of contact for shut-down lots", c: "from-brand-400 to-brand-600", bg: "from-brand-50 to-white", ring: "ring-brand-200" }
              ].map((p, i) => (
                <li
                  key={p.t}
                  className={`group flex items-center gap-3 rounded-xl bg-gradient-to-br ${p.bg} ring-1 ${p.ring} px-3 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md animate-pop-in`}
                  style={{ animationDelay: `${0.4 + i * 0.08}s` }}
                >
                  <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg bg-gradient-to-br ${p.c} text-white shadow-sm ring-2 ring-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-[-6deg]`}>
                    <CheckIcon />
                  </span>
                  <span className="text-xs md:text-sm font-medium text-ink-800">{p.t}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 animate-fade-up animate-fade-up-4">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-xl border-2 border-accent-700 bg-white px-5 py-2.5 text-sm font-semibold text-accent-800 shadow-sm transition-all hover:bg-accent-700 hover:text-white hover:-translate-y-0.5 hover:shadow-lg"
              >
                More about us
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="transition-transform group-hover:translate-x-1">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent-200/30 via-accent-200/20 to-accent-200/30 blur-2xl" />
            <div className="relative rounded-3xl bg-white shadow-xl ring-1 ring-ink-100 p-1.5">
              <div className="rounded-[20px] bg-gradient-to-br from-accent-50/60 via-white to-accent-50/40 p-2">
                <EnquiryForm title="Get a quick quote" />
              </div>
            </div>
            <div className="absolute -top-3 -right-3 inline-flex items-center gap-2 rounded-full bg-accent-600 text-white px-3 py-1.5 text-xs font-bold shadow-lg animate-float">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
              Free quote
            </div>
          </div>
        </div>
      </section>

      <FAQ />

      <CTASection />
    </>
  );
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 13l4 4L19 7" />
    </svg>
  );
}
