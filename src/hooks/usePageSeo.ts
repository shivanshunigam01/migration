import { useEffect, useState } from "react"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"
import { absoluteUrl, routeKeyToPath } from "@/data/site"
import { fetchSeoByRouteKey } from "@/lib/contentApi"
import { applySeoTags } from "@/lib/seoMeta"

/** Apply SEO meta from CMS with static fallback. */
export function usePageSeo(routeKey: string, fallback?: PageMeta) {
  const staticMeta = fallback ?? PAGE_META[routeKey]
  const [meta, setMeta] = useState<PageMeta | null>(staticMeta ?? null)

  useEffect(() => {
    let cancelled = false
    fetchSeoByRouteKey(routeKey).then((remote) => {
      if (cancelled) return
      if (remote?.title) {
        setMeta({
          title: remote.title,
          metaDescription: remote.metaDescription,
          primaryKeyword: remote.primaryKeyword,
        })
      } else if (staticMeta) {
        setMeta(staticMeta)
      }
    })
    return () => {
      cancelled = true
    }
  }, [routeKey])

  useEffect(() => {
    if (!meta) return
    applySeoTags({
      title: meta.title,
      description: meta.metaDescription,
      keywords: meta.primaryKeyword,
      canonicalUrl: absoluteUrl(routeKeyToPath(routeKey)),
    })
  }, [meta, routeKey])

  return meta
}

/** Blog/article SEO with post-level overrides. */
export function useArticleSeo(opts: {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
}) {
  useEffect(() => {
    applySeoTags({
      title: opts.title,
      description: opts.description,
      canonicalUrl: opts.canonicalUrl,
      ogImage: opts.ogImage,
      ogType: "article",
    })
  }, [opts.title, opts.description, opts.canonicalUrl, opts.ogImage])
}
