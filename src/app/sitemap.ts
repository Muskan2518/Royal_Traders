import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";
import { services } from "@/data/services";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const staticPaths = [
    "",
    "/about",
    "/services",
    "/pickup-request",
    "/gallery",
    "/contact"
  ];

  return [
    ...staticPaths.map((p) => ({
      url: `${SITE.url}${p}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: p === "" ? 1 : 0.8
    })),
    ...services.map((s) => ({
      url: `${SITE.url}/${s.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9
    }))
  ];
}
