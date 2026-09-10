import type { Metadata } from "next"
import NotFoundClient from "./NotFoundClient"

export const metadata: Metadata = {
  title: "Page not found | Nanak Migration Group",
  description: "The page you requested could not be found on Nanak Migration Group.",
  robots: { index: false, follow: true },
}

export default function NotFound() {
  return <NotFoundClient />
}
