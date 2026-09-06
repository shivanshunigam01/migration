import type { Metadata } from "next"
import NewsSlugClient from "./NewsSlugClient"
import { getApiBaseUrl } from "@/lib/apiBase"
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/data/site"

type Props = { params: Promise<{ slug: string }> }

async function fetchNews(slug: string) {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/news/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return json?.data ?? null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchNews(slug)
  const title = post?.seoTitle || (post?.title ? `${post.title} | ${SITE_NAME}` : `Immigration News | ${SITE_NAME}`)
  const description = post?.seoDescription || post?.standfirst || "Australian immigration news and policy updates."
  const canonical = `${SITE_URL}/news/${slug}`
  const ogImage = post?.ogImage || DEFAULT_OG_IMAGE
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [{ url: ogImage }],
    },
  }
}

export default function Page() {
  return <NewsSlugClient />
}
