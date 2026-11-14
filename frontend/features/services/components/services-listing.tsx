"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import {
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Layers3,
  Network,
  Workflow,
} from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { LocaleDocument } from "@/features/home/components/locale-document"
import {
  getServiceContent,
  serviceSlugs,
} from "@/features/services/data/services"
import type { Dictionary, Locale } from "@/lib/i18n"

const icons = [Code2, Cloud, Network, Braces, Workflow, Layers3]

export function ServicesListing({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const copy = getServiceContent(locale)
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
        <section className="section-atmosphere relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.p
              {...reveal()}
              className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
            >
              01 /{" "}
              <EncryptedText
                text={copy.index.eyebrow}
                className="inline"
                revealedClassName="text-primary"
                encryptedClassName="text-primary/60"
              />
            </motion.p>

            <motion.h1
              {...reveal()}
              className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
            >
              {locale === "en" ? (
                <TypewriterEffect
                  words={copy.index.title.split(" ").map((word) => ({
                    text: word,
                    className: "text-foreground",
                  }))}
                  className="my-0 text-left text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] sm:text-7xl"
                  cursorClassName="bg-primary"
                />
              ) : (
                copy.index.title
              )}
            </motion.h1>

            <motion.p
              {...reveal()}
              className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg"
            >
              {copy.index.description}
            </motion.p>
          </div>
        </section>
        <section className="section-atmosphere mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-0 border-y border-border md:grid-cols-2 xl:grid-cols-3">
            {serviceSlugs.map((slug, index) => {
              const service = copy.items[slug]
              const Icon = icons[index]
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="group relative border-b border-border transition-colors hover:bg-primary/[0.035] md:even:border-l xl:nth-[3n+2]:border-l xl:nth-[3n+3]:border-l"
                >
                  <motion.div
                    {...reveal((index % 3) * 0.14, 20, 0.65)}
                    className="relative flex min-h-85 flex-col p-7"
                  >
                    <div className="flex items-center justify-between">
                      <motion.span
                        {...reveal(0.1, 10, 0.45)}
                        className="font-code text-xs tracking-widest text-primary"
                      >
                        0{index + 1} / 06
                      </motion.span>
                      <motion.span
                        {...reveal(0.2, 10, 0.45)}
                        className="flex size-11 items-center justify-center border border-border text-primary transition-all duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground"
                      >
                        <Icon className="size-5" />
                      </motion.span>
                    </div>
                    <motion.h2
                      {...reveal(0.3, 14, 0.5)}
                      className="font-display mt-12 max-w-sm text-2xl font-bold tracking-[-0.04em]"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      {...reveal(0.4, 14, 0.5)}
                      className="mt-4 text-sm leading-7 text-muted-foreground"
                    >
                      {service.short}
                    </motion.p>
                    <motion.span
                      {...reveal(0.5, 10, 0.45)}
                      className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-primary"
                    >
                      {copy.index.detail}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </motion.span>
                  </motion.div>
                </Link>
              )
            })}
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-16">
          <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                RUJUIT / DISCOVERY
              </motion.p>
              <motion.h2
                {...reveal()}
                className="font-display mt-3 text-3xl font-bold tracking-tight"
              >
                {dictionary.contact.title}
              </motion.h2>
            </div>

            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center gap-3 bg-primary px-5 text-sm font-bold text-primary-foreground"
            >
              {dictionary.contact.book}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
