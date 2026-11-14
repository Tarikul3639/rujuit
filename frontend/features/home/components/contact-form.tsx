"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { Dictionary } from "@/lib/i18n"

type ContactFormProps = {
  dictionary: Dictionary["contact"]
}

// Client-side validation is ready; connect your own API when you want to receive submissions.
export function ContactForm({ dictionary }: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false)
  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    service: z.string().min(1),
    message: z.string().min(10),
  })

  type FormValues = z.infer<typeof schema>
  const form = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", service: "", message: "" },
  })

  function onSubmit(values: FormValues) {
    // Keep the form local until the project owner connects a submission endpoint.
    void values
    setSubmitted(true)
  }

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="contact-name">{dictionary.name}</Label>
          <Input
            id="contact-name"
            autoComplete="name"
            placeholder={dictionary.name}
            {...form.register("name")}
            className="h-12 rounded-md bg-background/70"
          />
          {form.formState.errors.name && (
            <p className="text-xs text-destructive">{dictionary.error}</p>
          )}
        </div>
        <div className="space-y-2">
          <Label htmlFor="contact-email">{dictionary.email}</Label>
          <Input
            id="contact-email"
            type="email"
            autoComplete="email"
            placeholder="name@company.com"
            {...form.register("email")}
            className="h-12 rounded-md bg-background/70"
          />
          {form.formState.errors.email && (
            <p className="text-xs text-destructive">{dictionary.error}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-service">{dictionary.service}</Label>
        <select
          id="contact-service"
          {...form.register("service")}
          className="h-12 w-full rounded-md border border-input bg-background/70 px-3 text-sm transition-colors outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
        >
          <option value="">—</option>
          {dictionary.options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {form.formState.errors.service && (
          <p className="text-xs text-destructive">{dictionary.error}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="contact-message">{dictionary.message}</Label>
        <Textarea
          id="contact-message"
          rows={5}
          placeholder={dictionary.message}
          {...form.register("message")}
          className="min-h-32 resize-y rounded-md bg-background/70"
        />
        {form.formState.errors.message && (
          <p className="text-xs text-destructive">{dictionary.error}</p>
        )}
      </div>

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="h-12 rounded-md px-6 font-bold"
        >
          {dictionary.send}
          <ArrowUpRight className="ml-2 size-4" />
        </Button>
        <p className="max-w-xs text-xs leading-5 text-muted-foreground">
          {dictionary.privacy}
        </p>
      </div>

      {submitted && (
        <p
          role="status"
          className="flex items-start gap-2 border border-primary/30 bg-primary/5 p-3 text-sm text-foreground"
        >
          <CheckCircle2 className="mt-0.5 size-4 shrink-0 text-primary" />
          {dictionary.success}
        </p>
      )}
    </form>
  )
}
