"use client"

import { motion } from "motion/react"

import { useReveal } from "@/lib/use-reveal"

import type { AboutCopy } from "../../types/types"

export function ApproachSection({ text }: { text: AboutCopy }) {
  const reveal = useReveal()

  return (
    <section
      id="approach"
      className="section-atmosphere mx-auto max-w-7xl scroll-mt-24 px-5 py-20 sm:px-8 lg:px-12 lg:py-28"
    >
      <motion.p
        {...reveal()}
        className="font-code text-[10px] tracking-[0.2em] text-primary"
      >
        02 / {text.approach}
      </motion.p>
      <motion.h2
        {...reveal()}
        className="font-display mt-5 max-w-3xl text-4xl font-bold tracking-tighter sm:text-5xl"
      >
        {text.approachTitle}
      </motion.h2>
      <div className="mt-12 grid gap-5 md:grid-cols-4">
        {text.steps.map(([number, title, body]) => (
          <motion.article
            key={number}
            {...reveal()}
            className="border-t border-border pt-5"
          >
            <motion.span
              {...reveal()}
              className="font-code text-xs text-primary"
            >
              {number} / 04
            </motion.span>
            <motion.h3
              {...reveal()}
              className="font-display mt-8 text-2xl font-bold"
            >
              {title}
            </motion.h3>
            <motion.p
              {...reveal()}
              className="mt-3 text-sm text-muted-foreground"
            >
              {body}
            </motion.p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
