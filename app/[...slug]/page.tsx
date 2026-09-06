import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"
import { getPublicSitemapPaths } from "@/data/publicPaths"

type Props = { params: Promise<{ slug: string[] }> }

export function generateStaticParams() {
  return getPublicSitemapPaths()
    .filter((p) => p && !p.startsWith("blog/") && !p.startsWith("news/"))
    .map((p) => ({ slug: p.split("/").filter(Boolean) }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const path = slug.join("/")
  const routeKey = pathnameToRouteKey(`/${path}`) || path
  return buildPageMetadata(routeKey)
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params
  return <PageRenderer path={slug.join("/")} />
}
