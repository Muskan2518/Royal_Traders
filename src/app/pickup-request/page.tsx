import EnquiryForm from "@/components/EnquiryForm";
import LocationLottie from "@/components/LocationLottie";
import { SITE, telLink, whatsappLink } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Request a Free Pickup",
  description:
    "Schedule a free pickup for scrap, used furniture, AC, or generator across Hyderabad. Submit details and our team will call you back.",
  path: "/pickup-request"
});

export default function PickupPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]">
          <div className="absolute -top-32 left-0 h-[28rem] w-[28rem] rounded-full bg-accent-200/50 blur-3xl" />
          <div className="absolute -top-32 right-0 h-[28rem] w-[28rem] rounded-full bg-accent-200/50 blur-3xl" />
        </div>
        <div className="container py-14 md:py-20 grid items-center gap-8 md:grid-cols-[1fr_auto]">
          <div>
            <span className="chip">Free pickup</span>
            <h1 className="heading-1 mt-3 max-w-3xl">
              Request a <span className="gradient-text">free pickup</span>
            </h1>
            <p className="lead mt-4 max-w-3xl">
              Tell us what you want to sell and where. Our team will call you back to confirm the pickup time and quote.
            </p>
          </div>
          <LocationLottie className="w-32 h-32 md:w-48 md:h-48 justify-self-center md:justify-self-end" />
        </div>
      </section>

      <section className="section">
        <div className="container grid gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <EnquiryForm title="Pickup details" />
          </div>

          <aside className="space-y-6">
            <div className="card">
              <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 mb-3" />
              <h3 className="heading-3">Prefer to talk first?</h3>
              <p className="mt-2 text-sm text-ink-600">
                Call or WhatsApp us directly — we usually respond within minutes.
              </p>
              <div className="mt-4 grid gap-2">
                <a href={telLink()} className="btn-secondary">Call {SITE.phoneDisplay}</a>
                <a href={whatsappLink()} className="btn-whatsapp">WhatsApp Now</a>
              </div>
            </div>

            <div className="card">
              <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-accent-400 to-accent-600 mb-3" />
              <h3 className="heading-3">What to share</h3>
              <ul className="mt-3 space-y-2 text-sm text-ink-700 list-disc pl-5">
                <li>Type of item (scrap, furniture, AC, generator)</li>
                <li>Approximate quantity or weight</li>
                <li>Brand, age, and working condition</li>
                <li>Photos if available — speeds up the quote</li>
                <li>Pickup location and preferred time</li>
              </ul>
            </div>

            <div className="card">
              <div className="h-1.5 w-12 rounded-full bg-gradient-to-r from-brand-400 to-brand-600 mb-3" />
              <h3 className="heading-3">Service hours</h3>
              <p className="mt-2 text-sm text-ink-600">{SITE.hours}</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
