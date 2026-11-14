import { z } from "zod"

// Validate public runtime configuration once so malformed values fail early.
const envSchema = z.object({
  NEXT_PUBLIC_SITE_URL: z.string().url().default("https://rujuit.com"),
  NEXT_PUBLIC_CAL_URL: z.string().url().default("https://cal.com/"),
  NEXT_PUBLIC_CONTACT_EMAIL: z.string().email().optional().or(z.literal("")),
  NEXT_PUBLIC_LINKEDIN_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_FACEBOOK_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_WHATSAPP_URL: z.string().url().optional().or(z.literal("")),
  NEXT_PUBLIC_INSTAGRAM_URL: z.string().url().optional().or(z.literal("")),
})

export const env = envSchema.parse({
  NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  NEXT_PUBLIC_CAL_URL: process.env.NEXT_PUBLIC_CAL_URL,
  NEXT_PUBLIC_CONTACT_EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
  NEXT_PUBLIC_LINKEDIN_URL: process.env.NEXT_PUBLIC_LINKEDIN_URL,
  NEXT_PUBLIC_FACEBOOK_URL: process.env.NEXT_PUBLIC_FACEBOOK_URL,
  NEXT_PUBLIC_WHATSAPP_URL: process.env.NEXT_PUBLIC_WHATSAPP_URL,
  NEXT_PUBLIC_INSTAGRAM_URL: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
})
