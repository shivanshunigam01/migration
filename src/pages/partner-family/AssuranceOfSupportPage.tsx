import React from 'react'
import { GOLD, NAVY, CAT_PARTNER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs, PageHero, KeyFactsStrip, SectionHeading,
  FaqAccordion, RelatedPages, CtaBand, ComplianceDisclaimer, Callout,
} from '@/components/page'
import type { KeyFact, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const ACCENT = CAT_PARTNER

const TOC = [
  { id: 'overview', label: 'What is AoS?' },
  { id: 'when-required', label: 'When required' },
  { id: 'components', label: 'Income test & bond' },
  { id: 'assurer', label: 'Who can be an assurer' },
  { id: 'amounts', label: 'Bond amounts by visa type' },
  { id: 'end-of-period', label: 'Bond refund' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  {
    icon: 'building',
    value: 'Services Australia',
    label: 'Assurance of Support is administered by Services Australia',
    note: "Services Australia (formerly the Department of Human Services) assesses the assurer's income, approves the AoS, and holds the bond for the duration of the AoS period.",
  },
  {
    icon: 'shield',
    value: 'All parent visas',
    label: 'Mandatory for all permanent parent visa subclasses',
    note: 'An Assurance of Support is required for subclasses 103, 143, 173 (leading to 143), 804, and 864. It is not required for the subclass 870 Sponsored Parent (Temporary) visa.',
  },
  {
    icon: 'dollar',
    value: '~$10,000 / ~$4,000',
    label: 'Contributory parent AoS bond — main applicant / second adult (indicative)',
    note: 'For contributory parent visas (143, 173, 864), the AoS period is 10 years. Bond amounts are approximately $10,000 for the main applicant and $4,000 for a second adult — confirm current amounts on the Services Australia website.',
  },
  {
    icon: 'calendar',
    value: '10 or 2 years',
    label: 'AoS period: 10 years for contributory parent visas, 2 years for non-contributory',
    note: 'The length of the AoS commitment differs by visa type. Contributory parent visas carry a 10-year AoS; non-contributory parent visas generally carry a shorter period. Confirm current periods on DoHA.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: "Who can be an assurer?",
    answer: "An assurer must be an Australian citizen, Australian permanent resident, or eligible New Zealand citizen who is at least 18 years old and living in Australia. Commonly the assurer is the sponsoring child — the Australian child of the visa applicant — but it does not have to be. Another relative or eligible person can act as assurer if they meet the income requirements. The assurer must demonstrate they have sufficient income to support both themselves and the visa holder(s) for the duration of the AoS period.",
  },
  {
    question: "Can there be more than one assurer (joint assurers)?",
    answer: "Yes. Joint assurers are permitted. If no single person meets the income test on their own, two eligible people may apply as joint assurers. Joint assurers each bear equal responsibility for the AoS undertaking, and their incomes can be combined to meet the income test. Both joint assurers must be Australian citizens, permanent residents, or eligible New Zealand citizens living in Australia. Using joint assurers can make the AoS achievable for families where no single person earns enough to qualify alone.",
  },
  {
    question: "What if the assurer's circumstances change during the AoS period?",
    answer: "An Assurance of Support is a legally binding undertaking that runs for the full AoS period (10 years for contributory parent visas, generally 2 years for non-contributory). The assurer's obligations do not automatically end if their circumstances change — for example, if they lose their job, get divorced, or leave Australia. Services Australia can take action to recover from the assurer any recoverable welfare payments made to the visa holder during the AoS period, regardless of the assurer's current financial situation. Families should consider carefully whether the assurer is likely to be in a position to honour the undertaking for the full period before committing.",
  },
  {
    question: "When is the bond refunded?",
    answer: "The bond is refunded at the end of the AoS period — if no recoverable welfare payments were made to the visa holder during the AoS period, the full bond (with interest) is returned. If recoverable payments were made, those amounts are deducted from the bond before it is returned. Interest is paid on the bond for the period it is held by Services Australia, partially offsetting the cost of the commitment. Families should confirm the current interest rate and refund process with Services Australia.",
  },
  {
    question: "What welfare payments are recoverable under an AoS?",
    answer: "Only certain specified payments made to the visa holder are recoverable from the assurer. These are generally means-tested income support payments such as Youth Allowance, Austudy, JobSeeker Payment, and similar income support payments. Not all forms of government assistance are recoverable — for example, Medicare access is generally not an AoS welfare payment. The list of recoverable payments is defined in legislation and can change. Confirm the current list of recoverable payments with Services Australia before committing to an AoS.",
  },
  {
    question: "Is the AoS assurer the same as the visa sponsor?",
    answer: "Not necessarily. The sponsoring child (who lodges Form 40 to sponsor the parent's visa) and the AoS assurer can be different people — though they are often the same person. The sponsor is the person who registers to sponsor the parent's visa application. The assurer is the person who undertakes the financial AoS commitment with Services Australia. It is possible for one sibling to act as sponsor and another (or a combination) to act as assurer, provided all eligibility requirements are met.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Parent Visas Hub',
    desc: 'All parent visa pathways — compare cost, queue, and permanence.',
    icon: 'user',
    page: 'parent-visas',
    color: ACCENT,
  },
  {
    title: 'Contributory Parent Visa (143)',
    desc: 'The most common permanent parent pathway — 10-year AoS and bond applies.',
    icon: 'dollar',
    page: 'contributory-parent-143',
    color: ACCENT,
  },
  {
    title: 'Parent Visa (103)',
    desc: 'Non-contributory permanent parent visa — lower charges, AoS required at grant.',
    icon: 'calendar',
    page: 'parent-visa-103',
    color: ACCENT,
  },
  {
    title: 'Balance of Family Test',
    desc: 'Whether your parent can pass the BoFT — worked examples.',
    icon: 'check',
    page: 'balance-of-family-test',
    color: ACCENT,
  },
]

export default function AssuranceOfSupportPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Partner & Family Visas', url: 'https://www.nanakmigration.com.au/partner-family-visas' },
          { name: 'Assurance of Support', url: 'https://www.nanakmigration.com.au/assurance-of-support' },
        ]}
        faqs={FAQ.map(f => ({ question: f.question, answer: f.answer as string }))}
        service={{
          name: 'Assurance of Support for Australian Parent Visas',
          description: PAGE_META['assurance-of-support'].metaDescription,
          url: 'https://www.nanakmigration.com.au/assurance-of-support',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Partner & Family', page: 'partner-family-visas' },
          { label: 'Assurance of Support' },
        ]}
      />
      <PageHero
        variant="support"
        eyebrow="Guides & Rules"
        eyebrowSub="Partner & Family · Parent Visas"
        title={<>Assurance of Support<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Income Test, Bond & AoS Period</em></>}
        deck="An Assurance of Support (AoS) is a legally binding financial undertaking lodged with Services Australia. The assurer — typically the sponsoring child — agrees to repay any recoverable welfare payments the visa holder receives during the AoS period. Understanding the income test, bond amounts, and the period of commitment is essential before applying for a parent visa."
        shortAnswer={<>An Assurance of Support is <strong style={{ color: NAVY }}>mandatory for all permanent parent visas</strong> (subclasses 103, 143, 173, 804 and 864). It is not required for the 870 Sponsored Parent (Temporary) visa. The AoS has two components: an <strong style={{ color: NAVY }}>income test</strong> (the assurer must demonstrate sufficient income) and a <strong style={{ color: NAVY }}>refundable bank bond</strong> lodged with Services Australia for the duration of the AoS period. For contributory parent visas, the AoS period is <strong style={{ color: NAVY }}>10 years</strong> and the bond is approximately <strong style={{ color: NAVY }}>$10,000 for the main applicant and $4,000 for a second adult</strong>. Non-contributory parent visas generally carry a shorter period and smaller bonds. The bond is refunded at the end of the period (with interest) if no recoverable payments are made. Confirm all current amounts on the Services Australia website. Nanak Migration Group (MARN 2619467) can assess AoS eligibility and the assurer requirements for your situation.</>}
        maraBadge={true}
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Parent Visas', page: 'parent-visas' }}
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
          <SectionHeading kicker="What it is" title="What is an Assurance of Support?" accent={ACCENT} />
          <p style={{ fontSize: 16, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            An Assurance of Support (AoS) is a legally binding undertaking given by an Australian citizen, permanent resident, or eligible New Zealand citizen (the "assurer") to the Australian Government. The assurer promises to repay to the Government any recoverable welfare payments made to the visa holder during the AoS period.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 40 }}>
            The AoS exists to reduce the risk that a migrant sponsored through the family stream places an undue burden on the Australian welfare system. It is not a general guarantee that the assurer will financially support the visa holder — it is specifically focused on certain listed government payments.
          </p>

          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' as const, marginBottom: 40 }}>
            {[
              { icon: 'building', title: 'Administered by Services Australia', body: 'The AoS process — income assessment, bond lodgement, and refund at the end of the period — is managed entirely by Services Australia (formerly the Department of Human Services).' },
              { icon: 'shield', title: 'Separate from the visa sponsor', body: "The assurer doesn't have to be the visa sponsor. They can be any eligible person who meets the income test — though in most cases the assurer is the sponsoring child." },
              { icon: 'dollar', title: 'Bond is refundable', body: 'The bond earns interest and is returned in full at the end of the AoS period if no recoverable welfare payments were made. It is not a fee — it is a security deposit.' },
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

      {/* ── WHEN REQUIRED ──────────────────────────────────────── */}
      <section id="when-required" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Mandatory vs discretionary" title="When is an AoS Required?" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {/* Mandatory */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ background: NAVY, padding: '16px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Mandatory</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>Always required</div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: 16 }}>An AoS is mandatory for all permanent parent visa subclasses:</p>
                <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
                  {[
                    { code: '103', label: 'Parent (non-contributory, offshore)' },
                    { code: '143', label: 'Contributory Parent (permanent, offshore)' },
                    { code: '173', label: 'Contributory Parent (temporary, offshore — leading to 143)' },
                    { code: '804', label: 'Aged Parent (non-contributory, onshore)' },
                    { code: '864', label: 'Contributory Aged Parent (permanent, onshore)' },
                  ].map(item => (
                    <div key={item.code} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                      <span style={{ fontSize: 11, fontWeight: 800, padding: '3px 9px', borderRadius: 100, background: NAVY, color: GOLD, whiteSpace: 'nowrap' as const, flexShrink: 0, marginTop: 1 }}>{item.code}</span>
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Discretionary / Not required */}
            <div style={{ border: '1px solid #e8edf6', borderRadius: 14, overflow: 'hidden' }}>
              <div style={{ background: '#64748b', padding: '16px 24px' }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(255,255,255,0.6)', letterSpacing: '0.08em', textTransform: 'uppercase' as const, marginBottom: 4 }}>Discretionary / not required</div>
                <div style={{ fontSize: 16, fontWeight: 700, color: '#fff' }}>May be requested</div>
              </div>
              <div style={{ padding: 24 }}>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, marginBottom: 16 }}>An AoS is not required for the subclass 870 Sponsored Parent (Temporary) visa. For some other visa subclasses, the Department of Home Affairs may request an AoS at its discretion if it has concerns about the applicant's access to welfare. This discretionary power applies to certain other family visa subclasses.</p>
                <div style={{ padding: '12px 16px', background: '#f8fafd', borderRadius: 8, fontSize: 13, color: '#374151' }}>
                  <strong>Subclass 870</strong> (Sponsored Parent Temporary) — No AoS required. The 870 requires health insurance instead.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COMPONENTS ─────────────────────────────────────────── */}
      <section id="components" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Two requirements" title="The Income Test and the Bond" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24, marginBottom: 32 }}>
            {/* Income test */}
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 12px 12px 0', padding: 28 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>1. Income test</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                Services Australia assesses whether the assurer has sufficient income to support both themselves and the visa holder(s). The income threshold is linked to the applicable income limit published by Services Australia and is updated periodically. The assurer must demonstrate their income through payslips, tax returns, or other acceptable evidence.
              </p>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                If one person cannot meet the income test alone, two people may apply as joint assurers — their incomes are combined. Both joint assurers must be eligible Australian citizens or permanent residents.
              </p>
            </div>

            {/* Bond */}
            <div style={{ borderLeft: `3px solid ${ACCENT}`, background: '#fafbfe', borderRadius: '0 12px 12px 0', padding: 28 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 20, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>2. Refundable bank bond</h3>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, marginBottom: 16 }}>
                The assurer must lodge a bond (a cash deposit) with Services Australia for the duration of the AoS period. This bond acts as security against recoverable welfare payments. The bond earns interest while it is held. At the end of the AoS period, if no recoverable payments were made to the visa holder, the full bond plus interest is returned to the assurer.
              </p>
              <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                If recoverable payments were made during the AoS period, the amount repaid by the visa holder (or deducted from the bond) equals those specific payments. The bond is not a fee — it is a security mechanism that is returned in full if no claim is made.
              </p>
            </div>
          </div>

          <Callout variant="note" panel={true} title="Confirm current income thresholds on the Services Australia website">
            The income threshold for the AoS income test is set by Services Australia and updated periodically. The figure current at August 2026 should be confirmed directly with Services Australia or via Nanak Migration Group (MARN 2619467) before committing.
          </Callout>
        </div>
      </section>

      {/* ── ASSURER ────────────────────────────────────────────── */}
      <section id="assurer" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Who qualifies" title="Who Can Be an Assurer?" accent={ACCENT} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
            <div style={{ background: '#ffffff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>Eligibility criteria</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  'Australian citizen, permanent resident, or eligible New Zealand citizen',
                  'At least 18 years of age',
                  'Living in Australia at the time of assessment',
                  'Meets the income threshold set by Services Australia',
                  'Able to lodge the required bond amount',
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
            <div style={{ background: '#ffffff', border: '1px solid #e8edf6', borderRadius: 12, padding: 24 }}>
              <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 16px' }}>Practical considerations</h3>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
                {[
                  { title: 'Sponsor vs assurer', body: "The AoS assurer and the visa sponsor can be different people — often siblings splitting responsibilities." },
                  { title: 'Joint assurers', body: "Two eligible people can apply together if neither meets the income threshold alone." },
                  { title: 'Long-term commitment', body: "For contributory parent visas, the assurer is committing to a 10-year obligation. Life circumstances will change — families should consider this carefully." },
                ].map(item => (
                  <div key={item.title} style={{ borderLeft: `2px solid ${ACCENT}40`, paddingLeft: 12 }}>
                    <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 3 }}>{item.title}</div>
                    <div style={{ fontSize: 13, color: '#4b5563', lineHeight: 1.55 }}>{item.body}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AMOUNTS BY VISA TYPE ───────────────────────────────── */}
      <section id="amounts" style={{ background: '#ffffff', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="By visa type" title="AoS Period and Bond Amounts" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, marginBottom: 32 }}>
            The AoS period and the bond amount differ depending on the visa subclass. Bond amounts are indexed and subject to change — always confirm current figures on the Services Australia website before committing.
          </p>

          <div style={{ borderRadius: 14, overflow: 'hidden', border: '1.5px solid #e2e8f0', boxShadow: '0 4px 24px rgba(27,43,94,0.07)', marginBottom: 24 }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr', background: NAVY, padding: '14px 20px', gap: 8 }}>
              {['Visa subclass', 'AoS period', 'Bond — main applicant (approx)', 'Bond — second adult (approx)'].map((h, i) => (
                <div key={h} style={{ fontSize: 11, fontWeight: 700, color: 'rgba(255,255,255,0.7)', textTransform: 'uppercase' as const, letterSpacing: '0.08em', lineHeight: 1.3, textAlign: i === 0 ? 'left' : 'center' as const }}>
                  {h}
                </div>
              ))}
            </div>
            {[
              { visa: '143 — Contributory Parent', period: '10 years', main: '~$10,000', second: '~$4,000', highlight: true },
              { visa: '173 — Contributory Parent (Temp)', period: '10 years (same as 143)', main: '~$10,000', second: '~$4,000', highlight: false },
              { visa: '864 — Contributory Aged Parent', period: '10 years', main: '~$10,000', second: '~$4,000', highlight: false },
              { visa: '103 — Parent (non-contributory)', period: 'Shorter period — confirm on SA', main: 'Confirm on SA', second: 'Confirm on SA', highlight: false },
              { visa: '804 — Aged Parent (non-contributory)', period: 'Shorter period — confirm on SA', main: 'Confirm on SA', second: 'Confirm on SA', highlight: false },
            ].map((row, i) => (
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr 1fr', padding: '13px 20px', gap: 8, alignItems: 'center', background: row.highlight ? `${ACCENT}06` : (i % 2 === 0 ? '#ffffff' : '#fafbfe'), borderTop: '1px solid #f0f2f7', borderLeft: row.highlight ? `3px solid ${ACCENT}` : '3px solid transparent' }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: NAVY }}>{row.visa}</div>
                <div style={{ fontSize: 12.5, color: '#4b5563', textAlign: 'center' as const }}>{row.period}</div>
                <div style={{ fontSize: 12.5, color: '#4b5563', textAlign: 'center' as const }}>{row.main}</div>
                <div style={{ fontSize: 12.5, color: '#4b5563', textAlign: 'center' as const }}>{row.second}</div>
              </div>
            ))}
          </div>

          <Callout variant="warning" panel={true} title="Confirm current bond amounts on the Services Australia website">
            Bond amounts are updated periodically and may differ from those shown above. Figures current at August 2026 are indicative only. Always confirm the current bond amount for the relevant visa subclass directly with Services Australia or through Nanak Migration Group (MARN 2619467) before lodging an AoS application.
          </Callout>
        </div>
      </section>

      {/* ── BOND REFUND ────────────────────────────────────────── */}
      <section id="end-of-period" style={{ background: '#f8fafd', padding: '80px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="At the end" title="Bond Refund and End of AoS Period" accent={ACCENT} />

          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16, marginBottom: 32 }}>
            {[
              {
                title: 'Bond returned with interest',
                body: 'At the end of the AoS period, if no recoverable welfare payments were made to the visa holder, Services Australia returns the full bond amount to the assurer, plus any interest that has accrued during the period. The interest rate is set by Services Australia.',
              },
              {
                title: 'Partial refund if recoverable payments were made',
                body: 'If recoverable payments were made during the AoS period, the amount of those payments is deducted from the bond before it is returned. In most cases, the visa holder (or the assurer) would have been asked to repay those payments during the AoS period — if they were repaid, the bond is returned in full.',
              },
              {
                title: 'What triggers the end of the AoS period',
                body: 'The AoS period runs from the date the visa is granted for the specified number of years (10 years for contributory parent visas). It does not end early if the visa holder leaves Australia permanently, becomes an Australian citizen, or passes away — families should confirm the specific rules for their circumstances with Services Australia.',
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
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Understand your AoS obligations before committing"
        body="Nanak Migration Group (MARN 2619467) explains the AoS income test, bond requirements, and 10-year commitment before families lodge a parent visa application."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
