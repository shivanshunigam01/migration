import React, { useEffect } from 'react'
import Icon from '@/components/ui/Icon'
import { GOLD, NAVY, GREY_BAND, TEXT, CAT_EMPLOYER, CAT_SKILLED, CAT_STUDENT, CAT_PARTNER, CAT_VISITOR } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { PageHero } from '@/components/page/PageHero'
import { AnswerBox } from '@/components/page/AnswerBox'
import { Callout } from '@/components/page/Callout'
import { CtaBand } from '@/components/page/CtaBand'
import { ComplianceDisclaimer } from '@/components/page/ComplianceDisclaimer'
import StructuredData from '@/components/page/StructuredData'
import { NAV_ITEMS } from '@/data/navItems'
import { ROUTE } from '@/data/routes'
import { PAGE_META } from '@/data/pageMeta'

/* ── Checklists data ───────────────────────────────────── */
const CHECKLISTS = [
  {
    title: 'Partner Visa Evidence Checklist',
    category: 'Partner & Family',
    accent: CAT_PARTNER,
    route: ROUTE.partnerVisaEvidence,
    desc: 'Relationship evidence for subclass 820/801 and 309/100 partner visa applications across four assessment categories.',
    items: [
      'Joint bank account statements or financial records showing shared expenses',
      'Lease agreement or mortgage documents listing both applicants',
      'Statutory declarations from people who know the relationship',
      'Photos together across different occasions and locations',
      'Evidence of social recognition — invitations, joint memberships',
      'Correspondence addressed to both parties at the same address',
    ],
  },
  {
    title: '186 Visa Evidence Checklist',
    category: 'Employer Sponsored',
    accent: CAT_EMPLOYER,
    route: ROUTE.skill186Requirements,
    desc: 'Documents required for the Employer Nomination Scheme (subclass 186) Direct Entry and Temporary Residence Transition streams.',
    items: [
      'Positive skills assessment from the relevant assessing authority',
      'Employment references covering nominated occupation duties and dates',
      'Certified copies of qualifications and transcripts',
      'Evidence of at least three years relevant work experience',
      'Employer nomination form and evidence of lawful business operation',
      'English language test results meeting the relevant threshold',
    ],
  },
  {
    title: 'Student Visa (GS) Preparation Checklist',
    category: 'Student Visas',
    accent: CAT_STUDENT,
    route: ROUTE.genuineStudentRequirement,
    desc: 'What to prepare to satisfy the Genuine Student (GS) requirement for a subclass 500 student visa application.',
    items: [
      'Genuine Student personal statement addressing the assessment factors',
      'Evidence of how the course relates to your career or educational goals',
      'Academic transcripts showing your study history',
      'Evidence of financial capacity to meet tuition and living costs',
      'Proof of Overseas Student Health Cover (OSHC) arrangement',
      'Confirmation of Enrolment (CoE) from a CRICOS-registered provider',
    ],
  },
  {
    title: 'Points Test Document Checklist',
    category: 'Skilled Migration',
    accent: CAT_SKILLED,
    route: ROUTE.pointsTest,
    desc: 'Evidence to support each points category in your SkillSelect Expression of Interest for the 189, 190 or 491 visa.',
    items: [
      'Positive skills assessment from the relevant assessing authority',
      'English language test results (IELTS, PTE, TOEFL, OET or Cambridge)',
      'Payslips and statutory declarations supporting nominated employment period',
      'Degree certificates and transcripts for education qualifications',
      'State or territory nomination letter (if claiming nomination points)',
      'Evidence of Australian study completed at an Australian institution',
    ],
  },
  {
    title: 'Citizenship Application Checklist',
    category: 'Visitor & Other',
    accent: CAT_VISITOR,
    route: ROUTE.australianCitizenship,
    desc: 'Identity, residence and character documents for an Australian citizenship by conferral application.',
    items: [
      'Permanent resident visa grant letter or ImmiCard',
      'Passport (current and expired) showing travel history',
      'Evidence of four years lawful residence (travel history from VEVO)',
      'Character declaration and police clearances from countries lived in',
      'Evidence of 12 months as a permanent resident immediately before applying',
      'Birth certificate or equivalent identity document',
    ],
  },
  {
    title: '482 to PR Readiness Checklist',
    category: 'Employer Sponsored',
    accent: CAT_EMPLOYER,
    route: ROUTE.pathway482ToPR,
    desc: 'Confirm you meet the two-year employment, nomination and age requirements before applying for the subclass 186 TRT stream.',
    items: [
      'Evidence of at least two years employment with the sponsoring employer in the nominated occupation',
      'Current subclass 482 (or predecessor TSS) visa grant letter',
      'Employer confirmation of willingness to nominate for subclass 186',
      'Skills assessment (may be waived for TRT stream — confirm with agent)',
      'English language test results if required for your occupation',
      'Evidence you are under 45 years of age at time of application',
    ],
  },
]

export default function ChecklistsPage({ navigate }: { navigate: (page: string) => void }) {
  useEffect(() => {
    document.title = PAGE_META['checklists'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#fff', color: TEXT }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au/' },
          { name: 'Resources', url: 'https://www.nanakmigration.com.au/resources' },
          { name: 'Checklists', url: 'https://www.nanakmigration.com.au/checklists' },
        ]}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <PageHero
        navigate={navigate}
        variant="support"
        eyebrow="MARN 2619467"
        maraBadge
        title="Visa Document Checklists"
        deck="Free Australian visa document checklists for common visa applications — written by our MARA-registered team. General guidance only."
        currentAsAt="July 2026"
        primaryCta={{ label: 'Book Free Consultation', page: 'home' }}
        accent={NAVY}
      />

      {/* AnswerBox */}
      <div style={{ background: '#fff', padding: '32px 24px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            These checklists provide a general starting point for common Australian visa applications. The Department of Home Affairs may require additional documents depending on your individual circumstances. Always confirm requirements with a registered migration agent before lodging.
          </AnswerBox>
        </div>
      </div>

      {/* Checklist cards */}
      <section style={{ background: GREY_BAND, padding: '48px 24px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 24,
              marginBottom: 40,
            }}
          >
            {CHECKLISTS.map(c => (
              <div
                key={c.title}
                style={{
                  background: '#fff',
                  borderRadius: 14,
                  borderTop: `3px solid ${c.accent}`,
                  padding: '24px 24px 20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 12,
                }}
              >
                {/* Category chip */}
                <span
                  style={{
                    fontSize: 9,
                    fontWeight: 700,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    color: c.accent,
                    alignSelf: 'flex-start',
                    background: `${c.accent}12`,
                    border: `1px solid ${c.accent}25`,
                    padding: '3px 10px',
                    borderRadius: 100,
                  }}
                >
                  {c.category}
                </span>

                {/* Title */}
                <h3
                  style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: NAVY,
                    margin: 0,
                    lineHeight: 1.3,
                  }}
                >
                  {c.title}
                </h3>

                {/* Description */}
                <p style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6, margin: 0 }}>
                  {c.desc}
                </p>

                {/* Preview items (first 3) */}
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 6 }}>
                  {c.items.slice(0, 3).map((item, i) => (
                    <li key={i} style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
                      <Icon name="check" size={14} color={c.accent} />
                      <span style={{ fontSize: 13, color: '#374151', lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                  {c.items.length > 3 && (
                    <li style={{ fontSize: 12, color: '#9ca3af', fontStyle: 'italic', paddingLeft: 22 }}>
                      + {c.items.length - 3} more items
                    </li>
                  )}
                </ul>

                {/* CTA button */}
                <button
                  onClick={() => navigate(c.route)}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: 13,
                    fontWeight: 700,
                    color: c.accent,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0,
                    fontFamily: "'Gilroy', sans-serif",
                    alignSelf: 'flex-start',
                    marginTop: 4,
                  }}
                >
                  View full checklist →
                </button>
              </div>
            ))}
          </div>

          {/* Disclaimer callout */}
          <Callout variant="warning" panel>
            Checklists are general guidance only. The Department of Home Affairs may require additional documents for your specific circumstances. A registered migration agent can advise on what evidence you will need.
          </Callout>
        </div>
      </section>

      <CtaBand
        title="Not sure what documents you need?"
        body="Our registered migration agents can review your specific circumstances and advise on the exact evidence required for your visa application."
        primaryCta={{ label: 'Book a Consultation', page: 'home' }}
        accent={GOLD}
        navigate={navigate}
      />
      <ComplianceDisclaimer />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
