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

/** Absolute URL for OG/Twitter images and JSON-LD. */
export function absAsset(url: string) {
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
  const titleHealed =
    !!(
      fallback?.title &&
      remote?.title &&
      remote.title !== fallback.title &&
      (!remote.ogTitle || remote.ogTitle === remote.title)
    )
  const title = fitTitle(titleHealed ? fallback!.title : rawTitle)
  // When titles were restored but descriptions were left stale, prefer approved pageMeta.
  const rawDescription = titleHealed
    ? fallback?.metaDescription ||
      remote?.ogDescription ||
      remote?.metaDescription ||
      "Australian migration advice from MARA-registered agents at Nanak Migration Group (MARN 2619467)."
    : remote?.ogDescription ||
      remote?.metaDescription ||
      fallback?.metaDescription ||
      "Australian migration advice from MARA-registered agents at Nanak Migration Group (MARN 2619467)."
  const description = fitDescription(rawDescription)
  const homeCanonical = `${SITE_URL}/`
  let canonical =
    routeKey === "home"
      ? homeCanonical
      : (remote?.canonicalUrl || absoluteUrl(routeKey)).replace(/\/$/, "")
  const ogImage = absAsset(remote?.ogImage || remote?.heroImage || DEFAULT_OG_IMAGE)
  const robotsIndex = remote?.robotsIndex !== false

  return {
    title,
    description,
    // Do not emit keywords meta — public SEO strategy stays in admin only.
    alternates: {
      // Home: absolute URL with trailing slash (matches sitemap loc; avoids duplicate / vs /).
      canonical: routeKey === "home" ? homeCanonical : canonical,
    },
    robots: robotsIndex ? { index: true, follow: true } : { index: false, follow: false },
    openGraph: {
      title,
      description,
      url: routeKey === "home" ? homeCanonical : canonical,
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
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: SITE_NAME,
        legalName: "1313 Success Group Pty Ltd",
        url: SITE_URL,
        logo: `${SITE_URL}/nanak-migration-logo.png`,
        image: DEFAULT_OG_IMAGE,
        identifier: {
          "@type": "PropertyValue",
          name: "MARN",
          value: "2619467",
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": `${SITE_URL}/#professional-service`,
        name: SITE_NAME,
        legalName: "1313 Success Group Pty Ltd",
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
      },
    ],
  }
}
