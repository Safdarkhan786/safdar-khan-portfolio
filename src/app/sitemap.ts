import type { MetadataRoute } from "next";
import { SITE_METADATA } from "@/config/siteConfig";
import { PROJECTS_DATA } from "@/data/projectsData";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_METADATA.siteUrl;
  const lastModified = new Date();

  const projectRoutes: MetadataRoute.Sitemap = PROJECTS_DATA.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    ...projectRoutes,
  ];
}

