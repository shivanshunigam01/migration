import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import NewsListingClient from "./NewsListingClient"
import { fetchNewsOrBlogFallbackSSR } from "@/lib/serverContent"
import { cleanBlogTitle } from "@/lib/contentApi"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("news")
}

function formatDate(iso?: string) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })
}

export default async function NewsListingPage() {
  const items = await fetchNewsOrBlogFallbackSSR()
  const initialArticles = items.map((n) => ({
    id: n.id,
    slug: n.slug,
    date: formatDate(n.publishedAt),
    category: n.category,
    featured: n.featured,
    headline: cleanBlogTitle(n.title),
    summary: n.standfirst,
    readTime: n.readTime,
    hrefBase: n.source,
  }))
  return <NewsListingClient initialArticles={initialArticles} />
}
