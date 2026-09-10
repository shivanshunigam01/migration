# SEO & Technical Audit Fixes

Tracker for Nanak_Migration_SEO_Audit_9Sep2026 (Meta restore / Punch list / Page audit).

| ID | Issue | Status | Implementation |
|----|-------|--------|----------------|
| Meta restore (41) | Approved titles overwritten by Sync | Done | `pageMeta.ts` restored; backend `healStaleSyncedTitles` + Restore SEO button; sync is seed-missing only |
| 01 | Soft-200 unknown URLs | Done | `dynamicParams=false` + `isKnownPublicPath` (tools allowlist) + server `not-found` |
| 02 | Sync wipes SEO | Done | `syncSeo` insert-missing only; `restoreSeoFromDefaults`; admin Restore SEO |
| 03 | Title/desc ellipsis truncation | Done | `fitTitle`/`fitDescription` no longer truncate |
| 04 | Blog body not SSR | Done | `initialPost` from server `app/blog/[slug]` into client |
| 05 | Zero in-body internal links | Done | AnswerBox joins whitespace text nodes; LinkedProse emits plain `<a href>` |
| 06 | BlogPosting schema missing | Done | Server JSON-LD BlogPosting + BreadcrumbList on blog slug |
| 07 | Blog not-found HTTP 200 | Done | `notFound()` in generateMetadata + page; `generateStaticParams` |
| 08 | Missing schema on 494/about/tools/book/pre-assessment | Done | StructuredData added |
| 09 | Thin /pre-assessment H1 | Done | H1 present; schema added |
| 10 | Homepage image missing alt | Done | Kangaroo alt text |
| 11 | Homepage canonical slash | Done | Trailing slash on home canonical + WebSite JSON-LD |
| 12 | Sitemap cache lag | Info | Intentional `revalidate: 300` — no change |
| 13 | Heavy HTML | Info | Deferred |
| 14 | twitter:site | Blocked | Awaiting business X handle |

## Post-deploy

1. Deploy **backend → admin → migration**.
2. Backend auto-heals stale synced titles on first SEO read; or click **Restore SEO** in Runway.
3. Verify: unknown URL → HTTP 404; blog slug view-source has article body + BlogPosting; titles have no `…`; `/494-visa` has FAQPage schema.
