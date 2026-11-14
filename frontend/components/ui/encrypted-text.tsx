"use client"

import React, { useEffect, useRef, useState } from "react"
import { motion, useInView } from "motion/react"

import { cn } from "@/lib/utils"

type EncryptedTextProps = {
  text: string
  className?: string
  revealDelayMs?: number
  charset?: string
  flipDelayMs?: number
  encryptedClassName?: string
  revealedClassName?: string
}

const DEFAULT_CHARSET =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-={}[];:,.<>/?"

function generateRandomCharacter(charset: string): string {
  const index = Math.floor(Math.random() * charset.length)
  return charset.charAt(index)
}

function generateGibberishPreservingSpaces(
  original: string,
  charset: string
): string {
  return original
    .split("")
    .map((character) =>
      character === " " ? " " : generateRandomCharacter(charset)
    )
    .join("")
}

export const EncryptedText: React.FC<EncryptedTextProps> = ({
  text,
  className,
  revealDelayMs = 50,
  charset = DEFAULT_CHARSET,
  flipDelayMs = 50,
  encryptedClassName,
  revealedClassName,
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })
  const [revealCount, setRevealCount] = useState(0)
  const [scrambleChars, setScrambleChars] = useState<string[]>(() =>
    text.split("").map((character) => (character === " " ? " " : "•"))
  )
  const animationFrameRef = useRef<number | null>(null)
  const startTimeRef = useRef(0)
  const lastFlipTimeRef = useRef(0)

  useEffect(() => {
    if (!isInView) return

    // Start the animation on the next frame to avoid effect-time state updates.
    const scrambled = generateGibberishPreservingSpaces(text, charset).split("")
    startTimeRef.current = performance.now()
    lastFlipTimeRef.current = startTimeRef.current

    let isCancelled = false

    const update = (now: number) => {
      if (isCancelled) return

      const elapsedMs = now - startTimeRef.current
      const currentRevealCount = Math.min(
        text.length,
        Math.floor(elapsedMs / Math.max(1, revealDelayMs))
      )

      setRevealCount(currentRevealCount)

      if (now - lastFlipTimeRef.current >= Math.max(0, flipDelayMs)) {
        for (let index = currentRevealCount; index < text.length; index += 1) {
          scrambled[index] =
            text[index] === " " ? " " : generateRandomCharacter(charset)
        }

        setScrambleChars([...scrambled])
        lastFlipTimeRef.current = now
      }

      if (currentRevealCount < text.length) {
        animationFrameRef.current = requestAnimationFrame(update)
      }
    }

    animationFrameRef.current = requestAnimationFrame(update)

    return () => {
      isCancelled = true
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [isInView, text, revealDelayMs, charset, flipDelayMs])

  if (!text) return null

  return (
    <motion.span
      ref={ref}
      className={cn(className)}
      aria-label={text}
      role="text"
    >
      {text.split("").map((character, index) => {
        const isRevealed = index < revealCount
        const displayCharacter = isRevealed
          ? character
          : character === " "
            ? " "
            : (scrambleChars[index] ?? "•")

        return (
          <span
            key={index}
            className={cn(isRevealed ? revealedClassName : encryptedClassName)}
          >
            {displayCharacter}
          </span>
        )
      })}
    </motion.span>
  )
}
