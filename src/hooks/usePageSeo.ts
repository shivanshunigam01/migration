import { useEffect, useState } from "react"
import { PAGE_META, type PageMeta } from "@/data/pageMeta"
import { fetchSeoByRouteKey } from "@/lib/contentApi"

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

function setCanonical(url: string) {
  if (!url) return
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null
  if (!el) {
    el = document.createElement("link")
    el.setAttribute("rel", "canonical")
    document.head.appendChild(el)
  }
  el.setAttribute("href", url)
}

/** Apply SEO meta from CMS with static fallback. */
export function usePageSeo(routeKey: string, fallback?: PageMeta) {
  const staticMeta = fallback ?? PAGE_META[routeKey]
  const [meta, setMeta] = useState<PageMeta | null>(staticMeta ?? null)

  useEffect(() => {
    let cancelled = false
    fetchSeoByRouteKey(routeKey).then((remote) => {
      if (cancelled) return
      if (remote?.title) {
        setMeta({
          title: remote.title,
          metaDescription: remote.metaDescription,
          primaryKeyword: remote.primaryKeyword,
        })
      } else if (staticMeta) {
        setMeta(staticMeta)
      }
    })
    return () => {
      cancelled = true
    }
  }, [routeKey])

  useEffect(() => {
    if (!meta) return
    document.title = meta.title
    setMetaTag("description", meta.metaDescription)
    if (meta.primaryKeyword) setMetaTag("keywords", meta.primaryKeyword)
  }, [meta])

  return meta
}

/** Blog/article SEO with post-level overrides. */
export function useArticleSeo(opts: {
  title: string
  description: string
  canonicalUrl?: string
  ogImage?: string
}) {
  useEffect(() => {
    document.title = opts.title
    setMetaTag("description", opts.description)
    setMetaTag("og:title", opts.title, "property")
    setMetaTag("og:description", opts.description, "property")
    if (opts.ogImage) setMetaTag("og:image", opts.ogImage, "property")
    if (opts.canonicalUrl) setCanonical(opts.canonicalUrl)
  }, [opts.title, opts.description, opts.canonicalUrl, opts.ogImage])
}
