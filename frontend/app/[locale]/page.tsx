import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { HomePage } from "@/features/home/components/home-page"
import { OrganizationSchema } from "@/features/home/components/organization-schema"
import { getDictionary, isLocale, type Locale } from "@/lib/i18n"

type PageProps = {
  params: Promise<{ locale: string }>
}

// Pre-render both supported language versions.
export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "bn" }]
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) return {}

  const dictionary = getDictionary(localeParam)
  const canonical = `/${localeParam}`

  return {
    title: dictionary.meta.title,
    description: dictionary.meta.description,
    alternates: {
      canonical,
      languages: { en: "/en", bn: "/bn" },
    },
    openGraph: {
      locale: localeParam === "bn" ? "bn_BD" : "en_US",
      title: dictionary.meta.title,
      description: dictionary.meta.description,
      url: canonical,
    },
  }
}

export default async function LocaleHome({ params }: PageProps) {
  const { locale: localeParam } = await params
  if (!isLocale(localeParam)) notFound()

  const locale: Locale = localeParam
  return (
    <>
      <OrganizationSchema locale={locale} dictionary={getDictionary(locale)} />
      <HomePage locale={locale} dictionary={getDictionary(locale)} />
    </>
  )
}
