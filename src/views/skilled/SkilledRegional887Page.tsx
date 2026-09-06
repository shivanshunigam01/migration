import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_SKILLED } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading, StepTimeline,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout,
} from '@/components/page'
import type { KeyFact, TimelineStep, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const ACCENT = CAT_SKILLED
const CURRENT_AS_AT = 'August 2026'
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'evidence', label: 'Evidence' },
  { id: 'vs-191', label: '887 vs 191' },
  { id: 'deadlines', label: 'Deadlines' },
  { id: 'process', label: 'How to apply' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'home', value: '2 years', label: 'Must have lived in a regional area while on the provisional visa', note: 'Residence must have been in a specified regional area while holding the eligible provisional visa. The 2 years need not be consecutive, but must total at least 2 years.' },
  { icon: 'briefcase', value: '1 year full-time', label: 'Must have worked in a regional area while on the provisional visa', note: 'Work must have been full-time (or equivalent part-time hours) in a specified regional area while holding the eligible provisional visa.' },
  { icon: 'shield', value: 'Permanent', label: 'Grants permanent residence on approval', note: 'The 887 is a permanent visa. On grant, the holder becomes a permanent resident with a 5-year travel facility.' },
  { icon: 'clock', value: 'Legacy pathway', label: 'Only for 489 (and older 475/487/495/496) provisional visa holders', note: 'The 489 visa closed to new applicants. New regional provisional visa holders (491/494) use the 191 visa instead, not the 887.' },
]

const STEPS: TimelineStep[] = [
  {
    title: 'Compile your evidence file',
    desc: 'Gather all evidence of regional residence (2 years) and regional work (1 year full-time equivalent) covering the required periods while you held the eligible provisional visa. Organise chronologically and cross-check for gaps.',
  },
  {
    title: 'Confirm you meet all requirements',
    desc: 'Verify that the regional areas in which you lived and worked are "specified regional areas" for 887 purposes. Not all regional areas qualify — confirm on the DoHA website or seek advice. Also confirm health and character requirements are met.',
  },
  {
    title: 'Lodge online via ImmiAccount',
    desc: 'The 887 application is lodged online through ImmiAccount. Attach all evidence, complete the relevant forms for you and any dependants, and pay the application charge.',
  },
  {
    title: 'Await the decision',
    desc: 'Processing times for the 887 vary — the Department publishes current processing times on the DoHA website. If the Department requires additional information, they will issue a Request for Further Information (RFFI). Respond promptly and completely.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'I hold a 491 visa — can I apply for the 887?',
    answer: 'No. The 887 is only available to holders of eligible provisional visas: subclass 489, 475, 487, 495 or 496. The 491 is not an eligible provisional visa for the 887. If you hold a 491, your permanent residence pathway is the subclass 191 (Permanent Residence — Skilled Regional), which requires 3 years of regional residence and an income threshold.',
  },
  {
    question: 'Does my work have to be in the same regional area as my residence?',
    answer: 'Not necessarily — but both the residence and the work must have been in "specified regional areas" as defined by the Department. The work and residence areas do not have to be identical, but each must independently qualify as a specified regional area. Confirm on the DoHA website that both your residence area and work location qualify.',
  },
  {
    question: 'Can I count part-time work toward the 1-year requirement?',
    answer: 'Yes — the work requirement is 1 year of full-time equivalent work. Part-time work can be counted if the total hours equate to full-time hours over the qualifying period. Keep detailed records of your hours and pay — the Department may scrutinise part-time claims carefully.',
  },
  {
    question: 'What if I had to leave the regional area temporarily during the 2 years?',
    answer: 'The 2-year residence requirement does not require uninterrupted residence. Short absences — for holidays, family visits, or medical treatment — do not necessarily break the continuity of residence. However, extended absences outside the regional area may reduce the qualifying period. If you had significant absences, calculate whether your net regional residence still totals 2 years and seek advice if unsure.',
  },
  {
    question: 'What regional areas count for the 887?',
    answer: 'The specified regional areas for the 887 are defined by the Department of Home Affairs. Generally, most of Australia outside Sydney, Melbourne, Brisbane, Gold Coast, and Perth qualifies, but the precise boundaries are set by legislative instrument and may differ from the regional definitions used for other visa purposes (such as the 491). Always confirm whether your specific address was in a "specified regional area" for 887 purposes on the DoHA website.',
  },
  {
    question: 'How long does 887 processing take?',
    answer: 'Processing times for the 887 vary and are published on the DoHA website. As the 489 cohort winds down, the volume of 887 applications is declining — this may affect processing times in either direction. Check the current published processing time on the DoHA website before lodging.',
  },
]

const RELATED: RelatedPage[] = [
  { title: '191 Permanent Residence (Skilled Regional)', desc: 'The current PR pathway for 491 and 494 provisional visa holders — not the 887.', icon: 'shield', page: '191-visa', color: ACCENT },
  { title: 'Skilled Work Regional (491)', desc: 'The current regional provisional visa — its PR pathway is the 191, not the 887.', icon: 'mappin', page: 'skilled-work-regional-491', color: ACCENT },
  { title: 'Designated Regional Areas', desc: 'Which areas qualify as regional for visa purposes — check whether your address qualifies.', icon: 'mappin', page: 'regional-areas', color: ACCENT },
  { title: 'Skilled Migration', desc: 'Overview of all points-tested and skilled visa pathways — start here.', icon: 'star', page: 'skilled-migration', color: ACCENT },
]

const COMPARISON_ROWS = [
  { feature: 'Eligible provisional visas', visa887: '489, 475, 487, 495, 496', visa191: '491, 494' },
  { feature: 'Residence requirement', visa887: '2 years in regional area', visa191: '3 years in regional area' },
  { feature: 'Work requirement', visa887: '1 year full-time regional work', visa191: 'Income threshold ($53,900 p.a. from 1 Jul 2023 — confirm on DoHA)' },
  { feature: 'Income threshold', visa887: 'None', visa191: 'Yes — must earn above the threshold for 3 years' },
  { feature: 'Skills assessment required', visa887: 'No (held at time of provisional visa)', visa191: 'No (held at time of provisional visa)' },
  { feature: 'Points test required', visa887: 'No', visa191: 'No' },
  { feature: 'Status', visa887: 'Legacy — 489 cohort winding down', visa191: 'Current — 491/494 cohort' },
]

const RESIDENCE_EVIDENCE = [
  'Electoral enrolment records showing your regional address',
  'Utility bills (electricity, gas, water, internet) in your name at the regional address, covering the 2-year period',
  "Driver's licence showing a regional address",
  'Bank statements showing a regional address',
  'School records or medical records for family members at the regional address',
  'Lease agreements or mortgage documents for the regional property',
  'Council rate notices if you owned the property',
  'A stat dec (statutory declaration) from a community leader or employer confirming your regional residence — as supporting evidence only, not as a substitute for primary documents',
]

const WORK_EVIDENCE = [
  'Employment contracts specifying the location and start/end dates of employment',
  'Payslips covering the full period of the claimed work',
  'Tax return and ATO payment summaries (income statements) showing regional employment',
  'PAYG summaries or Single Touch Payroll records',
  'Reference letters from employers on company letterhead confirming location, dates, hours and role',
  'For self-employment: business registration showing regional address, BAS statements, business bank statements, client contracts',
  'Superannuation statements showing employer contributions for the relevant period',
]

export default function SkilledRegional887Page({ navigate }: { navigate: (page: string) => void }) {
return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'Skilled Regional Visa 887', url: 'https://www.nanakmigration.com.au/skilled-regional-887' },
        ]}
        faqs={FAQ}
        service={{ name: 'Skilled Regional (Permanent) Visa Subclass 887', description: PAGE_META['skilled-regional-887'].metaDescription, url: 'https://www.nanakmigration.com.au/skilled-regional-887' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'Skilled Regional Visa 887' },
      ]} />
      <PageHero
        variant="standard"
        eyebrow="Skilled Migration"
        eyebrowSub="Permanent Residence · Subclass 887"
        title={<>Skilled Regional<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Permanent Visa 887</em></>}
        deck="The Skilled Regional (Permanent) visa (subclass 887) grants permanent residence to people who held an eligible provisional regional visa — principally the subclass 489 — and have lived in and worked in a designated regional area for the required periods."
        shortAnswer={<>The 887 is the permanent residence outcome for holders of the now-closed subclass 489 (Skilled — Regional Sponsored) provisional visa, and certain older cohorts who held the 475, 487, 495, or 496 provisional visas. To qualify, the applicant must have lived in a specified regional area for at least 2 years while holding the provisional visa, and worked full-time (or equivalent part-time) in a specified regional area for at least 1 year while holding the provisional visa. Regional areas for the 887 are defined by the Department — most areas outside the main capital cities qualify. Importantly, this is the LEGACY pathway for the 489 cohort — new regional sponsored provisional visa holders under subclass 491 or 494 use the subclass 191 (Permanent Residence — Skilled Regional) instead. The 489 visa closed to new applicants, and the 887 will eventually wind down as the remaining 489 cohort completes their pathway. Nanak Migration Group (MARN 2619467) can advise on whether the 887 is the correct pathway for your situation. No outcome guarantees.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '191 Permanent Residence →', page: '191-visa' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      {/* Overview + Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Subclass 887 — A Legacy Permanent Pathway" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 0 }}>
            The subclass 887 Skilled Regional (Permanent) visa is the permanent residence outcome for people who held eligible provisional regional skilled visas — primarily the subclass 489 (Skilled — Regional Sponsored), and a small cohort of older visa holders (475, 487, 495 and 496). It was created to provide a permanent residence pathway for people who committed to living and working in regional Australia.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
            The subclass 887 is not open to new provisional visa holders entering the regional pathway today. The subclass 489 visa closed to new applications. People who are now commencing the regional pathway hold the subclass 491 (Skilled Work Regional) or subclass 494 (Employer Sponsored Regional) visa, and their permanent residence pathway is via the subclass 191 (Permanent Residence — Skilled Regional) visa — not the 887.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 24 }}>
            If you hold a current subclass 489 (or older 475/487/495/496) provisional visa, or have already been granted one, the 887 remains your permanent residence pathway — provided you meet the residence and work requirements.
          </p>
          <Callout variant="note" panel={true} title="Holding a 491 or 494 visa? The 191 is your PR pathway — not the 887">
            If you hold a subclass 491 (Skilled Work Regional) or subclass 494 (Employer Sponsored Regional) visa, the subclass 887 is NOT your permanent residence pathway. You must apply for the subclass 191 (Permanent Residence — Skilled Regional) visa instead. The 191 has different requirements, including an income threshold. Do not apply for the 887 if you are on a 491 or 494.
          </Callout>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Who Qualifies for the Subclass 887?" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginTop: 32 }}>
            {[
              {
                heading: 'Held an eligible provisional visa',
                detail: 'You must have held one of: subclass 489 (Skilled — Regional Sponsored), subclass 475 (Skilled — Regional Sponsored), subclass 487 (Skilled — Regional Sponsored), subclass 495 (Skilled — Independent Regional), or subclass 496 (Skilled — Designated Area-Sponsored). The subclass 491 and 494 are NOT eligible provisional visas for the 887 — holders of those visas must use the 191.',
              },
              {
                heading: '2 years residence in a specified regional area',
                detail: 'You must have lived in a specified regional area for at least 2 years while holding the eligible provisional visa. Regional areas are defined by the Department. Most of regional Australia qualifies, but specific boundaries apply — confirm on the DoHA website.',
              },
              {
                heading: '1 year full-time equivalent work in a specified regional area',
                detail: 'You must have worked full-time (or part-time equivalent) for at least 1 year in a specified regional area while holding the eligible provisional visa. The work must have been lawful employment (including self-employment). Volunteering and study do not count.',
              },
              {
                heading: 'Health and character requirements',
                detail: 'Standard health and character requirements apply, including health examinations if required, police clearances, and character declarations for the applicant and any dependants included in the application.',
              },
              {
                heading: 'Applies from any location',
                detail: 'The 887 can be applied for from inside Australia (onshore) or from outside Australia (offshore). There is no requirement to be in a regional area at the time of application — the 2-year residence and 1-year work requirements apply to the period while on the provisional visa.',
              },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, border: `1px solid ${BORDER}`, borderRadius: 10, padding: '22px 24px', background: '#fff' }}>
                <div style={{ flexShrink: 0, marginTop: 2 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: ACCENT, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon name="check" size={14} color="#fff" />
                  </div>
                </div>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 15, color: NAVY, marginBottom: 6 }}>{item.heading}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.65 }}>{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Evidence */}
      <section id="evidence" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <SectionHeading kicker="Documentation" title="Evidence of Regional Residence and Work" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 32 }}>
            The 887 application requires strong documentary evidence of both regional residence and regional work. The Department will not accept bare assertions — evidence must be contemporaneous and comprehensive.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: 32 }}>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 20 }}>Evidence of regional residence (2 years)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {RESIDENCE_EVIDENCE.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: 3 }}>
                      <Icon name="check" size={14} color={ACCENT} />
                    </div>
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: '28px 28px', background: GREY_BG, borderTop: `4px solid ${ACCENT}` }}>
              <div style={{ fontWeight: 700, fontSize: 16, color: NAVY, marginBottom: 20 }}>Evidence of regional work (1 year full-time)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                {WORK_EVIDENCE.map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ flexShrink: 0, marginTop: 3 }}>
                      <Icon name="check" size={14} color={ACCENT} />
                    </div>
                    <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{item}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="warning" panel={true} title="Gaps in evidence are a common reason for requests for further information">
              The Department may issue a Request for Further Information (RFFI) if the evidence of residence or work is incomplete or inconsistent. Build your evidence file carefully and chronologically. Nanak Migration Group (MARN 2619467) can review your evidence before lodgement to identify gaps.
            </Callout>
          </div>
        </div>
      </section>

      {/* 887 vs 191 */}
      <section id="vs-191" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1060, margin: '0 auto' }}>
          <SectionHeading kicker="Comparison" title="Subclass 887 vs Subclass 191 — Which Is Yours?" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 24, marginBottom: 32 }}>
            The most common source of confusion with regional permanent residence is which visa applies. The answer depends entirely on which provisional visa you held — not on your current circumstances.
          </p>
          <div style={{ border: `1px solid ${BORDER}`, borderRadius: 12, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', background: NAVY, color: '#fff', padding: '14px 20px', fontWeight: 600, fontSize: 14 }}>
              <div>Feature</div>
              <div>Subclass 887</div>
              <div>Subclass 191</div>
            </div>
            {COMPARISON_ROWS.map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', padding: '14px 20px', borderBottom: i < COMPARISON_ROWS.length - 1 ? `1px solid ${BORDER}` : 'none', background: i % 2 === 0 ? '#fff' : GREY_BG }}>
                <div style={{ fontSize: 14, color: '#374151', fontWeight: 500 }}>{row.feature}</div>
                <div style={{ fontSize: 14, color: NAVY }}>{row.visa887}</div>
                <div style={{ fontSize: 14, color: NAVY }}>{row.visa191}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current cutoffs on the Department of Home Affairs website">
              Figures current at August 2026 — confirm on the Department of Home Affairs website before relying on this information. The income threshold for the 191 is reviewed periodically.
            </Callout>
          </div>
          <div style={{ marginTop: 20 }}>
            <Callout variant="danger" panel={true} title="Applying for the wrong visa will result in refusal">
              If you apply for the 887 while holding a 491 or 494 visa, your application will be refused — you do not hold an eligible provisional visa for the 887. Conversely, if you hold a 489 or older provisional visa, the 191 is not available to you. Check which provisional visa you hold before lodging.
            </Callout>
          </div>
        </div>
      </section>

      {/* Deadlines */}
      <section id="deadlines" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Time limits" title="Transitional Deadlines and Visa Expiry" accent={ACCENT} />
          <div style={{ marginTop: 28 }}>
            <Callout variant="note" panel={true} title="Confirm current deadlines on the Department of Home Affairs website">
              The 489 visa cohort is winding down. Transitional arrangements and deadlines change. The information below is current at August 2026 — always confirm current deadlines and transitional provisions on the Department of Home Affairs website before relying on this information.
            </Callout>
          </div>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 28, marginBottom: 0 }}>
            The subclass 489 provisional visa has a maximum 4-year stay. The 887 application must generally be made while you hold a valid substantive visa. You do not need to be in Australia or in a regional area at the time you apply for the 887, but you must have held a valid provisional visa (or a Bridging Visa A covering it) at the time of application.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
            If your provisional visa is approaching expiry and you have not yet met the work and residence requirements, you may need to extend your stay — possibly via a Bridging Visa. Seek migration advice well before your provisional visa expires if you are concerned about meeting the requirements in time.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginTop: 20, marginBottom: 0 }}>
            There is no formal deadline for the 887 to close — the Department expects to accept 887 applications for as long as there are eligible 489 holders who have met the requirements. However, the cohort of eligible applicants is finite and declining as the 489 visa wound down.
          </p>
        </div>
      </section>

      {/* Process */}
      <section id="process" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply for the Subclass 887" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading kicker="See also" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title="Is the subclass 887 your permanent residence pathway?"
        body="Nanak Migration Group (MARN 2619467) can review your provisional visa history and evidence to advise whether the 887 or 191 is the correct pathway for your situation."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
