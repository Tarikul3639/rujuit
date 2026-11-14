import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { ContactPage } from "@/features/contact/components/contact-page"
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
    title: value === "bn" ? "যোগাযোগ করুন" : "Contact RujuIt",
    description:
      value === "bn"
        ? "আপনার সফটওয়্যার বা automation project নিয়ে RujuIt-এর সাথে আলোচনা শুরু করুন।"
        : "Start a conversation with RujuIt about your software, AI or automation project.",
    alternates: {
      canonical: `/${value}/contact`,
      languages: { en: "/en/contact", bn: "/bn/contact" },
    },
  }
}

export default async function ContactRoute({ params }: PageProps) {
  const { locale: value } = await params
  if (!isLocale(value)) notFound()
  const locale: Locale = value
  return <ContactPage locale={locale} dictionary={getDictionary(locale)} />
}