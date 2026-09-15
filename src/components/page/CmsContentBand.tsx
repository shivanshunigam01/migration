import { NAVY } from "@/theme"
import { useCmsPage } from "@/components/page/CmsPageProvider"
import { cmsBodyLooksLikeHtml, sanitizeCmsHtml } from "@/lib/sanitizeCmsHtml"

/**
 * Renders CMS H1/body/image for pages that don't use PageHero (e.g. custom heroes).
 * Returns null when the CMS has no overrides for the current route.
 * Body supports safe HTML anchors so Runway "Intro / body copy" can hold in-body links.
 */
export function CmsContentBand({ compact = false }: { compact?: boolean }) {
  const cms = useCmsPage()
  if (!cms) return null
  const h1 = cms.h1?.trim()
  const body = cms.body?.trim()
  const image = cms.heroImage?.trim()
  if (!h1 && !body && !image) return null

  const bodyIsHtml = !!(body && cmsBodyLooksLikeHtml(body))

  return (
    <section
      style={{
        background: "#fff",
        borderBottom: "1px solid #e8eaf0",
        padding: compact ? "28px 24px" : "40px 24px",
      }}
    >
      <div style={{ maxWidth: 860, margin: "0 auto" }}>
        {h1 ? (
          <h2
            style={{
              margin: "0 0 12px",
              fontFamily: "'Gilroy', sans-serif",
              fontSize: compact ? 26 : 30,
              fontWeight: 700,
              color: NAVY,
              letterSpacing: "-0.02em",
            }}
          >
            {h1}
          </h2>
        ) : null}
        {body ? (
          bodyIsHtml ? (
            <div
              style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3f4b5f" }}
              dangerouslySetInnerHTML={{ __html: sanitizeCmsHtml(body) }}
            />
          ) : (
            <p style={{ margin: 0, fontSize: 17, lineHeight: 1.7, color: "#3f4b5f", whiteSpace: "pre-wrap" }}>
              {body}
            </p>
          )
        ) : null}
        {image ? (
          <img
            src={image}
            alt=""
            loading="lazy"
            decoding="async"
            style={{ marginTop: 20, width: "100%", maxWidth: 720, borderRadius: 12, border: "1px solid #e8eaf0" }}
          />
        ) : null}
      </div>
    </section>
  )
}
