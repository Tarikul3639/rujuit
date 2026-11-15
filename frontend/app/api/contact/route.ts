import { NextResponse } from "next/server"
import { render } from "react-email"
import { Resend } from "resend"
import { createElement } from "react"

import { contactFormSchema } from "@/features/contact/components/contact-form.schema"
import {
  ContactConfirmationEmail,
  ContactNotificationEmail,
} from "@/features/contact/templates/contact-email-templates"

export const runtime = "nodejs"
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json()
    const parsed = contactFormSchema.safeParse(body)

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Please check the submitted fields." },
        { status: 400 }
      )
    }

    const to = process.env.CONTACT_TO_EMAIL
    const fromAddress =
      process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"
    const from = `RujuIT Contact <${fromAddress}>`

    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      )
    }

    const values = parsed.data
    const notificationHtml = await render(
      createElement(ContactNotificationEmail, { values })
    )
    const confirmationHtml = await render(
      createElement(ContactConfirmationEmail, {
        name: values.name,
        service: values.service,
      })
    )

    // Deliver the agency notification first so the inquiry is never lost.
    const notificationResult = await resend.emails.send({
      from,
      to: [to],
      replyTo: values.email,
      subject: `New RujuIT inquiry: ${values.service}`,
      html: notificationHtml,
      text: [
        "New RujuIT website inquiry",
        "",
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Service: ${values.service}`,
        "",
        "Project message:",
        values.message,
      ].join("\\n"),
    })

    if (notificationResult.error) {
      console.error(
        "Resend notification email error:",
        notificationResult.error
      )
      return NextResponse.json(
        { error: "Unable to deliver your inquiry to the RujuIT team." },
        { status: 502 }
      )
    }

    // Send an automatic receipt to the visitor's submitted email address.
    const confirmationResult = await resend.emails.send({
      from: `RujuIT <${fromAddress}>`,
      to: [values.email],
      subject: "We received your message | RujuIT",
      html: confirmationHtml,
      text: [
        `Hi ${values.name},`,
        "",
        "Thank you for contacting RujuIT. Your inquiry has been received.",
        `Selected service: ${values.service}`,
        "",
        "Our team will review your message and get back to you as soon as possible.",
        "",
        "Best regards,",
        "RujuIT Team",
      ].join("\\n"),
    })

    if (confirmationResult.error) {
      console.error(
        "Resend confirmation email error:",
        confirmationResult.error
      )
    }

    return NextResponse.json({
      success: true,
      confirmationSent: !confirmationResult.error,
      message: confirmationResult.error
        ? "Your inquiry reached RujuIT, but the confirmation email could not be delivered."
        : "Your inquiry and confirmation email were delivered.",
    })
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Unable to process your inquiry right now." },
      { status: 500 }
    )
  }
}
