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
  Cpu,
  Database,
  GitBranch,
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
import { ContactForm } from "@/features/home/components/contact-form"
import { FAQSection } from "@/features/home/components/faq-section"
import { LocaleDocument } from "@/features/home/components/locale-document"
import type { Dictionary, Locale } from "@/lib/i18n"
import { siteConfig } from "@/lib/site"

type HomePageProps = {
  locale: Locale
  dictionary: Dictionary
}

const serviceIcons = [Code2, Cloud, Network, Braces, Workflow, Layers3]

// Reusable reveal motion respects visitors who prefer reduced motion.
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
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// The hero combines a clear service statement with an original, lightweight systems illustration.
function HeroSection({ dictionary, locale }: HomePageProps) {
  const hero = dictionary.hero

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="site-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute top-0 -right-40 -z-10 size-[520px] rounded-full bg-primary/10 blur-[130px]" />
      <Spotlight className="-top-40 left-0 md:left-40" fill="#FACC15" />

      <div className="mx-auto grid min-h-[690px] max-w-[1440px] items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[1.02fr_0.98fr] lg:px-12 lg:py-24">
        <div className="relative z-10 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-7 inline-flex items-center gap-3 border border-primary/30 bg-primary/5 px-3 py-2"
          >
            <span className="size-2 animate-pulse bg-primary" />
            <span className="font-code text-[10px] font-semibold tracking-[0.18em] text-primary">
              {hero.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08 }}
            className="font-display text-[clamp(2.8rem,6vw,5.8rem)] leading-[0.99] font-extrabold tracking-[-0.065em] text-balance"
          >
            {hero.titleStart}
            <span className="mt-1 block min-h-[1.05em] text-primary">
              <FlipWords
                words={[...hero.rotating]}
                duration={2800}
                className="px-0 text-primary"
              />
            </span>
            <span className="mt-1 block">{hero.titleEnd}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg"
          >
            {hero.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="#services"
              className="group inline-flex h-12 items-center justify-center gap-3 rounded-md bg-primary px-5 text-sm font-bold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-[0_10px_35px_-12px_rgba(250,204,21,0.7)]"
            >
              {hero.primary}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-12 items-center justify-center gap-3 rounded-md border border-border bg-background/60 px-5 text-sm font-semibold transition-colors hover:border-primary/60 hover:bg-primary/5"
            >
              {hero.secondary}
              <ArrowUpRight className="size-4 text-primary" />
            </a>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-border pt-6 text-xs text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="size-1.5 bg-primary" /> {hero.note}
            </span>
            <span className="font-code tracking-widest">WEB / CLOUD / AI</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.18 }}
          className="relative mx-auto w-full max-w-[590px]"
        >
          <div className="absolute inset-8 rounded-full bg-primary/10 blur-[90px]" />
          <div className="relative aspect-square">
            <Image
              src="/images/hero-network.svg"
              alt={
                locale === "bn"
                  ? "ওয়েব, ক্লাউড, API ও AI সিস্টেমের সংযোগ দেখানো বিমূর্ত নেটওয়ার্ক ইলাস্ট্রেশন"
                  : "Abstract network illustration connecting web, cloud, APIs and AI systems"
              }
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 48vw"
              className="object-contain"
            />
            <div className="absolute top-[18%] left-0 hidden border border-border bg-background/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
              <p className="font-code text-[9px] tracking-widest text-muted-foreground">
                01 / INTERFACE
              </p>
              <p className="mt-1 text-xs font-semibold">Web platforms</p>
            </div>
            <div className="absolute right-0 bottom-[16%] hidden border border-primary/40 bg-background/90 px-3 py-2 shadow-xl backdrop-blur sm:block">
              <p className="font-code text-[9px] tracking-widest text-primary">
                03 / INTELLIGENCE
              </p>
              <p className="mt-1 text-xs font-semibold">AI + automation</p>
            </div>
            <div className="absolute top-[8%] right-[7%] flex size-14 items-center justify-center border border-border bg-background/80 backdrop-blur">
              <Zap className="size-6 text-primary" />
            </div>
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-2">
            {hero.orbit.map((item, index) => (
              <span
                key={item}
                className="font-code text-[9px] tracking-[0.14em] text-muted-foreground"
              >
                {index > 0 && <span className="mr-2 text-primary">/</span>}
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#services"
        className="font-code absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[9px] tracking-[0.2em] text-muted-foreground transition-colors hover:text-primary lg:flex"
      >
        {hero.scroll}
        <ArrowDown className="size-3 text-primary" />
      </a>
    </section>
  )
}

// Each service card explains the actual work instead of relying on vague marketing labels.
function ServicesSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section id="services" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <div>
              <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
                01 / {dictionary.services.eyebrow}
              </p>
              <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
                {dictionary.services.title}
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-7 text-muted-foreground lg:justify-self-end lg:text-base">
              {dictionary.services.description}
            </p>
          </div>
        </Reveal>

        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {dictionary.services.items.map((service, index) => {
            const Icon = serviceIcons[index]
            return (
              <Reveal key={service.number} delay={index * 0.045}>
                <article className="group edge-accent relative flex h-full min-h-[280px] flex-col border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/50 hover:bg-primary/[0.025] sm:p-7">
                  <div className="flex items-start justify-between">
                    <div className="flex size-12 items-center justify-center border border-primary/30 bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>
                    <span className="font-code text-xs tracking-widest text-muted-foreground">
                      {service.number}
                    </span>
                  </div>
                  <h3 className="font-display mt-8 text-xl font-bold tracking-tight">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2 pt-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-code border border-border px-2 py-1 text-[9px] tracking-wide text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// This section communicates the engineering standards behind the service list.
function ApproachSection({ dictionary }: { dictionary: Dictionary }) {
  const icons = [GitBranch, Layers3, Network]

  return (
    <section
      id="approach"
      className="scroll-mt-24 border-y border-border bg-muted/20 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:px-12">
        <Reveal>
          <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
            02 / {dictionary.approach.eyebrow}
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
            {dictionary.approach.title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
            {dictionary.approach.description}
          </p>

          <div className="mt-9 space-y-6">
            {dictionary.approach.pillars.map(([title, description], index) => {
              const Icon = icons[index]
              return (
                <div key={title} className="flex gap-4">
                  <div className="mt-1 flex size-9 shrink-0 items-center justify-center border border-border bg-background text-primary">
                    <Icon className="size-4" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="cut-panel relative overflow-hidden border border-border bg-background p-6 sm:p-9">
            <div className="site-grid absolute inset-0 opacity-60" />
            <div className="relative">
              <div className="flex items-center justify-between border-b border-border pb-5">
                <span className="font-code text-[9px] tracking-[0.2em] text-primary">
                  {dictionary.approach.visualLabel}
                </span>
                <span className="font-code text-[9px] text-muted-foreground">
                  RIT / SYS-01
                </span>
              </div>
              <h3 className="font-display mt-8 max-w-sm text-3xl font-bold tracking-[-0.05em] sm:text-4xl">
                {dictionary.approach.visualTitle}
              </h3>
              <div className="relative mt-10 space-y-3">
                <div className="absolute top-6 bottom-6 left-[17px] w-px bg-gradient-to-b from-primary via-primary/40 to-transparent" />
                {dictionary.approach.visualItems.map((item, index) => (
                  <div
                    key={item}
                    className="relative flex items-center gap-4 border border-border bg-card/90 p-4 backdrop-blur"
                  >
                    <span className="font-code relative z-10 flex size-9 shrink-0 items-center justify-center border border-primary/50 bg-background text-[10px] text-primary">
                      0{index + 1}
                    </span>
                    <span className="text-sm font-semibold">{item}</span>
                    <ArrowUpRight className="ml-auto size-4 text-muted-foreground" />
                  </div>
                ))}
              </div>
              <div className="font-code mt-7 flex items-center justify-between text-[9px] tracking-widest text-muted-foreground">
                <span>THINK / BUILD / IMPROVE</span>
                <span className="text-primary">● SYSTEM READY</span>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// A four-step process makes the engagement model understandable before a visitor contacts us.
function ProcessSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section className="py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12">
        <Reveal>
          <div className="mb-12 max-w-2xl">
            <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
              03 / {dictionary.process.eyebrow}
            </p>
            <h2 className="font-display mt-4 text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
              {dictionary.process.title}
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-0 border-y border-border md:grid-cols-4">
          {dictionary.process.steps.map(
            ([number, title, description], index) => (
              <Reveal key={number} delay={index * 0.06} className="h-full">
                <article className="group relative h-full border-b border-border p-6 last:border-b-0 md:border-r md:border-b-0 md:last:border-r-0 lg:p-7">
                  <span className="font-code text-xs tracking-widest text-primary">
                    {number} / 04
                  </span>
                  <h3 className="font-display mt-12 text-2xl font-bold tracking-tight">
                    {title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {description}
                  </p>
                  <div className="mt-8 flex items-center justify-between">
                    <span className="h-px w-12 bg-border transition-all group-hover:w-20 group-hover:bg-primary" />
                    <ArrowUpRight className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                </article>
              </Reveal>
            )
          )}
        </div>
      </div>
    </section>
  )
}

// The value proposition stays grounded in engineering practices, not invented client results.
function DifferenceSection({ dictionary }: { dictionary: Dictionary }) {
  return (
    <section
      id="difference"
      className="scroll-mt-24 overflow-hidden border-y border-border bg-muted/20 py-24 sm:py-28"
    >
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:items-center lg:px-12">
        <Reveal>
          <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
            04 / {dictionary.work.eyebrow}
          </p>
          <h2 className="font-display mt-4 max-w-2xl text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
            {dictionary.work.title}
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
            {dictionary.work.description}
          </p>
          <ul className="mt-8 space-y-4">
            {dictionary.work.points.map((point) => (
              <li
                key={point}
                className="flex items-start gap-3 text-sm leading-6"
              >
                <span className="mt-2 size-1.5 shrink-0 bg-primary" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.12}>
          <div className="relative border border-border bg-background p-7 sm:p-10">
            <div className="absolute top-0 right-0 h-20 w-20 border-t border-r border-primary/70" />
            <div className="font-code text-[9px] tracking-[0.2em] text-primary">
              RUJOOIT / ENGINEERING NOTE
            </div>
            <div className="my-10 flex items-center gap-3">
              <div className="flex size-14 items-center justify-center border border-primary/40 bg-primary/10 text-primary">
                <Cpu className="size-7" />
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-primary/60 to-transparent" />
              <div className="flex size-14 items-center justify-center border border-border text-muted-foreground">
                <Database className="size-6" />
              </div>
            </div>
            <h3 className="font-display text-3xl leading-tight font-bold tracking-[-0.045em] sm:text-4xl">
              {dictionary.work.callout}
            </h3>
            <p className="mt-4 text-sm leading-7 text-muted-foreground">
              {dictionary.work.calloutDescription}
            </p>
            <Link
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 text-sm font-bold text-primary"
            >
              {dictionary.nav.contact}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// The inquiry form is intentionally front-end only until the owner adds an API endpoint.
function ContactSection({
  dictionary,
  locale,
}: {
  dictionary: Dictionary
  locale: Locale
}) {
  return (
    <section id="contact" className="scroll-mt-24 py-24 sm:py-28">
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12">
        <Reveal>
          <p className="font-code text-[10px] font-semibold tracking-[0.22em] text-primary">
            06 / {dictionary.contact.eyebrow}
          </p>
          <h2 className="font-display mt-4 max-w-xl text-4xl leading-[1.08] font-bold tracking-[-0.055em] text-balance sm:text-5xl">
            {dictionary.contact.title}
          </h2>
          <p className="mt-6 max-w-md text-sm leading-8 text-muted-foreground sm:text-base">
            {dictionary.contact.description}
          </p>

          <div className="mt-10 border-l-2 border-primary pl-5">
            <p className="text-sm text-muted-foreground">
              {dictionary.contact.direct}
            </p>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-flex items-center gap-2 text-lg font-bold transition-colors hover:text-primary"
            >
              {dictionary.contact.book}
              <ArrowUpRight className="size-5 text-primary" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="border border-border bg-card p-5 sm:p-8">
            <div className="mb-7 flex items-center justify-between border-b border-border pb-5">
              <div>
                <p className="font-code text-[9px] tracking-[0.2em] text-primary">
                  PROJECT INQUIRY
                </p>
                <p className="mt-2 text-sm font-semibold">
                  {locale === "bn"
                    ? "আপনার প্রজেক্ট সম্পর্কে জানান"
                    : "Tell us about your project"}
                </p>
              </div>
              <span className="font-code text-[10px] text-muted-foreground">
                RIT / 05
              </span>
            </div>
            <ContactForm dictionary={dictionary.contact} />
          </div>
        </Reveal>
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
        <ServicesSection dictionary={dictionary} />
        <ApproachSection dictionary={dictionary} />
        <ProcessSection dictionary={dictionary} />
        <DifferenceSection dictionary={dictionary} />
        <FAQSection locale={locale} />
        <ContactSection dictionary={dictionary} locale={locale} />
        <SiteFooter locale={locale} dictionary={dictionary} />
      </main>
    </>
  )
}
