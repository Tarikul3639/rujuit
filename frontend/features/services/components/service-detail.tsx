import Link from "next/link"
import { ArrowLeft, ArrowUpRight, Check, ExternalLink } from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { getServiceContent, serviceSlugs } from "@/features/services/data/services"
import type { Dictionary, Locale } from "@/lib/i18n"

export function ServiceDetail({ slug, locale, dictionary }: { slug: (typeof serviceSlugs)[number]; locale: Locale; dictionary: Dictionary }) {
  const copy = getServiceContent(locale)
  const service = copy.items[slug]
  const index = serviceSlugs.indexOf(slug)
  return (
    <>
      <LocaleDocument locale={locale} />
      <main lang={locale === "bn" ? "bn-BD" : "en"} className={locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"}>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <section className="relative overflow-hidden border-b border-border py-20 sm:py-28">
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <Link href={`/${locale}/services`} className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"><ArrowLeft className="size-4" /> {copy.index.all}</Link>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.45fr] lg:items-end">
              <div><p className="font-code text-[10px] tracking-[0.22em] text-primary">CAPABILITY / 0{index + 1}</p><h1 className="font-display mt-5 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl">{service.title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-muted-foreground">{service.intro}</p></div>
              <Link href={`/${locale}/contact`} className="inline-flex h-12 items-center justify-center gap-3 bg-primary px-5 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1">{copy.index.inquiry}<ArrowUpRight className="size-4" /></Link>
            </div>
          </div>
        </section>
        <section className="mx-auto grid max-w-[1440px] gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.75fr_1.25fr] lg:px-12 lg:py-28">
          <aside className="space-y-8">
            <div className="border-t border-border pt-5"><p className="font-code text-[10px] tracking-[0.2em] text-primary">{copy.index.approach}</p><p className="mt-4 text-sm leading-7 text-muted-foreground">{service.short}</p></div>
            <div className="border-t border-border pt-5"><p className="font-code text-[10px] tracking-[0.2em] text-primary">TECH STACK</p><div className="mt-4 flex flex-wrap gap-2">{service.stack.map((tag) => <span key={tag} className="border border-border px-2.5 py-1.5 font-code text-[10px] text-muted-foreground">{tag}</span>)}</div></div>
          </aside>
          <div><p className="font-code text-[10px] tracking-[0.2em] text-primary">01 / {copy.index.outcome}</p><h2 className="font-display mt-5 text-3xl font-bold tracking-tight sm:text-4xl">{service.intro}</h2><p className="mt-6 text-base leading-8 text-muted-foreground">{service.body}</p>
            <div className="mt-12 grid gap-4 sm:grid-cols-3">{service.outcomes.map((item, itemIndex) => <div key={item} className="border border-border p-5"><span className="font-code text-xs text-primary">0{itemIndex + 1}</span><p className="mt-5 text-sm leading-6 font-semibold">{item}</p></div>)}</div>
            <div className="mt-16 border-t border-border pt-8"><p className="font-code text-[10px] tracking-[0.2em] text-primary">02 / {copy.index.deliverables}</p><div className="mt-6 space-y-4">{service.deliverables.map((item) => <div key={item} className="flex gap-3 text-sm leading-7"><Check className="mt-1 size-4 shrink-0 text-primary" />{item}</div>)}</div></div>
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-16"><div className="mx-auto flex max-w-[1440px] flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12"><div><p className="font-code text-[10px] tracking-[0.2em] text-primary">RUJOOIT / NEXT STEP</p><h2 className="font-display mt-3 text-3xl font-bold tracking-tight">{dictionary.contact.title}</h2><p className="mt-2 text-sm text-muted-foreground">{dictionary.contact.description}</p></div><Link href={`/${locale}/contact`} className="inline-flex h-12 items-center gap-3 border border-primary px-5 text-sm font-bold hover:bg-primary hover:text-primary-foreground">{dictionary.contact.book}<ExternalLink className="size-4" /></Link></div></section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
