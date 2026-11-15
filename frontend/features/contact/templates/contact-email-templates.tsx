import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
  pixelBasedPreset,
} from "react-email"

import type { ContactFormValues } from "../components/contact-form.schema"

function EmailLayout({
  preview,
  eyebrow,
  children,
}: {
  preview: string
  eyebrow: string
  children: React.ReactNode
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  const logoUrl = `${(siteUrl || "https://rujuit.com").replace(/\/$/, "")}/rujuit-logo.svg`

  return (
    <Html lang="en">
      <Tailwind config={{ presets: [pixelBasedPreset] }}>
        <Head />
        <Preview>{preview}</Preview>
        <Body className="mx-auto my-0 bg-[#f4f4f5] px-3 py-9 font-sans">
          <Container className="mx-auto my-0 max-w-150 overflow-hidden rounded-none border border-solid border-[#e4e4e7] bg-white">
            <Section className="border-b-4 border-solid border-[#eab308] bg-[#09090b] px-7.5 py-6.5">
              {logoUrl ? (
                <Img
                  src={logoUrl}
                  alt="RujuIT"
                  width="116"
                  height="52"
                  className="m-0 block object-contain"
                />
              ) : (
                <Heading className="m-0 text-[25px] leading-7.5 font-extrabold tracking-[-1px] text-white">
                  Ruju<span className="text-[#facc15]">IT</span>
                </Heading>
              )}
              <Text className="mt-3 mb-0 text-[10px] font-bold tracking-[2px] text-[#a1a1aa] uppercase">
                {eyebrow}
              </Text>
            </Section>

            <Section className="px-7.5 py-7.5">{children}</Section>

            <Section className="border-t border-solid border-[#e4e4e7] bg-[#fafafa] px-7.5 py-5">
              <Text className="m-0 text-xs font-bold text-[#18181b]">
                RujuIT · Engineering Digital Possibilities
              </Text>
              <Text className="mt-1.5 mb-0 text-[11px] leading-5.25 text-[#71717a]">
                This is an automated message from the RujuIT website. Please do
                not share sensitive information by email.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <Section className="border-b border-solid border-[#e4e4e7] py-2 last:border-b-0">
      <Text className="m-0 text-[10px] font-bold tracking-wide text-[#71717a] uppercase">
        {label}
      </Text>
      <Text className="mt-0 mb-0 text-sm leading-5.25 font-semibold wrap-break-word text-[#18181b]">
        {value}
      </Text>
    </Section>
  )
}

export function ContactNotificationEmail({
  values,
}: {
  values: ContactFormValues
}) {
  return (
    <EmailLayout
      preview={`New inquiry from ${values.name} about ${values.service}`}
      eyebrow="New website inquiry"
    >
      <Text className="mt-0 mb-0 inline-block rounded-none bg-[#fef9c3] px-2.5 py-1.5 text-[10px] font-bold tracking-[1px] text-[#854d0e]">
        CONTACT FORM
      </Text>
      <Heading className="mt-4.5 mb-1.5 text-[25px] leading-8 font-bold tracking-[-0.6px] text-[#18181b]">
        You have a new inquiry
      </Heading>
      <Text className="mt-2 mb-0 text-[13px] leading-5.25 text-[#71717a]">
        Someone has reached out through the RujuIT website.
      </Text>

      <Section className="mt-6 rounded-none border border-solid border-[#e4e4e7] bg-[#fafafa] px-4 py-1">
        <DetailRow label="Name" value={values.name} />
        <DetailRow label="Email" value={values.email} />
        <DetailRow label="Service" value={values.service} />
      </Section>

      <Heading className="mt-6 mb-2.5 text-[13px] font-bold text-[#18181b]">
        Project message
      </Heading>
      <Section className="rounded-none border border-l-4 border-solid border-[#e4e4e7] border-l-[#eab308] bg-[#fafafa] px-4.25 py-3.75">
        <Text className="m-0 text-[13px] leading-5.5 wrap-break-word whitespace-pre-wrap text-[#3f3f46]">
          {values.message}
        </Text>
      </Section>

      <Button
        href={`mailto:${encodeURIComponent(values.email)}?subject=${encodeURIComponent("Re: Your RujuIT inquiry")}`}
        className="mt-6 flex h-8 w-fit items-center justify-center rounded-none border border-transparent bg-[#eab308] px-2.5 py-0 text-center text-xs font-medium text-[#171717] no-underline"
      >
        Reply to {values.name}
      </Button>
    </EmailLayout>
  )
}

export function ContactConfirmationEmail({
  name,
  service,
}: {
  name: string
  service: string
}) {
  return (
    <EmailLayout
      preview="Your message has been received by the RujuIT team."
      eyebrow="Message received"
    >
      <Text className="mt-0 mb-0 inline-block rounded-none bg-[#dcfce7] px-2.5 py-1.5 text-[10px] font-bold tracking-[1px] text-[#166534]">
        SUCCESSFULLY RECEIVED
      </Text>
      <Heading className="mt-5 mb-2 text-[26px] leading-8.5 font-bold tracking-[-0.6px] text-[#18181b]">
        Thank you, {name}!
      </Heading>
      <Text className="mt-2 mb-0 text-sm leading-6 text-[#71717a]">
        Your message has been successfully received by the RujuIT team. We
        appreciate you taking the time to contact us.
      </Text>

      <Section className="mt-6 rounded-lg border border-l-4 border-solid border-[#e4e4e7] border-l-[#facc15] bg-[#fafafa] px-4.5 py-4">
        <Text className="m-0 text-[10px] font-bold tracking-[1px] text-[#71717a] uppercase">
          Your selected service
        </Text>
        <Text className="mt-1.75 mb-0 text-[15px] font-bold text-[#18181b]">
          {service}
        </Text>
      </Section>

      <Text className="mt-5.5 mb-0 text-sm leading-6 text-[#71717a]">
        Our team will review your inquiry and get back to you as soon as
        possible. You do not need to reply to this automatic confirmation.
      </Text>
      <Hr className="my-6 border-[#e4e4e7]" />
      <Text className="m-0 text-[13px] leading-5.5 font-bold text-[#18181b]">
        Best regards,
        <br />
        RujuIT Team
      </Text>
    </EmailLayout>
  )
}
