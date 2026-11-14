"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, ArrowUpRight, ExternalLink } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { projects, type PortfolioProject } from "@/features/work/data/projects"
import { getWorkCopy } from "@/features/work/data/copy"
import type { Dictionary, Locale } from "@/lib/i18n"

export function ProjectDetail({
  project,
  locale,
  dictionary,
}: {
  project: PortfolioProject
  locale: Locale
  dictionary: Dictionary
}) {
  const copy = getWorkCopy(locale)
  const index = projects.findIndex((item) => item.slug === project.slug)
  const previous = projects[(index - 1 + projects.length) % projects.length]
  const next = projects[(index + 1) % projects.length]
  const translated = copy.projects[project.slug as keyof typeof copy.projects]

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
          <div className="site-grid absolute inset-0 opacity-45" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <Link
              href={`/${locale}/work`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="size-4" /> {copy.index.back}
            </Link>
            <div className="mt-14 grid gap-10 lg:grid-cols-[1fr_0.42fr] lg:items-end">
              <div>
                <motion.p
                  {...reveal()}
                  className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
                >
                  <EncryptedText
                    text={`${project.category.toUpperCase()} / ${project.year}`}
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
                      words={project.title.split(" ").map((word) => ({
                        text: word,
                        className: "text-foreground",
                      }))}
                      className="my-0 text-left text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl"
                      cursorClassName="bg-primary"
                    />
                  ) : (
                    project.title
                  )}
                </motion.h1>
                <motion.p
                  {...reveal()}
                  className="mt-7 max-w-3xl text-base text-muted-foreground sm:text-lg"
                >
                  {translated.summary}
                </motion.p>
              </div>
            </div>
            <div className="relative mt-16 aspect-video overflow-hidden border border-border bg-muted">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={`${project.title} full project screenshot`}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 90vw"
                  className="object-cover"
                />
              ) : (
                <div className="font-display flex h-full items-center justify-center text-7xl font-black text-primary">
                  {project.monogram}
                </div>
              )}
              <div className="font-code absolute bottom-0 left-0 bg-background/90 px-4 py-3 text-[9px] tracking-[0.2em] backdrop-blur">
                RUJUIT / ENGINEERING ARCHIVE /{" "}
                {String(index + 1).padStart(2, "0")}
              </div>
            </div>
          </div>
        </section>
        <section className="section-atmosphere mx-auto grid max-w-7xl gap-16 px-5 py-20 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12 lg:py-28">
          <aside className="space-y-9">
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                {copy.index.role}
              </motion.p>
              <motion.p {...reveal()} className="mt-3 text-sm font-semibold">
                {project.role}
              </motion.p>
            </div>
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                {copy.index.year}
              </motion.p>
              <motion.p {...reveal()} className="mt-3 text-sm font-semibold">
                {project.year}
              </motion.p>
            </div>
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                {copy.index.category}
              </motion.p>
              <motion.p {...reveal()} className="mt-3 text-sm font-semibold">
                {project.category}
              </motion.p>
            </div>
            <div className="border-t border-border pt-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                {copy.index.stack}
              </motion.p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.stack.map((tag) => (
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
              className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
            >
              01 / {copy.index.overview}
            </motion.p>
            <motion.h2
              {...reveal()}
              className="font-display mt-5 text-3xl font-bold tracking-tighter sm:text-4xl"
            >
              {project.title}
            </motion.h2>
            <motion.p
              {...reveal()}
              className="mt-6 text-base text-muted-foreground"
            >
              {translated.description}
            </motion.p>
            <div className="mt-16 border-t border-border pt-8">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
              >
                02 / {copy.index.highlights}
              </motion.p>
              <div className="mt-7 space-y-0">
                {translated.highlights.map((highlight, itemIndex) => (
                  <div
                    key={highlight}
                    className="flex gap-5 border-b border-border py-5"
                  >
                    <motion.span
                      {...reveal()}
                      className="font-code text-xs text-primary"
                    >
                      0{itemIndex + 1}
                    </motion.span>
                    <motion.p {...reveal()} className="max-w-2xl text-sm">
                      {highlight}
                    </motion.p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <section className="border-y border-border bg-muted/20 py-16 sm:py-20">
          <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
            <div className="min-w-0">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                RUJUIT / NEXT BUILD
              </motion.p>
              <motion.h2
                {...reveal()}
                className="font-display mt-4 text-3xl font-bold tracking-tighter sm:text-4xl"
              >
                {copy.index.discuss}
              </motion.h2>
              <motion.p
                {...reveal()}
                className="mt-3 text-sm text-muted-foreground"
              >
                {copy.index.discussText}
              </motion.p>
              <div className="mt-6 flex flex-wrap gap-3">
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-3 bg-primary px-4 text-sm font-bold text-primary-foreground transition-transform hover:-translate-y-1"
                  >
                    {copy.index.live}
                    <ExternalLink className="size-4" />
                  </a>
                )}
                {project.repos.map((repo) => (
                  <a
                    key={repo.href}
                    href={repo.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex h-11 items-center gap-2 border border-border px-4 text-sm font-semibold transition-colors hover:border-primary"
                  >
                    {repo.label}
                    <ArrowUpRight className="size-4 text-primary" />
                  </a>
                ))}
              </div>
            </div>
            <Link
              href={`/${locale}#contact`}
              className="inline-flex h-12 shrink-0 items-center justify-center gap-3 border border-primary px-5 text-sm font-bold transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {copy.index.contact}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </section>
        <nav
          aria-label="Project navigation"
          className="section-atmosphere mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 py-12 sm:px-8 lg:px-12"
        >
          <Link
            href={`/${locale}/work/${previous.slug}`}
            className="group border border-border p-5 transition-colors hover:border-primary sm:p-7"
          >
            <motion.span
              {...reveal()}
              className="font-code flex items-center gap-2 text-[9px] tracking-widest text-muted-foreground"
            >
              <ArrowLeft className="size-3" /> {copy.index.previous}
            </motion.span>
            <motion.span
              {...reveal()}
              className="font-display mt-4 block text-lg font-bold sm:text-2xl"
            >
              {previous.title}
            </motion.span>
            <motion.span
              {...reveal()}
              className="mt-2 block text-xs text-muted-foreground sm:text-sm"
            >
              {
                copy.projects[previous.slug as keyof typeof copy.projects]
                  .summary
              }
            </motion.span>
          </Link>
          <Link
            href={`/${locale}/work/${next.slug}`}
            className="group border border-border p-5 text-right transition-colors hover:border-primary sm:p-7"
          >
            <motion.span
              {...reveal()}
              className="font-code flex items-center justify-end gap-2 text-[9px] tracking-widest text-muted-foreground"
            >
              {copy.index.next} <ArrowRight className="size-3" />
            </motion.span>
            <motion.span
              {...reveal()}
              className="font-display mt-4 block text-lg font-bold sm:text-2xl"
            >
              {next.title}
            </motion.span>
            <motion.span
              {...reveal()}
              className="mt-2 block text-xs text-muted-foreground sm:text-sm"
            >
              {copy.projects[next.slug as keyof typeof copy.projects].summary}
            </motion.span>
          </Link>
        </nav>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
