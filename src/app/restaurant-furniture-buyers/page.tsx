import ServicePage from "@/components/ServicePage";
import { getService } from "@/data/services";
import { buildMetadata } from "@/lib/seo";
import { notFound } from "next/navigation";

const SLUG = "restaurant-furniture-buyers";
const service = getService(SLUG)!;

export const metadata = buildMetadata({
  title: service.metaTitle,
  description: service.metaDescription,
  path: `/${SLUG}`
});

export default function Page() {
  const s = getService(SLUG);
  if (!s) return notFound();
  return <ServicePage service={s} />;
}
