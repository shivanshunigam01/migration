import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD, CAT_VISITOR, CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'

const ACCENT = CAT_VISITOR

// ---------------------------------------------------------------------------
// Icon component
// ---------------------------------------------------------------------------

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------
const STATS = [
  { icon: 'clock', value: 'Up to 12 mo', label: 'Maximum stay allowed' },
  { icon: 'layers', value: '3 Types', label: '600 / 601 / 651' },
  { icon: 'briefcase', value: 'No Work', label: 'Work rights' },
  { icon: 'shield', value: 'GTE Tested', label: 'Genuine temporary entrant' },
]

type VisaOption = 'eta' | 'evisitor' | 'subclass600' | null

interface VisaDetail {
  label: string
  cost: string
  processing: string
  stay: string
  work: string
  extra: string
}

const VISA_DETAILS: Record<'eta' | 'evisitor' | 'subclass600', VisaDetail> = {
  eta: {
    label: 'Subclass 601 — Electronic Travel Authority',
    cost: 'No visa application charge (service fee may apply ~AUD 20)',
    processing: 'Usually seconds to minutes; up to 6 days in some cases',
    stay: 'Up to 3 months per visit; multiple entry for 12 months',
    work: 'No work rights',
    extra: 'Eligible passports include: USA, UK, Canada, Singapore, Japan, South Korea, Malaysia, Brunei, Hong Kong and others. Applied for through a travel agent, airline or the Australian ETA app.',
  },
  evisitor: {
    label: 'Subclass 651 — eVisitor',
    cost: 'Free — no application fee',
    processing: 'Usually processed within a few days',
    stay: 'Up to 3 months per visit; multiple entry for 12 months',
    work: 'No work rights',
    extra: 'Available to passport holders of EU member states plus Andorra, Iceland, Liechtenstein, Monaco, Norway, San Marino, Switzerland, and Vatican City. Applied for online.',
  },
  subclass600: {
    label: 'Subclass 600 — Visitor Visa',
    cost: 'AUD 150–190 (Tourist stream); other streams vary',
    processing: 'Tourist: 17–26 days (75th percentile); can be faster or slower',
    stay: 'Up to 12 months (3 months common; 6–12 for sponsored family)',
    work: 'No work rights (limited business activities permitted)',
    extra: 'Streams: Tourist, Business Visitor, Sponsored Family, Approved Destination Status (ADS, for Chinese nationals). Strong GTE statement strongly recommended.',
  },
}

const VISA_600_STREAMS = [
  { name: 'Tourist Stream', body: 'For tourism, visiting friends/family, or recreational purposes. Most common stream for 600 applicants.' },
  { name: 'Business Visitor Stream', body: 'For attending conferences, negotiations, or exploratory business activities. No actual work for an Australian employer.' },
  { name: 'Sponsored Family Stream', body: 'For visitors sponsored by an approved Australian relative. May allow stays up to 12 months.' },
  { name: 'Approved Destination Status', body: 'For Chinese nationals travelling in approved tour groups. Applied for through an approved travel agency.' },
]

const REFUSAL_REASONS = [
  { icon: 'dollar', title: 'Insufficient funds', body: 'Unable to demonstrate adequate funds to support yourself for the duration of your stay.' },
  { icon: 'user', title: 'GTE not established', body: 'Failed to satisfy the officer that you intend to stay temporarily and will leave when required.' },
  { icon: 'alert', title: 'Prior visa refusals', body: 'Previous refusals of Australian or other visas must be declared and will be considered.' },
  { icon: 'shield', title: 'Health or character', body: 'Failure to meet health requirements or having a substantial criminal record.' },
  { icon: 'globe', title: 'Weak home country ties', body: 'Insufficient evidence of strong ties — employment, property, family — that would compel your return.' },
  { icon: 'file', title: 'Incomplete documentation', body: 'Missing or inconsistent supporting documents undermine the assessment.' },
]

const CONSIDERATIONS = [
  { icon: 'briefcase', title: 'No right to work', body: 'Visitor visas do not allow you to work in Australia. Limited business activities (meetings, conferences) are permitted but not employment.' },
  { icon: 'file', title: 'Study limit 3 months', body: 'You cannot undertake more than 3 months of study on a visitor visa. For longer study, you need a Student visa.' },
  { icon: 'clock', title: 'Medical treatment stream', body: 'The 600 has a specific Medical Treatment stream for those seeking medical care in Australia, with additional documentation requirements.' },
  { icon: 'calendar', title: 'Extension possibilities', body: 'It may be possible to extend a 600 onshore in limited circumstances; the 601 and 651 generally cannot be extended onshore.' },
]

const FAQS = [
  {
    q: 'What is the Genuine Temporary Entrant (GTE) requirement?',
    a: 'The GTE requirement asks you to demonstrate that your intention is genuinely to visit Australia temporarily — for tourism, business, or to visit family — and that you intend to leave when your visa expires. Officers assess this by looking at your ties to your home country (employment, property, family, community), your immigration history, your personal circumstances, and the length of your intended stay. A well-written GTE statement is essential for Subclass 600 applicants.',
  },
  {
    q: 'Can I extend my visitor visa while in Australia?',
    a: 'The Subclass 600 can sometimes be extended onshore by applying for a new 600 visa before your current one expires, provided your circumstances are compelling. The 601 (ETA) and 651 (eVisitor) generally cannot be extended onshore — you would need to depart and re-enter. Extensions are not guaranteed, and overstaying a visa has serious consequences including future bans.',
  },
  {
    q: 'Can I work on a visitor visa?',
    a: 'No. Working in Australia on a visitor visa is a breach of visa conditions and can result in cancellation and potential bans on future visa applications. Limited business activities — such as attending meetings, conferences, or negotiations — are generally permitted, but you cannot be employed by or provide services to an Australian business in exchange for remuneration.',
  },
  {
    q: 'Can I study on a visitor visa?',
    a: 'You can undertake study for up to 3 months on a visitor visa. If your course exceeds 3 months, you will need a Student visa (Subclass 500). Note that the 3-month limit applies to the total study undertaken in Australia on that particular visitor visa grant.',
  },
  {
    q: 'My previous visitor visa application was refused — can I apply again?',
    a: 'Yes, you can reapply, but you must disclose the previous refusal on your new application. Reapplying without addressing the reasons for the original refusal is unlikely to succeed. You should obtain the Department\'s refusal letter (which states the reasons), address each reason in your new application with evidence, and consider seeking professional migration advice to improve your prospects.',
  },
  {
    q: 'Can I come to Australia for medical treatment on a visitor visa?',
    a: 'The Subclass 600 has a Medical Treatment stream specifically for those seeking medical care in Australia. You will need a letter from an Australian medical practitioner confirming your treatment, evidence of sufficient funds to cover treatment and living costs, and evidence you plan to leave when your treatment is complete. The Assured Medical Income condition may apply, requiring evidence of ongoing funds.',
  },
]

// ---------------------------------------------------------------------------
// Main component
// ---------------------------------------------------------------------------
export default function VisitorVisaPage({ navigate }: { navigate: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [selectedVisa, setSelectedVisa] = useState<VisaOption>(null)

  const visaOptions: Array<{ id: 'eta' | 'evisitor' | 'subclass600'; label: string; desc: string }> = [
    { id: 'eta', label: 'ETA-eligible passport', desc: 'US, UK, Canada, Singapore, Japan, South Korea and more' },
    { id: 'evisitor', label: 'European passport', desc: 'EU member states and select European countries' },
    { id: 'subclass600', label: 'Neither of these', desc: 'All other nationalities — apply for Subclass 600' },
  ]

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
          <span>Visitor &amp; Other</span>
          <span>›</span>
          <span style={{ color: '#1B2B5E', fontWeight: 500 }}>Visitor Visa (600)</span>
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
                <Icon name="globe" size={14} color={GOLD} /> Temporary Entry — Tourism &amp; Business
              </span>

              {/* H1 */}
              <h1 style={{
                fontFamily: "'Gilroy', sans-serif",
                fontSize: 'clamp(34px, 5vw, 54px)',
                fontWeight: 800, color: NAVY,
                lineHeight: 1.15, marginBottom: 24,
              }}>
                Australian Visitor Visas — <em style={{ color: GOLD, fontStyle: 'italic' }}>600, 601 &amp; 651</em>
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
                  {"Australia's visitor visas allow temporary stays for tourism, business, or visiting family. The right visa depends on your passport — most eligible passport holders use the "}<strong style={{ color: NAVY }}>ETA (601)</strong>{" or "}<strong style={{ color: NAVY }}>eVisitor (651)</strong>{" without a formal application. Others apply for the "}<strong style={{ color: NAVY }}>Subclass 600</strong>.
                </p>
              </div>

              {/* Body copy */}
              <p style={{ color: '#4b5563', fontSize: 16, lineHeight: 1.75, marginBottom: 32 }}>
                Understanding which visa applies to your nationality — and preparing a strong application if you need the 600 — is the difference between a smooth visit and a stressful refusal.
              </p>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button style={{
                  background: GOLD, color: NAVY_DARK, border: 'none',
                  borderRadius: 10, padding: '14px 28px', fontSize: 16,
                  fontWeight: 700, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon name="zap" size={16} color={NAVY_DARK} /> Find My Visa Type
                </button>
                <button style={{
                  background: 'transparent',
                  border: `2px solid ${NAVY}30`,
                  color: NAVY, borderRadius: 10, padding: '14px 28px',
                  fontSize: 16, fontWeight: 600, cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: 8,
                }}>
                  <Icon name="file" size={16} color={NAVY} /> Download Checklist
                </button>
              </div>
            </div>

            {/* Right column — Visa Selector widget */}
            <div style={{
              background: '#fff',
              border: '1px solid #e8edf6',
              borderRadius: 16, padding: '28px 24px',
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <Icon name="globe" size={20} color={GOLD} />
                <h3 style={{ color: NAVY, fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, margin: 0 }}>
                  Which Visa Do I Need?
                </h3>
              </div>
              <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 20 }}>
                Select your passport situation to see the right visa for you.
              </p>

              {/* Radio options */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {visaOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedVisa(selectedVisa === opt.id ? null : opt.id)}
                    style={{
                      textAlign: 'left', background: 'none', border: 'none', cursor: 'pointer',
                      padding: 0,
                    }}
                  >
                    <div style={{
                      display: 'flex', alignItems: 'flex-start', gap: 12,
                      background: selectedVisa === opt.id ? `${ACCENT}15` : '#f8fafc',
                      border: `1px solid ${selectedVisa === opt.id ? `${ACCENT}50` : '#e8edf6'}`,
                      borderRadius: 10, padding: '12px 14px',
                      transition: 'background 0.15s, border-color 0.15s',
                    }}>
                      <div style={{
                        width: 18, height: 18, borderRadius: '50%', flexShrink: 0, marginTop: 2,
                        border: `2px solid ${selectedVisa === opt.id ? ACCENT : '#d1d5db'}`,
                        background: selectedVisa === opt.id ? ACCENT : 'transparent',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        {selectedVisa === opt.id && <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#fff' }} />}
                      </div>
                      <div>
                        <div style={{ color: NAVY, fontSize: 15, fontWeight: 600, lineHeight: 1.4 }}>{opt.label}</div>
                        <div style={{ color: '#6b7280', fontSize: 13, marginTop: 2 }}>{opt.desc}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>

              {/* Result panel */}
              {selectedVisa && (
                <div style={{
                  background: '#f8fafc', borderRadius: 10,
                  border: `1px solid ${ACCENT}30`,
                  padding: '16px',
                }}>
                  <p style={{ color: ACCENT, fontWeight: 700, fontSize: 15, marginBottom: 12 }}>
                    {VISA_DETAILS[selectedVisa].label}
                  </p>
                  {[
                    { label: 'Cost', value: VISA_DETAILS[selectedVisa].cost },
                    { label: 'Processing', value: VISA_DETAILS[selectedVisa].processing },
                    { label: 'Stay allowed', value: VISA_DETAILS[selectedVisa].stay },
                    { label: 'Work rights', value: VISA_DETAILS[selectedVisa].work },
                  ].map((row) => (
                    <div key={row.label} style={{
                      display: 'flex', gap: 8, marginBottom: 8,
                      fontSize: 14, lineHeight: 1.5,
                    }}>
                      <span style={{ color: '#9ca3af', minWidth: 80 }}>{row.label}</span>
                      <span style={{ color: NAVY, flex: 1 }}>{row.value}</span>
                    </div>
                  ))}
                  <p style={{ color: '#6b7280', fontSize: 13, marginTop: 10, marginBottom: 0, lineHeight: 1.6 }}>
                    {VISA_DETAILS[selectedVisa].extra}
                  </p>
                </div>
              )}
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

        {/* Visa types overview */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="layers" size={24} color={ACCENT} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              The Three Visitor Visa Types
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Australia operates three separate visitor visa frameworks — your passport determines which applies.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {(['eta', 'evisitor', 'subclass600'] as const).map((key) => {
              const detail = VISA_DETAILS[key]
              const accent = key === 'eta' ? GOLD : key === 'evisitor' ? ACCENT : CAT_EMPLOYER
              return (
                <div key={key} style={{
                  background: '#fff', borderRadius: 14, padding: '28px',
                  border: '1px solid #e2e8f0',
                  borderTop: `4px solid ${accent}`,
                  boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
                }}>
                  <span style={{
                    display: 'inline-block', fontSize: 13, fontWeight: 700,
                    color: accent, marginBottom: 12,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                  }}>
                    {key === 'eta' ? 'Subclass 601' : key === 'evisitor' ? 'Subclass 651' : 'Subclass 600'}
                  </span>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 14 }}>
                    {key === 'eta' ? 'Electronic Travel Authority' : key === 'evisitor' ? 'eVisitor' : 'Visitor Visa'}
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {[
                      { label: 'Cost', value: detail.cost },
                      { label: 'Processing', value: detail.processing },
                      { label: 'Max stay', value: detail.stay },
                      { label: 'Work rights', value: detail.work },
                    ].map((row) => (
                      <div key={row.label} style={{ fontSize: 15 }}>
                        <span style={{ color: '#94a3b8', fontSize: 13, display: 'block', marginBottom: 2 }}>{row.label}</span>
                        <span style={{ color: '#334155', fontWeight: 500 }}>{row.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Subclass 600 streams */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="list" size={24} color={ACCENT} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Subclass 600 Streams
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            The Subclass 600 has four streams — most applicants use the Tourist stream.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {VISA_600_STREAMS.map((s, i) => (
              <div key={i} style={{
                background: '#fff', borderRadius: 14, padding: '22px 24px',
                border: '1px solid #e2e8f0',
                display: 'flex', gap: 16, alignItems: 'flex-start',
                boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: 32, height: 32, borderRadius: 8, flexShrink: 0,
                  background: 'rgba(79,70,229,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontFamily: "'Gilroy', sans-serif", fontWeight: 700, color: ACCENT, fontSize: 15,
                }}>
                  {i + 1}
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{s.name}</h3>
                  <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common refusal reasons */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="alert" size={24} color={GOLD} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Common Refusal Reasons
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Address these issues proactively to maximise your chances of approval.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {REFUSAL_REASONS.map((r, i) => (
              <div key={i} style={{
                background: '#ffffff', border: `1px solid rgba(220,38,38,0.18)`,
                borderRadius: 14, padding: '22px 20px',
                display: 'flex', flexDirection: 'column', gap: 10,
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10,
                  background: 'rgba(220,38,38,0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={r.icon} size={20} color="#dc2626" />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: 0 }}>{r.title}</h3>
                <p style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65, margin: 0 }}>{r.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Key considerations */}
        <section style={{ marginBottom: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
            <Icon name="info" size={24} color={ACCENT} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Key Considerations
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Important rules and restrictions all visitor visa holders should know.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {CONSIDERATIONS.map((c, i) => (
              <div key={i} style={{
                background: '#ffffff', border: `1px solid rgba(79,70,229,0.18)`,
                borderRadius: 14, padding: '22px 24px',
                display: 'flex', gap: 16, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                  background: 'rgba(79,70,229,0.12)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={c.icon} size={20} color={ACCENT} />
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
            <Icon name="info" size={24} color={ACCENT} />
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 33, fontWeight: 700, color: NAVY, margin: 0 }}>
              Frequently Asked Questions
            </h2>
          </div>
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, marginLeft: 36 }}>
            Common questions about Australian visitor visas.
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
                    background: openFaq === i ? ACCENT : '#f1f5f9',
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
            <Icon name="shield" size={14} color={GOLD} /> Professional Migration Advice
          </span>
          <h2 style={{
            fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 800,
            color: '#fff', marginBottom: 16,
          }}>
            Unsure Which Visa Applies to You?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.7, marginBottom: 36 }}>
            Our migration team can assess your specific situation — including prior refusals, complex itineraries, medical stays, or sponsored visits — and help you put forward the strongest possible application.
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

