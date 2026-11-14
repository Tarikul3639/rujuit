"use client"

import Link from "next/link"
import { ArrowUpRight, FileText } from "lucide-react"

import type { getPolicies } from "@/features/policies/data/policies"

type PoliciesCopy = ReturnType<typeof getPolicies>
type PolicySection = PoliciesCopy["sections"][number]

export function PoliciesSidebar({
  copy,
  locale,
  contactLabel,
  activeSection,
  onSectionChange,
}: {
  copy: PoliciesCopy
  locale: "en" | "bn"
  contactLabel: string
  activeSection: PolicySection["id"]
  onSectionChange: (section: PolicySection["id"]) => void
}) {
  return (
    <aside className="lg:sticky lg:top-28 lg:max-h-[calc(100vh-9rem)] lg:self-start lg:overflow-y-auto">
      <div className="mb-5 flex items-center gap-2 border-b border-border pb-4">
        <FileText className="size-4 text-primary" />
        <p className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary">
          {copy.contents}
        </p>
      </div>
      <nav aria-label={copy.contents} className="grid gap-1">
        {copy.sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            onClick={() => onSectionChange(section.id)}
            aria-current={activeSection === section.id ? "location" : undefined}
            className={`group flex items-start gap-3 border-l-2 px-3 py-2.5 text-left text-sm transition-colors ${activeSection === section.id ? "border-primary bg-primary/5 text-foreground" : "border-border text-muted-foreground hover:border-primary/50 hover:text-foreground"}`}
          >
            <span className="font-code pt-0.5 text-[10px] text-primary">
              {section.number}
            </span>
            <span className="">{section.title}</span>
          </a>
        ))}
      </nav>
      <div className="mt-8 border-t border-border pt-5">
        <p className="text-xs text-muted-foreground">
          {locale === "bn"
            ? "প্রজেক্ট বা রেফারেল নিয়ে কোনো প্রশ্ন আছে?"
            : "Questions about a project or referral?"}
        </p>
        <Link
          href={`/${locale}/contact`}
          className="mt-3 inline-flex items-center gap-2 text-sm font-semibold hover:text-primary"
        >
          {contactLabel}
          <ArrowUpRight className="size-4 text-primary" />
        </Link>
      </div>
    </aside>
  )
}
