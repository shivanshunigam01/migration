import { getApiBaseUrl } from "@/lib/apiBase"
import type { FaqCollection } from "@/lib/contentApi"
import { faqPageKeys } from "@/lib/faqKeys"

export type CmsFaqMap = Record<string, { question: string; answer: string }[]>

export async function getFaqs(pageKey: string): Promise<FaqCollection | null> {
  for (const key of faqPageKeys(pageKey)) {
    try {
      const res = await fetch(`${getApiBaseUrl()}/public/faqs/${encodeURIComponent(key)}`, {
        next: { tags: ["faqs", `faqs:${key}`], revalidate: 300 },
      })
      if (!res.ok) continue
      const json = await res.json().catch(() => ({}))
      const col = json?.data as FaqCollection | undefined
      if (col?.published === false) continue
      if (col?.items?.length) return col
    } catch {
      /* try next alias */
    }
  }
  return null
}

export function cmsFaqsToMap(pageKey: string, col: FaqCollection | null): CmsFaqMap {
  if (!col?.items?.length) return {}
  const items = col.items.map((item) => ({
    question: item.q,
    answer: item.a,
  }))
  const map: CmsFaqMap = {}
  for (const key of faqPageKeys(pageKey)) {
    map[key] = items
  }
  return map
}
