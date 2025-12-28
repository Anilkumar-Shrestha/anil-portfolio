import type { MetadataRoute } from "next";

const baseUrl = "https://anilkumarshrestha.com.np";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/experience`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: currentDate,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
    },
  ];
}
