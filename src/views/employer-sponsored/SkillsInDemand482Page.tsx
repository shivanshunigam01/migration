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
import { CSIT_LABEL, SSIT_PLUS, SID_COMMENCEMENT } from '@/lib/visa-constants'

const CURRENT_AS_AT = 'October 2026'

const streams = [
  {
    key: 'specialist',
    label: 'Specialist Skills',
    color: GOLD,
    duration: 'Up to 4 years',
    salary: `${SSIT_PLUS} p.a. (SSIT)`,
    lmt: 'Yes',
    pr: 'Yes — via 186 TRT',
    occupations: ['Senior executive', 'Data scientist', 'Specialist surgeon'],
    note: 'Labour Market Testing applies to both streams unless a trade-obligation exemption applies. Specialist Skills receives processing priority.',
  },
  {
    key: 'core',
    label: 'Core Skills',
    color: CAT_EMPLOYER,
    duration: 'Up to 4 years',
    salary: `${CSIT_LABEL} (CSIT)`,
    lmt: 'Yes',
    pr: 'Yes — via 186 TRT',
    occupations: ['Accountant', 'Software engineer', 'Registered nurse'],
    note: 'Most common stream. Occupation on the Core Skills Occupation List. PR pathway via subclass 186 after 2 years.',
  },
  {
    key: 'labour',
    label: 'Labour Agreement',
    color: '#4f46e5',
    duration: 'As per agreement',
    salary: 'As per labour agreement',
    lmt: 'Varies',
    pr: 'May be available',
    occupations: ['Roles covered by an approved agreement'],
    note: 'Requires a labour agreement between the employer and the Australian Government.',
  },
]

const faqs = [
  {
    q: 'How does the 482 SID differ from the old TSS visa?',
    a: `The Skills in Demand (subclass 482) replaced the Temporary Skills Shortage (TSS) visa from ${SID_COMMENCEMENT}. Key changes include Specialist Skills, Core Skills and Labour Agreement streams (replacing the old short- and medium-term streams), updated income thresholds and clearer PR pathways. Standard Business Sponsorship still applies.`,
  },
  {
    q: 'Is Labour Market Testing (LMT) required?',
    a: `LMT is required for both the Core Skills and Specialist Skills streams unless an exemption under international trade obligations applies — the employer must demonstrate genuine recruitment efforts before nominating an overseas worker. Labour Agreement streams follow the terms of the agreement.`,
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
  { icon: 'file', title: 'Approved occupation', desc: 'For the Core Skills stream, the nominated occupation must be on the Core Skills Occupation List (CSOL). The Specialist Skills stream has no occupation list but excludes trades, machinery operator and labourer occupations. Labour Agreement occupations are set by the agreement.' },
  { icon: 'dollar', title: 'Salary threshold', desc: `Core Skills stream requires earnings at or above the CSIT (${CSIT_LABEL} from 1 July 2026). Specialist Skills stream requires the SSIT (${SSIT_PLUS} p.a.).` },
  { icon: 'user', title: 'Skills & qualifications', desc: 'Relevant qualifications, a skills assessment (for some occupations), and at least 1 year of relevant work experience in the nominated occupation or a related field.' },
  { icon: 'shield', title: 'English language', desc: 'For tests taken from 13 September 2025, at least IELTS 5.0 in each component or an equivalent score in another approved test. Exemptions apply to Canadian, New Zealand, Irish, UK and US passport holders, people with 5 years of English-medium study, and some others.' },
  { icon: 'calendar', title: 'Age under 45', desc: 'There is no age limit for the 482 visa. Age becomes relevant if you later apply for the subclass 186, where you generally must be under 45 when you apply.' },
]

const steps = [
  { num: '01', title: 'Employer obtains SBS', desc: 'Your employer applies for (or already holds) Standard Business Sponsorship with the Department of Home Affairs.' },
  { num: '02', title: 'Employer lodges nomination', desc: 'The employer nominates the position and occupation, demonstrating the role meets salary and LMT requirements.' },
  { num: '03', title: 'You apply for the visa', desc: 'Once the nomination is approved (or concurrently), you lodge the subclass 482 visa application with supporting documents.' },
  { num: '04', title: 'Visa granted — begin work', desc: 'On grant, you (and any secondary applicants) can enter Australia and commence work in the nominated occupation.' },
  { num: '05', title: 'Transition to 186 ENS (optional)', desc: 'After 2 years of full-time sponsored employment on a 482 visa (any stream), you may be nominated for permanent residence in the 186 TRT stream by the employer who last sponsored you.' },
]

const RELATED: RelatedPage[] = [
  { title: 'Employer Nomination Scheme (186)', desc: 'The permanent residence pathway for 482 Core and Specialist stream holders.', icon: 'trending', page: 'employer-nomination-scheme', color: CAT_EMPLOYER },
  { title: 'Standard Business Sponsorship', desc: 'Your employer must obtain SBS before nominating you on a 482.', icon: 'briefcase', page: 'standard-business-sponsorship', color: CAT_EMPLOYER },
  { title: 'English Requirements', desc: 'Competent English is required for most 482 applicants — see approved tests and scores.', icon: 'globe', page: 'english-requirements', color: CAT_EMPLOYER },
  { title: '482 Pathway to PR', desc: 'How to transition from the Skills in Demand visa to permanent residence.', icon: 'shield', page: '482-to-pr-pathway', color: CAT_EMPLOYER },
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
          { label: 'LMT required: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement', value: currentStream.lmt, icon: 'list', bool: true, boolVal: currentStream.lmt === 'Yes' },
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
        deck={`A temporary employer-sponsored visa for skilled workers across Specialist Skills, Core Skills and Labour Agreement streams. Commenced ${SID_COMMENCEMENT}, replacing the TSS visa.`}
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        accent={CAT_EMPLOYER}
        rightColumn={streamSelectorWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="skills-in-demand-visa">
            The Skills in Demand (subclass 482) visa lets an approved sponsor employ a skilled worker in Australia for up to four years, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. Employers need Standard Business Sponsorship and a role that fits the Core Skills Occupation List or another eligible stream. Many holders later pursue the Employer Nomination Scheme (subclass 186) via the 482 to PR pathway. See all employer-sponsored visas for the wider landscape.
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
                  { label: 'Duration', vals: streams.map((s) => s.duration) },
                  { label: 'Salary threshold', vals: streams.map((s) => s.salary) },
                  { label: 'LMT required: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement', vals: ['Yes', 'Yes', 'Varies'] },
                  { label: 'PR pathway', vals: ['Yes (186)', 'Yes (186)', 'May apply'] },
                  { label: 'Skills assessment', vals: ['Sometimes', 'Sometimes', 'Varies'] },
                  { label: 'English requirement', vals: ['Competent', 'Competent', 'Competent*'] },
                ].map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#f8fafc' : 'white', borderTop: '1px solid #e2e8f0' }}>
                    <td style={{ padding: '13px 20px', color: '#475569', fontSize: 15, fontWeight: 600 }}>{row.label}</td>
                    {row.vals.map((v, j) => {
                      const isGood = v === 'No' && row.label === 'LMT required: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement: Specialist Skills - Yes; Core Skills - Yes; Labour Agreement - As set by the agreement'
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
