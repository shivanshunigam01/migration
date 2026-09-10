import { getPublicSitemapPaths } from "@/data/publicPaths"
import { PAGE_META } from "@/data/pageMeta"
import { CANONICAL_ROUTES } from "@/data/routes"
import { REDIRECT_SOURCES } from "@/lib/routeRegistry"

/**
 * Server-safe check: is this catch-all slug a known marketing page?
 * (Blog/news post URLs use their own App Router segments.)
 */
export function isKnownPublicPath(slugPath: string): boolean {
  const key = slugPath.replace(/^\/+|\/+$/g, "")
  if (!key) return true
  if (REDIRECT_SOURCES.has(key)) return false
  if (key.startsWith("blog/") || key.startsWith("news/")) return false

  if (PAGE_META[key]) return true
  if (CANONICAL_ROUTES.some((r) => r.path === key)) return true

  const sitemap = getPublicSitemapPaths()
  if (sitemap.includes(key)) return true

  // Only known tool IDs — unknown /tools/* must 404 (not soft-200)
  const KNOWN_TOOLS = new Set([
    "points-calculator",
    "occupation-search",
    "residence-calculator",
    "english-score-converter",
    "visa-pathway-comparison",
  ])
  if (key.startsWith("tools/")) {
    const id = key.slice("tools/".length)
    return KNOWN_TOOLS.has(id)
  }

  return false
}
