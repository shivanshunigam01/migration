import React from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  KeyFactsStrip,
  SectionHeading,
  ComparisonTable,
  Callout,
  AnswerBox,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  OnThisPageNav,
} from '@/components/page'
import type {
  KeyFact,
  ComparisonColumn,
  ComparisonRow,
  FaqItem,
  RelatedPage,
  NavSection,
} from '@/components/page'
import { GOLD, NAVY , CAT_SKILLED } from '@/theme'
import Icon from '@/components/ui/Icon'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'

const AMBER = CAT_SKILLED
const GREEN   = '#f5a124'
const TEAL    = '#0e7490'
const ROSE    = '#e11d48'
const VIOLET  = '#4f46e5'
const BORDER  = '#e8edf6'
const GREY_BG = '#fafbfe'
const CURRENT_AS_AT = 'July 2026'

const TOC: NavSection[] = [
  { id: 'key-facts',   label: 'Key facts' },
  { id: 'levels',      label: 'English levels and test scores' },
  { id: 'which-visa',  label: 'Which visa needs which level' },
  { id: 'exemptions',  label: 'Exemptions and exceptions' },
  { id: 'validity',    label: 'Test validity and booking' },
  { id: 'points',      label: 'English points' },
  { id: 'faq',         label: 'FAQ' },
  { id: 'related',     label: 'Related pages' },
]

const KEY_FACTS: KeyFact[] = [
  { icon: 'globe',    value: '5 approved tests',      label: 'IELTS, PTE Academic, TOEFL iBT, OET, Cambridge C1 Advanced',  note: 'Only approved tests are accepted. Check whether your specific visa accepts all five tests or limits the options.' },
  { icon: 'check',    value: 'Each component',        label: 'Scores must meet the threshold in every component — not just the overall', note: "An overall score that meets the threshold is not sufficient if one component falls short. Each band or skill area is assessed individually." },
  { icon: 'clock',    value: 'Generally 3 years',     label: 'Most approved tests are valid for 3 years from the test date',             note: 'Some visa subclasses or assessing authorities may apply a different validity period. Confirm before booking a test.' },
  { icon: 'alert',    value: 'At invitation AND decision', label: 'English must be met twice — at invitation and at visa decision',       note: 'For points-tested skilled visas, if your English test expires between invitation and decision, you may need a new test.' },
  { icon: 'hash',     value: 'Points for higher English', label: 'Proficient and Superior English add 10 or 20 points to your EOI score', note: "Competent English is the minimum for most visas — it does not add points. Proficient adds 10; Superior adds 20." },
]

/* ─── English levels table ─── */
const LEVEL_COLUMNS: ComparisonColumn[] = [
  { key: 'ielts',     label: 'IELTS Academic',         highlight: true },
  { key: 'pte',       label: 'PTE Academic' },
  { key: 'toefl',     label: 'TOEFL iBT' },
  { key: 'oet',       label: 'OET' },
  { key: 'cambridge', label: 'Cambridge C1 Advanced' },
]

const LEVEL_ROWS: ComparisonRow[] = [
  {
    feature:  'Functional English',
    ielts:    '4.5 overall (general guide; varies by context)',
    pte:      'Varies by context',
    toefl:    'Varies by context',
    oet:      'Not generally accepted for this level',
    cambridge: 'Not generally specified at this level',
  },
  {
    feature:  'Vocational English',
    ielts:    'Generally 5.0 in each of the 4 components',
    pte:      'Generally 36 in each of the 4 components',
    toefl:    'Varies by context — not always specified',
    oet:      'Generally not accepted for this level',
    cambridge: 'Generally not specified at this level',
  },
  {
    feature:  'Competent English',
    ielts:    'Generally 6.0 in each of the 4 components',
    pte:      'Generally 50 in each of the 4 components',
    toefl:    'Generally: Reading 13, Listening 12, Speaking 18, Writing 21',
    oet:      'Generally Grade B in each of the 4 components',
    cambridge: 'Generally 169 in each of the 4 components',
  },
  {
    feature:  'Proficient English',
    ielts:    'Generally 7.0 in each of the 4 components',
    pte:      'Generally 65 in each of the 4 components',
    toefl:    'Generally: Reading 24, Listening 24, Speaking 23, Writing 27',
    oet:      'Generally Grade B in each of the 4 components',
    cambridge: 'Generally 185 in each of the 4 components',
  },
  {
    feature:  'Superior English',
    ielts:    'Generally 8.0 in each of the 4 components',
    pte:      'Generally 79 in each of the 4 components',
    toefl:    'Generally: Reading 24, Listening 24, Speaking 23, Writing 27 (highest tier; confirm current instrument)',
    oet:      'OET generally does not satisfy Superior English',
    cambridge: 'Generally 200 in each of the 4 components',
  },
]

/* ─── Which visa needs which level ─── */
const VISA_LEVELS = [
  {
    level: 'Competent English',
    color: TEAL,
    visas: [
      { code: '189', name: 'Skilled Independent', note: 'Minimum required; Proficient or Superior adds points.' },
      { code: '190', name: 'Skilled Nominated', note: 'Minimum required; Proficient or Superior adds points.' },
      { code: '491', name: 'Skilled Work Regional (Provisional)', note: 'Minimum required; Proficient or Superior adds points.' },
      { code: '186', name: 'Employer Nomination Scheme (TRT stream)', note: "Generally required. Direct Entry stream may require Competent or higher depending on the occupation." },
      { code: '482', name: 'Skills in Demand (Core Skills stream)', note: 'Generally required for most sponsored workers. Some specialist pathways vary.' },
    ],
  },
  {
    level: 'Vocational English',
    color: AMBER,
    visas: [
      { code: '820/801', name: 'Partner Visa (onshore)', note: 'Some partner visa criteria use Vocational English as a minimum in certain contexts.' },
      { code: '309/100', name: 'Partner Visa (offshore)', note: 'Some partner visa criteria use Vocational English as a minimum in certain contexts.' },
      { code: '186', name: 'ENS (Labour Agreement stream)', note: 'Some labour agreements specify Vocational English as the minimum.' },
    ],
  },
  {
    level: 'Functional English',
    color: GREEN,
    visas: [
      { code: '820/801', name: 'Partner Visa',   note: 'Main applicant and, in some circumstances, secondary applicant.' },
      { code: '309/100', name: 'Partner Visa Offshore', note: 'Some partner visa applicants. Confirm the applicable level for your specific visa stream.' },
    ],
  },
  {
    level: 'No English requirement (or passport-based exemption)',
    color: '#6b7280',
    visas: [
      { code: '600', name: 'Visitor Visa', note: 'No English language requirement for visitor visas, generally.' },
      { code: 'Various', name: 'Certain family and parent visas', note: 'Some family and parent visa subclasses have no English requirement or only require that the sponsor has English.' },
    ],
  },
]

/* ─── Exemptions ─── */
const EXEMPTIONS = [
  { icon: 'flag', color: TEAL, heading: 'Passport-based exemptions', body: "Applicants who are citizens of the United Kingdom, the United States, Canada, New Zealand, or the Republic of Ireland are generally exempt from needing to sit an English test — they are taken to have met the Competent English requirement by virtue of their citizenship. This exemption is specifically defined in the relevant legislative instrument and does not extend to all English-speaking countries." },
  { icon: 'graduationcap', color: GREEN, heading: 'Study in an English-speaking country', body: "For some visa subclasses, completing a specified period of study (typically at least 5 years at secondary or higher level) in English in a recognised English-speaking country may satisfy the English requirement. The specific rules vary by visa — check the criteria for the visa you are applying for." },
  { icon: 'briefcase', color: AMBER, heading: 'Employer-nominated exemptions (some 186 cases)', body: "In the Direct Entry stream of the 186 visa, some applicants with exceptional qualifications or experience may satisfy a different English threshold. Labour agreement streams may also specify different English requirements. Confirm the specific threshold with a registered migration agent before lodging." },
  { icon: 'alert', color: ROSE, heading: 'OET is occupation-specific', body: "The Occupational English Test (OET) is only available to applicants in specific healthcare-related occupations. It is not accepted as an alternative to IELTS, PTE, TOEFL iBT or Cambridge for non-healthcare occupations or visa applicants outside those occupations. Confirm whether your occupation and visa accept OET before booking." },
]

/* ─── FAQ ─── */
const FAQ: FaqItem[] = [
  {
    question: "Can I use IELTS General Training instead of IELTS Academic for visa applications?",
    answer: "For most visa purposes — including skilled migration (189, 190, 491) and employer-sponsored visas (186, 482) — the IELTS Academic version is not required. Both IELTS Academic and IELTS General Training are generally accepted, as the requirement specifies IELTS rather than a specific format. However, your assessing authority may have a different preference for the skills assessment process (some require IELTS Academic). Check both the visa requirement and any assessing authority requirement before booking.",
  },
  {
    question: "My English test results expired. Do I need to resit?",
    answer: "If your English test results have expired — and the visa has not yet been decided — you will generally need to sit the test again. For points-tested skilled migration visas, English must be met at the date of invitation and again at the time of visa decision. If your results expire between these two points, a new test is required. It is important to book your next test before the current results expire rather than waiting until after expiry.",
  },
  {
    question: "I scored 7.0 overall on IELTS but one component was 6.5. Do I have Proficient English?",
    answer: "No. For Proficient English, you need to meet the threshold in every component — not just the overall score. An overall IELTS score of 7.0 with a 6.5 in any one band (Reading, Writing, Listening or Speaking) does not satisfy the Proficient English threshold. You would only satisfy Competent English (6.0 in each band) in that scenario. This is a common and costly misunderstanding — losing 10 points by misreading the threshold can significantly affect invitation prospects.",
  },
  {
    question: "Does passing the English requirement for a visa automatically satisfy the assessing authority's English requirement?",
    answer: "Not necessarily. Some assessing authorities have their own English requirements as part of the skills assessment process — separate from the visa's own English threshold. ANMAC, for example, has its own English requirements for nurses. ACS and Engineers Australia assess English as part of some application pathways. Check both the visa requirement and the assessing authority's requirement independently.",
  },
  {
    question: "Can I take the test more than once if I don't meet the threshold?",
    answer: "Yes. All approved English tests can be taken multiple times. There is no rule preventing applicants from retaking the test after an unsuccessful attempt, though some testing bodies impose a minimum waiting period between attempts. Your most recent valid test results are generally the ones used for visa assessment purposes. If your previous test results are still valid, submitting multiple sets of results may be possible — confirm with a migration agent how multiple results are assessed for your specific visa.",
  },
  {
    question: "Is Cambridge C1 Advanced accepted for all visa types?",
    answer: "Cambridge C1 Advanced (formerly known as Cambridge English: Advanced / CAE) was added to the list of approved English tests for Australian visa purposes and is generally accepted for the same visas as IELTS and PTE Academic. However, you should confirm that the specific visa and the specific stream you are applying for accepts Cambridge C1 Advanced — some legislative instruments were written before Cambridge was added and may have been updated. Check the current approved test list on the Department of Home Affairs website.",
  },
]

const RELATED: RelatedPage[] = [
  { title: 'Points Test Explained',     desc: 'How Proficient and Superior English add points to your EOI.',   icon: 'hash',      page: 'points-test' },
  { title: 'Skills Assessment',         desc: 'Some assessing authorities also have English requirements.',     icon: 'check',     page: 'skills-assessment' },
  { title: 'Student Visa (500)',         desc: 'English requirements for student visa applications.',            icon: 'graduationcap', page: 'student-visa-500' },
  { title: '186 Skill Requirements',    desc: 'English requirements for the Employer Nomination Scheme.',       icon: 'briefcase', page: '186-skill-requirements' },
]

export default function EnglishRequirementsPage({ navigate }: { navigate: (page: string) => void }) {
  React.useEffect(() => {
    document.title = PAGE_META['english-requirements'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#fff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Skilled Migration', url: 'https://www.nanakmigration.com.au/skilled-migration' },
          { name: 'English Requirements', url: 'https://www.nanakmigration.com.au/english-requirements' },
        ]}
        faqs={FAQ}
        service={{ name: 'English Requirements for Australian Visas', description: PAGE_META['english-requirements'].metaDescription, url: 'https://www.nanakmigration.com.au/english-requirements' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <Breadcrumbs navigate={navigate} items={[
        { label: 'Home', page: 'home' },
        { label: 'Skilled Migration', page: 'skilled-migration' },
        { label: 'English Requirements' },
      ]} />

      <PageHero
        variant="standard"
        eyebrow="Skilled Migration · All Visa Types"
        title={<>English<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Requirements</em></>}
        deck="The English proficiency levels used across Australian visas, the approved test scores that generally meet each level, and how English affects your points score for skilled migration."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Get advice on English requirements', page: 'book-consultation' }}
        accent={AMBER}
        navigate={navigate}
        footnote="General information only. English thresholds are set by legislative instrument and subject to change — verify current scores with the Department of Home Affairs or MARN 2619467."
      />
      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            Most skilled and employer-sponsored visas require applicants to demonstrate English language proficiency through an approved test such as IELTS, PTE Academic, TOEFL iBT, Cambridge C1 Advanced, or OET, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. The minimum score required varies by visa subclass — the subclass 482 Skills in Demand visa generally requires a minimum IELTS overall of 5.0, while the subclass 186 permanent visa typically requires 6.0 overall with no band below 5.0. Certain exemptions apply, including for passport holders from specified English-speaking countries.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>


      <div style={{ maxWidth: 1260, margin: '0 auto', padding: '48px 32px 0', display: 'flex', gap: 48 }}>
        <OnThisPageNav sections={TOC} accent={AMBER} />
        <div style={{ flex: 1 }} />
      </div>

      <div id="key-facts">
        <KeyFactsStrip facts={KEY_FACTS} accent={AMBER} />
      </div>

      {/* English levels table */}
      <section id="levels" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <SectionHeading
            kicker="Test Score Guide"
            title="English Levels and Indicative Test Scores"
            intro="The five English proficiency levels used in Australian migration law, and the test scores that generally meet each level. Scores must be met in every component — not just the overall score."
            accent={AMBER}
          />
          <div style={{ marginBottom: 24 }}>
            <Callout variant="warning">
              <strong>These scores are indicative only.</strong> English thresholds are set by legislative instrument and are subject to change by the Department of Home Affairs. Scores shown are general guides — always verify the current required scores on the Department of Home Affairs website or the relevant visa's legislative instrument before relying on them for a visa application.
            </Callout>
          </div>
          <ComparisonTable
            columns={LEVEL_COLUMNS}
            rows={LEVEL_ROWS}
            accent={AMBER}
            caption="OET is generally only available to health-related occupation applicants. Scores shown are general guides — confirm the current scores set by legislative instrument."
          />
        </div>
      </section>

      {/* Which visa needs which level */}
      <section id="which-visa" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <SectionHeading
            kicker="By Visa"
            title="Which Visa Generally Needs Which Level"
            intro="A general guide to the English level typically required for common visa subclasses. Requirements are set by legislative instrument and are subject to change — confirm for your specific visa."
            accent={AMBER}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 16 }}>
            {VISA_LEVELS.map(group => (
              <div key={group.level} style={{ border: `1.5px solid ${BORDER}`, borderRadius: 14, overflow: 'hidden' }}>
                <div style={{ background: `rgba(27,43,94,0.08)`, borderBottom: `1px solid rgba(27,43,94,0.12)`, padding: '12px 20px' }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, letterSpacing: '0.02em' }}>{group.level}</div>
                </div>
                <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                  {group.visas.map((v, i) => (
                    <div key={v.code} style={{ padding: '14px 18px', borderBottom: i < group.visas.length - (group.visas.length % 2 === 0 ? 2 : 1) ? `1px solid ${BORDER}` : 'none', borderRight: i % 2 === 0 ? `1px solid ${BORDER}` : 'none' }}>
                      <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 4 }}>
                        <span style={{ fontSize: 12, fontWeight: 700, color: NAVY, background: `rgba(27,43,94,0.07)`, padding: '2px 8px', borderRadius: 100 }}>{v.code}</span>
                        <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{v.name}</span>
                      </div>
                      <p style={{ margin: 0, fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{v.note}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p style={{ fontSize: 13, color: '#9ca3af', marginTop: 16, textAlign: 'center', lineHeight: 1.7 }}>
            General guide only. Requirements are set by legislative instrument and subject to change. Confirm the current English requirement for your specific visa on the Department of Home Affairs website.
          </p>
        </div>
      </section>

      {/* Exemptions */}
      <section id="exemptions" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Exemptions"
            title="Exemptions and Passport-Based Exceptions"
            intro="Some applicants are exempt from providing English test results — but exemptions are narrowly defined and visa-specific. Do not assume an exemption applies without checking."
            accent={AMBER}
          />
          <div style={{ display: 'flex', flexDirection: 'column' as const, gap: 12 }}>
            {EXEMPTIONS.map((e, i) => (
              <div key={i} style={{ display: 'flex', gap: 14, alignItems: 'flex-start', background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '16px 18px' }}>
                <div style={{ width: 30, height: 30, borderRadius: 9, background: `rgba(27,43,94,0.08)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={e.icon} size={14} color={NAVY} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 4 }}>{e.heading}</div>
                  <p style={{ margin: 0, fontSize: 14.5, color: '#374151', lineHeight: 1.75 }}>{e.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Test validity and booking */}
      <section id="validity" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <SectionHeading
            kicker="Practical Considerations"
            title="Test Validity Periods and Booking"
            accent={AMBER}
          />
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 14 }}>
            {[
              { icon: 'clock', color: AMBER, heading: 'Most tests are valid for 3 years', body: "IELTS, PTE Academic, TOEFL iBT, and Cambridge C1 Advanced results are generally accepted for 3 years from the date of the test. OET results are generally accepted for 2 years. Some assessing authorities apply a shorter validity period — check with your authority." },
              { icon: 'alert', color: ROSE, heading: "Validity runs from the test date, not the results date", body: "The 3-year validity period is calculated from the date you sat the test, not the date you received your results. If you are cutting it close to the expiry date when you receive an invitation, you may have less time than you expect." },
              { icon: 'check', color: GREEN, heading: 'Book early — test centres have limited availability', body: "Test dates at major centres can fill up weeks or months in advance, particularly for IELTS Academic in major cities. If your current test results are approaching expiry, book a new test well before they expire — not after." },
              { icon: 'hash', color: TEAL, heading: 'You can take the test multiple times', body: "There is no limit on how many times you can sit an approved English test (though testing bodies may impose minimum waiting periods between attempts). Most visa applications will consider your most recent valid test results." },
            ].map(card => (
              <div key={card.heading} style={{ background: '#fff', border: `1.5px solid ${BORDER}`, borderRadius: 14, padding: '20px 18px', boxShadow: '0 2px 8px rgba(27,43,94,0.04)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'flex-start', marginBottom: 10 }}>
                  <div style={{ width: 28, height: 28, borderRadius: 8, background: `rgba(27,43,94,0.07)`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Icon name={card.icon} size={13} color={NAVY} />
                  </div>
                  <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>{card.heading}</div>
                </div>
                <p style={{ margin: 0, fontSize: 14, color: '#374151', lineHeight: 1.7 }}>{card.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Points for English */}
      <section id="points" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading
            kicker="Points-Tested Visas"
            title="English Points for Skilled Migration"
            intro="For the subclass 189, 190 and 491 visas, English proficiency above the Competent level adds points to your EOI score in SkillSelect."
            accent={AMBER}
          />
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12, marginBottom: 24 }}>
            {[
              { level: 'Competent English', score: 'IELTS 6.0 in each band (generally)', points: 0, color: '#6b7280', note: 'Minimum required — earns no additional points.' },
              { level: 'Proficient English', score: 'IELTS 7.0 in each band (generally)', points: 10, color: GREEN, note: 'Adds 10 points to your EOI score.' },
              { level: 'Superior English',   score: 'IELTS 8.0 in each band (generally)', points: 20, color: TEAL, note: 'Adds 20 points — the maximum for English.' },
            ].map(item => (
              <div key={item.level} style={{ background: `rgba(27,43,94,0.04)`, border: `1.5px solid rgba(27,43,94,0.12)`, borderRadius: 14, padding: '20px 16px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 800, color: NAVY, lineHeight: 1, marginBottom: 4 }}>
                  {item.points > 0 ? `+${item.points}` : '0'}
                </div>
                <div style={{ fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>points</div>
                <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 6 }}>{item.level}</div>
                <div style={{ fontSize: 12.5, color: '#6b7280', lineHeight: 1.6 }}>{item.score}</div>
                <div style={{ fontSize: 12.5, color: '#374151', marginTop: 8, lineHeight: 1.6 }}>{item.note}</div>
              </div>
            ))}
          </div>
          <Callout variant="note">
            English points are only one of many categories in the points test. For a full breakdown of all points categories and an indicative calculator, see the{' '}
            <button onClick={() => navigate('points-test')} style={{ background: 'none', border: 'none', color: AMBER, fontWeight: 600, cursor: 'pointer', padding: 0, fontFamily: 'inherit', fontSize: 'inherit', textDecoration: 'underline' }}>
              Points Test Explained
            </button>
            {' '}page.
          </Callout>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" style={{ background: GREY_BG, padding: '80px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <SectionHeading kicker="Questions" title="Frequently Asked Questions" accent={AMBER} />
          <FaqAccordion items={FAQ} accent={AMBER} />
        </div>
      </section>

      {/* Related */}
      <section id="related" style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Also useful" title="Related Pages" accent={AMBER} />
          <RelatedPages pages={RELATED} navigate={navigate} columns={2} />
        </div>
      </section>

      <CtaBand
        title={<>Unsure which English level<br /><em style={{ fontStyle: 'italic', color: GOLD }}>applies to your visa?</em></>}
        body="Navpreet Aulakh (MARN 2619467) can confirm the English requirement that applies to your specific visa and stream, advise on whether an exemption may apply, and review your test results against current legislative thresholds."
        primaryCta={{ label: 'Book an English requirements consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Understand your points score →', page: 'points-test' }}
        accent={AMBER}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT}
        pageNote="English test score thresholds are set by legislative instrument and are subject to change by the Department of Home Affairs. Test scores shown on this page are indicative only — always verify current required scores on the Department of Home Affairs website or with a registered migration agent. Test validity periods may differ between visa types and assessing authorities." />

      <SiteFooter navigate={navigate} />
    </div>
  )
}
