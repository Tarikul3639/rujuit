import type { ContactFormValues } from "@/features/contact/components/contact-form.schema"

export type ContactSubmissionResult = {
  confirmationSent: boolean
}

export async function onSubmit(
  values: ContactFormValues
): Promise<ContactSubmissionResult> {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(values),
  })

  const result = (await response.json().catch(() => null)) as {
    success?: boolean
    confirmationSent?: boolean
    error?: string
  } | null

  if (!response.ok || !result?.success) {
    throw new Error(result?.error || "Unable to send your inquiry right now.")
  }

  return { confirmationSent: result.confirmationSent === true }
}
