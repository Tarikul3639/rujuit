import type { Dispatch, SetStateAction } from "react"

import type { ContactFormValues } from "@/features/contact/components/contact-form.schema"

// Keep the current frontend-only confirmation until a submission endpoint is connected.
export function onSubmit(
  values: ContactFormValues,
  setSubmitted: Dispatch<SetStateAction<boolean>>,
) {
  void values
  setSubmitted(true)
}
