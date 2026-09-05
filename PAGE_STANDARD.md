# Page Standard

Standards for building, extending, and auditing pages in this codebase.

---

## 1. Page Archetypes

Every page belongs to one of four archetypes. The archetype determines which sections appear, in what order, and which layout variant PageHero uses.

### Hub

A category landing page. Links out to Flagship pages below it. No deep content.

**Section order:**
1. `<Breadcrumbs>` — path from Home to this hub
2. `<PageHero variant="hub">` — eyebrow, title, deck, up to two CTAs; no right column; no MARA badge required but recommended
3. `<KeyFactsStrip>` — 3–5 top-level statistics about the category (no icons → stat style)
4. `<CardGrid columns={3}>` — cards linking to Flagship pages below; each card gets a `page` prop and accent color
5. `<ComplianceDisclaimer>` — mandatory OMARA disclaimer
6. `<CtaBand>` — consult CTA

### Flagship

The primary long-form visa or service page. Highest information density on the site.

**Section order:**
1. `<Breadcrumbs>`
2. `<PageHero variant="flagship" maraBadge>` — two-column layout; left: eyebrow, title, deck, shortAnswer, CTAs; right column: summary widget or interactive tool
3. `<KeyFactsStrip>` — 4–6 facts with icons (icon present → fact style with 20px value)
4. `<SectionHeading>` + `<StepTimeline variant="cards">` — how-to-apply steps
5. `<SectionHeading>` + `<ComparisonTable>` — stream or option comparison
6. `<SectionHeading>` + `<EvidenceChecklist>` — document checklist
7. `<SectionHeading>` + `<CardGrid>` — deep-dive cards (e.g. character, health)
8. `<SectionHeading>` + `<FaqAccordion>` — FAQ
9. `<SectionHeading>` + `<RelatedPages>` — related pages
10. `<ComplianceDisclaimer>`
11. `<CtaBand>`

### Standard

A focused sub-topic page under a Flagship (e.g. skill requirements, cost breakdown).

**Section order:**
1. `<Breadcrumbs>` — 4-item path including the Flagship parent
2. `<PageHero variant="standard" maraBadge>` — single column; eyebrow includes the parent visa code; `currentAsAt` set
3. `<OnThisPageNav>` — sticky left-rail TOC (rendered at page level, not inside a section)
4. `<KeyFactsStrip>` — 3–4 key facts with icons
5. Topical sections in logical order — any mix of `<CardGrid>`, `<ComparisonTable>`, `<EvidenceChecklist>`, `<StepTimeline>`, `<FaqAccordion>`, custom section components
6. `<SectionHeading>` + `<FaqAccordion>` — FAQ (if not already a topical section)
7. `<SectionHeading>` + `<RelatedPages>`
8. `<ComplianceDisclaimer>`
9. `<CtaBand>`

### Support

Short informational or policy page (privacy, accessibility, OMARA statement, how we work).

**Section order:**
1. `<Breadcrumbs>`
2. `<PageHero variant="support">` — short eyebrow, title, deck; no MARA badge required
3. Prose sections using `<SectionHeading>` + semantic HTML (`<p>`, `<ul>`)
4. Optional `<Callout variant="note">` for important policy points
5. `<ComplianceDisclaimer>` — mandatory on all pages
6. `<CtaBand>` — optional; omit if the page is purely informational

---

## 2. OMARA Rules (apply to every page without exception)

These rules are mandatory on every page published under this domain. Violations must be fixed before a page goes live.

### Agent identification
- MARA-registered migration agent **Navpreet Aulakh, MARN 2619467** must be visible in the PageHero (via `maraBadge` prop) on all Flagship and Standard pages.
- Full registration details appear in the footer: company name, agent name, and MARN.

### No outcome guarantees
- Never use the words: **guaranteed**, **100%**, **fast-track**, **certainty**, or any phrase that promises or implies a visa will be granted.
- Never state or imply a specific approval rate, success rate, or processing time as a firm commitment.
- Permitted hedged language: *generally*, *in most cases*, *the Department may require*, *is typically*, *commonly*, *may apply*.

### Government non-affiliation
- Do not display the Commonwealth Coat of Arms, any Australian Government logo, or any visual treatment that implies government affiliation or endorsement.
- No phrasing such as "approved by the Department", "government-approved", or "official".

### No published fees
- Do not publish Department of Home Affairs visa application fees, skills assessment fees, or agent service fees on any content page.
- A `<CostNote>` component may be used to direct users to the DHA website for current fees.

### Disclaimer block
- Every page must include `<ComplianceDisclaimer>` placed immediately before the `<SiteFooter>`.
- The disclaimer must state: general information only; not immigration assistance or legal advice for an individual; requirements change; obtain advice from a registered migration agent.
- A `currentAsAt` prop (e.g. `"July 2026"`) is required. Update this whenever page content is reviewed.

### Currency notice
- Every Flagship and Standard page must include a "Current as at [Month Year]" line — either in the PageHero (`currentAsAt` prop) or inside the ComplianceDisclaimer.
- Occupation lists and legislative instrument references are noted as subject to change.

---

## 3. Shared Page Kit — `src/components/page/`

Import from the barrel:

```ts
import {
  Breadcrumbs, PageHero, OnThisPageNav, KeyFactsStrip,
  SectionHeading, CardGrid, ComparisonTable, StepTimeline,
  EvidenceChecklist, Callout, FaqAccordion, RelatedPages,
  CtaBand, ComplianceDisclaimer, CostNote,
} from './components/page'
```

All prop interfaces are re-exported from the barrel. Every component is strictly typed — no `any`.

**Color tokens** — always import from `src/theme.ts`:

```ts
import { GOLD, NAVY, NAVY_DARK, NAVY_MID, HERO_GRAD, CREAM, GREY_BAND, TEXT } from './theme'
```

Page-level accent colors are defined locally per page (e.g. `const ROSE = '#e11d48'` for partner visa pages, `const GREEN = '#16a34a'` for 186 employer pages). Do not hardcode hex colors that already exist as tokens.

---

## 4. Wiring Checklist

For every new page, complete all items before marking the page ready for review.

- [ ] **Route in `src/App.tsx`** — add `case 'your-route-key':` returning `<YourPage navigate={navigate} />` inside the router switch.
- [ ] **Mega-menu entry in `src/data/navItems.ts`** — add a `NavSubItem` with `{ label, description, route }` under the correct top-level group. Note: `NavSubItem` does **not** have a `route` field in the TypeScript type; routing for sub-items is handled by `resolveNavClick` in `SiteHeader.tsx` which matches on `label`. Add the route mapping there if needed.
- [ ] **Footer link in `src/components/SiteFooter.tsx`** — add `{ label, href: '#', route: 'your-route-key' }` under the relevant footer group.
- [ ] **`maraBadge` on PageHero** — required for all Flagship and Standard pages.
- [ ] **`currentAsAt` set** — required for all Flagship and Standard pages; update when content is reviewed.
- [ ] **`<ComplianceDisclaimer>`** — present on every page, placed before `<SiteFooter>`.
- [ ] **`tsc --noEmit` passes** — no TypeScript errors.
- [ ] **All existing routes still render** — smoke-test the router after adding new cases.

---

## 5. Canonical Route List

The following 30 routes are the SEO-canonical URLs. Use these exact slugs everywhere — in `App.tsx`, `SiteHeader.tsx` `resolveNavClick`, `SiteFooter.tsx` route properties, `RelatedPages`, `CtaBand`, breadcrumbs, and any internal `navigate()` call.

| Route slug | Page title | Category |
|---|---|---|
| `employer-sponsored-visas` | Employer Sponsored Visas | Employer Sponsored |
| `employer-nomination-scheme` | Employer Nomination Scheme (186) | Employer Sponsored |
| `186-skill-requirements` | 186 Skill Requirements | Employer Sponsored |
| `186-occupations-list` | 186 Occupations List | Employer Sponsored |
| `skills-in-demand-visa` | Skills in Demand (482) Visa | Employer Sponsored |
| `482-to-pr-pathway` | 482 to PR Pathway | Employer Sponsored |
| `standard-business-sponsorship` | Standard Business Sponsorship | Employer Sponsored |
| `core-skills-occupation-list` | Core Skills Occupation List (CSOL) | Employer Sponsored |
| `skilled-migration` | Skilled Migration | Skilled |
| `skilled-independent-189` | Skilled Independent (189) | Skilled |
| `skilled-nominated-190` | Skilled Nominated (190) | Skilled |
| `skilled-work-regional-491` | Skilled Work Regional (491) | Skilled |
| `temporary-graduate-485` | Temporary Graduate (485) | Skilled |
| `points-test` | Points Test Explained | Skilled |
| `skills-assessment` | Skills Assessment | Skilled |
| `state-nomination` | State Nomination Requirements | Skilled |
| `english-requirements` | English Requirements | Skilled |
| `student-visas` | Student Visas | Student |
| `student-visa-500` | Student Visa (500) | Student |
| `genuine-student-requirement` | Genuine Student Requirement | Student |
| `student-to-pr-pathway` | Student to PR Pathway | Student |
| `partner-family-visas` | Partner & Family Visas | Partner & Family |
| `partner-visa-820-801` | Partner Visa Onshore (820/801) | Partner & Family |
| `partner-visa-309-100` | Partner Visa Offshore (309/100) | Partner & Family |
| `prospective-marriage-300` | Prospective Marriage (300) | Partner & Family |
| `partner-visa-evidence` | Partner Visa Evidence Guide | Partner & Family |
| `bridging-visas` | Bridging Visas Explained | Visitor & Other |
| `australian-citizenship` | Australian Citizenship | Visitor & Other |
| `visa-refusal-review` | Visa Refusal & Review | Reviews |
| `art-review` | ART Review | Reviews |
| `resources` | Resources — Guides, Blogs & Checklists | Practice |

---

## 6. Legacy Route Redirects

Eleven routes were renamed in August 2026 to match the canonical SEO URL plan. The old slugs are captured in `LEGACY_ROUTE_REDIRECTS` (exported from `src/App.tsx`) and are transparently redirected inside the client-side router.

**The Next.js implementation must serve these as permanent HTTP 301 redirects** (e.g. in `next.config.js` `redirects()`). Do not serve them as 200 or soft redirects.

| Old slug (legacy) | Canonical slug |
|---|---|
| `employer-sponsorship` | `employer-sponsored-visas` |
| `enomination-186` | `employer-nomination-scheme` |
| `skills-482` | `skills-in-demand-visa` |
| `sbs` | `standard-business-sponsorship` |
| `skilled-189` | `skilled-independent-189` |
| `graduate-485` | `temporary-graduate-485` |
| `student-500` | `student-visa-500` |
| `student-to-pr` | `student-to-pr-pathway` |
| `partner-family` | `partner-family-visas` |
| `partner-820` | `partner-visa-820-801` |
| `partner-309` | `partner-visa-309-100` |

## 7. Category Accent Tokens

Each of the six top-level nav categories has a single accent colour exported from `src/theme.ts`. Every page in a category reads its accent from the category token — no page should hardcode an accent hex directly.

All tokens pass WCAG AA contrast (≥ 4.5:1) against white (`#ffffff`).

| Category | Token | Hex | Contrast vs white |
|---|---|---|---|
| Employer Sponsored | `CAT_EMPLOYER` | `#0e7490` | 5.35:1 ✓ |
| Skilled Migration | `CAT_SKILLED` | `#4f46e5` | 6.28:1 ✓ |
| Student Visas | `CAT_STUDENT` | `#2563eb` | 5.17:1 ✓ |
| Partner & Family | `CAT_PARTNER` | `#e11d48` | 4.70:1 ✓ |
| Visitor & Other | `CAT_VISITOR` | `#0369a1` | 5.94:1 ✓ |
| Reviews & Complex | `CAT_REVIEWS` | `#dc2626` | 4.83:1 ✓ |

**Usage pattern** — import the token and assign it to a local alias that matches the page's colour role:

```ts
import { CAT_SKILLED } from './theme'
const INDIGO = CAT_SKILLED   // keeps inline-style references readable
```

Or pass the token directly to kit components:

```tsx
<PageHero accent={CAT_EMPLOYER} … />
<CtaBand   accent={CAT_EMPLOYER} … />
```

**Note on `#0891b2` (TEAL):** The original teal `#0891b2` gives only 3.67:1 contrast vs white — it fails WCAG AA for normal-weight text. `CAT_EMPLOYER` uses the darker `#0e7490` instead. Do not reintroduce the lighter teal as a page accent.

## 8. Backlog — Pages Not Yet Built

These items were removed from the navigation in August 2026. They represent planned content expansions. The Next.js team should treat them as future pages, each with the intended canonical URL shown.

Items that were live placeholder entries in the mega-menu ("Guide coming") have been moved here so nothing is lost.

### Employer Sponsored

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Skilled Employer Sponsored Regional | 494 | `/skilled-employer-sponsored-regional` |
| Permanent Residence (Skilled Regional) | 191 | `/skilled-regional-residence-191` |
| Sponsorship Obligations | — | `/sponsorship-obligations` |
| Labour Agreements | — | `/labour-agreements` |
| DAMA | — | `/designated-area-migration-agreements` |
| Caveats on Occupations | — | `/occupation-caveats` |
| SAF Levy | — | `/skilling-australians-fund-levy` |
| Training Visa | 407 | `/training-visa-407` |
| Temporary Work (Short Stay Specialist) | 400 | `/temporary-work-short-stay-400` |
| Temporary Activity | 408 | `/temporary-activity-visa-408` |
| Temporary Work (International Relations) | 403 | `/temporary-work-international-403` |

### Skilled Migration

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Skilled Regional (Residence) | 191 | `/skilled-regional-residence-191` |
| National Innovation Visa | 858 | `/national-innovation-visa-858` |
| SkillSelect and EOI | — | `/skillselect-eoi` |
| Invitation Rounds | — | `/invitation-rounds` |
| Designated Regional Areas | — | `/designated-regional-areas` |

### Student Visas

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Student Guardian | 590 | `/student-guardian-590` |
| Courses with PR Prospects | — | `/courses-with-pr-prospects` |
| Financial Capacity for Student Visas | — | `/student-visa-financial-capacity` |

### Partner & Family

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Child Visa Offshore | 101 | `/child-visa-offshore-101` |
| Child Visa Onshore | 802 | `/child-visa-onshore-802` |
| Adoption Visa | 102 | `/adoption-visa-102` |
| Dependent Child | 445 | `/dependent-child-visa-445` |
| Contributory Parent (Temporary) | 173 | `/contributory-parent-temporary-173` |
| Contributory Aged Parent (Permanent) | 864 | `/contributory-aged-parent-permanent-864` |
| Contributory Aged Parent (Temporary) | 884 | `/contributory-aged-parent-temporary-884` |
| Parent Visa | 103 | `/parent-visa-103` |
| Sponsored Parent (Temporary) | 870 | `/sponsored-parent-temporary-870` |
| Balance of Family Test | — | `/balance-of-family-test` |
| Assurance of Support | — | `/assurance-of-support` |
| Carer Visa | 116 | `/carer-visa-116` |
| Remaining Relative | 115 | `/remaining-relative-visa-115` |
| Aged Dependent Relative | 114 | `/aged-dependent-relative-114` |
| Orphan Relative | 117 | `/orphan-relative-visa-117` |
| NZ Citizen Family Relationship | 461 | `/nz-citizen-family-relationship-461` |

### Visitor & Other

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Electronic Travel Authority | 601 | `/electronic-travel-authority-601` |
| Working Holiday | 417 | `/working-holiday-417` |
| Work and Holiday | 462 | `/work-and-holiday-462` |
| Medical Treatment | 602 | `/medical-treatment-visa-602` |
| Resident Return Visa | 155/157 | `/resident-return-visa` |
| Special Category (NZ) | 444 | `/special-category-nz-444` |
| Protection Visa | 866 | `/protection-visa-866` |

### Reviews & Complex Cases

| Intended Title | Visa Subclass / Code | Intended Canonical URL |
|---|---|---|
| Visa Cancellation | — | `/visa-cancellation` |
| Section 48 Bar | — | `/section-48-bar` |
| Schedule 3 Criteria | — | `/schedule-3-criteria` |
| PIC 4020 | — | `/pic-4020-fraud-provisions` |
| Condition 8503 No Further Stay | — | `/condition-8503-no-further-stay` |
| Health Waiver | — | `/health-requirement-waiver` |
| Re-entry Bans | — | `/re-entry-bans` |
| Ministerial Intervention | — | `/ministerial-intervention` |
| Natural Justice (s57) Letters | — | `/natural-justice-s57-letters` |

### Built but hidden from navigation in Phase 1

These page components exist in the repository and their routes are registered in `src/App.tsx`. They were removed from the mega-menu, footer, and hub page card grids as part of the Phase 1 navigation audit (August 2026) and can be restored for Phase 2 by re-adding their entries to navItems.ts, SiteFooter, and any relevant hub page card grids.

| Page component | Route slug | Notes |
|---|---|---|
| `RegionalEmployer494Page` | `regional-494` | Skilled Employer Sponsored Regional (494) hub |
| `VisitorOtherHubPage` | `visitor-hub` | Visitor & Other category hub |
| `VisitorVisaPage` | `visitor-visa` | Visitor Visa (600) detail page |
| `ParentVisaPage` | `parent-visa` | Parent Visas overview hub |

---

## Pre-launch Checklist

The following TBC placeholders in `src/components/SiteFooter.tsx` (and the JSON-LD block) must be resolved before going live:

| Item | Placeholder | Location |
|---|---|---|
| LinkedIn profile URL | `[TBC-LINKEDIN]` | Social icon row, JSON-LD `sameAs` |
| Facebook profile URL | `[TBC-FACEBOOK]` | Social icon row, JSON-LD `sameAs` |
| Instagram profile URL | `[TBC-INSTAGRAM]` | Social icon row, JSON-LD `sameAs` |
| Logo file | `/logo.png` | JSON-LD `logo` — ensure file exists at public root |
| Privacy Policy page | `href="#"` | Legal bar link |
| Terms of Use page | `href="#"` | Legal bar link |
| Sitemap page | `href="#"` | Legal bar link |
| Migration news cards | All cards marked `[DRAFT]` | All news cards must be verified or replaced with real published articles before launch |
| Google Reviews section | Removed | Reinstate only with real, consented reviews linked to the Google Business Profile |
| Wire Google rating | Not wired | Wire Google rating widget to real Google Business Profile before displaying any star rating or review count |
| Navpreet Aulakh photo | Navy monogram placeholder in hero CTA section | Replace with a real professional photograph of Navpreet Aulakh — the AI-generated placeholder (`ChatGPT_Image_Aug_9__2026__08_28_55_PM.png`) has been removed |

_Resolved: ABN 54 674 937 476, ACN 674 937 476, phone 1300 644 728, email visa@nanakmigration.com.au, office address 8 Tallis Cct Truganina VIC 3029._

## §9 SEO and AI-Visibility Layer

### pageMeta.ts

**Location:** `src/data/pageMeta.ts`

Exports a `PAGE_META` const typed as `Record<string, { title: string; metaDescription: string; primaryKeyword: string }>`. Keys are canonical route slugs (e.g. `'employer-nomination-scheme'`). Covers all 30 Phase 1 routes.

**Usage in SPA:** Each page component imports `PAGE_META` and calls:
```ts
React.useEffect(() => {
  document.title = PAGE_META['route-key'].title
}, [])
```

**Usage in Next.js build:** The Next.js implementation must emit each field as server-rendered HTML tags for every page:
- `<title>{PAGE_META[route].title}</title>`
- `<meta name="description" content={PAGE_META[route].metaDescription} />`
- `<link rel="canonical" href={`https://www.nanakmigration.com.au/${route}`} />`
- `<meta property="og:title" content={PAGE_META[route].title} />`
- `<meta property="og:description" content={PAGE_META[route].metaDescription} />`
- `<meta property="og:url" content={`https://www.nanakmigration.com.au/${route}`} />`
- `<meta property="og:type" content="website" />`

Title pattern: `{Page name} | Nanak Migration Group` — must be under 60 characters.
metaDescription: under 155 characters, answer-first, mentions the visa subclass number where applicable.

### StructuredData component

**Location:** `src/components/page/StructuredData.tsx`
**Barrel export:** `src/components/page/index.ts`

**Props:**
```ts
interface StructuredDataProps {
  breadcrumbs: BreadcrumbItem[]   // always required — BreadcrumbList schema
  faqs?: FaqSchemaItem[]          // optional — FAQPage schema (string answers only; JSX answers silently skipped)
  service?: ServiceSchema         // optional — Service schema linked to org #organization
  pageUrl?: string                // fallback URL if service.url not provided
}
```

**Placement:** Render `<StructuredData>` as the first child inside the outermost wrapper `<div>`, before `<SiteHeader>`.

**Which pages get Service schema:** All 30 Phase 1 pages — visa pages, hub pages, and utility pages (points-test, skills-assessment, english-requirements, state-nomination, bridging-visas) all receive a Service schema.

**JSON-LD rendering note:**
- In this SPA, JSON-LD is rendered **client-side** via `dangerouslySetInnerHTML` in `<script type="application/ld+json">` tags.
- In the **Next.js build**, all three schema types (BreadcrumbList, FAQPage, Service) must be **server-rendered** in the `<head>` of each page so search engines and AI crawlers receive them in the initial HTML response. Use `next/head` or the App Router `metadata` API with a `generateMetadata` function.
- Do not rely on client-side hydration for structured data in the Next.js implementation.

### AnswerBox entity consistency

The first sentence of every `<AnswerBox>` on all 30 pages has been updated to:
1. Name "Nanak Migration Group, a registered migration agent (MARN 2619467)"
2. Name the full visa name and subclass number (where applicable)
3. Mention "Australia" or "Australian"

The trailing clause `, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains.` was appended to the first sentence of each AnswerBox to satisfy AI-citation requirements. Second and subsequent sentences were not changed.

---

## Icon System

**Package:** lucide-react 1.35.0 (MIT)

**Wrapper:** `src/components/Icon.tsx` — import and use this exclusively. Never import Lucide components ad hoc in page files.

**Stroke width:** 1.75 (set in wrapper)

**Default size:** 18px

**Props:**
```ts
name: string      // key from the mapping table below
size?: number     // default 18
color?: string    // default 'currentColor'
className?: string
'aria-hidden'?: boolean | 'true' | 'false'   // default true
```

**Usage:**
```tsx
import Icon from '@/components/Icon'
<Icon name="shield" size={24} color={NAVY} />
```

**Adding new icons:** Add the Lucide component to the import block and the ICON_MAP in `src/components/Icon.tsx`. Do not import Lucide components directly in any page file.

### Name → Lucide Mapping

| name string | Lucide component |
|---|---|
| menu | Menu |
| x | X |
| arrowright / arrow-right | ArrowRight |
| arrowleft / arrow-left | ArrowLeft |
| arrowup | ArrowUp |
| arrowdown | ArrowDown |
| chevrondown | ChevronDown |
| chevronup | ChevronUp |
| chevronright / chevron-right | ChevronRight |
| chevronleft / chevron-left | ChevronLeft |
| externallink / external | ExternalLink |
| link | Link |
| phone | Phone |
| inbox / mail | Mail |
| bell | Bell |
| send | Send |
| clipboard | ClipboardList |
| bookopen | BookOpen |
| book | Book |
| layers | Layers |
| hash | Hash |
| file | File |
| filecheck | FileCheck |
| filetext | FileText |
| fileinput | FileInput |
| user | User |
| users | Users |
| graduationcap | GraduationCap |
| heart | Heart |
| briefcase | Briefcase |
| building / building2 | Building2 |
| landmark | Landmark |
| award | Award |
| star | Star |
| shield | Shield |
| shieldcheck | ShieldCheck |
| scale | Scale |
| lock | Lock |
| unlock | Unlock |
| eye | Eye |
| eyeoff | EyeOff |
| mappin | MapPin |
| map | Map |
| globe | Globe |
| plane | Plane |
| flag | Flag |
| home | Home |
| compass | Compass |
| check | Check |
| checkcirc | CheckCircle |
| xcirc | XCircle |
| alertcirc | AlertCircle |
| alert | AlertTriangle |
| info | Info |
| clock | Clock |
| calendar | Calendar |
| refresh | RefreshCw |
| dollar | DollarSign |
| trendingup / trending | TrendingUp |
| barchart | BarChart2 |
| tool | Wrench |
| settings | Settings |
| sliders | Sliders |
| filter | Filter |
| search | Search |
| zoomin | ZoomIn |
| zoomout | ZoomOut |
| image | Image |
| video | Video |
| music | Music |
| tag | Tag |
| tags | Tags |
| stamp | Stamp |
| idcard / passport | IdCard |
| badgecheck | BadgeCheck |
| sparkles | Sparkles |
| cpu | Cpu |
| database | Database |
| code | Code |
| zap | Zap |
| plus | Plus |
| minus | Minus |
| list | List |
| baby | Baby |
| sun | Sun |
| creditcard | CreditCard |
