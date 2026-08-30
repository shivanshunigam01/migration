import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  CardGrid,
  ComparisonTable,
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
  PageCard,
  ComparisonColumn,
  ComparisonRow,
  ChecklistGroup,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY, NAVY_DARK , CAT_EMPLOYER } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const GREEN = CAT_EMPLOYER
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

/* ─── On-this-page sections ─── */
const TOC_SECTIONS: NavSection[] = [
  { id: 'key-facts',        label: 'Key facts' },
  { id: 'four-skill-tests', label: 'Four skill tests' },
  { id: 'streams',          label: 'Stream comparison' },
  { id: 'work-experience',  label: 'Work experience' },
  { id: 'common-problems',  label: 'Common problems' },
  { id: 'evidence',         label: 'Evidence checklist' },
  { id: 'faq',              label: 'FAQ' },
  { id: 'related',          label: 'Related pages' },
]

/* ─── Key facts ─── */
const KEY_FACTS: KeyFact[] = [
  { icon: 'star',      value: 'Required for most',   label: 'Skills assessment',        note: 'In most cases — TRT stream is the main exception.' },
  { icon: 'briefcase', value: 'Generally 3 years',   label: 'Relevant work experience', note: 'Full-time equivalent; varies by stream.' },
  { icon: 'globe',     value: 'Competent English',   label: 'English requirement',      note: 'Unless an exemption applies to you.' },
  { icon: 'user',      value: 'Generally under 45',  label: 'Age at application',       note: 'Limited exemptions exist for certain occupations.' },
]

/* ─── Four skill tests ─── */
const SKILL_TESTS: PageCard[] = [
  { badge: '01', title: 'Nominated occupation on the relevant list',        color: NAVY,     body: 'The occupation being nominated must generally appear on one of the Department of Home Affairs occupation lists relevant to the 186 stream and location. The relevant list determines whether the occupation is available, and may specify additional caveats or conditions. Occupation lists are updated periodically and applicants should verify currency before the employer lodges the nomination.', note: 'Caveats on occupations may restrict who can be nominated even if the occupation code appears on the list.' },
  { badge: '02', title: 'Suitable skills assessment from the correct authority', color: GREEN, body: 'For the Direct Entry stream, applicants generally need a positive skills assessment from the assessing authority specified for their ANZSCO occupation unit group. The assessing authority and the assessment standard are set by the relevant instrument — choosing the wrong body or receiving an assessment that does not meet the required standard will generally not satisfy this criterion.', note: 'Most assessments are valid for a limited period (commonly three years from the date of assessment). Check the expiry before lodging.' },
  { badge: '03', title: 'Work experience at the required skill level',      color: GOLD,     body: 'Applicants are generally required to demonstrate relevant skilled work experience in the nominated occupation, or a closely related occupation at an equivalent skill level. For Direct Entry, this is typically at least three years of full-time equivalent experience. For TRT, it is at least two years of employment with the nominating employer in the nominated occupation while holding a qualifying subclass 482 visa.', note: 'Overseas experience may be counted for Direct Entry. Documentary evidence is required for all periods claimed.' },
  { badge: '04', title: 'Licensing or registration where required',         color: '#4f46e5', body: "For certain regulated occupations — including many health professions, some engineering roles, and trades requiring a licence — the applicant may need to hold relevant registration or licensing in Australia, or demonstrate that they are eligible to obtain it. This requirement operates independently of the skills assessment and is specific to each occupation.", note: 'Check with the relevant licensing authority for your occupation. Some registrations cannot be obtained until you hold a suitable visa.' },
]

/* ─── Streams comparison ─── */
const STREAM_COLS: ComparisonColumn[] = [
  { key: 'trt', label: 'TRT Stream', highlight: true },
  { key: 'de',  label: 'Direct Entry' },
  { key: 'la',  label: 'Labour Agreement' },
]

const STREAM_ROWS: ComparisonRow[] = [
  { feature: 'Skills assessment',  trt: 'Not generally required; employment record serves as evidence of skills', de: 'Generally required — positive result from the relevant assessing authority', la: 'Determined by the terms of the individual labour agreement' },
  { feature: 'Work experience',    trt: 'Generally at least 2 years with the same sponsoring employer in the same nominated occupation on a qualifying 482 visa', de: 'Generally at least 3 years full-time equivalent in the nominated occupation', la: 'Set by the labour agreement; may differ from standard requirements' },
  { feature: 'English',            trt: 'Generally Competent English; same exemptions apply as Direct Entry', de: 'Generally Competent English (e.g. IELTS 6 overall); exemptions may apply', la: 'Generally follows standard requirements unless the agreement specifies otherwise' },
  { feature: 'Typical applicant',  trt: 'Workers who have held a subclass 482 (Core or Specialist stream) for at least 2 years with the nominating employer', de: 'Skilled workers being sponsored from overseas, or those who have not completed 2 years on a 482 with the same employer', la: 'Workers covered by an employer-specific or industry-wide labour agreement that includes a 186 pathway' },
]

/* ─── Evidence checklist ─── */
const CHECKLIST_GROUPS: ChecklistGroup[] = [
  { title: 'Identity & relationship to employer', icon: 'user', color: NAVY, items: [
    'Applicant passport (all pages)',
    "Employer's current Standard Business Sponsorship approval evidence",
    'Approved nomination from the employer (or concurrent lodgement)',
    'Evidence of the employment relationship — contract, payslips, tax records',
  ]},
  { title: 'Skills assessment (Direct Entry)', icon: 'star', color: GREEN, items: [
    'Positive skills assessment letter from the correct assessing authority',
    'Assessment must be current and for the nominated occupation',
    'Academic qualifications and transcripts (if assessed)',
    'Evidence of years of professional membership (if required by the assessing body)',
  ]},
  { title: 'Work experience', icon: 'briefcase', color: GOLD, items: [
    'Payslips or wage records for all periods of employment claimed',
    'Employer reference letters on company letterhead for each employer',
    'Tax returns or ATO income statements for relevant financial years',
    'Superannuation statements (for Australian employment)',
    'Certified English translations of overseas employment records',
  ]},
  { title: 'English proficiency', icon: 'globe', color: '#2563eb', items: [
    'Test results within the validity period (e.g. IELTS, PTE, TOEFL iBT, OET)',
    'Evidence of English-medium study (5+ years) if relying on this exemption',
    'Evidence of citizenship of an exempt country if relying on a citizenship exemption',
  ]},
  { title: 'Health & character', icon: 'shield', color: '#4f46e5', items: [
    'HAP ID and medical examination by a DHA-approved panel physician',
    'Police clearances for every country lived in for 12+ months since age 16',
    'AFP clearance if applicable',
  ]},
  { title: 'Licensing & registration (where required)', icon: 'file', color: '#f5a124', items: [
    'Current Australian registration or licence for the nominated occupation (where required)',
    'Evidence of eligibility for registration if full registration is not yet held',
    'Evidence of overseas registration or accreditation (where relevant)',
  ]},
]

/* ─── Common problems (reuse FaqAccordion pattern with extra "action" notes) ─── */
const PROBLEMS = [
  { question: '01 · Occupation drift — duties no longer match the ANZSCO code',          answer: <><p style={{ margin: '0 0 12px' }}>The Department assesses whether the work actually performed matches the ANZSCO unit group nominated on the visa. Where a worker's responsibilities have shifted into a different unit group — even if the job title did not change — the employment period in the mismatched occupation may not satisfy the skill requirement. This is a common issue in fast-changing industries such as technology.</p><div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 8 }}><Icon name="check" size={13} color={GREEN} /><span style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> Review the ANZSCO description for your nominated code before lodging. If duties have materially changed, seek advice on whether a new nomination with a corrected code is required.</span></div></> },
  { question: '02 · Skills assessment from the wrong assessing authority',                answer: <><p style={{ margin: '0 0 12px' }}>Each ANZSCO unit group is assigned to a specific assessing authority by the relevant legislative instrument. Obtaining an assessment from a body that is not the nominated authority for your occupation unit group will generally not satisfy the skills requirement, regardless of the outcome.</p><div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 8 }}><Icon name="check" size={13} color={GREEN} /><span style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> Confirm the correct assessing authority for your exact four-digit ANZSCO code before paying any assessment fee. Your migration agent can verify this.</span></div></> },
  { question: '03 · Insufficient documented work experience',                              answer: <><p style={{ margin: '0 0 12px' }}>The Department of Home Affairs may require documentary evidence for every period of claimed work experience. Claims that cannot be corroborated with payslips, employer letters, or tax records — including overseas experience — may be disregarded. Gaps in the documentary record are a common source of requests for further information.</p><div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 8 }}><Icon name="check" size={13} color={GREEN} /><span style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> Gather a complete documentary record for all periods of claimed experience before lodging. Overseas records should be obtained well in advance as they can take time to source.</span></div></> },
  { question: '04 · Expired skills assessment',                                           answer: <><p style={{ margin: '0 0 12px' }}>Most skills assessments are valid for a limited period — commonly three years from the date of issue. If a skills assessment expires before the 186 visa is decided, the Department may require a current assessment. Applying for a reassessment mid-application adds time and cost.</p><div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 8 }}><Icon name="check" size={13} color={GREEN} /><span style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> Check the validity period of your skills assessment before lodging. If the assessment may expire during the expected processing window, consider applying for a reassessment first.</span></div></> },
  { question: '05 · English result below the required standard',                          answer: <><p style={{ margin: '0 0 12px' }}>Competent English is generally required, with the specific test scores set by the relevant instrument. A result that met the standard at the time of the skills assessment may have expired or may not meet the current visa requirement. Some applicants incorrectly assume an exemption applies when it does not.</p><div style={{ background: `${GREEN}08`, border: `1px solid ${GREEN}20`, borderRadius: 10, padding: '10px 14px', display: 'flex', gap: 8 }}><Icon name="check" size={13} color={GREEN} /><span style={{ fontSize: 12, color: '#374151', lineHeight: 1.6 }}><strong style={{ color: GREEN }}>What to do:</strong> Confirm the English requirement and your exemption status with a registered migration agent before lodging. Test results generally have a validity period — check that yours will be current at the time of decision.</span></div></> },
]

/* ─── FAQ ─── */
const FAQ_ITEMS: FaqItem[] = [
  { question: 'Does the TRT stream require a skills assessment?', answer: 'In most cases, no. The Temporary Residence Transition stream generally does not require a separate skills assessment from a formal assessing authority. The two years of employment with the sponsoring employer in the nominated occupation serves as the skills evidence. However, the Department of Home Affairs retains discretion to request additional evidence in individual cases, and some occupations may have additional requirements.' },
  { question: 'Can overseas work experience count towards the Direct Entry requirement?', answer: "Yes, in most cases overseas employment may be counted towards the three-year work experience requirement for Direct Entry. The experience must be in the nominated occupation, or a closely related occupation at an equivalent skill level. All overseas periods must be supported by documentary evidence — payslips, employer reference letters, or equivalent overseas records, accompanied by certified English translations where required." },
  { question: 'What is the English requirement and are there exemptions?', answer: "The 186 visa generally requires Competent English, commonly demonstrated by an IELTS result of 6 in each band (or equivalent in an approved test). Exemptions may apply to citizens of the United Kingdom, United States, Canada, New Zealand, or Republic of Ireland; to applicants who have completed at least five years of full-time secondary or higher education where the language of instruction was English; and in certain other circumstances. An exemption is not automatic — it must be confirmed against the current legislative requirements." },
  { question: 'Is there an age limit for the 186 visa?', answer: "Applicants are generally required to be under 45 years of age at the time the visa application is lodged. There are limited legislative exemptions — including for certain academics nominated by an Australian university, and for some high-earning specialists. These exemptions are assessed on a case-by-case basis. If you are 45 or older, obtain specialist advice before the nomination is lodged, as the nomination itself may be affected." },
  { question: 'What happens if my skills assessment has expired by the time the visa is decided?', answer: "In most cases, the Department of Home Affairs requires the skills assessment to be current at the time of decision, not only at the time of lodgement. If your assessment expires during processing — which can take many months — you may be asked to provide a current assessment. It is generally advisable to check the validity of your assessment relative to the expected processing timeline before lodging." },
  { question: 'If I change employers, can I still lodge a 186?', answer: "The 186 visa is employer-specific — the nomination must be lodged by the employer who will be employing you. For the TRT stream, changing employers resets the qualifying period; the new employer would need to sponsor you on a 482 and you would generally need to complete a further two years before the new employer could nominate you for a 186 under TRT. For Direct Entry, a new employer can nominate you provided you otherwise meet the skill and experience requirements. Changing employers while a 186 application is pending creates significant risks and specialist advice should be obtained immediately." },
]

/* ─── Related pages ─── */
const RELATED_PAGES: RelatedPage[] = [
  { title: '186 Occupations List',              desc: 'Check whether your occupation appears on the relevant list for the Employer Nomination Scheme.',               icon: 'layers',    page: 'employer-nomination-scheme' },
  { title: 'Employer Nomination Scheme (186)',   desc: 'Overview of the 186 visa — streams, eligibility, the nomination process, and the pathway to permanent residence.', icon: 'shield',   page: 'employer-nomination-scheme' },
  { title: 'Skills in Demand (482) Visa',        desc: 'Temporary employer-sponsored visa — often the step before the 186 TRT pathway.',                              icon: 'zap',       page: 'skills-in-demand-visa' },
  { title: '482 to PR Pathway',                  desc: 'How to transition from a Skills in Demand (482) visa to permanent residence via the 186 TRT stream.',          icon: 'arrowright', page: 'skills-in-demand-visa' },
]

/* ─── Work experience section (page-specific layout — stays local) ─── */
const WE_COUNTS = [
  { label: 'Full-time employment in the nominated occupation at the required skill level',        yes: true },
  { label: 'Part-time employment, generally counted on a full-time equivalent (FTE) basis',     yes: true },
  { label: 'Overseas employment in a comparable occupation (Direct Entry)',                       yes: true },
  { label: 'Self-employment, in most cases, at the required skill level with documentary evidence', yes: true },
  { label: 'Employment in a closely related occupation assessed as equivalent',                  yes: true },
  { label: 'Time spent studying full-time (not counted as work experience)',                     yes: false },
  { label: 'Unpaid internships, volunteer work, or work below the required skill level',         yes: false },
  { label: 'Experience gained more than ten years before lodgement (may attract closer scrutiny)', yes: false },
]

const WE_EVIDENCE = [
  { icon: 'file',      label: 'Employment contracts or letters of offer',       note: 'On employer letterhead, showing commencement date, position title, and hours.' },
  { icon: 'dollar',    label: 'Payslips for each employer and period claimed',  note: 'Covering the full period; must show employer name, employee name, dates, and amounts paid.' },
  { icon: 'briefcase', label: 'Employer reference letters',                     note: 'Signed by an authorised representative; confirming dates of employment, duties performed, and occupation.' },
  { icon: 'file',      label: 'Tax records and income assessments',             note: 'ATO notices or overseas equivalent tax records corroborating income and employment periods.' },
  { icon: 'shield',    label: 'Superannuation records',                         note: 'For Australian employment periods; confirms employment duration and employer identity.' },
]

function WorkExperience() {
  return (
    <section id="work-experience" style={{ background: GREY_BG, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1060, margin: '0 auto' }}>
        <SectionHeading kicker="Section 3" title="How Work Experience Is Counted" accent={GREEN} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 28, marginBottom: 28 }}>
          {/* What counts / doesn't */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: '28px 26px', boxShadow: '0 2px 12px rgba(27,43,94,0.05)' }}>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 20px' }}>What generally counts</h3>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
              {WE_COUNTS.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <div style={{ width: 20, height: 20, borderRadius: '50%', background: item.yes ? `${GREEN}15` : 'rgba(220,38,38,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon name={item.yes ? 'check' : 'x'} size={11} color={item.yes ? GREEN : '#dc2626'} />
                  </div>
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.55 }}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
          {/* Evidence needed */}
          <div style={{ background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 14, padding: '28px 26px', boxShadow: '0 2px 12px rgba(27,43,94,0.05)' }}>
            <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 20px' }}>Evidence generally required</h3>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14 }}>
              {WE_EVIDENCE.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', padding: '12px 14px', background: GREY_BG, borderRadius: 10, border: `1px solid ${BORDER}` }}>
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: `${GREEN}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={item.icon} size={15} color={GREEN} />
                  </div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 3 }}>{item.label}</div>
                    <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.55 }}>{item.note}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div style={{ background: `${NAVY}05`, border: `1.5px solid ${NAVY}18`, borderRadius: 12, padding: '18px 22px', display: 'flex', gap: 14, alignItems: 'flex-start' }}>
          <Icon name="alert" size={18} color={NAVY} />
          <div style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7 }}>
            <strong style={{ color: NAVY_DARK }}>Overseas documents:</strong> Documents not in English must in most cases be accompanied by a certified English translation prepared by a NAATI-accredited translator or equivalent. The Department of Home Affairs may request additional verification of overseas employment records.
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─── Page ─── */
export default function SkillRequirements186Page({ navigate }: { navigate: (page: string) => void }) {
  const [activeSection] = useState('key-facts')

  React.useEffect(() => {
    document.title = PAGE_META['186-skill-requirements'].title
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Employer Nomination Scheme (186)', url: 'https://www.nanakmigration.com.au/employer-nomination-scheme' },
          { name: '186 Skill Requirements', url: 'https://www.nanakmigration.com.au/186-skill-requirements' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: '186 Visa Skill Requirements', description: PAGE_META['186-skill-requirements'].metaDescription, url: 'https://www.nanakmigration.com.au/186-skill-requirements' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
          { label: 'Employer Nomination Scheme (186)', page: 'employer-nomination-scheme' },
          { label: 'Skill Requirements' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Subclass 186"
        eyebrowSub="Employer Nomination Scheme · Skill Requirements"
        title={<>186 Skill Requirements<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Qualifications &amp; Experience</em></>}
        deck="The subclass 186 Employer Nomination Scheme generally requires applicants to demonstrate suitable skills for the nominated occupation — the exact evidence depends on which stream applies to your situation."
        shortAnswer={<>For the <strong style={{ color: NAVY }}>Temporary Residence Transition (TRT) stream</strong>, skills are generally demonstrated through at least two years of employment with the nominating employer in the same occupation — in most cases no separate skills assessment is required. For the <strong style={{ color: NAVY }}>Direct Entry stream</strong>, applicants generally need a positive skills assessment from the relevant assessing authority and at least three years of relevant full-time equivalent skilled work experience. Requirements may vary; the Department of Home Affairs is the authoritative source.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a 186 eligibility consultation', page: 'home' }}
        secondaryCta={{ label: 'View the 186 occupations list →', page: 'employer-nomination-scheme' }}
        accent={GREEN}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            To be eligible for the Employer Nomination Scheme (subclass 186) visa, applicants must generally hold a relevant skills assessment from the assessing authority for their nominated occupation, unless an exemption applies, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Under the Direct Entry stream, you typically need at least three years of relevant work experience, while under the Temporary Residence Transition stream the skills assessment requirement is often waived if you have been working in the nominated occupation. Your qualifications and experience must be assessed against Australian standards by the relevant assessing body.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* Two-column body: sticky TOC + full-width sections */}
      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48, alignItems: 'flex-start' }}>
        <OnThisPageNav sections={TOC_SECTIONS} active={activeSection} accent={GREEN} />
        <div style={{ flex: 1 }} />
      </div>

      {/* ── KEY FACTS ── */}
      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={GREEN} />
      </div>

      {/* ── FOUR SKILL TESTS ── */}
      <section id="four-skill-tests" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading kicker="Section 1" title="The Four Skill Tests" accent={GREEN} />
          <CardGrid cards={SKILL_TESTS} columns={2} accent={GREEN} />
        </div>
      </section>

      {/* ── STREAMS COMPARISON ── */}
      <section id="streams" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Section 2" title="Stream Comparison" accent={GREEN} />
          <ComparisonTable columns={STREAM_COLS} rows={STREAM_ROWS} accent={GREEN} caption={`Current as at ${CURRENT_AS_AT}. Verify current requirements with the Department of Home Affairs before lodging.`} />
        </div>
      </section>

      {/* ── WORK EXPERIENCE ── */}
      <WorkExperience />

      {/* ── COMMON PROBLEMS ── */}
      <section id="common-problems" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Section 4" title="Common Reasons the Skill Requirements Are Not Met" accent={GREEN} />
          <FaqAccordion items={PROBLEMS} accent={GREEN} />
        </div>
      </section>

      {/* ── EVIDENCE CHECKLIST ── */}
      <section id="evidence" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Section 5" title="Evidence Checklist" accent={GREEN} />
          <p style={{ textAlign: 'center', fontSize: 15, color: '#6b7280', margin: '-24px auto 40px', maxWidth: 560 }}>An indicative checklist — your specific case may require additional documents. Always confirm requirements with your registered migration agent.</p>
          <EvidenceChecklist groups={CHECKLIST_GROUPS} defaultOpen={0} accent={GREEN} />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={GREEN} />
          <FaqAccordion items={FAQ_ITEMS} accent={GREEN} />
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={GREEN} />
          <RelatedPages pages={RELATED_PAGES} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title={<>Not sure your experience meets<br /><em style={{ fontStyle: 'italic', color: GOLD }}>the 186 skill test?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can review your employment history, skills assessment, and nominated occupation against current Department of Home Affairs requirements — in most cases identifying issues before the nomination is lodged."
        primaryCta={{ label: 'Book a 186 eligibility consultation', page: 'home' }}
        accent={GREEN}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} pageNote="Occupation lists and assessment standards are subject to change. This page does not publish fees for any visa application." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
