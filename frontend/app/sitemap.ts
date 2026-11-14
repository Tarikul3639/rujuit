import type { MetadataRoute } from "next"

import { projects } from "@/features/work/data/projects"
import { siteConfig } from "@/lib/site"

// Avoid publishing a placeholder domain; configure NEXT_PUBLIC_SITE_URL before launch.
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url.replace(/\/$/, "")
  const lastModified = new Date()

  const coreRoutes = ["en", "bn"].flatMap((locale) => [
    { url: `${baseUrl}/${locale}`, lastModified, changeFrequency: "monthly" as const, priority: locale === "en" ? 1 : 0.9 },
    { url: `${baseUrl}/${locale}/services`, lastModified, changeFrequency: "monthly" as const, priority: 0.9 },
    { url: `${baseUrl}/${locale}/about`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/${locale}/contact`, lastModified, changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/${locale}/work`, lastModified, changeFrequency: "monthly" as const, priority: 0.8 },
  ])

  const projectRoutes = ["en", "bn"].flatMap((locale) =>
    projects.map((project) => ({
      url: `${baseUrl}/${locale}/work/${project.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  )
  const serviceRoutes = ["en", "bn"].flatMap((locale) =>
    ["web-development", "cloud-engineering", "api-integration", "mcp-development", "ai-automation", "custom-software"].map((slug) => ({
      url: `${baseUrl}/${locale}/services/${slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.75,
    })),
  )

  return [...coreRoutes, ...projectRoutes, ...serviceRoutes]
}
