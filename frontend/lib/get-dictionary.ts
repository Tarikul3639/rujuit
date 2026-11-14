import { commonDictionary as enCommon } from "@/messages/en/common"
import { homeDictionary as enHome } from "@/messages/en/home"
import { commonDictionary as bnCommon } from "@/messages/bn/common"
import { homeDictionary as bnHome } from "@/messages/bn/home"

import type { Locale } from "@/lib/locale-types"

// Each locale is composed from page-focused translation modules.
const dictionaries = {
  en: { ...enCommon, ...enHome },
  bn: { ...bnCommon, ...bnHome },
} as const

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}

export type Dictionary = ReturnType<typeof getDictionary>
