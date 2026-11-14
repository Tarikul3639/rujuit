import { workCopy as en } from "@/messages/en/work"
import { workCopy as bn } from "@/messages/bn/work"
import type { Locale } from "@/lib/i18n"

export function getWorkCopy(locale: Locale) {
  return locale === "en" ? en : bn
}
