import { NextResponse } from "next/server"
import { Resend } from "resend"

import { contactFormSchema } from "@/features/contact/components/contact-form.schema"
import {
  createContactConfirmationEmail,
  createContactNotificationEmail,
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
    const from = process.env.CONTACT_FROM_EMAIL || "onboarding@resend.dev"

    if (!process.env.RESEND_API_KEY || !to) {
      return NextResponse.json(
        { error: "Email service is not configured." },
        { status: 503 }
      )
    }

    const values = parsed.data
    const notification = createContactNotificationEmail(values)
    const confirmation = createContactConfirmationEmail(values)

    const notificationResult = await resend.emails.send({
      from: `RujuIT Contact <${from}>`,
      to: [to],
      replyTo: values.email,
      subject: `New RujuIT inquiry: ${values.service}`,
      ...notification,
    })

    if (notificationResult.error) {
      console.error("Resend notification email error:", notificationResult.error)
      return NextResponse.json(
        { error: "Unable to send your inquiry right now." },
        { status: 502 }
      )
    }

    const confirmationResult = await resend.emails.send({
      from: `RujuIT <${from}>`,
      to: [values.email],
      subject: "We received your message | RujuIT",
      ...confirmation,
    })

    if (confirmationResult.error) {
      // The agency notification was delivered; don't make the visitor resubmit
      // and accidentally create duplicate inquiries because the auto-reply failed.
      console.error("Resend confirmation email error:", confirmationResult.error)
    }

    return NextResponse.json(
      { success: true, confirmationSent: !confirmationResult.error },
      { status: 200 }
    )
  } catch (error) {
    console.error("Contact API error:", error)
    return NextResponse.json(
      { error: "Unable to process your inquiry right now." },
      { status: 500 }
    )
  }
}
