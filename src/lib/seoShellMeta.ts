import { BLOG_POSTS } from "../data/blogPosts"
import { PAGE_META, type PageMeta } from "../data/pageMeta"
import { LEGACY_ROUTE_REDIRECTS } from "../data/legacyRedirects"
import {
  absoluteUrl,
  DEFAULT_OG_IMAGE,
  DEFAULT_SITE_DESCRIPTION,
  SITE_NAME,
  SITE_URL,
} from "../data/site"
import { getPublicSitemapPaths } from "../data/sitemap"

export interface SeoShell {
  path: string
  title: string
  description: string
  canonicalUrl: string
  ogImage: string
  keywords?: string
}

const DEFAULT_HOME: PageMeta = {
  title: `${SITE_NAME} | Australian Migration Experts`,
  metaDescription: DEFAULT_SITE_DESCRIPTION,
  primaryKeyword: "Australian migration agents",
}

/** Resolve static SEO for a public path (no leading slash). Used by prerender + client fallbacks. */
export function resolveSeoForPath(path: string): SeoShell {
  const clean = path.replace(/^\/+|\/+$/g, "")

  if (!clean) {
    const meta = PAGE_META.home ?? DEFAULT_HOME
    return {
      path: "",
      title: meta.title,
      description: meta.metaDescription,
      canonicalUrl: absoluteUrl(""),
      ogImage: DEFAULT_OG_IMAGE,
      keywords: meta.primaryKeyword,
    }
  }

  if (clean.startsWith("blog/")) {
    const slug = clean.slice("blog/".length)
    const post = BLOG_POSTS.find((p) => p.id === slug)
    if (post) {
      return {
        path: clean,
        title: post.title.replace(/^\[DRAFT\]\s*/, ""),
        description: post.standfirst,
        canonicalUrl: absoluteUrl(clean),
        ogImage: DEFAULT_OG_IMAGE,
      }
    }
  }

  const routeKey = LEGACY_ROUTE_REDIRECTS[clean] ?? clean
  const meta = PAGE_META[routeKey] ?? PAGE_META[clean]

  if (meta) {
    return {
      path: clean,
      title: meta.title,
      description: meta.metaDescription,
      // Always self-referencing for the URL being served (social scrapers + crawlers).
      canonicalUrl: absoluteUrl(clean),
      ogImage: DEFAULT_OG_IMAGE,
      keywords: meta.primaryKeyword,
    }
  }

  return {
    path: clean,
    title: DEFAULT_HOME.title,
    description: DEFAULT_HOME.metaDescription,
    canonicalUrl: absoluteUrl(clean),
    ogImage: DEFAULT_OG_IMAGE,
    keywords: DEFAULT_HOME.primaryKeyword,
  }
}

/** Every path that should get a build-time HTML shell with correct head tags. */
export function getPrerenderPaths(): string[] {
  const paths = new Set<string>(getPublicSitemapPaths())
  for (const key of Object.keys(PAGE_META)) {
    paths.add(key === "home" ? "" : key)
  }
  for (const from of Object.keys(LEGACY_ROUTE_REDIRECTS)) {
    paths.add(from)
  }
  paths.add("contact")
  paths.add("privacy")
  paths.add("terms")
  paths.add("accessibility")
  return [...paths]
}

export function escapeHtmlAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
}

/** Inject/replace title, description, canonical, and Open Graph tags in an HTML document shell. */
export function applySeoShellToHtml(html: string, seo: SeoShell): string {
  const title = escapeHtmlAttr(seo.title)
  const description = escapeHtmlAttr(seo.description)
  const url = escapeHtmlAttr(seo.canonicalUrl)
  const image = escapeHtmlAttr(seo.ogImage)
  const keywords = seo.keywords ? escapeHtmlAttr(seo.keywords) : ""

  let out = html

  if (/<title>[^<]*<\/title>/i.test(out)) {
    out = out.replace(/<title>[^<]*<\/title>/i, `<title>${title}</title>`)
  } else {
    out = out.replace(/<\/head>/i, `    <title>${title}</title>\n  </head>`)
  }

  out = upsertMeta(out, "name", "description", description)
  if (keywords) out = upsertMeta(out, "name", "keywords", keywords)

  out = upsertLink(out, "canonical", url)

  out = upsertMeta(out, "property", "og:title", title)
  out = upsertMeta(out, "property", "og:description", description)
  out = upsertMeta(out, "property", "og:url", url)
  out = upsertMeta(out, "property", "og:type", "website")
  out = upsertMeta(out, "property", "og:site_name", escapeHtmlAttr(SITE_NAME))
  out = upsertMeta(out, "property", "og:image", image)
  out = upsertMeta(out, "property", "og:locale", "en_AU")

  out = upsertMeta(out, "name", "twitter:card", "summary_large_image")
  out = upsertMeta(out, "name", "twitter:title", title)
  out = upsertMeta(out, "name", "twitter:description", description)
  out = upsertMeta(out, "name", "twitter:image", image)

  return out
}

function upsertMeta(html: string, attr: "name" | "property", key: string, content: string): string {
  const re = new RegExp(`<meta\\s+${attr}=["']${escapeRegExp(key)}["'][^>]*>`, "i")
  const tag = `<meta ${attr}="${key}" content="${content}">`
  if (re.test(html)) return html.replace(re, tag)
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`)
}

function upsertLink(html: string, rel: string, href: string): string {
  const re = new RegExp(`<link\\s+rel=["']${escapeRegExp(rel)}["'][^>]*>`, "i")
  const tag = `<link rel="${rel}" href="${href}">`
  if (re.test(html)) return html.replace(re, tag)
  return html.replace(/<\/head>/i, `    ${tag}\n  </head>`)
}

function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

export { SITE_URL }
