import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"
import { getPublicSitemapPaths } from "@/data/publicPaths"
import { isKnownPublicPath } from "@/lib/isKnownPublicPath"
import { SITE_NAME } from "@/data/site"

type Props = { params: Promise<{ slug: string[] }> }

/** Only known marketing paths; everything else is a real HTTP 404. */
export const dynamicParams = false

export function generateStaticParams() {
  const paths = getPublicSitemapPaths()
    .filter((p) => p && !p.startsWith("blog/") && !p.startsWith("news/"))
    .map((p) => ({ slug: p.split("/").filter(Boolean) }))

  // Ensure nested tool URLs are statically known once registered
  const toolSlugs = [
    "points-calculator",
    "occupation-search",
    "residence-calculator",
    "english-score-converter",
    "visa-pathway-comparison",
  ]
  for (const t of toolSlugs) {
    paths.push({ slug: ["tools", t] })
  }

  return paths
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const path = slug.join("/")
  if (!isKnownPublicPath(path)) {
    return {
      title: `Page not found | ${SITE_NAME}`,
      robots: { index: false, follow: false },
    }
  }
  const routeKey = pathnameToRouteKey(`/${path}`) || path
  return buildPageMetadata(routeKey)
}

export default async function CatchAllPage({ params }: Props) {
  const { slug } = await params
  const path = slug.join("/")
  if (!isKnownPublicPath(path)) notFound()
  return <PageRenderer path={path} />
}
