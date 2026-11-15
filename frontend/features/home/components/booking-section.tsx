"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { ArrowUpRight } from "lucide-react"

import { Reveal } from "@/features/home/components/reveal"
import type { Dictionary } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

// Restore the prominent booking panel near the footer as a distinct conversion point.
export function BookingSection({ dictionary }: { dictionary: Dictionary }) {
  const reveal = useReveal()

  return (
    <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-12">
      <div className="relative mx-auto max-w-7xl overflow-hidden border border-primary/40 bg-primary px-6 py-10 text-black sm:px-10 sm:py-14 lg:px-16 lg:py-16">
        <div className="pointer-events-none absolute -right-16 -bottom-40 size-90 rotate-12 border border-black/15 sm:-right-5 sm:size-115" />
        <div className="pointer-events-none absolute -right-2 -bottom-28 size-65 -rotate-12 border border-black/15 sm:size-85" />
        <div className="relative grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <Reveal>
              <motion.p
                {...reveal()}
                className="font-code text-[10px] font-bold tracking-[0.2em] text-black/65"
              >
                05 / {dictionary.booking.eyebrow}
              </motion.p>
            </Reveal>
            <Reveal delay={0.06}>
              <motion.h2
                {...reveal()}
                className="font-display mt-4 text-3xl font-extrabold tracking-[-0.06em] text-balance sm:text-4xl lg:text-6xl"
              >
                {dictionary.booking.title}
              </motion.h2>
            </Reveal>
            <Reveal delay={0.12}>
              <motion.p
                {...reveal()}
                className="sm: mt-5 max-w-2xl text-sm text-black/70 sm:text-base"
              >
                {dictionary.contact.description}
              </motion.p>
            </Reveal>
          </div>
          <Reveal delay={0.18}>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="group relative isolate inline-flex min-h-14 w-full items-center justify-center gap-4 overflow-hidden border border-black bg-black px-6 py-4 text-sm font-bold text-primary sm:w-auto"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 -z-10 -translate-x-full bg-primary transition-transform duration-500 ease-in-out group-hover:translate-x-0"
              />
              <span className="transition-colors duration-300 group-hover:text-black">
                {dictionary.contact.book}
              </span>
              <ArrowUpRight className="size-5 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-black" />
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
