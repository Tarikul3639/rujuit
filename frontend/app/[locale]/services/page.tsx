import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServicesListing } from "@/features/services/components/services-listing"
import { getServiceContent } from "@/features/services/data/services"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: string }> }

export function generateStaticParams() { return [{ locale: "en" }, { locale: "bn" }] }

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: value } = await params
  if (!isLocale(value)) return {}
  const copy = getServiceContent(value).index
  return { title: value === "bn" ? "সফটওয়্যার ডেভেলপমেন্ট সার্ভিস" : "Software Engineering Services", description: copy.description, alternates: { canonical: `/${value}/services`, languages: { en: "/en/services", bn: "/bn/services" } } }
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  return <ServicesListing locale={locale} dictionary={getDictionary(locale)}/>
}
