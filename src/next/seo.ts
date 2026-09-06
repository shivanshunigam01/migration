import type { Metadata } from "next"
import { PAGE_META } from "@/data/pageMeta"
import { absoluteUrl, DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/data/site"
import { getApiBaseUrl } from "@/lib/apiBase"

type SeoPayload = {
  title?: string
  metaDescription?: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  heroImage?: string
  robotsIndex?: boolean
  primaryKeyword?: string
  keywords?: string
}

async function fetchSeo(routeKey: string): Promise<SeoPayload | null> {
  try {
    const base = getApiBaseUrl()
    const res = await fetch(`${base}/public/seo/${encodeURIComponent(routeKey)}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return (json?.data as SeoPayload) || null
  } catch {
    return null
  }
}

function absAsset(url: string) {
  if (!url) return DEFAULT_OG_IMAGE
  if (url.startsWith("http")) return url
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

export async function buildPageMetadata(routeKey: string): Promise<Metadata> {
  const fallback = PAGE_META[routeKey]
  const remote = await fetchSeo(routeKey)
  const title = remote?.title || fallback?.title || SITE_NAME
  const description =
    remote?.metaDescription ||
    fallback?.metaDescription ||
    "Australian migration advice from MARA-registered agents."
  const canonical =
    remote?.canonicalUrl || absoluteUrl(routeKey === "home" ? "" : routeKey)
  const ogImage = absAsset(remote?.ogImage || remote?.heroImage || DEFAULT_OG_IMAGE)
  const robotsIndex = remote?.robotsIndex !== false
  const keywords = [remote?.primaryKeyword || fallback?.primaryKeyword, remote?.keywords]
    .filter(Boolean)
    .join(", ")

  return {
    title,
    description,
    keywords: keywords || undefined,
    alternates: { canonical },
    robots: robotsIndex ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title: remote?.ogTitle || title,
      description: remote?.ogDescription || description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [{ url: ogImage }],
    },
    twitter: {
      card: "summary_large_image",
      title: remote?.ogTitle || title,
      description: remote?.ogDescription || description,
      images: [ogImage],
    },
  }
}
