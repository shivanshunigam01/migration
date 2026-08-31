import React, { useState } from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_EMPLOYER, GREY_BAND } from '@/theme'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import {
  Breadcrumbs,
  PageHero,
  SectionHeading,
  FaqAccordion,
  RelatedPages,
  CtaBand,
  ComplianceDisclaimer,
  AnswerBox,
} from '@/components/page'
import type { RelatedPage, FaqItem } from '@/components/page'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import ReviewedBy from '@/components/page/ReviewedBy'
import Icon from '@/components/ui/Icon'

const CURRENT_AS_AT = 'August 2026'


const streams = [
  {
    key: 'foundation',
    label: 'Foundation',
    color: '#4f46e5',
    duration: '2 years',
    salary: 'No specific threshold',
    lmt: 'Yes',
    pr: 'No',
    occupations: ['Meat worker', 'Aged care worker', 'Child care worker'],
    note: 'Limited occupations. No pathway to permanent residence.',
  },
  {
    key: 'core',
    label: 'Core',
    color: CAT_EMPLOYER,
    duration: '4 years',
    salary: 'TSMIT ~$73,150+',
    lmt: 'Yes',
    pr: 'Yes — via 186 TRT',
    occupations: ['Accountant', 'Software engineer', 'Registered nurse'],
    note: 'Most common stream. PR pathway via subclass 186 after 2 years.',
  },
  {
    key: 'specialist',
    label: 'Specialist',
    color: GOLD,
    duration: '4 years',
    salary: '$135,000+ earnings',
    lmt: 'No',
    pr: 'Yes — via 186 TRT',
    occupations: ['Senior executive', 'Data scientist', 'Specialist surgeon'],
    note: 'No LMT required. Fast-tracked processing for high earners.',
  },
]

const faqs = [
  {
    q: 'How does the 482 SID differ from the old TSS visa?',
    a: 'The Skills in Demand (subclass 482) replaced the Temporary Skills Shortage (TSS) visa in November 2024. Key changes include the introduction of three distinct streams (Foundation, Core, Specialist) replacing the Short-Term and Medium-Term streams, a new salary-based Specialist stream, and clearer PR pathways. The SBS (Standard Business Sponsorship) requirement remains.',
  },
  {
    q: 'Is Labour Market Testing (LMT) required?',
    a: 'LMT is required for the Core stream — the employer must demonstrate they attempted to recruit an Australian citizen or permanent resident before nominating an overseas worker. The Specialist stream is exempt from LMT due to the high salary threshold ($135,000+). The Foundation stream also requires LMT.',
  },
  {
    q: 'Can my family members come with me on a 482 visa?',
    a: 'Yes. Your spouse or de facto partner and dependent children can be included as secondary applicants. They are generally granted the same visa conditions and can work and study in Australia for the duration of your visa.',
  },
  {
    q: 'What happens if I need to change employers?',
    a: 'Your 482 visa is tied to your sponsoring employer and nominated occupation. If you change employers, your new employer must hold Standard Business Sponsorship (SBS) and lodge a new nomination for you. You may apply for a new 482 visa or seek a visa with the new nomination. Short gaps between sponsors are generally tolerated but you should get advice.',
  },
  {
    q: 'How do I transition to permanent residence (PR)?',
    a: 'The most common pathway is the subclass 186 Employer Nomination Scheme (ENS) via the Temporary Residence Transition (TRT) stream. After holding a Core or Specialist 482 visa for at least 2 years (3 years under some older TSS grants), with the same employer in the same occupation, you and your employer can apply for the 186 ENS for permanent residence.',
  },
  {
    q: 'Is there an age limit for the 482 visa?',
    a: 'Yes — applicants must generally be under 45 years of age at the time of visa application. There are limited exemptions, including for high-income earners (Specialist stream), certain academics, and some science or research roles. You should check the current exemption list on the Department of Home Affairs website.',
  },
]

const faqItems: FaqItem[] = faqs.map(f => ({ question: f.q, answer: f.a }))

const eligibilityItems = [
  { icon: 'briefcase', title: 'Employer sponsorship', desc: 'Your employer must hold or apply for Standard Business Sponsorship (SBS) before nominating you.' },
  { icon: 'file', title: 'Approved occupation', desc: 'The nominated occupation must appear on the relevant MLTSSL, STSOL, or regional occupation list for the stream.' },
  { icon: 'dollar', title: 'Salary threshold (TSMIT)', desc: 'Core stream requires earnings at or above the Temporary Skilled Migration Income Threshold (~$73,150 p.a.). Specialist stream requires $135,000+.' },
  { icon: 'user', title: 'Skills & qualifications', desc: 'Relevant qualifications, skills assessment (for some occupations), and at least 2 years of relevant work experience.' },
  { icon: 'shield', title: 'English language', desc: 'At least competent English (IELTS 6 or equivalent). Some Specialist stream high earners may be exempt.' },
  { icon: 'calendar', title: 'Age under 45', desc: 'You must be under 45 at the time of visa application. Limited exemptions apply for certain roles and streams.' },
]

const steps = [
  { num: '01', title: 'Employer obtains SBS', desc: 'Your employer applies for (or already holds) Standard Business Sponsorship with the Department of Home Affairs.' },
  { num: '02', title: 'Employer lodges nomination', desc: 'The employer nominates the position and occupation, demonstrating the role meets salary and LMT requirements.' },
  { num: '03', title: 'You apply for the visa', desc: 'Once the nomination is approved (or concurrently), you lodge the subclass 482 visa application with supporting documents.' },
  { num: '04', title: 'Visa granted — begin work', desc: 'On grant, you (and any secondary applicants) can enter Australia and commence work in the nominated occupation.' },
  { num: '05', title: 'Transition to 186 ENS (optional)', desc: 'After 2 years in the Core or Specialist stream, apply for permanent residence via the 186 TRT stream with the same employer.' },
]

const RELATED: RelatedPage[] = [
  { title: 'Employer Nomination Scheme (186)', desc: 'The permanent residence pathway for 482 Core and Specialist stream holders.', icon: 'trending', page: 'employer-nomination-186', color: CAT_EMPLOYER },
  { title: 'Standard Business Sponsorship', desc: 'Your employer must obtain SBS before nominating you on a 482.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
  { title: 'English Requirements', desc: 'Competent English is required for most 482 applicants — see approved tests and scores.', icon: 'globe', page: 'english-requirements', color: CAT_EMPLOYER },
  { title: '482 Pathway to PR', desc: 'How to transition from the Skills in Demand visa to permanent residence.', icon: 'shield', page: '482-to-pr', color: CAT_EMPLOYER },
]

export default function SkillsInDemand482Page({ navigate }: { navigate: (page: string) => void }) {
  const [activeStream, setActiveStream] = useState('core')

  const currentStream = streams.find(s => s.key === activeStream)!

  const streamSelectorWidget = (
    <div style={{
      background: '#fff',
      border: '1px solid #e8edf6',
      borderRadius: 16,
      padding: 28,
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 14 }}>
        STREAM SELECTOR
      </div>
      <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 18, lineHeight: 1.6 }}>
        Choose a stream to see its requirements at a glance.
      </p>

      {/* Stream tabs */}
      <div style={{ display: 'flex', gap: 8, marginBottom: 22 }}>
        {streams.map(s => (
          <button
            key={s.key}
            onClick={() => setActiveStream(s.key)}
            style={{
              flex: 1, padding: '8px 4px',
              borderRadius: 8,
              border: activeStream === s.key ? `2px solid ${s.color}` : '2px solid #e8edf6',
              background: activeStream === s.key ? `${s.color}12` : '#f8fafc',
              color: activeStream === s.key ? s.color : '#6b7280',
              fontWeight: 700, fontSize: 13, cursor: 'pointer',
              fontFamily: 'inherit', transition: 'all 0.15s',
            }}
          >
            {s.label}
          </button>
        ))}
      </div>

      {/* Stream detail */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {[
          { label: 'Duration', value: currentStream.duration, icon: 'clock' },
          { label: 'Salary threshold', value: currentStream.salary, icon: 'dollar' },
          { label: 'LMT required', value: currentStream.lmt, icon: 'list', bool: true, boolVal: currentStream.lmt === 'Yes' },
          { label: 'PR pathway', value: currentStream.pr, icon: 'trending' },
        ].map((row, i) => (
          <div key={i} style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '10px 14px',
            background: '#f8fafc',
            borderRadius: 8,
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#6b7280', fontSize: 14 }}>
              <Icon name={row.icon} size={14} color="#9ca3af" />
              {row.label}
            </div>
            <span style={{
              fontSize: 14, fontWeight: 600,
              color: row.bool !== undefined
                ? (row.boolVal ? '#f5a124' : '#dc2626')
                : NAVY,
            }}>
              {row.value}
            </span>
          </div>
        ))}

        <div style={{ marginTop: 6 }}>
          <div style={{ color: '#9ca3af', fontSize: 12, fontWeight: 600, letterSpacing: '0.06em', marginBottom: 8 }}>
            TYPICAL OCCUPATIONS
          </div>
          {currentStream.occupations.map((occ, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Icon name="check" size={14} color={GOLD} />
              <span style={{ color: '#374151', fontSize: 14 }}>{occ}</span>
            </div>
          ))}
        </div>

        <div style={{
          background: `${currentStream.color}10`,
          border: `1px solid ${currentStream.color}30`,
          borderRadius: 8, padding: '10px 14px',
          color: '#4b5563', fontSize: 13, lineHeight: 1.6,
        }}>
          <Icon name="info" size={13} color={currentStream.color} className="inline mr-1.5 align-middle" />
          {currentStream.note}
        </div>
      </div>
    </div>
  )

  React.useEffect(() => {
    document.title = PAGE_META['skills-in-demand-visa'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Skills in Demand (482) Visa', url: 'https://www.nanakmigration.com.au/skills-in-demand-visa' },
        ]}
        faqs={faqItems}
        service={{ name: 'Skills in Demand Visa (Subclass 482)', description: PAGE_META['skills-in-demand-visa'].metaDescription, url: 'https://www.nanakmigration.com.au/skills-in-demand-visa' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored' },
          { label: 'Skills in Demand (482)' },
        ]}
        navigate={navigate}
      />

      <PageHero
        variant="flagship"
        eyebrow="Employer Sponsored · Subclass 482"
        title={<>Skills in Demand Visa<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 482</em></>}
        deck="A temporary employer-sponsored visa for skilled workers across three streams based on salary and occupation type. Replaced the TSS visa in November 2024."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Download Guide', page: 'home' }}
        accent={CAT_EMPLOYER}
        rightColumn={streamSelectorWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Skills in Demand (subclass 482) visa is a temporary work visa that allows Australian employers to sponsor skilled overseas workers for up to four years, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It replaced the Temporary Skills Shortage (TSS) visa in November 2024 and operates across three streams: Core Skills, Specialist Skills, and Essential Skills. In most cases, sponsored workers in the Core stream can transition to permanent residence via the subclass 186 Employer Nomination Scheme after meeting the two-year work requirement.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* Eligibility — white background */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility Requirements" accent={CAT_EMPLOYER} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            All three streams share a base set of eligibility criteria. Stream-specific salary and LMT requirements apply in addition.
          </p>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {eligibilityItems.map((item, i) => (
              <div key={i} style={{
                background: 'white',
                border: '1px solid #e2e8f0',
                borderRadius: 14,
                padding: '24px 22px',
                display: 'flex', flexDirection: 'column', gap: 12,
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10,
                  background: `${NAVY}10`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={item.icon} size={22} color={NAVY} />
                </div>
                <div style={{ fontWeight: 700, color: NAVY_DARK, fontSize: 16 }}>{item.title}</div>
                <div style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65 }}>{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pathway steps — grey band */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="Application Pathway" accent={CAT_EMPLOYER} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            The 482 application involves three distinct approval stages — SBS, nomination, and the visa itself.
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ display: 'flex', gap: 24, position: 'relative', paddingBottom: i < steps.length - 1 ? 36 : 0 }}>
                {i < steps.length - 1 && (
                  <div style={{
                    position: 'absolute', left: 27, top: 52,
                    width: 2, height: 'calc(100% - 52px)',
                    background: 'linear-gradient(to bottom, #e2e8f0, transparent)',
                  }} />
                )}
                <div style={{
                  width: 56, height: 56, flexShrink: 0,
                  borderRadius: 14,
                  background: NAVY_DARK,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: GOLD, fontWeight: 800, fontSize: 15,
                  fontFamily: "'Gilroy', sans-serif",
                }}>
                  {step.num}
                </div>
                <div style={{ paddingTop: 10 }}>
                  <div style={{ fontWeight: 700, color: NAVY_DARK, fontSize: 17, marginBottom: 6 }}>{step.title}</div>
                  <div style={{ color: '#64748b', fontSize: 15, lineHeight: 1.65 }}>{step.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stream comparison — white */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Streams" title="Stream Comparison" accent={CAT_EMPLOYER} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>
            A side-by-side overview of all three 482 streams.
          </p>
          <div style={{
            background: 'white', borderRadius: 14,
            border: '1px solid #e2e8f0',
            overflow: 'hidden',
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr style={{ background: NAVY_DARK }}>
                  <th style={{ padding: '14px 20px', textAlign: 'left', color: 'rgba(255,255,255,0.6)', fontSize: 13, fontWeight: 600, letterSpacing: '0.06em' }}>CRITERION</th>
                  {streams.map(s => (
                    <th key={s.key} style={{ padding: '14px 20px', textAlign: 'center', color: s.color, fontSize: 14, fontWeight: 700 }}>{s.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { label: 'Duration', vals: ['2 years', '4 years', '4 years'] },
                  { label: 'Salary threshold', vals: ['No TSMIT', '~$73,150', '$135,000+'] },
                  { label: 'LMT required', vals: ['Yes', 'Yes', 'No'] },
                  { label: 'PR pathway', vals: ['No', 'Yes (186)', 'Yes (186)'] },
                  { label: 'Skills assessment', vals: ['Sometimes', 'Sometimes', 'Rarely'] },
                  { label: 'English requirement', vals: ['Competent', 'Competent', 'Competent*'] },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : 'white', borderTop: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '13px 20px', color: '#475569', fontSize: 15, fontWeight: 600 }}>{row.label}</td>
                    {row.vals.map((v, j) => {
                      const isGood = v === 'No' && row.label === 'LMT required'
                      const isBad = v === 'No' && row.label === 'PR pathway'
                      return (
                        <td key={j} style={{
                          padding: '13px 20px', textAlign: 'center', fontSize: 15,
                          color: isGood ? '#f5a124' : isBad ? '#dc2626' : '#1E1E2A',
                          fontWeight: isGood || isBad ? 600 : 400,
                        }}>{v}</td>
                      )
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
            <div style={{ padding: '10px 20px', background: '#f8fafc', borderTop: '1px solid #e2e8f0', color: '#94a3b8', fontSize: 13 }}>
              * Some Specialist high-earners may be exempt from English requirements. Seek advice for your specific situation.
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — grey band */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" accent={CAT_EMPLOYER} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36 }}>
            Common questions about the subclass 482 Skills in Demand visa.
          </p>
          <FaqAccordion items={faqItems} accent={CAT_EMPLOYER} />
        </div>
      </section>

      {/* Related pages — white */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title={<>Ready to start your <em style={{ fontStyle: 'italic', color: GOLD }}>482 application?</em></>}
        body="Our registered migration agents will assess your stream eligibility, guide your employer through SBS and nomination, and prepare your complete visa application. Navpreet Aulakh — MARN 2619467."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Standard Business Sponsorship →', page: 'standard-business-sponsorship' }}
        accent={CAT_EMPLOYER}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
