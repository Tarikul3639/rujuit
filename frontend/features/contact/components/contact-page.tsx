"use client"

import {
  ArrowUpRight,
  CalendarDays,
  Mail,
  MessageSquareText,
} from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { TypewriterEffect } from "@/components/ui/typewriter-effect"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { ContactForm } from "@/features/contact/components/contact-form"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"
import { contactCopy as enContact } from "@/messages/en/contact"
import { contactCopy as bnContact } from "@/messages/bn/contact"

export function ContactPage({
  locale,
  dictionary,
}: {
  locale: Locale
  dictionary: Dictionary
}) {
  const text = locale === "en" ? enContact : bnContact
  const reveal = useReveal()

  return (
    <>
      <LocaleDocument locale={locale} />
      <main
        id="top"
        lang={locale === "bn" ? "bn-BD" : "en"}
        className={
          locale === "bn" ? "locale-bn min-h-screen" : "locale-en min-h-screen"
        }
      >
        <SiteHeader locale={locale} dictionary={dictionary} />
        <section className="section-atmosphere relative overflow-hidden border-b border-border py-24 sm:py-32">
          <div className="site-grid absolute inset-0 opacity-50" />
          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <motion.p
              {...reveal()}
              className="font-code text-[10px] tracking-[0.22em] text-primary"
            >
              <EncryptedText
                text={text.eyebrow}
                className="inline"
                revealedClassName="text-primary"
                encryptedClassName="text-primary/60"
              />
            </motion.p>
            <motion.h1
              {...reveal()}
              className="font-display mt-6 max-w-4xl text-5xl font-extrabold tracking-[-0.065em] text-balance sm:text-7xl"
            >
              {locale === "en" ? (
                <TypewriterEffect
                  words={text.title.split(" ").map((word) => ({
                    text: word,
                    className: "text-foreground",
                  }))}
                  className="my-0 text-left text-5xl font-extrabold tracking-[-0.065em] sm:text-7xl"
                  cursorClassName="bg-primary"
                />
              ) : (
                text.title
              )}
            </motion.h1>
            <motion.p
              {...reveal()}
              className="mt-7 max-w-2xl text-lg text-muted-foreground"
            >
              {text.intro}
            </motion.p>
          </div>
        </section>
        <section className="section-atmosphere mx-auto grid max-w-7xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1fr_0.8fr] lg:px-12 lg:py-28">
          <div className="border border-border bg-card p-5 sm:p-9">
            <div className="mb-8 border-b border-border pb-5">
              <motion.p
                {...reveal()}
                className="font-code text-[10px] tracking-[0.2em] text-primary"
              >
                01 / {text.form}
              </motion.p>
              <motion.p
                {...reveal()}
                className="mt-3 text-sm text-muted-foreground"
              >
                {text.note}
              </motion.p>
            </div>
            <ContactForm dictionary={dictionary.contact} />
          </div>
          <aside className="space-y-8">
            <div className="border-t border-border pt-5">
              <div className="flex size-11 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                <CalendarDays className="size-5" />
              </div>
              <motion.h2
                {...reveal()}
                className="font-display mt-5 text-xl font-bold"
              >
                {text.booking}
              </motion.h2>
              <motion.p
                {...reveal()}
                className="mt-3 text-sm text-muted-foreground"
              >
                {text.bookingText}
              </motion.p>
              <a
                href={siteConfig.calUrl}
                target="_blank"
                rel="noreferrer"
                className="group relative isolate mt-5 inline-flex h-11 items-center gap-2 overflow-hidden bg-primary px-4 text-sm font-bold text-primary-foreground"
              >
                <span aria-hidden="true" className="absolute inset-0 -z-10 -translate-x-full bg-foreground transition-transform duration-500 ease-in-out group-hover:translate-x-0" />
                <span className="transition-colors duration-300 group-hover:text-background">{dictionary.nav.book}</span>
                <ArrowUpRight className="size-4 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-background" />
              </a>
            </div>
            {siteConfig.email && (
              <div className="border-t border-border pt-5">
                <Mail className="size-5 text-primary" />
                <motion.h2 {...reveal()} className="mt-4 text-sm font-bold">
                  {text.email}
                </motion.h2>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="mt-2 inline-block text-sm text-muted-foreground hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>
            )}
            <div className="border-t border-border pt-5">
              <MessageSquareText className="size-5 text-primary" />
              <motion.p
                {...reveal()}
                className="mt-4 text-sm text-muted-foreground"
              >
                {text.response}
              </motion.p>
            </div>
          </aside>
        </section>
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
