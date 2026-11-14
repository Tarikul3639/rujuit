"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { FacebookIcon } from "@/components/icons/FacebookIcon"
import { useReveal } from "@/lib/use-reveal"
import { InstagramIcon } from "@/components/icons/InstagramIcon"
import { LinkedInIcon } from "@/components/icons/LinkedInIcon"
import { WhatsAppIcon } from "@/components/icons/WhatsAppIcon"

import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

const MotionLink = motion(Link)

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
                <motion.span {...reveal()} className="text-primary uppercase">
                  IT
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
              {[
                { href: `/${locale}/services`, label: dictionary.nav.services },
                { href: `/${locale}/about`, label: dictionary.nav.approach },
                { href: `/${locale}/work`, label: dictionary.nav.work },
                { href: `/${locale}/contact`, label: dictionary.nav.contact },
                {
                  href: `/${locale}/policies`,
                  label: dictionary.footer.policies,
                },
              ].map((item, index) => (
                <MotionLink
                  key={item.href}
                  href={item.href}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  whileFocus="hover"
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  variants={{
                    hidden: { opacity: 0, y: 18, x: 0 },
                    visible: { opacity: 1, y: 0, x: 0 },
                    hover: { opacity: 1, y: 0, x: 5 },
                  }}
                  className="group inline-flex items-center gap-2 transition-colors hover:text-foreground focus-visible:text-foreground focus-visible:outline-none"
                >
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, x: -5 },
                      visible: { opacity: 0, x: -5 },
                      hover: { opacity: 1, x: 0 },
                    }}
                    transition={{ type: "spring", stiffness: 500, damping: 28 }}
                    className="inline-flex items-center text-primary"
                    aria-hidden="true"
                  >
                    <ArrowRight className="size-3" strokeWidth={2.5} />
                  </motion.span>
                  {item.label}
                </MotionLink>
              ))}
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
                      <WhatsAppIcon className="size-4" />
                    ) : social.label === "LinkedIn" ? (
                      <LinkedInIcon className="size-4" />
                    ) : social.label === "Instagram" ? (
                      <InstagramIcon className="size-4" />
                    ) : (
                      <FacebookIcon className="size-4" />
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
