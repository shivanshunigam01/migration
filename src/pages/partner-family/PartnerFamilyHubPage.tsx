import React, { useState } from 'react'
import { GOLD, GOLD_LIGHT, NAVY, NAVY_DARK, NAVY_MID, NAVY_GRAD, HERO_GRAD, CAT_PARTNER, CAT_SKILLED, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import Icon from '@/components/ui/Icon'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
  RelatedPages,
} from '@/components/page'
import type { RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const CURRENT_AS_AT = 'August 2026'

const GREEN = GOLD
const ROSE = CAT_PARTNER
const PURPLE = CAT_SKILLED
const TEAL = CAT_EMPLOYER
const AMBER = GOLD

const DISCLAIMER = 'Figures current as at 1 July 2026 — verify with Home Affairs'

const PARTNER_RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)', desc: 'Apply for a partner visa while in Australia.', icon: 'heart', page: 'partner-visa-820-801' },
  { title: 'Partner Visa Offshore (309/100)', desc: 'Apply for a partner visa from outside Australia.', icon: 'plane', page: 'partner-visa-309-100' },
  { title: 'Prospective Marriage (300)', desc: 'Come to Australia to marry your partner.', icon: 'users', page: 'prospective-marriage-300' },
  { title: 'Partner Visa Evidence Guide', desc: 'What evidence to gather for your application.', icon: 'clipboard', page: 'partner-visa-evidence' },
]

/* ── Category panels ─────────────────────────────────────── */
const PARTNER_CARDS = [
  { code: '820/801', name: 'Partner Visa Onshore', tag: 'Temp → Permanent', tagColor: ROSE, body: 'For couples where the applicant is already in Australia. Grants temporary (820) then permanent (801) after approximately 2 years — one application, two stages.', route: null as string | null, note: '2-stage — applied once, assessed twice' },
  { code: '309/100', name: 'Partner Visa Offshore', tag: 'Temp → Permanent', tagColor: ROSE, body: 'For couples where the applicant is overseas at lodgement. The 309 grants temporary residence; the 100 permanent stage is assessed automatically after 2 years.', route: 'partner-visa-309-100' as string | null, note: 'Applicant must be offshore at time of lodgement' },
  { code: '300', name: 'Prospective Marriage', tag: 'Engaged couples', tagColor: AMBER, body: 'Enter Australia to marry your fiancé(e) within 9 months. After marrying, apply for the 820/801 partner visa from onshore. Must not already be married at lodgement.', route: null as string | null, note: 'Must marry within 9 months of entry' },
]

const PARENT_CARDS = [
  { code: '143', name: 'Contributory Parent', tag: '~5–7 yr queue', tagColor: PURPLE, body: 'Permanent visa for parents. Significant government fee (~$48,415 per primary applicant) but a dramatically shorter queue than the non-contributory pathway.', route: null as string | null, note: '~$48,415 govt fee per primary applicant' },
  { code: '173', name: 'Contributory Parent (Temp)', tag: 'Step toward 143', tagColor: PURPLE, body: 'Temporary step toward the permanent 143. Lower upfront fee (~$31,085). The remaining levy is paid when transitioning to the 143 permanent visa.', route: null as string | null, note: 'Temporary — transitions to 143' },
  { code: '864', name: 'Contributory Aged Parent', tag: 'Aged — faster queue', tagColor: '#4f46e5', body: 'Permanent visa for aged parents who meet the balance of family test. Similar fee structure to the 143. Faster queue than the non-contributory 804.', route: null as string | null, note: 'Must meet aged parent definition' },
  { code: '804', name: 'Aged Parent', tag: '30+ yr queue', tagColor: '#9ca3af', body: 'Non-contributory permanent visa for aged parents. No large government fee — but the current queue exceeds 30 years. Rarely practical for most families.', route: null as string | null, note: '30+ year queue — verify with Home Affairs' },
  { code: '103', name: 'Parent Visa', tag: '30+ yr queue', tagColor: '#9ca3af', body: 'Non-contributory permanent parent visa. Queue exceeds 30 years. Most families choose the contributory pathway given the practical timelines involved.', route: null as string | null, note: '30+ year queue — verify with Home Affairs' },
  { code: '870', name: 'Sponsored Parent (Temporary)', tag: 'No PR pathway', tagColor: TEAL, body: "Temporary visa — 3 or 5 years. Requires an Australian child as an approved sponsor. Capped annual intake; no pathway to permanent residence.", route: null as string | null, note: 'Capped intake — no PR pathway' },
]

const OTHER_CARDS = [
  { code: '101', name: 'Child Visa (Offshore)', tag: 'Permanent', tagColor: GREEN, body: 'For children of Australian citizens or PR holders who are outside Australia. Natural, step, or adopted children. Grants permanent residence.', route: null as string | null, note: '' },
  { code: '802', name: 'Child Visa (Onshore)', tag: 'Permanent', tagColor: GREEN, body: 'Same as 101 but for children already in Australia. Permanent residence granted. Dependency and relationship to sponsor must be established.', route: null as string | null, note: '' },
  { code: '445', name: 'Dependent Child', tag: 'Secondary applicant', tagColor: GREEN, body: "A dependent child included as a secondary applicant on another visa application — e.g. on a parent's partner visa. Not a standalone primary application.", route: null as string | null, note: '' },
  { code: '116', name: 'Carer Visa', tag: 'For carers', tagColor: AMBER, body: 'For relatives providing long-term, full-time care to an Australian citizen or PR holder with a certified medical condition. Strict medical certification required.', route: null as string | null, note: '' },
  { code: '115', name: 'Remaining Relative', tag: 'Niche eligibility', tagColor: '#9ca3af', body: "For the last remaining relative of an Australian resident — all other siblings and parents live in Australia. Strict definition; few applicants qualify.", route: null as string | null, note: '' },
  { code: '114', name: 'Aged Dependent Relative', tag: 'Niche eligibility', tagColor: '#9ca3af', body: 'For aged relatives wholly dependent on an Australian resident for financial support. Must be aged and unable to support themselves.', route: null as string | null, note: '' },
]

type AnyCard = typeof PARTNER_CARDS[0]

/* ── Evidence pillars ────────────────────────────────────── */
const PILLARS = [
  {
    title: 'Financial',
    color: GOLD,
    icon: 'dollar',
    items: ['Joint bank accounts', 'Shared credit cards or loans', 'Joint assets (property, vehicles)', 'Bills in both names', 'Tax returns showing shared finances'],
    note: 'Covers 12+ months of shared financial arrangements',
  },
  {
    title: 'Household',
    color: TEAL,
    icon: 'home',
    items: ['Lease or mortgage in both names', 'Utility bills listing both parties', 'Official mail at same address (both parties)', 'Stat dec from person with knowledge of cohabitation'],
    note: 'Demonstrates a shared domestic life — not just the same address',
  },
  {
    title: 'Social',
    color: ROSE,
    icon: 'users',
    items: ['Photos together over time', 'Social media acknowledgement', 'Joint invitations and event attendance', 'Stat decs from family and friends', "Evidence of knowledge of each other's families"],
    note: 'Evidence the relationship is known to and accepted by family and friends',
  },
  {
    title: 'Commitment',
    color: PURPLE,
    icon: 'heart',
    items: ['Length of relationship', 'Communication records (messages, calls)', 'Travel records and visits', 'Future plans (property, children)', 'Engagement or marriage evidence'],
    note: 'Demonstrates a genuine, ongoing and exclusive relationship',
  },
]

/* ── Processing time table ───────────────────────────────── */
const PROCESSING = [
  { visa: '309 Partner (Offshore)', stage: 'Temporary grant', time: '2–4 years', color: ROSE },
  { visa: '100 Partner (Offshore)', stage: 'Permanent grant (from 309)', time: '2 further years', color: ROSE },
  { visa: '820 Partner (Onshore)', stage: 'Temporary grant', time: '2–4 years', color: ROSE },
  { visa: '801 Partner (Onshore)', stage: 'Permanent grant (from 820)', time: '2 further years', color: ROSE },
  { visa: '300 Prospective Marriage', stage: 'Visa grant', time: '6–12 months', color: AMBER },
  { visa: '143 Contributory Parent', stage: 'Permanent grant', time: '5–7 years', color: PURPLE },
  { visa: '173 Contributory Parent Temp', stage: 'Temporary grant', time: '2–3 years', color: PURPLE },
  { visa: '870 Sponsored Parent (Temp)', stage: '3-year grant', time: '6–12 months', color: TEAL },
  { visa: '103 / 804 Parent', stage: 'Non-contributory queue', time: '30+ years', color: '#9ca3af' },
  { visa: '101 / 802 Child Visa', stage: 'Permanent grant', time: '12–24 months', color: GREEN },
]

/* ── FAQs ────────────────────────────────────────────────── */
const FAQS = [
  {
    q: 'What is the two-stage partner visa process?',
    a: "Partner visas are applied for once but assessed in two stages. Stage 1 grants temporary residence — the 820 (onshore) or 309 (offshore). Stage 2 assesses your relationship again approximately 2 years after the temporary grant and, if the relationship is genuine and ongoing, grants permanent residence (801 or 100). You do not lodge a second application — the permanent assessment is triggered automatically. If your relationship ends before the permanent stage, you may not be eligible for the 801/100 unless family violence provisions apply.",
  },
  {
    q: 'How long does a partner visa take?',
    a: "The initial temporary grant (309/820) is currently taking 2–4 years for most applicants. After the temporary grant, a further 2-year wait applies before the permanent stage is assessed. Total time from lodgement to permanent residence is typically 4–6 years. Complex cases, high-demand periods and requests for further information can extend processing significantly. Figures current as at 1 July 2026 — verify with Home Affairs.",
  },
  {
    q: 'What evidence is required for a partner visa?',
    a: "DHA assesses the genuine nature of the relationship across four categories: financial (joint accounts, shared assets, bills), household (cohabitation evidence — lease, utilities, mail), social (photos, invitations, family and friend stat decs), and commitment (relationship length, communication records, future plans). No single category is determinative — the Department looks at the full picture. A strong application covers all four categories with 12+ months of evidence.",
  },
  {
    q: 'Can de facto partners apply for a partner visa?',
    a: "Yes. De facto relationships are fully recognised for partner visa purposes. You must have lived together in a genuine de facto relationship for at least 12 months immediately before applying — unless you are registered under a state or territory relationship register, or you have a dependent child together. There is no requirement to be married.",
  },
  {
    q: 'What is the Contributory Parent visa and is it worth it?',
    a: "The Contributory Parent 143 visa costs approximately $48,415 in government fees per primary applicant as at 1 July 2026, with additional amounts for secondary applicants. In return, the queue is roughly 5–7 years. The non-contributory 103/804 has minimal government fees but a queue exceeding 30 years. For most families, the contributory pathway is the only practical option for permanent residence within a reasonable timeframe. Government fees must be verified with Home Affairs before lodging — they change periodically.",
  },
  {
    q: 'My partner visa was refused — what can I do?',
    a: "A partner visa refusal made by a delegate (not the Minister) can generally be reviewed at the Administrative Review Tribunal (ART). Strict time limits apply — typically 21 days from the date the decision notice is received. The ART conducts a merits review, meaning it can substitute a more favourable decision. If you have received a partner visa refusal, contact us immediately. Every day matters.",
  },
]

/* ── Page ────────────────────────────────────────────────── */
export default function PartnerFamilyHubPage({ navigate }: { navigate: (page: string) => void }) {
  const [activeTab, setActiveTab] = useState<'partner' | 'parent' | 'other'>('partner')
  const [hovered, setHovered] = useState<string | null>(null)

  const tabCards: AnyCard[] =
    activeTab === 'partner' ? PARTNER_CARDS :
    activeTab === 'parent' ? PARENT_CARDS :
    OTHER_CARDS
  const accentColor = activeTab === 'partner' ? ROSE : activeTab === 'parent' ? PURPLE : GREEN

  React.useEffect(() => {
    document.title = PAGE_META['partner-family-visas'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#ffffff', color: '#1E1E2A' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
        ]}
        faqs={FAQS.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Partner and Family Visas Australia', description: PAGE_META['partner-family-visas'].metaDescription, url: 'https://www.nanakmigration.com.au/partner-family-visas' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      {/* ── Breadcrumb ──────────────────────────────────────── */}
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family Visas' },
        ]}
      />

      {/* ── Hero ────────────────────────────────────────────── */}
      <PageHero
        variant="hub"
        eyebrow="Partner & Family Visas"
        title={<>Partner & Family<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Visas Hub</em></>}
        deck="Bringing your partner, family, or prospective spouse to Australia — partner visas, prospective marriage visas, and family reunification pathways."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Partner Visa Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Partner Visa Onshore →', page: 'partner-visa-820-801' }}
        accent={CAT_PARTNER}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Partner visas allow Australian citizens, permanent residents and eligible New Zealand citizens to sponsor their spouse or de facto partner to live in Australia, with offshore (subclass 309/100) and onshore (subclass 820/801) options available, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The prospective marriage visa (subclass 300) is available if you intend to marry your Australian partner before applying for a partner visa. Evidence of a genuine and ongoing relationship is central to every partner visa application.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── Section 1: Category panels ───────────────────────── */}
      <section style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Visa Categories" title="Partner, Parent, and beyond." accent={CAT_PARTNER} />

          {/* Tab switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 8, marginBottom: 40, flexWrap: 'wrap' }}>
            {([['partner', 'Partner Visas', ROSE], ['parent', 'Parent Visas', PURPLE], ['other', 'Child & Other', GREEN]] as const).map(([key, label, color]) => (
              <button key={key} onClick={() => setActiveTab(key)}
                style={{ padding: '10px 24px', borderRadius: 100, border: `2px solid ${activeTab === key ? color : '#e2e8f0'}`, background: activeTab === key ? color : '#ffffff', color: activeTab === key ? '#ffffff' : '#6b7280', fontSize: 13, fontWeight: 700, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif", transition: 'all 0.2s' }}>
                {label}
              </button>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
            {tabCards.map(card => {
              const isHovered = hovered === card.code
              const clickable = card.route !== null
              return (
                <div key={card.code}
                  onMouseEnter={() => setHovered(card.code)}
                  onMouseLeave={() => setHovered(null)}
                  onClick={() => { if (clickable && card.route) navigate(card.route) }}
                  style={{ background: '#ffffff', border: `1.5px solid ${isHovered ? accentColor : '#e8edf6'}`, borderRadius: 16, padding: '26px 22px', cursor: clickable ? 'pointer' : 'default', transform: isHovered && clickable ? 'translateY(-4px)' : 'none', boxShadow: isHovered ? '0 16px 40px rgba(27,43,94,0.11)' : '0 1px 6px rgba(27,43,94,0.05)', transition: 'all 0.2s', position: 'relative', display: 'flex', flexDirection: 'column' }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 8, marginBottom: 14 }}>
                    <span style={{ fontSize: 11, fontWeight: 800, padding: '4px 12px', borderRadius: 100, background: NAVY, color: GOLD, fontFamily: "'Gilroy', sans-serif", whiteSpace: 'nowrap' }}>{card.code}</span>
                    <span style={{ fontSize: 10, fontWeight: 700, padding: '3px 9px', borderRadius: 100, background: `${card.tagColor}14`, color: card.tagColor, border: `1px solid ${card.tagColor}28`, fontFamily: "'Gilroy', sans-serif", textAlign: 'right' }}>{card.tag}</span>
                  </div>
                  <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 10px', lineHeight: 1.2 }}>{card.name}</h3>
                  <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.65, margin: '0 0 14px', fontFamily: "'Gilroy', sans-serif", flex: 1 }}>{card.body}</p>
                  {'note' in card && card.note && (
                    <div style={{ fontSize: 10.5, fontWeight: 600, color: card.tagColor, fontFamily: "'Gilroy', sans-serif", borderTop: `1px solid ${card.tagColor}1a`, paddingTop: 10, marginTop: 'auto' }}>{card.note}</div>
                  )}
                  {clickable && (
                    <div style={{ position: 'absolute', bottom: 20, right: 20, opacity: isHovered ? 1 : 0, transition: 'opacity 0.2s' }}>
                      <Icon name="arrowright" size={15} color={accentColor} />
                    </div>
                  )}
                </div>
              )
            })}
          </div>
          <p style={{ fontSize: 10.5, color: '#9ca3af', fontStyle: 'italic', marginTop: 20, fontFamily: "'Gilroy', sans-serif" }}>{DISCLAIMER}</p>
        </div>
      </section>

      {/* ── Section 2: Evidence pillars ──────────────────────── */}
      <section id="evidence" style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Relationship Evidence" title="What the Department looks for" intro="DHA assesses genuineness across four categories. No single category is decisive — a holistic picture is what wins." accent={CAT_PARTNER} />

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 20 }} className="grid-4">
            {PILLARS.map(p => (
              <div key={p.title} style={{ background: '#f8fafd', borderTop: `3px solid ${p.color}`, borderRadius: 16, padding: '28px 22px', border: `1px solid ${p.color}1a`, borderTopWidth: 3 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={p.icon} size={20} color={p.color} />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 14px' }}>{p.title}</h3>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 7 }}>
                  {p.items.map(item => (
                    <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                      <Icon name="check" size={11} color={p.color} />
                      <span style={{ fontSize: 12.5, color: '#4b5563', fontFamily: "'Gilroy', sans-serif", lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 16, padding: '10px 12px', background: `${p.color}08`, borderRadius: 8, fontSize: 11, color: p.color, fontWeight: 600, fontFamily: "'Gilroy', sans-serif", lineHeight: 1.45 }}>{p.note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Section 3: Processing snapshot ──────────────────── */}
      <section style={{ background: '#f8fafd', padding: '88px 24px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Processing Reality" title="Processing time snapshot" intro="Family visa queues are among the longest in Australia's migration system. Plan ahead." accent={CAT_PARTNER} />

          <div style={{ borderRadius: 16, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', background: NAVY, padding: '14px 24px', gap: 16 }}>
              {['Visa', 'Stage', 'Est. time'].map((h, i) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.55)', textTransform: 'uppercase', letterSpacing: '0.1em', fontFamily: "'Gilroy', sans-serif", textAlign: i === 2 ? 'right' : 'left' }}>{h}</div>
              ))}
            </div>
            {PROCESSING.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', padding: '13px 24px', background: i % 2 === 0 ? '#ffffff' : '#fafbfe', borderTop: '1px solid #f0f2f7', gap: 16, alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: '50%', background: row.color, flexShrink: 0 }} />
                  <span style={{ fontSize: 13, color: '#374151', fontFamily: "'Gilroy', sans-serif", fontWeight: 500 }}>{row.visa}</span>
                </div>
                <div style={{ fontSize: 12.5, color: '#6b7280', fontFamily: "'Gilroy', sans-serif" }}>{row.stage}</div>
                <div style={{ fontSize: 13, fontWeight: 700, color: row.color === '#9ca3af' ? '#9ca3af' : NAVY, fontFamily: "'Gilroy', sans-serif", textAlign: 'right', whiteSpace: 'nowrap' }}>{row.time}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 16, padding: '14px 18px', background: `${GOLD}0e`, border: `1px solid ${GOLD}33`, borderRadius: 10, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
            <Icon name="alert" size={14} color={GOLD} />
            <p style={{ fontSize: 12, color: '#0d1632', lineHeight: 1.6, margin: 0, fontFamily: "'Gilroy', sans-serif" }}>
              <strong>{DISCLAIMER}.</strong> Processing times are estimates based on published DHA data. Complex cases extend these timelines. The non-contributory parent queue exceeding 30 years is not a typo.
            </p>
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section style={{ background: '#ffffff', padding: '88px 24px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common Questions" title="Partner & Family FAQs" accent={CAT_PARTNER} />
          <FaqAccordion
            items={FAQS.map(f => ({ question: f.q, answer: f.a }))}
            accent={CAT_PARTNER}
          />
        </div>
      </section>

      {/* ── Related ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={PARTNER_RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      {/* ── CTA Band ────────────────────────────────────────── */}
      <CtaBand
        title="Book a relationship evidence review"
        body="Partner visa decisions turn on the quality of relationship evidence across all four categories. Our registered agents review your evidence profile before lodgement — identifying gaps before DHA does."
        primaryCta={{ label: 'Book a Partner Visa Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Back to Home', page: 'home' }}
        navigate={navigate}
        accent={CAT_PARTNER}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
