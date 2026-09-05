import React, { useEffect } from 'react'
import { GOLD, NAVY, NAVY_DARK, GREY_BAND } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { Breadcrumbs, ComplianceDisclaimer, CtaBand, SectionHeading } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import Icon from '@/components/ui/Icon'

/** Replace with the live Google Business Profile review URL when confirmed. */
const GOOGLE_REVIEWS_URL =
  'https://www.google.com/search?q=Nanak+Migration+Group+Melbourne+reviews'

/**
 * COMPLIANCE: OMARA Code of Conduct — do not display fabricated, paraphrased, or
 * selectively edited testimonials. Only paste consented, verifiable Google reviews
 * into REVIEWS below (first name / consented display name, star rating, verbatim text,
 * service tag). Until then this page links out to Google and shows practice strengths.
 */
type Review = {
  id: number
  name: string
  stars: number
  serviceTag: string
  text: string
  googleUrl?: string
}

const REVIEWS: Review[] = [
  // Paste real consented Google reviews here before quoting clients on-site.
]

function StarFilled({ size = 16, color = GOLD }: { size?: number; color?: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      <path d="M8 1.2l1.854 3.756 4.146.603-3 2.924.708 4.128L8 10.515l-3.708 1.948L5 8.335 2 5.411l4.146-.603L8 1.2z" />
    </svg>
  )
}

function StarRow({ count = 5, size = 16 }: { count?: number; size?: number }) {
  return (
    <span style={{ display: 'inline-flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <StarFilled key={i} size={size} color={GOLD} />
      ))}
    </span>
  )
}

const WHY_FEATURES = [
  {
    icon: 'check',
    heading: 'MARA registered agent',
    body: 'Nanak Migration Group is registered with the Office of the Migration Agents Registration Authority (OMARA), MARN 2619467. Only registered agents can legally charge for visa advice in Australia.',
  },
  {
    icon: 'user',
    heading: 'Multilingual service',
    body: 'We provide migration advice in English, Hindi, Punjabi and Nepali — removing language barriers that can lead to errors in visa applications.',
  },
  {
    icon: 'clock',
    heading: '24-hour response time',
    body: 'We commit to responding to all new client enquiries within 24 hours. For urgent matters (NOICC, cancellation, bridging visa expiry), we treat your situation as our priority.',
  },
  {
    icon: 'shield',
    heading: 'OMARA code of conduct compliant',
    body: "We operate under OMARA's Code of Conduct — which governs how we advise clients, handle fees, manage conflicts of interest, and represent clients to the Department. No hidden charges, no guaranteed outcomes.",
  },
]

export default function ReviewsPage({ navigate }: { navigate: (page: string) => void }) {
  const meta = PAGE_META['reviews']
  const hasReviews = REVIEWS.length > 0

  useEffect(() => {
    document.title = meta.title
  }, [meta.title])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#1E1E2A', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Client Reviews', url: 'https://www.nanakmigration.com.au/reviews' },
        ]}
      />

      <SiteHeader navItems={NAV_ITEMS} navigate={navigate} />

      <Breadcrumbs
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Client Reviews' },
        ]}
        navigate={navigate}
      />

      <section
        style={{
          background: 'linear-gradient(160deg, #0d1632 0%, #1B2B5E 60%, #243570 100%)',
          padding: '80px 24px',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div style={{ maxWidth: 760, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'inline-block', marginBottom: 28 }}>
            <span
              style={{
                background: 'rgba(245,161,36,0.12)',
                border: '1px solid rgba(245,161,36,0.35)',
                color: GOLD,
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                padding: '6px 16px',
                borderRadius: 20,
              }}
            >
              Client Reviews
            </span>
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 8,
              marginBottom: 32,
            }}
          >
            <div style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
              <StarRow count={5} size={24} />
            </div>
            <div style={{ fontSize: 15, fontWeight: 600, color: 'rgba(255,255,255,0.85)', marginTop: 4 }}>
              Google Reviews
            </div>
            <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.45)' }}>
              Independently verifiable on our Google Business profile
            </div>
          </div>

          <h1
            style={{
              fontFamily: 'Fraunces, Georgia, serif',
              fontSize: 'clamp(32px, 5vw, 56px)',
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.15,
              margin: '0 0 20px',
              letterSpacing: '-0.02em',
            }}
          >
            What our clients say{' '}
            <em style={{ color: GOLD, fontStyle: 'italic' }}>about working with us</em>
          </h1>

          <p style={{ fontSize: 16, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, maxWidth: 600, margin: '0 auto 32px' }}>
            Nanak Migration Group (MARN 2619467) serves clients across Australia and internationally.
            We only republish consented, verifiable Google reviews on this page — open Google to read the full set.
          </p>

          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-block',
              background: GOLD,
              color: NAVY_DARK,
              fontWeight: 700,
              fontSize: 15,
              padding: '13px 28px',
              borderRadius: 8,
              textDecoration: 'none',
              boxShadow: '0 6px 24px rgba(245,161,36,0.4)',
              letterSpacing: '-0.01em',
            }}
          >
            Read reviews on Google &rarr;
          </a>
        </div>
      </section>

      <section style={{ background: '#ffffff', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Verified Google Reviews" title="Client Experiences" accent={GOLD} />

          {hasReviews ? (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: 24,
              }}
              className="reviews-grid"
            >
              {REVIEWS.map((review) => (
                <div
                  key={review.id}
                  style={{
                    background: '#ffffff',
                    border: '1.5px solid #e8edf6',
                    borderRadius: 16,
                    padding: 28,
                    boxShadow: '0 2px 12px rgba(27,43,94,0.06)',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8 }}>
                    <div>
                      <div style={{ fontWeight: 700, fontSize: 15, color: NAVY, marginBottom: 4 }}>
                        {review.name}
                      </div>
                      <StarRow count={review.stars} size={14} />
                    </div>
                    <span
                      style={{
                        background: NAVY,
                        color: GOLD,
                        fontSize: 11,
                        fontWeight: 600,
                        padding: '4px 10px',
                        borderRadius: 20,
                        whiteSpace: 'nowrap',
                        flexShrink: 0,
                      }}
                    >
                      {review.serviceTag}
                    </span>
                  </div>
                  <div style={{ borderTop: '1px solid #e8edf6' }} />
                  <p style={{ fontStyle: 'italic', color: '#6b7280', fontSize: 14, lineHeight: 1.65, margin: 0, flexGrow: 1 }}>
                    {review.text}
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <span style={{ display: 'inline-block', width: 8, height: 8, borderRadius: '50%', background: '#16a34a', flexShrink: 0 }} />
                    <span style={{ fontSize: 11, color: '#6b7280', fontWeight: 500 }}>Verified Google Review</span>
                  </div>
                </div>
              ))}
            </div>
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
              <Icon name="star" size={32} color={GOLD} />
              <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 28, color: NAVY, margin: '16px 0 12px' }}>
                Reviews live on Google
              </h2>
              <p style={{ fontSize: 15, color: '#6b7280', lineHeight: 1.7, margin: '0 0 28px' }}>
                We only republish client feedback that is verifiable on our Google Business profile and
                shared with written consent. Open Google to read current reviews, or leave feedback after
                working with our team.
              </p>
              <a
                href={GOOGLE_REVIEWS_URL}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-block',
                  background: NAVY,
                  color: '#fff',
                  fontWeight: 700,
                  fontSize: 14,
                  padding: '12px 24px',
                  borderRadius: 8,
                  textDecoration: 'none',
                }}
              >
                View on Google &rarr;
              </a>
            </div>
          )}

          <div
            style={{
              marginTop: 48,
              background: '#f8faff',
              border: '1.5px solid #e8edf6',
              borderRadius: 14,
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  background: '#fff',
                  border: '1.5px solid #e8edf6',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                  fontSize: 18,
                  fontWeight: 700,
                  color: '#4285F4',
                  fontFamily: 'Georgia, serif',
                }}
              >
                G
              </div>
              <div>
                <div style={{ fontWeight: 700, color: NAVY, fontSize: 16 }}>Read all our reviews on Google</div>
                <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>
                  Public reviews on our Google Business profile — independently verifiable.
                </div>
              </div>
            </div>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: NAVY,
                color: '#fff',
                fontWeight: 700,
                fontSize: 14,
                padding: '11px 24px',
                borderRadius: 8,
                textDecoration: 'none',
                whiteSpace: 'nowrap',
                flexShrink: 0,
              }}
            >
              View on Google &rarr;
            </a>
          </div>
        </div>
      </section>

      <section style={{ background: GREY_BAND, padding: '80px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            kicker="Why clients choose us"
            title="What sets Nanak Migration Group apart"
            accent={GOLD}
          />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }} className="why-grid">
            {WHY_FEATURES.map((feat) => (
              <div
                key={feat.icon}
                style={{
                  background: '#ffffff',
                  border: '1.5px solid #e8edf6',
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                }}
              >
                <div
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: 10,
                    background: 'rgba(245,161,36,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name={feat.icon} size={20} color={GOLD} aria-hidden="true" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, color: NAVY, fontSize: 16, marginBottom: 6 }}>{feat.heading}</div>
                  <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{feat.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to work with us?"
        body="Nanak Migration Group (MARN 2619467) — MARA-registered agents serving clients across Australia in English, Hindi, Punjabi and Nepali."
        primaryCta={{ label: 'Request a free discussion', page: 'book-consultation' }}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="September 2026" />
      <SiteFooter navigate={navigate} />

      <style>{`
        @media (max-width: 900px) {
          .reviews-grid, .why-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
