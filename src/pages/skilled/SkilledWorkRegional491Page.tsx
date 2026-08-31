import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  StepTimeline,
  ComparisonTable,
  Callout,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  TimelineStep,
  ComparisonColumn,
  ComparisonRow,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_SKILLED } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const GREEN = CAT_SKILLED
const AMBER    = '#f5a124'
const INDIGO   = '#4f46e5'
const TEAL     = '#0e7490'
const BORDER   = '#e8edf6'
const GREY_BG  = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

/* ─── On-this-page ─── */
const TOC: NavSection[] = [
  { id: 'key-facts',       label: 'Key facts' },
  { id: 'regional-areas',  label: 'Designated regional areas' },
  { id: 'timeline',        label: 'How to apply' },
  { id: 'pr-pathway',      label: 'Pathway to 191 PR' },
  { id: 'comparison',      label: 'State vs family sponsorship' },
  { id: 'obligations',     label: 'Conditions and obligations' },
  { id: 'faq',             label: 'FAQ' },
  { id: 'related',         label: 'Related pages' },
]

/* ─── Key facts ─── */
const KEY_FACTS: KeyFact[] = [
  { icon: 'clock',   value: '5-year provisional', label: 'Visa duration',                      note: 'Not permanent — a separate 191 application is required for permanent residence.' },
  { icon: 'hash',    value: '+15 bonus points',   label: 'Regional nomination or sponsorship', note: 'Adds 15 points to your points test score — the highest points bonus available.' },
  { icon: 'mappin',  value: 'Regional areas only', label: 'Must live, work and study',         note: 'The visa requires residence in a designated regional area for its full duration.' },
  { icon: 'flag',    value: 'State or relative',  label: 'Nomination or sponsorship required', note: 'Either a state/territory nomination or sponsorship by an eligible relative.' },
  { icon: 'check',   value: 'Generally needed',   label: 'Skills assessment required',         note: 'From the relevant assessing authority for your ANZSCO occupation.' },
  { icon: 'shield',  value: 'After 3 years',      label: 'Pathway to permanent 191',           note: 'Must meet residence, employment and income requirements to apply for the 191.' },
]

/* ─── Step timeline ─── */
const STEPS: TimelineStep[] = [
  {
    code: '01', title: 'Obtain a skills assessment', duration: 'Allow 4–16+ weeks',
    points: [
      'Apply to the assessing authority relevant to your ANZSCO occupation code.',
      'A positive skills assessment is generally required before lodging your EOI in SkillSelect.',
      'Check the validity period of your assessment — most are valid for three years.',
      'Some assessing authorities assess for multiple occupations; confirm your assessment covers the specific unit group you will nominate.',
    ],
  },
  {
    code: '02', title: 'Achieve the required English level', duration: 'Test booking required', color: GREEN,
    points: [
      'Competent English is generally required — commonly IELTS 6 in each band or equivalent.',
      'Higher English scores (Proficient or Superior) attract additional points in the points test.',
      'Book your test early — results may take several weeks and popular dates fill quickly.',
      'Confirm whether an exemption applies to you before sitting the test.',
    ],
  },
  {
    code: '03', title: 'Submit an Expression of Interest in SkillSelect', duration: 'No fee', color: GREEN,
    points: [
      'Complete your EOI at immi.homeaffairs.gov.au and select subclass 491.',
      'Indicate the state or territory you are interested in being nominated by, and whether you have an eligible relative sponsor.',
      'Your EOI is ranked by total points score — the 15-point regional bonus significantly improves your ranking.',
      'EOIs remain active for two years and can be updated at any time.',
    ],
  },
  {
    code: '04', title: 'Receive state nomination or relative sponsorship', duration: 'Varies', color: GREEN,
    points: [
      'For state nomination: apply through the relevant state or territory migration agency; each has its own criteria, occupation lists, and processing times.',
      'For relative sponsorship: an eligible relative living in a designated regional area must sponsor you; they must be an Australian citizen, permanent resident, or eligible NZ citizen.',
      'Eligible relatives include: spouse or de facto partner, parent, child, brother, sister, aunt, uncle, nephew, niece, or first cousin.',
      'Nomination or sponsorship approval must precede an invitation to apply.',
    ],
  },
  {
    code: '05', title: 'Receive an invitation to apply', duration: 'After nomination/sponsorship', color: GREEN,
    points: [
      'The Department of Home Affairs issues invitations in regular rounds from the SkillSelect pool.',
      'The 15-point bonus means 491 invitation cutoffs are generally lower than those for the 189.',
      'An invitation is not a visa grant — it authorises you to lodge the 491 application.',
      'The invitation generally expires; the application must be lodged within 60 days.',
    ],
  },
  {
    code: '06', title: 'Lodge the 491 visa application', duration: 'Within 60 days of invitation', color: GREEN,
    points: [
      'Arrange health examinations via HAP ID with a DHA-approved panel physician.',
      'Obtain police clearances for all countries where you have lived 12+ months since age 16.',
      'Gather the full evidence package — skills assessment, English, employment records, identity, nomination evidence.',
      'Include family members as secondary applicants at lodgement.',
    ],
  },
  {
    code: '07', title: '491 visa granted', duration: 'Processing times vary', color: TEAL,
    points: [
      'If approved, the provisional 491 visa is granted — valid for 5 years.',
      'The visa is subject to conditions: you must live, work, and study only in a designated regional area.',
      'Begin documenting your regional residence and employment from grant date — this evidence is required for the 191 application.',
      'Processing times vary; the Department of Home Affairs publishes indicative times on its website.',
    ],
  },
]

/* ─── PR pathway section (local) ─── */
const PR_REQUIREMENTS = [
  { icon: 'clock',     label: 'At least 3 years residence in a designated regional area', body: "You must have lived in a designated regional area for at least 3 years while holding the 491 visa. Brief absences for travel or work purposes generally do not break continuity, but extended absences may. Document your regional residence throughout the 491 period." },
  { icon: 'dollar',    label: 'Taxable income at or above the threshold in each year', body: "You must have met the income threshold (indexed annually) in each of the 3 years you are relying on. Verify the applicable threshold for each income year with the Department of Home Affairs — it is subject to change." },
  { icon: 'briefcase', label: 'Genuine attempt to comply with 491 conditions', body: "The Department of Home Affairs assesses whether you genuinely attempted to comply with the visa conditions — including work, study, and residence in a regional area — throughout the holding period. Non-compliance can affect the 191 application." },
  { icon: 'globe',     label: 'Competent English (generally)', body: "Competent English is generally required for the 191 application. If you already demonstrated Competent English for the 491, confirm whether a new test is required or whether your existing results remain current." },
]

function PRPathwaySection() {
  return (
    <section id="pr-pathway" style={{ background: '#fff', padding: '80px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 3"
          title="Pathway to Permanent Residence — Subclass 191"
          intro="The 491 is a provisional visa. To obtain permanent residence, you must separately apply for the Skilled Regional (Residence) visa (subclass 191) after meeting the residence, income, and compliance requirements."
          accent={GREEN}
        />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 28 }}>
          {PR_REQUIREMENTS.map(r => (
            <div key={r.label} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ display: 'flex', gap: 12, alignItems: 'center', padding: '14px 16px', background: 'rgba(27,43,94,0.04)', borderBottom: '1px solid rgba(27,43,94,0.10)' }}>
                <div style={{ width: 32, height: 32, borderRadius: 9, background: 'rgba(27,43,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={r.icon} size={15} color={NAVY} />
                </div>
                <div style={{ fontSize: 14.5, fontWeight: 600, color: NAVY, lineHeight: 1.4 }}>{r.label}</div>
              </div>
              <div style={{ padding: '14px 16px', background: '#fff' }}>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{r.body}</p>
              </div>
            </div>
          ))}
        </div>
        <Callout variant="note" panel title="The 191 is a separate visa application">
          <p style={{ margin: '0 0 8px', fontSize: 15, lineHeight: 1.7, color: '#374151' }}>
            Holding a 491 visa does not automatically lead to permanent residence. You must separately lodge a subclass 191 application and meet the requirements at the time of that application. Income thresholds and residence requirements may change between your 491 grant and your 191 application.
          </p>
          <p style={{ margin: 0, fontSize: 14, color: '#1B2B5E', lineHeight: 1.7 }}>
            Begin keeping records of your regional residence, employment, and income from the date your 491 is granted — retrospectively gathering this evidence can be difficult.
          </p>
        </Callout>
      </div>
    </section>
  )
}

/* ─── Designated regional areas section (local) ─── */
function DesignatedRegionalSection() {
  const examples = [
    { state: 'NSW', areas: 'All areas except Sydney, Newcastle, Wollongong and the Central Coast' },
    { state: 'VIC', areas: 'All areas except Melbourne metropolitan area' },
    { state: 'QLD', areas: 'All areas except Brisbane metropolitan area' },
    { state: 'WA',  areas: 'All areas except Perth metropolitan area' },
    { state: 'SA',  areas: 'All of South Australia (including Adelaide)' },
    { state: 'TAS', areas: 'All of Tasmania' },
    { state: 'NT',  areas: 'All of the Northern Territory' },
    { state: 'ACT', areas: 'All of the Australian Capital Territory' },
  ]
  return (
    <section id="regional-areas" style={{ background: GREY_BG, padding: '72px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 1"
          title="Designated Regional Areas"
          intro="The 491 visa requires you to live, work, and study only in a designated regional area. The definition of 'designated regional area' is set by legislative instrument and is subject to change."
          accent={GREEN}
        />
        <div style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', marginBottom: 20 }}>
          <div style={{ background: NAVY, padding: '11px 18px', display: 'grid', gridTemplateColumns: '100px 1fr' }}>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: '#fff', textTransform: 'uppercase' as const }}>State/Territory</span>
            <span style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', color: '#fff', textTransform: 'uppercase' as const }}>Areas generally included</span>
          </div>
          {examples.map((r, i) => (
            <div key={r.state} style={{ display: 'grid', gridTemplateColumns: '100px 1fr', padding: '12px 18px', background: i % 2 === 0 ? '#fff' : GREY_BG, borderBottom: i < examples.length - 1 ? `1px solid ${BORDER}` : 'none' }}>
              <span style={{ fontSize: 14, fontWeight: 700, color: GREEN }}>{r.state}</span>
              <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.5 }}>{r.areas}</span>
            </div>
          ))}
        </div>
        <Callout variant="warning">
          The above is a simplified illustrative guide only. The exact boundaries of designated regional areas are determined by legislative instrument and are subject to change. Always verify current boundaries on the Department of Home Affairs website before making residence decisions based on this information.
        </Callout>
      </div>
    </section>
  )
}

/* ─── State vs family comparison ─── */
const COMPARE_COLS: ComparisonColumn[] = [
  { key: 'state',  label: 'State/Territory Nomination', highlight: true },
  { key: 'family', label: 'Eligible Relative Sponsorship' },
]
const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Who can provide it',          state: 'An Australian state or territory government', family: 'An eligible relative (citizen, permanent resident, or eligible NZ citizen) living in a designated regional area' },
  { feature: 'Eligible relatives',          state: 'Not applicable',                              family: 'Spouse, de facto partner, parent, child, sibling, aunt, uncle, nephew, niece, first cousin' },
  { feature: 'Points bonus',                state: '+15 points',                                  family: '+15 points (same bonus)' },
  { feature: 'Occupation list requirement', state: 'MLTSSL or state/territory regional list; states may have their own additional requirements', family: 'MLTSSL; relative sponsor must live in a designated regional area' },
  { feature: 'State-specific criteria',     state: 'Each state sets its own criteria — minimum points, occupation lists, and connection requirements', family: 'Federal criteria only; no separate state program required' },
  { feature: 'Processing',                  state: 'Separate state nomination application required; processing times vary widely by state', family: 'Federal process only; no separate state application' },
  { feature: 'Geographic flexibility',      state: 'Must live in the nominating state\'s regional areas (in most cases)',     family: 'Must live in any designated regional area where the relative sponsor resides' },
]

/* ─── Obligations section (local) ─── */
function ObligationsSection() {
  const items = [
    { icon: 'mappin',        title: 'Live in a designated regional area', body: 'The 491 visa is subject to a condition requiring you to live only in a designated regional area for the duration of the visa. Changing residence to a non-regional area would breach the visa conditions.' },
    { icon: 'briefcase',     title: 'Work in a designated regional area', body: 'You must work — or genuinely seek work — in a designated regional area. Working for an employer whose operations are primarily based outside the regional area may not satisfy this condition depending on the circumstances.' },
    { icon: 'graduationcap', title: 'Study only in a designated regional area', body: 'Any formal study undertaken on the 491 visa must be in a designated regional area. Online or distance study may be permitted in some circumstances — seek advice if this applies to you.' },
    { icon: 'alert',         title: 'No movement to metropolitan areas', body: 'Moving to a major metropolitan area — such as Sydney, Melbourne, Brisbane, or Perth — while holding the 491 visa would generally breach the visa conditions, regardless of the reason.' },
    { icon: 'shield',        title: 'Condition applies to family members', body: 'Secondary applicants included in the 491 — including a partner and dependent children — are also subject to the regional living condition. The entire household must reside in a designated regional area.' },
    { icon: 'check',         title: 'Keep records throughout', body: 'Maintain evidence of regional residence, employment, and income throughout the 491 holding period. This evidence is required when applying for the 191 permanent visa and should be collected continuously — not retrospectively.' },
  ]
  return (
    <section id="obligations" style={{ background: '#fff', padding: '72px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeading
          kicker="Section 5"
          title="Conditions and Obligations"
          intro="The 491 visa is one of the more prescriptive temporary visas in the Australian system. The conditions apply throughout the five-year visa period and affect every member of the household."
          accent={GREEN}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
          {items.map(item => (
            <div key={item.title} style={{ background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: '18px 18px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: 'rgba(27,43,94,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name={item.icon} size={14} color={NAVY} />
                </div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: 1.3, paddingTop: 3 }}>{item.title}</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── FAQ ─── */
const FAQ: FaqItem[] = [
  {
    question: 'How does the 15-point bonus work in practice?',
    answer: "The 15-point bonus for state/territory nomination or eligible relative sponsorship is added to your total SkillSelect points score for the purposes of invitation rounds. If your base score (personal factors only) is, for example, 70 points, your score for invitation purposes would be 85 points. This generally places you well ahead of the typical 189 invitation cutoffs in most occupations, which is why the 491 is often used by applicants who have strong skills but a base score below the 189 cutoff.",
  },
  {
    question: 'Is the 491 right for me if I want to live in a major city eventually?',
    answer: "The 491 requires you to live in a designated regional area for the duration of the visa — generally five years — and then meet the regional residence requirement for at least three of those years when applying for the 191 permanent visa. If you ultimately wish to live in a major metropolitan area, the 491 requires you to defer that for the period of the regional obligation. The 190 (if you can obtain state nomination) or the 189 (if your base score is high enough) grant permanent residence from grant date with no regional obligation. Consider which pathway aligns with your longer-term plans.",
  },
  {
    question: 'Can I visit my family in a major city while holding the 491?',
    answer: "Brief visits to metropolitan areas — for holidays, family events, medical appointments, or other personal reasons — are generally not considered a breach of the regional living condition. The condition is about where you are ordinarily resident, not where you are at any given moment. However, if you begin regularly living in or commuting from a metropolitan area, this may constitute a breach. There is no fixed rule on what frequency of visits is permissible — seek advice if you are unsure.",
  },
  {
    question: 'What if my eligible relative sponsor moves out of the regional area after I lodge?',
    answer: "If you were sponsored by an eligible relative who subsequently moves out of a designated regional area, this does not automatically invalidate your 491 visa or change your conditions. The regional living condition applies to you — you must continue to live in a designated regional area regardless of where your relative sponsor moves. However, if the relative sponsor moves before the nomination is approved, this may affect the nomination itself — seek advice promptly if this situation arises.",
  },
  {
    question: 'Do I need to find a job in a regional area before applying?',
    answer: "There is generally no requirement to have a job offer in a regional area before lodging the 491 application. However, once the visa is granted, you must live and genuinely seek work in a designated regional area. Some states may ask for evidence of employment connections or intentions as part of their nomination criteria — check the specific requirements of the state program you are applying to.",
  },
  {
    question: 'What income level do I need to qualify for the 191?',
    answer: "The income threshold for the subclass 191 Skilled Regional (Residence) visa is set annually by legislative instrument and is indexed. The threshold must be met in each of the three income years you are relying on. As of the time of writing this page, the threshold is subject to the published instrument — you should verify the current amount with the Department of Home Affairs or your registered migration agent before relying on this information. Income from employment in a designated regional area is generally what counts.",
  },
]

/* ─── Related ─── */
const RELATED: RelatedPage[] = [
  { title: 'Skilled Migration Hub',         desc: 'Overview of all points-tested and skilled visa options.',                                  icon: 'star',    page: 'skilled-migration' },
  { title: 'Skilled Nominated (190)',        desc: 'Permanent skilled visa with state/territory nomination — no regional restriction.',        icon: 'flag',    page: 'skilled-nominated-190' },
  { title: 'State Nomination Requirements', desc: 'Each state has its own criteria, occupation lists, and timelines for nomination.',          icon: 'mappin',  page: 'skilled-migration' },
  { title: 'Points Test Explained',          desc: 'How the points test works and how the 15-point bonus affects your invitation prospects.',   icon: 'hash',    page: 'skilled-migration' },
]

export default function SkilledWorkRegional491Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['skilled-work-regional-491'].title
  }, [])
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Skilled Work Regional (491)', url: 'https://www.nanakmigration.com.au/skilled-work-regional-491' },
        ]}
        faqs={FAQ}
        service={{ name: 'Skilled Work Regional Visa (Subclass 491)', description: PAGE_META['skilled-work-regional-491'].metaDescription, url: 'https://www.nanakmigration.com.au/skilled-work-regional-491' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Skilled Work Regional (491)' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Subclass 491"
        eyebrowSub="Skilled Work Regional (Provisional) · Points-Tested"
        title={<>Skilled Work Regional<br /><em style={{ fontStyle: 'italic', color: GOLD }}>(Provisional) Visa — 491</em></>}
        deck="A five-year provisional visa for skilled workers nominated by a state or territory government, or sponsored by an eligible relative living in designated regional Australia. Provides the highest points bonus of any skilled visa — 15 points — and a pathway to permanent residence through the subclass 191."
        shortAnswer={<>The 491 suits applicants who need the <strong style={{ color: NAVY }}>15-point regional bonus</strong> to receive an invitation and are willing to live, work, and study in a <strong>designated regional area</strong> for at least five years. It is a provisional visa — permanent residence requires a separate 191 application after at least three years of regional residence and meeting income requirements. The conditions are binding: breaching the regional living requirement can affect current and future visa applications.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Assess your 491 eligibility', page: 'home' }}
        secondaryCta={{ label: 'Compare skilled visas →', page: 'skilled-migration' }}
        accent={GREEN}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Skilled Work Regional (Provisional) visa (subclass 491) is a five-year temporary visa for skilled workers who are nominated by a state or territory government or sponsored by an eligible family member, and who commit to living and working in a designated regional area of Australia, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It is a points-tested visa and nomination or sponsorship is worth 15 additional points. After three years of living and working regionally and meeting income thresholds, holders may be eligible to apply for the Permanent Residence (Skilled Regional) visa (subclass 191).
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={GREEN} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={GREEN} />
      </div>

      <DesignatedRegionalSection />

      <section id="timeline" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Section 2" title="How to Apply — Step by Step" accent={GREEN}
            intro="From skills assessment to visa grant. Each step must be completed in sequence; later steps cannot proceed without earlier ones." />
          <StepTimeline steps={STEPS} variant="cards" accent={GREEN} />
        </div>
      </section>

      <PRPathwaySection />

      <section id="comparison" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Section 4" title="State Nomination vs Eligible Relative Sponsorship" accent={GREEN}
            intro="Both routes provide the 15-point bonus and lead to the same 491 visa. The right route depends on whether you have an eligible relative in a regional area and which states are nominating your occupation." />
          <ComparisonTable columns={COMPARE_COLS} rows={COMPARE_ROWS} accent={GREEN}
            caption={`Current as at ${CURRENT_AS_AT}. State nomination programs change frequently — verify current criteria with each state's migration agency.`} />
        </div>
      </section>

      <ObligationsSection />

      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={GREEN} />
          <FaqAccordion items={FAQ} accent={GREEN} />
        </div>
      </section>

      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={GREEN} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title={<>Is the 491 the right pathway<br /><em style={{ fontStyle: 'italic', color: GOLD }}>for your situation?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your points score, occupation, regional intentions, and whether an eligible relative sponsor or state nomination is the more realistic route for you."
        primaryCta={{ label: 'Book a skilled migration consultation', page: 'home' }}
        secondaryCta={{ label: 'Compare the 190 alternative →', page: 'skilled-nominated-190' }}
        accent={GREEN}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Designated regional area boundaries, income thresholds for the 191, and state nomination criteria are subject to change by legislative instrument or state government decision. This page does not publish visa application fees." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
