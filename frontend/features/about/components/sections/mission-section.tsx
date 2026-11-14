"use client"

import { motion } from "motion/react"
import { Layers3 } from "lucide-react"

import { useReveal } from "@/lib/use-reveal"

import type { AboutCopy } from "../../types/types"

export function MissionSection({ text }: { text: AboutCopy }) {
  const reveal = useReveal()

  return (
    <section className="section-atmosphere mx-auto grid max-w-7xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-[0.65fr_1.35fr] lg:px-12 lg:py-28">
      <aside>
        <motion.p
          {...reveal()}
          className="font-code text-[10px] tracking-[0.2em] text-primary"
        >
          {text.mission}
        </motion.p>
        <div className="mt-5 flex size-14 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
          <Layers3 className="size-6" />
        </div>
      </aside>
      <div>
        <motion.h2
          {...reveal()}
          className="font-display max-w-3xl text-3xl font-bold tracking-tighter sm:text-5xl"
        >
          {text.missionTitle}
        </motion.h2>
        <motion.p
          {...reveal()}
          className="mt-7 max-w-3xl text-base text-muted-foreground"
        >
          {text.missionBody}
        </motion.p>
      </div>
    </section>
  )
}
