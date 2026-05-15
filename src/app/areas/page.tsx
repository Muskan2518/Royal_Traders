import AreasGallery from "@/components/AreasGallery";
import CTASection from "@/components/CTASection";
import { SITE } from "@/lib/constants";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Service Areas",
  description: `View all 85+ service areas and pincodes we cover across ${SITE.city}. Free pickup and instant payment.`,
  path: "/areas"
});

export default function AreasPage() {
  return (
    <>
      <AreasGallery />
      <CTASection
        title="Ready to sell in any of these areas?"
        subtitle="Free pickup, fair pricing, and instant payment across all our service zones."
      />
    </>
  );
}
