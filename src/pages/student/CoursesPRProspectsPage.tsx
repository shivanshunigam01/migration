import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'
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

const CURRENT_AS_AT = 'August 2026'
const CAT_STUDENT = '#0369a1'
const ACCENT = CAT_STUDENT
const GREY_BG = '#fafbfe'
const BORDER = '#e8edf6'

const TOC = [
  { id: 'overview', label: 'Overview' },
  { id: 'fields', label: 'Fields with strong pathways' },
  { id: 'check-before-enrolling', label: 'What to check' },
  { id: 'regional-study', label: 'Regional study bonus' },
  { id: 'faq', label: 'FAQ' },
  { id: 'related', label: 'Related pages' },
]

const FACTS: KeyFact[] = [
  { icon: 'alert', value: 'No guarantee', label: 'Course choice never guarantees PR', note: 'Occupation lists change. A course that was clearly linked to a strong PR pathway when you enrolled may be restricted or removed by the time you graduate.' },
  { icon: 'calendar', value: '92 weeks', label: 'Minimum study for Australian Study Requirement', note: 'At least 2 academic years (92 weeks) of study at an Australian CRICOS provider qualifies for the Australian Study Requirement — a prerequisite for the 485 Temporary Graduate visa.' },
  { icon: 'star', value: '+5 points', label: 'Australian study bonus in the points test', note: 'Completing a Bachelor degree or higher in Australia gives 5 additional points in the skilled migration points test — applicable to the 189, 190 and 491.' },
  { icon: 'mappin', value: '+5 points', label: 'Regional study bonus', note: 'Study at a regional institution (outside Sydney/Melbourne/Brisbane metro) adds a further 5 points to your skilled migration score on top of the Australian study bonus.' },
]

const FAQ: FaqItem[] = [
  {
    question: "Does studying in Australia guarantee I can apply for a 485 Temporary Graduate visa?",
    answer: "Not automatically. To be eligible for the 485 Graduate Work stream, your occupation must be on the relevant list (MLTSSL) at the time of application and you must have an Australian study requirement qualification. For the Post-Study Work stream, you need to have studied at least two academic years in Australia at AQF Bachelor level or above. Your individual circumstances at the time of applying — not at the time of enrolling — determine eligibility. Occupation lists and visa eligibility requirements can change during your study.",
  },
  {
    question: "Can I choose any course and later switch to a PR-friendly occupation?",
    answer: "Skills assessments are occupation-specific — the assessing authority evaluates your qualifications against the occupation you nominate. If your qualification is not closely related to the nominated ANZSCO occupation, the assessment is likely to be unsuccessful. Switching occupations on paper (by nominating a different ANZSCO code) without the matching qualification is not a viable strategy and may involve misrepresentation risks. Migration advice before choosing a course is far more effective than damage control after completing a course that does not support a viable pathway.",
  },
  {
    question: "What is the Australian Study Requirement and when does it apply?",
    answer: "The Australian Study Requirement (ASR) requires at least two academic years (92 weeks) of full-time (or equivalent) study at a CRICOS-registered Australian institution, with the principal course at the relevant level of qualification. The ASR is a prerequisite for the 485 Temporary Graduate visa (Post-Study Work stream) and is also the basis for the Australian Study bonus points (5 points) in the skilled migration points test. Study completed offshore, even as part of an Australian university's offshore program, generally does not satisfy the ASR.",
  },
  {
    question: "Are trade qualifications (TAFE) as useful as university degrees for PR?",
    answer: "Trade qualifications can support strong PR pathways — particularly through employer-sponsored pathways (482 Core Skills, 186 ENS, 494 Regional) and some state nomination programs. Many trades are on the CSOL. The 485 Temporary Graduate visa is generally not available for vocational (TAFE) qualifications below AQF Level 8 (Graduate Diploma) — but this does not prevent a trade-qualified person from pursuing employer-sponsored PR pathways. A Certificate III or IV in a relevant trade that leads to a TRA-assessed occupation can be highly effective.",
  },
  {
    question: "How do I know if an occupation is still on the relevant list when I graduate?",
    answer: "Occupation lists are updated periodically through legislative instruments. The only reliable way to check is to look at the current version of the relevant instrument on the Federal Register of Legislation, or the current Department of Home Affairs occupation list pages. Nanak Migration Group (MARN 2619467) can check current list status as part of a pre-enrolment or pre-application assessment. No one can guarantee that an occupation will remain on a list throughout your study — this is a genuine risk that every international student should understand before committing to a course.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Student to PR Pathway', desc: 'Step-by-step guide from student visa to permanent residence.', icon: 'arrowright', page: 'student-to-pr-pathway', color: CAT_STUDENT },
  { title: 'Student Visa (Subclass 500)', desc: 'Conditions, work rights, and requirements for the 500 student visa.', icon: 'bookopen', page: 'student-visa-500', color: CAT_STUDENT },
  { title: 'Temporary Graduate Visa (485)', desc: "Work in Australia after graduation — streams, eligibility and work rights.", icon: 'graduationcap', page: 'temporary-graduate-485', color: CAT_STUDENT },
  { title: 'SkillSelect & EOI', desc: 'How Expressions of Interest and invitation rounds work for the 189, 190 and 491.', icon: 'clipboard', page: 'skillselect-eoi', color: CAT_STUDENT },
]

const FIELD_CARDS = [
  {
    icon: 'heart',
    heading: 'Nursing and Allied Health',
    occupations: 'Registered Nurse (254111), Midwife (254111 — separate), Physiotherapist (252511), Occupational Therapist (251211), Radiographer (251211), Sonographer (251213)',
    authority: 'ANMAC (nursing/midwifery); relevant allied health bodies',
    pathway: '189/190/491 via points test; employer sponsorship via 482 or 186; 482 Core Skills stream',
    note: "Nursing has been consistently on the CSOL and state lists. ANMAC assessment is rigorous — ensure your qualification is ANMAC-approved and your English meets the registration standard.",
  },
  {
    icon: 'layers',
    heading: 'Engineering',
    occupations: 'Civil, Structural, Electrical, Mechanical, Chemical, Mining, and Software engineers (various 233xxx codes)',
    authority: "Engineers Australia (most disciplines); ACS (software engineering in some classifications)",
    pathway: "189/190/491; employer sponsorship; 482 Core Skills or Specialist Skills for higher earners",
    note: "Engineering has consistently featured on the CSOL. Engineers Australia assessment requires a Bachelor's degree or equivalent in a recognised engineering discipline. Some engineering fields have higher invitation scores — check current rounds.",
  },
  {
    icon: 'graduationcap',
    heading: 'Teaching (including Early Childhood)',
    occupations: 'Primary School Teacher (241111), Secondary School Teacher (241411), Early Childhood Teacher (241111 — separate registration), Special Needs Teacher (241511)',
    authority: 'AITSL (Australian Institute for Teaching and School Leadership)',
    pathway: '189/190/491; state government employers; some 186 ENS pathways',
    note: 'Early Childhood Education has become an increasingly sought occupation for state nomination. AITSL assessment requires the qualification to be an approved teacher education program and includes a recency-of-practice requirement.',
  },
  {
    icon: 'tool',
    heading: 'Trades via TAFE',
    occupations: 'Electrician (341111), Plumber (334111), Carpenter (331212), Metal Fabricator (322211)',
    authority: 'TRA (Trades Recognition Australia)',
    pathway: '482 Core Skills stream; 186 ENS; 494 Regional; state 491 nomination',
    note: "Trade qualifications from TAFE (Certificate III level or equivalent) can lead to skills assessments via TRA. Many trades are on the CSOL and state lists, particularly for regional sponsorship. A trade qualification typically needs to be at AQF Level 3 or equivalent.",
  },
  {
    icon: 'clipboard',
    heading: 'Information Technology',
    occupations: 'ICT Business Analyst (261111), Software Engineer (261313), Systems Analyst (261112), Database Administrator (262111), Network Engineer (263111)',
    authority: 'ACS (Australian Computer Society)',
    pathway: '189/190/491; 482 Core Skills; 482 Specialist Skills for high earners',
    note: 'IT occupations have strong employer-sponsored pathways and often competitive points test scores. ACS assessment evaluates your qualification against Australian ICT standards. Some ACS-assessed occupations qualify for the Specialist Skills stream if salary meets the SSIT.',
  },
  {
    icon: 'user',
    heading: 'Social Work',
    occupations: 'Social Worker (272511), Youth Worker (411716), Community Worker (411311)',
    authority: 'AASW (Australian Association of Social Workers) for Social Worker; TRA or VETASSESS for others',
    pathway: '189/190/491; government and community sector employers; 482 Core Skills',
    note: 'Social Work has consistent presence on state nomination lists. AASW membership (or eligibility) is typically required for a positive skills assessment. Social Work qualifications must meet AASW program accreditation standards.',
  },
]

const CHECKLIST_ITEMS = [
  {
    icon: 'check',
    title: 'CRICOS registration',
    desc: "The institution and specific course must be registered on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS). An unregistered course is not approved for a student visa. Verify on the CRICOS database at cricos.teqsa.gov.au before applying.",
  },
  {
    icon: 'check',
    title: 'Skills-assessable occupation',
    desc: "Confirm that your intended course leads to an ANZSCO occupation that can be assessed by an Australian skills assessing authority. Not all qualifications lead to assessable occupations. Some qualifications are too broad, misaligned with ANZSCO codes, or in fields where the assessing authority does not accept the AQF level of the course.",
  },
  {
    icon: 'check',
    title: 'Study duration for the Australian Study Requirement',
    desc: "If you intend to use the 485 Temporary Graduate visa after graduation, or claim the Australian Study bonus points, your Australian study must be at least 2 academic years (92 weeks) at a CRICOS-registered provider. A 12-month course or a course completed partly offshore may not satisfy this requirement.",
  },
  {
    icon: 'check',
    title: 'Occupation on the relevant list',
    desc: "Before enrolling, check whether your intended occupation is currently on the CSOL (for 482 Core Skills or 186 employer nomination), the MLTSSL (for 189 direct entry or 482 occupation eligibility), and any relevant state or territory occupation list for 190 or 491 nomination. Use current, official sources — not third-party summaries.",
  },
  {
    icon: 'check',
    title: 'Recent changes to the relevant list',
    desc: "Check whether the occupation has been recently amended — for example, added with a caveat, moved from one list to another, or removed entirely. Department policy is to make CSOL amendments with little notice. A migration agent can help you monitor relevant changes.",
  },
]

export default function CoursesPRProspectsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => { document.title = PAGE_META['courses-pr-prospects'].title }, [])

  return (
    <div style={{ fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Courses with PR Prospects', url: 'https://www.nanakmigration.com.au/courses-pr-prospects' },
        ]}
        faqs={FAQ}
        service={{ name: 'Courses with PR Prospects', description: PAGE_META['courses-pr-prospects'].metaDescription, url: 'https://www.nanakmigration.com.au/courses-pr-prospects' }}
        reviewedBy={true}
      />

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Student Visas', page: 'student-visas' },
        { label: 'Courses with PR Prospects' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Student Visa"
        eyebrowSub="Subclass 500 · PR Pathways"
        title={<>Courses with PR Prospects<br /><em style={{ fontStyle: 'italic', color: GOLD }}>How Course Choice Affects Your Pathway to PR</em></>}
        deck="Choosing a course that leads to an occupation with strong PR pathways is one of the most important decisions an international student can make. But the link between a course and permanent residence is indirect — occupation lists change, skills assessments have their own criteria, and study alone is never sufficient for PR."
        shortAnswer={<>Course choice influences your PR pathway because most Australian skilled visa applications require a positive skills assessment in your nominated occupation, and most occupations require a relevant qualification. However, <strong style={{ color: NAVY }}>no course guarantees PR</strong> — the occupations on the relevant lists, the invitation scores at the time of your application, and your total circumstances at the time of applying all determine your outcome. Key factors to check before enrolling: (1) whether the qualification leads to a skills-assessable occupation, (2) whether the course is at least two academic years / 92 weeks of study in Australia (for the Australian Study Requirement and its bonus points), (3) whether the course is offered by a CRICOS-registered provider, and (4) whether the occupation has been recently removed from or restricted on the relevant list. Nanak Migration Group, a registered migration agent (MARN 2619467), can help you assess your prospective course before you enrol.</>}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        secondaryCta={{ label: 'Student to PR pathway →', page: 'student-to-pr-pathway' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '16px 32px 32px' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}><ReviewedBy /></div>
      </section>

      {/* TOC bar */}
      <div style={{ borderTop: '1px solid #e8edf6', borderBottom: '1px solid #e8edf6', background: '#fafbfe', position: 'sticky', top: 64, zIndex: 20 }}>
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

      {/* Key Facts */}
      <div id="overview">
        <KeyFactsStrip facts={FACTS} accent={ACCENT} />
      </div>

      {/* Section: Overview */}
      <section style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="The connection" title="How Course Choice Influences a PR Pathway" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 20 }}>
            Most Australian skilled visa pathways — including the subclass 189 (Skilled Independent), 190 (Skilled Nominated), 491 (Skilled Work Regional), and most employer-sponsored visas — require the applicant to have their qualifications and work experience assessed positively by the relevant skills assessing authority for their nominated occupation. The assessing authority looks at whether your qualification is relevant to the occupation. This is why your course choice matters: studying nursing means you can seek a skills assessment as a Registered Nurse (ANZSCO 254111); studying engineering allows assessment as an engineering professional. A qualification in an unrelated field will not support a skills assessment in a skilled occupation.
          </p>
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>
            However, the link is indirect and contingent. Whether you can use your skills assessment to enter the visa points pool (or receive employer sponsorship) depends on whether your occupation is on the relevant list at the time of your application, whether you meet the points threshold at the time of an invitation round, and whether any caveats or conditions on the occupation affect your nomination. Occupation lists are legislative instruments that can change — occupations are added and removed. A course you chose based on current occupation list access may lead to an occupation that is no longer accessible by the time you complete your studies and skills assessment.
          </p>
          <Callout variant="warning" panel={true} title="Occupation lists change — check at the time of application, not just enrolment">
            The Core Skills Occupation List (CSOL), Medium and Long-Term Strategic Skills List (MLTSSL), and state/territory occupation lists can be amended at any time. An occupation that was on a relevant list when you enrolled in your course may have been removed, restricted, or caveated by the time you graduate. Nanak Migration Group (MARN 2619467) monitors these changes — but no agent can guarantee that an occupation will remain on a list.
          </Callout>
        </div>
      </section>

      {/* Section: Fields */}
      <section id="fields" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading kicker="Strong pathways" title="Fields with Generally Strong PR Pathways" accent={ACCENT} />
          <div style={{ fontSize: 13, color: '#6b7280', background: '#fff', border: `1px solid ${BORDER}`, borderRadius: 8, padding: '10px 16px', marginBottom: 28, lineHeight: 1.6 }}>
            The following fields have generally shown strong PR pathways in recent years — but this is not a guarantee. Individual circumstances, occupation list changes, and invitation scores at the time of application all affect outcomes.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {FIELD_CARDS.map((card, i) => (
              <div key={i} style={{ border: `1px solid ${BORDER}`, borderRadius: 12, padding: 20, background: '#ffffff' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 10, background: `${ACCENT}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={card.icon} size={18} color={ACCENT} />
                  </div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, paddingTop: 6 }}>{card.heading}</div>
                </div>
                <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.7, marginBottom: 8 }}>
                  <strong>Occupations:</strong> {card.occupations}
                </div>
                <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.7, marginBottom: 8 }}>
                  <strong>Skills assessing authority:</strong> {card.authority}
                </div>
                <div style={{ fontSize: 12.5, color: '#374151', lineHeight: 1.7, marginBottom: 10 }}>
                  <strong>Pathway:</strong> {card.pathway}
                </div>
                <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.65, borderTop: `1px solid ${BORDER}`, paddingTop: 10 }}>
                  {card.note}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: What to check before enrolling */}
      <section id="check-before-enrolling" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <SectionHeading kicker="Due diligence" title="What to Check Before Enrolling" accent={ACCENT} />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 0 }}>
            {CHECKLIST_ITEMS.map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: 16, alignItems: 'flex-start', marginBottom: 20 }}>
                <div style={{ width: 32, height: 32, borderRadius: '50%', background: `${ACCENT}12`, border: `1.5px solid ${ACCENT}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={item.icon} size={14} color={ACCENT} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{item.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section: Regional study bonus */}
      <section id="regional-study" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading kicker="Regional study bonus" title="Regional Study Bonus Points" accent={ACCENT} />
          <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.8, marginBottom: 28 }}>
            Studying at an institution in a designated regional area of Australia can add 5 additional points to your skilled migration points score — on top of the 5-point Australian Study bonus. This gives regional graduates a potential 10-point total study bonus, which can be significant in competitive invitation rounds.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 28 }}>
            <div style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Requirements for the regional study bonus</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  "You must have completed at least 2 academic years (92 weeks) of study at an Australian institution in a designated regional area",
                  "The institution must be in a designated regional area — which excludes the Sydney, Melbourne, and Brisbane metropolitan areas",
                  "The degree must be at Bachelor level or above (or a Masters or Doctoral degree)",
                  "The study must have been completed after 1 February 2013",
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={9} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#ffffff', border: `1px solid ${BORDER}`, borderRadius: 12, padding: 24 }}>
              <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 14 }}>What counts as a regional institution</div>
              <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 10 }}>
                {[
                  "Universities and TAFE institutes in regional cities like Canberra, Hobart, Darwin, Gold Coast, Newcastle, Wollongong, Geelong, Ballarat, Bendigo, Townsville, Cairns, and other designated regional areas",
                  "Note: Canberra (ACT) is a designated regional area for immigration purposes despite being the national capital",
                  "The course must be a CRICOS-registered course at a CRICOS-registered institution",
                ].map((point, i) => (
                  <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                    <div style={{ width: 16, height: 16, borderRadius: '50%', background: `${ACCENT}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                      <Icon name="check" size={9} color={ACCENT} />
                    </div>
                    <span style={{ fontSize: 13.5, color: '#374151', lineHeight: 1.6 }}>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <Callout variant="note" panel={true} title="Regional study does not guarantee regional nomination">
            Completing your course at a regional institution makes you eligible for the regional study bonus points — but it does not guarantee a state/territory nomination for a 491 visa or make your EOI invite-ready. You still need to meet all other visa requirements including a skills assessment, English requirements, and a competitive points score.
          </Callout>
        </div>
      </section>

      {/* Section: FAQ */}
      <section id="faq" style={{ background: '#ffffff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={ACCENT} />
          <FaqAccordion items={FAQ} accent={ACCENT} />
        </div>
      </section>

      {/* Section: Related */}
      <section id="related" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={ACCENT} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={4} />
        </div>
      </section>

      <CtaBand
        title="Assess your course before you enrol"
        body="Nanak Migration Group (MARN 2619467) can review your prospective course and intended occupation to identify whether a viable PR pathway exists and what risks apply — before you commit to study."
        primaryCta={{ label: 'Request a discussion', page: 'home' }}
        accent={ACCENT}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
