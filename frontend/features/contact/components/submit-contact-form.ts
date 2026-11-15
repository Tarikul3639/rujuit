import type { ContactFormValues } from "@/features/contact/components/contact-form.schema"

export async function onSubmit(values: ContactFormValues): Promise<void> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  const result = (await response.json().catch(() => null)) as {
    success?: boolean
    error?: string
  } | null

  if (!response.ok || !result?.success) {
    throw new Error(result?.error || "Unable to send your inquiry right now.")
  }
}
