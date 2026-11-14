"use client"

import { ArrowUpRight } from "lucide-react"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqContent } from "@/features/home/data/faq"
import type { Locale } from "@/lib/i18n"

// Concise answers make common service questions easier for visitors and answer engines to understand.
export function FAQSection({ locale }: { locale: Locale }) {
  const isBangla = locale === "bn"

  return (
    <section
      id="faq"
      className="border-y border-border bg-muted/20 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.7fr_1.3fr] lg:px-12">
        <div>
          <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
            05 / {isBangla ? "সাধারণ প্রশ্ন" : "COMMON QUESTIONS"}
          </p>
          <h2 className="font-display mt-4 max-w-md text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
            {isBangla
              ? "শুরু করার আগে যা জানা দরকার।"
              : "A few things worth knowing."}
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-7 text-muted-foreground">
            {isBangla
              ? "আমাদের কাজ, প্রযুক্তি এবং একসাথে কাজ শুরু করার পদ্ধতি সম্পর্কে কিছু সাধারণ প্রশ্নের উত্তর।"
              : "Clear answers about our capabilities, the technologies we work with and how to start a conversation."}
          </p>
          <a
            href="#contact"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-primary"
          >
            {isBangla
              ? "আরও প্রশ্ন আছে? যোগাযোগ করুন"
              : "Still have a question? Talk to us"}
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
                <span>{item.question}</span>
              </AccordionTrigger>
              <AccordionContent className="max-w-2xl pb-4 text-sm leading-7 text-muted-foreground sm:text-base">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
