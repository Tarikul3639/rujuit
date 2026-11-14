"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { projects } from "@/features/work/data/projects"
import { getWorkCopy } from "@/features/work/data/copy"
import type { Locale } from "@/lib/i18n"

export function FeaturedWork({ locale }: { locale: Locale }) {
  const copy = getWorkCopy(locale)
  const selected = [projects[1], projects[0], projects[2]]

  const reveal = useReveal()

  return (
    <section className="border-y border-border py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-12 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <motion.p
              {...reveal()}
              className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
            >
              03 / {copy.index.eyebrow}
            </motion.p>
            <motion.h2
              {...reveal()}
              className="font-display mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl"
            >
              {copy.index.title}
            </motion.h2>
            <motion.p
              {...reveal()}
              className="mt-5 text-sm leading-7 text-muted-foreground"
            >
              {copy.index.description}
            </motion.p>
          </div>
          <Link
            href={`/${locale}/work`}
            className="inline-flex h-11 shrink-0 items-center gap-3 border-b border-primary text-sm font-bold transition-colors hover:text-primary"
          >
            {copy.index.back}
            <ArrowUpRight className="size-4 text-primary" />
          </Link>
        </div>
        <div className="grid gap-7 lg:grid-cols-[1.2fr_0.8fr]">
          {selected.map((project, index) => {
            const translated =
              copy.projects[project.slug as keyof typeof copy.projects]
            return (
              <Link
                key={project.slug}
                href={`/${locale}/work/${project.slug}`}
                className={index === 0 ? "group lg:row-span-2" : "group"}
              >
                <div
                  className={
                    index === 0
                      ? "relative aspect-16/10 overflow-hidden border border-border bg-muted lg:aspect-[1.3/1]"
                      : "relative aspect-video overflow-hidden border border-border bg-muted"
                  }
                >
                  {project.image && (
                    <Image
                      src={project.image}
                      alt={`${project.title} project interface`}
                      fill
                      sizes={
                        index === 0
                          ? "(max-width: 1024px) 100vw, 60vw"
                          : "(max-width: 1024px) 100vw, 40vw"
                      }
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                  <motion.span
                    {...reveal()}
                    className="font-code absolute top-4 left-4 bg-background/90 px-3 py-2 text-[9px] tracking-widest backdrop-blur"
                  >
                    {project.year} / {project.category.toUpperCase()}
                  </motion.span>
                  <motion.span
                    {...reveal()}
                    className="absolute right-4 bottom-4 flex size-10 items-center justify-center bg-primary text-primary-foreground transition-transform group-hover:rotate-45"
                  >
                    <ArrowUpRight className="size-4" />
                  </motion.span>
                </div>
                <div className="mt-4 flex items-start justify-between gap-4">
                  <div>
                    <motion.h3
                      {...reveal()}
                      className="font-display text-xl font-bold tracking-tight sm:text-2xl"
                    >
                      {project.title}
                    </motion.h3>
                    <motion.p
                      {...reveal()}
                      className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground"
                    >
                      {translated.summary}
                    </motion.p>
                  </div>
                  <motion.span
                    {...reveal()}
                    className="font-code text-[10px] text-primary"
                  >
                    0{index + 1}
                  </motion.span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
