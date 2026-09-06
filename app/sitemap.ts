import type { MetadataRoute } from "next"
import { getPublicSitemapPaths } from "@/data/publicPaths"
import { absoluteUrl } from "@/data/site"
import { getApiBaseUrl } from "@/lib/apiBase"
import { ROUTE } from "@/data/routes"

async function fetchPublishedSlugs(kind: "blogs" | "news"): Promise<string[]> {
  try {
    const res = await fetch(`${getApiBaseUrl()}/public/${kind}`, {
      next: { revalidate: 300 },
    })
    if (!res.ok) return []
    const json = await res.json()
    const list = (json?.data?.[kind] || []) as { slug?: string; status?: string }[]
    return list
      .filter((item) => item.slug && item.status !== "draft")
      .map((item) => item.slug as string)
  } catch {
    return []
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  const basePaths = getPublicSitemapPaths()
  const [blogSlugs, newsSlugs] = await Promise.all([
    fetchPublishedSlugs("blogs"),
    fetchPublishedSlugs("news"),
  ])

  const paths = new Set(basePaths)
  for (const slug of blogSlugs) paths.add(`${ROUTE.blog}/${slug}`)
  for (const slug of newsSlugs) paths.add(`${ROUTE.newsPage}/${slug}`)

  return [...paths]
    .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))
    .map((path) => ({
      url: absoluteUrl(path),
      lastModified,
      changeFrequency: "weekly" as const,
      priority:
        path === ""
          ? 1
          : path.startsWith(`${ROUTE.blog}/`) || path.startsWith(`${ROUTE.newsPage}/`)
            ? 0.6
            : 0.8,
    }))
}
