import { useCmsPage } from "@/components/page/CmsPageProvider"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"

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

/** Blog/article SEO — App Router generateMetadata owns head tags; do not overwrite client-side. */
export function useArticleSeo(_opts: {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
}) {
  // intentionally empty — prevents client meta thrash against SSR
}
