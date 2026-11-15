"use client"

import { useState } from "react"
import Link from "next/link"
import {
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Layers,
  Network,
} from "lucide-react"
import { AnimatePresence, motion } from "motion/react"
import { FlipWords } from "@/components/ui/flip-words"
import { Spotlight } from "@/components/ui/spotlight"
import { useReveal } from "@/lib/use-reveal"

import type { HomePageProps } from "@/features/home/components/home-page.types"
import { siteConfig } from "@/lib/site"

type Kind = "k" | "m" | "p" | "f" // keyword, muted, primary, foreground
type Line = [string, Kind][]

const kindClass: Record<Kind, string> = {
  k: "text-primary",
  m: "text-muted-foreground",
  p: "text-primary/70",
  f: "text-foreground",
}

const tabs = [
  {
    id: "web",
    icon: Code2,
    label: { en: "Web", bn: "ওয়েব" },
    file: "app/page.tsx",
    status: { en: "Deployed to edge in 38s", bn: "৩৮ সেকেন্ডে ডিপ্লয় হয়েছে" },
    lines: [
      [
        ["export default function ", "k"],
        ["Home", "f"],
        ["() {", "m"],
      ],
      [
        ["  const ", "k"],
        ["products", "f"],
        [" = await ", "k"],
        ["getProducts", "p"],
        ["()", "m"],
      ],
      [
        ["  return ", "k"],
        ["<Storefront ", "f"],
        ["items", "p"],
        ["={products} />", "f"],
      ],
      [["}", "m"]],
    ] as Line[],
  },
  {
    id: "fullstack",
    icon: Layers,
    label: { en: "Full stack", bn: "ফুল স্ট্যাক" },
    file: "api/orders/route.ts",
    status: {
      en: "Frontend and API share one type",
      bn: "ফ্রন্টএন্ড ও API একই টাইপ ব্যবহার করে",
    },
    lines: [
      [
        ["export async function ", "k"],
        ["POST", "f"],
        ["(req: Request) {", "m"],
      ],
      [
        ["  const ", "k"],
        ["order", "f"],
        [" = ", "m"],
        ["OrderSchema", "p"],
        [".parse(await req.json())", "m"],
      ],
      [
        ["  await ", "k"],
        ["db.order.create", "p"],
        ["({ data: order })", "m"],
      ],
      [
        ["  return ", "k"],
        ["Response.json", "p"],
        ["({ ok: true })", "m"],
      ],
      [["}", "m"]],
    ] as Line[],
  },
  {
    id: "ai",
    icon: BrainCircuit,
    label: { en: "AI automation", bn: "এআই অটোমেশন" },
    file: "workflows/new-lead.ts",
    status: {
      en: "Runs on every new inquiry",
      bn: "প্রতিটি নতুন ইনকোয়ারিতে চলে",
    },
    lines: [
      [
        ["on", "k"],
        ["(", "m"],
        ['"lead.created"', "p"],
        [", async (lead) => {", "m"],
      ],
      [
        ["  const ", "k"],
        ["intent", "f"],
        [" = await ", "k"],
        ["ai.classify", "p"],
        ["(lead.message)", "m"],
      ],
      [
        ["  await ", "k"],
        ["crm.assign", "p"],
        ["(lead, intent.owner)", "m"],
      ],
      [
        ["  await ", "k"],
        ["mail.reply", "p"],
        ["(lead, intent.draft)", "m"],
      ],
      [["})", "m"]],
    ] as Line[],
  },
  {
    id: "mcp",
    icon: Network,
    label: { en: "MCP server", bn: "এমসিপি সার্ভার" },
    file: "mcp/server.ts",
    status: {
      en: "Your tools, ready for any AI client",
      bn: "আপনার টুল, যেকোনো AI ক্লায়েন্টের জন্য প্রস্তুত",
    },
    lines: [
      [
        ["server.", "m"],
        ["tool", "k"],
        ["(", "m"],
        ['"check_stock"', "p"],
        [", schema,", "m"],
      ],
      [
        ["  async ", "k"],
        ["({ sku }) => {", "m"],
      ],
      [
        ["    const ", "k"],
        ["qty", "f"],
        [" = await ", "k"],
        ["erp.stock", "p"],
        ["(sku)", "m"],
      ],
      [
        ["    return ", "k"],
        ["{ content: [{ text: qty }] }", "f"],
      ],
      [["  })", "m"]],
    ] as Line[],
  },
]

export function HeroSection({ dictionary, locale }: HomePageProps) {
  const hero = dictionary.hero
  const reveal = useReveal()
  const lang = locale === "bn" ? "bn" : "en"
  const [active, setActive] = useState(0)
  const current = tabs[active]

  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <div className="site-grid absolute inset-0 -z-20 mask-[radial-gradient(ellipse_at_30%_40%,black,transparent_75%)] opacity-40" />
      <div aria-hidden="true" className="hero-art hero-art--home absolute inset-0 -z-10" />
      <div className="absolute -top-48 right-[-12%] -z-10 size-[min(80vw,760px)] rounded-full bg-primary/10 blur-[140px]" />
      <Spotlight className="-top-40 left-0 md:left-40" fill="#FACC15" />

      <div className="mx-auto grid w-full max-w-7xl grid-cols-[minmax(0,1fr)] items-center gap-10 px-4 py-12 sm:gap-12 sm:px-8 sm:py-20 lg:min-h-185 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-16 lg:px-12 lg:py-24">
        {/* Copy */}
        <div className="relative z-10 min-w-0">
          <motion.p
            {...reveal(0, 8, 0.5)}
            className="mb-3 inline-flex items-center gap-2.5 text-xs font-medium text-muted-foreground uppercase"
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-50" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            {...reveal(0.06, 20, 0.7)}
            className="font-display text-5xl sm:text-6xl lg:text-7xl leading-[1.08] font-extrabold tracking-tighter sm:tracking-[-0.06em]"
          >
            <span className="block">{hero.titleStart}</span>
            {/* Fixed-height, single-line slot: flipping words can never change the layout height */}
            <span className="relative block whitespace-nowrap text-primary">
              <FlipWords
                words={[...hero.rotating]}
                duration={3200}
                className="px-0! text-primary!"
              />
            </span>
            <span className="block">{hero.titleEnd}</span>
          </motion.h1>

          <motion.p
            {...reveal(0.16, 14, 0.6)}
            className="mt-6 max-w-lg text-xs text-muted-foreground sm:mt-7 sm:text-sm lg:text-base"
          >
            {hero.description}
          </motion.p>

          <motion.div
            {...reveal(0.24, 12, 0.55)}
            className="mt-9 flex w-fit flex-row gap-3"
          >
            <Link
              href={`/${locale}/services`}
              className="group relative isolate inline-flex w-full items-center justify-center gap-3 overflow-hidden bg-primary px-5 py-3 text-xs font-bold whitespace-nowrap text-primary-foreground transition-shadow duration-500 hover:shadow-[0_12px_38px_-14px_rgba(250,204,21,0.75)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:px-7 md:text-sm"
            >
              <span
                aria-hidden="true"
                className="absolute inset-0 z-0 -translate-x-full -translate-y-full bg-foreground transition-transform duration-400 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
              />
              <span className="relative z-10 transition-colors duration-500 group-hover:text-background">
                <span className="sm:hidden">{hero.primaryMobile}</span>
                <span className="hidden sm:inline">{hero.primary}</span>
              </span>
              <ArrowRight className="relative z-10 size-4 transition-all duration-500 group-hover:translate-x-1 group-hover:text-background" />
            </Link>
            <a
              href={siteConfig.calUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-full items-center justify-center gap-3 border border-border bg-background/70 px-5 py-3 text-xs font-semibold whitespace-nowrap transition-colors hover:border-primary/60 hover:bg-primary/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:w-auto sm:px-7 md:text-sm"
            >
              <span className="sm:hidden">{hero.secondaryMobile}</span>
              <span className="hidden sm:inline">{hero.secondary}</span>
              <ArrowUpRight className="size-4 text-primary" />
            </a>
          </motion.div>

          <motion.p
            {...reveal(0.32, 10, 0.55)}
            className="mt-8 max-w-sm border-l-2 border-primary/60 pl-4 text-sm text-muted-foreground"
          >
            {hero.note}
          </motion.p>
        </div>

        {/* Interactive code window: one tab per service */}
        <motion.div
          {...reveal(0.14, 18, 0.7)}
          className="relative mx-auto w-full max-w-7xl min-w-0 lg:max-w-none"
        >
          <div className="absolute inset-[10%] rounded-full bg-primary/10 blur-[90px]" />

          <div className="relative border border-border bg-card/90 shadow-[0_30px_100px_-50px_rgba(250,204,21,0.4)] backdrop-blur">
            {/* Tabs */}
            <div
              role="tablist"
              className="flex min-w-0 touch-pan-x scrollbar-none! overflow-x-auto overflow-y-hidden border-b border-border whitespace-nowrap [&::-webkit-scrollbar]:hidden"
            >
              {tabs.map((tab, i) => {
                const Icon = tab.icon
                const selected = i === active
                return (
                  <button
                    key={tab.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActive(i)}
                    className={`relative flex shrink-0 items-center gap-2 overflow-hidden px-3.5 py-3 text-[13px] font-semibold transition-colors focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-primary sm:px-5 sm:py-3.5 sm:text-sm ${
                      selected
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon
                      className={`size-4 ${selected ? "text-primary" : ""}`}
                    />
                    {tab.label[lang]}
                    {selected && (
                      <motion.span
                        layoutId="hero-tab-underline"
                        className="absolute inset-x-0 -bottom-px h-0.5 bg-primary"
                        transition={{
                          type: "spring",
                          stiffness: 420,
                          damping: 36,
                        }}
                      />
                    )}
                  </button>
                )
              })}
            </div>

            {/* File name */}
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5 sm:px-5">
              <span className="font-code text-xs text-muted-foreground">
                {current.file}
              </span>
              <span className="flex gap-1.5" aria-hidden="true">
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-border" />
                <span className="size-2 rounded-full bg-primary/70" />
              </span>
            </div>

            {/* Code */}
            <div className="h-50 scrollbar-none! overflow-x-auto px-4 py-5 sm:h-58 sm:px-5 sm:py-6">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22 }}
                  className="font-code text-[12px] sm:text-[13px]"
                >
                  {current.lines.map((line, i) => (
                    <div key={i} className="flex gap-4">
                      <span className="w-4 shrink-0 text-right text-muted-foreground/40 select-none">
                        {i + 1}
                      </span>
                      <code className="whitespace-pre">
                        {line.map(([text, kind], j) => (
                          <span key={j} className={kindClass[kind]}>
                            {text}
                          </span>
                        ))}
                      </code>
                    </div>
                  ))}
                </motion.pre>
              </AnimatePresence>
            </div>

            {/* Status bar */}
            <div className="flex h-12 items-center justify-between gap-3 border-t border-border bg-primary/4 px-4 sm:px-5">
              <AnimatePresence mode="wait">
                <motion.span
                  key={current.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex min-w-0 items-center gap-2 text-[11px] text-muted-foreground sm:text-sm"
                >
                  <span className="size-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="truncate">{current.status[lang]}</span>
                </motion.span>
              </AnimatePresence>
              <span className="font-code shrink-0 text-xs text-primary">
                RujuIt
              </span>
            </div>
          </div>

          <div className="absolute -right-2 -bottom-3 -z-10 hidden size-24 border-r border-b border-primary/60 sm:-right-3 sm:-bottom-4 sm:block sm:size-32" />
          <div className="absolute -top-3 -left-3 -z-10 hidden size-20 border-t border-l border-primary/40 sm:-top-4 sm:-left-4 sm:block sm:size-28" />
        </motion.div>
      </div>
    </section>
  )
}
