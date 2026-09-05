import React from "react"
import { Link } from "react-router-dom"
import { INTERNAL_BODY_LINKS, type BodyLink } from "@/data/internalLinks"
import { GOLD } from "@/theme"

const LINK_STYLE: React.CSSProperties = {
  color: GOLD,
  fontWeight: 700,
  textDecoration: "underline",
  textUnderlineOffset: 3,
  textDecorationThickness: 1.5,
}

/** Escape regex special chars in anchor phrases. */
function escapeRegExp(value: string): string {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
}

/**
 * Wrap the first occurrence of each configured anchor with a crawlable <Link>.
 * Longer anchors are applied first so nested phrases do not collide.
 */
export function linkifyText(text: string, links: BodyLink[]): React.ReactNode {
  if (!text || links.length === 0) return text

  const sorted = [...links].sort((a, b) => b.anchor.length - a.anchor.length)
  type Seg = { type: "text"; value: string } | { type: "link"; value: string; to: string }
  let segments: Seg[] = [{ type: "text", value: text }]

  for (const link of sorted) {
    const next: Seg[] = []
    let used = false
    for (const seg of segments) {
      if (seg.type === "link" || used) {
        next.push(seg)
        continue
      }
      const idx = seg.value.indexOf(link.anchor)
      if (idx === -1) {
        next.push(seg)
        continue
      }
      used = true
      if (idx > 0) next.push({ type: "text", value: seg.value.slice(0, idx) })
      next.push({ type: "link", value: link.anchor, to: `/${link.to}` })
      const rest = seg.value.slice(idx + link.anchor.length)
      if (rest) next.push({ type: "text", value: rest })
    }
    segments = next
  }

  return segments.map((seg, i) =>
    seg.type === "link" ? (
      <Link key={`${seg.to}-${i}`} to={seg.to} style={LINK_STYLE}>
        {seg.value}
      </Link>
    ) : (
      <React.Fragment key={`t-${i}`}>{seg.value}</React.Fragment>
    ),
  )
}

/** Linkify a string using the page's internal-linking-spec map. */
export function LinkedProse({
  routeKey,
  children,
}: {
  routeKey: string
  children: string
}) {
  return <>{linkifyText(children, INTERNAL_BODY_LINKS[routeKey] ?? [])}</>
}

/** Re-export for AnswerBox / call sites that need the raw map. */
export { INTERNAL_BODY_LINKS, escapeRegExp }
