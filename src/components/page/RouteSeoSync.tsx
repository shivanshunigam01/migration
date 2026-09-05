import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { absoluteUrl } from "@/data/site"
import { applySeoTags } from "@/lib/seoMeta"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"

export { pathnameToRouteKey }

/**
 * Fallback SEO for unknown routes. Known routes are owned by CmsPageProvider.
 */
export function RouteSeoSync() {
  const { pathname } = useLocation()
  const routeKey = pathnameToRouteKey(pathname)

  useEffect(() => {
    if (routeKey) return
    applySeoTags({
      title: "Nanak Migration Group | Australian Migration Experts",
      description:
        "Nanak Migration Group — MARA-registered agents helping skilled workers, students and families navigate Australia's visa system.",
      canonicalUrl: absoluteUrl(pathname.replace(/^\//, "")),
    })
  }, [pathname, routeKey])

  return null
}
