import { getApiBaseUrl } from "@/lib/apiBase"

const API_BASE = getApiBaseUrl()

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
  canonicalUrl?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: string
  robotsIndex?: boolean
}

async function publicGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${API_BASE}/public${path}`)
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
  return data?.blogs ?? null
}

export async function fetchBlogBySlug(slug: string) {
  return publicGet<PublicBlogPost>(`/blogs/${encodeURIComponent(slug)}`)
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
