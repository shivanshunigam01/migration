import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home")
}

export default function HomePage() {
  return <PageRenderer path="" />
}
