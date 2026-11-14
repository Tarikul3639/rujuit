"use client"

import { CheckCircle2 } from "lucide-react"
import { motion } from "motion/react"

import type { getPolicies } from "@/features/policies/data/policies"
import { useReveal } from "@/lib/use-reveal"

type PoliciesCopy = ReturnType<typeof getPolicies>
type PolicySection = PoliciesCopy["sections"][number]

export function PoliciesContent({
  copy,
  onSectionChange,
}: {
  copy: PoliciesCopy
  onSectionChange: (section: PolicySection["id"]) => void
}) {
  const reveal = useReveal()

  return (
    <div className="min-w-0">
      <motion.div
        {...reveal()}
        className="mb-12 border border-primary/25 bg-primary/4 p-5 sm:p-6"
      >
        <div className="flex items-center gap-2 text-sm font-semibold">
          <CheckCircle2 className="size-4 text-primary" />
          {copy.noteTitle}
        </div>
        <p className="mt-3 text-sm text-muted-foreground">{copy.note}</p>
      </motion.div>

      <div className="divide-y divide-border">
        {copy.sections.map((section) => (
          <article
            id={section.id}
            key={section.id}
            className="scroll-mt-28 py-10 first:pt-0 last:pb-0"
            onMouseEnter={() => onSectionChange(section.id)}
          >
            <div className="flex items-center gap-3">
              <span className="font-code text-xs tracking-wider text-primary">
                {section.number} / 12
              </span>
              <span className="h-px flex-1 bg-border" />
            </div>
            <h2 className="font-display mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              {section.title}
            </h2>
            <p className="mt-4 text-base sm:text-lg font-medium text-foreground/90">
              {section.intro}
            </p>
            <div className="mt-5 space-y-4">
              {section.paragraphs.map((paragraph, index) => (
                <p
                  key={index}
                  className="text-sm text-muted-foreground sm:text-base"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
