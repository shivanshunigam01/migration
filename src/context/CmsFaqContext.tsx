"use client"

import { createContext, useContext } from "react"
import type { CmsFaqMap } from "@/lib/faqs"
import { faqPageKeys } from "@/lib/faqKeys"
import type { FaqItem } from "@/components/page/FaqAccordion"

const CmsFaqContext = createContext<CmsFaqMap>({})

export function CmsFaqProvider({ faqs, children }: { faqs: CmsFaqMap; children: React.ReactNode }) {
  return <CmsFaqContext.Provider value={faqs}>{children}</CmsFaqContext.Provider>
}

export function useCmsFaqsFromContext(pageKey: string): FaqItem[] | null {
  const map = useContext(CmsFaqContext)
  for (const key of faqPageKeys(pageKey)) {
    const rows = map[key]
    if (rows?.length) {
      return rows.map((r) => ({ question: r.question, answer: r.answer }))
    }
  }
  return null
}
