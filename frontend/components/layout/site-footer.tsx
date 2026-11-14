import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, MoveUpRight } from "lucide-react"

import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

type SiteFooterProps = {
  locale: Locale
  dictionary: Dictionary
}

// The footer repeats essential navigation and the brand promise without adding clutter.
export function SiteFooter({ locale, dictionary }: SiteFooterProps) {
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-[1440px] px-5 py-14 sm:px-8 lg:px-12">
        <div className="grid gap-12 md:grid-cols-[1.5fr_0.7fr_1fr]">
          <div className="max-w-md">
            <Link
              href={`/${locale}`}
              className="mb-5 inline-flex items-center gap-3"
            >
              <Image
                src="/rujooit-logo.svg"
                alt=""
                width={36}
                height={36}
                className="size-9 object-contain"
              />
              <span className="font-display text-xl font-extrabold tracking-[-0.07em]">
                Rujoo<span className="text-primary">IT</span>
              </span>
            </Link>
            <p className="font-display text-2xl font-semibold tracking-tight">
              {dictionary.footer.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-muted-foreground">
              {dictionary.footer.description}
            </p>
          </div>

          <div>
            <p className="font-code mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary">
              01 / {dictionary.footer.links}
            </p>
            <div className="flex flex-col items-start gap-3 text-sm text-muted-foreground">
              <Link href="#services" className="hover:text-foreground">
                {dictionary.nav.services}
              </Link>
              <Link href="#approach" className="hover:text-foreground">
                {dictionary.nav.approach}
              </Link>
              <Link href="#difference" className="hover:text-foreground">
                {dictionary.nav.work}
              </Link>
              <Link href="#contact" className="hover:text-foreground">
                {dictionary.nav.contact}
              </Link>
            </div>
          </div>

          <div>
            <p className="font-code mb-5 text-[10px] font-semibold tracking-[0.2em] text-primary">
              02 / {dictionary.footer.connect}
            </p>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 text-lg font-semibold transition-colors hover:text-primary"
            >
              {dictionary.nav.book}
              <MoveUpRight className="size-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
            <p className="mt-8 text-xs text-muted-foreground">
              {dictionary.footer.top}
            </p>
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
          <span>
            © {new Date().getFullYear()} RujooIT. {dictionary.footer.rights}
          </span>
          <span className="font-code tracking-wide">
            ENGINEERED WITH INTENT.
          </span>
        </div>
      </div>
    </footer>
  )
}
