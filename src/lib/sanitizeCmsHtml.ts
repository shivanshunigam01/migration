/**
 * Allow a tiny HTML subset for Runway "Intro / body copy" so Nanak can paste
 * internal links like <a href="/skilled-independent-189">…</a> without XSS risk.
 */
const ALLOWED_TAGS = new Set(["a", "strong", "em", "b", "i", "br", "p"])

function sanitizeHref(href: string): string | null {
  const v = href.trim()
  if (!v) return null
  if (v.startsWith("/") && !v.startsWith("//")) return v
  if (v.startsWith("https://www.nanakmigration.com.au/")) return v
  if (v.startsWith("https://nanakmigration.com.au/")) return v
  return null
}

/** Strip disallowed tags/attrs; keep safe anchors + emphasis. */
export function sanitizeCmsHtml(input: string): string {
  if (!input) return ""
  // Remove script/style entirely
  let html = input
    .replace(/<\/(?:script|style)[^>]*>/gi, "")
    .replace(/<(?:script|style)[^>]*>[\s\S]*?<\/(?:script|style)>/gi, "")
    .replace(/on\w+\s*=\s*("[^"]*"|'[^']*'|[^\s>]+)/gi, "")

  html = html.replace(/<\/?([a-z0-9]+)(\s[^>]*)?>/gi, (full, tag: string, attrs = "") => {
    const name = tag.toLowerCase()
    const closing = full.startsWith("</")
    if (!ALLOWED_TAGS.has(name)) return ""
    if (closing) return `</${name}>`
    if (name === "br") return "<br />"
    if (name === "a") {
      const hrefMatch = attrs.match(/\bhref\s*=\s*("([^"]*)"|'([^']*)'|([^\s>]+))/i)
      const raw = hrefMatch ? hrefMatch[2] || hrefMatch[3] || hrefMatch[4] || "" : ""
      const href = sanitizeHref(raw)
      if (!href) return ""
      return `<a href="${href}">`
    }
    return `<${name}>`
  })

  return html
}

export function cmsBodyLooksLikeHtml(body: string): boolean {
  return /<\s*a\s+[^>]*href\s*=/i.test(body) || /<\s*(p|strong|em|br)\b/i.test(body)
}
