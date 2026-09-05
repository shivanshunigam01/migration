import React, { useEffect, useState } from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { Breadcrumbs, ComplianceDisclaimer, CtaBand } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import { useIntakeSubmit } from '@/lib/api'

/**
 * Immigration News hub.
 * OWNERSHIP: Only publish articles reviewed and approved by the registered migration agent.
 * Do not ship SAMPLE / DRAFT headlines as live news. Paste approved articles into ARTICLES
 * (or wire a CMS) when an owner is assigned.
 */
type Article = {
  id: number
  date: string
  category: string
  featured: boolean
  headline: string
  summary: string
  readTime: string
  href?: string
}

const ARTICLES: Article[] = [
  // Approved articles only — leave empty until a content owner publishes here.
]

const CATEGORIES = ['All', 'Policy changes', 'Occupation lists', 'Fees & thresholds', 'Case outcomes', 'Firm news']

const OFFICIAL_SOURCES = [
  {
    label: 'Department of Home Affairs newsroom',
    href: 'https://immi.homeaffairs.gov.au/news-media/archive',
    desc: 'Official media releases and immigration announcements.',
  },
  {
    label: 'Legislative instruments & occupation lists',
    href: 'https://www.legislation.gov.au/',
    desc: 'Primary source for CSOL, income thresholds and Migration Regulations amendments.',
  },
  {
    label: 'Visa Guides',
    href: '/guides',
    route: 'guides',
    desc: 'Pathway explainers maintained by our registered agents.',
  },
]

export default function NewsPage({ navigate }: { navigate: (page: string) => void }) {
  const meta = PAGE_META['news']
  const { submit, loading, error, success } = useIntakeSubmit('newsletter')
  const [email, setEmail] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')
const featuredArticle = ARTICLES.find((a) => a.featured)
  const nonFeaturedArticles = ARTICLES.filter((a) => !a.featured)
  const filteredArticles =
    activeCategory === 'All'
      ? nonFeaturedArticles
      : nonFeaturedArticles.filter((a) => a.category === activeCategory)
  const hasArticles = ARTICLES.length > 0

  async function handleSubscribe(e: React.FormEvent) {
    e.preventDefault()
    if (!email.trim()) return
    await submit({ email: email.trim(), source: 'news-page' })
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

      <section style={{ background: NAVY, padding: '64px 24px', textAlign: 'center' }}>
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
            Policy updates, occupation list changes, fees and thresholds — published when news warrants it,
            and only after review by our MARA-registered agents.
          </p>
        </div>
      </section>

      <section style={{ background: '#ffffff', padding: '64px 24px', flexGrow: 1 }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
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
                  type="button"
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

          {hasArticles ? (
            <>
              {featuredArticle && (activeCategory === 'All' || featuredArticle.category === activeCategory) && (
                <article
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
                    flexWrap: 'wrap',
                  }}
                >
                  <div
                    style={{
                      width: 240,
                      minWidth: 200,
                      height: 180,
                      borderRadius: 10,
                      background: 'linear-gradient(135deg, #1B2B5E 0%, #243570 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      flexGrow: 1,
                      maxWidth: 280,
                    }}
                  >
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                      Featured
                    </span>
                  </div>
                  <div style={{ flexGrow: 1, minWidth: 240 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14, flexWrap: 'wrap' }}>
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
                      }}
                    >
                      {featuredArticle.headline}
                    </h2>
                    <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.65, margin: '0 0 20px' }}>
                      {featuredArticle.summary}
                    </p>
                    <div style={{ fontSize: 13, color: '#9ca3af' }}>
                      {featuredArticle.date} &middot; {featuredArticle.readTime}
                    </div>
                  </div>
                </article>
              )}

              {filteredArticles.length > 0 ? (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }} className="news-grid">
                  {filteredArticles.map((article) => (
                    <article
                      key={article.id}
                      style={{
                        background: '#ffffff',
                        border: '1.5px solid #e8edf6',
                        borderRadius: 14,
                        padding: 24,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: 12,
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 8 }}>
                        <span
                          style={{
                            background: 'rgba(27,43,94,0.07)',
                            color: NAVY,
                            fontSize: 11,
                            fontWeight: 600,
                            padding: '3px 10px',
                            borderRadius: 20,
                          }}
                        >
                          {article.category}
                        </span>
                        <span style={{ fontSize: 12, color: '#9ca3af' }}>{article.date}</span>
                      </div>
                      <h3
                        style={{
                          fontFamily: 'Fraunces, Georgia, serif',
                          fontSize: 17,
                          fontWeight: 600,
                          color: NAVY,
                          lineHeight: 1.3,
                          margin: 0,
                        }}
                      >
                        {article.headline}
                      </h3>
                      <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>
                        {article.summary}
                      </p>
                      <div style={{ fontSize: 12, color: '#9ca3af', paddingTop: 10, borderTop: '1px solid #f0f2f7' }}>
                        {article.readTime}
                      </div>
                    </article>
                  ))}
                </div>
              ) : (
                <div style={{ textAlign: 'center', padding: '48px 24px', color: '#9ca3af', fontSize: 15 }}>
                  No articles found in this category yet.
                </div>
              )}
            </>
          ) : (
            <div
              style={{
                maxWidth: 720,
                margin: '0 auto',
                textAlign: 'center',
                background: '#f8faff',
                border: '1.5px solid #e8edf6',
                borderRadius: 16,
                padding: '48px 36px',
              }}
            >
              <div
                style={{
                  fontSize: 11,
                  fontWeight: 800,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: GOLD,
                  marginBottom: 16,
                }}
              >
                Agent-reviewed updates
              </div>
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 28, color: NAVY, margin: '0 0 12px' }}>
                No published updates yet
              </h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: '0 0 28px' }}>
                This hub only publishes immigration news after review by our registered migration agents.
                Subscribe below for alerts, or use the official sources and visa guides meanwhile.
              </p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <button
                  type="button"
                  onClick={() => navigate('guides')}
                  style={{
                    background: NAVY,
                    color: '#fff',
                    fontWeight: 700,
                    fontSize: 14,
                    padding: '12px 22px',
                    borderRadius: 8,
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  Browse visa guides
                </button>
                <button
                  type="button"
                  onClick={() => navigate('blog')}
                  style={{
                    background: '#fff',
                    color: NAVY,
                    fontWeight: 700,
                    fontSize: 14,
                    padding: '12px 22px',
                    borderRadius: 8,
                    border: `1.5px solid ${NAVY}`,
                    cursor: 'pointer',
                  }}
                >
                  Visit the blog
                </button>
              </div>
            </div>
          )}

          <div style={{ marginTop: 56 }}>
            <h2
              style={{
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: 24,
                color: NAVY,
                margin: '0 0 8px',
                textAlign: 'center',
              }}
            >
              Sources we monitor
            </h2>
            <p style={{ fontSize: 14, color: '#6b7280', textAlign: 'center', margin: '0 0 28px', lineHeight: 1.6 }}>
              Until firm articles are published here, these are the primary references our practice watches.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }} className="news-sources">
              {OFFICIAL_SOURCES.map((src) => (
                <a
                  key={src.label}
                  href={src.href}
                  target={src.route ? undefined : '_blank'}
                  rel={src.route ? undefined : 'noopener noreferrer'}
                  onClick={(e) => {
                    if (!src.route) return
                    e.preventDefault()
                    navigate(src.route)
                  }}
                  style={{
                    display: 'block',
                    textDecoration: 'none',
                    background: '#fff',
                    border: '1.5px solid #e8edf6',
                    borderRadius: 14,
                    padding: 22,
                    transition: 'border-color 0.15s, box-shadow 0.15s',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = GOLD
                    el.style.boxShadow = '0 6px 20px rgba(27,43,94,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement
                    el.style.borderColor = '#e8edf6'
                    el.style.boxShadow = 'none'
                  }}
                >
                  <div style={{ fontWeight: 700, color: NAVY, fontSize: 15, marginBottom: 8 }}>{src.label}</div>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55, margin: 0 }}>{src.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

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
            Policy changes, occupation list updates, and fee indexation — delivered when news warrants it.
          </p>

          {success ? (
            <div
              style={{
                background: 'rgba(245,161,36,0.12)',
                border: '1px solid rgba(245,161,36,0.35)',
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
            <form onSubmit={handleSubscribe} style={{ display: 'flex', gap: 10, maxWidth: 480, margin: '0 auto' }}>
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
                disabled={loading}
                style={{
                  background: GOLD,
                  color: NAVY_DARK,
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '13px 22px',
                  borderRadius: 8,
                  border: 'none',
                  cursor: loading ? 'wait' : 'pointer',
                  fontFamily: 'Inter, system-ui, sans-serif',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  opacity: loading ? 0.7 : 1,
                }}
              >
                {loading ? 'Sending…' : 'Subscribe'}
              </button>
            </form>
          )}

          {error && <p style={{ fontSize: 13, color: '#fca5a5', marginTop: 12 }}>{error}</p>}

          <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.35)', marginTop: 16, lineHeight: 1.6 }}>
            No spam. Unsubscribe at any time. Your details are handled in accordance with our privacy policy.
          </p>
        </div>
      </section>

      <CtaBand
        title="Have a question about recent changes?"
        body="Nanak Migration Group (MARN 2619467) — registered migration agents who monitor policy changes so you stay compliant."
        primaryCta={{ label: 'Request a discussion', page: 'book-consultation' }}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="September 2026" />
      <SiteFooter navigate={navigate} />

      <style>{`
        @media (max-width: 900px) {
          .news-grid, .news-sources { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
