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
  StepTimeline,
  Callout,
  EvidenceChecklist,
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
  TimelineStep,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_SKILLED } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const TEAL = CAT_SKILLED
const GREEN  = '#f5a124'
const AMBER  = '#f5a124'
const ROSE   = '#e11d48'
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',    label: 'Key facts' },
  { id: 'authorities',  label: 'Assessing authorities' },
  { id: 'process',      label: 'The process' },
  { id: 'mistakes',     label: 'Common pitfalls' },
  { id: 'evidence',     label: 'Evidence checklist' },
  { id: 'faq',          label: 'FAQ' },
  { id: 'related',      label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'check', value: 'Required for most',    label: 'Mandatory for most skilled and employer-sponsored visas', note: 'Some visa subclasses and occupations may have different requirements — check the specific visa criteria.' },
  { icon: 'clock', value: '3 years (generally)',  label: 'Assessments are generally valid for 3 years',           note: 'Some authorities issue assessments with shorter or longer validity. Confirm with your assessing authority.' },
  { icon: 'alert', value: 'Authority-specific',   label: 'Each occupation has a designated assessing authority',   note: "The Department of Home Affairs designates which body assesses each ANZSCO occupation. You cannot choose." },
  { icon: 'hash',  value: 'Before your EOI',      label: 'Obtain the assessment before submitting your EOI',       note: "For skilled migration, a positive assessment is generally required before submitting an Expression of Interest." },
  { icon: 'dollar',value: 'Varies widely',        label: 'Fees vary by authority and application type',            note: 'Some authorities charge from a few hundred to over a thousand dollars. Check with the specific authority for current fees.' },
]

const AUTH_COLUMNS: ComparisonColumn[] = [
  { key: 'occupations', label: 'Typical occupations covered',   highlight: true },
  { key: 'assesses',    label: 'Generally assesses' },
  { key: 'validity',    label: 'General validity' },
]

const AUTH_ROWS: ComparisonRow[] = [
  { feature: 'VETASSESS',                 occupations: 'Broad range of professional and trade occupations not covered by other bodies — accountants, HR professionals, librarians, chefs, many others', assesses: 'Qualifications against Australian equivalent level; employment history at the skill level', validity: 'Generally 3 years' },
  { feature: 'Engineers Australia (EA)',  occupations: 'Engineers, engineering technologists, engineering associates, surveyors, spatial scientists', assesses: 'Academic qualifications, competency demonstration, and English for some pathways', validity: 'Generally 3 years' },
  { feature: 'ACS (Australian Computer Society)', occupations: 'ICT professionals — software engineers, analysts, database administrators, network engineers, ICT managers', assesses: 'Qualifications and employment history against ANZSCO skill level; may require a skills interview', validity: 'Generally 3 years' },
  { feature: 'TRA (Trades Recognition Australia)', occupations: 'Trade occupations — electricians, plumbers, carpenters, welders, refrigeration mechanics and other trades', assesses: 'Trade skills through the TRA pathway; may involve a skills assessment or recognition of overseas qualifications', validity: 'Generally 3 years' },
  { feature: 'AITSL',                     occupations: 'Teachers — early childhood, primary, secondary (all subjects)', assesses: 'Qualifications, professional standards, and teaching experience against Australian curriculum standards', validity: 'Generally 5 years' },
  { feature: 'CPA Australia / CAANZ',     occupations: 'Accountants, auditors, finance professionals (shared with VETASSESS for some roles)', assesses: 'Accounting qualifications against the CPA or CA ANZ professional standards and equivalent Australian level', validity: 'Generally 3 years' },
  { feature: 'ANMAC',                     occupations: 'Registered nurses, enrolled nurses, midwives', assesses: 'Nursing or midwifery qualifications, registration, and practice hours against Australian standards', validity: 'Generally 2 years (confirm with ANMAC)' },
]

const STEPS: TimelineStep[] = [
  {
    code: '01', title: 'Identify your assessing authority',
    points: [
      'Look up your nominated ANZSCO occupation on the Home Affairs website.',
      "Each ANZSCO unit group lists the designated assessing authority — you cannot choose a different one.",
      'Confirm your occupation appears on the relevant skilled occupation list for your intended visa.',
    ],
    color: TEAL,
  },
  {
    code: '02', title: 'Gather documents',
    points: [
      "Academic transcripts (certified copies), degree certificates, and official translations where required.",
      "Employment references — typically on employer letterhead, signed, dated, with your job title and duties.",
      "IELTS, PTE, or other English test results if required by the authority.",
      "Identity documents (passport, name change documents if applicable).",
    ],
    color: TEAL,
  },
  {
    code: '03', title: 'Submit the application',
    points: [
      "Complete the authority's own application form — most accept online applications.",
      "Pay the application fee (varies by authority — confirm current fees on their website).",
      "Certify documents as required — some authorities require Australian notarisation or apostille.",
    ],
    color: TEAL,
  },
  {
    code: '04', title: 'Processing',
    points: [
      "Processing times vary: from a few weeks (some ACS or ANMAC pathways) to several months (some EA or VETASSESS applications).",
      "The authority may request additional information — respond promptly to avoid delays.",
      "Avoid contacting the authority for status updates within the published processing window.",
    ],
    color: AMBER,
  },
  {
    code: '05', title: 'Outcome',
    points: [
      "A positive assessment confirms your qualifications and experience are at the required ANZSCO skill level.",
      "A negative assessment does not prevent you from reapplying, but you should seek advice from a registered migration agent before doing so.",
      "Some authorities offer a review or appeal pathway for adverse decisions.",
    ],
    color: GREEN,
  },
  {
    code: '06', title: 'Submit your EOI',
    points: [
      "Once you have a positive assessment, you can submit an Expression of Interest in SkillSelect (for skilled migration) or use it to support an employer nomination (for 186 or 482).",
      "Keep track of your assessment expiry date — you may need to renew before a visa decision is made.",
    ],
    color: GREEN,
  },
]

const MISTAKES = [
  { icon: 'alert', color: ROSE,  heading: 'Submitting uncertified or unofficial documents', body: "Most assessing authorities require certified copies — not scans of originals. Documents in a language other than English generally require an official NAATI-certified translation. Submitting uncertified copies or unofficial translations is a common cause of delays and adverse decisions." },
  { icon: 'alert', color: ROSE,  heading: "Employment references that don't meet the authority's format", body: "Many authorities (VETASSESS, ACS, EA) require employment references in a specific format — employer letterhead, supervisor name, dates of employment, and a description of duties matching the ANZSCO unit group. Generic HR letters without duty descriptions are frequently rejected." },
  { icon: 'alert', color: AMBER, heading: "Claiming employment that doesn't match the assessed occupation", body: "Employment must be in the nominated ANZSCO occupation or a closely related occupation at the same skill level. Earlier career roles, junior positions, or work in a related-but-different occupation may not count. Over-counting employment years is a common and serious error." },
  { icon: 'alert', color: AMBER, heading: 'Missing the English requirement for the authority', body: "Some assessing authorities (ANMAC, some ACS pathways, EA) require English test results as part of the skills assessment — separate from the visa's own English requirement. Check whether your authority requires English test results before submitting." },
  { icon: 'alert', color: AMBER, heading: "Applying to the wrong assessing authority", body: "If your ANZSCO occupation has a designated assessing authority, you must use that authority. VETASSESS, for example, does not assess engineers — Engineers Australia does. A positive assessment from the wrong authority is not accepted by the Department of Home Affairs." },
]

const EVIDENCE: ChecklistGroup[] = [
  {
    title: 'Identity documents',
    icon: 'user', color: TEAL,
    items: [
      'Current passport (all pages, certified copy)',
      'Previous passports if relevant to employment or study dates',
      'Name change documents (marriage certificate, deed poll) if applicable',
    ],
  },
  {
    title: 'Academic qualifications',
    icon: 'graduationcap', color: TEAL,
    items: [
      'Degree certificates or diplomas (certified copies)',
      'Official academic transcripts listing all subjects and results',
      'NAATI-certified English translations for non-English documents',
      'Statement of attainment or professional membership certificates if required',
    ],
  },
  {
    title: 'Employment evidence',
    icon: 'briefcase', color: AMBER,
    items: [
      'Reference letters on official employer letterhead, signed by supervisor',
      'Letters should specify: dates of employment, job title, full-time/part-time hours, and key duties',
      'Payslips or tax records may be required by some authorities to corroborate references',
      'Contract letters or position descriptions for higher-skilled roles',
    ],
  },
  {
    title: 'English test results (where required)',
    icon: 'globe', color: GREEN,
    items: [
      "IELTS, PTE Academic, TOEFL iBT, OET or Cambridge C1 Advanced — confirm which the authority accepts",
      'Results must be within the validity period accepted by the authority (generally 3 years)',
      'Official test report form (not a screen print) — most authorities require original or certified copy',
    ],
  },
  {
    title: 'Registration and membership (where applicable)',
    icon: 'shield', color: '#4f46e5',
    items: [
      'Current professional registration certificates (ANMAC, AITSL, engineering boards)',
      'Continuing professional development (CPD) records for some authorities',
      'Professional membership certificates (CPA, CA ANZ, EA, ACS)',
    ],
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Do I need a skills assessment for every visa?",
    answer: "A skills assessment is required for most points-tested skilled migration visas (189, 190, 491) and for most employer-sponsored visa applications (186, 482 Core Skills stream). Not all visa subclasses require a skills assessment — for example, the 482 Specialist Skills stream does not require one. The specific requirements depend on the visa and the occupation. Check the visa criteria on the Department of Home Affairs website or obtain advice from a registered migration agent.",
  },
  {
    question: "How long does a skills assessment take?",
    answer: "Processing times vary significantly between assessing authorities and application types. Some pathways — such as ACS online assessments or straightforward ANMAC applications — may be processed in a few weeks. More complex applications, such as VETASSESS professional assessments or Engineers Australia applications involving competency demonstration, can take several months. Check the current processing time estimates on your authority's website before applying, and plan your timeline accordingly.",
  },
  {
    question: "What happens if my skills assessment is negative?",
    answer: "A negative skills assessment means the authority has determined that your qualifications and/or experience do not meet the required Australian standard for the nominated occupation. You generally have options: you may be able to request a review or appeal the decision within a set period; you may be able to apply for reassessment after gaining additional qualifications or experience; or you may wish to explore alternative occupations with a different assessing authority. A registered migration agent can advise on the best course of action after a negative outcome.",
  },
  {
    question: "Can I use my skills assessment for more than one visa application?",
    answer: "Generally, yes — a positive skills assessment can be used for any visa application for which it is valid. For example, the same positive ACS assessment can support an EOI for the 189 visa, a nomination for the 190 visa, and an employer-sponsored 482 or 186 nomination — as long as the assessment remains within its validity period. Once the validity period expires, you will generally need to obtain a new assessment before lodging a new application.",
  },
  {
    question: "My assessment will expire before the visa is decided. What do I do?",
    answer: "If your skills assessment expires after you lodge a visa application but before a decision is made, the Department of Home Affairs will generally require a valid assessment at the time of decision. You should obtain a new assessment before your current one expires rather than waiting for it to lapse. Some authorities allow renewal applications; check with your authority well in advance. A registered migration agent can advise on the timing.",
  },
  {
    question: "I have work experience but no formal qualifications. Can I still get a positive assessment?",
    answer: "Some assessing authorities offer pathways for applicants who have significant work experience but limited formal qualifications. Engineers Australia, for example, has an experienced engineer pathway; VETASSESS assesses some applicants on the basis of both qualifications and experience. The eligibility for experience-based pathways is authority-specific and occupation-specific. Seek advice from a registered migration agent before applying to understand whether an experience-based pathway is likely to result in a positive assessment for your circumstances.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Points Test Explained',        desc: 'How skills assessments feed into your points score.',              icon: 'hash',      page: 'points-test' },
  { title: 'Skilled Independent (189)',     desc: 'Permanent points-tested visa for skilled workers.',                icon: 'shield',    page: 'skilled-independent-189' },
  { title: '186 Skill Requirements',        desc: 'Qualifications criteria for the Employer Nomination Scheme.',      icon: 'clipboard', page: '186-skill-requirements' },
  { title: 'Skills in Demand (482)',        desc: 'Employer-sponsored temporary visa — skills assessment requirements.', icon: 'briefcase', page: 'skills-in-demand-visa' },
]

export default function SkillsAssessmentPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['skills-assessment'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Skills Assessment', url: 'https://www.nanakmigration.com.au/skills-assessment' },
        ]}
        faqs={FAQ}
        service={{ name: 'Skills Assessment for Australian Visas', description: PAGE_META['skills-assessment'].metaDescription, url: 'https://www.nanakmigration.com.au/skills-assessment' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Skills Assessment' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Skilled Migration · Skills Assessment"
        title={<>Skills Assessment<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Explained</em></>}
        deck="What a skills assessment is, who the designated assessing authorities are, and how the process generally works for Australian visa applications."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a skills assessment review', page: 'book-consultation' }}
        accent={TEAL}
        navigate={navigate}
        footnote="General information only. Assessing authority requirements and processing times change — always verify with the authority and obtain advice from MARN 2619467."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            A skills assessment is a formal evaluation of your qualifications and work experience against Australian standards for your nominated occupation, conducted by the assessing authority designated for that occupation, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. A positive skills assessment is generally required before you can submit an Expression of Interest for a points-tested skilled visa, and is also required for most employer-sponsored visa subclasses. Each assessing authority has its own evidence requirements, fees and processing times.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={TEAL} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={TEAL} />
      </div>

      {/* Authorities table */}
      <section id="authorities" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading
            kicker="Assessing Bodies"
            title="Main Assessing Authorities"
            intro="Each ANZSCO occupation is assigned to one designated assessing authority. The table below provides a general guide — always confirm your occupation's authority and requirements on the Department of Home Affairs website."
            accent={TEAL}
          />
          <div style={{ marginBottom: 20 }}>
            <Callout variant="note">
              The authorities and occupations below are a general guide only. The authoritative list of occupations and their designated assessing bodies is published by the Department of Home Affairs and is subject to change. Confirm your occupation before lodging.
            </Callout>
          </div>
          <ComparisonTable
            columns={AUTH_COLUMNS}
            rows={AUTH_ROWS}
            accent={TEAL}
            caption="Validity periods are indicative — confirm current validity with each authority before applying."
          />
        </div>
      </section>

      {/* Process timeline */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="Step by Step"
            title="The Assessment Process"
            intro="The steps below represent a general guide to the skills assessment process. Specific steps, documents, and timelines vary by assessing authority — confirm requirements on the relevant authority's website."
            accent={TEAL}
          />
          <StepTimeline steps={STEPS} variant="cards" accent={TEAL} />
        </div>
      </section>

      {/* Common pitfalls */}
      <section id="mistakes" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="What to Watch"
            title="Common Pitfalls"
            intro="These errors frequently lead to delays, requests for further information, or adverse decisions. Most can be avoided with careful preparation."
            accent={TEAL}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {MISTAKES.map((m, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={m.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{m.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{m.body}</p>
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
            kicker="Document Checklist"
            title="Evidence Generally Required"
            intro="The documents below cover most skills assessment applications. Requirements vary by authority — always check the authority's own checklist before lodging."
            accent={TEAL}
          />
          <EvidenceChecklist groups={EVIDENCE} accent={TEAL} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={TEAL} />
          <FaqAccordion items={FAQ} accent={TEAL} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={TEAL} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Have your skills assessment<br /><em style={{ fontStyle: 'italic', color: GOLD }}>reviewed before lodging</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your qualifications and employment history against the requirements of your assessing authority, identify gaps before they result in an adverse outcome, and advise on the right occupation and visa pathway for your circumstances."
        primaryCta={{ label: 'Book a skills assessment consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'View skilled visa options →', page: 'skilled-migration' }}
        accent={TEAL}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="Assessing authority requirements, fees, processing times, and occupation lists are subject to change. This page does not constitute advice from an assessing authority. Confirm all requirements directly with the relevant assessing body and obtain advice from a registered migration agent before applying." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
