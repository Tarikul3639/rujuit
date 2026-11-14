"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { ArrowUpRight } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/features/home/data/faq"
import { getDictionary } from "@/lib/get-dictionary"
import type { Locale } from "@/lib/i18n"

// Concise answers make common service questions easier for visitors and answer engines to understand.
export function FAQSection({ locale }: { locale: Locale }) {
  const copy = getDictionary(locale).faq

  const reveal = useReveal()

  return (
    <section
      id="faq"
      className="border-y border-border bg-muted/20 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <motion.p
            {...reveal()}
            className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary"
          >
            05 / {copy.eyebrow}
          </motion.p>
          <motion.h2
            {...reveal()}
            className="font-display mt-4 max-w-md text-4xl font-bold tracking-[-0.055em] text-balance sm:text-5xl"
          >
            {copy.title}
          </motion.h2>
          <motion.p
            {...reveal()}
            className="mt-6 max-w-sm text-sm text-muted-foreground"
          >
            {copy.description}
          </motion.p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            {copy.contactLink}
            <ArrowUpRight className="size-4" />
          </a>
        </div>

        <Accordion type="single" collapsible className="border-t border-border">
          {faqContent[locale].map((item, index) => (
            <AccordionItem
              key={item.question}
              value={`question-${index}`}
              className="border-b border-border py-3"
            >
              <AccordionTrigger className="gap-5 py-4 text-left text-base font-semibold hover:no-underline sm:text-lg">
                <motion.span {...reveal()}>{item.question}</motion.span>
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-4 text-sm text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
