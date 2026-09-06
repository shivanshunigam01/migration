import { BLOG_POSTS } from "./blogPosts"
import { CANONICAL_ROUTES, ROUTE, type RouteCategory } from "./routes"
import { PAGE_META } from "./pageMeta"

export type PublicPathEntry = {
  path: string
  title: string
  category: RouteCategory | "Legal" | "Blog" | "News" | "Other"
}

const LEGAL_PAGES: PublicPathEntry[] = [
  { path: "about", title: "About Nanak Migration Group", category: "Other" },
  { path: "contact", title: "Contact", category: "Other" },
  { path: "privacy", title: "Privacy Policy", category: "Legal" },
  { path: "terms", title: "Terms of Use", category: "Legal" },
  { path: "accessibility", title: "Accessibility", category: "Legal" },
  { path: "book", title: "Book", category: "Other" },
  { path: ROUTE.bookConsultation, title: "Book a Consultation", category: "Other" },
  { path: ROUTE.preAssessment, title: "Pre-Assessment", category: "Other" },
  { path: "site-map", title: "HTML Sitemap", category: "Other" },
]

/** Legacy aliases that still resolve to live pages (keep crawlable). */
const LEGACY_LIVE: PublicPathEntry[] = [
  { path: "visitor-visa", title: "Visitor Visa (legacy URL)", category: "Visitor & Other" },
  { path: "parent-visa", title: "Parent Visa (legacy URL)", category: "Partner & Family" },
  { path: "visitor-hub", title: "Visitor Hub (legacy URL)", category: "Visitor & Other" },
  { path: "regional-494", title: "494 Visa (legacy URL)", category: "Employer Sponsored" },
]

/**
 * Complete indexable public path catalogue for XML sitemap + HTML sitemap.
 * Source of truth: PAGE_META ∪ CANONICAL_ROUTES ∪ practice/legal extras ∪ blog stubs.
 */
export function getAllPublicPathEntries(): PublicPathEntry[] {
  const byPath = new Map<string, PublicPathEntry>()

  const upsert = (entry: PublicPathEntry) => {
    const path = entry.path.replace(/^\/+|\/+$/g, "")
    if (!byPath.has(path)) {
      byPath.set(path, { ...entry, path })
    }
  }

  upsert({ path: "", title: "Home", category: "Other" })

  for (const route of CANONICAL_ROUTES) {
    upsert({ path: route.path, title: route.title, category: route.category })
  }

  for (const [key, meta] of Object.entries(PAGE_META)) {
    if (key === "home") continue
    // Prefer canonical title when present
    const existing = byPath.get(key)
    if (existing) continue
    upsert({
      path: key,
      title: meta.title.replace(/\s*\|\s*Nanak Migration.*$/i, "").trim() || key,
      category: "Other",
    })
  }

  for (const page of LEGAL_PAGES) upsert(page)
  for (const page of LEGACY_LIVE) upsert(page)

  for (const post of BLOG_POSTS) {
    if (post.title.startsWith("[DRAFT]")) continue
    upsert({
      path: `${ROUTE.blog}/${post.id}`,
      title: post.title,
      category: "Blog",
    })
  }

  // Always include blog + news hubs
  upsert({ path: ROUTE.blog, title: "Migration Blog", category: "Practice" })
  upsert({ path: ROUTE.newsPage, title: "Immigration News", category: "Practice" })

  return [...byPath.values()].sort((a, b) => {
    if (a.path === "") return -1
    if (b.path === "") return 1
    return a.path.localeCompare(b.path)
  })
}

/** Paths only (no leading slash), for XML sitemap / static generation. */
export function getPublicSitemapPaths(): string[] {
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
