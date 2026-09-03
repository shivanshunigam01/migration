import React, { useState, useEffect, useMemo } from 'react'
import { GOLD, NAVY, NAVY_DARK, GREY_BAND, TEXT } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/page/PageHero'
import { AnswerBox } from '@/components/page/AnswerBox'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import StructuredData from '@/components/page/StructuredData'
import { NAV_ITEMS } from '@/data/navItems'
import { ROUTE } from '@/data/routes'
import { PAGE_META } from '@/data/pageMeta'
import { BLOG_POSTS } from '@/data/blogPosts'
import { fetchPublishedBlogs } from '@/lib/contentApi'
import { usePageSeo } from '@/lib/usePageSeo'

type DisplayPost = {
  id: string
  slug: string
  date: string
  category: string
  title: string
  standfirst: string
  relatedRoute: string
}

function formatDate(iso?: string) {
  if (!iso) return ''
  return new Date(iso).toLocaleDateString('en-AU', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPage({ navigate }: { navigate: (page: string) => void }) {
  const [query, setQuery] = useState('')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)
  const [posts, setPosts] = useState<DisplayPost[]>([])

  usePageSeo('blog', PAGE_META['blog'])

  useEffect(() => {
    fetchPublishedBlogs().then((remote) => {
      if (remote && remote.length > 0) {
        setPosts(
          remote.map((p) => ({
            id: p.id,
            slug: p.slug,
            date: formatDate(p.publishedAt),
            category: p.category,
            title: p.title,
            standfirst: p.standfirst,
            relatedRoute: p.relatedRoute,
          }))
        )
      } else {
        setPosts(
          BLOG_POSTS.filter((p) => !p.title.startsWith('[DRAFT]')).map((p) => ({
            id: p.id,
            slug: p.id,
            date: p.date,
            category: p.category,
            title: p.title,
            standfirst: p.standfirst,
            relatedRoute: p.relatedRoute,
          }))
        )
      }
    })
  }, [])

  const ALL_BLOG_CATEGORIES = useMemo(() => Array.from(new Set(posts.map((p) => p.category))), [posts])

  const filtered = posts.filter((post) => {
    const matchesQuery =
      !query ||
      post.title.toLowerCase().includes(query.toLowerCase()) ||
      post.standfirst.toLowerCase().includes(query.toLowerCase())
    const matchesCategory = !activeCategory || post.category === activeCategory
    return matchesQuery && matchesCategory
  })

  const openPost = (post: DisplayPost) => navigate(`${ROUTE.blog}/${post.slug}`)

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#fff', color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Resources', url: 'https://www.nanakmigration.com.au/resources' },
          { name: 'Blog', url: 'https://www.nanakmigration.com.au/blog' },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow="MARN 2619467"
        maraBadge
        title="Migration Blog"
        deck="Australian immigration news, policy updates and visa guidance from MARA-registered migration agents."
        currentAsAt="July 2026"
        primaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        accent={NAVY}
      />

      {/* AnswerBox */}
      <div style={{ background: '#fff', padding: '32px 24px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Nanak Migration Group blog publishes policy updates, visa news and guidance articles written by registered migration agents (MARN 2619467). Content is general information only and is not immigration assistance.
          </AnswerBox>
        </div>
      </div>

      {/* Main two-column layout */}
      <div className="blog-layout"
        style={{ display: 'flex', gap: 40, alignItems: 'flex-start', maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}
      >
        {/* Main column */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Search */}
          <div style={{ marginBottom: 24, maxWidth: 480 }}>
            <input
              type="search"
              placeholder="Search articles…"
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

          {/* Article cards grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
            }}
          >
            {filtered.map(post => (
              <article
                key={post.id}
                style={{
                  background: '#fff',
                  borderRadius: 12,
                  border: '1.5px solid #e8edf5',
                  overflow: 'hidden',
                  cursor: 'pointer',
                  transition: 'box-shadow 0.15s',
                }}
                onClick={() => openPost(post)}
                onMouseEnter={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(27,43,94,0.12)'
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                }}
              >
                {/* Navy header strip */}
                <div
                  style={{
                    background: NAVY,
                    padding: '20px 24px',
                    borderRadius: '12px 12px 0 0',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    flexWrap: 'wrap',
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      color: NAVY,
                      background: GOLD,
                      padding: '3px 10px',
                      borderRadius: 100,
                    }}
                  >
                    {post.category}
                  </span>
                  <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.6)', marginLeft: 'auto' }}>
                    {post.date}
                  </span>
                </div>
                {/* White body */}
                <div style={{ padding: '20px 24px 24px' }}>
                  <h3
                    style={{
                      fontFamily: "'Gilroy', sans-serif",
                      fontSize: 19,
                      fontWeight: 400,
                      color: NAVY,
                      margin: '0 0 12px',
                      lineHeight: 1.3,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    {post.title.startsWith('[DRAFT]') ? post.title.replace('[DRAFT] ', '') : post.title}
                  </h3>
                  <p
                    style={{
                      fontSize: 14,
                      color: '#6b7280',
                      lineHeight: 1.65,
                      margin: '0 0 16px',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {post.standfirst}
                  </p>
                  <span
                    style={{
                      fontSize: 14,
                      fontWeight: 700,
                      color: NAVY,
                      borderBottom: `1.5px solid ${GOLD}`,
                      paddingBottom: 1,
                    }}
                  >
                    Read more →
                  </span>
                </div>
              </article>
            ))}
          </div>

          {filtered.length === 0 && (
            <p style={{ fontSize: 15, color: '#9ca3af', fontStyle: 'italic', marginTop: 24 }}>
              No articles match your search. Try clearing the filter.
            </p>
          )}

          <p style={{ fontSize: 13, fontStyle: 'italic', color: '#9ca3af', marginTop: 32 }}>
            Draft updates shown for layout — verified articles will replace these before launch.
          </p>
        </div>

        {/* Sidebar */}
        <aside className="blog-sidebar"
          style={{ width: 280, flexShrink: 0, position: 'sticky', top: 80 }}
        >
          {/* Recent posts panel */}
          <div
            style={{
              background: NAVY,
              borderRadius: 12,
              padding: 20,
              marginBottom: 24,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: GOLD,
                marginBottom: 16,
              }}
            >
              Recent Posts
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {posts.slice(0, 6).map(post => (
                <button
                  key={post.id}
                  onClick={() => openPost(post)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    padding: '10px 12px',
                    borderRadius: 8,
                    transition: 'background 0.12s',
                    fontFamily: "'Gilroy', sans-serif",
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.background = 'none'
                  }}
                >
                  <div
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#ffffff',
                      lineHeight: 1.3,
                      marginBottom: 4,
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {post.title.replace('[DRAFT] ', '')}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)' }}>{post.date}</span>
                    <span
                      style={{
                        fontSize: 10,
                        fontWeight: 700,
                        letterSpacing: '0.06em',
                        textTransform: 'uppercase',
                        color: NAVY_DARK,
                        background: GOLD,
                        padding: '1px 6px',
                        borderRadius: 100,
                      }}
                    >
                      {post.category}
                    </span>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Category filter */}
          <div
            style={{
              background: GREY_BAND,
              borderRadius: 12,
              padding: 20,
            }}
          >
            <div
              style={{
                fontSize: 13,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: NAVY,
                marginBottom: 12,
              }}
            >
              Filter by category
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              <button
                onClick={() => setActiveCategory(null)}
                style={{
                  padding: '8px 12px',
                  borderRadius: 8,
                  border: `1.5px solid ${activeCategory === null ? NAVY : '#e2e8f0'}`,
                  background: activeCategory === null ? NAVY : '#fff',
                  color: activeCategory === null ? '#fff' : '#374151',
                  fontSize: 14,
                  fontWeight: 600,
                  cursor: 'pointer',
                  textAlign: 'left',
                  fontFamily: "'Gilroy', sans-serif",
                }}
              >
                All categories
              </button>
              {ALL_BLOG_CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(activeCategory === cat ? null : cat)}
                  style={{
                    padding: '8px 12px',
                    borderRadius: 8,
                    border: `1.5px solid ${activeCategory === cat ? NAVY : '#e2e8f0'}`,
                    background: activeCategory === cat ? NAVY : '#fff',
                    color: activeCategory === cat ? '#fff' : '#374151',
                    fontSize: 14,
                    fontWeight: 600,
                    cursor: 'pointer',
                    textAlign: 'left',
                    fontFamily: "'Gilroy', sans-serif",
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <CtaBand
        title="Want personal visa advice?"
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
