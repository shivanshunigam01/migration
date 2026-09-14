import { INTERNAL_BODY_LINKS } from "@/data/internalLinks"
import { useRouteKey } from "@/components/page/RouteKeyContext"
import { NAVY, GOLD } from "@/theme"

/** Always-visible SSR internal links for the current route (audit item 05). */
export function RelatedGuides({ routeKey }: { routeKey?: string | null }) {
  const ctx = useRouteKey()
  const key = routeKey || ctx
  if (!key) return null
  const links = INTERNAL_BODY_LINKS[key]
  if (!links?.length) return null

  return (
    <nav
      aria-label="Related guides"
      style={{
        margin: "28px 0 8px",
        padding: "16px 18px",
        borderRadius: 12,
        border: "1px solid #e8edf5",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          color: GOLD,
          marginBottom: 10,
        }}
      >
        Related guides
      </div>
      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: "8px 14px" }}>
        {links.map((l) => (
          <li key={l.to}>
            <a
              href={`/${l.to}`}
              style={{ color: NAVY, fontSize: 14, fontWeight: 600, textDecoration: "underline", textUnderlineOffset: 3 }}
            >
              {l.anchor}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
