import Link from "next/link"

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
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
              01 / <EncryptedText text={copy.index.eyebrow} className="inline" revealedClassName="text-primary" encryptedClassName="text-primary/60" />
            </p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl">
              {locale === "en" ? (
                <TypewriterEffect
                  words={copy.index.title.split(" ").map((word) => ({ text: word, className: "text-foreground" }))}
                  className="my-0 text-left text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] sm:text-7xl"
                  cursorClassName="bg-primary"
                />
              ) : copy.index.title}
            </h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              {copy.index.description}
            </p>
          </div>
        </section>
        <section className="section-atmosphere mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-0 border-y border-border md:grid-cols-2 xl:grid-cols-3">
            {serviceSlugs.map((slug, index) => {
              const service = copy.items[slug]
              const Icon = icons[index]
              return (
                <Link
                  key={slug}
                  href={`/${locale}/services/${slug}`}
                  className="group relative flex min-h-[340px] flex-col border-b border-border p-7 transition-colors hover:bg-primary/[0.035] md:even:border-l xl:nth-[3n+2]:border-l xl:nth-[3n+3]:border-l"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-code text-xs tracking-widest text-primary">
                      0{index + 1} / 06
                    </span>
                    <span className="flex size-12 items-center justify-center border border-border text-primary transition-all group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </span>
                  </div>
                  <h2 className="font-display mt-12 max-w-sm text-2xl font-bold tracking-[-0.04em]">
                    {service.title}
                  </h2>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground">
                    {service.short}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-bold text-primary">
                    {copy.index.detail}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                </Link>
              )
            })}
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-16">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <p className="font-code text-[10px] tracking-[0.2em] text-primary">
                RUJUIT / DISCOVERY
              </p>
              <h2 className="font-display mt-3 text-3xl font-bold tracking-tight">
                {dictionary.contact.title}
              </h2>
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