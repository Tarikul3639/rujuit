export const siteConfig = {
  name: "RujooIT",
  tagline: "Engineering Digital Possibilities.",
  // Set NEXT_PUBLIC_CAL_URL in .env.local when the official booking link is ready.
  calUrl: process.env.NEXT_PUBLIC_CAL_URL || "https://cal.com/",
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "",
}

export const serviceIds = [
  "web-development",
  "cloud-engineering",
  "api-integration",
  "mcp-development",
  "ai-automation",
  "custom-software",
] as const
