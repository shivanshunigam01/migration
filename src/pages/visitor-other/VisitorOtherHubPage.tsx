import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import Icon from '@/components/ui/Icon'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  AnswerBox,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  RelatedPages,
} from '@/components/page'
import type { FaqItem, RelatedPage } from '@/components/page'
import { GOLD, NAVY, NAVY_DARK, NAVY_MID, HERO_GRAD, CAT_VISITOR } from '@/theme'
import ReviewedBy from '@/components/page/ReviewedBy'

const TEAL = CAT_VISITOR

// ── Mini-quiz result data ─────────────────────────────────────
type PassportGroup = 'au_nz' | 'eta' | 'evisitor' | 'other' | null

const QUIZ_RESULTS: Record<Exclude<PassportGroup, null>, { visa: string; note: string }> = {
  au_nz: {
    visa: 'Not applicable',
    note: 'Australian and New Zealand citizens do not require a visa to enter Australia. Australian citizens are automatically entitled to enter, and New Zealanders are granted a Special Category Visa on arrival.',
  },
  eta: {
    visa: 'Subclass 601 — Electronic Travel Authority (ETA)',
    note: 'Your passport is eligible for the ETA. This allows up to 3 months per visit within a 12-month period for tourism or business purposes. The service charge is approximately $20. Figures current as at 1 July 2026.',
  },
  evisitor: {
    visa: 'Subclass 651 — eVisitor',
    note: 'EU and eligible European passport holders can apply for a free eVisitor visa, valid for 12 months with stays of up to 3 months per visit. No fee applies. Figures current as at 1 July 2026.',
  },
  other: {
    visa: 'Subclass 600 — Visitor Visa',
    note: 'Your passport is not eligible for the ETA or eVisitor. The Subclass 600 Visitor Visa is the appropriate pathway, with stays of up to 12 months possible depending on circumstances. A government application charge applies (from ~$190). Figures current as at 1 July 2026.',
  },
}

const FAQS: FaqItem[] = [
  {
    question: 'Can I apply for a visitor visa if I have a previous refusal?',
    answer: 'A previous refusal does not automatically bar you from applying again, but it must be declared and will be considered. The key is addressing the reasons for the original refusal. In some cases, a period of time and changed circumstances can overcome an earlier refusal. Our agents assess each situation individually.',
  },
  {
    question: 'Can a visitor visa be extended onshore?',
    answer: 'The Subclass 600 can sometimes be extended onshore by applying for a new 600 visa before your current one expires, provided your circumstances are compelling. The ETA (601) and eVisitor (651) generally cannot be extended onshore — you would need to depart and re-enter. Extensions are not guaranteed.',
  },
  {
    question: 'Can my family visit me while I am on a temporary work visa?',
    answer: 'Yes — family members can apply for a visitor visa independently. Some temporary work visas allow family members to be included as secondary applicants with work and study rights, but a visitor visa is the typical route for parents or siblings visiting.',
  },
  {
    question: 'What is the No Further Stay condition (Condition 8503)?',
    answer: 'Condition 8503 prevents you from applying for another visa in Australia. It is often placed on visitor visas. In exceptional circumstances, a waiver can be requested, but these are difficult to obtain. If your circumstances have changed significantly, contact us to discuss.',
  },
  {
    question: 'How long can I stay in Australia on an ETA or eVisitor?',
    answer: 'Each entry is limited to 3 months. The visa itself is valid for 12 months (or until your passport expires, whichever is first), allowing multiple 3-month visits. The total number of entries is not limited. Figures current as at 1 July 2026.',
  },
  {
    question: 'I want to do volunteer work in Australia — do I need a different visa?',
    answer: 'It depends on the nature of the volunteer work. In many cases, genuine unpaid volunteer work with a registered charity is permissible on a visitor visa. However, work that displaces a paid position or provides a commercial benefit to an organisation may require a different visa class. Seek advice before committing.',
  },
]

const VISITOR_RELATED_PAGES: RelatedPage[] = [
  { title: 'Bridging Visas', desc: 'If you are already in Australia, understand your lawful status while an application is pending.', icon: 'shield', page: 'bridging-visas' },
  { title: 'Australian Citizenship', desc: 'After 4 years as a permanent resident, you may be eligible to apply for citizenship.', icon: 'star', page: 'australian-citizenship' },
  { title: 'Partner Visas (820/801)', desc: 'Onshore partner visa for those in a genuine relationship with an Australian citizen or PR holder.', icon: 'users', page: 'partner-visa-820' },
  { title: 'Student Visa (500)', desc: 'Studying in Australia — eligibility, the Genuine Student requirement, and what to prepare.', icon: 'book', page: 'student-visa' },
]

const CURRENT_AS_AT = '1 July 2026'

// ── Component ─────────────────────────────────────────────────
export default function VisitorOtherHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [passportGroup, setPassportGroup] = useState<PassportGroup>(null)

  const quizResult = passportGroup ? QUIZ_RESULTS[passportGroup] : null

  const visaFinderWidget = (
    <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 20, padding: '32px 28px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: TEAL, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 8 }}>Visa Finder</div>
      <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 600, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>Which visitor visa do you need?</div>
      <p style={{ fontSize: 13, color: '#6b7a8d', lineHeight: 1.6, marginBottom: 20 }}>What passport do you hold?</p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: quizResult ? 20 : 0 }}>
        {([
          { val: 'au_nz' as PassportGroup, label: 'Australia / New Zealand' },
          { val: 'eta' as PassportGroup, label: 'US, UK, Canada, Japan, Korea & other ETA-eligible countries' },
          { val: 'evisitor' as PassportGroup, label: 'EU member state or eligible European country' },
          { val: 'other' as PassportGroup, label: 'Other country' },
        ]).map(opt => {
          const isSelected = passportGroup === opt.val
          return (
            <button
              key={opt.val}
              onClick={() => setPassportGroup(opt.val)}
              style={{
                padding: '13px 18px',
                borderRadius: 10,
                border: `1.5px solid ${isSelected ? TEAL : `${NAVY}20`}`,
                background: isSelected ? `rgba(3,105,161,0.08)` : '#f8f9fc',
                color: isSelected ? TEAL : NAVY,
                fontSize: 13,
                fontWeight: isSelected ? 600 : 500,
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: "'Gilroy', sans-serif",
                transition: 'all 0.15s',
              }}
            >
              {opt.label}
            </button>
          )
        })}
      </div>

      {quizResult && (
        <div style={{ background: `rgba(3,105,161,0.07)`, border: `1.5px solid rgba(3,105,161,0.25)`, borderRadius: 12, padding: '18px 18px' }}>
          <div style={{ fontSize: 10, fontWeight: 700, color: TEAL, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>Recommended Visa</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{quizResult.visa}</div>
          <p style={{ fontSize: 12, color: '#4b5563', lineHeight: 1.65, margin: '0 0 14px' }}>{quizResult.note}</p>
          <button
            onClick={() => navigate('home')}
            style={{ display: 'block', width: '100%', textAlign: 'center', backgroundColor: GOLD, color: NAVY_DARK, padding: '11px', borderRadius: 8, border: 'none', cursor: 'pointer', fontSize: 13, fontWeight: 700, fontFamily: "'Gilroy', sans-serif" }}
          >
            Get visa advice →
          </button>
        </div>
      )}

      <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 16, lineHeight: 1.5 }}>
        Figures current as at 1 July 2026 — verify with Home Affairs
      </p>
    </div>
  )

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: '#1a1a2e' }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other Visas' },
        ]}
      />

      <PageHero
        variant="flagship"
        eyebrow="Visitor & Short-Stay Visas"
        title={<>Visit Australia.<br /><em style={{ fontStyle: 'italic', color: TEAL }}>The right way.</em></>}
        deck="Whether you're visiting family, attending a business event, or holidaying, choosing the wrong visa or missing a condition can lead to refusal or future bans. We get it right the first time."
        primaryCta={{ label: 'Get visa advice', page: 'home' }}
        accent={TEAL}
        currentAsAt={CURRENT_AS_AT}
        rightColumn={visaFinderWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Visitor visas and other temporary visa categories cover a range of purposes — tourism, business visits, transit, and working holiday travel. The main visitor visa is the Visitor visa (subclass 600), which allows stays of up to 12 months depending on the stream applied for. Visitor visas do not generally carry work rights.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── SECTION 1: Visa Comparison ───────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '80px 32px', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>Three Options</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(28px, 3.5vw, 42px)', fontWeight: 700, color: NAVY, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              Visitor Visa Comparison
            </h2>
            <p style={{ fontSize: 15, color: '#6b7a8d', lineHeight: 1.65, maxWidth: 540, margin: '0 auto' }}>
              Australia offers three main visitor visa pathways. The right one depends on your passport, the length of your stay, and your circumstances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {/* Subclass 600 */}
            <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #e5eaf4', boxShadow: '0 4px 20px rgba(27,43,94,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 13, background: `rgba(3,105,161,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="calendar" size={26} color={TEAL} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: TEAL, background: `rgba(3,105,161,0.1)`, border: `1px solid rgba(3,105,161,0.3)`, borderRadius: 100, padding: '4px 10px', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Any Nationality</span>
                </div>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass 600</div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.25 }}>Visitor Visa</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {[
                    { label: 'Max Stay', val: 'Up to 12 months' },
                    { label: 'Applies', val: 'Any nationality' },
                    { label: 'Cost', val: '~$190 (primary)' },
                    { label: 'Stream', val: 'Tourist / Business' },
                  ].map(item => (
                    <div key={item.label} style={{ background: '#f8fafd', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: NAVY, fontWeight: 600, lineHeight: 1.3 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#6b7a8d', lineHeight: 1.7, margin: '0 0 16px' }}>
                  Best for long stays, complex circumstances, business visitors, and people from countries not eligible for the ETA or eVisitor.
                </p>
              </div>
              <div style={{ padding: '0 28px 24px' }}>
                <button
                  onClick={() => navigate('visitor-visa')}
                  style={{ width: '100%', padding: '12px', borderRadius: 9, border: `1.5px solid ${TEAL}`, background: 'transparent', color: TEAL, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = TEAL; el.style.color = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = TEAL }}
                >
                  Learn more →
                </button>
              </div>
            </div>

            {/* Subclass 601 */}
            <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #e5eaf4', boxShadow: '0 4px 20px rgba(27,43,94,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column', position: 'relative' }}>
              {/* Coming soon overlay badge */}
              <div style={{ position: 'absolute', top: 18, right: 18, background: '#f5a124', color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 100, padding: '4px 10px', zIndex: 2 }}>
                Coming Soon
              </div>
              <div style={{ padding: '28px 28px 24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 13, background: `rgba(3,105,161,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="globe" size={26} color={TEAL} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#6b7a8d', background: '#f0f2f8', border: '1px solid #e5eaf4', borderRadius: 100, padding: '4px 10px', letterSpacing: '0.04em', whiteSpace: 'nowrap', marginRight: 72 }}>38 Countries</span>
                </div>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass 601</div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.25 }}>Electronic Travel Authority (ETA)</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {[
                    { label: 'Stay per visit', val: 'Up to 3 months' },
                    { label: 'Validity', val: '12 months' },
                    { label: 'Cost', val: '~$20 service charge' },
                    { label: 'Multiple entry', val: 'Yes' },
                  ].map(item => (
                    <div key={item.label} style={{ background: '#f8fafd', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: NAVY, fontWeight: 600, lineHeight: 1.3 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#6b7a8d', lineHeight: 1.7, margin: '0 0 8px' }}>
                  For passport holders from 38 eligible countries including the US, UK, Canada, Japan, and South Korea. Best for tourism, short business visits, and transit.
                </p>
                <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.6 }}>Eligible countries: USA, UK, Canada, Japan, South Korea, Singapore, Hong Kong, Malaysia, Brunei, and more.</p>
              </div>
            </div>

            {/* Subclass 651 */}
            <div style={{ background: '#fff', borderRadius: 18, border: '1.5px solid #e5eaf4', boxShadow: '0 4px 20px rgba(27,43,94,0.06)', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div style={{ padding: '28px 28px 24px', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 16 }}>
                  <div style={{ width: 52, height: 52, borderRadius: 13, background: `rgba(3,105,161,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="clock" size={26} color={TEAL} />
                  </div>
                  <span style={{ fontSize: 11, fontWeight: 700, color: '#f5a124', background: 'rgba(245,161,36,0.1)', border: '1px solid rgba(245,161,36,0.3)', borderRadius: 100, padding: '4px 10px', letterSpacing: '0.04em', whiteSpace: 'nowrap' }}>Free</span>
                </div>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass 651</div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.25 }}>eVisitor</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginBottom: 16 }}>
                  {[
                    { label: 'Stay per visit', val: 'Up to 3 months' },
                    { label: 'Validity', val: '12 months' },
                    { label: 'Cost', val: 'Free' },
                    { label: 'Applies', val: 'EU/EEA + 9 others' },
                  ].map(item => (
                    <div key={item.label} style={{ background: '#f8fafd', borderRadius: 8, padding: '10px 12px' }}>
                      <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                      <div style={{ fontSize: 12, color: NAVY, fontWeight: 600, lineHeight: 1.3 }}>{item.val}</div>
                    </div>
                  ))}
                </div>
                <p style={{ fontSize: 13, color: '#6b7a8d', lineHeight: 1.7, margin: '0 0 8px' }}>
                  For EU/EEA passport holders and 9 other eligible European countries. Free of charge for tourism and short business visits.
                </p>
                <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.6 }}>Eligible countries include all EU member states, Iceland, Liechtenstein, Norway, Switzerland, and others.</p>
              </div>
              <div style={{ padding: '0 28px 24px' }}>
                <button
                  onClick={() => navigate('visitor-visa')}
                  style={{ width: '100%', padding: '12px', borderRadius: 9, border: `1.5px solid ${TEAL}`, background: 'transparent', color: TEAL, fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.2s' }}
                  onMouseEnter={e => { const el = e.currentTarget; el.style.background = TEAL; el.style.color = '#fff' }}
                  onMouseLeave={e => { const el = e.currentTarget; el.style.background = 'transparent'; el.style.color = TEAL }}
                >
                  Learn more →
                </button>
              </div>
            </div>
          </div>

          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 20, textAlign: 'center', lineHeight: 1.6 }}>
            Fees current as at 1 July 2026 — verify with Home Affairs
          </p>
        </div>
      </section>

      {/* ── SECTION 2: Genuine Visitor Requirement ───────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'start' }}>

            {/* Left — explanation */}
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>Assessment Criteria</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: NAVY, margin: '0 0 20px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                What the Department assesses
              </h2>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                All visitor visa applicants must satisfy the Department of Home Affairs that they hold a genuine intention to visit temporarily. This is known as the "genuine visitor" test, and it underpins every visitor visa decision.
              </p>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75 }}>
                The Department considers your ties to your home country — employment, family, property ownership — alongside your financial capacity to fund the visit, the clarity of your purpose, and your immigration history, including any prior visa refusals or breaches of conditions. A well-prepared application directly addresses each of these factors with evidence.
              </p>
            </div>

            {/* Right — checklist */}
            <div>
              <div style={{ background: '#f8fafd', borderRadius: 16, border: '1.5px solid #e5eaf4', padding: '28px 28px', marginBottom: 20 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>What strengthens your application</div>
                {[
                  'Demonstrated ties to home country (employment, family, property)',
                  'Sufficient funds for the visit (bank statements)',
                  'Clear purpose and itinerary',
                  'Previous compliance with Australian visa conditions',
                  'Invitation letter from Australian host (for family visits)',
                  'Travel insurance for the period of stay',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(245,161,36,0.15)', border: '1px solid rgba(245,161,36,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={11} color="#f5a124" />
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>

              <div style={{ background: 'rgba(220,38,38,0.08)', borderRadius: 16, border: '1.5px solid rgba(220,38,38,0.2)', padding: '24px 28px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: '#dc2626', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 16 }}>Common refusal factors</div>
                {[
                  'Previous visa refusals or overstays',
                  'Unclear purpose of visit',
                  'Insufficient financial evidence',
                  'Risk of non-departure',
                ].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="x" size={10} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 3: Business Visitor vs Work ──────────────── */}
      <section style={{ background: `linear-gradient(160deg, ${NAVY_DARK} 0%, ${NAVY} 55%, ${NAVY_MID} 100%)`, padding: '80px 32px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px)', backgroundSize: '24px 24px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>Important Distinction</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: '#fff', margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              Business Visitor vs. Work
            </h2>
            <p style={{ fontSize: 15, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65, maxWidth: 560, margin: '0 auto' }}>
              A visitor visa permits some business activities — but performing work for an Australian entity is prohibited. Understanding the line is critical.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            {/* Can do */}
            <div style={{ background: 'rgba(245,161,36,0.07)', border: '1px solid rgba(245,161,36,0.25)', borderRadius: 18, padding: '28px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(245,161,36,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={16} color="#f5a124" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: 'rgba(245,161,36,0.5)' }}>What you CAN do on a visitor visa</div>
              </div>
              {[
                'Attend meetings, conferences, and trade fairs',
                'Conduct negotiations on behalf of an overseas entity',
                'Check on your business interests',
                'Short-term training you receive (not deliver)',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                  <Icon name="check" size={14} color="rgba(245,161,36,0.5)" />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Cannot do */}
            <div style={{ background: 'rgba(220,38,38,0.07)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: 18, padding: '28px 28px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(220,38,38,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="x" size={16} color="#dc2626" />
                </div>
                <div style={{ fontSize: 14, fontWeight: 700, color: '#dc2626' }}>What you CANNOT do (constitutes work)</div>
              </div>
              {[
                'Perform services for an Australian entity',
                'Receive payment from an Australian source',
                'Fill a position in an Australian business',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 12 }}>
                  <Icon name="x" size={14} color="#dc2626" />
                  <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
              <div style={{ marginTop: 20, background: 'rgba(220,38,38,0.12)', border: '1px solid rgba(220,38,38,0.3)', borderRadius: 10, padding: '14px 16px' }}>
                <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.65)', lineHeight: 1.65, margin: 0 }}>
                  If your activities could constitute work, a different visa class is required. Contact us for advice.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 4: Working Holiday Visas ─────────────────── */}
      <section style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 64, alignItems: 'start' }}>
            <div>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>Working Holiday</div>
              <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3vw, 38px)', fontWeight: 700, color: NAVY, margin: '0 0 16px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>
                Work while you travel
              </h2>
              <p style={{ fontSize: 14, color: '#6b7a8d', lineHeight: 1.7, marginBottom: 20 }}>
                Australia's Working Holiday programs allow young people from eligible countries to live, work, and travel in Australia for up to 12 months — extendable with regional work.
              </p>
              <p style={{ fontSize: 11, color: '#9ca3af', lineHeight: 1.6 }}>
                Age limits and eligible countries current as at 1 July 2026 — verify with Home Affairs
              </p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
              {/* 417 */}
              <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #e5eaf4', padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, background: '#f5a124', color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 100, padding: '3px 9px' }}>Coming Soon</div>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass 417</div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 14px', lineHeight: 1.25 }}>Working Holiday</h3>
                {[
                  { label: 'Age', val: '18–35 (up to 35 for some countries)' },
                  { label: 'Stay', val: '12 months, extendable to 2nd & 3rd year' },
                  { label: 'Work rights', val: 'One employer up to 6 months' },
                  { label: 'Key countries', val: 'USA, UK, Canada, Denmark, France, Germany, Ireland, Japan, Korea' },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: NAVY, fontWeight: 500, lineHeight: 1.4 }}>{item.val}</div>
                  </div>
                ))}
              </div>

              {/* 462 */}
              <div style={{ background: '#fff', borderRadius: 16, border: '1.5px solid #e5eaf4', padding: '24px 24px', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: 16, right: 16, background: '#f5a124', color: '#fff', fontSize: 10, fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase', borderRadius: 100, padding: '3px 9px' }}>Coming Soon</div>
                <div style={{ fontSize: 11, color: '#9ca3af', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: 4 }}>Subclass 462</div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 14px', lineHeight: 1.25 }}>Work and Holiday</h3>
                {[
                  { label: 'Age', val: '18–30' },
                  { label: 'Stay', val: '12 months, extendable' },
                  { label: 'Eligible', val: '44 eligible countries' },
                  { label: 'Key countries', val: 'Argentina, Thailand, USA (via 462), Vietnam & more' },
                ].map(item => (
                  <div key={item.label} style={{ marginBottom: 10 }}>
                    <div style={{ fontSize: 10, color: '#9ca3af', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 13, color: NAVY, fontWeight: 500, lineHeight: 1.4 }}>{item.val}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SECTION 5: Bridging and Status ───────────────────── */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>Status &amp; Pathways</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: '0 0 14px', letterSpacing: '-0.02em' }}>
              Bridging Visas &amp; Other Status Options
            </h2>
            <p style={{ fontSize: 15, color: '#6b7a8d', lineHeight: 1.65, maxWidth: 540, margin: '0 auto' }}>
              If you're already in Australia, your lawful status matters. These options may apply depending on your circumstances.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              {
                title: 'Bridging Visa',
                subtitle: 'Types A, B, C, E and R',
                desc: 'Maintains lawful status while a substantive visa application is processed. Type B allows travel out of Australia and return. The type granted depends on the circumstances and the substantive visa applied for.',
                icon: 'shield',
              },
              {
                title: 'Resident Return Visa',
                subtitle: 'Subclass 155 / 157',
                desc: "For permanent residents who need to re-enter Australia but whose travel facility has expired. Must still hold permanent residence or be eligible to apply. Subclass 157 is for urgent travel situations.",
                icon: 'home',
              },
              {
                title: 'Australian Citizenship',
                subtitle: 'After 4 years as PR',
                desc: 'After 4 years as a permanent resident (including 12 months as a PR holder, and no more than 12 months total spent outside Australia), you may be eligible to apply for citizenship. Eligibility requirements and good character criteria apply.',
                icon: 'star',
              },
            ].map(tile => (
              <div key={tile.title} style={{ background: '#f8fafd', borderRadius: 16, border: '1.5px solid #e5eaf4', padding: '28px 24px' }}>
                <div style={{ width: 48, height: 48, borderRadius: 13, background: `rgba(3,105,161,0.1)`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={tile.icon} size={24} color={TEAL} />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 4px', lineHeight: 1.25 }}>{tile.title}</h3>
                <div style={{ fontSize: 12, color: TEAL, fontWeight: 600, marginBottom: 12 }}>{tile.subtitle}</div>
                <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.7, margin: 0 }}>{tile.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: 11, color: '#9ca3af', marginTop: 20, textAlign: 'center', lineHeight: 1.6 }}>
            Conditions current as at 1 July 2026 — verify with Home Affairs
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section style={{ background: '#fff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: TEAL, marginBottom: 12 }}>FAQ</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(26px, 3.5vw, 40px)', fontWeight: 700, color: NAVY, margin: 0, letterSpacing: '-0.02em' }}>
              Visitor visa questions answered
            </h2>
          </div>
          <FaqAccordion items={FAQS} accent={TEAL} />
        </div>
      </section>

      <section style={{ background: '#f8fafd', padding: '64px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <RelatedPages pages={VISITOR_RELATED_PAGES} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Getting the right visa matters more than it looks."
        body="A visitor visa refusal or a condition breach can affect every future application to Australia. Our agents make sure your application is right from the start."
        primaryCta={{ label: 'Talk to a registered agent', page: 'home' }}
        secondaryCta={{ label: '← Back to Home', page: 'home' }}
        accent={TEAL}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
