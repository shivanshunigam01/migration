import type { Metadata } from "next"
import { notFound } from "next/navigation"
import NewsSlugClient from "./NewsSlugClient"
import { getApiBaseUrl } from "@/lib/apiBase"
import { fitDescription, fitTitle } from "@/lib/metadata"
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/data/site"
import { fetchPublishedNewsSSR } from "@/lib/serverContent"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const news = await fetchPublishedNewsSSR()
    return news.map((n) => ({ slug: n.slug }))
  } catch {
    return []
  }
}

async function fetchPublishedNews(slug: string) {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/news/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    const post = json?.data
    if (!post || post.status !== "published") return null
    return post
  } catch {
    return null
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchPublishedNews(slug)
  if (!post) notFound()
  const title = fitTitle(post.seoTitle || `${post.title} | ${SITE_NAME}`)
  const description = fitDescription(
    post.seoDescription || post.standfirst || "Australian immigration news and policy updates.",
  )
  const canonical = `${SITE_URL}/news/${slug}`
  const ogImage = post.ogImage || DEFAULT_OG_IMAGE
  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: [{ url: ogImage, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title, description, images: [ogImage] },
  }
}

export default async function Page({ params }: Props) {
  const { slug } = await params
  const post = await fetchPublishedNews(slug)
  if (!post) notFound()
  const headline = String(post.title || "").replace(/^\[DRAFT\]\s*/i, "")
  const url = `${SITE_URL}/news/${slug}`
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "News", item: `${SITE_URL}/news` },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
      {
        "@type": "NewsArticle",
        headline,
        description: post.seoDescription || post.standfirst || "",
        url,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        author: {
          "@type": "Person",
          name: "Navpreet Aulakh",
          jobTitle: "Registered Migration Agent",
          identifier: "MARN 2619467",
        },
      },
    ],
  }
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <NewsSlugClient initialPost={post} />
    </>
  )
}
