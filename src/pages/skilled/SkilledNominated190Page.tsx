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
  EvidenceChecklist,
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
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_SKILLED } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const INDIGO = CAT_SKILLED
const GREEN    = '#f5a124'
const AMBER    = '#f5a124'
const BORDER   = '#e8edf6'
const GREY_BG  = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

/* ─── On-this-page ─── */
const TOC: NavSection[] = [
  { id: 'key-facts',     label: 'Key facts' },
  { id: 'timeline',      label: 'How to apply' },
  { id: 'comparison',    label: '189 vs 190 vs 491' },
  { id: 'commitment',    label: 'State commitment' },
  { id: 'who-suits',     label: 'Who this suits' },
  { id: 'evidence',      label: 'Evidence checklist' },
  { id: 'faq',           label: 'FAQ' },
  { id: 'related',       label: 'Related pages' },
]

/* ─── Key facts ─── */
const KEY_FACTS: KeyFact[] = [
  { icon: 'shield',    value: 'Permanent',        label: 'From the date of grant',              note: 'No provisional stage — permanent residence is granted directly.' },
  { icon: 'hash',      value: '+5 bonus points',  label: 'State or territory nomination',       note: 'Adds 5 points to your points test score under the standard points test.' },
  { icon: 'flag',      value: 'Required',         label: 'Nomination by a state or territory',  note: 'Must be nominated before receiving an invitation to apply.' },
  { icon: 'check',     value: 'Generally needed', label: 'Skills assessment',                   note: 'From the relevant assessing authority for your occupation.' },
  { icon: 'globe',     value: 'Competent English', label: 'English requirement',                note: 'Certain exemptions may apply — confirm your status with a migration agent.' },
  { icon: 'user',      value: 'Generally under 45', label: 'Age at invitation',                 note: 'Age is assessed at the date the invitation to apply is received.' },
]

/* ─── Step timeline ─── */
const STEPS: TimelineStep[] = [
  {
    code: '01', title: 'Obtain a skills assessment', duration: 'Allow 4–16+ weeks', color: INDIGO,
    points: [
      'Apply to the assessing authority relevant to your ANZSCO occupation code.',
      'Gather academic transcripts, employment references, and other documents required by your assessing body.',
      'A positive assessment is generally required before lodging your EOI; processing times vary widely by authority.',
      'Check the validity period of your assessment — most are valid for three years from the date of issue.',
    ],
  },
  {
    code: '02', title: 'Achieve the required English level', duration: 'Test booking required', color: INDIGO,
    points: [
      'Competent English is generally required for the 190 visa — commonly IELTS 6 in each band or equivalent.',
      'Proficient or Superior English scores attract additional points in the points test.',
      'Book your test early — popular test dates fill quickly and results may take several weeks.',
      'Confirm whether an exemption applies to you before testing.',
    ],
  },
  {
    code: '03', title: 'Submit an Expression of Interest (EOI) in SkillSelect', duration: 'No fee', color: INDIGO,
    points: [
      'Create a SkillSelect profile at immi.homeaffairs.gov.au and complete your EOI.',
      'Select subclass 190 as one of your visa preferences and select the state or territory you are interested in being nominated by.',
      'Your EOI is ranked by total points score — higher scores are generally invited first within each occupation.',
      'EOIs remain active for two years from submission; you may update your EOI at any time.',
    ],
  },
  {
    code: '04', title: 'Receive state or territory nomination', duration: 'Varies by state', color: INDIGO,
    points: [
      'Each state and territory runs its own nomination program with its own criteria, occupation lists, and processing times.',
      'Most states require a separate expression of interest or application through their own system.',
      'Nomination criteria may include a minimum points score above the federal minimum, occupation requirements, a connection to the state, and commitments about living and working there.',
      'Nomination is not guaranteed — states can select, decline, or cap applications at any time.',
    ],
  },
  {
    code: '05', title: 'Receive an invitation to apply', duration: 'After nomination', color: INDIGO,
    points: [
      'Once nominated, the Department of Home Affairs generally issues an invitation to apply for the 190 visa.',
      'Invitations are issued in regular rounds; the points cutoff for the 190 is generally lower than the 189 because the nomination adds 5 points.',
      'An invitation to apply is not a visa grant — it authorises you to lodge a visa application.',
      'The invitation expires; the 190 application must generally be lodged within 60 days of the invitation.',
    ],
  },
  {
    code: '06', title: 'Lodge the 190 visa application', duration: 'Within 60 days of invitation', color: INDIGO,
    points: [
      'Arrange health examinations via a HAP ID and obtain police clearances for all required countries.',
      'Gather the full evidence package — skills assessment, English results, employment records, identity documents.',
      'Include family members as secondary applicants at the time of lodgement.',
      'Monitor the application and respond promptly to any request for further information from the Department.',
    ],
  },
  {
    code: '07', title: 'Visa decided', duration: 'Processing times vary', color: GREEN,
    points: [
      'If approved, permanent residence is granted from the date of decision.',
      'Processing times for 190 applications vary — the Department of Home Affairs publishes indicative times on its website.',
      'The 190 visa includes a two-year travel facility from the date of grant; a Resident Return Visa is required to re-enter Australia as a permanent resident after this expires.',
      'The condition to live and work in the nominating state for at least two years applies from grant.',
    ],
  },
]

/* ─── Comparison table ─── */
const COMPARE_COLS: ComparisonColumn[] = [
  { key: 'v189', label: 'Subclass 189' },
  { key: 'v190', label: 'Subclass 190', highlight: true },
  { key: 'v491', label: 'Subclass 491' },
]
const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Visa type',            v189: 'Permanent — no provisional stage',         v190: 'Permanent — no provisional stage',                               v491: 'Provisional — 5 years; pathway to permanent 191' },
  { feature: 'Nomination required',  v189: 'No — independent, no sponsor or nominator', v190: 'Yes — by an Australian state or territory government',           v491: 'Yes — state/territory or eligible relative sponsor' },
  { feature: 'Points bonus',         v189: 'No bonus — score reflects personal factors only', v190: '+5 points for state/territory nomination',                v491: '+15 points for regional nomination or sponsorship' },
  { feature: 'Occupation list',      v189: 'MLTSSL',                                   v190: 'MLTSSL or state-specific list depending on the nominating state', v491: 'MLTSSL or state/territory regional list' },
  { feature: 'Work obligations',     v189: 'None — live and work anywhere in Australia', v190: 'Generally required to live and work in the nominating state for at least 2 years', v491: 'Must live, work and study only in a designated regional area' },
  { feature: 'Pathway to PR',        v189: 'Already permanent from grant',              v190: 'Already permanent from grant',                                   v491: 'Apply for 191 after 3 years in a regional area meeting income requirements' },
  { feature: 'Typical use case',     v189: 'High-scoring applicants with in-demand occupations who prefer flexibility', v190: 'Applicants who need the nomination points bonus or have a strong connection to a particular state', v491: 'Applicants who need the higher points bonus and are willing to live regionally' },
]

/* ─── Evidence checklist ─── */
const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Identity', icon: 'user', color: NAVY,
    items: [
      'Passport (all pages, current and any recently expired passports)',
      'Birth certificate (may be required for name or date-of-birth verification)',
      'Change of name documents where applicable',
    ],
  },
  {
    title: 'Skills assessment', icon: 'check', color: INDIGO,
    items: [
      'Positive skills assessment letter from the relevant assessing authority',
      'Assessment must be in the correct ANZSCO occupation and within its validity period',
      'Academic transcripts and degree certificates (if required by your assessing body)',
    ],
  },
  {
    title: 'English proficiency', icon: 'globe', color: '#2563eb',
    items: [
      'English test results within the validity period (IELTS, PTE Academic, TOEFL iBT, OET, or Cambridge)',
      'Evidence of citizenship of an exempt country if relying on a language exemption',
      'Evidence of five or more years of full-time English-medium study if relying on that exemption',
    ],
  },
  {
    title: 'Work experience', icon: 'briefcase', color: AMBER,
    items: [
      'Employment references on company letterhead for each role claimed — signed by an authorised officer',
      'Payslips or wage records for all claimed employment periods',
      'Tax returns or ATO income assessments covering the claimed years',
      'Certified translations of overseas employment records where documents are not in English',
    ],
  },
  {
    title: 'State or territory nomination', icon: 'flag', color: INDIGO,
    items: [
      'State or territory nomination approval letter',
      'Evidence of compliance with any state-specific conditions attached to the nomination',
    ],
  },
  {
    title: 'Health and character', icon: 'shield', color: GREEN,
    items: [
      'Health examination arranged via HAP ID with a DHA-approved panel physician',
      'Police clearances for all countries where you have lived for 12+ months since age 16',
      'AFP National Police Certificate for periods of Australian residence',
    ],
  },
]

/* ─── FAQ ─── */
const FAQ: FaqItem[] = [
  {
    question: 'How many points do I need to receive an invitation for the 190?',
    answer: "The minimum points score to submit an EOI is 65 points. However, invitation cutoffs — the minimum score at which invitations are actually issued in each round — are typically significantly higher and vary by occupation and invitation round. The 190 nomination adds 5 points to your score. Cutoffs change with each round and are not published in advance. Because state nomination itself requires meeting state criteria (which often include a minimum points threshold), a score that qualifies for state nomination may still be below the federal invitation cutoff in competitive rounds.",
  },
  {
    question: 'Can I apply to multiple states for nomination at the same time?',
    answer: 'In most cases, yes — there is no general rule preventing you from applying to more than one state or territory for nomination simultaneously. However, each state runs its own program with its own criteria, and some states may require you to commit to that state before they will nominate you. Accepting a nomination generally implies a commitment to live and work in that state. Seek advice if you are considering multiple simultaneous state applications.',
  },
  {
    question: 'What does "generally required to live and work in the nominating state" mean in practice?',
    answer: "Subclass 190 visa holders are generally required to live and work in the nominating state for at least two years after the visa is granted. This is an obligation — not merely a preference — and the Department of Home Affairs may take it into account when assessing future visa applications. However, the 190 is a permanent visa and does not impose a geographic condition in the same way as the 491. There is currently no formal compliance mechanism that prevents a 190 holder from moving to another state after the two-year commitment period (or before, in limited circumstances such as family or employment hardship). You should obtain specific advice for your circumstances.",
  },
  {
    question: 'My occupation is not on the MLTSSL. Can I still get a 190?',
    answer: "Some states maintain their own occupation lists for the 190 nomination program that include occupations not on the standard MLTSSL. If your occupation appears on a state-specific list but not the MLTSSL, you may be eligible for nomination by that state for a 190, but the federal MLTSSL generally applies to the visa itself. Seek advice on whether your occupation and the applicable list satisfy both the state nomination criteria and the federal visa requirements.",
  },
  {
    question: 'How long does state nomination take?',
    answer: 'Processing times for state and territory nomination vary widely — from a few weeks to several months depending on the state, the occupation, and the current volume of applications. Some states process nominations in regular rounds; others process continuously. State nomination timelines are separate from and additional to the federal Department of Home Affairs processing time for the visa application itself. Check the relevant state migration agency website for current indicative times.',
  },
  {
    question: 'What happens if my invitation expires before I can lodge?',
    answer: "An invitation to apply for the 190 generally must be accepted and the visa application lodged within 60 days of the date of issue. If the invitation expires before lodgement, it lapses and cannot be reinstated. You would generally need to have a new EOI and go through the invitation process again — which may mean waiting for a further invitation round and potentially needing to update your English test or other time-sensitive documents. It is important to have all documents ready before the nomination and invitation are received.",
  },
]

/* ─── Related pages ─── */
const RELATED: RelatedPage[] = [
  { title: 'Skilled Migration Hub',           desc: 'Overview of all points-tested and skilled visa pathways.',                              icon: 'star',    page: 'skilled-migration' },
  { title: 'Skilled Independent (189)',        desc: 'Permanent skilled visa with no nomination or sponsorship required.',                   icon: 'shield',  page: 'skilled-independent-189' },
  { title: 'Skilled Work Regional (491)',      desc: 'Provisional regional visa with a higher points bonus and pathway to permanent 191.',   icon: 'mappin',  page: 'skilled-work-regional-491' },
  { title: 'State Nomination Requirements',   desc: 'Each state and territory has its own criteria, occupation lists, and timelines.',       icon: 'flag',    page: 'skilled-migration' },
  { title: 'Points Test Explained',           desc: 'How the points test works, what factors score points, and typical invitation cutoffs.', icon: 'hash',    page: 'skilled-migration' },
]

/* ─── State commitment section (local) ─── */
function StateCommitmentSection() {
  const bullets = [
    { icon: 'home',      label: 'Live in the nominating state', body: 'The general expectation is that you will reside in the nominating state for at least two years after the visa is granted. This is a condition of accepting state nomination.' },
    { icon: 'briefcase', label: 'Work in the nominating state', body: 'You are generally expected to work — or genuinely seek work — in the nominating state during the commitment period. Working remotely for an employer in another state may or may not satisfy this depending on the circumstances.' },
    { icon: 'alert',     label: 'Future visa applications', body: 'The Department of Home Affairs may consider your compliance with the state commitment when assessing future applications — for example, a Resident Return Visa or citizenship application. Non-compliance can be a negative factor.' },
    { icon: 'check',     label: 'Hardship exceptions', body: 'In some circumstances — such as family hardship, domestic violence, or genuine inability to find suitable work — it may be possible to argue that relocation was necessary. This is assessed case by case and is not automatic.' },
  ]
  return (
    <section id="commitment" style={{ background: '#fff', padding: '72px 32px' }}>
      <div style={{ maxWidth: 900, margin: '0 auto' }}>
        <SectionHeading kicker="Section 3" title="The State Commitment" accent={INDIGO}
          intro="Accepting a state or territory nomination for the 190 visa generally involves a commitment to live and work in that state. This is a genuine obligation — not merely aspirational." />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
          {bullets.map(b => (
            <div key={b.label} style={{ background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 12, padding: '18px 18px' }}>
              <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                <div style={{ width: 30, height: 30, borderRadius: 8, background: `${INDIGO}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={b.icon} size={14} color={INDIGO} />
                </div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, paddingTop: 4 }}>{b.label}</div>
              </div>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.7, margin: 0 }}>{b.body}</p>
            </div>
          ))}
        </div>
        <Callout variant="warning">
          The 190 is a permanent visa — it does not have a geographic condition attached to the visa grant itself in the same way as the 491. However, the commitment is real and should be taken seriously. Seek specific advice about the obligations applicable in the state nominating you.
        </Callout>
      </div>
    </section>
  )
}

/* ─── Who this suits (local) ─── */
function WhoSuitsSection() {
  const profiles = [
    { icon: 'trendingup', heading: 'You need extra points', body: "If your points score sits just below the typical 189 invitation cutoff, the 5-point nomination bonus from state nomination may be enough to receive an invitation. The 190 is commonly used by applicants who have a competitive but not top-tier score." },
    { icon: 'mappin', heading: 'You have a genuine connection to a state', body: "If you have been living, working, or studying in a particular state, or have family there, state nomination may be a natural fit. Many states prioritise applicants with existing ties when assessing nomination applications." },
    { icon: 'briefcase', heading: 'Your occupation is in demand in a specific state', body: "State occupation demand differs from the national MLTSSL. A state experiencing shortages in your occupation may be actively seeking nominations in your field — even if federal demand is lower. Check each state's current occupation lists." },
    { icon: 'shield', heading: 'You want permanent residence directly', body: "Unlike the 491, the 190 grants permanent residence from the date of the visa grant — there is no provisional stage and no separate application for PR. This suits applicants who prefer the certainty of permanent status immediately." },
  ]
  return (
    <section id="who-suits" style={{ background: GREY_BG, padding: '72px 32px' }}>
      <div style={{ maxWidth: 960, margin: '0 auto' }}>
        <SectionHeading kicker="Section 4" title="Who This Generally Suits" accent={INDIGO}
          intro="The 190 is particularly well-suited to several applicant profiles. Whether it is the right pathway depends on your individual points score, occupation, and preferred location." />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {profiles.map(p => (
            <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '22px 20px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
              <div style={{ marginBottom: 10 }}><Icon name={p.icon} size={28} color={INDIGO} /></div>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{p.heading}</div>
              <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function SkilledNominated190Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['skilled-nominated-190'].title
  }, [])
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Skilled Nominated (190)', url: 'https://www.nanakmigration.com.au/skilled-nominated-190' },
        ]}
        faqs={FAQ}
        service={{ name: 'Skilled Nominated Visa (Subclass 190)', description: PAGE_META['skilled-nominated-190'].metaDescription, url: 'https://www.nanakmigration.com.au/skilled-nominated-190' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Skilled Nominated Visa (190)' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Subclass 190"
        eyebrowSub="Skilled Nominated · Points-Tested Permanent"
        title={<>Skilled Nominated Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>(Subclass 190)</em></>}
        deck="A permanent points-tested visa for skilled workers nominated by an Australian state or territory government. The 190 grants permanent residence from the date of grant — there is no provisional stage."
        shortAnswer={<>The 190 is generally suited to applicants whose points score is <strong style={{ color: NAVY }}>competitive but benefits from the 5-point nomination bonus</strong>, or who have a genuine connection to a particular state or territory. State nomination is required before the Department of Home Affairs issues an invitation to apply. Each state runs its own program with its own criteria — meeting the state requirements is separate from, and in addition to, meeting the federal visa requirements.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Assess your 190 eligibility', page: 'home' }}
        secondaryCta={{ label: 'Compare skilled visas →', page: 'skilled-migration' }}
        accent={INDIGO}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Skilled Nominated visa (subclass 190) is a permanent residence visa for skilled workers nominated by an Australian state or territory government, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It is a points-tested visa and nomination is worth five additional points toward your points score. Each state and territory sets its own eligibility criteria, occupation lists and application procedures, so requirements vary significantly depending on which jurisdiction you apply through.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={INDIGO} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={INDIGO} />
      </div>

      <section id="timeline" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Section 1" title="How to Apply — Step by Step" accent={INDIGO}
            intro="An indicative pathway from skills assessment to visa grant. Each step has its own timing and cannot be skipped." />
          <StepTimeline steps={STEPS} variant="cards" accent={INDIGO} />
        </div>
      </section>

      <section id="comparison" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Section 2" title="189 vs 190 vs 491 — Key Differences" accent={INDIGO}
            intro="All three are points-tested skilled visas. The right choice depends on your score, occupation, and whether you are willing to commit to a state or regional area." />
          <ComparisonTable columns={COMPARE_COLS} rows={COMPARE_ROWS} accent={INDIGO}
            caption={`Current as at ${CURRENT_AS_AT}. Requirements are subject to legislative change — verify with the Department of Home Affairs before lodging.`} />
        </div>
      </section>

      <StateCommitmentSection />
      <WhoSuitsSection />

      <section id="evidence" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Section 5" title="Evidence Checklist" accent={INDIGO}
            intro="An indicative checklist only. Your specific case may require additional documents. Always confirm requirements with your registered migration agent." />
          <EvidenceChecklist groups={EVIDENCE} accent={INDIGO} defaultOpen={0} />
        </div>
      </section>

      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={INDIGO} />
          <FaqAccordion items={FAQ} accent={INDIGO} />
        </div>
      </section>

      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={INDIGO} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title={<>Ready to assess your<br /><em style={{ fontStyle: 'italic', color: GOLD }}>190 pathway?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your points score, occupation, English level, and skills assessment status against current state nomination criteria — and identify which state or territory is most likely to nominate you."
        primaryCta={{ label: 'Book a skilled migration consultation', page: 'home' }}
        secondaryCta={{ label: 'Compare all skilled visa options →', page: 'skilled-migration' }}
        accent={INDIGO}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="State and territory nomination programs, occupation lists, and points cutoffs are subject to change independently of federal requirements. This page does not publish visa application fees." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
