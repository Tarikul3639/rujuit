"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import Link from "next/link"
import { ArrowUpRight, Code2, Layers3, Network } from "lucide-react"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { Reveal } from "@/features/home/components/reveal"
import type { HomePageProps } from "@/features/home/components/home-page.types"

// Summarize the principles behind the work; detailed company information remains on the About page.
export function PrinciplesSection({ dictionary, locale }: HomePageProps) {
  const icons = [Code2, Layers3, Network]

  const reveal = useReveal()

  return (
    <section className="section-atmosphere py-20 sm:py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-12">
        <div>
          <Reveal>
            <motion.p
              {...reveal()}
              className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary"
            >
              03 /{" "}
              <EncryptedText
                text={dictionary.principles.eyebrow}
                className="inline"
                revealedClassName="text-primary"
                encryptedClassName="text-primary/60"
              />
            </motion.p>
          </Reveal>
          <Reveal delay={0.06}>
            <motion.h2
              {...reveal()}
              className="font-display mt-4 max-w-xl text-3xl leading-tight font-bold tracking-[-0.055em] text-balance sm:text-4xl lg:text-5xl"
            >
              {dictionary.approach.title}
            </motion.h2>
          </Reveal>
          <Reveal delay={0.12}>
            <motion.p
              {...reveal()}
              className="mt-5 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base"
            >
              {dictionary.approach.description}
            </motion.p>
          </Reveal>
          <Reveal delay={0.18}>
            <Link
              href={`/${locale}/about`}
              className="group mt-7 inline-flex items-center gap-3 border-b border-primary/50 pb-2 text-sm font-bold transition-colors hover:text-primary"
            >
              {dictionary.explore.aboutCta}
              <ArrowUpRight className="size-4 text-primary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </Reveal>
        </div>

        <div className="border-y border-border">
          {dictionary.approach.pillars.map(([title, description], index) => {
            const Icon = icons[index]
            return (
              <Reveal key={title} delay={index * 0.07}>
                <motion.article
                  {...reveal()}
                  className="grid grid-cols-[44px_1fr] gap-4 border-b border-border py-6 last:border-b-0 sm:gap-6 sm:py-7"
                >
                  <motion.span
                    {...reveal()}
                    className="flex size-10 items-center justify-center border border-primary/30 bg-primary/5 text-primary"
                  >
                    <Icon className="size-4" />
                  </motion.span>
                  <div>
                    <motion.span
                      {...reveal()}
                      className="font-code text-[9px] tracking-[0.18em] text-primary"
                    >
                      0{index + 1}
                    </motion.span>
                    <motion.h3
                      {...reveal()}
                      className="font-display mt-1 text-lg font-bold tracking-tight sm:text-xl"
                    >
                      {title}
                    </motion.h3>
                    <motion.p
                      {...reveal()}
                      className="mt-2 max-w-xl text-sm leading-7 text-muted-foreground"
                    >
                      {description}
                    </motion.p>
                  </div>
                </motion.article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
