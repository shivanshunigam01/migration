import { getApiBaseUrl } from "@/lib/apiBase"

export interface PublicBlogPost {
  id: string
  slug: string
  title: string
  standfirst: string
  body: string
  category: string
  tags: string[]
  relatedRoute: string
  status: "draft" | "published"
  publishedAt?: string
  author?: string
  seoTitle?: string
  seoDescription?: string
}

export interface PublicNewsArticle {
  id: string
  slug: string
  title: string
  standfirst: string
  body: string
  category: string
  tags: string[]
  relatedRoute: string
  status: "draft" | "published"
  publishedAt?: string
  author?: string
  seoTitle?: string
  seoDescription?: string
  ogImage?: string
  featured?: boolean
  readTime?: string
}

export interface FaqCollection {
  id: string
  pageKey: string
  title: string
  items: { q: string; a: string; order?: number }[]
  published: boolean
}

export interface SeoMeta {
  routeKey: string
  title: string
  metaDescription: string
  primaryKeyword: string
  keywords?: string
  h1?: string
  body?: string
  heroImage?: string
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  robotsIndex?: boolean
}

/** Strip leftover seed prefix for display — never use this to hide published posts. */
export function cleanBlogTitle(title: string): string {
  return String(title || "").replace(/^\[DRAFT\]\s*/i, "").trim()
}

async function publicGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public${path}`)
    const json = await res.json().catch(() => ({}))
    if (!res.ok || json.success === false) return null
    return json.data as T
  } catch {
    return null
  }
}

export async function fetchPublishedBlogs(params: { category?: string; search?: string } = {}) {
  const q = new URLSearchParams()
  if (params.category) q.set("category", params.category)
  if (params.search) q.set("search", params.search)
  const suffix = q.toString() ? `?${q}` : ""
  const data = await publicGet<{ blogs: PublicBlogPost[] }>(`/blogs${suffix}`)
  // Public API already returns published-only — trust status, do not hide by title prefix.
  const blogs = data?.blogs ?? null
  if (!blogs) return null
  return blogs.filter((b) => !b.status || b.status === "published")
}

export async function fetchBlogBySlug(slug: string) {
  const post = await publicGet<PublicBlogPost>(`/blogs/${encodeURIComponent(slug)}`)
  if (!post) return null
  if (post.status && post.status !== "published") return null
  return post
}

export async function fetchPublishedNews(params: { category?: string; search?: string; featured?: boolean } = {}) {
  const q = new URLSearchParams()
  if (params.category) q.set("category", params.category)
  if (params.search) q.set("search", params.search)
  if (params.featured) q.set("featured", "true")
  const suffix = q.toString() ? `?${q}` : ""
  const data = await publicGet<{ news: PublicNewsArticle[] }>(`/news${suffix}`)
  const news = data?.news ?? null
  if (!news) return null
  return news.filter((n) => n.status === "published")
}

export async function fetchNewsBySlug(slug: string) {
  const post = await publicGet<PublicNewsArticle>(`/news/${encodeURIComponent(slug)}`)
  if (!post || post.status !== "published") return null
  return post
}

export async function fetchFaqByPageKey(pageKey: string) {
  return publicGet<FaqCollection>(`/faqs/${encodeURIComponent(pageKey)}`)
}

export async function fetchSeoByRouteKey(routeKey: string) {
  return publicGet<SeoMeta>(`/seo/${encodeURIComponent(routeKey)}`)
}

export async function fetchAllSeo() {
  const data = await publicGet<{ pages: SeoMeta[] }>("/seo")
  return data?.pages ?? null
}

export async function fetchSiteContent() {
  return publicGet<Record<string, unknown>>("/site-content")
}
