import { BLOG_POSTS } from "./blogPosts"
import { CANONICAL_ROUTES, ROUTE } from "./routes"
import { absoluteUrl, SITE_URL } from "./site"
import { getPublicSitemapPaths } from "./publicPaths"

export { getPublicSitemapPaths, getAllPublicPathEntries, groupPublicPathsByCategory } from "./publicPaths"

/** @deprecated Prefer getPublicSitemapPaths from publicPaths — kept for older imports. */
export function getLegacySitemapExtras(): string[] {
  return BLOG_POSTS.map((post) => `${ROUTE.blog}/${post.id}`)
}

export function buildSitemapXml(lastmod = new Date().toISOString().slice(0, 10)): string {
  const urls = getPublicSitemapPaths()
    .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))
    .map((path) => {
      const loc = absoluteUrl(path)
      const priority =
        path === "" ? "1.0" : path.startsWith(`${ROUTE.blog}/`) || path.startsWith(`${ROUTE.newsPage}/`) ? "0.6" : "0.8"
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${lastmod}</lastmod>`,
        "    <changefreq>weekly</changefreq>",
        `    <priority>${priority}</priority>`,
        "  </url>",
      ].join("\n")
    })

  return [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    ...urls,
    "</urlset>",
    "",
  ].join("\n")
}

export function buildRobotsTxt(): string {
  return [`User-agent: *`, `Allow: /`, ``, `Sitemap: ${SITE_URL}/sitemap.xml`, ``].join("\n")
}

/** Count helper for audits. */
export function sitemapStats() {
  const paths = getPublicSitemapPaths()
  return { total: paths.length, sample: paths.slice(0, 5), canonical: CANONICAL_ROUTES.length }
}
