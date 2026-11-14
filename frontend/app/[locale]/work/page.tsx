import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { WorkListing } from "@/features/work/components/work-listing"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: string }> }

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale: value } = await params
  if (!isLocale(value)) return {}
  const title = value === "bn" ? "নির্বাচিত প্রজেক্ট ও ইঞ্জিনিয়ারিং কাজ" : "Selected Projects & Engineering Work"
  const description = value === "bn" ? "RujooIT-এর নির্বাচিত সফটওয়্যার, AI এবং full-stack engineering project দেখুন।" : "Explore selected software, AI infrastructure and full-stack engineering projects."
  return { title, description, alternates: { canonical: `/${value}/work`, languages: { en: "/en/work", bn: "/bn/work" } }, openGraph: { title, description, url: `/${value}/work` } }
}

export default async function WorkPage({ params }: PageProps) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  return <WorkListing locale={locale} dictionary={getDictionary(locale)} />
}
