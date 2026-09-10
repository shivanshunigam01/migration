import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import BlogListingClient from "./BlogListingClient"
import { fetchPublishedBlogsSSR } from "@/lib/serverContent"
import { cleanBlogTitle } from "@/lib/contentApi"

export async function generateMetadata(): Promise<Metadata> {
  return buildPageMetadata("blog")
}

function formatDate(iso?: string) {
  if (!iso) return ""
  return new Date(iso).toLocaleDateString("en-AU", { day: "numeric", month: "short", year: "numeric" })
}

export default async function BlogListingPage() {
  const blogs = await fetchPublishedBlogsSSR()
  const initialPosts = blogs.map((p) => ({
    id: p.id,
    slug: p.slug,
    date: formatDate(p.publishedAt),
    category: p.category,
    title: cleanBlogTitle(p.title),
    standfirst: p.standfirst,
    relatedRoute: p.relatedRoute,
  }))
  return <BlogListingClient initialPosts={initialPosts} />
}
