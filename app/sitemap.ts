import type { MetadataRoute } from "next"
import { getPublicSitemapPaths } from "@/data/sitemap"
import { absoluteUrl } from "@/data/site"

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return getPublicSitemapPaths().map((path) => ({
    url: absoluteUrl(path),
    lastModified,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : path.startsWith("blog/") || path.startsWith("news/") ? 0.6 : 0.8,
  }))
}
