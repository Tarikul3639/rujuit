"use client"

import Link from "next/link"
import { motion } from "motion/react"
import { ArrowUpRight } from "lucide-react"

import { useReveal } from "@/lib/use-reveal"
import type { Dictionary, Locale } from "@/lib/i18n"

import type { AboutCopy } from "../../types/types"

export function AboutCtaSection({
  locale,
  dictionary,
  text,
}: {
  locale: Locale
  dictionary: Dictionary
  text: AboutCopy
}) {
  const reveal = useReveal()

  return (
    <section className="border-y border-border bg-primary py-16 text-primary-foreground">
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-5 sm:px-8 md:flex-row md:items-center md:justify-between lg:px-12">
        <div>
          <motion.h2
            {...reveal()}
            className="font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            {text.cta}
          </motion.h2>
          <motion.p
            {...reveal()}
            className="mt-3 text-sm text-primary-foreground/80"
          >
            {text.ctaBody}
          </motion.p>
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
  )
}
