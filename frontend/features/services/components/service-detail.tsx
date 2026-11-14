"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { LocaleDocument } from "@/features/home/components/locale-document"
import {
  getServiceContent,
  serviceSlugs,
} from "@/features/services/data/services"
import type { Dictionary, Locale } from "@/lib/i18n"

export function ServiceDetail({
  slug,
  locale,
  dictionary,
}: {
  slug: (typeof serviceSlugs)[number]
  locale: Locale
  dictionary: Dictionary
}) {
  const copy = getServiceContent(locale)
  const service = copy.items[slug]
  const index = serviceSlugs.indexOf(slug)
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
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Link
              href={`/${locale}/services`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> {copy.index.all}
            </Link>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div>
                <motion.p
                  {...reveal()}
                  className="font-code text-[10px] tracking-[0.22em] text-primary"
                >
                  <EncryptedText
                    text={`CAPABILITY / 0${index + 1}`}
                    className="inline"
                    revealedClassName="text-primary"
                    encryptedClassName="text-primary/60"
                  />
                </motion.p>
                <motion.h1
                  {...reveal()}
                  className="font-display mt-5 max-w-4xl text-5xl font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
                >
                  {locale === "en" ? (
                    <TypewriterEffect
                      words={service.title.split(" ").map((word) => ({
                        text: word,
                        className: "text-foreground",
                      }))}
                      className="my-0 text-left text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl"
                      cursorClassName="bg-primary"
                    />
                  ) : (
                    service.title
                  )}
                </motion.h1>
                <motion.p
                  {...reveal()}
                  className="mt-7 max-w-3xl text-lg text-muted-foreground"
                >
                  {service.intro}
                </motion.p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="inline-flex h-12 items-center justify-center gap-3 bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
              >
                {copy.index.inquiry}
                <ArrowUpRight className="size-4" />
              </Link>
            </div>
          </div>
        </section>
        <section className="section-atmosphere mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-28">
          <aside className="space-y-8">
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                {copy.index.approach}
              </motion.p>
              <motion.p
                {...reveal()}
                className="mt-4 text-sm text-muted-foreground"
              >
                {service.short}
              </motion.p>
            </div>
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                TECH STACK
              </motion.p>
              <div className="mt-4 flex flex-wrap gap-2">
                {service.stack.map((tag) => (
                  <motion.span
                    {...reveal()}
                    key={tag}
                    className="font-code border border-border px-2.5 py-1.5 text-[10px] text-muted-foreground"
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <motion.p
              {...reveal()}
              className="font-code text-[10px] tracking-[0.2em] text-primary"
            >
              01 / {copy.index.outcome}
            </motion.p>
            <motion.h2
              {...reveal()}
              className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl"
            >
              {service.intro}
            </motion.h2>
            <motion.p
              {...reveal()}
              className="mt-6 text-base text-muted-foreground"
            >
              {service.body}
            </motion.p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {service.outcomes.map((item, itemIndex) => (
                <div key={item} className="border border-border p-5">
                  <motion.span
                    {...reveal()}
                    className="font-code text-xs text-primary"
                  >
                    0{itemIndex + 1}
                  </motion.span>
                  <motion.p
                    {...reveal()}
                    className="mt-5 text-sm font-semibold"
                  >
                    {item}
                  </motion.p>
                </div>
              ))}
            </div>
            <div className="mt-16 border-t border-border pt-8">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                02 / {copy.index.deliverables}
              </motion.p>
              <div className="mt-6 space-y-4">
                {service.deliverables.map((item) => (
                  <div key={item} className="flex gap-3 text-sm">
                    <Check className="mt-1 size-4 shrink-0 text-primary" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                RUJUIT / NEXT STEP
              </motion.p>
              <motion.h2
                {...reveal()}
                className="font-display mt-3 text-3xl font-bold tracking-tight"
              >
                {dictionary.contact.title}
              </motion.h2>
              <motion.p
                {...reveal()}
                className="mt-2 text-sm text-muted-foreground"
              >
                {dictionary.contact.description}
              </motion.p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center gap-3 border border-primary px-5 text-sm font-bold hover:bg-primary hover:text-primary-foreground"
            >
              {dictionary.contact.book}
              <ExternalLink className="size-4" />
            </Link>
          </div>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
