/** Production site origin — used for canonical URLs, OG tags, sitemap, and robots.txt. */
export const SITE_URL = "https://www.nanakmigration.com.au"

export const SITE_NAME = "Nanak Migration Group"

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og-image.jpg`

export const DEFAULT_SITE_DESCRIPTION =
  "Nanak Migration Group — MARA-registered agents helping skilled workers, students and families navigate Australia's visa system."

/** Map SEO route keys to public URL paths (without leading slash). */
export function routeKeyToPath(routeKey: string): string {
  if (routeKey === "home") return ""
  return routeKey
}

export function absoluteUrl(path = ""): string {
  if (!path) return `${SITE_URL}/`
  const normalized = path.replace(/^\//, "")
  return `${SITE_URL}/${normalized}`
}
