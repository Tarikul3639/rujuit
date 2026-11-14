"use client"

import { motion } from "motion/react"
import { Compass, GitBranch, Network, ShieldCheck } from "lucide-react"

import { useReveal } from "@/lib/use-reveal"

import type { AboutCopy } from "../../types/types"

const principleIcons = [Compass, GitBranch, Network, ShieldCheck]

export function PrinciplesSection({ text }: { text: AboutCopy }) {
  const reveal = useReveal()

  return (
    <section className="border-y border-border bg-muted/20 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.p
          {...reveal()}
          className="font-code text-[10px] tracking-[0.2em] text-primary"
        >
          01 / ENGINEERING PRINCIPLES
        </motion.p>
        <div className="mt-10 grid gap-0 border-y border-border sm:grid-cols-2">
          {text.principles.map((item, index) => {
            const Icon = principleIcons[index]
            return (
              <motion.article
                key={item.title}
                {...reveal()}
                className="border-b border-border p-7 last:border-b-0 sm:odd:border-r sm:nth-[3]:border-b-0"
              >
                <div className="flex items-center justify-between">
                  <Icon className="size-6 text-primary" />
                  <motion.span
                    {...reveal()}
                    className="font-code text-xs text-muted-foreground"
                  >
                    0{index + 1}
                  </motion.span>
                </div>
                <motion.h3
                  {...reveal()}
                  className="font-display mt-9 text-2xl font-bold tracking-tight"
                >
                  {item.title}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-3 max-w-md text-sm leading-7 text-muted-foreground"
                >
                  {item.body}
                </motion.p>
              </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
