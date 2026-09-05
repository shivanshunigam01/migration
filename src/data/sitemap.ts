import { BLOG_POSTS } from "./blogPosts"
import { CANONICAL_ROUTES, ROUTE } from "./routes"
import { absoluteUrl, SITE_URL } from "./site"

/** All indexable public paths for sitemap generation. */
export function getPublicSitemapPaths(): string[] {
  const paths = new Set<string>([
    "",
    "about",
    ROUTE.book,
    ROUTE.bookConsultation,
    ROUTE.preAssessment,
    "regional-494",
    "visitor-hub",
    "visitor-visa",
    "parent-visa",
    ...CANONICAL_ROUTES.map((route) => route.path),
    ...BLOG_POSTS.map((post) => `${ROUTE.blog}/${post.id}`),
  ])

  return [...paths]
}

export function buildSitemapXml(lastmod = new Date().toISOString().slice(0, 10)): string {
  const urls = getPublicSitemapPaths()
    .sort((a, b) => (a === "" ? -1 : b === "" ? 1 : a.localeCompare(b)))
    .map((path) => {
      const loc = absoluteUrl(path)
      const priority = path === "" ? "1.0" : path.startsWith(`${ROUTE.blog}/`) ? "0.6" : "0.8"
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
