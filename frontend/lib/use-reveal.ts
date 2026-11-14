"use client"

import { useReducedMotion } from "motion/react"

export function useReveal() {
  const reduceMotion = useReducedMotion()
  let sequence = 0

  return (delay?: number, y = 14, duration = 0.6) => {
    const currentSequence = sequence++
    const staggerDelay = delay ?? (currentSequence % 5) * 0.1

    return {
      initial: reduceMotion ? false : { opacity: 0, y },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: {
        duration: reduceMotion ? 0 : duration,
        delay: reduceMotion ? 0 : staggerDelay,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }
  }
}
