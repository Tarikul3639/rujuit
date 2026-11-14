import { ArrowUpRight, CalendarDays, Mail, MessageSquareText } from "lucide-react"

import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ContactForm } from "@/features/home/components/contact-form"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

const copy = {
  en: { eyebrow: "CONTACT / START A CONVERSATION", title: "Tell us what you're looking to build.", intro: "Share the challenge, the idea or the workflow you want to improve. We can help you work out a sensible technical direction.", form: "Project inquiry", email: "Email", booking: "Book a discovery call", bookingText: "Prefer to talk it through? Choose a time for an introductory conversation.", response: "A useful first conversation starts with context, not a sales script.", note: "This form currently validates in your browser only. It does not send or store submissions." },
  bn: { eyebrow: "যোগাযোগ / আলোচনা শুরু করুন", title: "আপনি কী তৈরি করতে চান, আমাদের জানান।", intro: "আপনার challenge, idea অথবা যে workflow উন্নত করতে চান তা জানান। সঠিক technical direction খুঁজে পেতে আমরা সাহায্য করতে পারি।", form: "প্রজেক্ট ইনকোয়ারি", email: "ইমেইল", booking: "একটি discovery call বুক করুন", bookingText: "সরাসরি আলোচনা করতে চান? পরিচিতিমূলক কথোপকথনের জন্য সময় বেছে নিন।", response: "ভালো প্রথম আলোচনা শুরু হয় প্রেক্ষাপট দিয়ে, sales script দিয়ে নয়।", note: "এই form আপাতত শুধু browser-এ validation করে। কোনো তথ্য পাঠায় বা সংরক্ষণ করে না।" }
} as const

export function ContactPage({ locale, dictionary }: { locale: Locale; dictionary: Dictionary }) {
  const text = copy[locale]
  return (
    <>
      <LocaleDocument locale={locale} />
      <main id="top" lang={locale === "bn" ? "bn-BD" : "en"} className={locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"}>
        <SiteHeader locale={locale} dictionary={dictionary} />
        <section className="relative overflow-hidden border-b border-border py-24 sm:py-32"><div className="site-grid absolute inset-0 opacity-50"/><div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12"><p className="font-code text-[10px] tracking-[0.22em] text-primary">{text.eyebrow}</p><h1 className="font-display mt-6 max-w-4xl text-5xl leading-[1.02] font-extrabold tracking-[-0.065em] text-balance sm:text-7xl">{text.title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{text.intro}</p></div></section>
        <section className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.1fr_0.65fr] lg:px-12 lg:py-28">
          <div className="border border-border bg-card p-5 sm:p-9"><div className="mb-8 border-b border-border pb-5"><p className="font-code text-[10px] tracking-[0.2em] text-primary">01 / {text.form}</p><p className="mt-3 text-sm text-muted-foreground">{text.note}</p></div><ContactForm dictionary={dictionary.contact}/></div>
          <aside className="space-y-8">
            <div className="border-t border-border pt-5"><div className="flex size-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary"><CalendarDays className="size-5"/></div><h2 className="font-display mt-5 text-xl font-bold">{text.booking}</h2><p className="mt-3 text-sm leading-7 text-muted-foreground">{text.bookingText}</p><a href={siteConfig.calUrl} target="_blank" rel="noreferrer" className="mt-5 inline-flex h-11 items-center gap-2 bg-primary px-4 text-sm font-bold text-primary-foreground">{dictionary.nav.book}<ArrowUpRight className="size-4"/></a></div>
            {siteConfig.email && <div className="border-t border-border pt-5"><Mail className="size-5 text-primary"/><h2 className="mt-4 text-sm font-bold">{text.email}</h2><a href={`mailto:${siteConfig.email}`} className="mt-2 inline-block text-sm text-muted-foreground hover:text-primary">{siteConfig.email}</a></div>}
            <div className="border-t border-border pt-5"><MessageSquareText className="size-5 text-primary"/><p className="mt-4 text-sm leading-7 text-muted-foreground">{text.response}</p></div>
          </aside>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary}/>
      </main>
    </>
  )
}
