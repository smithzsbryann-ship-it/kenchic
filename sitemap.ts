import type { MetadataRoute } from "next";

const siteUrl = "https://kenchicfarm.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
  ];
}