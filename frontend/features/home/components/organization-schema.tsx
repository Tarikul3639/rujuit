import { faqContent } from "@/features/home/data/faq"
import type { Locale } from "@/lib/i18n"
import type { Dictionary } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

const siteUrl = siteConfig.url

// Structured data makes the agency, service categories and common answers explicit.
export function OrganizationSchema({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: "RujuIt",
    description: dictionary.meta.description,
    url: siteUrl,
    sameAs: siteConfig.socialLinks.map((link) => link.href),
    logo: siteUrl
      ? new URL("/rujuit-logo.svg", siteUrl).toString()
      : "/rujuit-logo.svg",
    knowsAbout: [
      "Full-stack web development",
      "Cloud engineering",
      "API integration",
      "Model Context Protocol servers",
      "AI automation",
      "Custom software development",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name:
        locale === "bn"
          ? "সফটওয়্যার ইঞ্জিনিয়ারিং সার্ভিস"
          : "Software Engineering Services",
      itemListElement: dictionary.services.items.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@type": "Organization", name: "RujuIt" },
        },
      })),
    },
  }

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: "RujuIt",
    url: siteUrl,
    inLanguage: locale === "bn" ? "bn-BD" : "en",
    publisher: { "@id": `${siteUrl}/#organization` },
  }

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqContent[locale].map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organization).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(website).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faq).replace(/</g, "\\u003c"),
        }}
      />
    </>
  )
}
