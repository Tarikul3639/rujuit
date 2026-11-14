"use client"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { aboutCopy as enAbout } from "@/messages/en/about"
import { aboutCopy as bnAbout } from "@/messages/bn/about"

import { AboutCtaSection } from "./sections/about-cta-section"
import { AboutHeroSection } from "./sections/about-hero-section"
import { ApproachSection } from "./sections/approach-section"
import { FoundersSection } from "./sections/founders-section"
import { MissionSection } from "./sections/mission-section"
import { PrinciplesSection } from "./sections/principles-section"

export function AboutPage({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const text = locale === "en" ? enAbout : bnAbout

  return (
    <>
      <LocaleDocument locale={locale} />
      <main
        id="top"
        lang={locale === "bn" ? "bn-BD" : "en"}
        className={
          locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"
        }
      >
        <SiteHeader locale={locale} dictionary={dictionary} />
        <AboutHeroSection locale={locale} text={text} />
        <FoundersSection locale={locale} text={text} />
        <MissionSection text={text} />
        <PrinciplesSection text={text} />
        <ApproachSection text={text} />
        <AboutCtaSection locale={locale} dictionary={dictionary} text={text} />
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
