"use client"

import { notFound } from "next/navigation"
import { getRegistryPage } from "@/next/pageRegistry"
import { RouteKeyProvider } from "@/components/page/RouteKeyContext"
import { CmsFaqProvider } from "@/context/CmsFaqContext"
import type { CmsFaqMap } from "@/lib/faqs"

/** Resolves and renders a registered marketing page by path (client boundary). */
export function PageRenderer({ path, cmsFaqs = {} }: { path: string; cmsFaqs?: CmsFaqMap }) {
  const Page = getRegistryPage(path)
  if (!Page) notFound()
  const routeKey = path.replace(/^\/+|\/+$/g, "") || "home"
  return (
    <CmsFaqProvider faqs={cmsFaqs}>
      <RouteKeyProvider routeKey={routeKey}>
        <Page />
      </RouteKeyProvider>
    </CmsFaqProvider>
  )
}
