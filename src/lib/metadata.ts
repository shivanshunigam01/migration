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

/** Soft-trim titles for SERP display without cutting mid-word when possible. */
export function fitTitle(raw: string, max = 60): string {
  const t = raw.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const at = cut.lastIndexOf(" ")
  return `${(at > 40 ? cut.slice(0, at) : cut).trimEnd()}…`
}

export function fitDescription(raw: string, max = 158): string {
  const t = raw.replace(/\s+/g, " ").trim()
  if (t.length <= max) return t
  const cut = t.slice(0, max - 1)
  const at = cut.lastIndexOf(" ")
  return `${(at > 100 ? cut.slice(0, at) : cut).trimEnd()}…`
}

function absAsset(url: string) {
  if (!url) return DEFAULT_OG_IMAGE
  if (url.startsWith("http")) return url
  return `${SITE_URL}${url.startsWith("/") ? url : `/${url}`}`
}

async function fetchSeo(routeKey: string): Promise<SeoPayload | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/seo/${encodeURIComponent(routeKey)}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json()
    return (json?.data as SeoPayload) || null
  } catch {
    return null
  }
}

export async function buildPageMetadata(routeKey: string): Promise<Metadata> {
  const fallback = PAGE_META[routeKey]
  const remote = await fetchSeo(routeKey)
  const rawTitle = remote?.title || fallback?.title || SITE_NAME
  const rawDescription =
    remote?.metaDescription ||
    fallback?.metaDescription ||
    "Australian migration advice from MARA-registered agents at Nanak Migration Group (MARN 2619467)."
  const title = fitTitle(rawTitle)
  const description = fitDescription(rawDescription)
  const canonical = remote?.canonicalUrl || absoluteUrl(routeKey === "home" ? "" : routeKey)
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
      title: fitTitle(remote?.ogTitle || rawTitle),
      description: fitDescription(remote?.ogDescription || rawDescription),
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title: fitTitle(remote?.ogTitle || rawTitle),
      description: fitDescription(remote?.ogDescription || rawDescription),
      images: [ogImage],
    },
  }
}

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/nanak-migration-logo.png`,
    image: DEFAULT_OG_IMAGE,
    description:
      "MARA-registered migration agents helping skilled workers, students and families with Australian visas.",
    areaServed: "AU",
    address: {
      "@type": "PostalAddress",
      addressCountry: "AU",
    },
    sameAs: [],
    identifier: {
      "@type": "PropertyValue",
      name: "MARN",
      value: "2619467",
    },
  }
}
