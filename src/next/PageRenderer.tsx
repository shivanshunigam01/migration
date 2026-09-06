"use client"

import { notFound } from "next/navigation"
import { getRegistryPage } from "@/next/pageRegistry"

/** Resolves and renders a registered marketing page by path (client boundary). */
export function PageRenderer({ path }: { path: string }) {
  const Page = getRegistryPage(path)
  if (!Page) notFound()
  return <Page />
}
