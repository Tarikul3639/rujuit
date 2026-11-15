"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { usePathname } from "next/navigation"
import { ArrowUpRight, Menu } from "lucide-react"
import { motion } from "motion/react"

import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/lib/site"
import type { Dictionary, Locale } from "@/lib/i18n"

type NavigationLink = {
  label: string
  href: string
}

type MobileNavigationSidebarProps = {
  locale: Locale
  dictionary: Dictionary
  links: NavigationLink[]
}

export function MobileNavigationSidebar({
  locale,
  dictionary,
  links,
}: MobileNavigationSidebarProps) {
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  const enHref = pathname.replace(/^\/(en|bn)(?=\/|$)/, "/en")
  const bnHref = pathname.replace(/^\/(en|bn)(?=\/|$)/, "/bn")

  return (
    <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="size-9 rounded-md"
          aria-label="Open navigation menu"
        >
          <Menu className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        side="right"
        className="w-[min(86vw,22rem)] border-l border-border bg-background p-0"
      >
        <SheetHeader className="border-b border-border px-6 py-6 text-left">
          <SheetTitle className="flex items-center gap-3">
            <Image
              src="/rujuit-logo.svg"
              alt=""
              width={32}
              height={32}
              className="size-8 object-contain"
            />
            <span className="font-display text-lg font-extrabold tracking-tight">
              Ruju<span className="text-primary">IT</span>
            </span>
          </SheetTitle>
          <SheetDescription className="font-code text-[10px] tracking-[0.16em]">
            NAVIGATION / {locale.toUpperCase()}
          </SheetDescription>
        </SheetHeader>

        <nav
          aria-label="Mobile navigation"
          className="flex flex-1 flex-col px-4 py-6"
        >
          <p className="font-code mb-3 px-3 text-[9px] tracking-[0.18em] text-muted-foreground">
            MENU
          </p>
          <div className="flex flex-col gap-1">
            {[{ label: dictionary.nav.home, href: `/${locale}` }, ...links].map(
              (link, index) => {
                const isHomeLink = link.href === `/${locale}`
                const isActive = isHomeLink
                  ? pathname === link.href
                  : pathname === link.href ||
                    pathname.startsWith(`${link.href}/`)
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`group relative flex min-h-12 items-center justify-between border-b border-border/60 px-3 text-sm transition-colors duration-200 ${isActive ? "font-semibold text-primary" : "text-muted-foreground hover:text-primary"}`}
                  >
                    <span className="flex items-center gap-3">
                      <span
                        className={`font-code text-[10px] transition-colors ${isActive ? "text-primary" : "text-muted-foreground/60 group-hover:text-primary/80"}`}
                      >
                        0{index + 1}
                      </span>
                      {link.label}
                    </span>
                    <ArrowUpRight
                      className={`size-4 transition-all duration-200 ${isActive ? "text-primary" : "text-muted-foreground/50 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary"}`}
                    />
                  </Link>
                )
              }
            )}
          </div>

          <div className="mt-auto border-t border-border pt-5">
            <div className="flex items-center justify-between gap-3 px-1">
              <div className="inline-flex items-center rounded-full border border-border bg-muted/40 p-1">
                <Link
                  href={enHref}
                  hrefLang="en"
                  aria-current={locale === "en" ? "page" : undefined}
                  aria-label="English"
                  className={`font-code relative isolate rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wide transition-colors duration-200 ${locale === "en" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {locale === "en" && (
                    <motion.span
                      layoutId="mobile-language-indicator"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                  EN
                </Link>
                <Link
                  href={bnHref}
                  hrefLang="bn"
                  aria-current={locale === "bn" ? "page" : undefined}
                  aria-label="বাংলা"
                  className={`font-code relative isolate rounded-full px-3 py-1.5 text-[10px] font-bold tracking-wide transition-colors duration-200 ${locale === "bn" ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"}`}
                >
                  {locale === "bn" && (
                    <motion.span
                      layoutId="mobile-language-indicator"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-full bg-primary shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 420,
                        damping: 34,
                      }}
                    />
                  )}
                  বাংলা
                </Link>
              </div>
              <span className="font-code text-[9px] font-medium tracking-[0.16em] text-muted-foreground/60">
                LANGUAGE
              </span>
            </div>

            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="group mt-4 flex min-h-14 items-center justify-center-safe gap-2 rounded-xs border border-primary bg-primary px-4 text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-primary/90 hover:shadow-md hover:shadow-primary/20 active:scale-[0.99]"
            >
              <span> {dictionary.nav.book}</span>
              <span className="flex size-5 items-center justify-center rounded-full bg-background text-primary transition-transform duration-200 group-hover:translate-x-1">
                <ArrowUpRight className="size-3" />
              </span>
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}
