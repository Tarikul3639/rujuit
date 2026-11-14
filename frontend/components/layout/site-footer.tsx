"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MessageCircle } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

type SiteFooterProps = {
  locale: Locale
  dictionary: Dictionary
}

// The footer repeats essential navigation and the brand promise without adding clutter.
export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  const reveal = useReveal()

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Link
              href={`/${locale}`}
              className="mb-5 inline-flex items-center gap-3"
            >
              <Image
                src="/rujuit-logo.svg"
                alt=""
                width={36}
                height={36}
                className="size-9 object-contain"
              />
              <motion.span
                {...reveal()}
                className="font-display text-xl font-extrabold tracking-[-0.07em]"
              >
                Ruju
                <motion.span {...reveal()} className="text-primary">
                  It
                </motion.span>
              </motion.span>
            </Link>
            <motion.p
              {...reveal()}
              className="font-display text-2xl font-semibold tracking-tight"
            >
              {dictionary.footer.tagline}
            </motion.p>
            <motion.p
              {...reveal()}
              className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground"
            >
              {dictionary.footer.description}
            </motion.p>
          </div>

          <div>
            <motion.p
              {...reveal()}
              className="font-code mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary"
            >
              01 / {dictionary.footer.links}
            </motion.p>
            <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <Link
                href={`/${locale}/services`}
                className="hover:text-foreground"
              >
                {dictionary.nav.services}
              </Link>
              <Link href={`/${locale}/about`} className="hover:text-foreground">
                {dictionary.nav.approach}
              </Link>
              <Link href={`/${locale}/work`} className="hover:text-foreground">
                {dictionary.nav.work}
              </Link>
              <Link
                href={`/${locale}/contact`}
                className="hover:text-foreground"
              >
                {dictionary.nav.contact}
              </Link>
            </div>
          </div>

          <div>
            <motion.p
              {...reveal()}
              className="font-code mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary"
            >
              02 / {dictionary.footer.connect}
            </motion.p>

            {siteConfig.socialLinks.length > 0 ? (
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {siteConfig.socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`RujuIt on ${social.label}`}
                    className="inline-flex size-10 items-center justify-center border border-border text-xs font-bold text-muted-foreground transition-colors hover:border-primary hover:text-primary"
                  >
                    {social.label === "WhatsApp" ? (
                      <MessageCircle className="size-4" aria-hidden="true" />
                    ) : (
                      <motion.span {...reveal()} aria-hidden="true">
                        {
                          { LinkedIn: "in", Facebook: "f", Instagram: "◎" }[
                            social.label as
                              "LinkedIn" | "Facebook" | "Instagram"
                          ]
                        }
                      </motion.span>
                    )}
                  </a>
                ))}
              </div>
            ) : null}
            <motion.p
              {...reveal()}
              className="mt-8 text-xs text-muted-foreground"
            >
              {dictionary.footer.top}
            </motion.p>
            <Link
              href="#top"
              className="mt-2 inline-flex items-center gap-2 text-sm font-semibold"
            >
              {dictionary.footer.top}{" "}
              <ArrowUpRight className="size-4 text-primary" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <motion.span {...reveal()}>
            © {new Date().getFullYear()} RujuIt. {dictionary.footer.rights}
          </motion.span>
          <motion.span {...reveal()} className="font-code tracking-wide">
            ENGINEERED WITH INTENT.
          </motion.span>
        </div>
      </div>
    </footer>
  )
}
