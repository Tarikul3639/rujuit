"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  Braces,
  Cloud,
  Code2,
  Layers3,
  Network,
  Workflow,
} from "lucide-react"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { Reveal } from "@/features/home/components/reveal"
import type { HomePageProps } from "@/features/home/components/home-page.types"

// These routes lead to the full service, portfolio and company pages instead of repeating their content here.
const serviceIcons = [Code2, Cloud, Network, Braces, Workflow, Layers3]

export function ExploreSection({ locale, dictionary }: HomePageProps) {
  const isBangla = locale === "bn"

  const reveal = useReveal()

  return (
    <section
      id="explore"
      className="section-atmosphere scroll-mt-24 py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="mb-9 flex flex-col gap-4 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <Reveal>
              <motion.p
                {...reveal()}
                className="font-code text-[10px] font-semibold tracking-[0.2em] text-primary"
              >
                01 /{" "}
                <EncryptedText
                  text={dictionary.explore.eyebrow}
                  className="inline"
                  revealedClassName="text-primary"
                  encryptedClassName="text-primary/60"
                />
              </motion.p>
            </Reveal>
            <Reveal delay={0.06}>
              <motion.h2
                {...reveal()}
                className="font-display mt-3 text-3xl font-bold tracking-[-0.055em] text-balance sm:text-4xl lg:text-5xl"
              >
                {dictionary.explore.title}
              </motion.h2>
            </Reveal>
          </div>
          <Reveal delay={0.12}>
            <motion.p
              {...reveal()}
              className="max-w-sm text-sm text-muted-foreground"
            >
              {dictionary.explore.description}
            </motion.p>
          </Reveal>
        </div>

        <div className="grid gap-4 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <Link
              href={`/${locale}/services`}
              className="group relative flex h-full min-h-90 flex-col justify-between overflow-hidden border border-border bg-[#101010] p-6 text-white sm:min-h-105 sm:p-9"
            >
              <Image
                src="/images/service-grid.svg"
                alt=""
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover opacity-75 transition-transform duration-700 group-hover:scale-[1.04]"
              />
              <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/45 to-black/10" />
              <div className="relative flex items-center justify-between">
                <motion.span
                  {...reveal()}
                  className="font-code text-[9px] tracking-[0.2em] text-primary sm:text-[10px]"
                >
                  02 / CAPABILITIES
                </motion.span>
                <motion.span
                  {...reveal()}
                  className="flex size-10 items-center justify-center border border-white/30 bg-black/20 transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-black"
                >
                  <ArrowUpRight className="size-4" />
                </motion.span>
              </div>
              <div className="relative max-w-lg">
                <div className="mb-5 flex flex-wrap gap-2">
                  {serviceIcons.map((Icon, index) => (
                    <motion.span
                      {...reveal()}
                      key={index}
                      className="flex size-9 items-center justify-center border border-white/20 bg-black/30 text-primary backdrop-blur"
                    >
                      <Icon className="size-4" />
                    </motion.span>
                  ))}
                </div>
                <motion.h3
                  {...reveal()}
                  className="font-display text-3xl font-bold tracking-tighter sm:text-4xl"
                >
                  {dictionary.nav.services}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-3 max-w-md text-sm text-white/70"
                >
                  {dictionary.explore.servicesDescription}
                </motion.p>
                <motion.span
                  {...reveal()}
                  className="mt-6 inline-flex items-center gap-3 text-sm font-bold text-primary"
                >
                  {dictionary.explore.servicesLink}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.08} className="lg:col-span-5">
            <Link
              href={`/${locale}/work`}
              className="group relative flex h-full min-h-90 flex-col justify-between overflow-hidden border border-border bg-card"
            >
              <div className="relative min-h-51.25 flex-1 overflow-hidden bg-muted">
                <Image
                  src="/images/projects/projectron.png"
                  alt={
                    isBangla
                      ? "Projectron প্রজেক্টের বাস্তব স্ক্রিনশট"
                      : "Actual Projectron project screenshot"
                  }
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/75 via-transparent to-transparent" />
                <motion.span
                  {...reveal()}
                  className="font-code absolute top-4 left-4 bg-black/70 px-3 py-2 text-[9px] tracking-[0.18em] text-primary"
                >
                  03 / {dictionary.explore.workEyebrow}
                </motion.span>
                <motion.span
                  {...reveal()}
                  className="absolute right-4 bottom-4 flex size-10 items-center justify-center border border-white/40 bg-black/50 text-white backdrop-blur transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-black"
                >
                  <ArrowUpRight className="size-4" />
                </motion.span>
              </div>
              <div className="p-6 sm:p-7">
                <motion.h3
                  {...reveal()}
                  className="font-display text-2xl font-bold tracking-tight"
                >
                  {dictionary.nav.work}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-2 text-sm text-muted-foreground"
                >
                  {dictionary.explore.workDescription}
                </motion.p>
                <motion.span
                  {...reveal()}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {dictionary.explore.workLink}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.04} className="lg:col-span-5">
            <Link
              href={`/${locale}/about`}
              className="group relative flex h-full min-h-72.5 flex-col justify-between overflow-hidden border border-border bg-muted/35 p-6 sm:p-8"
            >
              <div className="site-grid absolute inset-0 opacity-60" />
              <div className="relative flex items-start justify-between">
                <motion.span
                  {...reveal()}
                  className="font-code text-[9px] tracking-[0.2em] text-primary"
                >
                  04 / {dictionary.explore.studioEyebrow}
                </motion.span>
                <motion.span
                  {...reveal()}
                  className="flex size-10 items-center justify-center border border-border bg-background transition-all group-hover:-translate-y-1 group-hover:border-primary"
                >
                  <Network className="size-4 text-primary" />
                </motion.span>
              </div>
              <div className="relative">
                <motion.h3
                  {...reveal()}
                  className="font-display max-w-sm text-2xl font-bold tracking-[-0.04em] sm:text-3xl"
                >
                  {dictionary.nav.approach}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-3 max-w-md text-sm text-muted-foreground"
                >
                  {dictionary.explore.aboutDescription}
                </motion.p>
                <motion.span
                  {...reveal()}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-primary"
                >
                  {dictionary.explore.aboutLink}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </motion.span>
              </div>
              <div className="absolute -right-5 -bottom-12 size-44 rotate-12 border border-primary/20 transition-transform duration-700 group-hover:rotate-6" />
            </Link>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="relative flex h-full min-h-72.5 flex-col justify-between overflow-hidden bg-primary p-6 text-black sm:p-8 lg:flex-row lg:items-end lg:gap-8">
              <div className="absolute -top-20 right-10 size-64 rounded-full border border-black/15" />
              <div className="absolute -top-10 right-20 size-44 rounded-full border border-black/15" />
              <div className="relative max-w-xl">
                <motion.span
                  {...reveal()}
                  className="font-code text-[9px] font-semibold tracking-[0.2em] text-black/65"
                >
                  05 / {dictionary.explore.buildEyebrow}
                </motion.span>
                <motion.h3
                  {...reveal()}
                  className="font-display mt-5 text-3xl font-extrabold tracking-tighter sm:text-4xl"
                >
                  {dictionary.explore.buildTitle}
                </motion.h3>
                <motion.p
                  {...reveal()}
                  className="mt-3 max-w-md text-sm text-black/70"
                >
                  {dictionary.explore.contactDescription}
                </motion.p>
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
