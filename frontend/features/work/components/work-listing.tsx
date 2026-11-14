import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { projects } from "@/features/work/data/projects"
import { getWorkCopy } from "@/features/work/data/copy"
import type { Dictionary, Locale } from "@/lib/i18n"

export function WorkListing({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const copy = getWorkCopy(locale)

  return (
    <>
      <LocaleDocument locale={locale} />
      <main lang={locale === "bn" ? "bn-BD" : "en"} className={locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"}>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
            <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">01 / {copy.index.eyebrow}</p>
            <h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl">{copy.index.title}</h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">{copy.index.description}</p>
            <p className="mt-4 max-w-2xl border-l border-primary/60 pl-4 text-xs leading-6 text-muted-foreground">{copy.index.note}</p>
            <div className="mt-10 flex items-center gap-3 font-code text-[10px] tracking-widest text-muted-foreground"><span className="h-px w-12 bg-primary" /> {String(projects.length).padStart(2, "0")} PROJECTS / ENGINEERING LOG</div>
          </div>
        </section>
        <section className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => {
              const translated = copy.projects[project.slug as keyof typeof copy.projects]
              return (
                <article key={project.slug} className={index % 3 === 1 ? "md:mt-20" : ""}>
                  <Link href={`/${locale}/work/${project.slug}`} className="group block">
                    <div className="relative aspect-[16/10] overflow-hidden border border-border bg-muted">
                      {project.image ? <Image src={project.image} alt={`${project.title} project interface screenshot`} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.035]" /> : <div className="flex h-full items-center justify-center font-display text-6xl font-black text-primary">{project.monogram}</div>}
                      <span className="absolute top-4 left-4 bg-background/90 px-3 py-2 font-code text-[10px] tracking-widest backdrop-blur">{String(index + 1).padStart(2, "0")} / {project.year}</span>
                      <span className="absolute right-4 bottom-4 flex size-11 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-45"><ArrowUpRight className="size-5" /></span>
                    </div>
                    <div className="mt-6 flex items-start justify-between gap-5 border-b border-border pb-5">
                      <div><p className="font-code text-[10px] tracking-[0.18em] text-primary">{project.category.toUpperCase()}</p><h2 className="font-display mt-3 text-2xl font-bold tracking-[-0.045em] sm:text-3xl">{project.title}</h2><p className="mt-3 max-w-xl text-sm leading-7 text-muted-foreground">{translated.summary}</p></div>
                      <span className="mt-1 hidden shrink-0 font-code text-xs text-muted-foreground sm:block">RIT—{String(index + 1).padStart(2, "0")}</span>
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">{project.stack.slice(0, 5).map((tag) => <span key={tag} className="border border-border px-2.5 py-1 font-code text-[9px] text-muted-foreground">{tag}</span>)}</div>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary">{copy.index.view}<ArrowUpRight className="size-4" /></span>
                  </Link>
                </article>
              )
            })}
          </div>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
