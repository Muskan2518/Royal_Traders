import Link from "next/link";
import CategorySection from "@/components/CategorySection";
import CTASection from "@/components/CTASection";
import EnquiryForm from "@/components/EnquiryForm";
import FAQ from "@/components/FAQ";
import LocationLottie from "@/components/LocationLottie";
import { ACCENT_CLASSES, type Service } from "@/data/services";
import { SITE, telLink, whatsappLink } from "@/lib/constants";

export default function ServicePage({ service }: { service: Service }) {
  const a = ACCENT_CLASSES[service.accent];

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <div className={`absolute -top-32 right-0 h-[30rem] w-[30rem] rounded-full ${a.bgSoft} blur-3xl opacity-80`} />
          <div className="absolute -bottom-32 left-0 h-[28rem] w-[28rem] rounded-full bg-accent-100 blur-3xl opacity-60" />
        </div>
        <div className="container py-14 md:py-20 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <div className="flex items-center gap-3 flex-wrap">
              <span className={`inline-flex items-center rounded-full ${a.chipBg} ${a.chipText} px-3 py-1 text-xs font-medium`}>
                Hyderabad
              </span>
              <LocationLottie className="w-12 h-12" />
            </div>
            <h1 className="heading-1 mt-3">{service.title}</h1>
            <p className="lead mt-4 max-w-xl">{service.short}</p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/pickup-request" className="btn-primary">Request Pickup</Link>
              <a href={telLink()} className="btn-secondary">Call {SITE.phoneDisplay}</a>
              <a
                href={whatsappLink(`Hi, I would like to sell — ${service.title}.`)}
                className="btn-whatsapp"
              >
                WhatsApp Now
              </a>
            </div>
          </div>
          <div className="lg:pl-8">
            <EnquiryForm title="Get a price for this category" defaultCategory={service.title} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container-tight">
          <h2 className="heading-2">About this service</h2>
          <p className="mt-4 text-ink-700 leading-relaxed">{service.long}</p>
          <p className="mt-4 text-ink-700 leading-relaxed">
            We service homes, offices, restaurants, hotels, hospitals, and commercial establishments across {SITE.city}. Whether it is a single item or a complete lot, we offer transparent weighing, fair pricing, and instant payment.
          </p>
        </div>
      </section>

      <CategorySection
        title="What we buy in this category"
        intro="We accept all conditions — working, partially working, or scrap. If you don't see your item below, contact us and we will let you know."
        items={service.categories}
        accent={service.accent}
      />

      <section className="section bg-gradient-to-b from-white via-ink-50 to-white">
        <div className="container grid gap-8 md:grid-cols-3">
          {[
            { t: "Free inspection", d: "We come to your location at no cost and assess the items.", grad: "from-accent-400 to-accent-600" },
            { t: "Best price", d: "Day's market rate or condition-based valuation — your choice.", grad: "from-accent-400 to-accent-600" },
            { t: "Instant payment", d: "Paid on the spot via cash, UPI, or bank transfer.", grad: "from-brand-400 to-brand-600" }
          ].map((b) => (
            <div key={b.t} className="card">
              <div className={`h-1.5 w-12 rounded-full bg-gradient-to-r ${b.grad} mb-4`} />
              <h3 className="heading-3">{b.t}</h3>
              <p className="mt-2 text-sm text-ink-600">{b.d}</p>
            </div>
          ))}
        </div>
      </section>

      <FAQ />

      <CTASection
        title={`Ready to sell — ${service.title}?`}
        subtitle="Free pickup, transparent weighing, and on-the-spot payment across Hyderabad."
      />
    </>
  );
}
