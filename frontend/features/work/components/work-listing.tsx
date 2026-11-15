"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"

import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { projects } from "@/features/work/data/projects"
import { getWorkCopy } from "@/features/work/data/copy"
import type { Dictionary, Locale } from "@/lib/i18n"

export function WorkListing({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const copy = getWorkCopy(locale)
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
          <div aria-hidden="true" className="hero-art hero-art--work absolute inset-0" />
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
              className="font-display mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
            >
              {locale === "en" ? (
                <TypewriterEffect
                  words={copy.index.title.split(" ").map((word) => ({
                    text: word,
                    className: "text-foreground",
                  }))}
                  className="my-0 text-left text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl"
                  cursorClassName="bg-primary"
                />
              ) : (
                copy.index.title
              )}
            </motion.h1>
            <motion.p
              {...reveal()}
              className="mt-7 max-w-2xl text-base text-muted-foreground sm:text-lg"
            >
              {copy.index.description}
            </motion.p>
            <motion.p
              {...reveal()}
              className="mt-4 max-w-2xl border-l border-primary/60 pl-4 text-xs text-muted-foreground"
            >
              {copy.index.note}
            </motion.p>
            <div className="font-code mt-10 flex items-center gap-3 text-[10px] tracking-widest text-muted-foreground">
              <motion.span {...reveal()} className="h-px w-12 bg-primary" />{" "}
              {String(projects.length).padStart(2, "0")} PROJECTS / ENGINEERING
              LOG
            </div>
          </div>
        </section>
        <section className="section-atmosphere mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {projects.map((project, index) => {
              const translated =
                copy.projects[project.slug as keyof typeof copy.projects]
              const cardDelay = (index % 2) * 0.14

              return (
                <motion.article
                  key={project.slug}
                  className={index % 3 === 1 ? "md:mt-20" : ""}
                >
                  <Link
                    href={`/${locale}/work/${project.slug}`}
                    className="group block"
                  >
                    <motion.div
                      {...reveal(cardDelay, 18, 0.7)}
                      className="relative aspect-16/10 overflow-hidden border border-border bg-muted"
                    >
                      {project.image ? (
                        <Image
                          src={project.image}
                          alt={`${project.title} project interface screenshot`}
                          fill
                          sizes="(max-width: 768px) 100vw, 50vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-[1.035]"
                        />
                      ) : (
                        <div className="font-display flex h-full items-center justify-center text-6xl font-black text-primary">
                          {project.monogram}
                        </div>
                      )}
                      <motion.span
                        {...reveal(cardDelay + 0.1, 8, 0.45)}
                        className="font-code absolute top-4 left-4 border border-border/70 bg-background/90 px-3 py-2 text-[10px] tracking-widest backdrop-blur"
                      >
                        {String(index + 1).padStart(2, "0")} / {project.year}
                      </motion.span>
                      <motion.span
                        {...reveal(cardDelay + 0.17, 8, 0.45)}
                        className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-45"
                      >
                        <ArrowUpRight className="size-4" />
                      </motion.span>
                      <span className="pointer-events-none absolute top-0 right-0 h-12 w-12 border-t border-r border-primary/0 transition-all duration-500 group-hover:h-16 group-hover:w-16 group-hover:border-primary/80" />
                    </motion.div>

                    <div className="mt-6 flex items-start justify-between gap-5 border-b border-border pb-5">
                      <div>
                        <motion.p
                          {...reveal(cardDelay + 0.2, 10, 0.48)}
                          className="font-code text-[10px] tracking-[0.18em] text-primary"
                        >
                          {project.category.toUpperCase()}
                        </motion.p>
                        <motion.h2
                          {...reveal(cardDelay + 0.25, 12, 0.5)}
                          className="font-display mt-3 text-2xl font-bold tracking-[-0.045em] transition-colors duration-300 group-hover:text-primary sm:text-3xl"
                        >
                          {project.title}
                        </motion.h2>
                        <motion.p
                          {...reveal(cardDelay + 0.3, 12, 0.5)}
                          className="mt-3 max-w-xl text-sm text-muted-foreground"
                        >
                          {translated.summary}
                        </motion.p>
                      </div>
                      <motion.span
                        {...reveal(cardDelay + 0.27, 8, 0.45)}
                        className="font-code mt-1 hidden shrink-0 text-xs text-muted-foreground sm:block"
                      >
                        RIT—{String(index + 1).padStart(2, "0")}
                      </motion.span>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.stack.slice(0, 5).map((tag, tagIndex) => (
                        <motion.span
                          {...reveal(
                            cardDelay + 0.34 + tagIndex * 0.04,
                            8,
                            0.4
                          )}
                          key={tag}
                          className="font-code border border-border px-2.5 py-1 text-[9px] text-muted-foreground transition-colors duration-300 group-hover:border-primary/35"
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </div>

                    <motion.span
                      {...reveal(cardDelay + 0.48, 8, 0.45)}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary"
                    >
                      {copy.index.view}
                      <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </motion.span>
                  </Link>
                </motion.article>
              )
            })}
          </div>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
