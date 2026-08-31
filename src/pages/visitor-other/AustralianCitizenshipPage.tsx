import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  CardGrid,
  StepTimeline,
  Callout,
  EvidenceChecklist,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OnThisPageNav,
  ResidenceCalculator,
} from '@/components/page'
import type {
  KeyFact,
  PageCard,
  TimelineStep,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_VISITOR } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const ROYAL = CAT_VISITOR
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const ROSE    = '#e11d48'
const TEAL    = '#0e7490'
const VIOLET  = '#4f46e5'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',    label: 'Key facts' },
  { id: 'pathways',     label: 'Pathways to citizenship' },
  { id: 'residence',    label: 'Residence requirement' },
  { id: 'calculator',   label: 'Residence calculator' },
  { id: 'process',      label: 'The process' },
  { id: 'test',         label: 'Citizenship test' },
  { id: 'character',    label: 'Character and identity' },
  { id: 'absences',     label: 'Absences' },
  { id: 'evidence',     label: 'Evidence checklist' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'related',      label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'clock',     value: '4 years generally',     label: 'Generally 4 years of lawful residence in Australia required', note: 'Of which the last 12 months must generally be as a permanent resident. Absences and unlawful periods affect the calculation.' },
  { icon: 'check',     value: 'Citizenship test',       label: 'Most adults must pass the citizenship test',                   note: 'The test is taken online and covers Australian values, history, government and responsibilities. Some applicants are exempt.' },
  { icon: 'shield',    value: 'Good character',         label: 'Good character requirement applies',                           note: 'The Department of Home Affairs assesses character — including criminal history and conduct — before a decision is made.' },
  { icon: 'users',     value: 'Ceremony required',      label: 'Conferral of citizenship involves a ceremony and pledge',       note: 'After approval, citizenship is conferred at a citizenship ceremony where the applicant makes the Australian Citizenship Pledge.' },
  { icon: 'hash',      value: 'Not automatic at PR',    label: 'Permanent residence does not automatically lead to citizenship', note: 'You must separately apply for citizenship after meeting the residence and other requirements. PR is a prerequisite, not a guarantee.' },
]

/* ─── Pathways CardGrid ─── */
const PATHWAY_CARDS: PageCard[] = [
  {
    icon: 'check', color: ROYAL,
    title: 'Citizenship by conferral (application)',
    body: "The most common pathway. An eligible non-citizen applies for citizenship after meeting the residence requirements, passing the citizenship test, and satisfying the character and identity requirements. This pathway requires a formal application to the Department of Home Affairs and attendance at a citizenship ceremony.",
    note: "Most adult permanent residents who have lived lawfully in Australia for 4 years — with the last 12 months as a PR — will apply through this pathway.",
  },
  {
    icon: 'users', color: GREEN,
    title: 'Citizenship by descent',
    body: "A person born overseas to an Australian citizen parent may be entitled to Australian citizenship by descent. This does not require living in Australia — but eligibility depends on the parent's circumstances, including when the parent became an Australian citizen and whether the parent was an Australian citizen at the time of the birth.",
    note: "Citizenship by descent is not automatic — an application must be made and eligibility confirmed with the Department of Home Affairs.",
  },
  {
    icon: 'heart', color: AMBER,
    title: 'Citizenship by adoption',
    body: "A child adopted by an Australian citizen under an Australian law or a recognised overseas adoption may be eligible for Australian citizenship. The eligibility rules depend on the specific adoption arrangement and when it occurred. A registered migration agent or a legal practitioner with relevant expertise can advise on eligibility.",
    note: "Requirements differ for intercountry adoptions and domestic adoptions. Confirm eligibility with the Department of Home Affairs.",
  },
  {
    icon: 'home', color: TEAL,
    title: 'Citizenship by birth in Australia',
    body: "A person born in Australia is not automatically an Australian citizen at birth (unlike some other countries). A person born in Australia becomes a citizen at birth only if at least one parent was an Australian citizen or permanent resident at the time of birth. Children born in Australia who do not acquire citizenship at birth may become entitled to apply for citizenship after living in Australia for a period.",
    note: "If you were born in Australia and are unsure of your citizenship status, seek advice — the rules can be complex for children of visa holders.",
  },
]

/* ─── Residence requirement section ─── */
const RESIDENCE_POINTS = [
  { icon: 'clock', color: ROYAL, heading: 'Generally 4 years of lawful residence', body: "The applicant must generally have been lawfully resident in Australia for 4 years immediately before the application is lodged. 'Lawful residence' means holding a valid visa — including bridging visas. Periods of unlawful status (without a valid visa) do not count towards the 4-year period." },
  { icon: 'shield', color: GREEN, heading: 'Last 12 months generally as a permanent resident', body: "Of the 4-year period, the last 12 months immediately before the application must generally have been spent as an Australian permanent resident (or as the holder of certain other prescribed statuses). Temporary visa holders — even long-term ones — generally cannot apply for citizenship until they have held PR for at least 12 months." },
  { icon: 'alert', color: AMBER, heading: 'Absences from Australia reduce the qualifying period', body: "Absences from Australia are generally allowed, but they reduce the period of lawful residence that counts. Generally, an applicant must not have been absent from Australia for more than 12 months in total during the 4-year period, and not more than 90 days in the 12 months immediately before application. Absences beyond these thresholds may mean the applicant needs to wait longer before applying." },
  { icon: 'alert', color: ROSE, heading: 'The 4-year clock restarts after certain events', body: "If an applicant leaves Australia permanently, or has a substantial gap in lawful residence, the 4-year residence period may need to be recalculated. Applications that do not meet the residence requirement at the time of lodgement will be refused — it is important to confirm the calculation is correct before applying." },
]

/* ─── Timeline ─── */
const STEPS: TimelineStep[] = [
  {
    code: '01', title: 'Confirm eligibility',
    points: [
      'Confirm you have met the general residence requirement — 4 years lawful residence, last 12 months as a PR.',
      'Calculate your absences — more than 12 months total in 4 years, or more than 90 days in the last 12 months, may affect eligibility.',
      'Check that you are not subject to any bar that prevents you from applying.',
      'Obtain advice from a registered migration agent if you are uncertain about any eligibility criteria.',
    ],
    color: ROYAL,
  },
  {
    code: '02', title: 'Lodge the application',
    points: [
      'Apply online through the Department of Home Affairs ImmiAccount.',
      'Pay the applicable application fee (check the current fee on the Department of Home Affairs website — fees are not published on this page).',
      'Attach required supporting documents at the time of lodgement.',
      'Include your Australian Citizenship Pledge declaration as part of the application.',
    ],
    color: ROYAL,
  },
  {
    code: '03', title: 'Citizenship test',
    points: [
      "Most adult applicants (generally aged 18–59) must sit the Australian citizenship test.",
      "The test is taken online through the Department of Home Affairs website — appointment booking is required.",
      "The test covers: Australian values, responsibilities and privileges of citizenship, Australian history and government.",
      "Applicants must achieve the pass score in a single sitting. There is no limit on the number of times the test can be taken.",
    ],
    color: AMBER,
  },
  {
    code: '04', title: 'Character and identity assessment',
    points: [
      "The Department of Home Affairs conducts character checks — including reviewing any criminal history and conduct in Australia and overseas.",
      "Identity documents are verified. Biometrics may be required.",
      "Additional information may be requested during processing. Respond promptly.",
    ],
    color: AMBER,
  },
  {
    code: '05', title: 'Decision',
    points: [
      "The Department of Home Affairs makes a decision on the application.",
      "If approved, the applicant will be invited to attend a citizenship ceremony.",
      "If refused, the applicant may have review rights — seek advice from a registered migration agent about options.",
      "Processing times vary — check current estimates on the Department of Home Affairs website.",
    ],
    color: GREEN,
  },
  {
    code: '06', title: 'Citizenship ceremony and pledge',
    points: [
      "Australian citizenship is conferred at an official citizenship ceremony — generally conducted by the local council or the Department of Home Affairs.",
      "At the ceremony, the applicant makes the Australian Citizenship Pledge.",
      "A citizenship certificate is issued at or after the ceremony.",
      "After the ceremony, the new citizen may apply for an Australian passport.",
    ],
    color: GREEN,
  },
]

/* ─── Test section ─── */
const TEST_POINTS = [
  { icon: 'bookopen', color: ROYAL, heading: 'What the test covers', body: "The Australian citizenship test assesses knowledge of Australian values, the responsibilities and privileges of citizenship, and aspects of Australian history, government and society. The test is based on the resource 'Our Common Bond', which is published by the Department of Home Affairs and is available on the Department's website. All study materials are publicly available — applicants are encouraged to use the official materials before sitting the test." },
  { icon: 'check', color: GREEN, heading: 'Who must take the test', body: "Generally, applicants aged 18–59 years at the time of the test must sit the citizenship test. Children under 18 and some applicants over 60 are generally exempt. Applicants who are unable to sit the test because of a permanent physical or mental incapacity may be exempt — but exemptions require supporting evidence and are assessed by the Department of Home Affairs." },
  { icon: 'clipboard', color: AMBER, heading: 'The Australian Values Statement', body: "As part of the citizenship application, applicants must make an Australian Values Statement — a declaration that they understand and commit to Australian values, including respect for the law, democracy, and the equal worth of all individuals. The Statement is part of the formal application and is not a separate document from the citizenship pledge made at the ceremony. It is a legal declaration." },
  { icon: 'alert', color: ROSE, heading: 'The pledge at the ceremony', body: "Australian citizenship is formally conferred when the applicant takes the Australian Citizenship Pledge at a citizenship ceremony. The pledge affirms commitment to Australia and to upholding its values, laws and democratic traditions. The pledge is a legal requirement — citizenship approval does not result in conferral until the pledge is taken at a ceremony." },
]

/* ─── Character and identity ─── */
const CHARACTER_POINTS = [
  { icon: 'shield', color: ROYAL, heading: 'Good character is assessed holistically', body: "The good character requirement for citizenship is assessed across the applicant's entire history — not just criminal history. The Department of Home Affairs considers conduct in Australia and overseas, including any visa conditions breached, any periods of unlawful status, and any criminal convictions. There is no automatic bar for a specific offence — each case is assessed on its own facts." },
  { icon: 'alert', color: ROSE,  heading: 'Criminal history must be disclosed', body: "All criminal convictions — including those from overseas and those that may be 'spent' under Australian law — must generally be disclosed. Failing to disclose a criminal conviction may itself be grounds for refusal or cancellation, even if the conviction would not otherwise have been a bar to citizenship. Seek advice from a registered migration agent if you have any criminal history before applying." },
  { icon: 'check', color: GREEN, heading: 'Identity must be established to a high standard', body: "The Department of Home Affairs requires applicants to establish their identity to a high standard of satisfaction. Primary identity documents (passports, birth certificates) are required. If primary identity documents are unavailable — due to circumstances in the applicant's country of origin — alternative arrangements exist but may involve additional steps and evidence." },
]

/* ─── Absences section ─── */
const ABSENCE_POINTS = [
  { icon: 'clock',  color: ROYAL, heading: 'General absence thresholds', body: "The general residence requirement for citizenship by conferral includes an absence threshold: applicants must generally not have been absent from Australia for more than 12 months in total during the 4-year period, and must generally not have been absent for more than 90 days in the 12 months immediately before the application. These are indicative thresholds — the legislative requirements should be confirmed with a registered migration agent." },
  { icon: 'check',  color: GREEN, heading: 'Absences may be discounted in some circumstances', body: "In limited circumstances, absences may be discounted — for example, absences for the purposes of Australian government service or for certain other approved purposes. These exceptions are assessed by the Department of Home Affairs on the specific facts. Do not assume an absence is excused without confirming with a migration agent." },
  { icon: 'alert',  color: AMBER, heading: 'Future absences before the ceremony', body: "If an applicant travels overseas after the application is decided but before attending a citizenship ceremony, the period away does not generally affect conferral — but very extended absences before the ceremony may be a factor. Attend the ceremony as promptly as practicable after it is scheduled." },
  { icon: 'layers', color: TEAL,  heading: 'Tracking absences accurately', body: "Applicants should keep accurate records of their travel history — departure and return dates — throughout the 4-year period. Departure and return dates can be confirmed through the VEVO system or by requesting a movement record from the Department of Home Affairs. Inaccurate absence records in the application may cause delays or affect the outcome." },
]

const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Identity documents',
    icon: 'user', color: ROYAL,
    items: [
      'Current passport (all biographical pages, certified copy)',
      'Previous passports covering the 4-year residence period',
      'Birth certificate (certified copy with translation if not in English)',
      'Name change documentation (marriage certificate, deed poll) if name differs from passport',
    ],
  },
  {
    title: 'Permanent residence evidence',
    icon: 'shield', color: GREEN,
    items: [
      'Evidence of current permanent residence visa (ImmiAccount or VEVO printout showing PR status)',
      'Letter from the Department of Home Affairs confirming PR grant (if available)',
      'Previous visa grant notices covering the 4-year period',
    ],
  },
  {
    title: 'Residence and travel history',
    icon: 'clock', color: AMBER,
    items: [
      'Evidence of 4 years of lawful residence in Australia — passport stamps, VEVO history, or Department of Home Affairs movement record',
      'Calculation of absences — including all departure and return dates during the 4-year period',
      'If claiming an absence exemption, evidence supporting the exemption (e.g., employment with an Australian government agency overseas)',
    ],
  },
  {
    title: 'Character documents',
    icon: 'clipboard', color: VIOLET,
    items: [
      'Police clearance certificates for any country in which you have lived for 12 months or more since turning 16 (requirements vary — check current requirements on the Department of Home Affairs website)',
      'Court records or evidence relating to any disclosed criminal conviction',
      'Evidence of immigration compliance (if relevant to character assessment)',
    ],
  },
  {
    title: 'For children included in the application',
    icon: 'users', color: TEAL,
    items: [
      "Child's birth certificate",
      "Evidence of the child's relationship to the applicant (if not evident from the birth certificate)",
      "Evidence of the child's lawful residence in Australia during the relevant period",
      "Evidence of parental consent if only one parent is applying and the other parent has parental responsibility",
    ],
  },
]

const FAQ: FaqItem[] = [
  {
    question: "How long does it generally take to process a citizenship application?",
    answer: "Processing times for citizenship by conferral vary and are published by the Department of Home Affairs on their website — they are not published on this page, as they change frequently. Current processing times should be checked on the Department of Home Affairs website before lodging, as they can range from several months to over a year depending on the volume of applications and individual complexity.",
  },
  {
    question: "I am on a temporary visa. Can I apply for citizenship?",
    answer: "Generally, no. The residence requirement for citizenship by conferral includes a requirement to have been a permanent resident for at least 12 months immediately before the application. Temporary visa holders — regardless of how long they have been in Australia — are generally not eligible to apply for citizenship until they have held PR for at least 12 months. The 4-year total residence period counts lawful time on both temporary and permanent visas, but the last 12 months must be as a PR.",
  },
  {
    question: "Do my children automatically become citizens when I do?",
    answer: "Not automatically through your citizenship by conferral. However, children under 16 can generally be included in a parent's citizenship application at no additional charge, provided they meet the eligibility requirements (including a residence requirement). Children who are included in the application and meet the requirements can have citizenship conferred at the same time as the parent. Children over 16 generally need to apply in their own right.",
  },
  {
    question: "I have a criminal record. Can I still apply for citizenship?",
    answer: "A criminal record does not automatically prevent a person from applying for or being granted citizenship. The good character requirement is assessed holistically. The nature and seriousness of the offence, how long ago it occurred, and what has happened since are all relevant. However, certain criminal conduct — particularly involving violence, fraud, or serious offences — may result in a refusal. Any criminal history should be disclosed honestly, and advice from a registered migration agent should be obtained before lodging if there is any criminal history.",
  },
  {
    question: "Can I hold dual citizenship — Australian and another country?",
    answer: "Australia permits dual citizenship. Becoming an Australian citizen does not require you to renounce any other citizenship you hold. However, your other country's laws may not permit dual citizenship — some countries automatically revoke citizenship when a person acquires citizenship of another country. You should check the laws of any other country of which you are a citizen before acquiring Australian citizenship, if retaining that other citizenship matters to you.",
  },
  {
    question: "I have been outside Australia for more than 90 days in the last 12 months. Can I still apply?",
    answer: "Exceeding the general absence threshold — more than 90 days in the 12 months before the application — may mean you are not yet eligible to apply. In that case, you would generally need to wait until the qualifying 12-month period has passed with absences within the threshold. However, absence thresholds may be waived in certain prescribed circumstances. A registered migration agent can review your specific travel history and advise whether an exemption applies or when you will be eligible to apply.",
  },
  {
    question: "What happens at the citizenship ceremony?",
    answer: "A citizenship ceremony is an official event, usually hosted by a local council or the Department of Home Affairs. At the ceremony, the approved applicant takes the Australian Citizenship Pledge — a formal commitment to Australia and its values, laws and democratic institutions. A citizenship certificate is issued at or shortly after the ceremony. Citizenship is formally conferred when the pledge is taken — not when the application is approved. Applicants are generally required to attend a ceremony within a specified period of being invited.",
  },
  {
    question: "Can I travel on my current passport after I become an Australian citizen?",
    answer: "After citizenship is conferred, you may apply for an Australian passport. Until your Australian passport is issued, you can continue to use your existing passport for travel — but as an Australian citizen, you are generally required to enter and depart Australia on your Australian passport (once you hold one). You should apply for an Australian passport as soon as practicable after citizenship is conferred. Consular assistance from Australia may be limited if you travel on a foreign passport after becoming an Australian citizen.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Partner Visa Onshore (820/801)', desc: 'The most common path to PR for partners of Australian citizens.',         icon: 'heart',    page: 'partner-visa-820-801' },
  { title: 'Skilled Independent (189)',      desc: 'Permanent skilled visa — a common path to the PR that precedes citizenship.', icon: 'shield',   page: 'skilled-independent-189' },
  { title: 'Employer Nomination (186)',      desc: 'Employer-nominated permanent residence — another pathway to PR.',             icon: 'briefcase', page: 'employer-nomination-scheme' },
  { title: 'Bridging Visas Explained',       desc: "Understanding your lawful status while waiting — relevant to residence calculation.", icon: 'clock', page: 'bridging-visas' },
]

/* ─── Hero right-column widget ─── */
function CitizenshipAtAGlance() {
  const steps = [
    { label: '4 years lawful residence', color: ROYAL },
    { label: 'Last 12 months as a PR', color: GREEN },
    { label: 'Pass the citizenship test', color: AMBER },
    { label: 'Good character assessment', color: TEAL },
    { label: 'Attend citizenship ceremony', color: VIOLET },
    { label: 'Take the Citizenship Pledge', color: GREEN },
  ]

  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.18), 0 2px 8px rgba(13,22,50,0.06)', border: '1px solid #e8eaf0', padding: '26px 24px' }}>
      <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: ROYAL, marginBottom: 4 }}>Conferral pathway at a glance</div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginBottom: 16 }}>
        <span style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 48, fontWeight: 800, color: NAVY, lineHeight: 1 }}>4</span>
        <span style={{ fontSize: 15, color: '#9ca3af', fontWeight: 500 }}>years generally required</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 18 }}>
        {steps.map((s, i) => (
          <div key={s.label} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '8px 10px', background: `rgba(27,43,94,0.05)`, border: `1px solid rgba(27,43,94,0.10)`, borderRadius: 9 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: NAVY, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 13.5, color: NAVY, fontWeight: 500 }}>{s.label}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '10px 12px', background: `${AMBER}08`, border: `1px solid ${AMBER}20`, borderRadius: 9 }}>
        <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.65 }}>
          <strong style={{ color: AMBER }}>Not automatic at PR:</strong> Citizenship requires a separate application after meeting all requirements. Use the indicative calculator below to estimate your eligibility date.
        </div>
      </div>
      <p style={{ fontSize: 12, color: '#9ca3af', margin: '12px 0 0', lineHeight: 1.6 }}>General guide only. Obtain advice from MARN 2619467.</p>
    </div>
  )
}

export default function AustralianCitizenshipPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['australian-citizenship'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Australian Citizenship', url: 'https://www.nanakmigration.com.au/australian-citizenship' },
        ]}
        faqs={FAQ}
        service={{ name: 'Australian Citizenship by Conferral', description: PAGE_META['australian-citizenship'].metaDescription, url: 'https://www.nanakmigration.com.au/australian-citizenship' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Visitor & Other', page: 'home' },
        { label: 'Australian Citizenship' },
      ]} />

      <PageHero
        variant="flagship"
        eyebrow="Status & Residency"
        eyebrowSub="Citizenship by Conferral"
        title={<>Australian<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Citizenship</em></>}
        deck="The pathways to Australian citizenship, what conferral generally requires, and how the residence requirement is calculated — with an indicative calculator to estimate your eligibility date."
        shortAnswer={<>Most permanent residents apply for citizenship by <strong>conferral</strong> after meeting a general <strong>4-year residence requirement</strong> — with the last 12 months as a PR. A citizenship test, good character assessment, and attendance at a ceremony are all part of the process. Citizenship is <strong>not automatic</strong> at permanent residence — a separate application is required.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Have your citizenship eligibility assessed', page: 'home' }}
        secondaryCta={{ label: 'Use the residence calculator →', page: '' }}
        accent={ROYAL}
        rightColumn={<CitizenshipAtAGlance />}
        footnote="General information only. Citizenship requirements set by the Australian Citizenship Act 2007, subject to change. Obtain advice from MARN 2619467."
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Australian citizenship by conferral is generally available to permanent residents who have lived in Australia lawfully for at least four years, including at least 12 months as a permanent resident, and who meet the good character and English language requirements, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Citizenship grants full rights to live and work in Australia permanently and the right to hold an Australian passport. The Department of Home Affairs assesses each application individually, and processing times vary.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={ROYAL} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={ROYAL} />
      </div>

      {/* Pathways */}
      <section id="pathways" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="How to Become Australian"
            title="Pathways to Australian Citizenship"
            intro="There are four main ways to become an Australian citizen. Conferral — by application after meeting the residence requirements — is the most common pathway for migrants."
            accent={ROYAL}
          />
          <CardGrid cards={PATHWAY_CARDS} columns={2} accent={ROYAL} />
        </div>
      </section>

      {/* Residence requirement */}
      <section id="residence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Eligibility"
            title="The General Residence Requirement"
            intro="The residence requirement is the most common eligibility hurdle for citizenship by conferral. Understanding how it is calculated — and how absences affect it — matters."
            accent={ROYAL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {RESIDENCE_POINTS.map(p => (
              <div key={p.heading} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.10)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calculator" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading
            kicker="Indicative Calculator"
            title="Residence Eligibility Calculator"
            intro="Enter your first lawful arrival date in Australia and the date permanent residence was granted to see an indicative eligibility date. This is a general guide only — absences, unlawful periods, and individual circumstances are not fully accounted for."
            accent={ROYAL}
          />
          <ResidenceCalculator accent={ROYAL} />
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="Step by Step"
            title="The Citizenship by Conferral Process"
            intro="The steps below represent the general pathway from eligibility to citizenship ceremony. Processing times and specific steps may vary."
            accent={ROYAL}
          />
          <StepTimeline steps={STEPS} variant="cards" accent={ROYAL} />
        </div>
      </section>

      {/* Citizenship test */}
      <section id="test" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Test and Pledge"
            title="The Citizenship Test and Australian Values Statement"
            intro="Most adult applicants must pass an online citizenship test and make the Australian Values Statement as part of the application."
            accent={ROYAL}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {TEST_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={13} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Character and identity */}
      <section id="character" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Requirements"
            title="Good Character and Identity"
            intro="Every citizenship applicant must satisfy good character and identity requirements. These are assessed holistically and require full disclosure."
            accent={ROYAL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {CHARACTER_POINTS.map(p => (
              <div key={p.heading} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.10)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Absences */}
      <section id="absences" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Travel and Residence"
            title="Absences from Australia"
            intro="Time spent outside Australia during the 4-year residence period generally reduces qualifying residence. Understanding the absence thresholds matters before applying."
            accent={ROYAL}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14, marginBottom: 24 }}>
            {ABSENCE_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={p.icon} size={13} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
              </div>
            ))}
          </div>
          <Callout variant="note">
            The indicative calculator on this page does not account for absences. To accurately calculate your residence period including absences, obtain a movement record from the Department of Home Affairs and seek advice from a registered migration agent (MARN 2619467).
          </Callout>
        </div>
      </section>

      {/* Evidence */}
      <section id="evidence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Document Checklist"
            title="Evidence Generally Required"
            intro="The documents below represent what is generally required for a citizenship by conferral application. Requirements may vary — check the current checklist on the Department of Home Affairs website."
            accent={ROYAL}
          />
          <EvidenceChecklist groups={EVIDENCE} accent={ROYAL} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ROYAL} />
          <FaqAccordion items={FAQ} accent={ROYAL} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ROYAL} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Have your citizenship eligibility<br /><em style={{ fontStyle: 'italic', color: GOLD }}>accurately assessed</em></>}
        body="Navpreet Aulakh (MARN 2619467) can calculate your residence period accurately — accounting for absences, unlawful periods, and other factors the online calculator cannot — and advise whether you are ready to lodge a citizenship application."
        primaryCta={{ label: 'Book a citizenship eligibility consultation', page: 'home' }}
        secondaryCta={{ label: 'Understand your PR pathway →', page: 'skilled-migration' }}
        accent={ROYAL}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Citizenship eligibility is set by the Australian Citizenship Act 2007 and related instruments, subject to change. The residence calculator on this page is an indicative guide only and is not an eligibility assessment. Application fees are not published on this page — check current fees on the Department of Home Affairs website. Obtain advice from a registered migration agent before applying." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
