import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD, CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'
const TEAL = CAT_EMPLOYER
const ACCENT = CAT_EMPLOYER

// ---------------------------------------------------------------------------
// Icon component
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const REGIONAL_AREAS = [
  { state: 'WA', label: 'All regional' },
  { state: 'SA', label: 'All regional' },
  { state: 'TAS', label: 'All regional' },
  { state: 'NT', label: 'All regional' },
  { state: 'ACT', label: 'Canberra included' },
  { state: 'QLD', label: 'Regional (excl. Brisbane CBD)' },
  { state: 'NSW', label: 'Regional (excl. Sydney / Newcastle / Wollongong CBDs)' },
  { state: 'VIC', label: 'Regional (excl. Melbourne)' },
]

const STATS = [
  { icon: 'clock', value: '5 Years', label: 'Provisional visa length' },
  { icon: 'trending', value: '3 Years', label: 'To 191 PR eligibility' },
  { icon: 'mappin', value: 'Regional', label: 'Must live & work' },
  { icon: 'user', value: 'Under 45', label: 'Age requirement' },
]

const ELIGIBILITY = [
  { icon: 'briefcase', title: 'Approved Sponsor', body: 'Your employer must be an approved sponsor located in a designated regional area of Australia.' },
  { icon: 'list', title: 'Eligible Occupation', body: 'Your occupation must appear on the MLTSSL or STSOL plus the regional occupation list.' },
  { icon: 'file', title: 'Skills Assessment', body: 'A positive skills assessment from the relevant assessing authority is required before lodging.' },
  { icon: 'dollar', title: 'TSMIT Compliance', body: 'Salary must meet the Temporary Skilled Migration Income Threshold (~$73,150 p.a.).' },
  { icon: 'globe', title: 'English Language', body: 'At least "competent" English (IELTS 6.0 in each band, or equivalent).' },
  { icon: 'user', title: 'Age Under 45', body: 'You must be under 45 years of age at the time of invitation or application.' },
]

const STREAMS = [
  {
    title: 'Employer Sponsored Stream',
    icon: 'briefcase',
    body: 'Your employer nominates you directly. The most common pathway — the employer must be an approved sponsor in a designated regional area and the role must be on the eligible occupation list.',
  },
  {
    title: 'Labour Agreement Stream',
    icon: 'layers',
    body: 'Used when a formal Labour Agreement exists between an employer and the Australian Government. Allows sponsorship of occupations or under terms not available through standard sponsorship.',
  },
]

const STEPS = [
  { num: 1, title: 'Skills Assessment', body: 'Obtain a positive skills assessment from the relevant assessing authority for your occupation.' },
  { num: 2, title: 'Employer Nominates', body: 'Your approved regional employer lodges a nomination application for the subclass 494.' },
  { num: 3, title: 'Visa Application', body: 'Lodge your 494 visa application after your employer\'s nomination is approved.' },
  { num: 4, title: 'Arrive & Work Regionally', body: 'Live and work in a designated regional area for at least 3 years on a full-time basis.' },
  { num: 5, title: 'Apply for Subclass 191', body: 'After 3 years, apply for permanent residence through the Subclass 191 visa.' },
]

const CONSIDERATIONS = [
  { icon: 'alert', title: 'You must stay regional', body: 'Relocating to a major excluded metro area while on the 494 will jeopardise your pathway to the 191 PR.' },
  { icon: 'shield', title: 'Employer ties', body: 'You are tied to your sponsoring employer unless you obtain a new nomination. Job changes require a new employer nomination.' },
  { icon: 'calendar', title: '191 waiting period', body: 'The 3-year regional residence requirement is strictly enforced. Ensure you keep records of residence and employment.' },
  { icon: 'info', title: 'Family members', body: 'Secondary applicants (spouse, children) can be included in the 494 and can also transition to the 191.' },
]

const FAQS = [
  {
    q: 'What counts as a "designated regional area"?',
    a: 'Most of Australia outside the major CBDs qualifies. Specifically excluded are the Sydney, Melbourne, and Brisbane CBD areas, as well as the Newcastle and Wollongong CBDs. Gold Coast, Adelaide, Hobart, Darwin, Canberra, and all of WA, SA, TAS, and NT are regional. Check the Department of Home Affairs postcode checker for specific locations.',
  },
  {
    q: 'Can I move to a different regional area while on the 494?',
    a: 'Yes — you can move between designated regional areas, but you must continue to live AND work in a designated regional area. You will need a new employer nomination if you change employers. Moving to an excluded metro area would breach your visa conditions.',
  },
  {
    q: 'What are the 494-to-191 requirements?',
    a: 'To be eligible for the Subclass 191, you must: (1) hold or have held the 494 visa, (2) have lived and worked in a designated regional area for at least 3 years, and (3) meet income requirements during that period. Your employer must also confirm your employment.',
  },
  {
    q: 'Can my family come with me?',
    a: 'Yes. Your spouse/de facto partner and dependent children can be included as secondary applicants on your 494. They can live, work, and study in Australia, and they may also be eligible for the 191 PR when you apply.',
  },
  {
    q: 'How is the 494 different from the 482 TSS visa?',
    a: 'The 482 is not restricted to regional areas and has no direct permanent residence pathway (unless transitioning via 186 TRT). The 494 is regional-only, provisional for 5 years, and has a clearer pathway to permanent residence through the 191 after 3 years of regional living and working.',
  },
  {
    q: 'Is a skills assessment always required?',
    a: 'Yes — unlike the 482 where some occupations are exempt, the 494 requires a positive skills assessment from the relevant assessing authority regardless of your occupation or employer. This must be obtained before the visa application is lodged.',
  },
]

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function RegionalEmployer494Page({ navigate }: { navigate: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#f8fafc', minHeight: '100vh', color: '#1E1E2A' }}>
      {/* Google Fonts */}
      <style>{`
        `}</style>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <div style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}>Home</button>
          <span>›</span>
          <span>Employer Sponsored</span>
          <span>›</span>
          <span style={{ color: '#1B2B5E', fontWeight: 500 }}>Skilled Employer Sponsored Regional (494)</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        background: HERO_GRAD,
        position: 'relative', overflow: 'hidden',
        padding: '72px 24px 64px',
      }}>

        <div style={{ maxWidth: 1200, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 48, alignItems: 'start' }}>
            {/* Left column */}
            <div>
              {/* Pill badge */}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                color: GOLD, borderRadius: 100, padding: '4px 14px',
                fontSize: 14, fontWeight: 600, marginBottom: 20,
              }}>
                <Icon name="mappin" size={14} color={GOLD} /> Regional Provisional Visa
              </span>

              {/* H1 */}
              <h1 style={{
                fontFamily: "'Gilroy', sans-serif",
                fontSize: 'clamp(34px, 5vw, 54px)',
                fontWeight: 800, color: NAVY,
                lineHeight: 1.15, marginBottom: 24,
              }}>
                Subclass 494 — <em style={{ color: GOLD, fontStyle: 'italic' }}>Skilled Employer Sponsored Regional</em>
              </h1>

              {/* Answer-first card */}
              <div style={{
                background: '#fff',
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: '0 12px 12px 0',
                padding: '20px 24px',
                marginBottom: 24,
              }}>
                <p style={{ color: '#374151', fontSize: 17, lineHeight: 1.7, margin: 0 }}>
                  The subclass 494 is a <strong style={{ color: NAVY }}>5-year provisional employer-sponsored visa</strong> for regional Australia. After three years of living and working in a designated regional area with an approved sponsor, holders can apply for the <strong style={{ color: NAVY }}>subclass 191 permanent visa</strong>.
                </p>
              </div>

              {/* Body copy */}
              <p style={{ color: '#4b5563', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
                Designed to address labour shortages outside major cities, the 494 offers a direct and reliable pathway to permanent residence for skilled workers willing to commit to regional Australia.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button style={{
                  background: GOLD, color: NAVY_DARK, border: 'none',
                  borderRadius: 10, padding: '14px 28px', fontSize: 16,
                  fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon name="zap" size={16} color={NAVY_DARK} /> Check My Eligibility
                </button>
                <button style={{
                  background: 'transparent',
                  border: `2px solid ${NAVY}30`,
                  color: NAVY, borderRadius: 10, padding: '14px 28px',
                  fontSize: 16, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon name="file" size={16} color={NAVY} /> Download Guide
                </button>
              </div>
            </div>

            {/* Right column — Regional Area Checker widget */}
            <div style={{
              background: '#fff',
              border: '1px solid #e8edf6',
              borderRadius: 16, padding: '28px 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <Icon name="mappin" size={20} color={GOLD} />
                <h3 style={{ color: NAVY, fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, margin: 0 }}>
                  Regional Area Quick Guide
                </h3>
              </div>
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 18 }}>
                Most of Australia outside major CBDs qualifies. Check your state below.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {REGIONAL_AREAS.map((r) => {
                  const isFullRegional = ['WA', 'SA', 'TAS', 'NT'].includes(r.state)
                  const isIncluded = r.state === 'ACT'
                  return (
                    <div key={r.state} style={{
                      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                      background: '#f8fafc', borderRadius: 8,
                      padding: '10px 14px',
                      border: `1px solid #e8edf6`,
                    }}>
                      <span style={{ color: NAVY, fontWeight: 600, fontSize: 15 }}>{r.state}</span>
                      <span style={{
                        fontSize: 13, fontWeight: 600, padding: '3px 10px', borderRadius: 100,
                        background: isFullRegional || isIncluded
                          ? 'rgba(3,105,161,0.2)' : 'rgba(245,161,36,0.15)',
                        color: isFullRegional || isIncluded ? TEAL : GOLD,
                        border: `1px solid ${isFullRegional || isIncluded ? 'rgba(3,105,161,0.3)' : 'rgba(245,161,36,0.3)'}`,
                      }}>
                        {r.label}
                      </span>
                    </div>
                  )
                })}
              </div>
              <p style={{ color: '#9ca3af', fontSize: 12, marginTop: 14, marginBottom: 0 }}>
                Always verify your specific postcode via the Department of Home Affairs postcode checker.
              </p>
            </div>
          </div>

          {/* Stats row */}
          <div style={{
            display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 0, marginTop: 56,
            border: '1px solid rgba(27,43,94,0.1)',
            borderRadius: 14, overflow: 'hidden',
          }}>
            {STATS.map((s, i) => (
              <div key={i} style={{
                padding: '24px 28px',
                borderRight: i < STATS.length - 1 ? '1px solid rgba(27,43,94,0.08)' : 'none',
                display: 'flex', flexDirection: 'column', gap: 8,
                background: '#fff',
              }}>
                <Icon name={s.icon} size={22} color={GOLD} />
                <span style={{ color: NAVY, fontFamily: "'Gilroy', sans-serif", fontSize: 27, fontWeight: 700 }}>{s.value}</span>
                <span style={{ color: '#6b7280', fontSize: 14 }}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content */}
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '64px 24px' }}>

        {/* Eligibility */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="shield" size={24} color={TEAL} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Eligibility Requirements
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            All criteria must be satisfied at time of application.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {ELIGIBILITY.map((e, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: '24px',
                border: '1px solid #e2e8f0',
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                display: 'flex', flexDirection: 'column', gap: 12,
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `rgba(3,105,161,0.1)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={e.icon} size={22} color={TEAL} />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, color: NAVY, margin: 0 }}>{e.title}</h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{e.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Streams */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="layers" size={24} color={TEAL} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Visa Streams
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            The 494 operates through two distinct streams.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {STREAMS.map((stream, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: '28px',
                border: '1px solid #e2e8f0',
                borderTop: `4px solid ${TEAL}`,
                boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <Icon name={stream.icon} size={22} color={TEAL} />
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 21, fontWeight: 700, color: NAVY, margin: 0 }}>{stream.title}</h3>
                </div>
                <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.7, margin: 0 }}>{stream.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pathway steps */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="trending" size={24} color={TEAL} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Pathway to Permanent Residence
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 40, marginLeft: 36 }}>
            The 494 is a stepping stone to the Subclass 191 permanent visa.
          </p>
          <div style={{ position: 'relative' }}>
            {STEPS.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, marginBottom: i < STEPS.length - 1 ? 0 : 0, position: 'relative' }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{
                    width: 48, height: 48, borderRadius: '50%',
                    background: step.num === 5 ? GOLD : TEAL,
                    color: step.num === 5 ? NAVY_DARK : '#fff',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontWeight: 800, fontSize: 19, flexShrink: 0,
                    fontFamily: "'Gilroy', sans-serif",
                  }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: 2, background: '#e2e8f0', flexGrow: 1, minHeight: 40 }} />
                  )}
                </div>
                <div style={{ paddingBottom: i < STEPS.length - 1 ? 32 : 0, paddingTop: 10 }}>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 6 }}>
                    {step.num === 5 && <><Icon name="star" size={14} color={GOLD} />{' '}</>}{step.title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: 16, lineHeight: 1.65, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key considerations */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="alert" size={24} color={GOLD} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Key Considerations
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Important factors to keep in mind throughout your 494 journey.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {CONSIDERATIONS.map((c, i) => (
              <div key={i} style={{
                background: 'rgba(245,161,36,0.08)', border: `1px solid rgba(245,161,36,0.25)`,
                borderRadius: 14, padding: '22px 24px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(245,161,36,0.15)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={c.icon} size={20} color={GOLD} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{c.title}</h3>
                  <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{c.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="info" size={24} color={TEAL} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Common questions about the Subclass 494 visa.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {FAQS.map((faq, i) => (
              <div key={i} style={{
                background: '#fff', border: '1px solid #e2e8f0',
                borderRadius: 12, overflow: 'hidden',
                boxShadow: openFaq === i ? '0 4px 16px rgba(0,0,0,0.08)' : 'none',
              }}>
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{
                    width: '100%', textAlign: 'left',
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer',
                    gap: 16,
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: 16, color: NAVY, lineHeight: 1.5 }}>{faq.q}</span>
                  <div style={{
                    width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
                    background: openFaq === i ? TEAL : '#f1f5f9',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    transition: 'background 0.2s',
                  }}>
                    <Icon name={openFaq === i ? 'minus' : 'plus'} size={14} color={openFaq === i ? '#fff' : '#64748b'} />
                  </div>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 24px 20px', borderTop: '1px solid #f1f5f9' }}>
                    <p style={{ color: '#475569', fontSize: 16, lineHeight: 1.75, margin: '16px 0 0' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* CTA Footer */}
      <footer style={{
        background: NAVY_DARK,
        borderTop: `4px solid ${GOLD}`,
        padding: '56px 24px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'rgba(245,161,36,0.15)', border: `1px solid rgba(245,161,36,0.3)`,
            color: GOLD, borderRadius: 100, padding: '4px 14px',
            fontSize: 14, fontWeight: 600, marginBottom: 20,
          }}>
            <Icon name="zap" size={14} color={GOLD} /> Free Initial Assessment
          </span>
          <h2 style={{
            fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 800,
            color: '#fff', marginBottom: 16,
          }}>
            Ready to Start Your Regional Journey?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Our registered migration agents can assess your eligibility for the Subclass 494 and map out your pathway to permanent residence.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: GOLD, color: NAVY_DARK, border: 'none',
              borderRadius: 10, padding: '16px 36px', fontSize: 17,
              fontWeight: 700, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon name="calendar" size={18} color={NAVY_DARK} /> Book a Consultation
            </button>
            <button style={{
              background: 'transparent', border: '2px solid rgba(255,255,255,0.25)',
              color: '#fff', borderRadius: 10, padding: '16px 36px',
              fontSize: 17, fontWeight: 600, cursor: 'pointer',
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <Icon name="phone" size={18} color="#fff" /> Call Us Now
            </button>
          </div>
        </div>
      </footer>
      <SiteFooter navigate={navigate} />
    </div>
  )
}
