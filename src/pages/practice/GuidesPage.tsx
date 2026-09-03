import React, { useState, useEffect } from 'react'
import {
  GOLD, NAVY, GREY_BAND, TEXT,
  CAT_EMPLOYER, CAT_SKILLED, CAT_STUDENT, CAT_PARTNER, CAT_VISITOR, CAT_REVIEWS,
} from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/page/PageHero'
import { AnswerBox } from '@/components/page/AnswerBox'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import StructuredData from '@/components/page/StructuredData'
import { NAV_ITEMS } from '@/data/navItems'
import { ROUTE, CANONICAL_ROUTES } from '@/data/routes'
import { PAGE_META } from '@/data/pageMeta'

/* ── Category config ───────────────────────────────────── */
const CATEGORY_CONFIG: Record<string, { accent: string; label: string }> = {
  'Employer Sponsored': { accent: CAT_EMPLOYER, label: 'Employer Sponsored' },
  'Skilled':            { accent: CAT_SKILLED,  label: 'Skilled Migration' },
  'Student':            { accent: CAT_STUDENT,  label: 'Student Visas' },
  'Partner & Family':   { accent: CAT_PARTNER,  label: 'Partner & Family' },
  'Visitor & Other':    { accent: CAT_VISITOR,  label: 'Visitor & Other' },
  'Reviews':            { accent: CAT_REVIEWS,  label: 'Reviews & Complex' },
}

const ALL_CATEGORIES = Object.keys(CATEGORY_CONFIG)

/* ── Grouped guides derived from CANONICAL_ROUTES ─────── */
const groupedGuides = CANONICAL_ROUTES
  .filter(r => PAGE_META[r.path] && r.category !== 'Practice')
  .reduce(
    (acc, r) => {
      const cat = r.category || 'Other'
      if (!acc[cat]) acc[cat] = []
      acc[cat].push({
        route: r.path,
        title: PAGE_META[r.path].title.replace(' | Nanak Migration Group', ''),
        description: PAGE_META[r.path].metaDescription,
        category: cat,
      })
      return acc
    },
    {} as Record<string, { route: string; title: string; description: string; category: string }[]>,
  )

export default function GuidesPage({ navigate }: { navigate: (page: string) => void }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  useEffect(() => {
    document.title = PAGE_META['guides'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#fff', color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Resources', url: 'https://www.nanakmigration.com.au/resources' },
          { name: 'Guides', url: 'https://www.nanakmigration.com.au/guides' },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow="MARN 2619467"
        maraBadge
        title="Visa Guides"
        deck="All 30 Australian visa guides written by MARA-registered agents — filterable by category."
        currentAsAt="July 2026"
        primaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        accent={NAVY}
      />

      {/* AnswerBox */}
      <div style={{ background: '#fff', padding: '32px 24px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Browse all 30 Australian visa guides written by registered migration agents at Nanak Migration Group (MARN 2619467). Each guide covers eligibility, key requirements and practical next steps for a specific visa pathway or topic.
          </AnswerBox>
        </div>
      </div>

      {/* Filter bar */}
      <div style={{ background: '#fff', padding: '32px 24px 0' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {/* Search input */}
          <div style={{ marginBottom: 20, maxWidth: 480 }}>
            <input
              type="search"
              placeholder="Search guides…"
              value={query}
              onChange={e => setQuery(e.target.value)}
              style={{
                width: '100%',
                padding: '12px 16px',
                fontSize: 15,
                border: '1.5px solid #e2e8f0',
                borderRadius: 8,
                outline: 'none',
                fontFamily: "'Gilroy', sans-serif",
                color: TEXT,
                background: '#fff',
                boxSizing: 'border-box',
              }}
              onFocus={e => (e.currentTarget.style.borderColor = GOLD)}
              onBlur={e => (e.currentTarget.style.borderColor = '#e2e8f0')}
            />
          </div>
          {/* Category filter chips */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, paddingBottom: 24, borderBottom: '1px solid #e8edf5' }}>
            <button
              onClick={() => setActiveCategory(null)}
              style={{
                padding: '6px 16px',
                borderRadius: 100,
                border: `1.5px solid ${activeCategory === null ? NAVY : '#e2e8f0'}`,
                background: activeCategory === null ? NAVY : '#fff',
                color: activeCategory === null ? '#fff' : '#374151',
                fontSize: 14,
                fontWeight: 600,
                cursor: 'pointer',
                fontFamily: "'Gilroy', sans-serif",
              }}
            >
              All categories
            </button>
            {ALL_CATEGORIES.map(cat => {
              const cfg = CATEGORY_CONFIG[cat]
              const isActive = activeCategory === cat
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(isActive ? null : cat)}
                  style={{
                    padding: '6px 16px',
                    borderRadius: 100,
                    border: `1.5px solid ${isActive ? cfg.accent : '#e2e8f0'}`,
                    background: isActive ? cfg.accent : '#fff',
                    color: isActive ? '#fff' : '#374151',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    fontFamily: "'Gilroy', sans-serif",
                  }}
                >
                  {cfg.label}
                </button>
              )
            })}
          </div>
        </div>
      </div>

      {/* Guide cards grouped by category */}
      <section style={{ background: GREY_BAND, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          {Object.entries(groupedGuides).map(([category, guides]) => {
            if (activeCategory && activeCategory !== category) return null
            const filtered = guides.filter(
              g =>
                !query ||
                g.title.toLowerCase().includes(query.toLowerCase()) ||
                g.description.toLowerCase().includes(query.toLowerCase()),
            )
            if (filtered.length === 0) return null
            const cfg = CATEGORY_CONFIG[category] ?? { accent: NAVY, label: category }
            return (
              <div key={category} style={{ marginBottom: 48 }}>
                <h3
                  style={{
                    fontSize: 17,
                    fontWeight: 800,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: cfg.accent,
                    marginBottom: 16,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                  }}
                >
                  <span
                    style={{
                      display: 'inline-block',
                      width: 24,
                      height: 3,
                      background: cfg.accent,
                      borderRadius: 2,
                    }}
                  />
                  {cfg.label}
                </h3>
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                    gap: 16,
                  }}
                >
                  {filtered.map(g => (
                    <button
                      key={g.route}
                      onClick={() => navigate(g.route)}
                      style={{
                        background: '#fff',
                        border: '1.5px solid #e8edf5',
                        borderRadius: 12,
                        padding: '18px 20px',
                        textAlign: 'left',
                        cursor: 'pointer',
                        transition: 'border-color 0.15s, box-shadow 0.15s',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 8,
                        fontFamily: "'Gilroy', sans-serif",
                      }}
                      onMouseEnter={e => {
                        const el = e.currentTarget
                        el.style.borderColor = cfg.accent
                        el.style.boxShadow = `0 4px 16px ${cfg.accent}18`
                      }}
                      onMouseLeave={e => {
                        const el = e.currentTarget
                        el.style.borderColor = '#e8edf5'
                        el.style.boxShadow = 'none'
                      }}
                    >
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'space-between',
                          alignItems: 'flex-start',
                          gap: 8,
                        }}
                      >
                        <span
                          style={{ fontSize: 15, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}
                        >
                          {g.title}
                        </span>
                        <span
                          style={{
                            flexShrink: 0,
                            fontSize: 10,
                            fontWeight: 700,
                            letterSpacing: '0.08em',
                            textTransform: 'uppercase',
                            color: cfg.accent,
                            background: `${cfg.accent}12`,
                            border: `1px solid ${cfg.accent}25`,
                            padding: '3px 8px',
                            borderRadius: 100,
                          }}
                        >
                          {cfg.label}
                        </span>
                      </div>
                      <span style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55 }}>
                        {g.description}
                      </span>
                      <span
                        style={{ fontSize: 13, fontWeight: 700, color: cfg.accent, marginTop: 4 }}
                      >
                        Read guide →
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      <CtaBand
        title="Need personal advice on your visa pathway?"
        body="Our registered migration agents can review your circumstances and confirm your visa pathway."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        accent={GOLD}
        navigate={navigate}
      />
      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
