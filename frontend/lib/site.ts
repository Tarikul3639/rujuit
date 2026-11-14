import { env } from "@/config/env"

export const siteConfig = {
  name: "RujooIT",
  tagline: "Engineering Digital Possibilities.",
  url: env.NEXT_PUBLIC_SITE_URL,
  calUrl: env.NEXT_PUBLIC_CAL_URL,
  email: env.NEXT_PUBLIC_CONTACT_EMAIL,
}

export const serviceIds = [
  "web-development",
  "cloud-engineering",
  "api-integration",
  "mcp-development",
  "ai-automation",
  "custom-software",
] as const
