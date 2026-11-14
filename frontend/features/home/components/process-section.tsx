"use client"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { Reveal } from "@/features/home/components/reveal"
import type { Dictionary } from "@/lib/i18n"

// Give visitors a concise view of the engagement journey without reproducing the full service pages.
export function ProcessSection({ dictionary }: { dictionary: Dictionary }) {
  const steps = dictionary.process.steps

  return (
    <section className="section-atmosphere border-y border-border bg-muted/20 py-20 sm:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <p className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary">
            02 / <EncryptedText text={dictionary.process.eyebrow} className="inline" revealedClassName="text-primary" encryptedClassName="text-primary/60" />
          </p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display mt-4 max-w-3xl text-3xl leading-tight font-bold tracking-[-0.055em] text-balance sm:text-4xl lg:text-5xl">
            {dictionary.process.title}
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(([number, title, description], index) => (
            <Reveal key={number} delay={index * 0.06} className="h-full">
              <article className="flex h-full min-h-55 flex-col bg-background p-6 sm:p-7">
                <span className="font-code text-xs tracking-widest text-primary">{number} / 04</span>
                <h3 className="font-display mt-10 text-xl font-bold tracking-tight">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{description}</p>
                <span className="mt-auto pt-6 font-code text-[9px] tracking-[0.16em] text-muted-foreground">
                  {dictionary.principles.delivery}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

