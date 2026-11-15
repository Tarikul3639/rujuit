import { ContactNotificationEmail } from "./contact-email-templates"

export default function ContactNotificationPreview() {
  return (
    <ContactNotificationEmail
      values={{
        name: "John Doe",
        email: "john@example.com",
        service: "Web Development",
        message:
          "I am looking for a modern business website. Please share your services and pricing.",
      }}
    />
  )
}
