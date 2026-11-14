import * as React from "react"

const MOBILE_BREAKPOINT = 768
const QUERY = `(max-width: ${MOBILE_BREAKPOINT - 1}px)`

// Subscribe to the media query without setting state synchronously inside an effect.
export function useIsMobile() {
  return React.useSyncExternalStore(
    (onStoreChange) => {
      const mediaQuery = window.matchMedia(QUERY)
      mediaQuery.addEventListener("change", onStoreChange)
      return () => mediaQuery.removeEventListener("change", onStoreChange)
    },
    () => window.matchMedia(QUERY).matches,
    () => false
  )
}
