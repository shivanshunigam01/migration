# SEO & Technical Audit Fixes

Tracker for Round 1 (9 Sep) + Round 2 (12 Sep) workbooks.

## Round 2 — Dev items (12 Sep)

| ID | Issue | Status | Implementation |
|----|-------|--------|----------------|
| N1 | `/tools` + `/tools/*` identical SSR HTML | Done | Unique H1, intro, bullets per tool deep-link via `toolId` |
| 05 | Zero in-body internal links | Done | `RelatedGuides` in AnswerBox + SiteFooter; AnswerBox auto routeKey; shield opacity kept at 1 for crawlers. Runway body remains plain text (no HTML anchors) — editors use RelatedGuides / AnswerBox linkify |
| N2 | Admin crawlable | Done | `public/robots.txt` Disallow all; meta robots noindex; API `X-Robots-Tag` |
| 07 | Blog not-found HTTP 200 | Done | `dynamicParams=false`; require `status === "published"` |
| 09 | `/pre-assessment` no H1 | Done | Removed `useSearchParams` (SSR blank); H1 “Free visa pre-assessment”; FAQ/Breadcrumb schema |
| N3 | Admin security headers | Done | Helmet frameguard/nosniff/referrer on API; vite preview headers + hosting note |
| 11 | Home canonical vs sitemap slash | Done | Home canonical forced with trailing `/` |
| N4 | Public SEO exposes keywords | Done | `toPublicSeo` strips primaryKeyword/keywords; Cache-Control on public SEO |
| N5 | Homepage Cache-Control no-store | Done | `s-maxage=60, stale-while-revalidate=300` on `/` |
| 02b | Descriptions/keywords not restored | Done | Heal when titles OK but desc/kw mismatch defaults; Restore toast clarifies all SEO fields |

## Nanak-owned (no code)

| ID | Notes |
|----|-------|
| N6 | Title/desc length rewrites in Runway |
| 14 | twitter:site awaiting X handle |
| N7 | Delete orphan draft blog shells |

## Round 1 scorecard (carried)

| ID | Status |
|----|--------|
| 01 soft 404 | Done |
| 03 Truncation | Done |
| 04 Blog SSR | Done |
| 06 Blog schema | Done |
| 08 Money-page schema | Done |
| 10 Homepage alt | Done |
| 12 Sitemap cache | N/A |
| 13 Page weight | Deferred |

## Post-deploy

1. Deploy **backend → admin → migration**.
2. Click **Restore SEO** in Runway (or wait for auto-heal on SEO read) so descriptions/keywords match code defaults.
3. On admin host CDN, set `X-Robots-Tag: noindex, nofollow` + security headers if not already at the edge.
4. Verify: `/blog/zz-not-a-post` → HTTP 404; `/tools/points-calculator` H1 = Points Calculator; `/pre-assessment` has H1 in view-source; admin `/robots.txt` = Disallow.
