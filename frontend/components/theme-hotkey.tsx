"use client"

import * as React from "react"
import { useTheme } from "next-themes"

import { isTypingTarget } from "@/components/is-typing-target"
import { onThemeHotkey } from "@/components/handle-theme-hotkey"

export function ThemeHotkey() {
  const { resolvedTheme, setTheme } = useTheme()

  React.useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (isTypingTarget(event.target)) {
        return
      }

      onThemeHotkey(event, resolvedTheme, setTheme)
    }

    window.addEventListener("keydown", onKeyDown)

    return () => {
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [resolvedTheme, setTheme])

  return null
}
