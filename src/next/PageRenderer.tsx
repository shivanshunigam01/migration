"use client"

import { notFound } from "next/navigation"
import { getRegistryPage } from "@/next/pageRegistry"
import { RouteKeyProvider } from "@/components/page/RouteKeyContext"

/** Resolves and renders a registered marketing page by path (client boundary). */
export function PageRenderer({ path }: { path: string }) {
  const Page = getRegistryPage(path)
  if (!Page) notFound()
  const routeKey = path.replace(/^\/+|\/+$/g, "") || "home"
  return (
    <RouteKeyProvider routeKey={routeKey}>
      <Page />
    </RouteKeyProvider>
  )
}
