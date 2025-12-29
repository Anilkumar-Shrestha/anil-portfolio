// app/sitemap.xml.ts
import { NextResponse } from "next/server"

const baseUrl = "https://anilkumarshrestha.com.np"

export async function GET() {
  const currentDate = new Date().toISOString()

  const pages = [
    { url: "", changeFreq: "monthly" as const, priority: 1 },
    { url: "about", changeFreq: "monthly" as const, priority: 0.8 },
    { url: "experience", changeFreq: "monthly" as const, priority: 0.8 },
    { url: "projects", changeFreq: "monthly" as const, priority: 0.8 },
    { url: "contact", changeFreq: "monthly" as const, priority: 0.7 },
  ]

  const sitemapData = pages.map((page) => ({
    url: `${baseUrl}/${page.url}`,
    lastModified: currentDate,
    changeFrequency: page.changeFreq,
    priority: page.priority,
  }))

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${sitemapData
    .map(
      (page) => `
    <url>
      <loc>${page.url}</loc>
      <lastmod>${page.lastModified}</lastmod>
      <changefreq>${page.changeFrequency}</changefreq>
      <priority>${page.priority}</priority>
    </url>`,
    )
    .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: { "Content-Type": "application/xml" },
  })
}
