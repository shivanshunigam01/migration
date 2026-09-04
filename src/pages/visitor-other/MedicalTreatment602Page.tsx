import React from 'react'
import { GOLD, NAVY, CAT_VISITOR } from '@/theme'
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

const ACCENT = CAT_VISITOR
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'who-qualifies', label: 'Who can apply' },
  { id: 'evidence', label: 'Evidence required' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'heart',
    value: 'Medical',
    label: 'For medical treatment, consultations, and supporting carers',
    note: 'The subclass 602 covers the patient seeking treatment, a person supporting a patient who cannot travel alone, and in some cases a person who cannot depart Australia for medical reasons.',
  },
  {
    icon: 'calendar',
    value: 'Case by case',
    label: 'Duration determined by the nature and length of treatment',
    note: 'There is no fixed maximum stay — the duration is assessed based on the planned treatment. Extensions may be available if treatment continues. Confirm current processing details with the Department of Home Affairs.',
  },
  {
    icon: 'briefcase',
    value: 'No work',
    label: 'Generally no work rights — medical treatment purposes only',
    note: 'The subclass 602 does not generally grant work rights. The purpose is medical treatment, consultation, or supporting a patient — not employment.',
  },
  {
    icon: 'dollar',
    value: 'Paid treatment',
    label: 'Must demonstrate ability to pay for treatment and living costs',
    note: "Applicants must show they have arrangements for treatment and the financial means to pay for it and their stay. Australia's public health system (Medicare) is generally not available to subclass 602 holders. Confirm current requirements on the Department of Home Affairs website.",
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm treatment arrangements with an Australian provider',
    desc: "Before lodging, obtain written confirmation from an Australian hospital, specialist clinic, or doctor of the treatment or consultation planned. The letter should describe the nature of the treatment, the expected duration, and confirm that arrangements are in place for the applicant to receive treatment.",
  },
  {
    code: '02',
    title: 'Gather evidence of the ability to pay',
    desc: "The applicant must demonstrate they can pay for all medical treatment costs, accommodation, and living expenses in Australia for the duration of the treatment. Evidence includes bank statements, letters from health insurers, or other financial documentation. Confirm current evidence requirements on the Department of Home Affairs website.",
  },
  {
    code: '03',
    title: 'Obtain relevant health insurance documentation (where applicable)',
    desc: "Some applicants will have private health insurance or reciprocal healthcare arrangements. Gather any relevant insurance documentation, as this may support the application and demonstrate the ability to cover costs.",
  },
  {
    code: '04',
    title: 'Lodge the visa application',
    desc: "Lodge the subclass 602 application through ImmiAccount. Both onshore and offshore applications are possible, depending on whether the applicant is already in Australia or applying from overseas. Pay the government charge — confirm current fees on the Department of Home Affairs website.",
  },
  {
    code: '05',
    title: 'Cooperate with any character or health assessment requests',
    desc: "The Department may request additional information, health assessments, or character documentation as part of the assessment. Cooperate promptly to avoid delays.",
  },
  {
    code: '06',
    title: 'Apply for extensions if treatment continues',
    desc: "If treatment takes longer than the original visa period, an extension may be available. Extensions must be applied for before the current visa expires. A new letter from the treating provider confirming the ongoing treatment need will be required.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Who can apply for the Medical Treatment visa?",
    answer: "The subclass 602 Medical Treatment visa is available to: (1) a person seeking medical treatment in Australia — including elective surgery, specialist consultations, dental treatment, and cancer treatment, among others; (2) a person accompanying and supporting someone who is seeking medical treatment and who cannot travel alone; and (3) in limited circumstances, a person who is already in Australia and cannot depart because they have a medical condition that makes departure medically inadvisable or impossible. Organ donors coming to Australia for the purposes of donation are also eligible.",
  },
  {
    question: "What evidence of medical treatment is required?",
    answer: "The primary evidence requirement is a letter from an Australian hospital, specialist clinic, or registered medical practitioner confirming: the nature of the medical treatment or consultation; that arrangements are in place for the treatment to proceed; and the expected duration of the treatment. For supporting carers, evidence of the patient's need for support and the carer's relationship to the patient is also required. The Department may request additional medical documentation depending on the complexity of the case.",
  },
  {
    question: "Does the subclass 602 give work rights?",
    answer: "No. The Medical Treatment visa (subclass 602) does not generally grant work rights. The visa is for medical treatment, consultation, or supporting a patient. If a carer accompanying a patient wishes to work in Australia, they would need an appropriate work visa — the 602 alone does not authorise employment.",
  },
  {
    question: "Can I access Medicare on a subclass 602?",
    answer: "Medicare access for subclass 602 holders depends on whether their country of origin has a reciprocal healthcare agreement with Australia. Australia has reciprocal arrangements with a number of countries including the UK, New Zealand, Ireland, Italy, Belgium, Malta, Norway, Sweden, Finland, the Netherlands, and Slovenia. Citizens of these countries may be able to access some Medicare services. However, elective procedures and specialist treatments sought specifically as the purpose of the visa are generally not covered by Medicare even under reciprocal arrangements. All applicants should ensure they have appropriate health insurance or private treatment arrangements and the financial means to cover costs. Confirm current arrangements on the Services Australia and Department of Home Affairs websites.",
  },
  {
    question: "Can the subclass 602 be used for surrogacy-related travel?",
    answer: "No. The Medical Treatment visa (subclass 602) cannot be used for travel to Australia related to surrogacy birth arrangements. This includes situations where an overseas citizen travels to Australia to act as a surrogate, or where a person travels to Australia to undergo surrogacy-related medical procedures. Surrogacy-related applications are assessed under different provisions and are subject to separate policy. If surrogacy arrangements are involved, specialist legal and migration advice is essential.",
  },
  {
    question: "What if I need to extend my stay because treatment is taking longer than expected?",
    answer: "Extensions of the subclass 602 are available where treatment is genuinely ongoing. To apply for an extension, you will need a further letter from your treating provider confirming the ongoing need for treatment and the expected additional duration. The extension application must be lodged before the current visa expires. If the current visa expires before an extension is lodged, the applicant will be unlawful and should seek urgent advice from a registered migration agent.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Visitor Visa (600)',
    desc: 'Universal visitor visa — tourist, sponsored family, business visitor and frequent traveller streams.',
    icon: 'plane',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare eVisitor, ETA, and subclass 600 — find the right option for your purpose.',
    icon: 'home',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Visa Refusal and Review',
    desc: 'Options after a visa refusal — ART review, s48 bar, Ministerial Intervention.',
    icon: 'scale',
    page: 'visa-refusal-review',
    color: ACCENT,
  },
  {
    title: 'Health Requirement Waivers',
    desc: 'When a failed health assessment can be waived — PIC 4005 vs PIC 4007.',
    icon: 'heart',
    page: 'health-waiver',
    color: ACCENT,
  },
]

export default function MedicalTreatment602Page({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['medical-treatment-602'].title
  }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visitor & Other Visas', url: 'https://www.nanakmigration.com.au/visitor-visas' },
          { name: 'Medical Treatment Visa (602)', url: 'https://www.nanakmigration.com.au/medical-treatment-602' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Medical Treatment Visa Subclass 602',
          description: PAGE_META['medical-treatment-602'].metaDescription,
          url: 'https://www.nanakmigration.com.au/medical-treatment-602',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'Medical Treatment Visa (602)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Subclass 602"
        title={<>Medical Treatment Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 602</em></>}
        deck="A temporary visa for people travelling to Australia for medical treatment or consultations, organ donation, or to support a patient who cannot travel alone — and for people who cannot depart Australia for medical reasons."
        shortAnswer={<>The subclass 602 Medical Treatment visa is for <strong style={{ color: NAVY }}>patients seeking treatment in Australia</strong>, supporting carers, and organ donors. Applicants must have <strong style={{ color: NAVY }}>confirmed arrangements with an Australian medical provider</strong> and demonstrate the ability to pay for treatment and living costs. Duration is determined by the length of treatment — extensions are available if needed. <strong style={{ color: NAVY }}>No work rights</strong> are generally granted. Medicare access depends on reciprocal health arrangements between Australia and the applicant's country. <strong style={{ color: NAVY }}>Cannot be used for surrogacy-related arrangements.</strong> Nanak Migration Group (MARN 2619467) can assist with complex applications. Confirm all current requirements on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor & Other', page: 'visitor-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: `1px solid ${BORDER}`, borderBottom: `1px solid ${BORDER}`, background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a key={sec.id} href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = ACCENT; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}
            >{sec.label}</a>
          ))}
        </div>
      </div>

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Purpose and scope" title="What the Medical Treatment Visa Covers" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The subclass 602 provides a lawful basis to be in Australia for medical purposes — whether the applicant is travelling from overseas for treatment, is a carer supporting a patient, or is already in Australia and cannot safely depart due to a medical condition.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {[
              { icon: 'heart', title: 'Patients seeking treatment', body: "People travelling to Australia for surgery, specialist consultations, cancer treatment, dental procedures, organ donation, or other medical care — provided treatment arrangements with an Australian provider are in place." },
              { icon: 'user', title: 'Supporting carers', body: "A person accompanying a patient who cannot travel to or within Australia without assistance. The carer must demonstrate their relationship to the patient and that the patient genuinely requires support." },
              { icon: 'home', title: 'People unable to depart', body: "A person already in Australia who has a medical condition that makes departure medically inadvisable or impossible. Medical evidence from an Australian treating doctor is required." },
              { icon: 'shield', title: 'Organ donors', body: "People travelling to Australia to donate an organ to a recipient in Australia. Documentation from the treating hospital confirming the donation arrangements is required." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 22 }}>
                <div style={{ width: 42, height: 42, borderRadius: 11, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={19} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="The subclass 602 cannot be used for surrogacy-related travel">
            The Medical Treatment visa cannot be used for travel to Australia in connection with surrogacy birth arrangements — whether as a surrogate, intended parent, or for related medical procedures. Surrogacy-related situations require specialist legal and migration advice.
          </Callout>
        </div>
      </section>

      {/* ── WHO QUALIFIES ──────────────────────────────────────── */}
      <section id="who-qualifies" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Eligibility" title="Who Can Apply" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              { title: 'Confirmed medical treatment arrangements', body: "A letter from an Australian hospital, specialist, or registered medical practitioner confirming: (a) the nature of the treatment or consultation; (b) that arrangements are in place; and (c) the expected duration of the treatment. This is the primary eligibility requirement for patients." },
              { title: 'Financial capacity to pay', body: "The applicant must demonstrate they have the financial means to pay for all medical treatment costs, accommodation, and living expenses during their stay in Australia. Evidence includes bank statements, payment guarantees, or letters from overseas health insurers. Medicare generally does not cover treatment sought specifically as the purpose of the visa, unless reciprocal arrangements apply." },
              { title: 'Health and character requirements', body: "Applicants must meet Australian health and character requirements. Note that applicants with serious health conditions may still be granted the 602 where the purpose of the visa is to receive treatment for that condition — the standard health requirement assessment takes into account the purpose of travel." },
              { title: 'Genuine temporary entry intent', body: "As with all temporary visas, the applicant must demonstrate they intend to remain in Australia only for the duration of the permitted activities — in this case, for the duration of the medical treatment — and intend to depart when treatment is complete (or when the visa expires)." },
            ].map((req, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: '20px 24px' }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EVIDENCE ───────────────────────────────────────────── */}
      <section id="evidence" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Documentation" title="Key Evidence to Gather" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 32 }}>
            {[
              { icon: 'clipboard', title: 'Treatment letter', body: "Written confirmation from the Australian hospital, specialist clinic, or registered medical practitioner — describing the treatment, confirming arrangements, and stating the expected duration." },
              { icon: 'dollar', title: 'Financial evidence', body: "Bank statements, proof of payment arrangements, or overseas health insurance documentation demonstrating the ability to fund treatment and living costs for the full duration of the stay." },
              { icon: 'shield', title: 'Identity documents', body: "Valid passport (with at least 6 months remaining beyond the intended stay). Additional identity documents if requested by the Department." },
              { icon: 'heart', title: 'Medical history (where relevant)', body: "Relevant medical records, test results, or specialist referral letters supporting the need for treatment in Australia. This is particularly important for complex or specialist procedures." },
              { icon: 'user', title: 'Carer evidence (supporting applicants)', body: "If applying as a supporting carer: evidence of the relationship to the patient, and documentation showing the patient cannot travel alone and requires the carer's specific assistance." },
              { icon: 'home', title: 'Health insurance', body: "Overseas health insurance policy documents or confirmation of reciprocal healthcare arrangements between Australia and the applicant's home country, where applicable." },
            ].map(item => (
              <div key={item.title} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20 }}>
                <div style={{ width: 38, height: 38, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={17} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 5 }}>{item.title}</div>
                  <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current document requirements on the Department of Home Affairs website">
            Document requirements for the subclass 602 may vary depending on the nature of the treatment and the applicant's circumstances. Always confirm current requirements with the Department of Home Affairs before lodging.
          </Callout>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="note" panel={true} title="Confirm current government charges on the Department of Home Affairs website">
              The government charge for the subclass 602 Medical Treatment visa changes periodically. Confirm the current fee on the Department of Home Affairs website before lodging.
            </Callout>
          </div>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED ────────────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assistance with Medical Treatment visa applications"
        body="Complex treatment arrangements, onshore applications, or cases involving inability to depart all require careful preparation. Nanak Migration Group (MARN 2619467) can assist with the subclass 602 application and advise on any related visa questions."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
