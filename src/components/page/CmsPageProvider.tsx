import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"
import { fetchSeoByRouteKey, type SeoMeta } from "@/lib/contentApi"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"

export type CmsPageContent = SeoMeta & Partial<PageMeta>

const CmsPageContext = createContext<CmsPageContent | null>(null)

export function useCmsPage() {
  return useContext(CmsPageContext)
}

function mergeMeta(routeKey: string, remote: SeoMeta | null): CmsPageContent | null {
  const fallback = PAGE_META[routeKey]
  if (!remote && !fallback) return null
  return {
    routeKey,
    title: remote?.title || fallback?.title || "",
    metaDescription: remote?.metaDescription || fallback?.metaDescription || "",
    primaryKeyword: remote?.primaryKeyword || fallback?.primaryKeyword || "",
    keywords: remote?.keywords || "",
    h1: remote?.h1 || "",
    body: remote?.body || "",
    heroImage: remote?.heroImage || remote?.ogImage || "",
    canonicalUrl: remote?.canonicalUrl || "",
    ogTitle: remote?.ogTitle || "",
    ogDescription: remote?.ogDescription || "",
    ogImage: remote?.ogImage || remote?.heroImage || "",
    robotsIndex: remote?.robotsIndex !== false,
  }
}

/** Loads CMS website content for the current route and applies SEO tags. */
export function CmsPageProvider({ children }: { children: ReactNode }) {
  const { pathname } = useLocation()
  const routeKey = pathnameToRouteKey(pathname) ?? "home"
  const [cms, setCms] = useState<CmsPageContent | null>(() => mergeMeta(routeKey, null))

  useEffect(() => {
    let cancelled = false
    setCms(mergeMeta(routeKey, null))

    fetchSeoByRouteKey(routeKey).then((remote) => {
      if (cancelled) return
      setCms(mergeMeta(routeKey, remote))
    })

    return () => {
      cancelled = true
    }
  }, [routeKey])

  // Do NOT call applySeoTags here. App Router generateMetadata / buildPageMetadata
  // owns <title>, description, canonical and OG tags. Client overwrites caused
  // title vs og:title divergence after CMS sync and fought server-rendered meta.

  const value = useMemo(() => cms, [cms])

  return <CmsPageContext.Provider value={value}>{children}</CmsPageContext.Provider>
}
