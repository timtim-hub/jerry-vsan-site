import type { MetadataRoute } from "next";
import { siteBaseUrl } from "@/lib/site-data";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteBaseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteBaseUrl}/en`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1
    },
    {
      url: `${siteBaseUrl}/impressum`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    },
    {
      url: `${siteBaseUrl}/en/legal`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6
    }
  ];
}
