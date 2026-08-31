import { DEFAULT_OG_IMAGE, SITE_NAME, SITE_URL } from "@/data/site"

export interface SeoTagsInput {
  title: string
  description: string
  keywords?: string
  canonicalUrl?: string
  ogImage?: string
  ogType?: "website" | "article"
}

function setMetaTag(name: string, content: string, attr: "name" | "property" = "name") {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement("meta")
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute("content", content)
}

function setLinkTag(rel: string, href: string) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", rel)
    document.head.appendChild(el)
  }
  el.setAttribute("href", href)
}

/** Apply document title, description, canonical, Open Graph, and Twitter tags. */
export function applySeoTags(input: SeoTagsInput) {
  const canonicalUrl = input.canonicalUrl ?? SITE_URL
  const ogImage = input.ogImage ?? DEFAULT_OG_IMAGE
  const ogType = input.ogType ?? "website"

  document.title = input.title
  setMetaTag("description", input.description)
  if (input.keywords) setMetaTag("keywords", input.keywords)

  setLinkTag("canonical", canonicalUrl)

  setMetaTag("og:title", input.title, "property")
  setMetaTag("og:description", input.description, "property")
  setMetaTag("og:url", canonicalUrl, "property")
  setMetaTag("og:type", ogType, "property")
  setMetaTag("og:site_name", SITE_NAME, "property")
  setMetaTag("og:image", ogImage, "property")
  setMetaTag("og:locale", "en_AU", "property")

  setMetaTag("twitter:card", "summary_large_image")
  setMetaTag("twitter:title", input.title)
  setMetaTag("twitter:description", input.description)
  setMetaTag("twitter:image", ogImage)
}
