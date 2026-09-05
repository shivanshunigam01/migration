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
  { id: 'eligibility', label: 'Eligible passports' },
  { id: 'vs-eta', label: 'eVisitor vs ETA' },
  { id: 'conditions', label: 'Conditions' },
  { id: 'how-to-apply', label: 'How to apply' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'dollar',
    value: 'Free',
    label: 'No government charge — the eVisitor is free to apply for',
    note: 'There is no government application fee for the subclass 651 eVisitor. This distinguishes it from the ETA (601) which carries a small service charge, and the Visitor visa (600) which carries a larger government charge.',
  },
  {
    icon: 'plane',
    value: 'Multiple entry',
    label: 'Multiple visits of up to 3 months each within 12 months',
    note: 'Each stay can be up to 3 months. The eVisitor allows multiple entries within a 12-month validity period. Confirm current conditions on the Department of Home Affairs website.',
  },
  {
    icon: 'home',
    value: 'European passports',
    label: 'For EU member state and other eligible European passport holders',
    note: 'The eVisitor is designed for citizens of European Union member states and several other European nations. Confirm the current eligibility list on the Department of Home Affairs website.',
  },
  {
    icon: 'briefcase',
    value: 'Visitor only',
    label: 'Tourism and business visitor activities only — no work',
    note: 'The eVisitor allows tourism and business visitor activities. It does not allow paid work in Australia. An appropriate work visa is required for employment.',
  },
]

const STEPS: TimelineStep[] = [
  {
    code: '01',
    title: 'Confirm your passport country is eligible',
    desc: "Check the Department of Home Affairs website to confirm that your passport nationality is on the current eVisitor eligibility list. The eVisitor is designed for European passport holders — EU member states plus several others. If your passport is not eligible, you may need the ETA (601) or the Visitor visa (600).",
  },
  {
    code: '02',
    title: 'Create or log in to your ImmiAccount',
    desc: "The eVisitor is applied for through the Department of Home Affairs ImmiAccount system at immi.homeaffairs.gov.au. Create a free ImmiAccount if you do not already have one.",
  },
  {
    code: '03',
    title: 'Complete the eVisitor application',
    desc: "Select the eVisitor (subclass 651) application within ImmiAccount and answer the required questions about your passport, health, character, and travel intentions. No documents are typically required for a standard application — but have your passport details ready.",
  },
  {
    code: '04',
    title: 'Submit the application',
    desc: "Submit the application online. There is no fee. Most straightforward applications are decided quickly — often within 24 hours. If the Department requires further information, they will contact you.",
  },
  {
    code: '05',
    title: 'Receive notification and travel',
    desc: "The eVisitor is electronically linked to your passport — there is no stamp or label. You will receive an email notification of the outcome. Check your visa status via VEVO (Visa Entitlement Verification Online) before travelling.",
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Which passport holders are eligible for the eVisitor?",
    answer: "The eVisitor (651) is available to citizens of European Union member states (including Germany, France, Italy, Spain, the Netherlands, Belgium, Austria, Sweden, Denmark, Finland, and others) and several other European nations including Iceland, Norway, Liechtenstein, and Switzerland. The UK remains on the eligible list following Brexit. The full current list is maintained on the Department of Home Affairs website — always confirm eligibility before applying as the list can change.",
  },
  {
    question: "How does the eVisitor differ from the ETA?",
    answer: "Both the eVisitor (651) and the Electronic Travel Authority (601) allow the same activities — tourism and business visitor purposes — and both permit stays of up to 3 months per visit within a 12-month validity period. The key differences are: (1) Cost — the eVisitor is free; the ETA carries a small service charge (~AUD 20). (2) Eligible passports — the eVisitor is for European passport holders; the ETA is for a different group of eligible countries (USA, Canada, Japan, South Korea, Singapore, and others). (3) Application channel — the eVisitor is applied for through ImmiAccount; the ETA is applied for through the Australian ETA app. If your passport country appears on both lists, confirm which is the correct product for your nationality on the Department of Home Affairs website.",
  },
  {
    question: "Can I work in Australia on the eVisitor?",
    answer: "No. The eVisitor (651) allows tourism and business visitor activities only. Business visitor activities means things like attending conferences, meetings, negotiations — not paid employment. Engaging in paid work on an eVisitor is a breach of visa conditions and can result in cancellation and future visa refusals. If you intend to work in Australia, you need an appropriate work visa.",
  },
  {
    question: "Can I extend my stay or apply for another visa from inside Australia?",
    answer: "The eVisitor cannot be extended within Australia beyond the 3-month per-visit maximum. If you want to stay longer, you would need to apply for a Visitor visa (subclass 600) from inside Australia before your eVisitor expires — but this is not straightforward. Many eVisitor grants include a No Further Stay condition (Condition 8503), which bars the holder from being granted another visitor visa from inside Australia without first obtaining a waiver. If you are inside Australia and want to stay longer, seek migration advice before your eVisitor expires.",
  },
  {
    question: "How long does it take to get an eVisitor?",
    answer: "Most straightforward eVisitor applications for eligible passport holders are decided within 24 hours — and many are processed much faster. Processing times are not guaranteed and can be longer if the application is flagged for manual review, or if the applicant has previous immigration history that requires further assessment. If you are planning to travel, apply at least a few days in advance of your departure to allow for any unexpected delays.",
  },
  {
    question: "What if my eVisitor application is refused?",
    answer: "If your eVisitor is refused, you can apply for a Visitor visa (subclass 600) as an alternative. The subclass 600 allows you to provide additional information to support your application. A prior eVisitor refusal will be taken into account in the 600 assessment. If there are factors in your circumstances that may raise concerns — previous refusals for any country, previous overstays, or other adverse immigration history — seek advice from a registered migration agent before applying for any further visa.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Visitor Visas Hub',
    desc: 'Compare eVisitor, ETA, and subclass 600 — choose the right option for your passport.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Visitor Visa (600)',
    desc: 'Universal visitor visa — for any passport, all streams, stays up to 12 months.',
    icon: 'dollar',
    page: 'visitor-visa-600',
    color: ACCENT,
  },
  {
    title: 'ETA (601)',
    desc: 'Small service charge entry authority for eligible passport holders via the Australian ETA app.',
    icon: 'plane',
    page: 'eta-601',
    color: ACCENT,
  },
  {
    title: 'No Further Stay (8503)',
    desc: 'Condition 8503 on your visitor visa — what it means and how waivers work.',
    icon: 'shield',
    page: 'no-further-stay-8503',
    color: ACCENT,
  },
]

const COMPARE_ROWS = [
  { aspect: 'Government charge', evisitor: 'Free', eta: '~AUD 20 service charge' },
  { aspect: 'Eligible passports', evisitor: 'EU member states and eligible European nations', eta: 'USA, Canada, Japan, South Korea, Singapore, HK, Brunei, Malaysia, and others' },
  { aspect: 'Application channel', evisitor: 'ImmiAccount (online)', eta: 'Australian ETA app' },
  { aspect: 'Stay per visit', evisitor: 'Up to 3 months', eta: 'Up to 3 months' },
  { aspect: 'Validity', evisitor: '12 months from grant (multiple entry)', eta: '12 months from grant (multiple entry)' },
  { aspect: 'Permitted activities', evisitor: 'Tourism and business visitor', eta: 'Tourism and business visitor' },
  { aspect: 'Work rights', evisitor: 'None', eta: 'None' },
  { aspect: 'Processing', evisitor: 'Often within 24 hours', eta: 'Often within minutes' },
]

export default function Evisitor651Page({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Visitor Visas', url: 'https://www.nanakmigration.com.au/visitor-visas' },
          { name: 'eVisitor (651)', url: 'https://www.nanakmigration.com.au/evisitor-651' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'eVisitor Subclass 651',
          description: PAGE_META['evisitor-651'].metaDescription,
          url: 'https://www.nanakmigration.com.au/evisitor-651',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other', page: 'visitor-visas' },
          { label: 'eVisitor (651)' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Subclass 651"
        title={<>eVisitor<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 651</em></>}
        deck="A free, electronic entry authority for eligible European passport holders — allowing multiple 3-month visits to Australia over a 12-month period for tourism and business visitor purposes."
        shortAnswer={<>The eVisitor (subclass 651) is a <strong style={{ color: NAVY }}>free</strong> entry authority for citizens of <strong style={{ color: NAVY }}>European Union member states and other eligible European nations</strong>. Applied online through ImmiAccount. Allows <strong style={{ color: NAVY }}>multiple visits of up to 3 months each</strong> within 12 months. Tourism and business visitor activities only — <strong style={{ color: NAVY }}>no work permitted.</strong> Cannot be extended from inside Australia — longer stays require the Visitor visa (600). If you have a US, Canadian, Japanese or other non-European eligible passport, see the ETA (601) page instead. Nanak Migration Group (MARN 2619467) can assist with complex visitor visa situations. Confirm all current details on the Department of Home Affairs website.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor Visas', page: 'visitor-visas' }}
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
          <SectionHeading kicker="What it provides" title="What the eVisitor (651) Provides" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 24 }}>
            The eVisitor is a digital entry authorisation electronically linked to the holder's passport — there is no paper label or stamp. It is free to apply for and is processed through ImmiAccount. For most eligible applicants, decisions are fast — often within 24 hours.
          </p>
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            Once granted, the eVisitor allows the holder to enter Australia multiple times within 12 months, staying up to 3 months per visit. It covers tourism and legitimate business visitor activities — attending conferences, business meetings, and negotiations. It does not allow paid work.
          </p>
          <Callout variant="note" panel={true} title="The eVisitor is for European passport holders — US/Canadian/Japanese/other passport holders should check the ETA (601)">
            The eVisitor and the ETA serve different passport groups. European passport holders typically use the eVisitor; US, Canadian, Japanese, South Korean, and other specified passport holders typically use the ETA. Check the Department of Home Affairs website to confirm which product applies to your nationality.
          </Callout>
        </div>
      </section>

      {/* ── ELIGIBLE PASSPORTS ─────────────────────────────────── */}
      <section id="eligibility" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Passport eligibility" title="Which Passports Are Eligible" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            The eVisitor is available to citizens of EU member states and a number of other European nations. The list below is indicative — always confirm the current complete list on the Department of Home Affairs website before applying.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 12, marginBottom: 32 }}>
            {[
              'Germany', 'France', 'Italy', 'Spain',
              'Netherlands', 'Belgium', 'Austria', 'Sweden',
              'Denmark', 'Finland', 'Ireland', 'Portugal',
              'Greece', 'Poland', 'Czech Republic', 'Hungary',
              'Romania', 'Bulgaria', 'Croatia', 'Slovakia',
              'United Kingdom', 'Iceland', 'Norway', 'Switzerland',
            ].map(country => (
              <div key={country} style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 8, padding: '10px 14px', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon name="check" size={8} color={ACCENT} />
                </div>
                <span style={{ fontSize: 13, color: NAVY, fontWeight: 500 }}>{country}</span>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm the current eligibility list on the Department of Home Affairs website">
            The eVisitor eligibility list is maintained by the Department of Home Affairs and may be updated. Always confirm your passport country is currently eligible before applying.
          </Callout>
        </div>
      </section>

      {/* ── eVISITOR vs ETA ────────────────────────────────────── */}
      <section id="vs-eta" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Comparison" title="eVisitor (651) vs ETA (601)" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 28 }}>
            Both the eVisitor and the ETA provide the same basic visitor entitlement. The main differences are cost, eligible passport groups, and the application channel.
          </p>

          <div style={{ overflowX: 'auto' as const, borderRadius: 12, border: `1px solid ${BORDER}`, marginBottom: 32 }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' as const, fontSize: 13 }}>
              <thead>
                <tr style={{ background: NAVY }}>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600 }}>Aspect</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600 }}>eVisitor (651)</th>
                  <th style={{ padding: '12px 16px', textAlign: 'left' as const, color: '#fff', fontWeight: 600 }}>ETA (601)</th>
                </tr>
              </thead>
              <tbody>
                {COMPARE_ROWS.map((row, i) => (
                  <tr key={row.aspect} style={{ background: i % 2 === 0 ? '#fff' : '#f8fafd' }}>
                    <td style={{ padding: '12px 16px', fontWeight: 600, color: NAVY, borderBottom: `1px solid ${BORDER}` }}>{row.aspect}</td>
                    <td style={{ padding: '12px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}` }}>{row.evisitor}</td>
                    <td style={{ padding: '12px 16px', color: '#374151', borderBottom: `1px solid ${BORDER}` }}>{row.eta}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CONDITIONS ─────────────────────────────────────────── */}
      <section id="conditions" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="What to know" title="Key Conditions" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 14, marginBottom: 32 }}>
            {[
              { title: 'Maximum stay per visit', body: 'Up to 3 months from the date of each entry. This cannot be extended from inside Australia.' },
              { title: 'No Further Stay condition', body: 'Many eVisitor grants include a No Further Stay condition (Condition 8503). This means the holder cannot apply for most visas from inside Australia. If you want to stay longer than 3 months, you need to apply for a Visitor visa (600) from outside Australia, or apply for a waiver of Condition 8503 from inside Australia — which is only granted in compelling and compassionate circumstances.' },
              { title: 'No work', body: 'Paid work in Australia is not permitted on the eVisitor. Short-term unpaid volunteering may be permitted in some circumstances — seek advice if this is relevant.' },
              { title: 'Short-term study', body: 'Study of up to 3 months is permitted. Longer courses require a Student visa.' },
            ].map((item, i) => (
              <div key={i} style={{ borderLeft: `3px solid ${ACCENT}`, background: '#ffffff', borderRadius: '0 8px 8px 0', padding: '16px 20px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.title}</div>
                <div style={{ fontSize: 13, color: '#374151', lineHeight: 1.7 }}>{item.body}</div>
              </div>
            ))}
          </div>

          <Callout variant="note" panel={true} title="Confirm current conditions on the Department of Home Affairs website">
            eVisitor conditions are set at the time of grant. Always check your grant notice and verify conditions via VEVO before travelling.
          </Callout>
        </div>
      </section>

      {/* ── HOW TO APPLY ───────────────────────────────────────── */}
      <section id="how-to-apply" style={{ background: '#ffffff', padding: '80px 32px', borderTop: `1px solid #e8edf5` }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="How to Apply" accent={ACCENT} />
          <StepTimeline steps={STEPS} variant="flow" accent={ACCENT} />
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: `1px solid #eef0f6` }}>
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
        title="Need help with a visitor visa or a refused eVisitor?"
        body="If your eVisitor has been refused, or if you need a more complex visitor visa — sponsored family, longer stay, or a history of prior refusals — Nanak Migration Group (MARN 2619467) can advise on the right approach."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
