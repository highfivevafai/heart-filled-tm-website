import type { MetadataRoute } from "next";

import { siteConfig, toAbsoluteUrl } from "@/lib/siteConfig";

const publicRoutes = [
  "/",
  "/about",
  "/contact",
  "/visit-our-club",
  "/accessibility",
  "/privacy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: toAbsoluteUrl(route),
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
