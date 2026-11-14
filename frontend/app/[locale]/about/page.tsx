import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { AboutPage } from "@/features/about/components/about-page"
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
  return {
    title: value === "bn" ? "RujuIt সম্পর্কে" : "About RujuIt",
    description:
      value === "bn"
        ? "RujuIt-এর engineering philosophy, principles এবং কাজের পদ্ধতি জানুন।"
        : "Learn about RujuIt's engineering philosophy, principles and approach.",
    alternates: {
      canonical: `/${value}/about`,
      languages: { en: "/en/about", bn: "/bn/about" },
    },
  }
}

export default async function AboutRoute({ params }: PageProps) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  return <AboutPage locale={locale} dictionary={getDictionary(locale)} />
}
