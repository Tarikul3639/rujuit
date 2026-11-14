import type { Metadata } from "next"
import localFont from "next/font/local"

import { ThemeProvider } from "@/components/theme-provider"

import "./globals.css"
import "./custom.css"

// Self-hosted fonts keep typography consistent without external requests.
const manrope = localFont({
  src: "../public/fonts/manrope/manrope.ttf",
  variable: "--font-manrope",
  weight: "200 800",
  display: "swap",
})

const inter = localFont({
  src: "../public/fonts/inter/inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
})

const hindSiliguri = localFont({
  src: [
    {
      path: "../public/fonts/hind-siliguri/hind-siliguri-400.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/hind-siliguri/hind-siliguri-600.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/hind-siliguri/hind-siliguri-700.ttf",
      weight: "700",
    },
  ],
  variable: "--font-hind",
  display: "swap",
})

const notoSansBengali = localFont({
  src: "../public/fonts/noto-sans-bengali/noto-sans-bengali.ttf",
  variable: "--font-noto-bengali",
  weight: "100 900",
  display: "swap",
})

const jetBrainsMono = localFont({
  src: "../public/fonts/jetbrains-mono/jetbrains-mono.ttf",
  variable: "--font-jetbrains",
  weight: "100 900",
  display: "swap",
})

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "RujooIT — Engineering Digital Possibilities",
    template: "%s | RujooIT",
  },
  description:
    "RujooIT is a software engineering partner building scalable web platforms, cloud infrastructure, API integrations, MCP servers and intelligent automation.",
  applicationName: "RujooIT",
  keywords: [
    "RujooIT",
    "software engineering agency",
    "web development",
    "cloud engineering",
    "API integration",
    "MCP server development",
    "AI automation",
    "custom software",
  ],
  authors: [{ name: "RujooIT" }],
  creator: "RujooIT",
  publisher: "RujooIT",
  alternates: {
    languages: { en: "/en", bn: "/bn" },
  },
  openGraph: {
    type: "website",
    siteName: "RujooIT",
    title: "RujooIT — Engineering Digital Possibilities",
    description:
      "Reliable, scalable and intelligent software solutions for ambitious businesses.",
    ...(siteUrl ? { images: ["/images/og-cover.svg"] } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: "RujooIT — Engineering Digital Possibilities",
    description:
      "Reliable, scalable and intelligent software solutions for ambitious businesses.",
    ...(siteUrl ? { images: ["/images/og-cover.svg"] } : {}),
  },
  robots: { index: true, follow: true },
}

// Root layout owns the document shell; locale pages provide translated content.
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={[
        manrope.variable,
        inter.variable,
        hindSiliguri.variable,
        notoSansBengali.variable,
        jetBrainsMono.variable,
      ].join(" ")}
    >
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
