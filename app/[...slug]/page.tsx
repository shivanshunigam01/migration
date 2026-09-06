import type { Metadata } from "next"
import { buildPageMetadata } from "@/next/seo"
import { PageRenderer } from "@/next/PageRenderer"
import { pathnameToRouteKey } from "@/lib/pathnameToRouteKey"
import { CANONICAL_ROUTES } from "@/data/routes"

type Props = { params: Promise<{ slug: string[] }> }

const EXTRA_PATHS = [
  "contact",
  "privacy",
  "terms",
  "accessibility",
  "about",
  "book",
  "book-consultation",
  "pre-assessment",
  "visitor-visa",
  "parent-visa",
  "visitor-hub",
]

export function generateStaticParams() {
  const paths = new Set<string>([
    ...CANONICAL_ROUTES.map((r) => r.path),
    ...EXTRA_PATHS,
  ])
  return [...paths].map((p) => ({ slug: p.split("/").filter(Boolean) }))
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
