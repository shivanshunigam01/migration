import React, { useState, useEffect } from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { Breadcrumbs, ComplianceDisclaimer, CtaBand, SectionHeading } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'

/* ── Article data ─────────────────────────────────────────────────────────── */

// CMS NOTE: These are placeholder sample articles. Replace with real CMS-sourced articles
// before launch. The Next.js team should wire this page to the CMS (e.g. Sanity, Contentful)
// and replace the static ARTICLES array with API-fetched data. Each article must be
// reviewed and approved by the registered migration agent before publication.
const ARTICLES = [
  {
    id: 1,
    date: '28 Jul 2026',
    category: 'Fees & thresholds',
    featured: true,
    headline: '[SAMPLE] July 2026 income threshold indexation — what changed for 482 and 186 applications',
    summary: 'The Core Skills Income Threshold (CSIT) and Temporary Skilled Migration Income Threshold (TSMIT) were indexed on 1 July 2026. This article explains the new figures and what they mean for current and pending nominations.',
    readTime: '4 min read',
  },
  {
    id: 2,
    date: '14 Jul 2026',
    category: 'Occupation lists',
    featured: false,
    headline: '[SAMPLE] CSOL update: which occupations were added and removed in the July 2026 review',
    summary: 'The Core Skills Occupation List (CSOL) was amended on 14 July 2026. We outline the key changes — occupations added, occupations removed, and newly imposed caveats — and what they mean for pending and future nominations.',
    readTime: '6 min read',
  },
  {
    id: 3,
    date: '02 Jul 2026',
    category: 'Policy changes',
    featured: false,
    headline: '[SAMPLE] Changes to post-study work rights for 2026 graduates — Temporary Graduate 485 explained',
    summary: 'Updated Temporary Graduate visa rules apply to graduates completing courses from 1 January 2026. We summarise the new stream eligibility and extended stay periods for regional and STEM graduates.',
    readTime: '5 min read',
  },
  {
    id: 4,
    date: '18 Jun 2026',
    category: 'Fees & thresholds',
    featured: false,
    headline: '[SAMPLE] Student visa financial capacity threshold updated — new living cost figures from May 2024 explained',
    summary: 'The living cost evidence threshold for the subclass 500 student visa is AUD 29,710 per year from 10 May 2024 (indexed). This article explains how the update affects current and future student visa applicants.',
    readTime: '3 min read',
  },
  {
    id: 5,
    date: '05 Jun 2026',
    category: 'Case outcomes',
    featured: false,
    headline: '[SAMPLE] ART overturns section 501 character cancellation — what the decision means',
    summary: "A recent Administrative Review Tribunal decision set aside a section 501 character cancellation, finding that the decision-maker failed to properly weigh the best interests of the applicant's Australian citizen children. Key takeaways for affected visa holders.",
    readTime: '7 min read',
  },
  {
    id: 6,
    date: '20 May 2026',
    category: 'Firm news',
    featured: false,
    headline: '[SAMPLE] Nanak Migration Group opens new consultations in Perth — bookings now open',
    summary: 'We are pleased to announce expanded consultation availability for clients in Perth (WA). Our registered migration agents now offer in-person consultations in Perth alongside our Melbourne, Sydney and Brisbane offices.',
    readTime: '2 min read',
  },
]

const CATEGORIES = ['All', 'Policy changes', 'Occupation lists', 'Fees & thresholds', 'Case outcomes', 'Firm news']

/* ── Page component ───────────────────────────────────────────────────────── */
export default function NewsPage({ navigate }: { navigate: (page: string) => void }) {
  const meta = PAGE_META['news']
  const [activeCategory, setActiveCategory] = useState('All')
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  useEffect(() => {
    document.title = meta.title
  }, [meta.title])

  const featuredArticle = ARTICLES.find((a) => a.featured)
  const nonFeaturedArticles = ARTICLES.filter((a) => !a.featured)

  const filteredArticles =
    activeCategory === 'All'
      ? nonFeaturedArticles
      : nonFeaturedArticles.filter((a) => a.category === activeCategory)

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
    }
  }

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1E1E2A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Immigration News', url: 'https://www.nanakmigration.com.au/news' },
        ]}
      />

      <SiteHeader navItems={NAV_ITEMS} navigate={navigate} />

      <Breadcrumbs
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Immigration News' },
        ]}
        navigate={navigate}
      />

      {/* ── Page header ───────────────────────────────────────────────────── */}
      <section
        style={{
          background: NAVY,
          padding: '64px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: GOLD,
              marginBottom: 20,
            }}
          >
            Immigration News
          </div>
          <h1
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 20px',
              letterSpacing: '-0.02em',
            }}
          >
            Latest from
            <br />
            <em style={{ color: GOLD, fontStyle: 'italic' }}>Nanak Migration Group</em>
          </h1>
          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 560, margin: '0 auto' }}>
            Policy updates, occupation list changes, fees and thresholds, and immigration news from our MARA-registered agents.
          </p>
        </div>
      </section>

      {/* ── Main content ──────────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '64px 24px', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>

          {/* Category filter chips */}
          <div
            style={{
              display: 'flex',
              gap: 10,
              overflowX: 'auto',
              paddingBottom: 4,
              marginBottom: 48,
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = cat === activeCategory
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    padding: '8px 18px',
                    borderRadius: 24,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    border: isActive ? 'none' : `1.5px solid ${NAVY}`,
                    background: isActive ? NAVY : '#ffffff',
                    color: isActive ? '#ffffff' : NAVY,
                    fontFamily: 'Inter, system-ui, sans-serif',
                    transition: 'background 0.15s, color 0.15s',
                  }}
                >
                  {cat}
                </button>
              )
            })}
          </div>

          {/* Featured article */}
          {featuredArticle && (
            <div
              style={{
                background: '#ffffff',
                border: '1.5px solid #e8edf6',
                borderRadius: 16,
                padding: 36,
                display: 'flex',
                gap: 36,
                alignItems: 'flex-start',
                marginBottom: 48,
                boxShadow: '0 2px 16px rgba(27,43,94,0.07)',
              }}
            >
              {/* Image placeholder */}
              <div
                style={{
                  width: 240,
                  minWidth: 240,
                  height: 180,
                  borderRadius: 10,
                  background: 'linear-gradient(135deg, #1B2B5E 0%, #243570 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Article image
                </span>
              </div>

              {/* Content */}
              <div style={{ flexGrow: 1, minWidth: 0 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <span
                    style={{
                      background: NAVY,
                      color: GOLD,
                      fontSize: 11,
                      fontWeight: 700,
                      padding: '4px 12px',
                      borderRadius: 20,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase',
                    }}
                  >
                    {featuredArticle.category}
                  </span>
                  <span
                    style={{
                      color: GOLD,
                      border: `1px solid ${GOLD}`,
                      fontSize: 11,
                      fontWeight: 600,
                      padding: '3px 10px',
                      borderRadius: 20,
                      letterSpacing: '0.04em',
                    }}
                  >
                    Featured
                  </span>
                </div>

                <h2
                  style={{
                    fontFamily: 'Fraunces, Georgia, serif',
                    fontSize: 'clamp(20px, 2.5vw, 26px)',
                    fontWeight: 700,
                    color: NAVY,
                    lineHeight: 1.25,
                    margin: '0 0 12px',
                    letterSpacing: '-0.015em',
                  }}
                >
                  {featuredArticle.headline}
                </h2>

                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.65, margin: '0 0 20px' }}>
                  {featuredArticle.summary}
                </p>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
                  <div style={{ fontSize: 13, color: '#9ca3af' }}>
                    {featuredArticle.date} &middot; {featuredArticle.readTime}
                  </div>
                  <span
                    style={{
                      color: GOLD,
                      fontSize: 14,
                      fontWeight: 700,
                      cursor: 'pointer',
                      letterSpacing: '-0.01em',
                    }}
                  >
                    Read article &rarr;
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Article grid */}
          {filteredArticles.length > 0 ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}
            >
              {filteredArticles.map((article) => (
                <div
                  key={article.id}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #e8edf6',
                    borderRadius: 14,
                    padding: 24,
                    cursor: 'pointer',
                    transition: 'box-shadow 0.15s, border-color 0.15s',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.boxShadow = '0 6px 24px rgba(27,43,94,0.12)'
                    el.style.borderColor = GOLD
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement
                    el.style.boxShadow = 'none'
                    el.style.borderColor = '#e8edf6'
                  }}
                >
                  {/* Category + date */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                    <span
                      style={{
                        background: 'rgba(27,43,94,0.07)',
                        color: NAVY,
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '3px 10px',
                        borderRadius: 20,
                        letterSpacing: '0.04em',
                      }}
                    >
                      {article.category}
                    </span>
                    <span style={{ fontSize: 12, color: '#9ca3af', flexShrink: 0 }}>
                      {article.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3
                    style={{
                      fontFamily: 'Fraunces, Georgia, serif',
                      fontSize: 17,
                      fontWeight: 600,
                      color: NAVY,
                      lineHeight: 1.3,
                      margin: 0,
                      letterSpacing: '-0.01em',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.headline}
                  </h3>

                  {/* Summary */}
                  <p
                    style={{
                      fontSize: 13,
                      color: '#6b7280',
                      lineHeight: 1.6,
                      margin: 0,
                      flexGrow: 1,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {article.summary}
                  </p>

                  {/* Footer */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: 10,
                      borderTop: '1px solid #f0f2f7',
                    }}
                  >
                    <span style={{ fontSize: 12, color: '#9ca3af' }}>{article.readTime}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: GOLD }}>Read more &rarr;</span>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div
              style={{
                textAlign: 'center',
                padding: '48px 24px',
                color: '#9ca3af',
                fontSize: 15,
              }}
            >
              No articles found in this category yet.
            </div>
          )}
        </div>
      </section>

      {/* ── Newsletter signup band ────────────────────────────────────────── */}
      <section
        style={{
          background: 'linear-gradient(135deg, #0d1632 0%, #1B2B5E 100%)',
          padding: '72px 24px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 560, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(24px, 3.5vw, 34px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.2,
              margin: '0 0 14px',
              letterSpacing: '-0.02em',
            }}
          >
            Stay informed on Australian immigration changes
          </h2>
          <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, margin: '0 0 32px' }}>
            Policy changes, occupation list updates, and fee indexation — delivered to your inbox. Published when news warrants it.
          </p>

          {subscribed ? (
            <div
              style={{
                background: 'rgba(245,161,36,0.12)',
                border: `1px solid rgba(245,161,36,0.35)`,
                borderRadius: 10,
                padding: '18px 24px',
                color: GOLD,
                fontWeight: 600,
                fontSize: 15,
              }}
            >
              Thank you — you have been subscribed to immigration updates.
            </div>
          ) : (
            <form
              onSubmit={handleSubscribe}
              style={{ display: 'flex', gap: 10, maxWidth: 480, margin: '0 auto' }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                required
                style={{
                  flexGrow: 1,
                  padding: '13px 16px',
                  borderRadius: 8,
                  border: '1.5px solid rgba(255,255,255,0.15)',
                  background: 'rgba(255,255,255,0.06)',
                  color: '#ffffff',
                  fontSize: 14,
                  fontFamily: 'Inter, system-ui, sans-serif',
                  outline: 'none',
                }}
              />
              <button
                type="submit"
                style={{
                  background: GOLD,
                  color: NAVY_DARK,
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '13px 22px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: 'pointer',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                }}
              >
                Subscribe
              </button>
            </form>
          )}

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 16, lineHeight: 1.6 }}>
            No spam. Unsubscribe at any time. Your details are handled in accordance with our privacy policy.
          </p>
        </div>
      </section>

      {/* ── CTA Band ──────────────────────────────────────────────────────── */}
      <CtaBand
        title="Have a question about recent changes?"
        body="Nanak Migration Group (MARN 2619467) — registered migration agents who monitor policy changes so you stay compliant."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
