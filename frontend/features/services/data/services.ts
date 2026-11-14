import { servicesCopy as en } from "@/messages/en/services"
import { servicesCopy as bn } from "@/messages/bn/services"
import type { Locale } from "@/lib/i18n"

export const serviceSlugs = ["web-development", "cloud-engineering", "api-integration", "mcp-development", "ai-automation", "custom-software"] as const

export function getServiceContent(locale: Locale) {
  return locale === "en" ? en : bn
}
