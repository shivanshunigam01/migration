import { BLOG_POSTS } from "./blogPosts"
import { CANONICAL_ROUTES, ROUTE, type RouteCategory } from "./routes"
import { PAGE_META } from "./pageMeta"
import { REDIRECT_SOURCES, getSitemapPathsFromRegistry } from "@/lib/routeRegistry"

export type PublicPathEntry = {
  path: string
  title: string
  category: RouteCategory | "Legal" | "Blog" | "News" | "Other"
}

/**
 * Indexable public paths for XML + HTML sitemaps.
 * Never includes redirect sources or draft blog stubs.
 */
export function getAllPublicPathEntries(): PublicPathEntry[] {
  const byPath = new Map<string, PublicPathEntry>()

  const upsert = (entry: PublicPathEntry) => {
    const path = entry.path.replace(/^\/+|\/+$/g, "")
    if (REDIRECT_SOURCES.has(path)) return
    if (path === "book") return
    if (!byPath.has(path)) byPath.set(path, { ...entry, path })
  }

  upsert({ path: "", title: "Home", category: "Other" })

  for (const route of CANONICAL_ROUTES) {
    if (REDIRECT_SOURCES.has(route.path)) continue
    upsert({ path: route.path, title: route.title, category: route.category })
  }

  for (const [key, meta] of Object.entries(PAGE_META)) {
    if (key === "home" || key === "book" || key === "labour-agreement") continue
    if (REDIRECT_SOURCES.has(key)) continue
    if (byPath.has(key)) continue
    upsert({
      path: key,
      title: meta.title.replace(/\s*\|\s*Nanak Migration.*$/i, "").trim() || key,
      category: "Other",
    })
  }

  const extras: PublicPathEntry[] = [
    { path: "about", title: "About Nanak Migration Group", category: "Other" },
    { path: "contact", title: "Contact", category: "Other" },
    { path: "privacy", title: "Privacy Policy", category: "Legal" },
    { path: "terms", title: "Terms of Use", category: "Legal" },
    { path: "accessibility", title: "Accessibility", category: "Legal" },
    { path: ROUTE.bookConsultation, title: "Book a Consultation", category: "Other" },
    { path: ROUTE.preAssessment, title: "Pre-Assessment", category: "Other" },
    { path: "site-map", title: "HTML Sitemap", category: "Other" },
    { path: ROUTE.blog, title: "Migration Blog", category: "Practice" },
    { path: ROUTE.newsPage, title: "Immigration News", category: "Practice" },
  ]
  for (const page of extras) upsert(page)

  for (const post of BLOG_POSTS) {
    if (post.title.startsWith("[DRAFT]")) continue
    upsert({
      path: `${ROUTE.blog}/${post.id}`,
      title: post.title,
      category: "Blog",
    })
  }

  return [...byPath.values()].sort((a, b) => {
    if (a.path === "") return -1
    if (b.path === "") return 1
    return a.path.localeCompare(b.path)
  })
}

export function getPublicSitemapPaths(): string[] {
  // Prefer registry when available; fall back to local catalogue
  try {
    const fromRegistry = getSitemapPathsFromRegistry()
    if (fromRegistry.length > 0) return fromRegistry
  } catch {
    /* ignore */
  }
  return getAllPublicPathEntries().map((e) => e.path)
}

export function groupPublicPathsByCategory(entries = getAllPublicPathEntries()) {
  const groups = new Map<string, PublicPathEntry[]>()
  for (const entry of entries) {
    const list = groups.get(entry.category) || []
    list.push(entry)
    groups.set(entry.category, list)
  }
  return groups
}
