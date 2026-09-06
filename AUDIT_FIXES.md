# SEO & Technical Audit Fixes

Tracker for the master crawlability / SEO audit on the public Next.js site (`migration`) and related draft-safety on `nanak-migration-backend`.

| ID | Issue | Severity | Status | Implementation |
|----|-------|----------|--------|----------------|
| A01 | SPA empty `#root` shell (not crawlable) | Critical | Done | Next.js 15 App Router SSR (`app/`, catch-all + blog/news routes) |
| A02 | CSR bailout empties body HTML (`useSearchParams`) | Critical | Done | Removed from global `useLocation` shim; verified SSR HTML with H1/links |
| A03 | Missing `/book` → `/book-consultation` 301 | High | Done | `legacyRedirects.ts` + `next.config.ts` redirects |
| A04 | `/labour-agreement` → `/labour-agreements` 301 | High | Done | `legacyRedirects.ts` |
| A05 | Sitemap includes 301 redirect sources | High | Done | `publicPaths.ts` / `routeRegistry.ts` exclude `REDIRECT_SOURCES` |
| A06 | Draft blogs leak via API fallback | Critical | Done | BE `blog.service.js` `listPublished` — no draft fallback |
| A07 | Draft blogs leak via static `[DRAFT]` stubs | Critical | Done | `contentApi` filters; Blog listing/post never fall back to drafts |
| A08 | Soft 404 on missing blog/news (200 + UI) | High | Done | Server `notFound()` in `app/blog/[slug]` and `app/news/[slug]`; client mirrors |
| A09 | Draft/missing articles indexed | High | Done | `generateMetadata` returns `robots: noindex` when missing; HTTP 404 on page |
| A10 | No security headers | High | Done | HSTS, XCTO, Referrer-Policy, X-Frame-Options, Permissions-Policy in `next.config.ts` |
| A11 | Missing immutable cache for `/_next/static` | Medium | Done | Cache-Control header in `next.config.ts` |
| A12 | Titles often >60 chars / meta drift | Medium | Done | `fitTitle` / `fitDescription` in `src/lib/metadata.ts` + `buildPageMetadata` |
| A13 | Weak / missing OG defaults | Medium | Done | Root layout OG + article metadata with `DEFAULT_OG_IMAGE` |
| A14 | Missing org JSON-LD | Medium | Done | `organizationJsonLd()` in root `app/layout.tsx` |
| A15 | Canonical / metadata per route incomplete | High | Done | `buildPageMetadata` + blog/news `generateMetadata` with canonical URLs |
| A16 | Sitemap incomplete / not dynamic for CMS | High | Done | `app/sitemap.ts` merges registry paths + published blog/news slugs |
| A17 | Robots.txt missing / weak | Medium | Done | `app/robots.ts` allows `/`, points to sitemap, sets host |
| A18 | Orphan pages / weak internal links | Medium | Done | HTML `/site-map`, footer Sitemap link; blog cards use `<Link>` |
| A19 | Almost no `next/image` | Medium | Partial | `NanakLogo` + PageHero CMS dims; more hero/body swaps optional |
| A20 | Redirect targets still in live CANONICAL list | Medium | Done | Removed live entries for redirected routes (e.g. SAF / employer-obligations) |
| A21 | Vite leftovers / dual tooling confusion | Low | Done | Primary tooling is Next; no active `vite.config` in app root |
| A22 | `poweredByHeader` / fingerprinting | Low | Done | `poweredByHeader: false` |
| A23 | Skip-to-content / basic a11y | Medium | Done | Skip link in root layout |
| A24 | News draft safety (client API) | High | Done | `fetchPublishedNews` / `fetchNewsBySlug` require `status === "published"` |
| A25 | Blog listing empty copy still mentioned drafts | Low | Done | Removed “Draft updates shown…” copy; empty state for unpublished |
| A26 | Env: prefer `NEXT_PUBLIC_API_BASE_URL` | Medium | Done | `getApiBaseUrl()` |
| A27 | Route registry single source of truth | Medium | Done | `src/lib/routeRegistry.ts` + sitemap path helpers |

## Verify after deploy

1. View source on a visa page — H1 and nav links present in initial HTML (not empty shell).
2. `GET /book` → 301 → `/book-consultation`.
3. Draft blog slug → **404** (not soft 200).
4. `/sitemap.xml` — no redirect-source URLs; only published blog/news.
5. Response headers include HSTS / XCTO / Referrer-Policy.
6. Redeploy order: **backend → admin → migration**.

## Notes

- Design/visual language preserved; changes are SEO/technical.
- Push public site as Shivanshu (`migration`); backend draft fix as Puneet.
- Remaining optional: more `next/image` coverage on decorative/content images; trim long strings in `PAGE_META` at source (runtime `fitTitle` already caps SERP length).
