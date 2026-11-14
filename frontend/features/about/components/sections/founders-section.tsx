"use client"

import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"
import Image from "next/image"

import { useReveal } from "@/lib/use-reveal"
import type { Locale } from "@/lib/i18n"

import type { AboutCopy } from "../../types/types"

export function FoundersSection({
  locale,
  text,
}: {
  locale: Locale
  text: AboutCopy
}) {
  const reveal = useReveal()

  return (
    <section className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.p
          {...reveal()}
          className="font-code text-[10px] tracking-[0.2em] text-primary"
        >
          01 / {text.foundersEyebrow}
        </motion.p>
        <motion.h2
          {...reveal()}
          className="font-display mt-5 max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl"
        >
          {text.foundersTitle}
        </motion.h2>
        <motion.p
          {...reveal()}
          className="mt-5 max-w-2xl text-sm text-muted-foreground sm:text-base"
        >
          {text.foundersIntro}
        </motion.p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {text.founders.map((founder, index) => (
            <motion.article
              key={founder.name}
              {...reveal(index * 0.12, 18, 0.6)}
              className="group relative overflow-hidden border border-border bg-background"
            >
              <div className="grid min-h-56 grid-cols-1 sm:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
                <div className="relative min-h-72 overflow-hidden border-r border-border bg-card sm:min-h-80">
                  <Image
                    src={
                      index === 0
                        ? "/images/tarikul-islam.webp"
                        : "/images/sultan.jpeg"
                    }
                    alt={founder.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 40vw"
                    className="object-cover object-center"
                    priority={index === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/35 via-transparent to-transparent" />
                  <span className="font-code absolute right-5 bottom-5 text-[8px] tracking-[0.18em] text-white">
                    RUJUIT / 0{index + 1}
                  </span>
                </div>
                <div className="flex flex-col justify-center p-5 sm:p-7">
                  <p className="font-code text-[9px] tracking-[0.16em] text-primary">
                    CO-FOUNDER
                  </p>
                  <h3 className="font-display mt-3 text-xl font-bold tracking-tight sm:text-2xl">
                    {founder.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">
                    {founder.role}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground sm:text-sm">
                    {founder.bio}
                  </p>
                </div>
              </div>
              <div className="border-t border-border p-5 sm:p-7">
                <p className="font-code text-[9px] tracking-[0.16em] text-muted-foreground">
                  {locale === "bn" ? "FOCUS AREAS" : "FOCUS AREAS"}
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {founder.focus.map((item) => (
                    <span
                      key={item}
                      className="border border-border px-2.5 py-1.5 text-[10px] text-muted-foreground sm:text-xs"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap gap-4">
                  <a
                    href={founder.primaryUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-primary"
                  >
                    <ArrowUpRight className="size-4 text-primary" />
                    {founder.primaryLabel}
                  </a>
                  {founder.secondaryUrl && (
                    <a
                      href={founder.secondaryUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-xs font-semibold transition-colors hover:text-primary"
                    >
                      <ArrowUpRight className="size-4 text-primary" />
                      {founder.secondaryLabel}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
