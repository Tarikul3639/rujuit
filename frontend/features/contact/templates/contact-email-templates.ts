import type { ContactFormValues } from "../components/contact-form.schema"

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    }
    return entities[character] ?? character
  })
}

function emailShell(title: string, subtitle: string, content: string) {
  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:32px 12px;background:#f4f4f5;font-family:Arial,Helvetica,sans-serif;color:#18181b;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">${escapeHtml(subtitle)}</div>
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0"><tr><td align="center">
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="max-width:620px;background:#fff;border:1px solid #e4e4e7;border-radius:16px;overflow:hidden;">
      <tr><td style="padding:28px 32px;background:#111;border-bottom:5px solid #facc15;">
        <div style="font-size:25px;line-height:1;font-weight:800;letter-spacing:-1px;color:#fff;">Ruju<span style="color:#facc15;">IT</span></div>
        <div style="margin-top:10px;font-size:11px;letter-spacing:2px;text-transform:uppercase;color:#d4d4d8;">${escapeHtml(subtitle)}</div>
      </td></tr>
      <tr><td style="padding:32px;">${content}</td></tr>
      <tr><td style="padding:20px 32px;background:#fafafa;border-top:1px solid #e4e4e7;">
        <div style="font-size:12px;font-weight:700;color:#52525b;">RujuIT · Engineering Digital Possibilities</div>
        <div style="margin-top:6px;font-size:11px;line-height:1.6;color:#a1a1aa;">This is an automated message from the RujuIT website. Please do not share sensitive information by email.</div>
      </td></tr>
    </table>
  </td></tr></table>
</body>
</html>`
}

export function createContactNotificationEmail(values: ContactFormValues) {
  const name = escapeHtml(values.name)
  const email = escapeHtml(values.email)
  const service = escapeHtml(values.service)
  const message = escapeHtml(values.message).replace(/\r?\n/g, "<br />")
  const html = emailShell(
    "New RujuIT inquiry",
    "New website inquiry",
    `<div style="display:inline-block;padding:7px 11px;border-radius:999px;background:#fef9c3;color:#854d0e;font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;">Contact form</div>
<h1 style="margin:18px 0 8px;font-size:25px;line-height:1.25;color:#18181b;">You have a new inquiry</h1>
<p style="margin:0 0 26px;font-size:14px;line-height:1.7;color:#71717a;">Someone has reached out through the RujuIT website.</p>
<table role="presentation" width="100%" cellspacing="0" cellpadding="0" border="0" style="border-collapse:collapse;">
<tr><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;width:112px;font-size:12px;font-weight:700;color:#71717a;text-transform:uppercase;">Name</td><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;font-size:14px;font-weight:600;color:#18181b;">${name}</td></tr>
<tr><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;font-size:12px;font-weight:700;color:#71717a;text-transform:uppercase;">Email</td><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;font-size:14px;color:#18181b;"><a href="mailto:${email}" style="color:#18181b;">${email}</a></td></tr>
<tr><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;font-size:12px;font-weight:700;color:#71717a;text-transform:uppercase;">Service</td><td style="padding:13px 0;border-bottom:1px solid #e4e4e7;font-size:14px;font-weight:600;color:#18181b;">${service}</td></tr>
</table>
<div style="margin-top:26px;font-size:12px;font-weight:700;letter-spacing:1px;color:#71717a;text-transform:uppercase;">Project message</div>
<div style="margin-top:10px;padding:18px 20px;border-left:4px solid #facc15;border-radius:8px;background:#fafafa;font-size:14px;line-height:1.8;color:#3f3f46;overflow-wrap:anywhere;">${message}</div>
<div style="margin-top:26px;"><a href="mailto:${email}" style="display:inline-block;padding:13px 19px;border-radius:8px;background:#facc15;color:#18181b;font-size:13px;font-weight:700;text-decoration:none;">Reply to ${name}</a></div>`
  )
  const text = [
    "New RujuIT website inquiry",
    "",
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Service: ${values.service}`,
    "",
    "Project message:",
    values.message,
  ].join("\n")
  return { html, text }
}

export function createContactConfirmationEmail(values: Pick<ContactFormValues, "name" | "service">) {
  const name = escapeHtml(values.name)
  const service = escapeHtml(values.service)
  const html = emailShell(
    "We received your inquiry",
    "Thank you for contacting RujuIT",
    `<h1 style="margin:0 0 12px;font-size:25px;line-height:1.25;color:#18181b;">Thank you, ${name}!</h1>
<p style="margin:0 0 18px;font-size:15px;line-height:1.8;color:#52525b;">Your message has been successfully received by the RujuIT team. We appreciate you reaching out to us.</p>
<div style="padding:16px 18px;border-left:4px solid #facc15;border-radius:8px;background:#fafafa;">
  <div style="font-size:11px;font-weight:700;letter-spacing:1px;color:#71717a;text-transform:uppercase;">Your selected service</div>
  <div style="margin-top:7px;font-size:15px;font-weight:700;color:#18181b;">${service}</div>
</div>
<p style="margin:22px 0 0;font-size:14px;line-height:1.8;color:#71717a;">Our team will review your inquiry and get back to you as soon as possible. This email is an automatic confirmation, so you don't need to reply to it.</p>
<p style="margin:24px 0 0;font-size:14px;font-weight:700;color:#18181b;">Best regards,<br />RujuIT Team</p>`
  )
  const text = [
    `Hi ${values.name},`,
    "",
    "Thank you for contacting RujuIT. Your inquiry has been successfully received.",
    `Selected service: ${values.service}`,
    "",
    "Our team will review your message and get back to you as soon as possible.",
    "",
    "Best regards,",
    "RujuIT Team",
  ].join("\n")
  return { html, text }
}
