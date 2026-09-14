"use client"

import { useEffect, useRef, useState } from "react"
import { useRouteKey } from "@/components/page/RouteKeyContext"
import type { FaqItem } from "@/components/page/FaqAccordion"
import { fetchFaqByPageKey } from "@/lib/contentApi"

/** Alias CMS keys so homepage works as both `home` (SEO) and `homepage` (legacy FAQ). */
export function faqPageKeys(routeKey: string): string[] {
  const key = routeKey.replace(/^\/+|\/+$/g, "").toLowerCase() || "home"
  if (key === "home" || key === "homepage") return ["homepage", "home"]
  return [key]
}

type CmsFaq = { q: string; a: string }

const cache = new Map<string, Promise<CmsFaq[] | null>>()

async function loadCmsFaqs(routeKey: string): Promise<CmsFaq[] | null> {
  const keys = faqPageKeys(routeKey)
  const cacheKey = keys.join("|")
  if (!cache.has(cacheKey)) {
    cache.set(
      cacheKey,
      (async () => {
        for (const key of keys) {
          try {
            const col = await fetchFaqByPageKey(key)
            if (col?.items?.length) {
              return col.items.map((item) => ({ q: item.q, a: item.a }))
            }
          } catch {
            /* try next alias */
          }
        }
        return null
      })()
    )
  }
  return cache.get(cacheKey)!
}

function normalizeFallback(items: FaqItem[]): FaqItem[] {
  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }))
}

function toFaqItems(rows: CmsFaq[]): FaqItem[] {
  return rows.map((r) => ({ question: r.q, answer: r.a }))
}

/**
 * Resolve FAQs for the current page: CMS collection by routeKey when published,
 * otherwise the hardcoded fallback from the page component.
 */
export function usePageFaqs(fallback: FaqItem[], pageKey?: string | null): FaqItem[] {
  const ctxKey = useRouteKey()
  const key = (pageKey || ctxKey || "").trim()
  const fallbackRef = useRef(fallback)
  fallbackRef.current = fallback
  const [items, setItems] = useState<FaqItem[]>(() => normalizeFallback(fallback))

  useEffect(() => {
    setItems(normalizeFallback(fallbackRef.current))
    if (!key) return
    let cancelled = false
    loadCmsFaqs(key).then((cms) => {
      if (cancelled || !cms?.length) return
      setItems(toFaqItems(cms))
    })
    return () => {
      cancelled = true
    }
  }, [key])

  return items
}

/** Same as usePageFaqs but returns `{q,a}` for homepage-style accordions. */
export function usePageFaqQa(
  fallback: Array<{ q: string; a: string }>,
  pageKey?: string | null
): Array<{ q: string; a: string }> {
  const asItems = fallback.map((f) => ({ question: f.q, answer: f.a }))
  const items = usePageFaqs(asItems, pageKey)
  return items.map((item) => ({
    q: item.question,
    a: typeof item.answer === "string" ? item.answer : String(item.answer ?? ""),
  }))
}
