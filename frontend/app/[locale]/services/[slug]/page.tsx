import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ServiceDetail } from "@/features/services/components/service-detail"
import {
  getServiceContent,
  serviceSlugs,
} from "@/features/services/data/services"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = { params: Promise<{ locale: string; slug: string }> }

export function generateStaticParams() {
  return serviceSlugs.flatMap((slug) => [
    { locale: "en", slug },
    { locale: "bn", slug },
  ])
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: value, slug } = await params
  if (
    !isLocale(value) ||
    !serviceSlugs.includes(slug as (typeof serviceSlugs)[number])
  )
    return {}
  const service =
    getServiceContent(value).items[slug as (typeof serviceSlugs)[number]]
  return {
    title: service.title,
    description: service.short,
    alternates: {
      canonical: `/${value}/services/${slug}`,
      languages: { en: `/en/services/${slug}`, bn: `/bn/services/${slug}` },
    },
  }
}

export default async function ServicePage({ params }: PageProps) {
  const { locale: value, slug } = await params
  if (
    !isLocale(value) ||
    !serviceSlugs.includes(slug as (typeof serviceSlugs)[number])
  )
    notFound()
  const locale: Locale = value
  return (
    <ServiceDetail
      slug={slug as (typeof serviceSlugs)[number]}
      locale={locale}
      dictionary={getDictionary(locale)}
    />
  )
}
