import type { Locale } from "@/lib/locale-types"

export function isLocale(value: string): value is Locale {
  return value === "en" || value === "bn"
}
