import { getApiBaseUrl } from "@/lib/apiBase"
import type { PublicBlogPost, PublicNewsArticle } from "@/lib/contentApi"

async function serverPublicGet<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public${path}`, {
      next: { revalidate: 60 },
    })
    if (!res.ok) return null
    const json = await res.json().catch(() => ({}))
    if (json.success === false) return null
    return json.data as T
  } catch {
    return null
  }
}

export async function fetchPublishedBlogsSSR() {
  const data = await serverPublicGet<{ blogs: PublicBlogPost[] }>("/blogs")
  const blogs = data?.blogs ?? []
  return blogs.filter((b) => !b.status || b.status === "published")
}

export async function fetchPublishedNewsSSR() {
  const data = await serverPublicGet<{ news: PublicNewsArticle[] }>("/news")
  const news = data?.news ?? []
  return news.filter((n) => n.status === "published")
}

/** When CMS news is empty, surface published blog posts as news-style cards. */
export async function fetchNewsOrBlogFallbackSSR() {
  const news = await fetchPublishedNewsSSR()
  if (news.length > 0) {
    return news.map((n) => ({
      source: "news" as const,
      id: n.id,
      slug: n.slug,
      title: n.title,
      standfirst: n.standfirst,
      category: n.category,
      publishedAt: n.publishedAt,
      featured: Boolean(n.featured),
      readTime: n.readTime || "3 min read",
    }))
  }
  const blogs = await fetchPublishedBlogsSSR()
  return blogs.map((b) => ({
    source: "blog" as const,
    id: b.id,
    slug: b.slug,
    title: b.title,
    standfirst: b.standfirst,
    category: b.category || "Policy updates",
    publishedAt: b.publishedAt,
    featured: false,
    readTime: "4 min read",
  }))
}
