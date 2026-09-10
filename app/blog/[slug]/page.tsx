import type { Metadata } from "next"
import { notFound } from "next/navigation"
import BlogSlugClient from "./BlogSlugClient"
import { getApiBaseUrl } from "@/lib/apiBase"
import { fitDescription, fitTitle } from "@/lib/metadata"
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/data/site"
import { fetchPublishedBlogsSSR } from "@/lib/serverContent"

type Props = { params: Promise<{ slug: string }> }

export const dynamicParams = true

export async function generateStaticParams() {
  try {
    const blogs = await fetchPublishedBlogsSSR()
    return blogs.map((b) => ({ slug: b.slug }))
  } catch {
    return []
  }
}

async function fetchPublishedBlog(slug: string) {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/blogs/${encodeURIComponent(slug)}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    const post = json?.data
    if (!post) return null
    if (post.status && post.status !== "published") return null
    return post
  } catch {
    return null
  }
}

function blogJsonLd(post: {
  title: string
  standfirst?: string
  seoDescription?: string
  publishedAt?: string
  updatedAt?: string
  ogImage?: string
  slug: string
}) {
  const headline = String(post.title || "").replace(/^\[DRAFT\]\s*/i, "")
  const url = `${SITE_URL}/blog/${post.slug}`
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
          { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
          { "@type": "ListItem", position: 3, name: headline, item: url },
        ],
      },
      {
        "@type": "BlogPosting",
        headline,
        description: post.seoDescription || post.standfirst || "",
        url,
        mainEntityOfPage: url,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt || post.publishedAt,
        image: post.ogImage || DEFAULT_OG_IMAGE,
        author: {
          "@type": "Person",
          name: "Navpreet Aulakh",
          jobTitle: "Registered Migration Agent",
          identifier: "MARN 2619467",
        },
        publisher: {
          "@type": "Organization",
          name: SITE_NAME,
          url: SITE_URL,
        },
      },
    ],
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await fetchPublishedBlog(slug)
  if (!post) {
    notFound()
  }
  const title = fitTitle(post.seoTitle || `${post.title} | ${SITE_NAME}`)
  const description = fitDescription(
    post.seoDescription || post.standfirst || "Australian immigration news and visa guidance.",
  )
  const canonical = `${SITE_URL}/blog/${slug}`
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
  const post = await fetchPublishedBlog(slug)
  if (!post) notFound()
  const jsonLd = blogJsonLd({ ...post, slug })
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogSlugClient initialPost={post} />
    </>
  )
}
