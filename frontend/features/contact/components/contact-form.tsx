"use client"

import { useState } from "react"
import { motion } from "motion/react"
import { ArrowUpRight, CheckCircle2, LoaderCircle } from "lucide-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"

import { Button } from "@/components/ui/button"
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/components/contact-form.schema"
import { onSubmit } from "@/features/contact/components/submit-contact-form"
import type { Dictionary } from "@/lib/i18n"
import { useReveal } from "@/lib/use-reveal"

type ContactFormProps = {
  dictionary: Dictionary["contact"]
}

type FormFeedback = {
  type: "success" | "error"
  message: string
} | null

export function ContactForm({ dictionary }: ContactFormProps) {
  const [feedback, setFeedback] = useState<FormFeedback>(null)
  const reveal = useReveal()

  // Keep validation and submission state in React Hook Form.
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", service: "", message: "" },
  })

  const errors = form.formState.errors
  const isSubmitting = form.formState.isSubmitting
  const isSuccessful = feedback?.type === "success"

  // Send the inquiry, then show an accessible result and reset on success.
  async function handleSubmit(values: ContactFormValues) {
    setFeedback(null)

    try {
      await onSubmit(values)
      form.reset()
      setFeedback({ type: "success", message: dictionary.success })
    } catch (error) {
      setFeedback({
        type: "error",
        message:
          error instanceof Error ? error.message : dictionary.deliveryError,
      })
    }
  }

  return (
    <form
      onSubmit={form.handleSubmit(handleSubmit)}
      noValidate
      className="space-y-5 rounded-sm pb-3 p-1"
    >
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <motion.div {...reveal(0, 16, 0.55)}>
            <Field data-invalid={Boolean(errors.name)}>
              <FieldLabel htmlFor="contact-name">{dictionary.name}</FieldLabel>
              <Input
                id="contact-name"
                autoComplete="name"
                placeholder={dictionary.name}
                aria-invalid={Boolean(errors.name)}
                aria-describedby={errors.name ? "contact-name-error" : undefined}
                {...form.register("name")}
                className="h-10 rounded-sm bg-background/70"
              />
              <FieldError id="contact-name-error" errors={[errors.name]} />
            </Field>
          </motion.div>

          <motion.div {...reveal(0.1, 16, 0.55)}>
            <Field data-invalid={Boolean(errors.email)}>
              <FieldLabel htmlFor="contact-email">
                {dictionary.email}
              </FieldLabel>
              <Input
                id="contact-email"
                type="email"
                autoComplete="email"
                placeholder="name@company.com"
                aria-invalid={Boolean(errors.email)}
                aria-describedby={
                  errors.email ? "contact-email-error" : undefined
                }
                {...form.register("email")}
                className="h-10 rounded-sm bg-background/70"
              />
              <FieldError id="contact-email-error" errors={[errors.email]} />
            </Field>
          </motion.div>
        </div>

        <motion.div {...reveal(0.16, 16, 0.55)}>
          <Field data-invalid={Boolean(errors.service)}>
            <FieldLabel htmlFor="contact-service">
              {dictionary.service}
            </FieldLabel>
            <Controller
              control={form.control}
              name="service"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger
                    id="contact-service"
                    ref={field.ref}
                    onBlur={field.onBlur}
                    aria-invalid={Boolean(errors.service)}
                    aria-describedby={
                      errors.service ? "contact-service-error" : undefined
                    }
                    className="h-10! w-full rounded-sm! bg-background/70 px-3 text-sm"
                  >
                    <SelectValue
                      placeholder={dictionary.servicePlaceholder}
                    />
                  </SelectTrigger>
                  <SelectContent>
                    {dictionary.options.map((option) => (
                      <SelectItem key={option} value={option}>
                        {option}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <FieldError id="contact-service-error" errors={[errors.service]} />
          </Field>
        </motion.div>

        <motion.div {...reveal(0.22, 16, 0.55)}>
          <Field data-invalid={Boolean(errors.message)}>
            <FieldLabel htmlFor="contact-message">
              {dictionary.message}
            </FieldLabel>
            <Textarea
              id="contact-message"
              rows={5}
              placeholder={dictionary.message}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={
                errors.message ? "contact-message-error" : undefined
              }
              {...form.register("message")}
              className="min-h-32 resize-y rounded-sm bg-background/70"
            />
            <FieldError id="contact-message-error" errors={[errors.message]} />
          </Field>
        </motion.div>
      </FieldGroup>

      {/* Announce delivery status to screen readers. */}
      {feedback && (
        <Field
          role={feedback.type === "error" ? "alert" : "status"}
          aria-live={feedback.type === "error" ? "assertive" : "polite"}
          data-invalid={feedback.type === "error"}
        >
          {feedback.type === "error" ? (
            <FieldError>{feedback.message}</FieldError>
          ) : (
            <FieldDescription className="text-sm text-emerald-600 dark:text-emerald-400">
              {feedback.message}
            </FieldDescription>
          )}
        </Field>
      )}

      <motion.div
        {...reveal(0.28, 14, 0.55)}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <Button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className="h-10 min-w-40 rounded-sm px-6 font-bold"
        >
          {/* Reflect the current request state directly in the submit button. */}
          {isSubmitting ? (
            <>
              <LoaderCircle className="size-4 animate-spin" />
              {dictionary.sending}
            </>
          ) : isSuccessful ? (
            <>
              <CheckCircle2 className="size-4" />
              {dictionary.sent}
            </>
          ) : (
            <>
              {dictionary.send}
              <ArrowUpRight className="size-4" />
            </>
          )}
        </Button>

        <motion.p
          {...reveal()}
          className="max-w-xs text-xs text-muted-foreground"
        >
          {dictionary.privacy}
        </motion.p>
      </motion.div>
    </form>
  )
}
