import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"
import { SITE_URL } from "@/data/site"

export const revalidate = 300

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("home")
}

export default function HomePage() {
  return (
    <>
      {/* Explicit home canonical with trailing slash (Next Metadata can strip it). */}
      <link rel="canonical" href={`${SITE_URL}/`} />
      <PageRenderer path="" />
    </>
  )
}
