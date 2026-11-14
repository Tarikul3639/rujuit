"use client"
import { motion } from "motion/react"
import { useReveal } from "@/lib/use-reveal"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { Controller, useForm } from "react-hook-form"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import type { Dictionary } from "@/lib/i18n"
import {
  contactFormSchema,
  type ContactFormValues,
} from "@/features/contact/components/contact-form.schema"
import { onSubmit } from "@/features/contact/components/submit-contact-form"

type ContactFormProps = {
  dictionary: Dictionary["contact"]
}

// Client-side validation is ready; connect your own API when you want to receive submissions.
export function ContactForm({ dictionary }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", service: "", message: "" },
  })

  const reveal = useReveal()

  return (
    <form
      onSubmit={form.handleSubmit((values) => onSubmit(values, setSubmitted))}
      className="space-y-5"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <motion.div {...reveal(0, 16, 0.55)} className="space-y-2">
          <Label htmlFor="contact-name">{dictionary.name}</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder={dictionary.name}
            {...form.register("name")}
            className="h-10 rounded-sm bg-background/70"
          />
          {form.formState.errors.name && (
            <motion.p {...reveal()} className="text-xs text-destructive">
              {dictionary.error}
            </motion.p>
          )}
        </motion.div>
        <motion.div {...reveal(0.1, 16, 0.55)} className="space-y-2">
          <Label htmlFor="contact-email">{dictionary.email}</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            {...form.register("email")}
            className="h-10 rounded-sm bg-background/70"
          />
          {form.formState.errors.email && (
            <motion.p {...reveal()} className="text-xs text-destructive">
              {dictionary.error}
            </motion.p>
          )}
        </motion.div>
      </div>

      <motion.div {...reveal(0.16, 16, 0.55)} className="space-y-2">
        <Label htmlFor="contact-service">{dictionary.service}</Label>
        <Controller
          control={form.control}
          name="service"
          render={({ field }) => (
            <Select value={field.value} onValueChange={field.onChange}>
              <SelectTrigger
                id="contact-service"
                ref={field.ref}
                onBlur={field.onBlur}
                aria-invalid={Boolean(form.formState.errors.service)}
                className="h-10! w-full rounded-sm! bg-background/70 px-3 text-sm"
              >
                <SelectValue placeholder={dictionary.servicePlaceholder} />
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
        {form.formState.errors.service && (
          <motion.p {...reveal()} className="text-xs text-destructive">
            {dictionary.error}
          </motion.p>
        )}
      </motion.div>

      <motion.div {...reveal(0.22, 16, 0.55)} className="space-y-2">
        <Label htmlFor="contact-message">{dictionary.message}</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder={dictionary.message}
          {...form.register("message")}
          className="min-h-32 resize-y rounded-sm bg-background/70"
        />
        {form.formState.errors.message && (
          <motion.p {...reveal()} className="text-xs text-destructive">
            {dictionary.error}
          </motion.p>
        )}
      </motion.div>

      <motion.div
        {...reveal(0.28, 14, 0.55)}
        className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
      >
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-10 rounded-sm px-6 font-bold"
        >
          {dictionary.send}
          <ArrowUpRight className="ml-2 size-4" />
        </Button>
        <motion.p
          {...reveal()}
          className="max-w-xs text-xs leading-5 text-muted-foreground"
        >
          {dictionary.privacy}
        </motion.p>
      </motion.div>

      {submitted && (
        <motion.p
          {...reveal()}
          role="status"
          className="flex items-start gap-2 border border-primary/30 bg-primary/5 p-3 text-sm text-foreground"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
          {dictionary.success}
        </motion.p>
      )}
    </form>
  )
}
