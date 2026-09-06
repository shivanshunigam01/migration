/**
 * Single public-route catalogue for sitemap, redirects, and SEO.
 * Prefer this over ad-hoc path lists.
 */
import { CANONICAL_ROUTES, ROUTE, type CanonicalRoute, type RouteCategory } from "@/data/routes"
import { LEGACY_ROUTE_REDIRECTS } from "@/data/legacyRedirects"
import { PAGE_META } from "@/data/pageMeta"
import { BLOG_POSTS } from "@/data/blogPosts"
import { SITE_URL } from "@/data/site"

export type PublicRouteStatus = "published" | "redirect" | "legal" | "support"

export type PublicRouteRecord = {
  slug: string
  pathname: string
  type: "home" | "hub" | "guide" | "blog" | "news" | "legal" | "tool" | "other"
  status: PublicRouteStatus
  title: string
  description: string
  canonicalUrl: string
  sitemap: boolean
  navigation: boolean
  category?: RouteCategory | "Legal" | "Blog" | "News" | "Other"
  redirectFrom?: string[]
  priority?: number
}

function abs(path: string) {
  if (!path) return `${SITE_URL}/`
  return `${SITE_URL}/${path.replace(/^\//, "")}`
}

function routeType(a: CanonicalRoute["archetype"]): PublicRouteRecord["type"] {
  if (a === "Hub") return "hub"
  return "guide"
}

/** Paths that 301 elsewhere — never sitemap / never index as standalone. */
export const REDIRECT_SOURCES = new Set(Object.keys(LEGACY_ROUTE_REDIRECTS))

export function buildPublicRouteRegistry(): PublicRouteRecord[] {
  const bySlug = new Map<string, PublicRouteRecord>()

  const put = (rec: PublicRouteRecord) => {
    if (REDIRECT_SOURCES.has(rec.slug)) return
    if (!bySlug.has(rec.slug)) bySlug.set(rec.slug, rec)
  }

  put({
    slug: "",
    pathname: "/",
    type: "home",
    status: "published",
    title: PAGE_META.home?.title || "Nanak Migration Group",
    description: PAGE_META.home?.metaDescription || "",
    canonicalUrl: abs(""),
    sitemap: true,
    navigation: true,
    category: "Other",
    priority: 1,
  })

  for (const route of CANONICAL_ROUTES) {
    if (REDIRECT_SOURCES.has(route.path)) continue
    const meta = PAGE_META[route.path]
    put({
      slug: route.path,
      pathname: `/${route.path}`,
      type: routeType(route.archetype),
      status: "published",
      title: meta?.title || route.title,
      description: meta?.metaDescription || "",
      canonicalUrl: abs(route.path),
      sitemap: true,
      navigation: true,
      category: route.category,
      priority: route.archetype === "Hub" ? 0.9 : 0.8,
    })
  }

  const legal = [
    ["about", "About"],
    ["contact", "Contact"],
    ["privacy", "Privacy Policy"],
    ["terms", "Terms of Use"],
    ["accessibility", "Accessibility"],
    [ROUTE.bookConsultation, "Book a Consultation"],
    [ROUTE.preAssessment, "Pre-Assessment"],
    ["site-map", "HTML Sitemap"],
  ] as const

  for (const [slug, label] of legal) {
    const meta = PAGE_META[slug]
    put({
      slug,
      pathname: `/${slug}`,
      type: slug === "site-map" ? "other" : slug.includes("book") || slug.includes("pre-") ? "other" : "legal",
      status: slug === "privacy" || slug === "terms" || slug === "accessibility" ? "legal" : "published",
      title: meta?.title || label,
      description: meta?.metaDescription || "",
      canonicalUrl: abs(slug),
      sitemap: true,
      navigation: slug === "about" || slug === "contact" || slug === ROUTE.bookConsultation,
      category: slug === "privacy" || slug === "terms" || slug === "accessibility" ? "Legal" : "Other",
      priority: 0.5,
    })
  }

  // Do NOT include /book — it redirects to book-consultation
  put({
    slug: ROUTE.blog,
    pathname: `/${ROUTE.blog}`,
    type: "blog",
    status: "published",
    title: PAGE_META.blog?.title || "Migration Blog",
    description: PAGE_META.blog?.metaDescription || "",
    canonicalUrl: abs(ROUTE.blog),
    sitemap: true,
    navigation: true,
    category: "Practice",
    priority: 0.7,
  })

  put({
    slug: ROUTE.newsPage,
    pathname: `/${ROUTE.newsPage}`,
    type: "news",
    status: "published",
    title: PAGE_META.news?.title || "Immigration News",
    description: PAGE_META.news?.metaDescription || "",
    canonicalUrl: abs(ROUTE.newsPage),
    sitemap: true,
    navigation: true,
    category: "Practice",
    priority: 0.7,
  })

  for (const [key, meta] of Object.entries(PAGE_META)) {
    if (key === "home" || key === "book") continue
    if (REDIRECT_SOURCES.has(key)) continue
    if (bySlug.has(key)) continue
    // Skip singular labour-agreement alias
    if (key === "labour-agreement") continue
    put({
      slug: key,
      pathname: `/${key}`,
      type: "other",
      status: "published",
      title: meta.title,
      description: meta.metaDescription,
      canonicalUrl: abs(key),
      sitemap: true,
      navigation: false,
      category: "Other",
      priority: 0.6,
    })
  }

  // Static blog stubs only if not draft-prefixed (defense — live posts come from API)
  for (const post of BLOG_POSTS) {
    if (post.title.startsWith("[DRAFT]")) continue
    const slug = `${ROUTE.blog}/${post.id}`
    put({
      slug,
      pathname: `/${slug}`,
      type: "blog",
      status: "published",
      title: post.title,
      description: post.standfirst,
      canonicalUrl: abs(slug),
      sitemap: true,
      navigation: false,
      category: "Blog",
      priority: 0.6,
    })
  }

  return [...bySlug.values()].sort((a, b) => a.slug.localeCompare(b.slug))
}

export function getSitemapPathsFromRegistry(): string[] {
  return buildPublicRouteRegistry()
    .filter((r) => r.sitemap && r.status !== "redirect")
    .map((r) => r.slug)
}

export function getRedirectEntries() {
  return Object.entries(LEGACY_ROUTE_REDIRECTS).map(([from, to]) => ({
    source: `/${from}`,
    destination: `/${to}`,
    permanent: true as const,
  }))
}
