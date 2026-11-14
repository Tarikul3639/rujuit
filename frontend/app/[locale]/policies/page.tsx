import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { PoliciesPage } from "@/features/policies/components/policies-page"
import { getPolicies } from "@/features/policies/data/policies"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }]
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: value } = await params
  if (!isLocale(value)) return {}
  const copy = getPolicies(value)
  return {
    title: value === "bn" ? "নীতিমালা ও গোপনীয়তা" : "Policies & Privacy",
    description: copy.description,
    alternates: {
      canonical: `/${value}/policies`,
      languages: { en: "/en/policies", bn: "/bn/policies" },
    },
  }
}

export default async function PoliciesRoute({ params }: PageProps) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  return <PoliciesPage locale={locale} dictionary={getDictionary(locale)} />
}
