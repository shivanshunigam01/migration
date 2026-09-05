import { useEffect } from "react"
import { useCmsPage } from "@/components/page/CmsPageProvider"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"
import { applySeoTags } from "@/lib/seoMeta"

/**
 * Back-compat SEO hook. Prefers live CMS content from CmsPageProvider,
 * falls back to static PAGE_META.
 */
export function usePageSeo(routeKey: string, fallback?: PageMeta) {
  const cms = useCmsPage()
  if (cms && cms.routeKey === routeKey) {
    return {
      title: cms.title,
      metaDescription: cms.metaDescription,
      primaryKeyword: cms.primaryKeyword,
    }
  }
  return fallback ?? PAGE_META[routeKey] ?? null
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
