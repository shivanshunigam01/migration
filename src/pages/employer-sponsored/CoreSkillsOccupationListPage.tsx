import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { ALL_OCCUPATIONS } from '@/data/occupations'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  Callout,
  AnswerBox,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  OccupationTable,
} from '@/components/page'
import type { FaqItem, RelatedPage } from '@/components/page'
import { GOLD, NAVY , CAT_EMPLOYER } from '@/theme'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const BLUE = CAT_EMPLOYER
const BORDER = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const CSOL_OCCS = ALL_OCCUPATIONS.filter(o => o.list === 'CSOL')

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is the Core Skills Occupation List (CSOL)?',
    answer: 'The Core Skills Occupation List (CSOL) is the list of occupations eligible for the Core Skills stream of the Skills in Demand (482) visa, introduced in December 2024. The CSOL replaced the former Medium and Long-Term Strategic Skills List (MLTSSL) and Short-Term Skilled Occupation List (STSOL) as the primary list for the Core Skills stream. Occupations on the CSOL are generally at ANZSCO skill level 1–3. The list is set by legislative instrument and is subject to change.',
  },
  {
    question: 'Which visas use the CSOL?',
    answer: "The CSOL is primarily used for the Core Skills stream of the Skills in Demand (SID) subclass 482 visa. Occupations on the CSOL are generally also eligible for the subclass 186 Employer Nomination Scheme (Direct Entry stream) and the subclass 494 Skilled Employer Sponsored Regional (Provisional) visa. The CSOL does not replace the MLTSSL for points-tested permanent visas such as the 189 and 190 — those visas continue to use the MLTSSL.",
  },
  {
    question: 'What happens to my visa if my occupation is removed from the CSOL?',
    answer: 'If your occupation is removed from the CSOL after a nomination has already been approved, in most cases your approved nomination remains valid for the period stated in the approval. If your occupation is removed before the nomination is approved, it will generally not meet the list requirement and the nomination may be refused. If you hold a 482 visa and are considering a 186 pathway, the occupation generally needs to be on the relevant list at the time the 186 nomination is lodged — not only at the time the 482 was granted. Seek specialist advice immediately if you become aware of a list change affecting your occupation.',
  },
  {
    question: 'Does the CSOL replace the MLTSSL?',
    answer: 'Not entirely. The CSOL replaced the MLTSSL as the primary occupation list for the Core Skills stream of the 482 visa. However, the MLTSSL continues to be used for points-tested permanent visa pathways — including the subclass 189 Skilled Independent and subclass 190 Skilled Nominated visas — and for some other purposes. Some occupations appear on both lists; others appear on only one. Always check the current version of the relevant list for the specific visa subclass you are applying for.',
  },
  {
    question: 'What if my occupation is on the MLTSSL but not the CSOL?',
    answer: 'If your occupation appears on the MLTSSL but not the CSOL, you may still be eligible for points-tested permanent visas (189, 190, 491) if you otherwise meet the requirements. However, employer-sponsored pathways via the Core Skills stream of the 482 visa are generally only available for occupations on the CSOL. You may still be eligible for employer sponsorship through the Specialist Skills stream if your earnings meet the relevant threshold, or through a Labour Agreement if one covers your occupation. Seek professional advice about your specific situation.',
  },
  {
    question: 'How do I know if a caveat applies to my occupation?',
    answer: "Caveats are additional conditions set by the legislative instrument that apply to specific occupations on the CSOL. They may include minimum salary requirements above the standard threshold, restrictions to specific industry sectors, requirements for minimum post-qualification experience, or geographic restrictions. Caveats are listed alongside the occupation in the instrument — they are not optional and must be satisfied in addition to the standard visa and nomination requirements. Your registered migration agent can advise on caveats relevant to your occupation.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand (482) Visa',       desc: 'Overview of the Core Skills and Specialist Skills streams of the 482 SID visa.',                    icon: 'zap',        page: 'skills-in-demand-visa' },
  { title: '482 to PR Pathway',                  desc: 'How to transition from a 482 visa to permanent residence via the 186 TRT stream.',                   icon: 'arrowright', page: 'skills-in-demand-visa' },
  { title: '186 Occupations List',               desc: 'Occupations eligible for the 186 Employer Nomination Scheme Direct Entry and TRT streams.',           icon: 'layers',     page: '186-occupations-list' },
]

/* ─── "What happens if removed" informational section ─── */
function RemovedFromListSection() {
  const steps = [
    { icon: 'clock', heading: 'Check whether your nomination has been decided', body: 'If the nomination was approved before the occupation was removed, in most cases the approval remains valid. If it has not yet been decided, the current list applies at the time of decision — seek advice immediately.' },
    { icon: 'clipboard', heading: 'Review any existing visa conditions', body: 'If you already hold a 482 in the occupation and a 186 nomination is pending, the 186 nomination generally needs to meet the list requirement at the time of decision. Removal of the occupation from the list may affect the pending 186 application.' },
    { icon: 'compass', heading: 'Explore alternative pathways', body: 'A Labour Agreement may cover occupations not on the standard list. The Specialist Skills stream of the 482 does not require the occupation to be on the CSOL. A registered migration agent can advise on alternatives specific to your circumstances.' },
    { icon: 'phone', heading: 'Seek specialist advice promptly', body: 'The consequences of a list change depend on the specific circumstances — including which visa is held, which applications are pending, and the timing of the change. Advice should be sought from a registered migration agent without delay.' },
  ]
  React.useEffect(() => {
    document.title = PAGE_META['core-skills-occupation-list'].title
  }, [])

  return (
    <section style={{ background: GREY_BG, padding: '80px 32px' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto' }}>
        <SectionHeading
          kicker="Occupation list changes"
          title="What Generally Happens if an Occupation Is Removed"
          intro="Occupation lists may change without notice. If an occupation you rely on is removed from the CSOL, the impact depends on the stage of your application."
          accent={BLUE}
        />
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 18 }}>
          {steps.map((s, i) => (
            <div key={i} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '22px 20px', display: 'flex', flexDirection: 'column' as const, gap: 8 }}>
              <div><Icon name={s.icon} size={26} color={BLUE} /></div>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY }}>{s.heading}</div>
              <p style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.7, margin: 0 }}>{s.body}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 24 }}></div>
      </div>
    </section>
  )
}

/* ─── What is the CSOL section ─── */
function WhatIsCsol() {
  const bullets = [
    { label: 'Core Skills stream of the 482 visa',              note: 'The primary use of the CSOL. Employers must nominate an occupation on this list to sponsor workers under the Core Skills stream.' },
    { label: 'Subclass 186 Direct Entry stream',                note: 'Most 186 Direct Entry nominations require the occupation to appear on the CSOL or MLTSSL at the time of nomination.' },
    { label: 'Subclass 494 Skilled Employer Sponsored Regional', note: 'Regional employer-sponsored nominations generally require the occupation to be on the CSOL or MLTSSL.' },
    { label: 'Some Labour Agreement pathways',                  note: 'Labour agreements may reference the CSOL to determine eligible occupations, though specific terms vary.' },
  ]
  return (
    <section style={{ background: '#fff', padding: '72px 32px' }}>
      <div style={{ maxWidth: 920, margin: '0 auto' }}>
        <SectionHeading kicker="About the CSOL" title="What Is the Core Skills Occupation List?" accent={BLUE} />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32 }}>
          <div>
            <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.8, margin: '0 0 16px' }}>
              The Core Skills Occupation List (CSOL) is the list of occupations eligible for the Core Skills stream of the Skills in Demand (SID) subclass 482 visa, introduced in December 2024. The CSOL replaced the former MLTSSL and STSOL as the primary occupation list for the employer-sponsored temporary work visa stream.
            </p>
            <p style={{ fontSize: 14.5, color: '#374151', lineHeight: 1.8, margin: 0 }}>
              Occupations on the CSOL are generally at ANZSCO skill levels 1–3, encompassing managers, professionals, and technicians across a broad range of industries. The list is set by legislative instrument and is reviewed and updated periodically by the Department of Home Affairs.
            </p>
          </div>
          <div>
            <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Which visas use the CSOL?</div>
            <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
              {bullets.map((b, i) => (
                <div key={i} style={{ background: GREY_BG, border: `1.5px solid ${BORDER}`, borderRadius: 10, padding: '12px 14px' }}>
                  <div style={{ fontSize: 13, fontWeight: 600, color: NAVY, marginBottom: 3 }}>{b.label}</div>
                  <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.55 }}>{b.note}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function CoreSkillsOccupationListPage({ navigate }: { navigate: (page: string) => void }) {
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Core Skills Occupation List (CSOL)', url: 'https://www.nanakmigration.com.au/core-skills-occupation-list' },
        ]}
        faqs={FAQ_ITEMS}
        service={{ name: 'Core Skills Occupation List (CSOL)', description: PAGE_META['core-skills-occupation-list'].metaDescription, url: 'https://www.nanakmigration.com.au/core-skills-occupation-list' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        navigate={navigate}
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored', page: 'employer-sponsored-visas' },
          { label: 'Core Skills Occupation List (CSOL)' },
        ]}
      />

      <PageHero
        variant="support"
        eyebrow="Skills in Demand (482) · Employer Nomination (186)"
        eyebrowSub="Occupation Lists"
        title={<>Core Skills Occupation List<br /><em style={{ fontStyle: 'italic', color: GOLD }}>(CSOL)</em></>}
        deck="The Core Skills Occupation List sets out the occupations eligible for the Core Skills stream of the Skills in Demand (482) visa and the 186 Employer Nomination Scheme Direct Entry stream. Understanding which list your occupation is on is essential before commencing an employer-sponsored application."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Check your occupation eligibility', page: 'home' }}
        secondaryCta={{ label: 'View 186 occupations list →', page: '186-occupations-list' }}
        accent={BLUE}
        navigate={navigate}
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Core Skills Occupation List (CSOL) sets out the occupations eligible for nomination under the Core Skills stream of the Skills in Demand (subclass 482) visa, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Each occupation on the list may be subject to caveats that restrict the type of role, industry or salary band that qualifies. Employers must nominate an occupation that appears on the CSOL, and the nominated worker must hold the skills and qualifications required for that occupation.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <WhatIsCsol />

      {/* ── CSOL TABLE ── */}
      <section style={{ background: GREY_BG, padding: '64px 32px' }}>
        <div style={{ maxWidth: 1160, margin: '0 auto' }}>
          <SectionHeading
            kicker={`${CSOL_OCCS.length} occupations shown`}
            title="Core Skills Occupation List"
            intro="Sample data only — the authoritative list is published by the Department of Home Affairs. Verify currency before use."
            accent={BLUE}
          />
          <div style={{ marginBottom: 20 }}>
            <Callout variant="note">
              This table shows sample data. The official CSOL is published by the Department of Home Affairs and is subject to change without notice. Always verify the current list at immi.homeaffairs.gov.au.
            </Callout>
          </div>
          <OccupationTable
            occupations={CSOL_OCCS}
            accent={BLUE}
          />
        </div>
      </section>

      <RemovedFromListSection />

      {/* ── FAQ ── */}
      <section style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={BLUE} />
          <FaqAccordion items={FAQ_ITEMS} accent={BLUE} />
        </div>
      </section>

      {/* ── RELATED ── */}
      <section style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={BLUE} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={3} />
        </div>
      </section>

      <CtaBand
        title={<>Is your occupation on the CSOL<br /><em style={{ fontStyle: 'italic', color: GOLD }}>and eligible for sponsorship?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can confirm whether your occupation qualifies for employer-sponsored pathways under the current list, and advise on alternative streams if it does not."
        primaryCta={{ label: 'Book an occupation eligibility check', page: 'home' }}
        secondaryCta={{ label: 'Read about the 482 visa →', page: 'skills-in-demand-visa' }}
        accent={BLUE}
        footnote="Free initial assessment · MARA-registered · MARN 2619467"
        navigate={navigate}
      />

      <ComplianceDisclaimer
        currentAsAt={CURRENT_AS_AT}
        pageNote="Occupation lists and legislative instruments are subject to change by the Department of Home Affairs. This page does not publish visa application fees."
      />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
