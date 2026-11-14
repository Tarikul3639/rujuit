"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import { MobileNavigationSidebar } from "@/components/layout/mobile-sidebar"
import { siteConfig } from "@/lib/site"
import type { Dictionary, Locale } from "@/lib/i18n"

type SiteHeaderProps = {
  locale: Locale
  dictionary: Dictionary
}

// Shared navigation keeps the main links and booking action consistent across pages.
export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const pathname = usePathname()
  const enHref = pathname.replace(/^\/(en|bn)(?=\/|$)/, "/en")
  const bnHref = pathname.replace(/^\/(en|bn)(?=\/|$)/, "/bn")
  const links = [
    { label: dictionary.nav.services, href: `/${locale}/services` },
    { label: dictionary.nav.approach, href: `/${locale}/about` },
    { label: dictionary.nav.work, href: `/${locale}/work` },
    { label: dictionary.nav.contact, href: `/${locale}/contact` },
  ]

  const reveal = useReveal()

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-linear-to-r from-primary/10 via-background/85 to-primary/10 backdrop-blur-xl">
      <div className="mx-auto flex h-19 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3"
          aria-label="RujuIt home"
        >
          <Image
            src="/rujuit-logo.svg"
            alt=""
            width={38}
            height={38}
            priority
            className="size-9 object-contain"
          />
          <motion.span
            {...reveal()}
            className="font-display text-[1.35rem] font-extrabold tracking-tighter!"
          >
            Ruju
            <motion.span {...reveal()} className="text-primary uppercase">
              IT
            </motion.span>
          </motion.span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 lg:flex"
        >
          {links.map((link) => {
            const isActive =
              pathname === link.href || pathname.startsWith(`${link.href}/`)
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`group relative px-4 py-3 text-xs font-medium transition-colors duration-200 ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
              >
                <span className="relative z-10">{link.label}</span>
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-4 bottom-1 h-px origin-center bg-primary transition-transform duration-300 ease-out ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}`}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <div className="inline-flex items-center border border-border bg-muted/30 p-0.5">
            <div aria-label="Language" className="inline-flex items-center pl-2 pr-1">
              <Link
                href={enHref}
                hrefLang="en"
                aria-current={locale === "en" ? "page" : undefined}
                aria-label="English"
                className={`font-code relative isolate rounded-xs px-2 py-1 text-[9px] font-bold tracking-wide transition-colors duration-200 ${locale === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {locale === "en" && (
                  <motion.span
                    layoutId="desktop-language-indicator"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-xs bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                EN
              </Link>
              <Link
                href={bnHref}
                hrefLang="bn"
                aria-current={locale === "bn" ? "page" : undefined}
                aria-label="বাংলা"
                className={`font-code relative isolate rounded-xs px-2 py-1 text-[9px] font-bold tracking-wide transition-colors duration-200 ${locale === "bn" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
              >
                {locale === "bn" && (
                  <motion.span
                    layoutId="desktop-language-indicator"
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 rounded-xs bg-primary"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                বাংলা
              </Link>
            </div>
            <span aria-hidden="true" className="mx-1 h-4 w-px bg-border" />
            <ThemeToggle />
          </div>
          <Button
            asChild
            className="group relative h-10 overflow-hidden rounded-none border-2 border-primary bg-primary px-4 text-xs font-black tracking-wider text-primary-foreground shadow-[3px_3px_0px_var(--foreground)] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary hover:shadow-[5px_5px_0px_var(--foreground)] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none"
          >
            <a href={siteConfig.calUrl} target="_blank" rel="noreferrer">
              <span className="relative z-10">{dictionary.nav.book}</span>
              <ArrowUpRight className="relative z-10 ml-1 size-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              <span aria-hidden="true" className="absolute right-0 top-0 size-2 border-l border-b border-primary-foreground/70" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileNavigationSidebar
            locale={locale}
            dictionary={dictionary}
            links={links}
          />
        </div>
      </div>
    </header>
  )
}
