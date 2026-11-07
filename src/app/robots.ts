import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/config/siteConfig";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/"],
    },
    sitemap: `${SITE_METADATA.siteUrl}/sitemap.xml`,
  };
}

