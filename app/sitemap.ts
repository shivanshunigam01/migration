import type { MetadataRoute } from "next"
import { getPublicSitemapPaths } from "@/data/publicPaths"
import { absoluteUrl } from "@/data/site"
import { getApiBaseUrl } from "@/lib/apiBase"
import { ROUTE } from "@/data/routes"

type PublishedItem = {
  slug?: string
  status?: string
  updatedAt?: string
  publishedAt?: string
}

async function fetchPublishedEntries(
  kind: "blogs" | "news",
): Promise<Array<{ slug: string; lastModified: Date }>> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/${kind}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return []
    const json = await res.json()
    const list = (json?.data?.[kind] || []) as PublishedItem[]
    const fallback = new Date()
    return list
      .filter((item) => item.slug && item.status !== "draft")
      .map((item) => {
        const raw = item.updatedAt || item.publishedAt
        const lastModified = raw ? new Date(raw) : fallback
        return { slug: item.slug as string, lastModified }
      })
  } catch {
    return []
  }
}

function priorityFor(path: string): number {
  if (path === "") return 1
  if (path.startsWith(`${ROUTE.blog}/`) || path.startsWith(`${ROUTE.newsPage}/`)) return 0.6
  if (
    path.endsWith("-visas") ||
    path === ROUTE.skilledMigration ||
    path === ROUTE.employerSponsoredVisas ||
    path === ROUTE.guides
  ) {
    return 0.9
  }
  return 0.8
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticFallback = new Date()
  try {
    const basePaths = getPublicSitemapPaths()
    const [blogEntries, newsEntries] = await Promise.all([
      fetchPublishedEntries("blogs"),
      fetchPublishedEntries("news"),
    ])

    const lastModByPath = new Map<string, Date>()
    for (const p of basePaths) {
      if (p) lastModByPath.set(p, staticFallback)
    }
    for (const { slug, lastModified } of blogEntries) {
      lastModByPath.set(`${ROUTE.blog}/${slug}`, lastModified)
    }
    for (const { slug, lastModified } of newsEntries) {
      lastModByPath.set(`${ROUTE.newsPage}/${slug}`, lastModified)
    }

    const paths = [...lastModByPath.keys()].sort((a, b) =>
      a === "" ? -1 : b === "" ? 1 : a.localeCompare(b),
    )

    return paths.map((path) => ({
      url: absoluteUrl(path),
      lastModified: lastModByPath.get(path) || staticFallback,
      changeFrequency: "weekly" as const,
      priority: priorityFor(path),
    }))
  } catch {
    return getPublicSitemapPaths()
      .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))
      .map((path) => ({
        url: absoluteUrl(path),
        lastModified: staticFallback,
        changeFrequency: "weekly" as const,
        priority: priorityFor(path),
      }))
  }
}
