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
  Callout,
  EvidenceChecklist,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  AnswerBox,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  PageCard,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_STUDENT } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const BLUE = CAT_STUDENT
const GREEN   = '#f5a124'
const AMBER   = '#f5a124'
const ROSE    = '#e11d48'
const TEAL    = '#0e7490'
const VIOLET  = '#4f46e5'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',     label: 'Key facts' },
  { id: 'gte-to-gs',     label: 'What changed: GTE to GS' },
  { id: 'factors',       label: 'Assessment factors' },
  { id: 'questions',     label: 'The GS questions' },
  { id: 'progression',   label: 'Course progression' },
  { id: 'concerns',      label: 'Common GS concerns' },
  { id: 'evidence',      label: 'Evidence checklist' },
  { id: 'faq',           label: 'FAQ' },
  { id: 'related',       label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'check',     value: 'All applicants',      label: 'Applies to every student visa (subclass 500) application',         note: "There is no exemption from the Genuine Student requirement — every applicant must satisfy it, regardless of their study level, country of origin, or prior visa history." },
  { icon: 'layers',    value: 'Whole application',   label: 'Assessed across the entire application — not a single document',   note: "Decision-makers look at all information provided: the GS answers, evidence, financial documents, study history, and any other relevant information in the application." },
  { icon: 'clipboard', value: 'Structured questions', label: 'Answered through structured questions in ImmiAccount — not a free-text statement', note: "Applicants answer questions related to each of the assessment factors. There is no single 'GS statement' to write." },
  { icon: 'shield',    value: 'Evidence-based',      label: 'Evidence generally matters more than how answers are worded',       note: "Well-worded answers unsupported by evidence are generally insufficient. Decision-makers look for claims that can be verified from documents provided." },
  { icon: 'alert',     value: 'In force since 23 March 2024', label: 'GS replaced the Genuine Temporary Entrant (GTE) test',    note: "Applications lodged on or after 23 March 2024 are assessed under the Genuine Student requirement. The GTE test no longer applies to new applications." },
]

/* ─── GTE → GS section ─── */
const CHANGES = [
  {
    icon: 'xcirc', color: ROSE,
    was: 'GTE (before 23 March 2024)',
    wasText: "Required applicants to demonstrate they were a 'genuine temporary entrant' — primarily that they intended to stay temporarily, not permanently. Applicants wrote a single free-text GTE statement. Emphasis was on temporary intent.",
  },
  {
    icon: 'check', color: GREEN,
    is: 'GS (from 23 March 2024)',
    isText: "Replaced 'temporary' intention with 'genuine student' intent. Removes the requirement to demonstrate temporary stay intentions. Focuses on whether the applicant is genuinely seeking to study. Answered through structured questions in ImmiAccount, not a free-text statement.",
  },
]

const KEY_DIFFERENCES = [
  { icon: 'arrowright', color: BLUE, heading: "No longer about 'temporary' intentions", body: "The GS requirement does not require applicants to demonstrate that they plan to leave Australia. It focuses on whether the applicant genuinely wants to study at the nominated provider — not on what they intend to do after their visa expires." },
  { icon: 'arrowright', color: BLUE, heading: 'Structured questions replace the GTE statement', body: "Instead of writing a single free-text statement, applicants answer structured questions in ImmiAccount that correspond to each of the GS assessment factors. There is no single document labelled a 'GS statement'." },
  { icon: 'arrowright', color: BLUE, heading: 'Assessment factors are codified in the legislation', body: "The Migration Act (as amended from 23 March 2024) sets out the factors a decision-maker must consider. These factors — circumstances in the home country, in Australia, the value of the course, immigration history, and any other relevant matter — are assessed holistically." },
  { icon: 'arrowright', color: BLUE, heading: 'The overall application is assessed — not just the answers', body: "Decision-makers are required to look at the whole application. This means supporting evidence, financial documents, academic records, and any previous immigration history are considered alongside the applicant's GS answers." },
]

/* ─── Assessment factors (CardGrid) ─── */
const FACTOR_CARDS: PageCard[] = [
  {
    icon: 'home', color: BLUE,
    title: 'Circumstances in the home country',
    body: "The applicant's personal, economic, and family ties to their home country. Decision-makers generally consider whether the applicant has reasons to return — employment, family responsibilities, property, business interests, or other connections. Strong ties are a positive indicator.",
    note: "Weaker ties to the home country may attract more scrutiny — but this is assessed holistically alongside all other factors.",
  },
  {
    icon: 'flag', color: TEAL,
    title: 'Circumstances in Australia',
    body: "Factors in Australia that may be relevant — including whether the applicant has family members already in Australia, previous visa history in Australia, and any previous visa non-compliance. Prior lawful conduct is a positive indicator; non-compliance or overstays may raise concerns.",
    note: "Having family in Australia is not automatically negative — it depends on the overall picture.",
  },
  {
    icon: 'graduationcap', color: GREEN,
    title: 'Value of the course to the applicant',
    body: "Whether the proposed course of study is consistent with the applicant's academic background, their stated career goals, and their circumstances. Decision-makers consider whether the course makes sense given what the applicant has studied or worked in previously, and whether it has genuine value to their future.",
    note: "A course that appears inconsistent with prior study or employment may attract scrutiny without a clear, substantiated explanation.",
  },
  {
    icon: 'shield', color: VIOLET,
    title: 'Immigration history',
    body: "Any previous visa applications, refusals, cancellations, or departures across all countries — not just Australia. A history of complying with visa conditions (holding valid visas, departing on time) is a positive indicator. Previous refusals or cancellations are considered in context.",
    note: "Applicants with a prior refusal from Australia or another country should seek advice from a registered migration agent before lodging.",
  },
  {
    icon: 'layers', color: AMBER,
    title: 'Any other relevant matter',
    body: "A catch-all factor that allows the decision-maker to consider anything else relevant to whether the applicant is a genuine student. This may include information that emerged during processing, responses to requests for further information, or context from the applicant's unique circumstances.",
    note: "This factor gives decision-makers discretion — it is not limited to matters raised by the applicant.",
  },
]

/* ─── GS questions section ─── */
const QUESTION_PRINCIPLES = [
  { icon: 'check', color: GREEN, heading: 'Answers should be specific to your own circumstances', body: "The structured GS questions ask about your personal situation. A response that applies to anyone — about valuing education, wanting new experiences, or Australia's reputation — is unlikely to be persuasive. Answers that are specific to you, your background, your previous study, and your particular course are generally more credible." },
  { icon: 'check', color: GREEN, heading: 'Every factual claim should be supported by evidence', body: "If an answer states that you have employment to return to, a business, family dependants, or property in the home country — documents that verify these facts should be provided. If an answer states that a course is relevant to a career goal, evidence of that career path (employment records, professional registration, employer letter) strengthens the claim." },
  { icon: 'alert', color: ROSE,  heading: 'Do not use template or copied answers', body: "Answers that appear to have been copied from a template, sourced from a website, or drafted by someone other than the applicant as a standard response raise serious concerns with decision-makers. A copied or generic answer may result in a refusal and, if not truthful, may engage PIC 4020 (fraud provisions) with significant consequences. Answers must be the applicant's own and must accurately reflect their actual circumstances." },
  { icon: 'alert', color: ROSE,  heading: 'Do not include anything that is not true', body: "Providing false or misleading information in a visa application — including in GS answers — may constitute a breach of PIC 4020. The consequences can include a three-year bar on lodging Australian visa applications. Applicants who are uncertain about how to describe their circumstances accurately should seek advice from a registered migration agent before lodging, not after." },
]

/* ─── Course progression section ─── */
const PROGRESSION_POINTS = [
  { icon: 'arrowright', color: BLUE, heading: 'Progression through study levels is generally expected', body: "Applicants who move from lower-level qualifications (certificate, diploma) to higher-level qualifications (bachelor, master) generally present a more coherent study plan. Lateral or upward progression makes the course selection easier to explain." },
  { icon: 'alert', color: AMBER, heading: 'Downward course changes attract scrutiny', body: "Changing from a bachelor program to a certificate or diploma — particularly mid-study, or when applying for a new student visa — may raise GS concerns. Decision-makers may question why a student is stepping down in qualification level unless there is a clear and documented explanation." },
  { icon: 'alert', color: AMBER, heading: 'Changing providers or courses may affect the visa', body: "Students who change education providers after visa grant generally need to notify the Department of Home Affairs. A substantial change in the course or provider may mean the applicant is no longer in the circumstances that underpinned the original GS assessment. In some cases, a new student visa application may be required." },
  { icon: 'check', color: GREEN, heading: 'A change of course is not automatically a problem', body: "Not every course change raises a GS concern. A change that represents genuine academic progression — for example, moving to a related field at the same or higher level, or responding to changed career circumstances — may be straightforward to explain. The key is whether the change is consistent with a genuine student's behaviour and whether it can be explained and supported." },
]

/* ─── Common GS concerns (6 items) ─── */
const CONCERNS = [
  {
    n: '01', color: ROSE,
    heading: 'Course appears inconsistent with prior study or employment',
    body: "One of the most common reasons GS concerns arise is a course that does not connect to anything in the applicant's academic or professional background — for example, an experienced accountant applying to study hospitality at certificate level in a regional city. Decision-makers look for a logical connection between past study, past employment, and the proposed course.",
    what: 'Provide clear, substantiated evidence of why this course is relevant to your career circumstances. Employment letters, professional development plans, or evidence of a career change can help — but only if they accurately describe your situation.',
  },
  {
    n: '02', color: ROSE,
    heading: 'The chosen location or institution appears motivated by migration, not study',
    body: "Choosing a specific city, region, or institution primarily because of access to post-study work rights in particular locations — rather than because of the academic program — may raise concerns. Decision-makers are alert to course and location choices that appear to be driven by visa strategy rather than genuine educational goals.",
    what: 'If you have genuine academic reasons for choosing the provider or location, those reasons — and any supporting evidence — should be clearly explained in the GS answers.',
  },
  {
    n: '03', color: ROSE,
    heading: 'Family members or significant connections already in Australia',
    body: "Having close family members (spouse, children, siblings, parents) in Australia is not automatically a negative factor — but it is a factor a decision-maker must consider. Where the connection to Australia appears to be the primary motivation for the application rather than the course, concerns may arise.",
    what: 'Being transparent about family connections in Australia and explaining why the course — not the family connection — is the driving motivation, supported by evidence of genuine academic intent, is generally the appropriate approach.',
  },
  {
    n: '04', color: AMBER,
    heading: 'Financial capacity not clearly or adequately demonstrated',
    body: "Applicants who cannot demonstrate that they can genuinely fund their study and living costs for the duration of the course — or whose financial evidence raises questions about the source of funds — may face GS concerns as well as concerns about financial capacity more broadly.",
    what: 'Financial evidence should cover the cost of tuition plus living expenses for the duration of the course (not just the first year). Evidence should show funds are accessible — not merely that they exist somewhere.',
  },
  {
    n: '05', color: AMBER,
    heading: 'Previous visa non-compliance, refusals, or overstays',
    body: "A history of visa breaches — including overstaying a visa in any country, not complying with visa conditions, or having a previous Australian or overseas visa refused or cancelled — is a factor decision-makers must consider. This is assessed in context, but it is a significant indicator.",
    what: 'Applicants with a prior refusal or compliance issue should seek advice from a registered migration agent before lodging. Omitting or understating prior immigration history may engage PIC 4020.',
  },
  {
    n: '06', color: AMBER,
    heading: 'Study history with no prior educational achievement',
    body: "Applicants with no prior formal study, or with a significant gap between their last period of study and the proposed course, may need to provide more context about why they are returning to study — and why this particular course, at this particular time, is genuinely consistent with their circumstances.",
    what: 'If there is a gap in study or a reason for returning to study that may not be immediately obvious, explaining it clearly and supporting it with documents (career records, professional development history) may assist.',
  },
]

/* ─── Evidence checklist ─── */
const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Financial capacity',
    icon: 'dollar', color: BLUE,
    items: [
      'Bank statements covering at least 3–6 months, showing consistent available funds (not a single large deposit)',
      'Scholarship or sponsorship letter (if applicable) — official, on letterhead, confirming amount and duration',
      "Sponsor's financial evidence if being financially supported (sponsor's bank statements, employment letter, relationship evidence)",
      'Tuition fee payment receipts for the nominated course (if prepaid)',
    ],
  },
  {
    title: 'Ties to the home country',
    icon: 'home', color: GREEN,
    items: [
      'Employment letter or contract confirming current employment (if employed — from employer, on letterhead)',
      'Evidence of property ownership (title deed, rates notice, mortgage statement) if applicable',
      'Business registration documents or financial statements if self-employed or a business owner',
      'Evidence of family responsibilities — birth certificates, dependant documents (if applicable)',
    ],
  },
  {
    title: 'Study history and course rationale',
    icon: 'graduationcap', color: TEAL,
    items: [
      'Academic transcripts and certificates from all prior study (certified translations if not in English)',
      'Evidence of career history relevant to the proposed course (employment letters, professional registration)',
      'Confirmation of enrolment or letter of offer from the registered education provider',
      'Evidence linking the proposed course to career goals (where this is not self-evident from the study pathway)',
    ],
  },
  {
    title: 'English language proficiency',
    icon: 'globe', color: VIOLET,
    items: [
      'IELTS, PTE Academic, TOEFL iBT, OET, or Cambridge C1 Advanced results (within validity period)',
      'Evidence of English-medium schooling if claiming an exemption from providing test results',
      'Passport copy to support any passport-based English exemption (if applicable to the specific course)',
    ],
  },
  {
    title: 'Immigration history',
    icon: 'clipboard', color: AMBER,
    items: [
      'Copies of all passports showing previous visa stamps (if relevant)',
      'Explanation and documentation relating to any prior visa refusal, cancellation or overstay (if applicable)',
      'Evidence of compliance with conditions of any prior Australian or overseas visa (departure records if available)',
    ],
  },
]

const FAQ: FaqItem[] = [
  {
    question: "What is the difference between the GTE and the GS requirement?",
    answer: "The Genuine Temporary Entrant (GTE) test was the predecessor to the Genuine Student (GS) requirement. Under GTE, applicants had to demonstrate they were genuine 'temporary' entrants — primarily showing an intention to leave Australia after study. The GS requirement, introduced on 23 March 2024, removed the 'temporary' focus and instead asks whether the applicant is a genuine student — that is, whether they genuinely intend to study at the nominated institution. The GS requirement is answered through structured questions in ImmiAccount, not a single free-text statement. Applications lodged on or after 23 March 2024 are assessed under GS, not GTE.",
  },
  {
    question: "Do I need to write a GS statement?",
    answer: "There is no single document called a 'GS statement'. The Genuine Student requirement is addressed by answering structured questions in ImmiAccount as part of the student visa application. The questions correspond to the legislated assessment factors. You do not need to upload a separate document called a 'statement' — though you may upload supporting evidence documents. The answers you provide in ImmiAccount must be your own and must truthfully reflect your actual circumstances.",
  },
  {
    question: "I have family in Australia. Does that mean my application will be refused?",
    answer: "Having family in Australia does not automatically lead to a refusal. It is one of the factors a decision-maker must consider — specifically, your 'circumstances in Australia'. What matters is the overall picture: whether, looking at all the factors, you appear to be a genuine student. An applicant with close family in Australia who has a clear, coherent academic pathway, strong financial capacity, and good ties to their home country may well satisfy the GS requirement. An applicant whose sole apparent connection to Australia is family, with no clear academic rationale for the course choice, may face more scrutiny.",
  },
  {
    question: "My previous student visa was refused. Can I apply again?",
    answer: "A prior refusal does not permanently bar a new student visa application, but it is a factor that must be disclosed and that a decision-maker will consider as part of the immigration history factor. Failing to disclose a prior refusal may engage PIC 4020 (fraud provisions) with serious consequences. If you have had a prior student visa refused, you should obtain advice from a registered migration agent before lodging a new application — the agent can advise on whether the circumstances that led to the refusal have changed, and how best to address the prior refusal in a new application.",
  },
  {
    question: "Does choosing a course with good post-study work rights affect my GS assessment?",
    answer: "It may, depending on how the overall application reads. Post-study work rights are a legitimate benefit of studying in Australia, and choosing a course that leads to good post-study opportunities is not of itself a problem. What may raise concerns is if the course and location choice appears to be driven primarily by post-study migration strategy — for example, choosing a regional institution specifically to access extended post-study work rights, without a clear academic rationale for that institution or course. The GS assessment looks at whether you are genuinely seeking to study, not merely at the consequences of studying.",
  },
  {
    question: "What happens if I change my course after the visa is granted?",
    answer: "Students on a student visa who change their course or education provider are generally required to notify the Department of Home Affairs through their provider (under the National Code). A significant change — particularly a change in qualification level, or a change to a very different field — may raise questions about whether the student remains in the circumstances that supported the original GS assessment. In some cases, a new student visa application may be required. If you are considering a course or provider change mid-study, seek advice from a registered migration agent before making the change.",
  },
  {
    question: "Can a migration agent write my GS answers for me?",
    answer: "A registered migration agent can assist you in understanding the GS requirement, identify what factors are relevant to your circumstances, advise on what evidence to provide, and review your answers for completeness — but the content of your answers must truthfully reflect your own circumstances, in your own words. Answers that are drafted as a template by a third party and do not accurately describe your own situation may be misleading and, if false or misleading, may engage PIC 4020. A good registered migration agent will help you understand what to say — not put words in your mouth that do not reflect your actual situation.",
  },
  {
    question: "What is PIC 4020 and why does it matter for student visa applications?",
    answer: "Public Interest Criterion 4020 (PIC 4020) is a provision in the Migration Regulations that bars applicants from being granted most Australian visas for three years if they have provided false documents or false or misleading information in a visa application — including the current application or any prior application. In the context of the GS requirement, this means that providing untrue information in GS answers, or submitting fabricated supporting documents, may result in a three-year bar on lodging Australian visa applications. PIC 4020 applies to all information in the application, not just the GS answers. This is one reason why working with a registered migration agent to ensure your application is accurate and complete is strongly recommended.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Student Visas Hub',          desc: 'Overview of all student visa pathways and requirements.',              icon: 'graduationcap', page: 'student-visas' },
  { title: 'Student Visa (500)',          desc: 'Conditions, work rights, and requirements for the 500 visa.',         icon: 'bookopen',      page: 'student-visa-500' },
  { title: 'Student to PR Pathway',      desc: 'From student visa to permanent residence — the general pathway.',      icon: 'arrowright',    page: 'student-to-pr-pathway' },
  { title: 'English Requirements',       desc: 'Test scores required for the student visa and related visas.',         icon: 'globe',         page: 'english-requirements' },
]

/* ─── Hero right-column widget ─── */
function GSAtAGlance() {
  const factors = [
    { label: 'Home country circumstances', color: BLUE },
    { label: 'Circumstances in Australia', color: TEAL },
    { label: 'Value of the course', color: GREEN },
    { label: 'Immigration history', color: VIOLET },
    { label: 'Any other relevant matter', color: AMBER },
  ]
  React.useEffect(() => {
    document.title = PAGE_META['genuine-student-requirement'].title
  }, [])

  return (
    <div style={{ background: '#fff', borderRadius: 18, boxShadow: '0 24px 64px rgba(13,22,50,0.18), 0 2px 8px rgba(13,22,50,0.06)', border: '1px solid #e8eaf0', padding: '26px 24px' }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase' as const, color: BLUE, marginBottom: 4 }}>GS assessment factors</div>
      <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 22, fontWeight: 800, color: NAVY, lineHeight: 1.2, marginBottom: 18 }}>
        5 factors,<br />assessed holistically
      </div>
      <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8, marginBottom: 20 }}>
        {factors.map((f, i) => (
          <div key={f.label} style={{ display: 'flex', gap: 10, alignItems: 'center', padding: '10px 12px', background: `rgba(27,43,94,0.05)`, border: `1px solid rgba(27,43,94,0.12)`, borderRadius: 10 }}>
            <div style={{ width: 22, height: 22, borderRadius: '50%', background: f.color, color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
            <span style={{ fontSize: 13, color: NAVY, fontWeight: 500 }}>{f.label}</span>
          </div>
        ))}
      </div>
      <div style={{ padding: '12px 14px', background: `${ROSE}08`, border: `1px solid ${ROSE}20`, borderRadius: 10, marginBottom: 12 }}>
        <div style={{ fontSize: 11.5, color: '#374151', lineHeight: 1.65 }}>
          <strong style={{ color: ROSE }}>Important:</strong> Answers must be your own and truthful. Template or copied answers raise serious concerns. Evidence matters more than wording.
        </div>
      </div>
      <p style={{ fontSize: 11, color: '#9ca3af', margin: 0, lineHeight: 1.6 }}>General information only. Obtain advice from MARN 2619467 before lodging.</p>
    </div>
  )
}

export default function GenuineStudentRequirementPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Genuine Student Requirement', url: 'https://www.nanakmigration.com.au/genuine-student-requirement' },
        ]}
        faqs={FAQ}
        service={{ name: 'Genuine Student Requirement (Subclass 500)', description: PAGE_META['genuine-student-requirement'].metaDescription, url: 'https://www.nanakmigration.com.au/genuine-student-requirement' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Student Visas', page: 'student-visas' },
        { label: 'Genuine Student Requirement' },
      ]} />

      <PageHero
        variant="flagship"
        eyebrow="Student Visa · Subclass 500"
        eyebrowSub="In force from 23 March 2024"
        title={<>Genuine Student<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Requirement</em></>}
        deck="What the Genuine Student (GS) requirement is, how it replaced the Genuine Temporary Entrant (GTE) test, and what decision-makers generally look for when assessing whether an applicant is a genuine student."
        shortAnswer={<>The GS requirement asks whether you are <strong>genuinely seeking to study</strong> at your nominated education provider. It replaced the GTE test on <strong>23 March 2024</strong> and is assessed through structured questions in ImmiAccount — not a free-text statement. Decision-makers look at <strong>five legislated factors</strong> holistically, and evidence generally matters more than how answers are worded. Answers must be your own and must truthfully reflect your actual circumstances.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Have your GS response reviewed before you lodge', page: 'home' }}
        secondaryCta={{ label: 'View the assessment factors →', page: '' }}
        accent={BLUE}
        rightColumn={<GSAtAGlance />}
        footnote="General information only. Not immigration advice. GS requirements are set by legislation and subject to change — obtain advice from MARN 2619467 before lodging."
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Genuine Student (GS) requirement, introduced on 23 March 2024, requires student visa (subclass 500) applicants to demonstrate that their primary intention in coming to Australia is to study, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It replaced the former Genuine Temporary Entrant (GTE) criterion and is assessed through a personal statement and supporting documents. The Department of Home Affairs considers factors including your study history, ties to your home country, and how your course fits your stated career or educational goals.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={BLUE} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={BLUE} />
      </div>

      {/* GTE → GS section */}
      <section id="gte-to-gs" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="What Changed"
            title="From GTE to GS: What Is Different"
            intro="The Genuine Student requirement replaced the Genuine Temporary Entrant test for all student visa applications lodged on or after 23 March 2024. Understanding the difference matters."
            accent={BLUE}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20, marginBottom: 32 }}>
            {CHANGES.map(c => (
              <div key={c.was ?? c.is} style={{ borderRadius: 16, overflow: 'hidden', border: `1.5px solid ${BORDER}`, boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ padding: '12px 18px', background: c.was ? `${ROSE}08` : `${GREEN}08`, borderBottom: `1px solid ${c.was ? ROSE : GREEN}20`, display: 'flex', gap: 8, alignItems: 'center' }}>
                  <Icon name={c.icon} size={14} color={NAVY} />
                  <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, letterSpacing: '0.04em' }}>{c.was ?? c.is}</span>
                </div>
                <div style={{ padding: '16px 18px', background: '#fff' }}>
                  <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.75 }}>{c.wasText ?? c.isText}</p>
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {KEY_DIFFERENCES.map(d => (
              <div key={d.heading} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', padding: '14px 18px', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.10)`, borderRadius: 12 }}>
                <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name={d.icon} size={13} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 3 }}>{d.heading}</div>
                  <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{d.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment factors */}
      <section id="factors" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="What Decision-Makers Consider"
            title="The Five GS Assessment Factors"
            intro="The Migration Act sets out five factors a decision-maker must consider when assessing the Genuine Student requirement. No single factor is determinative — they are considered together."
            accent={BLUE}
          />
          <CardGrid cards={FACTOR_CARDS} columns={3} accent={BLUE} />
          <p style={{ fontSize: 12, color: '#9ca3af', marginTop: 20, textAlign: 'center', lineHeight: 1.7 }}>
            Assessment factors set by Schedule 8 of the Migration Act 1958 (as amended from 23 March 2024). Subject to legislative change.
          </p>
        </div>
      </section>

      {/* The GS questions */}
      <section id="questions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Answering the Questions"
            title="The Structured GS Questions"
            intro="The GS questions in ImmiAccount correspond to the five assessment factors. The principles below describe what generally makes an answer credible and what does not."
            accent={BLUE}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12, marginBottom: 28 }}>
            {QUESTION_PRINCIPLES.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={p.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{p.heading}</div>
                  <p style={{ margin: 0, fontSize: 13.5, color: '#374151', lineHeight: 1.75 }}>{p.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning">
            <strong>This page does not provide template answers or suggested GS wording.</strong> Providing template or copied answers that do not reflect your actual circumstances may result in a refusal. If information provided is false or misleading, PIC 4020 may apply — which can impose a three-year bar on lodging Australian visa applications. Your answers must be your own and must truthfully describe your situation. A registered migration agent (MARN 2619467) can advise you on how to address the GS questions in a way that is accurate, complete, and relevant to your circumstances.
          </Callout>
        </div>
      </section>

      {/* Course progression */}
      <section id="progression" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Study Pathway"
            title="Course Progression and Changing Courses"
            intro="How your study pathway — and any changes to it — is viewed under the GS requirement."
            accent={BLUE}
          />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {PROGRESSION_POINTS.map(p => (
              <div key={p.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '18px 16px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon name={p.icon} size={13} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 14, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{p.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common concerns */}
      <section id="concerns" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Common Triggers"
            title="Common Reasons GS Concerns Arise"
            intro="These six circumstances frequently attract additional scrutiny or are associated with GS refusals. They do not automatically lead to refusal — context matters — but they are worth understanding."
            accent={BLUE}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {CONCERNS.map(c => (
              <div key={c.n} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 14, alignItems: 'center', padding: '14px 18px', background: `rgba(27,43,94,0.04)`, borderBottom: `1px solid rgba(27,43,94,0.10)` }}>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 22, fontWeight: 800, color: NAVY, width: 36, flexShrink: 0 }}>{c.n}</div>
                  <div style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 15, fontWeight: 700, color: NAVY }}>{c.heading}</div>
                </div>
                <div style={{ padding: '16px 18px', background: '#fff' }}>
                  <p style={{ margin: '0 0 12px', fontSize: 13.5, color: '#374151', lineHeight: 1.75 }}>{c.body}</p>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 9, padding: '9px 12px' }}>
                    <Icon name="check" size={13} color={GREEN} />
                    <span style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>General approach:</strong> {c.what}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence checklist */}
      <section id="evidence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Supporting Documents"
            title="Evidence Checklist"
            intro="Evidence that supports your GS answers generally strengthens the application. The groups below cover the main categories — the specific documents relevant to your circumstances will vary."
            accent={BLUE}
          />
          <EvidenceChecklist groups={EVIDENCE} accent={BLUE} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={BLUE} />
          <FaqAccordion items={FAQ} accent={BLUE} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={BLUE} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Have your GS response reviewed<br /><em style={{ fontStyle: 'italic', color: GOLD }}>before you lodge</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your GS answers and supporting evidence before you lodge — identifying gaps in evidence, inconsistencies that may raise concerns, and anything that needs to be addressed. A review before lodgement is far less costly than a refusal."
        primaryCta={{ label: 'Book a GS review consultation', page: 'home' }}
        secondaryCta={{ label: 'Learn about the student visa →', page: 'student-visa-500' }}
        accent={BLUE}
        footnote="MARA-registered · MARN 2619467 · General information only · Not immigration advice for individual circumstances"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="The Genuine Student requirement is set by the Migration Act 1958 and related instruments. Requirements are subject to legislative change. This page does not provide immigration advice and does not provide template or sample GS answers — any answer provided in a student visa application must be the applicant's own and must truthfully reflect their circumstances. Obtain advice from a registered migration agent before lodging." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
