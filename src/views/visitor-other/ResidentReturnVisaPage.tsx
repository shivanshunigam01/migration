import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
import { CAT_VISITOR } from '@/theme'
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

const CAT_VISITOR_LOCAL = CAT_VISITOR
const ACCENT = CAT_VISITOR_LOCAL

// ── Data ─────────────────────────────────────────────────────────────────────

const FACTS: KeyFact[] = [
  {
    icon: 'calendar',
    value: '5-year facility',
    label: 'RRV 155 — for PRs with 2 of the last 5 years in Australia',
    note: 'Grants a new 5-year travel facility. Requires at least 2 years of physical presence in Australia in the 5 years immediately before the application.',
  },
  {
    icon: 'calendar',
    value: '1-year facility',
    label: 'RRV 155 — for PRs with substantial ties to Australia',
    note: 'Grants a 1-year travel facility for those who cannot meet the 2-year residence test but have substantial business, cultural, employment or personal ties to Australia that are of benefit to the country.',
  },
  {
    icon: 'calendar',
    value: '3-month facility',
    label: 'RRV 157 — for compelling circumstances',
    note: 'For PRs who have been in Australia for at least 1 day in the last 5 years and have compelling reasons for their absence. Grants a 3-month return facility only.',
  },
  {
    icon: 'dollar',
    value: '~AUD 500',
    label: 'Approximate application charge',
    note: 'Per applicant. Figures current at August 2026 — confirm on DoHA before applying.',
  },
]

const FAQS: FaqItem[] = [
  {
    question: "Does my permanent residence status expire if I do not use the travel facility?",
    answer: "In most cases, no — the permanent residence status itself does not expire. What expires is the travel facility (the right to use the permanent visa to travel to and re-enter Australia). If your travel facility expires and you leave Australia, you will need an RRV to re-enter. If you remain in Australia continuously without leaving, your PR status is generally unaffected — you simply cannot re-enter using the expired facility after you leave.",
  },
  {
    question: "Can I apply for the RRV from inside Australia?",
    answer: "The subclass 155 RRV can be applied for from inside Australia (onshore) or outside Australia (offshore). The subclass 157 can only be applied for from outside Australia (it is an offshore-only application). If you are currently in Australia and your travel facility is expiring or has expired, you can apply for the subclass 155 onshore before you travel — this is often the most straightforward approach.",
  },
  {
    question: "How long does an RRV application take to be decided?",
    answer: "Processing times for RRV applications vary. Simple applications where the residence test is clearly met (e.g. 2+ years in Australia in the last 5 years with clear evidence) can be decided quickly — sometimes within days to a few weeks. Applications for the 1-year facility (substantial ties) or the 157 (compelling circumstances) are more complex and may take longer. If you are offshore and need to return urgently, contact Nanak Migration Group (MARN 2619467) to discuss the urgency and the best approach.",
  },
  {
    question: "If I am refused an RRV, can I be refused entry to Australia?",
    answer: "If your RRV application is refused and you are offshore with an expired travel facility, you may not be able to re-enter Australia as a permanent resident. This is a serious situation. If you are refused an RRV, you may have review rights at the Administrative Review Tribunal (ART) — but these must be exercised promptly within strict deadlines. Seeking professional advice immediately on receipt of a refusal is essential. Do not wait.",
  },
  {
    question: "My partner and children also have permanent residence — do they each need their own RRV?",
    answer: "Yes. Each family member with permanent residence who wants to return to Australia from overseas needs their own current travel authority — either their own current travel facility (if it has not yet expired), an RRV, or an Australian passport (if they have become citizens). Family members can be included as secondary applicants in the primary applicant's RRV application, but each person is assessed individually and must satisfy the relevant eligibility criteria.",
  },
  {
    question: "Would it be better to apply for Australian citizenship rather than an RRV?",
    answer: "In most cases, yes — if you are eligible for Australian citizenship, applying for citizenship gives you an Australian passport and permanently removes any need for a travel facility or RRV. You need to have lived in Australia for at least 4 years (including 12 months as a permanent resident) within the 5 years before applying, not have been absent for more than 12 months in total in those 5 years (including no more than 90 days in the 12 months before applying), and meet character and other requirements. A migration agent or citizenship specialist can assess whether you are eligible and whether citizenship or an RRV is the better immediate strategy.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Australian Citizenship',
    desc: 'Eligibility and requirements for citizenship by conferral — often the better long-term solution for PRs.',
    icon: 'flag',
    page: 'australian-citizenship',
    color: ACCENT,
  },
  {
    title: 'Visitor Visas Hub',
    desc: 'Overview of all visitor and short-stay options for Australia.',
    icon: 'plane',
    page: 'visitor-visas',
    color: ACCENT,
  },
  {
    title: 'Bridging Visas',
    desc: 'Stay lawfully in Australia while an application is processed.',
    icon: 'link',
    page: 'bridging-visas',
    color: ACCENT,
  },
]

const META = PAGE_META['resident-return-visa']

// ── Styled helpers ────────────────────────────────────────────────────────────

const scenarioCardStyle: React.CSSProperties = {
  background: '#fafbfe',
  border: '1px solid #e5eaf4',
  borderRadius: 12,
  padding: 24,
  marginBottom: 16,
}

const scenarioLabelStyle: React.CSSProperties = {
  display: 'inline-block',
  fontSize: 11,
  fontWeight: 700,
  letterSpacing: '0.1em',
  textTransform: 'uppercase',
  color: ACCENT,
  marginBottom: 8,
}

const scenarioQuoteStyle: React.CSSProperties = {
  fontFamily: "'Fraunces', Georgia, serif",
  fontSize: 16,
  fontWeight: 600,
  color: NAVY,
  lineHeight: 1.4,
  marginBottom: 12,
  borderLeft: `3px solid ${ACCENT}`,
  paddingLeft: 14,
}

const scenarioAssessStyle: React.CSSProperties = {
  fontSize: 14,
  color: '#374151',
  lineHeight: 1.75,
  margin: 0,
}

// ── Component ─────────────────────────────────────────────────────────────────

export default function ResidentReturnVisaPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#ffffff', color: '#1a1a2e' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Visitor & Other Visas', url: 'https://www.nanakmigration.com.au/visitor-hub' },
          { name: 'Resident Return Visa', url: 'https://www.nanakmigration.com.au/resident-return-visa' },
        ]}
        faqs={FAQS}
        service={{
          name: META.title,
          description: META.metaDescription,
          url: 'https://www.nanakmigration.com.au/resident-return-visa',
        }}
        pageUrl="https://www.nanakmigration.com.au/resident-return-visa"
        reviewedBy
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Visitor & Other Visas', page: 'visitor-visas' },
          { label: 'Resident Return Visa' },
        ]}
      />

      <PageHero
        variant="standard"
        eyebrow="Visitor & Other Visas"
        eyebrowSub="Visitor & Other · Subclasses 155 & 157"
        title={
          <>
            Resident Return Visa
            <br />
            <em style={{ fontStyle: 'italic', color: GOLD }}>Subclasses 155 and 157 — Keep Your PR Status</em>
          </>
        }
        deck="Australian permanent residents whose 5-year travel facility has expired — or is close to expiring — need a Resident Return Visa to re-enter Australia and maintain their permanent residence status. Without it, they risk losing the right to return to Australia as a permanent resident."
        shortAnswer={
          <>
            Australian permanent residents can generally travel freely for{' '}
            <strong style={{ color: NAVY }}>5 years from the date their permanent visa was granted</strong>. Once that
            5-year travel facility expires, they need a{' '}
            <strong style={{ color: NAVY }}>Resident Return Visa (RRV)</strong> to re-enter Australia as a permanent
            resident. The subclass 155 grants a new 5-year travel facility to PRs who have lived in Australia for at
            least 2 of the last 5 years — or a 1-year facility for those who can demonstrate substantial ties to
            Australia of benefit to the country. The subclass 157 grants a 3-month facility for those who have been in
            Australia for at least 1 day in the last 5 years and have compelling reasons for their absence. Application
            charge is approximately <strong style={{ color: NAVY }}>AUD 500</strong> per applicant. Nanak Migration
            Group (MARN 2619467) can assess your eligibility before you apply.
          </>
        }
        maraBadge
        currentAsAt="August 2026"
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: '← Visitor & Other', page: 'visitor-visas' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <KeyFactsStrip facts={FACTS} accent={ACCENT} />

      <div style={{ maxWidth: 900, margin: '0 auto', padding: '0 32px' }}>
        <ReviewedBy />
      </div>

      {/* ── SECTION: Overview ──────────────────────────────────── */}
      <section id="overview" style={{ background: '#ffffff', padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="What it is" title="The Resident Return Visa — What It Does and Why It Matters" />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 18 }}>
            When an Australian permanent resident is granted their permanent visa, they receive a travel facility — the
            right to travel to and from Australia freely. For most permanent visa subclasses, this travel facility lasts
            for 5 years from the date of the permanent visa grant. After 5 years, the travel facility expires.
          </p>

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 18 }}>
            An expired travel facility does not cancel the permanent residence status — the person remains a permanent
            resident. However, if they want to return to Australia from overseas after the travel facility has expired,
            they need a Resident Return Visa (RRV) to re-enter as a permanent resident. Without an RRV (or an
            Australian citizen passport), they may be denied boarding by airlines or refused entry at the border.
          </p>

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 32 }}>
            Australian citizens do not need an RRV — they can travel freely on their Australian passport. If you are
            eligible for Australian citizenship (and have not yet applied), obtaining citizenship removes any need for
            an RRV permanently. The RRV is specifically for permanent residents who are not yet citizens or who have
            chosen not to become citizens.
          </p>

          <Callout variant="warning" panel title="Do not travel on an expired travel facility">
            If your 5-year travel facility has expired and you leave Australia without a current RRV, you may be unable
            to re-enter Australia as a permanent resident. Airlines may refuse boarding if your travel document does not
            show a valid entry authority to Australia. If you are already overseas and your travel facility has expired,
            you must apply for an RRV before returning. Nanak Migration Group (MARN 2619467) can assist with urgent RRV
            applications.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Who needs it ─────────────────────────────── */}
      <section id="who-needs-it" style={{ background: '#f8fafd', padding: '72px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Do you need one?" title="Who Needs a Resident Return Visa?" />

          {/* Card 1 */}
          <div
            style={{
              borderLeft: `3px solid ${ACCENT}`,
              background: '#fafbfe',
              borderRadius: 8,
              padding: 20,
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.4 }}>
              "My permanent visa was granted more than 5 years ago and I want to travel overseas"
            </div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              You need to check whether your travel facility is still current. Your visa grant letter or your
              ImmiAccount shows your travel facility expiry date. If it has expired or is about to expire and you want
              to travel overseas and return, you need to apply for an RRV before you leave (or from overseas before your
              return).
            </p>
          </div>

          {/* Card 2 */}
          <div
            style={{
              borderLeft: `3px solid ${ACCENT}`,
              background: '#fafbfe',
              borderRadius: 8,
              padding: 20,
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.4 }}>
              "I am already overseas and my travel facility has expired — I want to come back to Australia"
            </div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              Apply for an RRV from overseas immediately. Do not attempt to return without a valid travel facility. The
              RRV can generally be applied for online from overseas. Processing may take some weeks — plan accordingly.
            </p>
          </div>

          {/* Card 3 */}
          <div
            style={{
              borderLeft: `3px solid ${ACCENT}`,
              background: '#fafbfe',
              borderRadius: 8,
              padding: 20,
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.4 }}>
              "I am a former permanent resident who left Australia and I want to return"
            </div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              If you held Australian permanent residence and left Australia without renewing your travel facility, your
              PR status may have lapsed or been lost depending on the circumstances. Seek professional advice urgently —
              the situation can be complex and time-sensitive.
            </p>
          </div>

          {/* Card 4 */}
          <div
            style={{
              borderLeft: `3px solid ${ACCENT}`,
              background: '#fafbfe',
              borderRadius: 8,
              padding: 20,
              marginBottom: 14,
            }}
          >
            <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.4 }}>
              "I am a permanent resident and I am eligible for citizenship but have not applied yet"
            </div>
            <p style={{ fontSize: 14, color: '#374151', lineHeight: 1.75, margin: 0 }}>
              If you have been a permanent resident and lived in Australia for 4 years (including 12 months as a
              permanent resident), applying for citizenship gives you an Australian passport and removes the need for any
              travel facility or RRV. This is often a more effective long-term solution than renewing the RRV
              indefinitely.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: 155 vs 157 ───────────────────────────────── */}
      <section id="subclasses" style={{ background: '#ffffff', padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Which one" title="Subclass 155 vs Subclass 157" />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {/* Column 1 — Subclass 155 */}
            <div
              style={{
                background: '#f8fafd',
                border: `1.5px solid ${ACCENT}30`,
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: ACCENT,
                  marginBottom: 8,
                }}
              >
                Subclass 155
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: NAVY,
                  margin: '0 0 20px',
                  lineHeight: 1.25,
                }}
              >
                Subclass 155 — Main RRV
              </h3>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Grant options
                </div>
                <div style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      <strong>5-year travel facility</strong>: For PRs who have been in Australia as a PR (or citizen)
                      for at least 2 of the 5 years immediately before the application
                    </p>
                  </div>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 6 }} />
                    <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                      <strong>1-year travel facility</strong>: For PRs who cannot meet the 2-year residence test but
                      who have substantial ties to Australia of benefit to the country (business, cultural, employment,
                      personal)
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Application location
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  Can be lodged from inside or outside Australia
                </p>
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Key notes
                </div>
                {[
                  "The 2-year test counts physical presence in Australia — not just visa validity",
                  "Days spent in Australia on a temporary visa before the PR grant do not count toward the 2-year test",
                  "The 1-year facility requires a genuine and credible body of evidence of substantial ties",
                ].map((note, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                    <Icon name="check" size={13} color={ACCENT} />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{note}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Column 2 — Subclass 157 */}
            <div
              style={{
                background: '#fafbfe',
                border: '1.5px solid #e5eaf4',
                borderRadius: 16,
                padding: 28,
              }}
            >
              <div
                style={{
                  display: 'inline-block',
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: '#6b7280',
                  marginBottom: 8,
                }}
              >
                Subclass 157
              </div>
              <h3
                style={{
                  fontFamily: "'Fraunces', Georgia, serif",
                  fontSize: 20,
                  fontWeight: 700,
                  color: NAVY,
                  margin: '0 0 20px',
                  lineHeight: 1.25,
                }}
              >
                Subclass 157 — Short Stay RRV
              </h3>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Grant
                </div>
                <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#9ca3af', flexShrink: 0, marginTop: 6 }} />
                  <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                    <strong>3-month travel facility only</strong>: For PRs who have been in Australia for at least 1
                    day in the last 5 years and who have compelling reasons for their extended absence
                  </p>
                </div>
              </div>

              <div style={{ marginBottom: 16 }}>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 6, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Application location
                </div>
                <p style={{ fontSize: 13, color: '#374151', lineHeight: 1.7, margin: 0 }}>
                  Must be lodged from outside Australia (offshore only)
                </p>
              </div>

              <div>
                <div style={{ fontSize: 12, fontWeight: 700, color: NAVY, marginBottom: 8, textTransform: 'uppercase' as const, letterSpacing: '0.06em' }}>
                  Key notes
                </div>
                {[
                  "The 157 is a last resort for PRs who cannot meet either the 155 tests",
                  "\"Compelling reasons\" are assessed by the Department — not all absences qualify",
                  "The 3-month facility gives the PR enough time to return to Australia and begin citizenship proceedings or apply for a 155 from onshore",
                  "The 157 does not renew PR status — it simply allows one return trip within 3 months",
                ].map((note, i) => (
                  <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                    <Icon name="info" size={13} color="#9ca3af" />
                    <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{note}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Callout variant="note" panel title="Choose carefully — applying for the wrong subclass can delay your return">
            Applying for the 157 when you may be eligible for the 155 (or vice versa) can result in a less favourable
            outcome. The subclass to apply for depends on your specific circumstances — when you were last in Australia,
            how long you were away, and what ties you have to Australia. A migration agent can assess which subclass is
            appropriate before you apply.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Charges ─────────────────────────────────────── */}
      <section id="charges" style={{ background: '#f8fafd', padding: '72px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Cost" title="RRV Application Charges" />

          <div style={{ overflowX: 'auto' as const, marginBottom: 16 }}>
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: 14,
                background: '#fff',
                borderRadius: 12,
                overflow: 'hidden',
                border: '1px solid #e5eaf4',
              }}
            >
              <thead>
                <tr style={{ background: NAVY }}>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'left' as const,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    Applicant
                  </th>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'left' as const,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    Approximate charge
                  </th>
                  <th
                    style={{
                      padding: '14px 20px',
                      textAlign: 'left' as const,
                      color: '#fff',
                      fontWeight: 700,
                      fontSize: 12,
                      letterSpacing: '0.06em',
                      textTransform: 'uppercase' as const,
                    }}
                  >
                    Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                {[
                  {
                    applicant: 'Primary applicant (subclass 155)',
                    charge: '~AUD 500',
                    notes: 'Confirm on DoHA before applying',
                  },
                  {
                    applicant: 'Primary applicant (subclass 157)',
                    charge: '~AUD 500',
                    notes: 'Same charge — confirm on DoHA',
                  },
                  {
                    applicant: 'Secondary applicant (adult)',
                    charge: '~AUD 500',
                    notes: 'Per additional adult applicant',
                  },
                  {
                    applicant: 'Secondary applicant (child)',
                    charge: 'Reduced',
                    notes: 'Confirm on DoHA',
                  },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid #f0f2f8', background: i % 2 === 0 ? '#fff' : '#f8fafd' }}>
                    <td style={{ padding: '14px 20px', color: NAVY, fontWeight: 600, lineHeight: 1.5 }}>{row.applicant}</td>
                    <td style={{ padding: '14px 20px', color: '#374151', lineHeight: 1.5 }}>{row.charge}</td>
                    <td style={{ padding: '14px 20px', color: '#6b7280', fontSize: 13, lineHeight: 1.5 }}>{row.notes}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 12, color: '#9ca3af', lineHeight: 1.6, marginTop: 12 }}>
            Figures current at August 2026. Government visa charges are indexed annually. Confirm the current charge on
            the Department of Home Affairs website or ImmiAccount before lodging.
          </p>
        </div>
      </section>

      {/* ── SECTION: Ties evidence ───────────────────────────────── */}
      <section id="ties-evidence" style={{ background: '#ffffff', padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Evidencing ties" title="How to Evidence Substantial Ties to Australia (for the 1-Year Facility)" />

          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 36 }}>
            If you cannot meet the 2-year residence test for the 5-year travel facility, you must demonstrate
            "substantial ties of benefit to Australia" in the business, cultural, employment, or personal sphere. This
            requires a genuine and credible body of evidence — not just a statutory declaration.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 32 }}>
            {/* Card 1 — Business ties */}
            <div
              style={{
                background: '#f8fafd',
                border: '1.5px solid #e5eaf4',
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${ACCENT}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="briefcase" size={20} color={ACCENT} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Business ties</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 10 }}>
                Evidence includes
              </div>
              {[
                "Active Australian business registration (ABN active, tax returns lodged)",
                "Australian business you own or hold shares in — with evidence of active management (minutes, correspondence, financial statements)",
                "Australian property actively managed, leased, or developed",
                "Evidence that your absence was due to business needs of an Australian entity",
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Card 2 — Employment ties */}
            <div
              style={{
                background: '#f8fafd',
                border: '1.5px solid #e5eaf4',
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${ACCENT}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="user" size={20} color={ACCENT} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Employment ties</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 10 }}>
                Evidence includes
              </div>
              {[
                "Current employment contract with an Australian employer (or unpaid leave from an Australian employer)",
                "Evidence that the employment relationship is ongoing and you are expected to return",
                "Payslips, superannuation contributions, or tax file number activity during the absence period",
                "Letters from the Australian employer confirming the employment relationship",
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Card 3 — Cultural ties */}
            <div
              style={{
                background: '#f8fafd',
                border: '1.5px solid #e5eaf4',
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${ACCENT}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="star" size={20} color={ACCENT} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Cultural ties</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 10 }}>
                Evidence includes
              </div>
              {[
                "Active membership of Australian cultural, sporting, or community organisations",
                "Ongoing artistic, academic, or cultural projects involving Australian institutions",
                "Evidence of cultural contributions to Australia — published works, performances, academic contributions",
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>

            {/* Card 4 — Personal ties */}
            <div
              style={{
                background: '#f8fafd',
                border: '1.5px solid #e5eaf4',
                borderRadius: 14,
                padding: 24,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    background: `${ACCENT}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}
                >
                  <Icon name="heart" size={20} color={ACCENT} />
                </div>
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>Personal ties</span>
              </div>
              <div style={{ fontSize: 12, color: '#6b7280', fontWeight: 600, textTransform: 'uppercase' as const, letterSpacing: '0.06em', marginBottom: 10 }}>
                Evidence includes
              </div>
              {[
                "Australian citizen or PR spouse, children, or close family members remaining in Australia",
                "Medical treatment or care being provided to an Australian family member",
                "Australian property that you own and maintain as your primary residence",
                "Ongoing personal obligations in Australia that require your eventual return",
              ].map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start', marginBottom: 8 }}>
                  <div style={{ width: 5, height: 5, borderRadius: '50%', background: ACCENT, flexShrink: 0, marginTop: 7 }} />
                  <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.65 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <Callout variant="note" panel title="'Substantial' is not a low threshold">
            The Department sets a high bar for "substantial ties of benefit to Australia." The ties must be genuine,
            ongoing, and clearly benefit Australia — not just personal benefit to the applicant. A bank account or
            occasional property visit is unlikely to be sufficient. Nanak Migration Group (MARN 2619467) can assess
            whether your ties are likely to be considered substantial before you apply.
          </Callout>
        </div>
      </section>

      {/* ── SECTION: Common scenarios ────────────────────────────── */}
      <section id="scenarios" style={{ background: '#f8fafd', padding: '72px 32px 56px', borderTop: '1px solid #e8edf5', borderBottom: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Real situations" title="Common Scenarios — Which RRV Applies?" />

          {/* Scenario 1 */}
          <div style={scenarioCardStyle}>
            <span style={scenarioLabelStyle}>Scenario 1 — PR living overseas, wants to come back eventually</span>
            <div style={scenarioQuoteStyle}>
              "You were granted PR 6 years ago but have been living overseas for most of that time. You have visited
              Australia twice for short periods. Your travel facility expired last year. You now want to return
              permanently and apply for citizenship."
            </div>
            <p style={scenarioAssessStyle}>
              <strong>Assessment:</strong> If you have been in Australia for fewer than 2 of the last 5 years, you
              cannot meet the 5-year facility test. You may be able to apply for a 155 with a 1-year facility (if you
              have substantial ties) or a 157 (if you were in Australia at least once in the last 5 years and have
              compelling reasons). Seek advice before applying — the wrong application could result in refusal.
            </p>
          </div>

          {/* Scenario 2 */}
          <div style={scenarioCardStyle}>
            <span style={scenarioLabelStyle}>Scenario 2 — PR who has lived overseas for work</span>
            <div style={scenarioQuoteStyle}>
              "You are a permanent resident who was posted overseas for your Australian employer for 3 years. You are
              now returning. Your travel facility expired while you were overseas."
            </div>
            <p style={scenarioAssessStyle}>
              <strong>Assessment:</strong> You may be eligible for the 1-year facility (155) based on employment ties
              — your Australian employer, the posting arrangement, and evidence of ongoing employment relationship are
              key. Gather all employment evidence. You may also argue the 2-year test if you can count days in Australia
              during the posting period.
            </p>
          </div>

          {/* Scenario 3 */}
          <div style={scenarioCardStyle}>
            <span style={scenarioLabelStyle}>Scenario 3 — Citizenship-eligible PR who never applied</span>
            <div style={scenarioQuoteStyle}>
              "You became a PR 8 years ago and have lived in Australia continuously. You recently left Australia for a
              long trip. Your travel facility expired while overseas."
            </div>
            <p style={scenarioAssessStyle}>
              <strong>Assessment:</strong> If you have lived in Australia for 4+ years (including 12+ months as PR),
              you are likely eligible for Australian citizenship. Applying for citizenship before the next trip would
              permanently resolve the travel facility issue. For the immediate return: if you have been in Australia for
              at least 2 of the last 5 years, the 155 (5-year facility) likely applies.
            </p>
          </div>

          {/* Scenario 4 */}
          <div style={{ ...scenarioCardStyle, marginBottom: 0 }}>
            <span style={scenarioLabelStyle}>Scenario 4 — Former PR who left and wants to return</span>
            <div style={scenarioQuoteStyle}>
              "You were a PR but let your travel facility lapse. You are not sure whether you still hold PR status. You
              left Australia many years ago."
            </div>
            <p style={scenarioAssessStyle}>
              <strong>Assessment:</strong> Whether you still hold PR status depends on your specific circumstances —
              including whether you held a permanent visa that included return conditions, whether you ever made a
              declaration that you had ceased to be a PR, and whether your status has lapsed. This is a complex
              situation requiring urgent professional advice. Do not attempt to travel to Australia without first
              confirming your status.
            </p>
          </div>
        </div>
      </section>

      {/* ── SECTION: FAQ ─────────────────────────────────────────── */}
      <section id="faq" style={{ background: '#ffffff', padding: '72px 32px 56px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Questions answered" title="Resident Return Visa — Frequently Asked Questions" />
          <FaqAccordion items={FAQS} accent={ACCENT} />
        </div>
      </section>

      {/* ── SECTION: Related pages ───────────────────────────────── */}
      <section id="related" style={{ background: '#f8fafd', padding: '64px 32px', borderTop: '1px solid #e8edf5' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title="Assess your RRV eligibility before your travel facility expires"
        body="Nanak Migration Group (MARN 2619467) can check which RRV subclass applies to your situation and help you gather the evidence needed — before you risk being unable to return."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="August 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
