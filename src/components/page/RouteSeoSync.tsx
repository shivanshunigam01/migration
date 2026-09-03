import { useEffect } from "react"
import { useLocation } from "react-router-dom"
import { PAGE_META } from "@/data/pageMeta"
import { absoluteUrl } from "@/data/site"
import { usePageSeo } from "@/lib/usePageSeo"
import { applySeoTags } from "@/lib/seoMeta"

/** Map URL pathname → PAGE_META key. Blog posts handle their own SEO. */
export function pathnameToRouteKey(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, "") || "/"
  if (clean === "/") return "home"
  if (clean.startsWith("/blog/")) return null // article SEO owns this
  const key = clean.replace(/^\//, "")
  if (PAGE_META[key]) return key
  return key
}

/** Apply per-route title, description, and self-canonical on every navigation. */
export function RouteSeoSync() {
  const { pathname } = useLocation()
  const routeKey = pathnameToRouteKey(pathname)

  usePageSeo(routeKey ?? "home", routeKey && PAGE_META[routeKey] ? PAGE_META[routeKey] : undefined)

  useEffect(() => {
    if (routeKey && !PAGE_META[routeKey] && routeKey !== "home") {
      // Unknown keys still get a self-canonical so we never stick on homepage /
      applySeoTags({
        title: "Nanak Migration Group | Australian Migration Experts",
        description:
          "Nanak Migration Group — MARA-registered agents helping skilled workers, students and families navigate Australia's visa system.",
        canonicalUrl: absoluteUrl(pathname.replace(/^\//, "")),
      })
    }
  }, [pathname, routeKey])

  return null
}
