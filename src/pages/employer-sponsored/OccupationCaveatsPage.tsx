import React from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  Callout,
} from '@/components/page'
import type { KeyFact, FaqItem, RelatedPage } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'
const ACCENT = CAT_EMPLOYER
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'what-is-a-caveat', label: 'What is a caveat?' },
  { id: 'types', label: 'Types of caveat' },
  { id: 'examples', label: 'Examples' },
  { id: 'how-we-check', label: 'How we check' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  {
    icon: 'alert',
    value: 'Often missed',
    label: 'Caveats are not visible in basic searches',
    note: 'Standard occupation code lookups do not show caveats. They must be checked in the current legislative instrument — the CSOL instrument itself.',
  },
  {
    icon: 'clipboard',
    value: '2 main types',
    label: 'Position-based and business-based',
    note: 'Most caveats restrict nominations by the seniority of the role or by the size and type of the employing business.',
  },
  {
    icon: 'alert',
    value: 'Nomination refused',
    label: 'Consequence of missing a caveat',
    note: "If a caveat is not satisfied, the nomination will be refused — even if the occupation is listed on the CSOL and the salary is correct. Nomination refusals cannot be merits-reviewed by the ART.",
  },
  {
    icon: 'shield',
    value: 'Pre-lodgement check',
    label: 'How we protect your nomination',
    note: 'Nanak Migration Group (MARN 2619467) checks the legislative instrument for caveats before every nomination is lodged.',
  },
]

const FAQ: FaqItem[] = [
  {
    question: 'Where can I find the CSOL caveats?',
    answer: "Caveats are contained in the legislative instrument that gives effect to the CSOL — the Migration (IMMI 24/024 or successor instrument) — available on the Federal Register of Legislation. The caveats are set out in a schedule or annex to the instrument, alongside each ANZSCO code. Do not rely on third-party summaries — always check the version of the instrument current at the date of lodgement.",
  },
  {
    question: 'Do caveats change over time?',
    answer: 'Yes. The CSOL and its associated caveats are set out in a legislative instrument that can be remade or amended. A caveat that did not apply when you first assessed a nomination may apply by the time you lodge, or vice versa. Always confirm the current caveat position immediately before lodging a nomination.',
  },
  {
    question: "Is there any way to satisfy a caveat the employer does not meet?",
    answer: "No. Caveats are legislated conditions — they cannot be waived or substituted. If the employer or position does not satisfy a caveat, the nomination cannot be approved in the Core Skills stream under that occupation code. The employer may need to consider whether a different occupation code applies, whether the Specialist Skills stream is available, or whether a Labour Agreement could provide an alternative pathway.",
  },
  {
    question: 'Can a nomination be refused solely on a caveat ground even if all other criteria are met?',
    answer: "Yes. A caveat is an independent criterion. The Department must refuse a nomination if a caveat condition is not satisfied, regardless of whether the salary is correct, LMT has been completed, and the genuine position test is met. Nomination refusals cannot be reviewed by the Administrative Review Tribunal (ART) on the merits — they can only be challenged by judicial review, which is expensive and time-consuming.",
  },
  {
    question: 'How do I know if my occupation has a caveat?',
    answer: "You need to locate the current CSOL legislative instrument and read the caveat schedule for your specific ANZSCO occupation code. Nanak Migration Group (MARN 2619467) performs this check as part of every nomination assessment. If you are unsure whether a caveat applies to your occupation or business, contact us before proceeding with an employer nomination.",
  },
]

const RELATED: RelatedPage[] = [
  {
    title: 'Core Skills Occupation List (CSOL)',
    desc: 'The legislative list of occupations eligible for the Core Skills stream of the subclass 482.',
    icon: 'layers',
    page: 'core-skills-occupation-list',
    color: CAT_EMPLOYER,
  },
  {
    title: '482 Core Skills Stream',
    desc: 'The most widely used 482 employer-sponsored stream — eligibility, salary thresholds and process.',
    icon: 'briefcase',
    page: '482-core-skills-stream',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Genuine Position Test',
    desc: 'A separate criterion assessed alongside CSOL eligibility — the role must be a genuine business need.',
    icon: 'clipboard',
    page: 'genuine-position-test',
    color: CAT_EMPLOYER,
  },
  {
    title: 'Skills in Demand Visa (482)',
    desc: 'Full overview of all three 482 streams.',
    icon: 'star',
    page: 'skills-in-demand-visa',
    color: CAT_EMPLOYER,
  },
]

const EXAMPLES = [
  {
    code: 'ANZSCO 351411',
    occupation: 'Cook',
    business: 'A small cafe with 3 staff and $600,000 annual revenue',
    caveat: "Requires the nominating business to be a 'restaurant' (not a cafe or catering business in some circumstances) and may impose a minimum establishment size requirement",
    outcome: 'Nomination lodged. Refused because the business type and size did not satisfy the caveat.',
    note: 'This is a common refusal scenario for hospitality nominations. The specific caveat conditions for Cook must be checked in the current CSOL instrument.',
    refused: true,
  },
  {
    code: 'ANZSCO 225113',
    occupation: 'Marketing Specialist',
    business: 'A start-up with 4 employees and $800,000 annual turnover',
    caveat: 'Some marketing occupations carry a business-size caveat requiring minimum annual turnover or employee count',
    outcome: "Nomination unable to proceed without satisfying the caveat condition, which the employer's business does not currently meet.",
    note: 'This example is illustrative. Always confirm the current caveat wording in the legislative instrument.',
    refused: true,
  },
  {
    code: 'ANZSCO 261111',
    occupation: 'ICT Business Analyst',
    business: 'A 20-person software consultancy',
    caveat: 'No caveat — this occupation has no caveat in recent CSOL instruments',
    outcome: 'Nomination can proceed (provided salary and LMT conditions are met).',
    note: 'Caveats can be added, amended, or removed each time the CSOL instrument is remade or amended. Always check the version current at the time of lodgement.',
    refused: false,
  },
]

export default function OccupationCaveatsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['occupation-caveats'].title }, [])
  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Occupation Caveats', url: 'https://www.nanakmigration.com.au/occupation-caveats' },
        ]}
        faqs={FAQ}
        service={{
          name: 'ANZSCO Occupation Caveats — CSOL 482 Nomination',
          description: PAGE_META['occupation-caveats'].metaDescription,
          url: 'https://www.nanakmigration.com.au/occupation-caveats',
        }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored Visas', page: 'employer-sponsored-visas' },
          { label: 'Occupation Caveats' },
        ]}
      />
      <PageHero
        variant="standard"
        eyebrow="Core Skills Occupation List (CSOL)"
        eyebrowSub="Subclass 482 · Nomination Requirement"
        title={<>ANZSCO Occupation Caveats<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Why a Listed Occupation Can Still Be Refused</em></>}
        deck="An occupation appearing on the Core Skills Occupation List (CSOL) does not automatically mean your nomination will be approved. Many CSOL occupations carry caveats that restrict which businesses, roles, or positions can use them — and a caveat can sink a nomination even when the occupation is listed."
        shortAnswer={<>A caveat is a condition attached to a specific CSOL occupation in the legislative instrument. Caveats are not visible in a basic occupation search — they must be checked in the actual legislative text. Common caveat types include <strong style={{ color: NAVY }}>position-based caveats</strong> (restricting the role to a specific level of the organisation) and <strong style={{ color: NAVY }}>business-based caveats</strong> (restricting the occupation to businesses of a certain size, revenue, or type). Before a nomination is lodged, Nanak Migration Group (MARN 2619467) checks the current legislative instrument for every occupation to identify applicable caveats and assess whether the position and employer meet the caveat conditions.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Core Skills Occupation List →', page: 'core-skills-occupation-list' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* On-this-page bar */}
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

      {/* Overview — Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={KEY_FACTS} accent={ACCENT} />
      </div>

      {/* What is a caveat */}
      <section id="what-is-a-caveat" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Explanation" title="What Is an Occupation Caveat?" accent={ACCENT} />
          <div style={{ marginTop: 28, fontSize: 15, color: '#374151', lineHeight: 1.85 }}>
            <p style={{ margin: '0 0 20px' }}>
              The CSOL is not a simple list of occupation names and codes. Each entry in the legislative instrument may include one or more conditions — called caveats — that restrict the type of nomination that can use that occupation code. A caveat is a legally binding restriction. If your nomination does not satisfy an applicable caveat, the Department must refuse it.
            </p>
            <p style={{ margin: '0 0 16px' }}>This is the case even if:</p>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10, marginBottom: 20 }}>
              {[
                'The occupation is clearly listed on the CSOL',
                'The nominated salary meets the CSIT',
                'The LMT has been completed correctly',
                'The genuine position test is satisfied',
              ].map((point, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <div style={{ width: 22, height: 22, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                    <Icon name="check" size={11} color={ACCENT} />
                  </div>
                  <span style={{ fontSize: 14, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                </div>
              ))}
            </div>
            <p style={{ margin: 0, fontWeight: 600, color: NAVY }}>
              Caveats are an additional and independent criterion.
            </p>
          </div>
        </div>
      </section>

      {/* Types of caveat */}
      <section id="types" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Two main types" title="Types of Occupation Caveat" accent={ACCENT} />
          <div style={{ display: 'flex', gap: 24, marginTop: 36, flexWrap: 'wrap' as const }}>
            {/* Position-based card */}
            <div style={{ flex: '1 1 300px', border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.06)' }}>
              <div style={{ background: `${ACCENT}18`, color: ACCENT, padding: '14px 20px', fontWeight: 700, fontSize: 15 }}>
                Position-based caveat
              </div>
              <div style={{ padding: '20px 20px', fontSize: 14, color: '#374151', lineHeight: 1.8 }}>
                A position-based caveat restricts a CSOL occupation to roles that occupy a specific level within a business's management or operational structure. For example, a caveat may require the position to be a "primary" role, or to sit at a senior level — excluding assistant, trainee, or support positions even if they carry the same ANZSCO title.
              </div>
            </div>
            {/* Business-based card */}
            <div style={{ flex: '1 1 300px', border: `1px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden', boxShadow: '0 2px 12px rgba(27,43,94,0.06)' }}>
              <div style={{ background: `${GOLD}25`, color: '#92400e', padding: '14px 20px', fontWeight: 700, fontSize: 15 }}>
                Business-based caveat
              </div>
              <div style={{ padding: '20px 20px', fontSize: 14, color: '#374151', lineHeight: 1.8 }}>
                A business-based caveat restricts which businesses can use a particular CSOL occupation based on the business's size, revenue, or type of operation. For example, an occupation may only be available to businesses with annual turnover above a certain threshold, or to businesses whose primary activity matches the nominated occupation.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Examples */}
      <section id="examples" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <SectionHeading kicker="Real examples" title="Examples of Caveats in Practice" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 24, marginTop: 36 }}>
            {EXAMPLES.map((ex, i) => (
              <div
                key={i}
                style={{
                  background: '#fff',
                  border: `1px solid ${BORDER}`,
                  borderLeft: `4px solid ${ex.refused ? '#e11d48' : '#16a34a'}`,
                  borderRadius: '0 14px 14px 0',
                  padding: '24px 28px',
                  boxShadow: '0 2px 10px rgba(27,43,94,0.05)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <div style={{ background: `${ACCENT}12`, border: `1px solid ${ACCENT}25`, borderRadius: 6, padding: '3px 10px', fontSize: 12, fontWeight: 700, color: ACCENT }}>{ex.code}</div>
                  <div style={{ fontSize: 16, fontWeight: 700, color: NAVY }}>{ex.occupation}</div>
                  <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <div style={{ width: 8, height: 8, borderRadius: '50%', background: ex.refused ? '#e11d48' : '#16a34a' }} />
                    <span style={{ fontSize: 12, fontWeight: 600, color: ex.refused ? '#e11d48' : '#16a34a' }}>
                      {ex.refused ? 'Caveat applies' : 'No caveat'}
                    </span>
                  </div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr', gap: '8px 16px', fontSize: 13, marginBottom: 14 }}>
                  <span style={{ color: '#9ca3af', fontWeight: 600 }}>Business</span>
                  <span style={{ color: '#374151' }}>{ex.business}</span>
                  <span style={{ color: '#9ca3af', fontWeight: 600 }}>Caveat condition</span>
                  <span style={{ color: '#374151' }}>{ex.caveat}</span>
                  <span style={{ color: '#9ca3af', fontWeight: 600 }}>Outcome</span>
                  <span style={{ color: NAVY, fontWeight: 600 }}>{ex.outcome}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, background: GREY_BG, borderRadius: 8, padding: '10px 14px' }}>
                  <Icon name="info" size={13} color={ACCENT} />
                  <span style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.6 }}>{ex.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we check */}
      <section id="how-we-check" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Our process" title="How Nanak Migration Group Checks for Caveats" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <Callout variant="tip" title="Pre-lodgement caveat check — every time" panel={true}>
              Before advising an employer to proceed with a 482 Core Skills nomination, Nanak Migration Group (MARN 2619467):
              <ol style={{ margin: '12px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column' as const, gap: 6 }}>
                <li>Identifies the correct ANZSCO code for the position</li>
                <li>Locates the current CSOL legislative instrument in force on the date of intended lodgement</li>
                <li>Reads the full caveat text for that occupation code</li>
                <li>Assesses whether the employer's business type, size, and revenue satisfy the caveat</li>
                <li>Assesses whether the specific position description satisfies any position-based caveat</li>
              </ol>
              <p style={{ margin: '12px 0 0', fontStyle: 'italic' }}>
                If a caveat cannot be satisfied, we advise the employer before the nomination is lodged — not after a refusal.
              </p>
            </Callout>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <FaqAccordion items={FAQ} accent={ACCENT} />
          </div>
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <div style={{ marginTop: 32 }}>
            <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
          </div>
        </div>
      </section>

      <CtaBand
        title="Check caveats before your nomination is lodged"
        body="Nanak Migration Group (MARN 2619467) reviews the current CSOL legislative instrument for every occupation before advising whether a Core Skills stream nomination can proceed."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />
      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
