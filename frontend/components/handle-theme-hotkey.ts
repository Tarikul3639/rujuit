export function onThemeHotkey(
  event: KeyboardEvent,
  resolvedTheme: string | undefined,
  setTheme: (theme: string) => void,
) {
  if (event.defaultPrevented || event.repeat) {
    return
  }

  if (event.metaKey || event.ctrlKey || event.altKey) {
    return
  }

  if (event.key.toLowerCase() !== "d") {
    return
  }

  setTheme(resolvedTheme === "dark" ? "light" : "dark")
}
