import { redirect } from "next/navigation"

// The English route is the default entry point; visitors can switch languages anytime.
export default function Home() {
  redirect("/en")
}
