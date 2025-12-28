import { NextResponse } from "next/server";

const baseUrl = "https://anilkumarshrestha.com.np";

export async function GET() {
  const currentDate = new Date().toISOString();

  const pages = [
    { url: "", changeFreq: "monthly", priority: 1 },
    { url: "about", changeFreq: "monthly", priority: 0.8 },
    { url: "experience", changeFreq: "monthly", priority: 0.8 },
    { url: "projects", changeFreq: "monthly", priority: 0.8 },
    { url: "contact", changeFreq: "monthly", priority: 0.7 },
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${pages
    .map(
      (page) => `
    <url>
      <loc>${baseUrl}/${page.url}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>${page.changeFreq}</changefreq>
      <priority>${page.priority}</priority>
    </url>`
    )
    .join("")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  });
}
