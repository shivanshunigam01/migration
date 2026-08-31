import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  ComparisonTable,
  Callout,
  AnswerBox,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  ComparisonColumn,
  ComparisonRow,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, CAT_SKILLED, CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const VIOLET = CAT_SKILLED
const GREEN   = GOLD
const AMBER   = GOLD
const TEAL    = CAT_EMPLOYER
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',     label: 'Key facts' },
  { id: 'jurisdictions', label: 'All 8 jurisdictions' },
  { id: '190-vs-491',   label: '190 vs 491 nomination' },
  { id: 'commitment',   label: 'Commitment to the state' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'related',      label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'flag',  value: '8 jurisdictions',   label: 'All states and territories can nominate — subject to their own open programs', note: 'Not all states nominate for all skilled visas at all times. Some may pause or close programs.' },
  { icon: 'hash',  value: '+5 / +15 pts',      label: 'Nomination adds points to your EOI score',                                   note: '190 nomination generally adds 5 points; 491 nomination/sponsorship generally adds 15 points.' },
  { icon: 'clock', value: 'Criteria change',   label: "Each state's criteria change frequently — sometimes without notice",          note: "State nomination is separate from the federal visa process. Each state sets its own rules and can change them at any time." },
  { icon: 'mappin',value: 'Residence may apply', label: 'Some states expect you to live (and may require you to work) there',       note: 'Committing to live in the nominating state is a general expectation and a legal obligation for some visa holders.' },
  { icon: 'briefcase', value: 'Job offer helps', label: 'A job offer or employer support may be required or heavily weighted',       note: 'NSW, WA and some other states typically prioritise applicants with a relevant job offer or employer support.' },
]

const JURISDICTION_COLUMNS: ComparisonColumn[] = [
  { key: 'visas',     label: 'Visas offered',                highlight: true },
  { key: 'focus',     label: 'Typical focus areas' },
  { key: 'residency', label: 'Residence / job offer' },
  { key: 'apply',     label: 'How to apply' },
]

const JURISDICTION_ROWS: ComparisonRow[] = [
  {
    feature:   'NSW (New South Wales)',
    visas:     '190, 491',
    focus:     'Healthcare, engineering, construction, ICT, accountants, education. Prioritises applicants living and working in NSW.',
    residency: 'Typically requires you to be living in NSW or have an NSW job offer. Job offer may be required for some streams.',
    apply:     'NSW Skills & Talent portal (online). NSW publishes its own occupation lists and criteria.',
  },
  {
    feature:   'VIC (Victoria)',
    visas:     '190, 491',
    focus:     'Skilled workers with a Victorian job offer or studying/living in Victoria. Priority sectors include health, engineering, trades.',
    residency: 'Victorian connection strongly preferred — studying, living, or working in Victoria. Job offer may be required.',
    apply:     'Skilled Visa Victoria portal (online). Victoria publishes occupation lists and periodically pauses programs.',
  },
  {
    feature:   'QLD (Queensland)',
    visas:     '190, 491',
    focus:     'Healthcare, engineering, construction trades, regional occupations. Regional programs under 491 for areas outside greater Brisbane.',
    residency: 'Queensland connection or genuine intention to live in QLD. Some streams require QLD job offer.',
    apply:     'Queensland Skilled Migration portal (online). Queensland 491 targets designated regional areas.',
  },
  {
    feature:   'SA (South Australia)',
    visas:     '190, 491',
    focus:     'Healthcare, trades, agricultural occupations, regional SA. SA is generally considered more accessible for a broader occupation range.',
    residency: 'Commitment to live and work in South Australia. Some streams do not require a job offer but expect genuine intent to settle.',
    apply:     'South Australia Skilled Migration portal (online).',
  },
  {
    feature:   'WA (Western Australia)',
    visas:     '190, 491',
    focus:     'Mining, engineering, resources sector, healthcare, construction trades, regional WA. Western Australia has its own robust skilled migration program.',
    residency: 'Preference for applicants with a WA job offer or working in WA. Job offer is generally required or heavily prioritised.',
    apply:     'WA Skilled Migration portal and Work and Stay WA program (online).',
  },
  {
    feature:   'TAS (Tasmania)',
    visas:     '190, 491',
    focus:     'Broad range of occupations given smaller economy. Healthcare, trades, ICT, hospitality. Tasmania encourages regional settlement.',
    residency: 'Commitment to live in Tasmania. Some programs accept applicants without a prior Tasmanian connection.',
    apply:     'Tasmanian Skilled Migration portal (online). Tasmania is generally accessible for interstate and offshore applicants.',
  },
  {
    feature:   'ACT (Australian Capital Territory)',
    visas:     '190',
    focus:     'Healthcare, engineering, ICT, government-sector adjacent roles. ACT generally requires a genuine connection to Canberra.',
    residency: 'Typically requires living and working in the ACT or a formal ACT job offer at the time of application.',
    apply:     'ACT Skilled Migration portal (online). ACT does not nominate for the 491 — it is not a designated regional area.',
  },
  {
    feature:   'NT (Northern Territory)',
    visas:     '190, 491',
    focus:     'Healthcare, education, construction, hospitality, trades. NT actively recruits due to ongoing skills shortages and has a broadly accessible program.',
    residency: 'Commitment to live and work in the NT. NT may accept applicants without a prior NT connection in many occupations.',
    apply:     'NT Skilled Migration portal and the DAMA (Designated Area Migration Agreement) for some employer-sponsored contexts.',
  },
]

/* ─── 190 vs 491 section ─── */
const COMPARE_COLUMNS: ComparisonColumn[] = [
  { key: 'v190', label: 'Subclass 190 (Skilled Nominated)', highlight: true },
  { key: 'v491', label: 'Subclass 491 (Skilled Work Regional)' },
]
const COMPARE_ROWS: ComparisonRow[] = [
  { feature: 'Visa type',           v190: 'Permanent from grant',        v491: 'Provisional (5 years); pathway to permanent 191' },
  { feature: 'Points bonus',        v190: '+5 points',                   v491: '+15 points' },
  { feature: 'Who nominates',       v190: 'Any state or territory',       v491: 'State/territory OR eligible relative in regional area' },
  { feature: 'Where you must live', v190: 'In the nominating state generally for 2 years', v491: 'In a designated regional area for the full 5 years' },
  { feature: 'Work rights',         v190: 'Unrestricted from grant',      v491: 'Must live and work in regional Australia' },
  { feature: 'PR pathway',          v190: 'Already permanent',            v491: 'Apply for 191 after 3 years meeting conditions' },
  { feature: 'ACT eligible',        v190: 'Yes',                          v491: 'No — ACT is not a designated regional area' },
]

/* ─── Commitment section ─── */
const COMMITMENT_POINTS = [
  { icon: 'mappin', color: VIOLET, heading: 'Legal obligation for 190 holders', body: "If you hold the subclass 190 visa, you are generally required to live and work in the nominating state or territory for two years from the date of visa grant. This is a legislative obligation, not merely an expectation. Failing to comply may affect eligibility for citizenship." },
  { icon: 'mappin', color: VIOLET, heading: 'Stronger obligation for 491 holders', body: "The 491 visa requires you to live, work, and study only in a designated regional area throughout the five-year provisional visa period. This condition applies to your family members who hold a secondary 491 visa as well. Meeting this condition is also required before applying for the permanent 191 visa." },
  { icon: 'alert',  color: AMBER,  heading: "State nomination is not a binding contract from the state", body: "Receiving state nomination confirms the state considers you suitable under its current criteria. It does not mean the state will support you through the visa process or provide employment. The federal Department of Home Affairs assesses the actual visa application independently." },
  { icon: 'check',  color: GREEN,  heading: 'Commitment is assessed at visa decision', body: "The Department of Home Affairs and the states both take commitment requirements seriously. Applicants who obtain nomination and then relocate elsewhere may face consequences for future applications, including citizenship. Consider your genuine intention to live in the nominating jurisdiction before applying." },
]

const FAQ: FaqItem[] = [
  {
    question: "Can I apply to more than one state for nomination at the same time?",
    answer: "Generally, no. Most states require you to have only one active state nomination application at a time and expect you to withdraw any other applications if you receive a nomination. Some states explicitly prohibit simultaneous applications to multiple jurisdictions. Additionally, the federal process only permits one nomination to be associated with an EOI at any time. Applying to multiple states simultaneously and receiving multiple nominations may create compliance problems.",
  },
  {
    question: "Do I have to live in the nominating state before applying for nomination?",
    answer: "It depends on the state and the stream. NSW and WA typically require applicants to be living and working in the state at the time of application, or to have a confirmed job offer. South Australia, Tasmania, and the NT in particular often have streams for offshore applicants or those living elsewhere in Australia. Check the specific state's current criteria — they change frequently. Some states have 'offshore' streams designed for applicants applying from overseas.",
  },
  {
    question: "What happens if my circumstances change after I receive state nomination?",
    answer: "If your circumstances change materially — for example, your job in the nominating state ends, or you move interstate — before the visa is granted, you should seek advice from a registered migration agent promptly. Some changes can affect the validity of the nomination or your visa eligibility. Informing the state and the Department of Home Affairs of relevant changes is generally the safer course of action.",
  },
  {
    question: "How long does state nomination take?",
    answer: "Processing times vary considerably by state and by the volume of applications. Some states process nominations in a few weeks; others can take several months. Processing times are not published reliably by all states and can change without notice. After receiving a nomination, you then need to be invited by the federal Department of Home Affairs, which is a separate process with its own timeline.",
  },
  {
    question: "Can my family members live outside the regional area if I have a 491 visa?",
    answer: "No. Family members who are included in your 491 visa application — or who are granted a secondary 491 visa — are generally also required to live in the designated regional area. This applies to your spouse or de facto partner and any dependent children on the visa. Living outside a designated regional area while holding a 491 visa may jeopardise eligibility for the permanent 191 visa.",
  },
  {
    question: "What is the difference between a state nomination and a relative sponsorship for the 491?",
    answer: "For the subclass 491 visa, there are two pathways: state/territory nomination (administered by the state migration program) and sponsorship by an eligible relative living in a designated regional area of Australia. The relative sponsorship pathway allows an eligible Australian citizen, permanent resident, or eligible New Zealand citizen living regionally to sponsor you — which is separate from the state nomination programs. Both add 15 points. A registered migration agent can advise on which pathway is more accessible for your circumstances.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skilled Nominated (190)',       desc: 'Permanent skilled visa with state or territory nomination.',        icon: 'flag',   page: 'skilled-nominated-190' },
  { title: 'Skilled Work Regional (491)',   desc: 'Provisional regional visa with a 15-point nomination bonus.',      icon: 'mappin', page: 'skilled-work-regional-491' },
  { title: 'Points Test Explained',         desc: 'How nomination points interact with the rest of your EOI score.',  icon: 'hash',   page: 'points-test' },
  { title: 'Skilled Migration Hub',         desc: 'Overview of all points-tested skilled visa pathways.',             icon: 'star',   page: 'skilled-migration' },
]

export default function StateNominationPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['state-nomination'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'State Nomination Requirements', url: 'https://www.nanakmigration.com.au/state-nomination' },
        ]}
        faqs={FAQ}
        service={{ name: 'State Nomination Requirements', description: PAGE_META['state-nomination'].metaDescription, url: 'https://www.nanakmigration.com.au/state-nomination' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'State Nomination Requirements' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Skilled Migration · 190 · 491"
        title={<>State Nomination<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Requirements</em></>}
        deck="How state and territory nomination generally works for the Skilled Nominated (190) and Skilled Work Regional (491) visas, and what each jurisdiction tends to look for."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get advice on state nomination', page: 'home' }}
        accent={VIOLET}
        navigate={navigate}
        footnote="General information only. State nomination criteria change frequently — always check each state's current published requirements and obtain advice from MARN 2619467."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            State and territory nomination allows a state or territory government to invite a skilled worker to apply for a state-nominated visa — the Skilled Nominated (subclass 190) for permanent residence, or the Skilled Work Regional (subclass 491) for provisional residence, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Each state runs its own nomination program with specific occupation lists, requirements, and application portals.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={VIOLET} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={VIOLET} />
      </div>

      {/* Jurisdictions table */}
      <section id="jurisdictions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            kicker="All 8 Jurisdictions"
            title="State and Territory Nomination Overview"
            intro="The table below provides a general guide to what each jurisdiction typically looks for. Criteria, occupations, and availability change regularly — check each state's current website before applying."
            accent={VIOLET}
          />
          <div style={{ marginBottom: 24 }}>
            <Callout variant="warning">
              <strong>State nomination criteria change frequently and sometimes without notice.</strong> The information below is a general guide only and may not reflect each state or territory's current published requirements. Always check the official state migration website for the jurisdiction you intend to apply to before submitting any application. Requirements can change between when this page was last updated and when you read it.
            </Callout>
          </div>
          <ComparisonTable
            columns={JURISDICTION_COLUMNS}
            rows={JURISDICTION_ROWS}
            accent={VIOLET}
            caption="General guide only. Each jurisdiction publishes its own current occupation lists, criteria, and application processes — these take precedence."
          />
        </div>
      </section>

      {/* 190 vs 491 */}
      <section id="190-vs-491" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Key Difference"
            title="190 Nomination vs 491 Nomination"
            intro="Both the 190 and 491 visas involve a form of nomination, but they differ significantly in visa type, obligations, and the points bonus they provide."
            accent={VIOLET}
          />
          <ComparisonTable
            columns={COMPARE_COLUMNS}
            rows={COMPARE_ROWS}
            accent={VIOLET}
            caption="Indicative guide only. Confirm current legislative requirements with the Department of Home Affairs."
          />
        </div>
      </section>

      {/* Commitment section */}
      <section id="commitment" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Important Obligations"
            title="Commitment to the Nominating State"
            intro="Accepting a state or territory nomination — and being granted a visa on that basis — carries real obligations. Understanding these before you apply is important."
            accent={VIOLET}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16, marginBottom: 24 }}>
            {COMMITMENT_POINTS.map(p => (
              <div key={p.heading} style={{ background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '20px 18px' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 30, height: 30, borderRadius: 8, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={14} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <Callout variant="note">
            <strong>Commitment requirements are enforced.</strong> If you accept state nomination and are granted a visa but do not genuinely intend to live in the nominating state, you may be in breach of visa conditions. Obtaining advice from a registered migration agent (MARN 2619467) before committing to a state is strongly recommended.
          </Callout>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={VIOLET} />
          <FaqAccordion items={FAQ} accent={VIOLET} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={VIOLET} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Get advice on state nomination<br /><em style={{ fontStyle: 'italic', color: GOLD }}>before you apply</em></>}
        body="Navpreet Aulakh (MARN 2619467) can advise which state or territory nomination pathway is most accessible for your occupation, points score, and personal circumstances — and what you need to do to maximise your chances of a nomination."
        primaryCta={{ label: 'Book a state nomination consultation', page: 'home' }}
        secondaryCta={{ label: 'View the points test →', page: 'points-test' }}
        accent={VIOLET}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="State and territory nomination criteria, occupation lists, and program availability change frequently and may differ from the general guide provided on this page. Always check the current published requirements on each jurisdiction's official skilled migration website. Requirements are subject to change without notice." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
