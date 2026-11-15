"use client"

import { motion } from "motion/react"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { useReveal } from "@/lib/use-reveal"
import type { Locale } from "@/lib/i18n"

import type { AboutCopy } from "../../types/types"

export function AboutHeroSection({
  locale,
  text,
}: {
  locale: Locale
  text: AboutCopy
}) {
  const reveal = useReveal()

  return (
    <section className="section-atmosphere relative overflow-hidden border-b border-border py-24 sm:py-32">
      <div aria-hidden="true" className="hero-art hero-art--about absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <motion.p
          {...reveal()}
          className="font-code text-[10px] tracking-[0.22em] text-primary"
        >
          <EncryptedText
            text={text.eyebrow}
            className="inline"
            revealedClassName="text-primary"
            encryptedClassName="text-primary/60"
          />
        </motion.p>
        <motion.h1
          {...reveal()}
          className="font-display mt-6 max-w-5xl text-5xl font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
        >
          {locale === "en" ? (
            <TypewriterEffect
              words={text.title.split(" ").map((word) => ({
                text: word,
                className: "text-foreground",
              }))}
              className="my-0 text-left text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl"
              cursorClassName="bg-primary"
            />
          ) : (
            text.title
          )}
        </motion.h1>
        <motion.p
          {...reveal()}
          className="mt-8 max-w-2xl text-lg text-muted-foreground"
        >
          {text.intro}
        </motion.p>
      </div>
    </section>
  )
}
