import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react"
import { useLocation } from "react-router-dom"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"
import { absoluteUrl, routeKeyToPath } from "@/data/site"
import { fetchSeoByRouteKey, type SeoMeta } from "@/lib/contentApi"
import { applySeoTags } from "@/lib/seoMeta"
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

  useEffect(() => {
    if (!cms?.title) return
    const keywords = [cms.primaryKeyword, cms.keywords].filter(Boolean).join(", ")
    applySeoTags({
      title: cms.title,
      description: cms.metaDescription,
      keywords: keywords || undefined,
      canonicalUrl: cms.canonicalUrl || absoluteUrl(routeKeyToPath(routeKey)),
      ogImage: cms.ogImage || cms.heroImage || undefined,
      ogTitle: cms.ogTitle || undefined,
      ogDescription: cms.ogDescription || undefined,
      robotsIndex: cms.robotsIndex,
    })
  }, [cms, routeKey])

  const value = useMemo(() => cms, [cms])

  return <CmsPageContext.Provider value={value}>{children}</CmsPageContext.Provider>
}
