import type { MetadataRoute } from "next"

// Avoid publishing a placeholder domain; configure NEXT_PUBLIC_SITE_URL before launch.
export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  if (!siteUrl) return []

  const baseUrl = siteUrl.replace(/\/$/, "")
  const lastModified = new Date()

  return [
    {
      url: `${baseUrl}/en`,
      lastModified,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${baseUrl}/bn`,
      lastModified,
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ]
}
