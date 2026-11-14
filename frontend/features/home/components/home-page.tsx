import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import { FAQSection } from "@/features/home/components/faq-section"
import { BookingSection } from "@/features/home/components/booking-section"
import { ExploreSection } from "@/features/home/components/explore-section"
import { HeroSection } from "@/features/home/components/hero-section"
import { PrinciplesSection } from "@/features/home/components/principles-section"
import { ProcessSection } from "@/features/home/components/process-section"
import type { HomePageProps } from "@/features/home/components/home-page.types"

export function HomePage({ locale, dictionary }: HomePageProps) {
  return (
    <>
      <LocaleDocument locale={locale} />
      <main
        id="top"
        lang={locale === "bn" ? "bn-BD" : "en"}
        className={locale === "bn" ? "locale-bn" : "locale-en"}
      >
        <SiteHeader locale={locale} dictionary={dictionary} />
        <HeroSection locale={locale} dictionary={dictionary} />
        <ExploreSection locale={locale} dictionary={dictionary} />
        <ProcessSection dictionary={dictionary} />
        <PrinciplesSection locale={locale} dictionary={dictionary} />
        <FAQSection locale={locale} />
        <BookingSection dictionary={dictionary} />
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
