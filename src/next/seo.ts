import type { Metadata } from "next"
import { buildPageMetadata } from "@/lib/metadata"

/** Back-compat re-export — prefer `@/lib/metadata`. */
export { buildPageMetadata } from "@/lib/metadata"

export async function seoForRoute(routeKey: string): Promise<Metadata> {
  return buildPageMetadata(routeKey)
}
