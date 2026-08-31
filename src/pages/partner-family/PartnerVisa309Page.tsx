import React, { useState, useMemo } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  EvidenceChecklist,
  FaqAccordion,
  CtaBand,
  ComplianceDisclaimer,
  Callout,
  AnswerBox,
} from '@/components/page'
import type { TimelineStep, ComparisonRow, ChecklistGroup, FaqItem } from '@/components/page'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD , CAT_PARTNER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const ROSE = CAT_PARTNER


/* ─── Evidence pillars (tab interface — too specific for generic CardGrid) ─── */
const PILLARS = [
  {
    title: 'Financial', color: '#2563eb', icon: 'dollar',
    examples: [
      'Joint bank accounts or transfers between you',
      'Co-ownership of property or vehicle',
      'Joint financial obligations (rent, bills, loans)',
      'Named as financial beneficiary (insurance, super)',
      'Evidence of supporting each other financially while apart',
    ],
    apartNote: 'Bank transfers, remittances, joint financial decisions made remotely all count.',
  },
  {
    title: 'Social', color: '#4f46e5', icon: 'users',
    examples: [
      'Photos together — events, trips, everyday life',
      'Social media showing relationship publicly',
      'Invitations addressed to you as a couple',
      'Statements from people who know you as a couple',
      "Recognition by each other's family",
    ],
    apartNote: 'Video calls, online travel bookings together, social posts across distance all count.',
  },
  {
    title: 'Commitment', color: ROSE, icon: 'heart',
    examples: [
      'Duration and history of the relationship',
      'Future plans (property, children, relocation)',
      "Knowledge of each other's personal circumstances",
      'Reasons for living apart (work, visa, family)',
      'Marriage certificate or de facto registration',
    ],
    apartNote: 'Documented reasons for separation and plans for reunification are central to the apart-but-genuine case.',
  },
  {
    title: 'Household', color: '#0e7490', icon: 'home',
    examples: [
      'Shared living arrangements (lease, mortgage)',
      'Division of household tasks and responsibilities',
      'Sharing of personal items and space',
      'Care for children or dependants together',
      'Written or video evidence of shared domestic life',
    ],
    apartNote: "If you've never cohabited, document the living arrangements during visits and plans to establish a household.",
  },
]

/* ─── Data ─── */
const STAGES: TimelineStep[] = [
  {
    code: 'LODGE', title: 'Application & Bridging', color: '#6b7280', duration: 'Day 0',
    points: [
      'Lodge Form 47SP + 40SP online via ImmiAccount',
      'Pay government fee in full',
      'Applicant must be outside Australia at lodgement',
      'If in Australia on another visa, BVA activates automatically',
      'Two-year qualifying period starts now',
    ],
  },
  {
    code: '309', title: 'Subclass 309 — Temporary', color: '#4f46e5', duration: '18–36 months',
    points: [
      'First assessment of relationship genuineness',
      'Health and character must be satisfied',
      'Applicant must be outside Australia at grant',
      'Once granted: live, work, study in Australia freely',
      'Medicare access (reciprocal agreement countries)',
    ],
  },
  {
    code: '100', title: 'Subclass 100 — Permanent', color: '#f5a124', duration: '2 yrs from lodgement',
    points: [
      "Automatic re-assessment — you don't re-apply",
      'Must still be in genuine relationship at this point',
      'If relationship ended: children or DV grounds may still apply',
      'Permanent residence granted — pathway to citizenship',
      'Sponsor obligations cease',
    ],
  },
]

const COMPARE_COLS = [
  { key: 'v309', label: 'Subclass 309/100 (Offshore)', highlight: true },
  { key: 'v820', label: 'Subclass 820/801 (Onshore)' },
]

const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Who applies?',          v309: 'Applicant outside Australia',        v820: 'Applicant inside Australia' },
  { feature: 'Where at lodgement?',   v309: 'Offshore',                           v820: 'Onshore' },
  { feature: 'Where at 309/820 grant?', v309: 'Must be outside Australia',        v820: 'Can be anywhere' },
  { feature: 'First stage visa',      v309: 'Subclass 309 (temporary)',            v820: 'Subclass 820 (temporary)' },
  { feature: 'Permanent stage',       v309: 'Subclass 100',                        v820: 'Subclass 801' },
  { feature: '2-year clock starts',   v309: 'Date of lodgement',                  v820: 'Date of lodgement' },
  { feature: 'Work rights on temp visa', v309: 'Yes — unlimited',                 v820: 'Yes — unlimited' },
  { feature: 'Medicare',              v309: 'Yes (where reciprocal agreement)',    v820: 'Yes' },
  { feature: 'Govt fee (2024–25)',     v309: 'AUD $9,095 (primary)',               v820: 'AUD $9,095 (primary)' },
  { feature: 'Processing (current)',   v309: '18–36+ months (75th percentile)',    v820: '20–36+ months (75th percentile)' },
]

const CHECKLIST_GROUPS: ChecklistGroup[] = [
  { title: 'Identity & Relationship Status', icon: 'file', color: '#2563eb', items: [
    "Sponsor's Australian passport or citizenship certificate",
    "Applicant's passport (all pages)",
    'Marriage certificate (if married) — translated to English',
    'De facto statutory declaration (if not married)',
    'Birth certificates for any children',
  ]},
  { title: 'Health & Character', icon: 'shield', color: '#4f46e5', items: [
    'Chest X-ray results from DHA-approved panel physician',
    'Medical examination by DHA-approved panel physician',
    'Police clearance — every country lived in for 12+ months since age 16',
    'AFP check if sponsor lived overseas in last 10 years',
  ]},
  { title: 'Financial Pillar', icon: 'dollar', color: '#0e7490', items: [
    '12+ months of joint or linked bank statements',
    'Property title or lease in both names (if applicable)',
    'Evidence of financial transfers and support',
    'Tax returns naming partner (if applicable)',
  ]},
  { title: 'Social & Commitment Pillar', icon: 'camera', color: ROSE, items: [
    '20–40 photos with dates and context captions',
    '3–5 statutory declarations from people who know you as a couple',
    'Communication records (call logs, message excerpts)',
    'Shared travel — boarding passes, hotel bookings',
    'Social media screenshots showing public recognition',
  ]},
  { title: 'Sponsor Obligations', icon: 'users', color: GOLD, items: [
    'Form 40SP (Sponsorship for a Partner to Migrate)',
    'Evidence sponsor has been Australian citizen / PR for qualifying period',
    'Evidence sponsor has not sponsored multiple partners',
    "Sponsor's police clearance (if required)",
  ]},
]

const FAQ_ITEMS: FaqItem[] = [
  { question: 'Can I apply for an Australian partner visa from outside Australia?', answer: 'Yes — the Subclass 309/100 is designed for applicants outside Australia. You lodge the application offshore and remain outside while it is assessed. The 309 (temporary) is granted first, and it converts to the permanent 100 approximately two years after the original lodgement date — not two years after the 309 grant.' },
  { question: 'Where do I need to be when the 309 is granted?', answer: 'The applicant must be outside Australia at the time the Subclass 309 is granted. This is a genuine strategic point: if you travel to Australia and happen to be there when the 309 is decided, you will not meet the grant requirement. If you are nearing the expected decision window, stay offshore or plan returns carefully. Your agent should flag this timing.' },
  { question: 'When does the Subclass 100 stage start?', answer: 'The two-year qualifying period for the Subclass 100 runs from the date the application was lodged, not from the 309 grant date. In practice this means the waiting time on the 309 is part of the qualifying period. Once the two years have elapsed, DHA will assess the 100 stage — and the applicant must still be in a genuine relationship at that point.' },
  { question: 'Do we lose evidence value because we live apart?', answer: 'No — the four pillars (financial, social, commitment, household) all translate for distance relationships. Financial transfers and joint accounts, communication records, video call logs, social media and third-party declarations from people who know you as a couple all speak to genuineness across borders. The important thing is to document the arrangement: why you are living apart, how you maintain the relationship, and what your plans are to live together.' },
  { question: 'Can the applicant work in Australia on the 309 visa?', answer: 'Yes — the Subclass 309 visa grants full work rights in Australia. The applicant can live and work anywhere in Australia with no restrictions on the type of employment or hours. Medicare access is also available on the 309, as Australia has reciprocal health agreements with many countries.' },
  { question: 'What happens if the sponsor and applicant separate before the 100 is granted?', answer: 'If the relationship breaks down before the 100 is granted, the 100 will generally not be approved. However, there are exceptions: if there are children of the relationship, or if the Australian sponsor (or their family member) engaged in family violence against the applicant, the 100 may still be granted on those grounds. This is one reason why preserving evidence of the relationship throughout the processing period matters.' },
  { question: 'Is there a lower cost route than the 309/100?', answer: 'The government fee for a partner visa (309/100) is set by DHA and is the same base fee regardless of how the application is lodged. The onshore route (820/801) costs the same government fee but has different location requirements. What varies is agent fees and the cost of obtaining evidence — there is no lower-fee DHA route to partner permanent residency.' },
  { question: 'How many photos do we need?', answer: 'There is no prescribed number. In practice, 20–40 well-captioned photos spanning the history of the relationship perform best — covering early meetings, milestones (trips, family events, celebrations), and recent life together. Each photo should have a date, location, and a brief note of context. Quality and evidence of history matters more than volume.' },
]

/* ─── Timeline planner (page-specific interactive widget — stays local) ─── */
function TimelinePlanner() {
  const [lodgementDate, setLodgementDate] = useState('')
  const [relationshipType, setRelationshipType] = useState<'married' | 'defacto'>('married')
  const [hasChildren, setHasChildren] = useState(false)

  const timeline = useMemo(() => {
    if (!lodgementDate) return []
    const lodge = new Date(lodgementDate)
    return [
      { label: 'Application lodged', offset: 0, note: 'Two-year qualifying period starts today', type: 'start' },
      { label: 'Biometrics / health / police due', offset: 1, note: 'Complete these within the timeframe given — delays stall the case', type: 'action' },
      { label: 'Bridging visa (BVA) if in Australia', offset: 0, note: 'If applicant entered Australia on another visa — BVA activates automatically on lodgement', type: 'info' },
      { label: 'Two-year qualifying period reached', offset: 24, note: 'DHA may now assess the Subclass 100 stage', type: 'milestone' },
      { label: 'Expected 100 decision window (75th pct)', offset: 30, note: 'Varies significantly by case complexity and queue position', type: 'milestone' },
    ].map(ev => {
      const d = new Date(lodge)
      d.setMonth(d.getMonth() + ev.offset)
      return { ...ev, date: d }
    })
  }, [lodgementDate])

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '380px 1fr', gap: 64, alignItems: 'start' }}>
      <div>
        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' as const, color: ROSE, marginBottom: 12 }}>Interactive Planner</div>
        <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>Your 309/100 Timeline</h2>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 16, lineHeight: 1.7, margin: '0 0 28px' }}>Enter your planned lodgement date. We map the key events, the two-year qualifying period, and the expected 100 decision window.</p>

        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 6 }}>Planned lodgement date</label>
            <input type="date" value={lodgementDate} onChange={e => setLodgementDate(e.target.value)}
              style={{ width: '100%', padding: '10px 14px', borderRadius: 8, fontSize: 14, background: 'rgba(255,255,255,0.08)', border: '1.5px solid rgba(255,255,255,0.15)', color: '#fff', outline: 'none', fontFamily: "'Gilroy', sans-serif", boxSizing: 'border-box' as const }} />
          </div>
          <div>
            <label style={{ fontSize: 13, fontWeight: 600, color: 'rgba(255,255,255,0.6)', display: 'block', marginBottom: 8 }}>Relationship type</label>
            <div style={{ display: 'flex', gap: 8 }}>
              {[{ val: 'married' as const, label: 'Married' }, { val: 'defacto' as const, label: 'De facto' }].map(opt => (
                <button key={opt.val} onClick={() => setRelationshipType(opt.val)}
                  style={{ flex: 1, padding: '10px', borderRadius: 8, border: `1.5px solid ${relationshipType === opt.val ? ROSE : 'rgba(255,255,255,0.15)'}`, background: relationshipType === opt.val ? `${ROSE}20` : 'rgba(255,255,255,0.05)', color: relationshipType === opt.val ? ROSE : 'rgba(255,255,255,0.6)', fontSize: 14, fontWeight: 600, cursor: 'pointer', fontFamily: "'Gilroy', sans-serif" }}>
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
          <div onClick={() => setHasChildren(!hasChildren)}
            style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 16px', background: 'rgba(255,255,255,0.05)', border: `1.5px solid ${hasChildren ? ROSE : 'rgba(255,255,255,0.1)'}`, borderRadius: 10, cursor: 'pointer' }}>
            <div style={{ width: 20, height: 20, borderRadius: 5, border: `2px solid ${hasChildren ? ROSE : 'rgba(255,255,255,0.3)'}`, background: hasChildren ? ROSE : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              {hasChildren && <Icon name="check" size={11} color="#fff" />}
            </div>
            <span style={{ fontSize: 14, color: 'rgba(255,255,255,0.75)' }}>Children to be included as secondary applicants</span>
          </div>
          {relationshipType === 'defacto' && (
            <div style={{ background: `${GOLD}15`, border: `1px solid ${GOLD}30`, borderRadius: 10, padding: '14px 16px' }}>
              <div style={{ fontSize: 13, color: GOLD, fontWeight: 700, marginBottom: 4 }}>De Facto Requirement</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>De facto relationships require a minimum of 12 months of cohabitation prior to application, unless registered with a state/territory authority. Evidence of this period is critical.</div>
            </div>
          )}
        </div>
      </div>

      <div>
        {timeline.length > 0 ? (
          <div style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', left: 20, top: 24, bottom: 24, width: 2, background: `linear-gradient(180deg, ${ROSE} 0%, #4f46e5 50%, #f5a124 100%)` }} />
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
              {timeline.map((ev, i) => {
                const ts = ev.type === 'start'
                  ? { bg: `${ROSE}15`, border: `${ROSE}30`, dot: ROSE }
                  : ev.type === 'milestone'
                    ? { bg: 'rgba(245,161,36,0.12)', border: 'rgba(245,161,36,0.3)', dot: '#f5a124' }
                    : ev.type === 'action'
                      ? { bg: `${GOLD}10`, border: `${GOLD}25`, dot: GOLD }
                      : { bg: 'rgba(255,255,255,0.04)', border: 'rgba(255,255,255,0.1)', dot: '#0369a1' }
                return (
                  <div key={i} style={{ display: 'flex', gap: 20 }}>
                    <div style={{ flexShrink: 0, width: 42, display: 'flex', justifyContent: 'center', paddingTop: 16 }}>
                      <div style={{ width: 14, height: 14, borderRadius: '50%', border: `2px solid ${ts.dot}`, background: ts.dot, zIndex: 1 }} />
                    </div>
                    <div style={{ flex: 1, background: ts.bg, border: `1px solid ${ts.border}`, borderRadius: 12, padding: '14px 18px', marginBottom: 6 }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 4 }}>
                        <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', lineHeight: 1.3 }}>{ev.label}</div>
                        <div style={{ fontSize: 13, fontWeight: 700, color: ts.dot, whiteSpace: 'nowrap' as const }}>
                          {ev.date.toLocaleDateString('en-AU', { month: 'short', year: 'numeric' })}
                        </div>
                      </div>
                      <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>{ev.note}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        ) : (
          <div style={{ background: 'rgba(255,255,255,0.04)', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: 16, padding: '56px 32px', textAlign: 'center' }}>
            <Icon name="calendar" size={36} color="rgba(255,255,255,0.2)" />
            <div style={{ marginTop: 16, fontSize: 16, color: 'rgba(255,255,255,0.35)' }}>Enter your planned lodgement date to see your personalised timeline</div>
          </div>
        )}
      </div>
    </div>
  )
}

/* ─── Pillar selector (page-specific tabbed widget — stays local) ─── */
function PillarSelector() {
  const [openPillar, setOpenPillar] = useState<number>(0)
  const p = PILLARS[openPillar]

  return (
    <div style={{ display: 'grid', gridTemplateColumns: '240px 1fr', gap: 24, maxWidth: 960, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
        {PILLARS.map((pillar, i) => (
          <button key={i} onClick={() => setOpenPillar(i)}
            style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', background: openPillar === i ? '#fff' : '#f0f2f8', border: `2px solid ${openPillar === i ? pillar.color : 'transparent'}`, borderRadius: 12, cursor: 'pointer', textAlign: 'left' as const, boxShadow: openPillar === i ? '0 4px 20px rgba(27,43,94,0.1)' : 'none', transition: 'all 0.15s', fontFamily: "'Gilroy', sans-serif" }}>
            <div style={{ width: 36, height: 36, borderRadius: 10, background: openPillar === i ? `${pillar.color}15` : '#e5e7eb', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
              <Icon name={pillar.icon} size={16} color={openPillar === i ? pillar.color : '#9ca3af'} />
            </div>
            <span style={{ fontSize: 15, fontWeight: 700, color: openPillar === i ? pillar.color : '#6b7280' }}>{pillar.title}</span>
          </button>
        ))}
      </div>

      <div style={{ background: '#fff', border: `2px solid ${p.color}25`, borderRadius: 16, padding: '28px 32px', boxShadow: '0 4px 24px rgba(27,43,94,0.08)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 22 }}>
          <div style={{ width: 44, height: 44, borderRadius: 12, background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon name={p.icon} size={20} color={p.color} />
          </div>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: p.color, marginBottom: 2 }}>Pillar {openPillar + 1} of 4</div>
            <div style={{ fontSize: 19, fontWeight: 700, color: NAVY }}>{p.title} Evidence</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10, marginBottom: 24 }}>
          {p.examples.map((ex, ei) => (
            <div key={ei} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '10px 14px', background: '#f8f9fc', borderRadius: 10, border: '1px solid #f0f2f8' }}>
              <div style={{ width: 22, height: 22, borderRadius: 6, background: `${p.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                <Icon name="check" size={11} color={p.color} />
              </div>
              <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{ex}</span>
            </div>
          ))}
        </div>
        <div style={{ background: `${p.color}08`, border: `1px solid ${p.color}25`, borderRadius: 12, padding: '16px 18px' }}>
          <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' as const, color: p.color, marginBottom: 6 }}>For Couples Living Apart</div>
          <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{p.apartNote}</div>
        </div>
      </div>
    </div>
  )
}

/* ─── Page ─── */
export default function PartnerVisa309Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['partner-visa-309-100'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Partner Visa Offshore (309/100)', url: 'https://www.nanakmigration.com.au/partner-visa-309-100' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: 'Partner Visa Offshore (Subclass 309/100)', description: PAGE_META['partner-visa-309-100'].metaDescription, url: 'https://www.nanakmigration.com.au/partner-visa-309-100' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Partner Visa (309/100)' },
        ]}
      />

      {/* ── HERO (flagship: two-column) ── */}
      <div style={{ background: HERO_GRAD, padding: '64px 32px 0', overflow: 'hidden' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: 64, alignItems: 'flex-start' }}>
            {/* Left */}
            <div style={{ flex: '0 0 580px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <span style={{ background: `${ROSE}18`, color: ROSE, border: `1px solid ${ROSE}40`, fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, padding: '4px 12px', borderRadius: 20 }}>Subclass 309 / 100</span>
                <span style={{ color: '#6b7280', fontSize: 13 }}>Offshore · One application · Two stages</span>
              </div>
              <h1 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 50, fontWeight: 700, color: NAVY, lineHeight: 1.1, margin: '0 0 22px' }}>
                Partner Visa<br />
                <span style={{ color: ROSE }}>309 / 100</span><br />
                <span style={{ fontSize: 38 }}>From Outside Australia</span>
              </h1>
              <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.7, margin: '0 0 28px', maxWidth: 500 }}>
                One application, two stages. The temporary 309 first — then the permanent 100, which becomes assessable two years from the date of lodgement.
              </p>
              <div style={{ background: '#ffffff', border: '1px solid #e5e9f5', borderLeft: `4px solid ${ROSE}`, borderRadius: '0 12px 12px 0', padding: '20px 24px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.07)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <Icon name="info" size={16} color={ROSE} />
                  <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ROSE }}>The Short Answer</span>
                </div>
                <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                  <strong style={{ color: NAVY }}>Yes — you can apply from outside Australia.</strong> The 309/100 is lodged offshore, one application with two stages. The permanent 100 becomes assessable two years from the lodgement date — so the waiting time doubles as the qualifying period. The applicant generally needs to be <em>outside Australia when the 309 is granted</em>, which makes travel timing around the decision a genuine part of the strategy.
                </p>
              </div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a href="#timeline-planner" style={{ backgroundColor: GOLD, color: NAVY_DARK, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 700, boxShadow: "0 4px 20px rgba(245,161,36,0.40)" }}>Plan My Timeline</a>
                <a href="#evidence" style={{ backgroundColor: 'transparent', color: NAVY, border: `2px solid ${NAVY}30`, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>Evidence Guide →</a>
              </div>
            </div>

            {/* Right — at-a-glance */}
            <div style={{ flex: 1, paddingBottom: 40 }}>
              <div style={{ background: '#fff', borderRadius: 20, boxShadow: '0 8px 48px rgba(27,43,94,0.12)', border: '1px solid #e8edf6', overflow: 'hidden' }}>
                <div style={{ background: NAVY, padding: '18px 24px' }}>
                  <div style={{ color: 'rgba(255,255,255,0.55)', fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, marginBottom: 3 }}>At a Glance</div>
                  <div style={{ color: '#fff', fontSize: 17, fontWeight: 700 }}>Subclass 309 / 100 Key Facts</div>
                </div>
                {[
                  { label: 'Application type', val: 'One application, two-stage grant', icon: 'file' },
                  { label: 'Where you lodge', val: 'Outside Australia', icon: 'globe' },
                  { label: 'First stage', val: 'Subclass 309 — Temporary Partner', icon: 'plane' },
                  { label: 'Second stage', val: 'Subclass 100 — Permanent Partner', icon: 'shield' },
                  { label: 'Two-year clock', val: 'Starts at lodgement, not 309 grant', icon: 'calendar' },
                  { label: 'At 309 grant', val: 'Applicant must be outside Australia', icon: 'alert' },
                  { label: 'Work rights (309)', val: 'Unlimited — any job, any hours', icon: 'zap' },
                  { label: 'Relationship types', val: 'Married or genuine de facto (12+ months)', icon: 'heart' },
                  { label: 'Govt fee (2024–25)', val: 'AUD $9,095 primary applicant', icon: 'dollar' },
                  { label: 'Current processing', val: '18–36+ months (varies by case)', icon: 'clock' },
                  { label: 'Children can be included', val: 'Yes — as secondary applicants', icon: 'users' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '11px 24px', borderBottom: i < 10 ? '1px solid #f3f4f8' : 'none' }}>
                    <span style={{ width: 26, height: 26, borderRadius: 6, background: `${ROSE}10`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <Icon name={row.icon} size={13} color={ROSE} />
                    </span>
                    <span style={{ fontSize: 13, color: '#6b7280', flex: '0 0 160px' }}>{row.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{row.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div style={{ height: 40 }} />
      </div>

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Partner Visa Offshore (subclass 309/100) is a two-stage visa for applicants outside Australia who are in a genuine relationship with an Australian citizen, permanent resident, or eligible New Zealand citizen, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The temporary subclass 309 is lodged and granted offshore; the permanent subclass 100 is assessed automatically two years from the original lodgement date. The applicant must generally be outside Australia at the time the 309 is granted, which requires careful travel planning as the decision window approaches.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* ── HOW IT WORKS — VISUAL STAGES ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="How the Visa Works" title="Two Stages — One Application" intro="You lodge once. DHA assesses twice. The second assessment happens automatically — you don't re-apply." accent={ROSE} />
          <StepTimeline steps={STAGES} variant="cards" accent={ROSE} />
          <div style={{ maxWidth: 800, margin: '32px auto 0' }}>
            <Callout variant="danger" panel borderWidth={2}>
              <strong style={{ display: 'block', fontSize: 15, color: NAVY, marginBottom: 4 }}>The Grant-Day Travel Rule</strong>
              The applicant must be <strong>outside Australia</strong> when the Subclass 309 is granted. If the expected decision window is approaching and the applicant is in Australia, they risk being in the wrong location at the moment of grant. Navpreet monitors cases as they approach decision stage and advises on travel positioning — this is active case management, not paperwork.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── TIMELINE PLANNER ── */}
      <section id="timeline-planner" style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <TimelinePlanner />
        </div>
      </section>

      {/* ── 309 vs 820 COMPARISON ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Which Route?" title="309 / 100 vs 820 / 801" intro="Same end destination. The only real difference is where you are when you apply — and where you must be at the first grant." accent={ROSE} />
          <ComparisonTable columns={COMPARE_COLS} rows={COMPARE_ROWS} accent={ROSE} />
        </div>
      </section>

      {/* ── EVIDENCE PILLARS ── */}
      <section id="evidence" style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Proving Your Relationship" title="The Four Evidence Pillars" intro="DHA assesses genuineness across four domains. Select each pillar to see what qualifies — including evidence that works for couples living apart." accent={ROSE} />
          <PillarSelector />
        </div>
      </section>

      {/* ── DOCUMENT CHECKLIST ── */}
      <section style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Application Preparation" title="Document Checklist" intro="Select each category to expand the list. This is indicative — your specific case may require additional documents." accent={ROSE} light />
          <EvidenceChecklist groups={CHECKLIST_GROUPS} dark defaultOpen={0} accent={ROSE} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="309 / 100 FAQ" accent={ROSE} />
          <FaqAccordion items={FAQ_ITEMS} accent={ROSE} />
        </div>
      </section>

      {/* ── CTA ── */}
      <CtaBand
        title={<>Separated by borders.<br /><span style={{ color: ROSE }}>United by process.</span></>}
        body="Navpreet Aulakh (MARN 2619467) manages partner visa cases from lodgement through the 100 grant — including evidence structuring, the grant-day travel rule, and keeping cases moving through DHA's queue."
        primaryCta={{ label: 'Book a Partner Visa Consultation', page: 'home' }}
        accent={ROSE}
        footnote="Free initial assessment · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="July 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
