import Link from "next/link"
import {
  ArrowUpRight,
  Compass,
  GitBranch,
  Layers3,
  Network,
  ShieldCheck,
} from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { aboutCopy as enAbout } from "@/messages/en/about"
import { aboutCopy as bnAbout } from "@/messages/bn/about"

export function AboutPage({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const text = locale === "en" ? enAbout : bnAbout
  const icons = [Compass, GitBranch, Network, ShieldCheck]
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
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="font-code text-[10px] tracking-[0.22em] text-primary">
              {text.eyebrow}
            </p>
            <h1 className="font-display mt-6 max-w-5xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl">
              {text.title}
            </h1>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
              {text.intro}
            </p>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12 lg:py-28">
          <aside>
            <p className="font-code text-[10px] tracking-[0.2em] text-primary">
              {text.mission}
            </p>
            <div className="mt-5 flex size-14 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
              <Layers3 className="size-6" />
            </div>
          </aside>
          <div>
            <h2 className="font-display max-w-3xl text-3xl leading-tight font-bold tracking-tighter sm:text-5xl">
              {text.missionTitle}
            </h2>
            <p className="mt-7 max-w-3xl text-base leading-8 text-muted-foreground">
              {text.missionBody}
            </p>
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-20 sm:py-28">
          <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="font-code text-[10px] tracking-[0.2em] text-primary">
              01 / ENGINEERING PRINCIPLES
            </p>
            <div className="mt-10 grid gap-0 border-y border-border sm:grid-cols-2">
              {text.principles.map((item, index) => {
                const Icon = icons[index]
                return (
                  <article
                    key={item.title}
                    className="border-b border-border p-7 last:border-b-0 sm:nth-[3]:border-b-0 sm:nth-[odd]:border-r"
                  >
                    <div className="flex items-center justify-between">
                      <Icon className="size-6 text-primary" />
                      <span className="font-code text-xs text-muted-foreground">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="font-display mt-9 text-2xl font-bold tracking-tight">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                      {item.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </div>
        </section>
        <section
          id="approach"
          className="mx-auto max-w-[1440px] scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
        >
          <p className="font-code text-[10px] tracking-[0.2em] text-primary">
            02 / {text.approach}
          </p>
          <h2 className="font-display mt-5 max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl">
            {text.approachTitle}
          </h2>
          <div className="mt-12 grid gap-5 md:grid-cols-4">
            {text.steps.map(([number, title, body]) => (
              <article key={number} className="border-t border-border pt-5">
                <span className="font-code text-xs text-primary">
                  {number} / 04
                </span>
                <h3 className="font-display mt-8 text-2xl font-bold">
                  {title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {body}
                </p>
              </article>
            ))}
          </div>
        </section>
        <section className="border-y border-border bg-primary py-16 text-primary-foreground">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
                {text.cta}
              </h2>
              <p className="mt-3 text-sm text-primary-foreground/80">
                {text.ctaBody}
              </p>
            </div>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex h-12 items-center gap-3 border border-primary-foreground/60 px-5 text-sm font-bold transition-colors hover:bg-primary-foreground hover:text-primary"
            >
              {dictionary.nav.contact}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}