import React, { useEffect } from 'react'
import {
  GOLD, NAVY, NAVY_DARK, GREY_BAND, TEXT,
  CAT_EMPLOYER, CAT_SKILLED, CAT_STUDENT, CAT_PARTNER, CAT_VISITOR, CAT_REVIEWS,
} from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/page/PageHero'
import { AnswerBox } from '@/components/page/AnswerBox'
import { FaqAccordion } from '@/components/page/FaqAccordion'
import type { FaqItem } from '@/components/page/FaqAccordion'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import StructuredData from '@/components/page/StructuredData'
import { NAV_ITEMS } from '@/data/navItems'
import { ROUTE, CANONICAL_ROUTES } from '@/data/routes'
import { PAGE_META } from '@/data/pageMeta'
import { BLOG_POSTS } from '@/data/blogPosts'

/* ── Category config ───────────────────────────────────── */
const CATEGORY_CONFIG: Record<string, { accent: string; label: string }> = {
  'Employer Sponsored': { accent: CAT_EMPLOYER, label: 'Employer Sponsored' },
  'Skilled':            { accent: CAT_SKILLED,  label: 'Skilled Migration' },
  'Student':            { accent: CAT_STUDENT,  label: 'Student Visas' },
  'Partner & Family':   { accent: CAT_PARTNER,  label: 'Partner & Family' },
  'Visitor & Other':    { accent: CAT_VISITOR,  label: 'Visitor & Other' },
  'Reviews':            { accent: CAT_REVIEWS,  label: 'Reviews & Complex' },
  'Practice':           { accent: NAVY,          label: 'Practice' },
}

/* ── Top 6 guides for preview ──────────────────────────── */
const TOP_GUIDES = CANONICAL_ROUTES
  .filter(r => PAGE_META[r.path] && r.category !== 'Practice')
  .slice(0, 6)
  .map(r => ({
    route: r.path,
    title: PAGE_META[r.path].title.replace(' | Nanak Migration Group', ''),
    description: PAGE_META[r.path].metaDescription,
    category: r.category,
  }))

/* ── Checklists ────────────────────────────────────────── */
const CHECKLIST_NAMES = [
  { title: 'Partner Visa Evidence Checklist', accent: CAT_PARTNER },
  { title: '186 Visa Evidence Checklist', accent: CAT_EMPLOYER },
  { title: 'Student Visa (GS) Preparation Checklist', accent: CAT_STUDENT },
  { title: 'Points Test Document Checklist', accent: CAT_SKILLED },
  { title: 'Citizenship Application Checklist', accent: CAT_VISITOR },
  { title: '482 to PR Readiness Checklist', accent: CAT_EMPLOYER },
]

/* ── FAQs ──────────────────────────────────────────────── */
const FAQS: FaqItem[] = [
  {
    question: 'Are these guides free to use?',
    answer:
      'Yes — all guides, articles and checklists on this page are provided free of charge by Nanak Migration Group as general information. They are written by our registered migration agents and reviewed regularly, but they do not constitute migration advice for your specific circumstances.',
  },
  {
    question: 'How current is the information?',
    answer:
      'Guides are reviewed and updated regularly. Each page carries a "Current as at" date. Immigration law changes frequently — if a significant policy change occurs between updates, we note it at the top of the affected guide. Blog articles marked DRAFT are not yet verified and will be replaced before launch.',
  },
  {
    question: 'Can I use a checklist as my complete document list?',
    answer:
      'Checklists are a starting point, not a complete list. The Department of Home Affairs may request additional documents based on your individual circumstances. A registered migration agent can review your specific situation and advise on what evidence you will need.',
  },
  {
    question: 'How do I get personal advice?',
    answer:
      'Book a no-obligation consultation with one of our registered migration agents. We will review your circumstances, confirm your eligibility, and outline the steps and likely costs for your visa pathway.',
  },
]

/* ── Component ─────────────────────────────────────────── */
export default function ResourcesPage({ navigate }: { navigate: (page: string) => void }) {
  useEffect(() => {
    document.title = PAGE_META['resources'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#fff', color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Resources', url: 'https://www.nanakmigration.com.au/resources' },
        ]}
        service={{
          name: 'Australian Visa Guides and Resources',
          description: PAGE_META['resources'].metaDescription,
          url: 'https://www.nanakmigration.com.au/resources',
        }}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow="MARN 2619467"
        maraBadge
        title={
          <>
            Resources —{' '}
            <em style={{ fontStyle: 'italic', color: GOLD }}>Guides, blogs and checklists</em>
          </>
        }
        deck="Guides, articles and checklists to help you understand Australian visas — written by our MARA-registered team."
        currentAsAt="July 2026"
        primaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        accent={NAVY}
      />

      {/* AnswerBox */}
      <div style={{ background: '#fff', padding: '32px 24px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Nanak Migration Group, a registered migration agent (MARN 2619467), publishes free visa
            guides, policy blog articles and evidence checklists to help individuals, families and
            employers understand Australian immigration requirements.
          </AnswerBox>
        </div>
      </div>

      {/* ── GUIDES PREVIEW ──────────────────────────────── */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>30 Guides</div>
              <h2 style={{ fontSize: 27, fontWeight: 700, color: NAVY, margin: 0 }}>Visa Guides</h2>
            </div>
            <button
              onClick={() => navigate(ROUTE.guides)}
              style={{
                background: 'transparent',
                color: NAVY,
                border: `2px solid ${NAVY}`,
                borderRadius: 8,
                padding: '10px 24px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Gilroy', sans-serif",
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = NAVY
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = NAVY
              }}
            >
              Browse all guides →
            </button>
          </div>

          {/* Top 6 guide cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: 16 }}>
            {TOP_GUIDES.map(g => {
              const cfg = CATEGORY_CONFIG[g.category] ?? { accent: NAVY, label: g.category }
              return (
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
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
                    <span style={{ fontSize: 15, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{g.title}</span>
                    <span style={{ flexShrink: 0, fontSize: 10, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: cfg.accent, background: `${cfg.accent}12`, border: `1px solid ${cfg.accent}25`, padding: '3px 8px', borderRadius: 100 }}>
                      {cfg.label}
                    </span>
                  </div>
                  <span style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.55 }}>{g.description}</span>
                  <span style={{ fontSize: 13, fontWeight: 700, color: cfg.accent, marginTop: 4 }}>Read guide →</span>
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* ── BLOG PREVIEW ────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>Latest Articles</div>
              <h2 style={{ fontSize: 27, fontWeight: 700, color: NAVY, margin: 0 }}>Migration Blog</h2>
            </div>
            <button
              onClick={() => navigate(ROUTE.blog)}
              style={{
                background: 'transparent',
                color: NAVY,
                border: `2px solid ${NAVY}`,
                borderRadius: 8,
                padding: '10px 24px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Gilroy', sans-serif",
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = NAVY
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = NAVY
              }}
            >
              View all articles →
            </button>
          </div>

          {/* Latest 3 posts as list rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            {BLOG_POSTS.slice(0, 3).map((post, i) => (
              <article
                key={post.id}
                style={{
                  borderBottom: i < 2 ? '1px solid #e8edf5' : 'none',
                  paddingBottom: i < 2 ? 24 : 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  cursor: 'pointer',
                }}
                onClick={() => navigate(post.relatedRoute)}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  {post.title.startsWith('[DRAFT]') && (
                    <span style={{ background: '#f59e0b', color: NAVY, fontSize: 11, fontWeight: 800, padding: '2px 8px', borderRadius: 4, letterSpacing: '0.08em' }}>DRAFT</span>
                  )}
                  <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, background: 'rgba(245,161,36,0.10)', border: '1px solid rgba(245,161,36,0.28)', padding: '3px 10px', borderRadius: 100 }}>
                    {post.category}
                  </span>
                  <span style={{ fontSize: 12, color: '#9ca3af' }}>{post.date}</span>
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 400, color: NAVY, margin: 0, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                  {post.title.startsWith('[DRAFT]') ? post.title.replace('[DRAFT] ', '') : post.title}
                </h3>
                <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: 0 }}>{post.standfirst}</p>
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY, borderBottom: `1.5px solid ${GOLD}`, paddingBottom: 1, alignSelf: 'flex-start' }}>
                  Read more →
                </span>
              </article>
            ))}
          </div>
          <p style={{ fontSize: 13, fontStyle: 'italic', color: '#9ca3af', marginTop: 32 }}>
            Draft updates shown for layout — verified articles will replace these before launch.
          </p>
        </div>
      </section>

      {/* ── CHECKLISTS PREVIEW ──────────────────────────── */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: 32, flexWrap: 'wrap', gap: 16 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>6 Checklists</div>
              <h2 style={{ fontSize: 27, fontWeight: 700, color: NAVY, margin: 0 }}>Visa Checklists</h2>
            </div>
            <button
              onClick={() => navigate(ROUTE.checklists)}
              style={{
                background: 'transparent',
                color: NAVY,
                border: `2px solid ${NAVY}`,
                borderRadius: 8,
                padding: '10px 24px',
                fontSize: 15,
                fontWeight: 700,
                cursor: 'pointer',
                fontFamily: "'Gilroy', sans-serif",
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = NAVY
                el.style.color = '#fff'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.background = 'transparent'
                el.style.color = NAVY
              }}
            >
              View all checklists →
            </button>
          </div>

          {/* Checklist name cards grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
            {CHECKLIST_NAMES.map(c => (
              <button
                key={c.title}
                onClick={() => navigate(ROUTE.checklists)}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  borderLeft: `4px solid ${c.accent}`,
                  padding: '16px 20px',
                  textAlign: 'left',
                  cursor: 'pointer',
                  border: '1.5px solid #e8edf5',
                  borderLeftWidth: 4,
                  borderLeftColor: c.accent,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 4,
                  fontFamily: "'Gilroy', sans-serif",
                  transition: 'box-shadow 0.15s',
                }}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${c.accent}18`
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                <span style={{ fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.3 }}>{c.title}</span>
                <span style={{ fontSize: 13, fontWeight: 700, color: c.accent, marginTop: 4 }}>View checklist →</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={{ fontSize: 25, fontWeight: 700, color: NAVY, marginBottom: 24 }}>
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQS} accent={NAVY} />
        </div>
      </section>

      <CtaBand
        title="Need personal advice?"
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
