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

/**
 * Normalize whitespace only. Do not truncate with an ellipsis —
 * SERP length is controlled at authoring time in Runway / pageMeta.
 */
export function fitTitle(raw: string, _max = 60): string {
  return raw.replace(/\s+/g, " ").trim()
}

export function fitDescription(raw: string, _max = 158): string {
  return raw.replace(/\s+/g, " ").trim()
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
  // Heal title↔ogTitle divergence left by blind sync (prefer surviving approved ogTitle).
  // Otherwise CMS wins; pageMeta is fallback when the API has nothing.
  const rawTitle =
    remote?.ogTitle && remote?.title && remote.ogTitle !== remote.title
      ? remote.ogTitle
      : remote?.title || remote?.ogTitle || fallback?.title || SITE_NAME
  // Until Runway "Restore SEO" runs, prefer approved pageMeta when CMS title is stale
  // (matches neither the approved default nor a distinct ogTitle).
  const title = fitTitle(
    fallback?.title &&
      remote?.title &&
      remote.title !== fallback.title &&
      (!remote.ogTitle || remote.ogTitle === remote.title)
      ? fallback.title
      : rawTitle,
  )
  const rawDescription =
    remote?.ogDescription ||
    remote?.metaDescription ||
    fallback?.metaDescription ||
    "Australian migration advice from MARA-registered agents at Nanak Migration Group (MARN 2619467)."
  const description = fitDescription(rawDescription)
  let canonical = remote?.canonicalUrl || absoluteUrl(routeKey === "home" ? "" : routeKey)
  if (routeKey === "home") {
    canonical = (remote?.canonicalUrl || absoluteUrl("")).replace(/\/?$/, "/")
  }
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
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_AU",
      type: "website",
      images: [{ url: ogImage, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
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
