"use client"

import { useEffect } from "react"

import type { Locale } from "@/lib/i18n"

// Update the document language for assistive technology and browser language handling.
export function LocaleDocument({ locale }: { locale: Locale }) {
  useEffect(() => {
    document.documentElement.lang = locale === "bn" ? "bn-BD" : "en"
  }, [locale])

  return null
}
