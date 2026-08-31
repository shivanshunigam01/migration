import React, { useState, Fragment } from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
import NanakLogo from '@/components/layout/NanakLogo'
import { ROUTE } from '@/data/routes'
import { useIntakeSubmit } from '@/lib/api'
import { useSiteContent } from '@/hooks/useSiteContent'

// ── JSON-LD ──────────────────────────────────────────────────────────────
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['Organization', 'LegalService'],
      '@id': 'https://www.nanakmigration.com.au/#organization',
      name: 'Nanak Migration Group',
      url: 'https://www.nanakmigration.com.au',
      logo: 'https://www.nanakmigration.com.au/logo.png',
      description:
        'Registered migration agents helping individuals and employers navigate Australian immigration.',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Level 8, 350 Collins Street',
        addressLocality: 'Melbourne',
        addressRegion: 'VIC',
        postalCode: '3000',
        addressCountry: 'AU',
      },
      telephone: '+61 1300 644 728',
      email: 'visa@nanakmigration.com.au',
      areaServed: 'AU',
      identifier: [
        { '@type': 'PropertyValue', name: 'MARN', value: '2619467' },
        { '@type': 'PropertyValue', name: 'ABN', value: '54 674 937 476' },
      ],
      sameAs: ['[TBC-LINKEDIN]', '[TBC-FACEBOOK]', '[TBC-INSTAGRAM]'],
    },
  ],
}

// ── Newsletter form (preserved exactly) ─────────────────────────────────
function NewsletterForm({ buttonLabel = 'Subscribe →' }: { buttonLabel?: string }) {
  const { submit, loading, error, success } = useIntakeSubmit('newsletter')
  const [email, setEmail] = useState('')
  const [hp, setHp] = useState('')

  if (success)
    return (
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 12,
          background: 'rgba(255,255,255,0.18)',
          backdropFilter: 'blur(8px)',
          borderRadius: 12,
          padding: '16px 24px',
          border: '1px solid rgba(255,255,255,0.3)',
        }}
      >
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M3 8l3.5 3.5 6.5-7"
              stroke={NAVY}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div>
          <div style={{ fontSize: 15, fontWeight: 700, color: '#ffffff' }}>
            You're subscribed — thank you!
          </div>
          <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.7)', marginTop: 2 }}>
            We'll be in touch with the latest updates.
          </div>
        </div>
      </div>
    )
  return (
    <form
      onSubmit={async (e) => {
        e.preventDefault()
        const em = email.trim()
        if (!em) return
        await submit({
          company_website: hp,
          lead: { email: em, name: 'Newsletter subscriber', consent: { email: true } },
        }).catch(() => {})
      }}
      style={{
        display: 'flex',
        gap: 0,
        flexShrink: 0,
        boxShadow: '0 4px 24px rgba(13,22,50,0.2)',
        borderRadius: 10,
        flexDirection: 'column',
      }}
    >
      <div style={{ display: 'flex', gap: 0 }}>
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="your@email.com"
        style={{
          padding: '14px 20px',
          fontSize: 15,
          border: 'none',
          borderRadius: '10px 0 0 10px',
          outline: 'none',
          width: 260,
          color: NAVY_DARK,
          background: '#ffffff',
          fontFamily: "'Gilroy', sans-serif",
        }}
      />
      <button
        type="submit"
        disabled={loading}
        style={{
          padding: '14px 26px',
          background: loading ? '#9ca3af' : NAVY,
          color: '#fff',
          border: 'none',
          borderRadius: '0 10px 10px 0',
          fontSize: 15,
          fontWeight: 700,
          cursor: loading ? 'not-allowed' : 'pointer',
          whiteSpace: 'nowrap',
          letterSpacing: '0.02em',
          fontFamily: "'Gilroy', sans-serif",
          transition: 'background 0.15s',
        }}
      >
        {loading ? 'Subscribing…' : buttonLabel}
      </button>
      </div>
      <input
        type="text"
        name="company_website"
        value={hp}
        onChange={(e) => setHp(e.target.value)}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }}
      />
      {error && (
        <div style={{ fontSize: 13, color: '#fecaca', marginTop: 8, paddingLeft: 4 }}>{error}</div>
      )}
    </form>
  )
}

// ── SVG icons ─────────────────────────────────────────────────────────────
function ShieldIcon({ size = 16, color = GOLD }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M8 1.5L2.5 4v4c0 3.3 2.4 5.7 5.5 6.5 3.1-.8 5.5-3.2 5.5-6.5V4L8 1.5z"
        stroke={color}
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5.5 8l1.8 1.8 3.2-3.2" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function LinkedInIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

function FacebookIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
    </svg>
  )
}

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

// ── Column link list ───────────────────────────────────────────────────────
function ColLink({
  label,
  onClick,
  href,
  target,
}: {
  label: string
  onClick?: () => void
  href?: string
  target?: string
}) {
  const base: React.CSSProperties = {
    fontSize: 15,
    color: 'rgba(255,255,255,0.75)',
    textDecoration: 'none',
    display: 'block',
    padding: '5px 0',
    lineHeight: 1.4,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    fontFamily: "'Gilroy', sans-serif",
    textAlign: 'left',
    width: '100%',
  }
  const handleEnter = (e: React.MouseEvent<HTMLElement>) => {
    ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
  }
  const handleLeave = (e: React.MouseEvent<HTMLElement>) => {
    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.75)'
  }

  if (onClick) {
    return (
      <button style={base} onClick={onClick} onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
        {label}
      </button>
    )
  }
  return (
    <a
      href={href || '#'}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      style={base}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {label}
    </a>
  )
}

function ColHeading({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div
        style={{
          fontSize: 11,
          fontWeight: 800,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: GOLD,
          marginBottom: 8,
        }}
      >
        {children}
      </div>
      <div
        style={{
          height: 1,
          background: 'rgba(245,161,36,0.35)',
          marginBottom: 16,
        }}
      />
    </>
  )
}

// ── Main component ─────────────────────────────────────────────────────────
export default function SiteFooter({ navigate }: { navigate: (page: string) => void }) {
  const { newsletter } = useSiteContent()
  const [openCol, setOpenCol] = useState<string | null>(null)
  const toggleCol = (id: string) => setOpenCol((prev) => (prev === id ? null : id))

  // Accordion wrapper for columns 2-5
  function AccordionCol({
    id,
    heading,
    children,
  }: {
    id: string
    heading: string
    children: React.ReactNode
  }) {
    const isOpen = openCol === id
    return (
      <div className="footer-col">
        <button
          className="footer-col-toggle"
          aria-expanded={isOpen}
          onClick={() => toggleCol(id)}
          style={{
            display: 'none', // shown via CSS on mobile
            width: '100%',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '12px 0',
            fontFamily: "'Gilroy', sans-serif",
            minHeight: 44,
          }}
        >
          <span
            style={{
              fontSize: 11,
              fontWeight: 800,
              letterSpacing: '0.14em',
              textTransform: 'uppercase',
              color: GOLD,
            }}
          >
            {heading}
          </span>
          <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: 15 }}>{isOpen ? '▲' : '▼'}</span>
        </button>
        {/* Desktop heading always visible */}
        <div className="footer-col-desktop-heading">
          <ColHeading>{heading}</ColHeading>
        </div>
        <div className={`footer-col-content${isOpen ? ' footer-col-open' : ''}`}>{children}</div>
      </div>
    )
  }

  // NOTE: city-name entries (Migration Agent Melbourne/Sydney/Brisbane/Perth, Immigration Advice Melbourne)
  // have no dedicated location page yet — routed to home until city pages are built (see pre-launch checklist).
  const locations: { label: string; route: string }[] = [
    { label: 'Migration Agent Melbourne',    route: 'home' },
    { label: 'Migration Agent Sydney',       route: 'home' },
    { label: 'Migration Agent Brisbane',     route: 'home' },
    { label: 'Migration Agent Perth',        route: 'home' },
    { label: 'Skilled Visa Australia 2026',  route: ROUTE.skilledMigration },
    { label: 'Partner Visa Australia',       route: ROUTE.partnerFamilyVisas },
    { label: 'Student Visa Australia',       route: ROUTE.studentVisas },
    { label: '482 Visa Sponsor',             route: ROUTE.skillsInDemandVisa },
    { label: '189 Visa Points Test',         route: ROUTE.pointsTest },
    { label: '190 Visa State Nomination',    route: ROUTE.skilledNominated190 },
    { label: '491 Regional Visa',            route: ROUTE.skilledWorkRegional491 },
    { label: '186 Employer Nomination',      route: ROUTE.employerNominationScheme },
    { label: 'PR Pathway Australia',         route: ROUTE.pathway482ToPR },
    { label: 'Australian Permanent Residency', route: ROUTE.skilledMigration },
    { label: 'ART Review Assistance',        route: ROUTE.artReview },
    { label: 'Bridging Visa Australia',      route: ROUTE.bridgingVisas },
    { label: 'MARA Registered Agent',        route: 'home' },
    { label: 'Immigration Advice Melbourne', route: 'home' },
    { label: 'Skilled Occupation List 2026', route: ROUTE.coreSkillsOccupationList },
    { label: 'TR to PR Australia',           route: ROUTE.pathway482ToPR },
  ]

  return (
    <footer role="contentinfo" style={{ fontFamily: "'Gilroy', sans-serif" }}>
      {/* JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* ── Band 1: Newsletter ───────────────────────────────────────── */}
      <div
        style={{
          background: `linear-gradient(110deg, ${NAVY} 0%, #1e3aaa 45%, #1B2B5E 100%)`,
          padding: '0 24px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: -60,
            right: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(245,161,36,0.12) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: -40,
            left: '30%',
            width: 240,
            height: 240,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
            pointerEvents: 'none',
          }}
        />
        <div
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: 40,
            flexWrap: 'wrap',
            padding: '36px 0',
            position: 'relative',
          }}
        >
          <div>
            <div
              style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: '50%',
                  background: 'rgba(245,161,36,0.5)',
                  boxShadow: '0 0 0 3px rgba(245,161,36,0.2)',
                }}
              />
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 600,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.5)',
                }}
              >
                {newsletter.eyebrow || 'Immigration Updates'}
              </span>
            </div>
            <div
              style={{
                fontSize: 23,
                fontWeight: 700,
                color: '#ffffff',
                letterSpacing: '-0.02em',
                marginBottom: 6,
                lineHeight: 1.2,
              }}
            >
              {newsletter.title || 'Australia immigration news straight to your inbox'}
            </div>
            <div style={{ fontSize: 14.5, color: 'rgba(255,255,255,0.55)', lineHeight: 1.6 }}>
              {newsletter.subtext || 'Policy updates, visa changes, occupation list alerts — no spam, unsubscribe any time.'}
            </div>
          </div>
          <NewsletterForm buttonLabel={newsletter.buttonLabel} />
        </div>
      </div>

      {/* ── Band 2: Credentials strip ────────────────────────────────── */}
      <div
        style={{
          background: NAVY_DARK,
          padding: '0 24px',
        }}
      >
        <div
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            height: 48,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '0 6px',
          }}
        >
          {[
            'MARN 2619467',
            'ABN 54 674 937 476',
            'OMARA Member',
            'DoHA Regulated',
            'OMARA Code of Conduct Compliant',
          ].map((item, i, arr) => (
            <Fragment key={item}>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 5,
                  fontSize: 13,
                  color: 'rgba(255,255,255,0.7)',
                  letterSpacing: '0.04em',
                  whiteSpace: 'nowrap',
                }}
              >
                <ShieldIcon size={13} color={GOLD} />
                {item}
              </span>
              {i < arr.length - 1 && (
                <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.3)', padding: '0 4px' }}>
                  ·
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>

      {/* ── Band 3: Main footer grid ─────────────────────────────────── */}
      <div style={{ background: NAVY }}>
        <div
          className="footer-main-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1.2fr 1.2fr 1.2fr 1.2fr',
            gap: 48,
            maxWidth: 1300,
            margin: '0 auto',
            padding: '64px 48px',
          }}
        >
          {/* Column 1: Brand block */}
          <div>
            {/* Logo lockup */}
            <div style={{ marginBottom: 16 }}>
              <NanakLogo size={36} light />
            </div>

            {/* Positioning statement */}
            <p
              style={{
                fontSize: 14,
                color: 'rgba(255,255,255,0.75)',
                lineHeight: 1.6,
                margin: '0 0 20px',
                maxWidth: 280,
              }}
            >
              Registered migration agents helping individuals and employers navigate Australian
              immigration.
            </p>

            {/* Address */}
            <address style={{ fontStyle: 'normal', marginBottom: 16 }}>
              {[
                'Level 8, 350 Collins Street',
                'Melbourne VIC 3000',
                'Australia',
                'Ph: 1300 644 728',
                'visa@nanakmigration.com.au',
              ].map((line) => (
                <div
                  key={line}
                  style={{
                    fontSize: 14,
                    color: 'rgba(255,255,255,0.65)',
                    lineHeight: 1.7,
                  }}
                >
                  {line}
                </div>
              ))}
            </address>

            {/* MARA card */}
            <div
              style={{
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 8,
                padding: '10px 14px',
                marginBottom: 16,
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 8,
                  marginBottom: 4,
                }}
              >
                <ShieldIcon size={16} color={GOLD} />
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 700,
                    color: GOLD,
                  }}
                >
                  Registered Migration Agent
                </span>
              </div>
              <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)' }}>MARN 2619467</div>
            </div>

            {/* Social icons */}
            <div style={{ display: 'flex', gap: 14 }}>
              {[
                { href: '[TBC-LINKEDIN]', label: 'LinkedIn', Icon: LinkedInIcon },
                { href: '[TBC-FACEBOOK]', label: 'Facebook', Icon: FacebookIcon },
                { href: '[TBC-INSTAGRAM]', label: 'Instagram', Icon: InstagramIcon },
              ].map(({ href, label, Icon: SocialIcon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  style={{ color: 'rgba(255,255,255,0.5)', display: 'flex', transition: 'color 0.15s' }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,1)'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  <SocialIcon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Employer Sponsored */}
          <AccordionCol id="employer" heading="Employer Sponsored">
            <nav aria-label="Employer Sponsored navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { label: 'Employer Sponsored Visas (hub)', route: ROUTE.employerSponsoredVisas },
                  { label: 'Employer Nomination Scheme', route: ROUTE.employerNominationScheme },
                  { label: '186 Skill Requirements', route: ROUTE.skill186Requirements },
                  { label: '186 Occupations List', route: ROUTE.occupationList186 },
                  { label: 'Skills in Demand', route: ROUTE.skillsInDemandVisa },
                  { label: '482 to PR Pathway', route: ROUTE.pathway482ToPR },
                  { label: 'Standard Business Sponsorship', route: ROUTE.standardBusinessSponsorship },
                  { label: 'Core Skills Occupation List', route: ROUTE.coreSkillsOccupationList },
                ].map((lk) => (
                  <li key={lk.label}>
                    <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                  </li>
                ))}
              </ul>
            </nav>
          </AccordionCol>

          {/* Column 3: Skilled Migration */}
          <AccordionCol id="skilled" heading="Skilled Migration">
            <nav aria-label="Skilled Migration navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { label: 'Skilled Migration (hub)', route: ROUTE.skilledMigration },
                  { label: 'Skilled Independent', route: ROUTE.skilledIndependent189 },
                  { label: 'Skilled Nominated', route: ROUTE.skilledNominated190 },
                  { label: 'Skilled Work Regional (Provisional)', route: ROUTE.skilledWorkRegional491 },
                  { label: 'Temporary Graduate', route: ROUTE.temporaryGraduate485 },
                  { label: 'Points Test Explained', route: ROUTE.pointsTest },
                  { label: 'Skills Assessment', route: ROUTE.skillsAssessment },
                  { label: 'State Nomination Requirements', route: ROUTE.stateNomination },
                  { label: 'English Requirements', route: ROUTE.englishRequirements },
                ].map((lk) => (
                  <li key={lk.label}>
                    <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                  </li>
                ))}
              </ul>
            </nav>
          </AccordionCol>

          {/* Column 4: Student + Partner & Family */}
          <AccordionCol id="student-partner" heading="Student Visas">
            <nav aria-label="Student Visas navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { label: 'Student Visas (hub)', route: ROUTE.studentVisas },
                  { label: 'Student Visa Detail', route: ROUTE.studentVisa500 },
                  { label: 'Genuine Student Requirement', route: ROUTE.genuineStudentRequirement },
                  { label: 'Student to PR Pathway', route: ROUTE.studentToPRPathway },
                ].map((lk) => (
                  <li key={lk.label}>
                    <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                  </li>
                ))}
              </ul>
            </nav>

            {/* Sub-section spacer + Partner heading */}
            <div style={{ marginTop: 20 }}>
              <ColHeading>Partner &amp; Family</ColHeading>
              <nav aria-label="Partner and Family navigation">
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    { label: 'Partner and Family (hub)', route: ROUTE.partnerFamilyVisas },
                    { label: 'Partner Visa Onshore', route: ROUTE.partnerVisa820801 },
                    { label: 'Partner Visa Offshore', route: ROUTE.partnerVisa309100 },
                    { label: 'Prospective Marriage', route: ROUTE.prospectiveMarriage300 },
                    { label: 'Partner Visa Evidence Guide', route: ROUTE.partnerVisaEvidence },
                  ].map((lk) => (
                    <li key={lk.label}>
                      <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </AccordionCol>

          {/* Column 5: Visitor/Other + Reviews + Practice */}
          <AccordionCol id="other" heading="Visitor &amp; Other">
            <nav aria-label="Visitor and Other navigation">
              <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                {[
                  { label: 'Bridging Visas', route: ROUTE.bridgingVisas },
                  { label: 'Australian Citizenship', route: ROUTE.australianCitizenship },
                ].map((lk) => (
                  <li key={lk.label}>
                    <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                  </li>
                ))}
              </ul>
            </nav>

            <div style={{ marginTop: 20 }}>
              <ColHeading>Reviews &amp; Complex</ColHeading>
              <nav aria-label="Reviews and Complex navigation">
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  {[
                    { label: 'Visa Refusal and Review (hub)', route: ROUTE.visaRefusalReview },
                    { label: 'ART Review', route: ROUTE.artReview },
                  ].map((lk) => (
                    <li key={lk.label}>
                      <ColLink label={lk.label} onClick={() => navigate(lk.route)} />
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div style={{ marginTop: 20 }}>
              <ColHeading>Practice</ColHeading>
              <nav aria-label="Practice navigation">
                <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
                  <li>
                    <ColLink label="About the Practice" href="#" />
                  </li>
                  <li>
                    <ColLink label="Resources" onClick={() => navigate('resources')} />
                  </li>
                  <li>
                    <ColLink label="Guides" onClick={() => navigate('guides')} />
                  </li>
                  <li>
                    <ColLink label="Blog" onClick={() => navigate('blog')} />
                  </li>
                  <li>
                    <ColLink label="Checklists" onClick={() => navigate('checklists')} />
                  </li>
                  <li>
                    <ColLink label="Tools" onClick={() => navigate('tools')} />
                  </li>
                  <li>
                    <ColLink label="Contact" href="#" />
                  </li>
                  <li>
                    <ColLink
                      label="MARA Verification"
                      href="https://www.mara.gov.au/"
                      target="_blank"
                    />
                  </li>
                </ul>
              </nav>
            </div>
          </AccordionCol>
        </div>
      </div>

      {/* ── Band 4: Australia keyword / location row ─────────────────── */}
      <div style={{ background: NAVY, borderTop: '1px solid rgba(255,255,255,0.07)', padding: '20px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto' }}>
          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.35)',
              marginBottom: 10,
            }}
          >
            Visa Services Across Australia
          </div>
          <nav aria-label="Service locations">
            <ul
              className="footer-location-row"
              style={{
                listStyle: 'none',
                margin: 0,
                padding: 0,
                display: 'flex',
                flexWrap: 'wrap',
                gap: '4px 0',
              }}
            >
              {locations.map((loc, i) => (
                <Fragment key={loc.label}>
                  <li>
                    <button
                      onClick={() => navigate(loc.route)}
                      style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        fontSize: 13,
                        color: 'rgba(255,255,255,0.45)',
                        fontFamily: "'Gilroy', sans-serif",
                        padding: 0,
                        transition: 'color 0.15s',
                        whiteSpace: 'nowrap',
                      }}
                      onMouseEnter={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                      }}
                      onMouseLeave={(e) => {
                        ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.45)'
                      }}
                    >
                      {loc.label}
                    </button>
                  </li>
                  {i < locations.length - 1 && (
                    <li aria-hidden="true">
                      <span style={{ fontSize: 13, color: 'rgba(255,255,255,0.2)', padding: '0 10px' }}>
                        ·
                      </span>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* ── Band 5: Legal bar ────────────────────────────────────────── */}
      <div style={{ background: NAVY_DARK, padding: '20px 48px' }}>
        <div style={{ maxWidth: 1300, margin: '0 auto', textAlign: 'center' }}>
          {/* Row 1 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '0 6px',
              marginBottom: 8,
            }}
          >
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>
              © 2026 Nanak Migration Group Pty Ltd. All rights reserved.
            </span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>|</span>
            <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)', whiteSpace: 'nowrap' }}>
              ABN 54 674 937 476 · ACN 674 937 476
            </span>
            {['Privacy Policy', 'Terms of Use', 'Accessibility', 'Sitemap'].map((lbl) => (
              <Fragment key={lbl}>
                <span style={{ fontSize: 12, color: 'rgba(255,255,255,0.2)' }}>|</span>
                <a
                  href="#"
                  style={{
                    fontSize: 12,
                    color: 'rgba(255,255,255,0.5)',
                    textDecoration: 'none',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = '#ffffff'
                  }}
                  onMouseLeave={(e) => {
                    ;(e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.5)'
                  }}
                >
                  {lbl}
                </a>
              </Fragment>
            ))}
          </div>
          {/* Row 2 */}
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.5)' }}>
            General information only. Not legal or migration advice. Consult a registered migration
            agent before acting. Content current as at July 2026.
          </div>
        </div>
      </div>
    </footer>
  )
}
