import type { MetadataRoute } from "next"
import { getPublicSitemapPaths } from "@/data/publicPaths"
import { absoluteUrl } from "@/data/site"
import { getApiBaseUrl } from "@/lib/apiBase"
import { ROUTE } from "@/data/routes"
import { REDIRECT_SOURCES } from "@/lib/routeRegistry"

type PublishedItem = {
  slug?: string
  status?: string
  updatedAt?: string
  publishedAt?: string
}

function isAllowedSitemapPath(path: string): boolean {
  if (path == null || path === undefined) return false
  const key = String(path).replace(/^\/+|\/+$/g, "")
  if (key === "book") return false
  if (REDIRECT_SOURCES.has(key)) return false
  return true
}

async function fetchPublishedEntries(
  kind: "blogs" | "news",
): Promise<Array<{ slug: string; lastModified: Date | undefined }>> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/${kind}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) {
      console.error(`[sitemap] ${kind} API returned ${res.status}`)
      return []
    }
    const json = await res.json()
    const list = (json?.data?.[kind] || []) as PublishedItem[]
    return list
      .filter((item) => item.slug && item.status !== "draft")
      .map((item) => {
        const raw = item.updatedAt || item.publishedAt
        let lastModified: Date | undefined
        if (raw) {
          const d = new Date(raw)
          if (!Number.isNaN(d.getTime())) lastModified = d
        }
        return { slug: String(item.slug).trim(), lastModified }
      })
      .filter((e) => e.slug.length > 0)
  } catch (err) {
    console.error(`[sitemap] failed to fetch ${kind}:`, err)
    return []
  }
}

function sitemapEntry(path: string, lastModified?: Date): MetadataRoute.Sitemap[number] {
  const url = absoluteUrl(path)
  if (!url.startsWith("https://www.nanakmigration.com.au")) {
    throw new Error(`[sitemap] invalid URL for path "${path}": ${url}`)
  }
  const entry: MetadataRoute.Sitemap[number] = {
    url,
    changeFrequency: "weekly",
    priority:
      path === ""
        ? 1
        : path.startsWith(`${ROUTE.blog}/`) || path.startsWith(`${ROUTE.newsPage}/`)
          ? 0.6
          : 0.8,
  }
  if (lastModified && !Number.isNaN(lastModified.getTime())) {
    entry.lastModified = lastModified
  }
  return entry
}

function collectStaticPaths(): string[] {
  const unique = new Set<string>()
  for (const p of getPublicSitemapPaths()) {
    if (!isAllowedSitemapPath(p)) continue
    unique.add(p === "" ? "" : String(p).trim())
  }
  return [...unique]
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  try {
    const pathSet = new Set(collectStaticPaths())
    const lastModByPath = new Map<string, Date>()

    const [blogEntries, newsEntries] = await Promise.all([
      fetchPublishedEntries("blogs"),
      fetchPublishedEntries("news"),
    ])

    for (const { slug, lastModified } of blogEntries) {
      const path = `${ROUTE.blog}/${slug}`
      pathSet.add(path)
      if (lastModified) lastModByPath.set(path, lastModified)
    }
    for (const { slug, lastModified } of newsEntries) {
      const path = `${ROUTE.newsPage}/${slug}`
      pathSet.add(path)
      if (lastModified) lastModByPath.set(path, lastModified)
    }

    const paths = [...pathSet].sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))

    return paths.map((path) => sitemapEntry(path, lastModByPath.get(path)))
  } catch (err) {
    console.error("[sitemap] generation failed, using static paths only:", err)
    return collectStaticPaths()
      .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))
      .map((path) => sitemapEntry(path))
  }
}
