"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { ArrowUpRight, Menu, X } from "lucide-react"
import { AnimatePresence, motion } from "motion/react"

import { ThemeToggle } from "@/components/layout/theme-toggle"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/lib/site"
import type { Dictionary, Locale } from "@/lib/i18n"

type SiteHeaderProps = {
  locale: Locale
  dictionary: Dictionary
}

// Shared navigation keeps the main links and booking action consistent across pages.
export function SiteHeader({ locale, dictionary }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const links = [
    { label: dictionary.nav.services, href: `/${locale}/services` },
    { label: dictionary.nav.approach, href: `/${locale}/about#approach` },
    { label: dictionary.nav.work, href: `/${locale}/work` },
    { label: dictionary.nav.contact, href: `/${locale}/contact` },
  ]

  return (
    <header className="sticky top-0 z-50 border-b border-border/70 bg-background/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-12">
        <Link
          href={`/${locale}`}
          className="group flex items-center gap-3"
          aria-label="RujuIt home"
        >
          <Image
            src="/rujooit-logo.svg"
            alt=""
            width={38}
            height={38}
            priority
            className="size-9 object-contain"
          />
          <span className="font-display text-[1.35rem] font-extrabold tracking-[-0.07em]">
            Rujoo<span className="text-primary">IT</span>
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href={locale === "en" ? "/bn" : "/en"}
            className="px-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            aria-label="Change language"
          >
            {dictionary.nav.language}
          </Link>
          <ThemeToggle />
          <Button asChild className="h-10 rounded-md px-4 text-xs font-bold">
            <a href={siteConfig.calUrl} target="_blank" rel="noreferrer">
              {dictionary.nav.book}
              <ArrowUpRight className="ml-1 size-4" />
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Button
            variant="outline"
            size="icon"
            className="size-9 rounded-md"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-t border-border bg-background lg:hidden"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="flex min-h-11 items-center justify-between border-b border-border/70 text-sm font-medium"
                >
                  {link.label}
                  <ArrowUpRight className="size-4 text-muted-foreground" />
                </Link>
              ))}
              <div className="flex items-center justify-between pt-4">
                <Link
                  href={locale === "en" ? "/bn" : "/en"}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold text-primary"
                >
                  {dictionary.nav.language}
                </Link>
                <a
                  href={siteConfig.calUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold"
                >
                  {dictionary.nav.book}
                  <ArrowUpRight className="size-4 text-primary" />
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}