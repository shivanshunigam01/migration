import { PAGE_META } from "@/data/pageMeta"

/** Map URL pathname → PAGE_META / CMS route key. Blog posts handle their own SEO. */
export function pathnameToRouteKey(pathname: string): string | null {
  const clean = pathname.replace(/\/+$/, "") || "/"
  if (clean === "/") return "home"
  if (clean.startsWith("/blog/")) return null
  const key = clean.replace(/^\//, "")
  if (PAGE_META[key]) return key
  return key
}
