import type { ReactNode } from "react"

// Layout-only wrapper; animation belongs to each semantic content element.
export function Reveal({
  children,
  className = "",
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  return <div className={className}>{children}</div>
}
