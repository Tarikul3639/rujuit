"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowDown, ArrowRight, ArrowUpRight, Zap } from "lucide-react"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { EncryptedText } from "@/components/ui/encrypted-text"
import { FlipWords } from "@/components/ui/flip-words"
import { Spotlight } from "@/components/ui/spotlight"
import { Reveal } from "@/features/home/components/reveal"
import type { HomePageProps } from "@/features/home/components/home-page.types"
import { siteConfig } from "@/lib/site"

export function HeroSection({ dictionary, locale }: HomePageProps) {
  const hero = dictionary.hero

  const reveal = useReveal()

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="site-grid absolute inset-0 -z-20 opacity-70" />
      <div className="absolute -top-28 -right-36 -z-10 size-[min(80vw,520px)] rounded-full bg-primary/10 blur-[110px]" />
      <Spotlight className="-top-40 left-0 md:left-40" fill="#FACC15" />

      <div className="mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-14 sm:px-8 sm:py-20 lg:min-h-170 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8 lg:px-12 lg:py-20">
        <div className="relative z-10 max-w-2xl min-w-0">
          <Reveal>
            <div className="mb-6 inline-flex max-w-full items-center gap-3 border border-primary/30 bg-primary/5 px-3 py-2">
              <motion.span
                {...reveal()}
                className="size-2 shrink-0 animate-pulse bg-primary"
              />
              <motion.span
                {...reveal()}
                className="font-code text-[9px] font-semibold tracking-[0.13em] text-primary sm:text-[10px] sm:tracking-[0.18em]"
              >
                <EncryptedText
                  text={hero.eyebrow}
                  className="inline"
                  revealedClassName="text-primary"
                  encryptedClassName="text-primary/60"
                />
              </motion.span>
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.06 }}
            className="font-display max-w-[14ch] text-[clamp(2.65rem,7.1vw,6rem)] leading-[1.02] font-extrabold tracking-[-0.065em] text-balance"
          >
            {hero.titleStart}
            <motion.span
              {...reveal()}
              className="mt-1 block min-h-[1.08em] text-primary"
            >
              <FlipWords
                words={[...hero.rotating]}
                duration={2800}
                className="px-0 text-primary"
              />
            </motion.span>
            <motion.span {...reveal()} className="mt-1 block">
              {hero.titleEnd}
            </motion.span>
          </motion.h1>

          <Reveal delay={0.16}>
            <motion.p
              {...reveal()}
              className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground sm:mt-7 sm:text-base sm:leading-8 lg:text-lg"
            >
              {hero.description}
            </motion.p>
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
            <motion.span {...reveal()} className="flex items-center gap-2">
              <motion.span {...reveal()} className="size-1.5 bg-primary" />
              {hero.note}
            </motion.span>
            <motion.span {...reveal()} className="font-code tracking-widest">
              WEB / CLOUD / AI
            </motion.span>
          </div>
        </div>

        <Reveal
          delay={0.12}
          className="mx-auto w-full max-w-[540px] lg:max-w-none"
        >
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
                <motion.p
                  {...reveal()}
                  className="font-code text-[8px] tracking-widest text-muted-foreground sm:text-[9px]"
                >
                  01 / INTERFACE
                </motion.p>
                <motion.p
                  {...reveal()}
                  className="mt-1 text-[10px] font-semibold sm:text-xs"
                >
                  Web platforms
                </motion.p>
              </div>
              <div className="absolute right-3 bottom-3 border border-primary/40 bg-background/90 px-3 py-2 backdrop-blur sm:right-7 sm:bottom-7">
                <motion.p
                  {...reveal()}
                  className="font-code text-[8px] tracking-widest text-primary sm:text-[9px]"
                >
                  03 / INTELLIGENCE
                </motion.p>
                <motion.p
                  {...reveal()}
                  className="mt-1 text-[10px] font-semibold sm:text-xs"
                >
                  AI + automation
                </motion.p>
              </div>
              <div className="absolute top-3 right-3 flex size-9 items-center justify-center border border-border bg-background/90 sm:top-7 sm:right-7 sm:size-12">
                <Zap className="size-4 text-primary sm:size-5" />
              </div>
              <motion.span
                {...reveal()}
                className="font-code absolute bottom-3 left-3 text-[8px] tracking-[0.16em] text-muted-foreground sm:bottom-7 sm:left-7 sm:text-[9px]"
              >
                RUJUIT / SYSTEMS
              </motion.span>
            </div>
            <div className="mt-4 flex flex-wrap justify-center gap-x-3 gap-y-2 sm:gap-x-5">
              {hero.orbit.map((item, index) => (
                <motion.span
                  {...reveal()}
                  key={item}
                  className="font-code text-[8px] tracking-[0.1em] text-muted-foreground sm:text-[9px] sm:tracking-[0.14em]"
                >
                  {index > 0 && (
                    <motion.span
                      key="separator"
                      {...reveal()}
                      className="mr-2 text-primary"
                    >
                      /
                    </motion.span>
                  )}
                  {item}
                </motion.span>
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
