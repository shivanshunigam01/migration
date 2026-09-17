import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"
import { getPublicSitemapPaths } from "@/data/publicPaths"
import { isKnownPublicPath } from "@/lib/isKnownPublicPath"
import { SITE_NAME, SITE_URL } from "@/data/site"
import { cmsFaqsToMap, getFaqs } from "@/lib/faqs"

type Props = { params: Promise<{ slug?: string[] }> }

/** Only known marketing paths; everything else is a real HTTP 404. */
export const dynamicParams = false
/** Serve from CDN for 5 minutes; rebuild in background after. */
export const revalidate = 300

export function generateStaticParams() {
  const paths: { slug?: string[] }[] = [{ slug: undefined }]

  for (const p of getPublicSitemapPaths()) {
    if (!p || p.startsWith("blog/") || p.startsWith("news/")) continue
    paths.push({ slug: p.split("/").filter(Boolean) })
  }

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

function slugToPath(slug?: string[]): string {
  return slug?.join("/") ?? ""
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const path = slugToPath((await params).slug)
  if (path === "") return buildPageMetadata("home")
  if (!isKnownPublicPath(path)) {
    return {
      title: `Page not found | ${SITE_NAME}`,
      robots: { index: false, follow: false },
    }
  }
  const routeKey = pathnameToRouteKey(`/${path}`) || path
  return buildPageMetadata(routeKey)
}

export default async function MarketingPage({ params }: Props) {
  const path = slugToPath((await params).slug)

  if (path === "") {
    const faqs = await getFaqs("homepage")
    const cmsFaqs = cmsFaqsToMap("homepage", faqs)
    return (
      <>
        <link rel="canonical" href={`${SITE_URL}/`} />
        <PageRenderer path="" cmsFaqs={cmsFaqs} />
      </>
    )
  }

  if (!isKnownPublicPath(path)) notFound()
  const routeKey = pathnameToRouteKey(`/${path}`) || path
  const faqs = await getFaqs(routeKey)
  const cmsFaqs = cmsFaqsToMap(routeKey, faqs)
  return <PageRenderer path={path} cmsFaqs={cmsFaqs} />
}
