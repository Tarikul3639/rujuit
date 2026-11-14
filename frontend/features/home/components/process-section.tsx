"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { Reveal } from "@/features/home/components/reveal"
import type { Dictionary } from "@/lib/i18n"

// Give visitors a concise view of the engagement journey without reproducing the full service pages.
export function ProcessSection({ dictionary }: { dictionary: Dictionary }) {
  const steps = dictionary.process.steps

  const reveal = useReveal()

  return (
    <section className="section-atmosphere border-y border-border bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <Reveal>
          <motion.p
            {...reveal()}
            className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary"
          >
            02 /{" "}
            <EncryptedText
              text={dictionary.process.eyebrow}
              className="inline"
              revealedClassName="text-primary"
              encryptedClassName="text-primary/60"
            />
          </motion.p>
        </Reveal>
        <Reveal delay={0.06}>
          <motion.h2
            {...reveal()}
            className="font-display mt-4 max-w-3xl text-3xl font-bold tracking-[-0.055em] text-balance sm:text-4xl lg:text-5xl"
          >
            {dictionary.process.title}
          </motion.h2>
        </Reveal>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * 0.06} className="h-full">
              <motion.article
                {...reveal()}
                className="flex h-full min-h-55 flex-col bg-background p-6 sm:p-7"
              >
                <motion.span
                  {...reveal()}
                  className="font-code text-xs tracking-widest text-primary"
                >
                  {number} / 04
                </motion.span>
                <motion.h3
                  {...reveal()}
                  className="font-display mt-10 text-xl font-bold tracking-tight"
                >
                  {title}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-3 text-sm text-muted-foreground"
                >
                  {description}
                </motion.p>
                <motion.span
                  {...reveal()}
                  className="font-code mt-auto pt-6 text-[9px] tracking-[0.16em] text-muted-foreground"
                >
                  {dictionary.principles.delivery}
                </motion.span>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
