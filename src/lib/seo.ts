import type { Metadata } from "next";
import { SITE } from "./constants";
import { serviceAreas } from "@/data/serviceAreas";

export function buildMetadata({
  title,
  description,
  path = "/"
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  const url = `${SITE.url}${path}`;
  return {
    description,
    metadataBase: new URL(SITE.url),
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE.name,
      locale: "en_IN",
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title,
      description
    }
  };
}

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: SITE.name,
    description: SITE.description,
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: "Telangana",
      addressCountry: "IN"
    },
    areaServed: serviceAreas.map((a) => ({
      "@type": "Place",
      name: a.name,
      address: { "@type": "PostalAddress", postalCode: a.pincode, addressRegion: "Telangana", addressCountry: "IN" }
    })),
    openingHours: "Mo-Su 08:00-20:00",
    priceRange: "₹₹"
  };
}
