import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
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

const ACCENT = CAT_PARTNER

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'eligibility', label: 'Eligibility' },
  { id: 'care-need', label: 'The care need' },
  { id: 'medical-assessment', label: 'Medical assessment' },
  { id: 'sponsor', label: 'Sponsor & relative' },
  { id: 'process', label: 'Process' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'shield',
    value: 'Permanent',
    label: 'Carer visa grants permanent residence with full work rights',
    note: 'Both subclass 116 (offshore) and subclass 836 (onshore) are permanent visas. The holder has the right to live, work, and access Medicare in Australia indefinitely on grant.',
  },
  {
    icon: 'user',
    value: '116 / 836',
    label: 'Offshore subclass 116 and onshore subclass 836',
    note: "Subclass 116 is for applicants outside Australia at the time of grant. Subclass 836 is for applicants already in Australia. The care requirement and family link are the same for both.",
  },
  {
    icon: 'clipboard',
    value: 'Medical cert.',
    label: 'Departmental medical assessment required to certify the care need',
    note: "The Department of Home Affairs arranges a medical assessment of the Australian relative to certify that they have a long-term medical condition requiring substantial ongoing care that cannot reasonably be obtained from other sources.",
  },
  {
    icon: 'calendar',
    value: 'Multi-year',
    label: 'Processing times are multi-year — confirm current times on DoHA',
    note: 'Processing times for the Carer visa vary and have generally been multi-year. Confirm current processing time estimates on the Department of Home Affairs website before lodging.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm the care need and the family relationship',
    desc: "Check that the Australian relative has a long-term or permanent medical condition that genuinely requires substantial, ongoing personal care — and that the care cannot reasonably be provided by Australian family members already in the country or by Australian community services.",
  },
  {
    code: '02',
    title: 'Sponsor registration',
    desc: 'The Australian relative (or another eligible sponsor) registers with the Department of Home Affairs as the sponsor for the Carer visa application. The sponsor must be an Australian citizen, permanent resident, or eligible New Zealand citizen.',
  },
  {
    code: '03',
    title: 'Departmental medical assessment of the relative',
    desc: "The Department arranges for a medical assessment of the Australian relative's condition. This assessment — separate from the applicant's own health examination — determines whether the care need criterion is met. The assessing officer is appointed by the Department.",
  },
  {
    code: '04',
    title: 'Visa application',
    desc: 'The carer lodges the visa application (subclass 116 if offshore, 836 if onshore), pays the government charge, and submits supporting documents: identity documents, evidence of the family relationship, the medical assessment outcome, and the care plan.',
  },
  {
    code: '05',
    title: 'Applicant health and character checks',
    desc: "The applicant (carer) must also undergo their own medical examination at a Department-approved panel physician and provide police clearances. These are standard health and character requirements applied to all visa applicants.",
  },
  {
    code: '06',
    title: 'Decision and grant',
    desc: 'The Department considers all evidence and makes a decision. If granted, the subclass 116 is granted as a permanent visa; subclass 836 is granted allowing the holder to remain in Australia permanently with full work rights and access to Medicare.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Who qualifies as the Australian relative needing care?",
    answer: "The Australian relative who needs care must be an Australian citizen, Australian permanent resident, or eligible New Zealand citizen, and must be a relative of the visa applicant. The definition of 'relative' for Carer visa purposes is broadly defined and includes a parent, child, step-parent, step-child, adopted child (who is an adult), sibling, step-sibling, grandparent, grandchild, spouse's parent, spouse's grandparent, and certain other defined relatives. The key requirements are the medical condition and the care need — not just the family relationship in isolation.",
  },
  {
    question: "What counts as a 'long-term medical condition' for the Carer visa?",
    answer: "The condition must be of a long-term or permanent nature and must result in the relative being unable to perform normal activities of daily life without substantial ongoing assistance. Examples may include severe physical disability, advanced age combined with significant health limitations, chronic illness requiring ongoing personal care, or neurological conditions. The Department's medical assessment process is the mechanism that determines whether the condition meets the required threshold — it is not sufficient for the relative's own doctor to certify the need alone.",
  },
  {
    question: "What does 'substantial ongoing care' mean?",
    answer: "The care must be substantial in nature — the requirement is not met by occasional or minor assistance. The carer must be willing and able to provide regular, ongoing, hands-on personal care. The Department assesses whether the level of care needed genuinely requires a dedicated carer to move to Australia to provide it.",
  },
  {
    question: "What if the care need can be met by Australian services or other relatives?",
    answer: "This is one of the central criteria of the Carer visa: the care cannot reasonably be provided by existing Australian community services or by other Australian relatives of the person requiring care. If the relative already has access to aged care facilities, home care services, or another family member in Australia who could provide the care, the application may not succeed. The evidence presented must demonstrate why Australian services and other family members cannot adequately meet the care need.",
  },
  {
    question: "Can my family members be included in my Carer visa application?",
    answer: "Yes. A spouse or de facto partner and dependent children can be included in the Carer visa application as secondary applicants, provided they also meet health and character requirements. Secondary applicants are granted the same visa subclass and have the same rights as the primary applicant on grant. Including family members does not affect the assessment of the care need — it is assessed on the primary applicant's ability and willingness to provide care.",
  },
  {
    question: "Does the Carer visa require an Assurance of Support?",
    answer: "The Carer visa does not generally require a mandatory Assurance of Support. However, the Department may request one at its discretion in some circumstances. Unlike permanent parent visas where an AoS is always mandatory, the Carer visa is not listed as requiring an automatic AoS. Confirm the current AoS requirements for the Carer visa with the Department of Home Affairs or with Nanak Migration Group (MARN 2619467) as part of your eligibility assessment.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Partner & Family Visas',
    desc: 'Overview of all partner, parent, child, carer and relative visa pathways.',
    icon: 'heart',
    page: 'partner-family-visas',
    color: ACCENT,
  },
  {
    title: 'Assurance of Support',
    desc: 'How the AoS income test and bond work — amounts and periods by visa type.',
    icon: 'building',
    page: 'assurance-of-support',
    color: ACCENT,
  },
  {
    title: 'Partner Visa Evidence Guide',
    desc: 'Evidence principles that apply across family visa categories.',
    icon: 'clipboard',
    page: 'partner-visa-evidence',
    color: ACCENT,
  },
]

export default function CarerVisaPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Carer Visa (116 & 836)', url: 'https://www.nanakmigration.com.au/carer-visa' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Carer Visa Subclass 116 and 836',
          description: PAGE_META['carer-visa'].metaDescription,
          url: 'https://www.nanakmigration.com.au/carer-visa',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Carer Visa (116 & 836)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Partner & Family Visas"
        eyebrowSub="Subclasses 116 & 836"
        title={<>Carer Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclasses 116 (Offshore) & 836 (Onshore)</em></>}
        deck="The Carer visa is for a person willing and able to provide substantial ongoing care to an Australian relative with a long-term or permanent medical condition. It is a permanent visa with full work rights. The care need must be certified through the Department of Home Affairs' medical assessment process — and the Department must be satisfied that the care cannot reasonably be provided by Australian services or other Australian relatives."
        shortAnswer={<>The Carer visa (subclass 116 if outside Australia, 836 if already in Australia) grants <strong style={{ color: NAVY }}>permanent residence with full work rights</strong> to a person who will provide substantial care to an Australian relative with a long-term medical condition. The <strong style={{ color: NAVY }}>care need must be certified through a departmental medical assessment</strong> — the relative's own doctor is not sufficient on its own. The Department must also be satisfied that the required care <strong style={{ color: NAVY }}>cannot reasonably be provided by other Australian relatives or Australian community services</strong>. Processing times for the Carer visa are currently multi-year — confirm current estimates on the Department of Home Affairs website. Nanak Migration Group (MARN 2619467) can assess whether the care need criterion is likely to be met in your family's situation before you commit to an application.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Partner & Family', page: 'partner-family-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <ReviewedBy />
        </div>
      </section>

      {/* Sticky jump bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
        <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 32px', display: 'flex', gap: 4, overflowX: 'auto', scrollbarWidth: 'none' as const }}>
          {TOC.map(sec => (
            <a
              key={sec.id}
              href={`#${sec.id}`}
              style={{ display: 'inline-block', padding: '12px 14px', fontSize: 13, fontWeight: 500, color: '#6b7280', textDecoration: 'none', whiteSpace: 'nowrap' as const, borderBottom: '2px solid transparent', transition: 'color 0.15s, border-color 0.15s' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = ACCENT
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = ACCENT
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#6b7280'
                ;(e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'
              }}
            >
              {sec.label}
            </a>
          ))}
        </div>
      </div>

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What it provides" title="What the Carer Visa Grants" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            Both the subclass 116 and subclass 836 are permanent visas. On grant, the holder has an indefinite right to live in Australia, work without restriction, and access Medicare. The visa also provides a 5-year travel facility and places the holder on the pathway to Australian citizenship after 4 years of lawful residence (including 12 months as a permanent resident).
          </p>

          <div style={{ display: 'flex', gap: 24, marginBottom: 48, flexWrap: 'wrap' as const }}>
            {[
              { icon: 'shield', title: 'Permanent residence', body: 'Indefinite right to live in Australia with full work rights and access to Medicare from the date of grant.' },
              { icon: 'home', title: 'Onshore or offshore', body: 'Subclass 836 is for applicants already in Australia; subclass 116 is for applicants outside Australia at the time of grant. The eligibility criteria are the same.' },
              { icon: 'arrowright', title: 'Family members included', body: 'A spouse or de facto partner and dependent children can be included in the same application as secondary applicants.' },
            ].map(item => (
              <div key={item.title} style={{ flex: 1, minWidth: 220, display: 'flex', gap: 16, alignItems: 'flex-start', background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name={item.icon as any} size={20} color={ACCENT} />
                </div>
                <div>
                  <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 16, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                  <p style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.65, margin: 0 }}>{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ELIGIBILITY ────────────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who can apply" title="Eligibility Requirements" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The Carer visa has four core requirements. All must be satisfied — the Department assesses each of them on the evidence provided.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                num: '1',
                title: 'A relative in Australia needs substantial care',
                body: "The visa applicant must have an Australian relative (citizen, permanent resident, or eligible NZ citizen) who has a long-term or permanent medical condition that genuinely requires substantial ongoing personal care. The condition must significantly limit the relative's ability to perform normal activities of daily life.",
              },
              {
                num: '2',
                title: 'Care cannot be provided by existing Australian sources',
                body: "The required care must not be reasonably available from other Australian family members already living in Australia, and must not be adequately available from Australian community services or care facilities. If existing services or other relatives can provide equivalent care, the criterion is not met.",
              },
              {
                num: '3',
                title: 'The applicant is willing and able to provide the care',
                body: "The applicant (the proposed carer) must be willing and able to move to Australia and provide the required care. The Department may consider the applicant's qualifications, experience, or personal relationship with the relative in assessing this requirement.",
              },
              {
                num: '4',
                title: 'Health and character requirements',
                body: "All applicants — primary and secondary — must meet standard Australian health requirements (medical examination at a Department-approved panel physician) and character requirements (police clearances from each country lived in for 12 months or more in the past 10 years).",
              },
            ].map(req => (
              <div key={req.num} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: 20 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{req.num}. {req.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{req.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CARE NEED ──────────────────────────────────────────── */}
      <section id="care-need" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Central criterion" title="Demonstrating the Care Need" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The care need is the central and most carefully assessed criterion of the Carer visa. Evidence must demonstrate both the nature of the medical condition and the level of ongoing care it requires.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>Types of evidence</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Medical reports from the relative\'s treating specialist(s)',
                  'Hospital discharge summaries and treatment history',
                  'Occupational therapy or nursing assessments of daily living needs',
                  'Evidence of existing care arrangements and their limitations',
                  'Letters from Australian family members explaining why they cannot provide the care',
                  'Information about available Australian services and why they are insufficient',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fafbfe', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>Common pitfalls</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Relying only on the relative\'s GP without specialist evidence — the care need must be clearly established',
                  'Not addressing why Australian services cannot provide the required care',
                  'Not addressing why Australian family members already in the country cannot provide the care',
                  'Overstating the care need without supporting documentation',
                  'Failing to explain what specific care the applicant will provide and how it meets the need',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', background: '#fee2e2', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="minus" size={10} color="#dc2626" />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Strong evidence of the care need is the most important part of a Carer visa application">
            The Carer visa is assessed on the facts of the particular family situation — there is no fixed list of qualifying conditions. The quality and specificity of the medical evidence about the relative's condition and the evidence addressing why Australian alternatives are insufficient are the factors most likely to determine the outcome.
          </Callout>
        </div>
      </section>

      {/* ── MEDICAL ASSESSMENT ─────────────────────────────────── */}
      <section id="medical-assessment" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Departmental process" title="The Departmental Medical Assessment" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The Carer visa involves a separate medical assessment process for the Australian relative — this is distinct from the standard health examination that the visa applicant must undergo.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {[
              {
                title: 'Who is assessed',
                body: "It is the Australian relative (the person needing care) who undergoes the Departmental medical assessment — not the visa applicant (the carer). The assessment is of the relative's medical condition and care needs.",
              },
              {
                title: 'Who conducts the assessment',
                body: "The Department of Home Affairs appoints a medical officer to assess the relative's condition and care needs. This is a separate process from the standard panel physician health examination. The outcome of this assessment determines whether the care need criterion is satisfied for the visa application.",
              },
              {
                title: 'What the assessment considers',
                body: "The assessment considers the nature and severity of the medical condition, the level of ongoing care required, and whether the care need can reasonably be provided by Australian community services or other Australian relatives. The medical officer may request additional evidence or specialist reports.",
              },
              {
                title: 'The applicant still needs a health examination',
                body: "The visa applicant (carer) must also undergo their own standard health examination at a Department-approved panel physician. This is in addition to the relative's care-need assessment — both are required as part of the application process.",
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#ffffff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
                <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{item.title}</h3>
                <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPONSOR ────────────────────────────────────────────── */}
      <section id="sponsor" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Definitions" title="Sponsor and Relative Requirements" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 12px 12px 0', padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>The sponsor</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 12 }}>The sponsor for a Carer visa application is typically the Australian relative who needs the care — though in some circumstances another eligible Australian relative may act as sponsor. The sponsor must be:</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                {[
                  'An Australian citizen, permanent resident, or eligible New Zealand citizen',
                  'Settled in Australia',
                  'Willing and capable of sponsoring the applicant',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 18, height: 18, borderRadius: '50%', background: `${ACCENT}14`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                      <Icon name="check" size={10} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.6 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 12px 12px 0', padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>The relative in Australia</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 12 }}>The Australian relative whose care need supports the visa application is broadly defined. Eligible relationships include:</p>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 6, fontSize: 13, color: '#374151', lineHeight: 1.6 }}>
                {['Parent or step-parent', 'Child or step-child (adult)', 'Sibling or step-sibling', 'Grandparent or grandchild', "Spouse's parent or grandparent", 'Other close relative as defined in the legislation'].map((rel, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8 }}>
                    <span style={{ color: ACCENT, fontWeight: 700 }}>·</span>
                    <span>{rel}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section id="process" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="How to apply" title="The Application Process" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Common questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* ── RELATED PAGES ──────────────────────────────────────── */}
      <section id="related" style={{ background: '#fafbfe', padding: '80px 32px', borderTop: '1px solid #eef0f6' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also on this site" title="Related pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Assess your Carer visa eligibility"
        body="The care need criterion is the most critical — and most carefully scrutinised — part of a Carer visa application. Nanak Migration Group (MARN 2619467) can review your family's circumstances and advise whether the evidence is likely to satisfy the Department's requirements."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
