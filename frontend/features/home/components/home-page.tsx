"use client"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Layers3,
  Network,
  Workflow,
  Zap,
} from "lucide-react"
import { motion, useReducedMotion } from "motion/react"

import { FlipWords } from "@/components/ui/flip-words"
import { Spotlight } from "@/components/ui/spotlight"
import { SiteFooter } from "@/components/layout/site-footer"
import { SiteHeader } from "@/components/layout/site-header"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

type HomePageProps = {
  locale: Locale
  dictionary: Dictionary
}

const serviceIcons = [Code2, Cloud, Network, Braces, Workflow, Layers3]

// Motion is applied to individual content elements so each section remains stable while scrolling.
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.18 }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

function HeroSection({ dictionary, locale }: HomePageProps) {
  const hero = dictionary.hero

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="site-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -top-28 -right-36 -z-10 size-[min(80vw,520px)] rounded-full bg-primary/10 blur-[110px]" />
      <Spotlight className="-top-40 left-0 md:left-40" fill="#FACC15" />

      <div className="mx-auto grid w-full max-w-[1440px] items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-[680px] lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-12 lg:py-20">
        <div className="relative z-10 min-w-0 max-w-2xl">
          <Reveal>
            <div className="mb-6 inline-flex max-w-full items-center gap-3 border border-primary/30 bg-primary/5 px-3 py-2">
              <span className="size-2 shrink-0 animate-pulse bg-primary" />
              <span className="font-code text-[9px] font-semibold tracking-[0.13em] text-primary sm:text-[10px] sm:tracking-[0.18em]">
                {hero.eyebrow}
              </span>
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-display max-w-[14ch] text-[clamp(2.65rem,7.1vw,6rem)] leading-[1.02] font-extrabold tracking-[-0.065em] text-balance"
          >
            {hero.titleStart}
            <span className="mt-1 block min-h-[1.08em] text-primary">
              <FlipWords
                words={[...hero.rotating]}
                duration={2800}
                className="px-0 text-primary"
              />
            </span>
            <span className="mt-1 block">{hero.titleEnd}</span>
          </motion.h1>

          <Reveal delay={0.16}>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8 lg:text-lg">
              {hero.description}
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <div className="mt-8 flex w-full flex-col gap-3 min-[420px]:flex-row sm:mt-9 sm:w-auto">
              <Link
                href={`/${locale}/contact`}
                className="group inline-flex min-h-12 flex-1 items-center justify-center gap-3 bg-primary px-5 py-3 text-center text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_35px_-12px_rgba(250,204,21,0.7)] min-[420px]:flex-none"
              >
                {dictionary.nav.contact}
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <a
                href={siteConfig.calUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex min-h-12 flex-1 items-center justify-center gap-3 border border-border bg-background/70 px-5 py-3 text-center text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-primary/5 min-[420px]:flex-none"
              >
                {hero.secondary}
                <ArrowUpRight className="size-4 text-primary" />
              </a>
            </div>
          </Reveal>

          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 text-[10px] text-muted-foreground sm:mt-10 sm:gap-x-6 sm:pt-6 sm:text-xs">
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-primary" />
              {hero.note}
            </span>
            <span className="font-code tracking-widest">WEB / CLOUD / AI</span>
          </div>
        </div>

        <Reveal delay={0.12} className="mx-auto w-full max-w-[540px] lg:max-w-none">
          <div className="relative mx-auto w-full max-w-[540px]">
            <div className="absolute inset-[12%] bg-primary/10 blur-[85px]" />
            <div className="cut-panel relative aspect-[5/4] overflow-hidden border border-border bg-card sm:aspect-square">
              <Image
                src="/images/hero-network.svg"
                alt={
                  locale === "bn"
                    ? "ওয়েব, ক্লাউড, API ও AI সিস্টেমের সংযোগ দেখানো নেটওয়ার্ক ইলাস্ট্রেশন"
                    : "Network illustration connecting web, cloud, API and AI systems"
                }
                fill
                priority
                sizes="(max-width: 640px) 92vw, (max-width: 1024px) 75vw, 45vw"
                className="object-contain p-2 sm:p-5"
              />
              <div className="absolute top-3 left-3 border border-border bg-background/90 px-3 py-2 backdrop-blur sm:top-7 sm:left-7">
                <p className="font-code text-[8px] tracking-widest text-muted-foreground sm:text-[9px]">
                  01 / INTERFACE
                </p>
                <p className="mt-1 text-[10px] font-semibold sm:text-xs">Web platforms</p>
              </div>
              <div className="absolute right-3 bottom-3 border border-primary/40 bg-background/90 px-3 py-2 backdrop-blur sm:right-7 sm:bottom-7">
                <p className="font-code text-[8px] tracking-widest text-primary sm:text-[9px]">
                  03 / INTELLIGENCE
                </p>
                <p className="mt-1 text-[10px] font-semibold sm:text-xs">AI + automation</p>
              </div>
              <div className="absolute top-3 right-3 flex size-9 items-center justify-center border border-border bg-background/90 sm:top-7 sm:right-7 sm:size-12">
                <Zap className="size-4 text-primary sm:size-5" />
              </div>
              <span className="font-code absolute bottom-3 left-3 text-[8px] tracking-[0.16em] text-muted-foreground sm:bottom-7 sm:left-7 sm:text-[9px]">
                RUJOOIT / SYSTEMS
              </span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-5">
              {hero.orbit.map((item, index) => (
                <span
                  key={item}
                  className="font-code text-[8px] tracking-[0.1em] text-muted-foreground sm:text-[9px] sm:tracking-[0.14em]"
                >
                  {index > 0 && <span className="mr-2 text-primary">/</span>}
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      <a
        href="#explore"
        className="font-code absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary lg:flex"
      >
        {hero.scroll}
        <ArrowDown className="size-3 text-primary" />
      </a>
    </section>
  )
}

// These routes lead to the full service, portfolio and company pages instead of repeating their content here.
function ExploreSection({ locale, dictionary }: HomePageProps) {
  const isBangla = locale === "bn"

  return (
    <section id="explore" className="scroll-mt-24 py-16 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <p className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary">
                01 / {isBangla ? "এক্সপ্লোর করুন" : "EXPLORE RUJOOIT"}
              </p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-3 text-3xl leading-tight font-bold tracking-[-0.055em] text-balance sm:text-4xl lg:text-5xl">
                {isBangla
                  ? "আপনার পরবর্তী পদক্ষেপের জন্য সঠিক দিকটি খুঁজুন।"
                  : "Find the right direction for your next move."}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <p className="max-w-sm text-sm leading-7 text-muted-foreground">
              {isBangla
                ? "প্রতিটি বিষয়ের বিস্তারিত জানতে সংশ্লিষ্ট পেজে যান।"
                : "Explore each area in depth on its dedicated page."}
            </p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link
              href={`/${locale}/services`}
              className="group relative flex min-h-[360px] h-full flex-col justify-between overflow-hidden border border-border bg-[#101010] p-6 text-white sm:min-h-[420px] sm:p-9"
            >
              <Image
                src="/images/service-grid.svg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/10" />
              <div className="relative flex items-center justify-between">
                <span className="font-code text-[9px] tracking-[0.2em] text-primary sm:text-[10px]">
                  02 / CAPABILITIES
                </span>
                <span className="flex size-10 items-center justify-center border border-white/30 bg-black/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="relative max-w-lg">
                <div className="mb-5 flex flex-wrap gap-2">
                  {serviceIcons.map((Icon, index) => (
                    <span key={index} className="flex size-9 items-center justify-center border border-white/20 bg-black/30 text-primary backdrop-blur">
                      <Icon className="size-4" />
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                  {dictionary.nav.services}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-white/70">
                  {isBangla
                    ? "ওয়েব, ক্লাউড, API, MCP এবং AI—আমাদের সম্পূর্ণ engineering capabilities দেখুন।"
                    : "Web, cloud, APIs, MCP and AI—explore the full range of our engineering capabilities."}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-primary">
                  {isBangla ? "সার্ভিসগুলো দেখুন" : "Explore our services"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <Link
              href={`/${locale}/work`}
              className="group relative flex min-h-[360px] h-full flex-col justify-between overflow-hidden border border-border bg-card"
            >
              <div className="relative min-h-[205px] flex-1 overflow-hidden bg-muted">
                <Image
                  src="/images/projects/projectron.png"
                  alt={isBangla ? "Projectron প্রজেক্টের বাস্তব স্ক্রিনশট" : "Actual Projectron project screenshot"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <span className="font-code absolute top-4 left-4 bg-black/70 px-3 py-2 text-[9px] tracking-[0.18em] text-primary">
                  03 / SELECTED BUILDS
                </span>
                <span className="absolute right-4 bottom-4 flex size-10 items-center justify-center border border-white/40 bg-black/50 text-white backdrop-blur transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-black">
                  <ArrowUpRight className="size-4" />
                </span>
              </div>
              <div className="p-6 sm:p-7">
                <h3 className="font-display text-2xl font-bold tracking-tight">
                  {dictionary.nav.work}
                </h3>
                <p className="mt-2 text-sm leading-7 text-muted-foreground">
                  {isBangla
                    ? "বাস্তব প্রোডাক্ট ও engineering work-এর নির্বাচিত সংগ্রহ দেখুন।"
                    : "Explore selected product builds and hands-on engineering work."}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  {isBangla ? "প্রজেক্ট দেখুন" : "View the work"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.04} className="lg:col-span-5">
            <Link
              href={`/${locale}/about`}
              className="group relative flex min-h-[290px] h-full flex-col justify-between overflow-hidden border border-border bg-muted/35 p-6 sm:p-8"
            >
              <div className="site-grid absolute inset-0 opacity-60" />
              <div className="relative flex items-start justify-between">
                <span className="font-code text-[9px] tracking-[0.2em] text-primary">
                  04 / THE STUDIO
                </span>
                <span className="flex size-10 items-center justify-center border border-border bg-background transition-all group-hover:-translate-y-1 group-hover:border-primary">
                  <Network className="size-4 text-primary" />
                </span>
              </div>
              <div className="relative">
                <h3 className="font-display max-w-sm text-2xl font-bold tracking-[-0.04em] sm:text-3xl">
                  {dictionary.nav.approach}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-muted-foreground">
                  {isBangla
                    ? "আমাদের কাজের দর্শন, engineering principles এবং কীভাবে সহযোগিতা করি তা জানুন।"
                    : "Learn about our principles, engineering mindset and how we collaborate."}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary">
                  {isBangla ? "আমাদের সম্পর্কে" : "Meet the team"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
              <div className="absolute -right-5 -bottom-12 size-44 rotate-12 border border-primary/20 transition-transform duration-700 group-hover:rotate-6" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative flex min-h-[290px] h-full flex-col justify-between overflow-hidden bg-primary p-6 text-black sm:p-8 lg:flex-row lg:items-end lg:gap-8">
              <div className="absolute -top-20 right-10 size-64 rounded-full border border-black/15" />
              <div className="absolute -top-10 right-20 size-44 rounded-full border border-black/15" />
              <div className="relative max-w-xl">
                <span className="font-code text-[9px] font-semibold tracking-[0.2em] text-black/65">
                  05 / LET&apos;S BUILD
                </span>
                <h3 className="font-display mt-5 text-3xl leading-tight font-extrabold tracking-[-0.05em] sm:text-4xl">
                  {isBangla
                    ? "একটি ভালো আইডিয়াকে বাস্তবে রূপ দিন।"
                    : "Turn a good idea into something real."}
                </h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-black/70">
                  {isBangla
                    ? "আপনার লক্ষ্য ও চ্যালেঞ্জ নিয়ে কথা শুরু করুন।"
                    : "Start a conversation about your goals and technical challenges."}
                </p>
              </div>
              <Link
                href={`/${locale}/contact`}
                className="group relative mt-7 inline-flex min-h-12 shrink-0 items-center justify-center gap-3 self-start border border-black/70 px-5 text-sm font-bold transition-all hover:bg-black hover:text-primary lg:self-end"
              >
                {dictionary.nav.contact}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

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
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
