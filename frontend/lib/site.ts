import { env } from "@/config/env"

export const siteConfig = {
  name: "RujuIt",
  tagline: "Engineering Digital Possibilities.",
  url: env.NEXT_PUBLIC_SITE_URL,
  calUrl: env.NEXT_PUBLIC_CAL_URL,
  email: env.NEXT_PUBLIC_CONTACT_EMAIL,
  socialLinks: [
    { label: "LinkedIn", href: env.NEXT_PUBLIC_LINKEDIN_URL },
    { label: "Facebook", href: env.NEXT_PUBLIC_FACEBOOK_URL },
    { label: "WhatsApp", href: env.NEXT_PUBLIC_WHATSAPP_URL },
    { label: "Instagram", href: env.NEXT_PUBLIC_INSTAGRAM_URL },
  ].filter((link) => link.href),
}

export const serviceIds = [
  "web-development",
  "cloud-engineering",
  "api-integration",
  "mcp-development",
  "ai-automation",
  "custom-software",
] as const
