"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { PoliciesContent } from "@/features/policies/components/policies-content"
import { PoliciesSidebar } from "@/features/policies/components/policies-sidebar"
import { getPolicies } from "@/features/policies/data/policies"
import { useReveal } from "@/lib/use-reveal"
import type { Dictionary, Locale } from "@/lib/i18n"

export function PoliciesPage({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const copy = getPolicies(locale)
  const [activeSection, setActiveSection] = useState<
    (typeof copy.sections)[number]["id"]
  >(copy.sections[0].id)
  const reveal = useReveal()

  return (
    <>
      <LocaleDocument locale={locale} />
      <main
        lang={locale === "bn" ? "bn-BD" : "en"}
        className={
          locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"
        }
      >
        <SiteHeader locale={locale} dictionary={dictionary} />
        <section className="section-atmosphere relative overflow-hidden border-b border-border py-20 sm:py-28">
          <div aria-hidden="true" className="hero-art hero-art--policies absolute inset-0" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.p
              {...reveal()}
              className="font-code text-[10px] tracking-[0.22em] text-primary"
            >
              {copy.eyebrow}
            </motion.p>
            <motion.h1
              {...reveal()}
              className="font-display mt-5 max-w-4xl text-5xl font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
            >
              {copy.title}
            </motion.h1>
            <motion.p
              {...reveal()}
              className="mt-7 max-w-3xl text-lg text-muted-foreground"
            >
              {copy.description}
            </motion.p>
            <motion.p
              {...reveal()}
              className="font-code mt-7 text-[10px] tracking-[0.16em] text-muted-foreground"
            >
              {copy.updated}
            </motion.p>
          </div>
        </section>

        <section className="mx-auto grid max-w-7xl gap-12 px-5 py-14 sm:px-8 lg:grid-cols-[320px_minmax(0,1fr)] lg:gap-20 lg:px-12 lg:py-20">
          <PoliciesSidebar
            copy={copy}
            locale={locale}
            contactLabel={dictionary.nav.contact}
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
          <PoliciesContent copy={copy} onSectionChange={setActiveSection} />
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
