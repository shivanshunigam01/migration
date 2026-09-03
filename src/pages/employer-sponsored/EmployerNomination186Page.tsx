import React, { useState } from 'react'
import { CAT_EMPLOYER, GOLD, NAVY, NAVY_DARK, GREY_BAND } from '@/theme'
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

const GREEN = CAT_EMPLOYER


const trtChecklist = [
  { id: 'held482', label: 'Held a subclass 482 visa for 2+ years (Core or Specialist stream)' },
  { id: 'sameEmployer', label: 'With the same sponsoring employer throughout' },
  { id: 'sameOccupation', label: 'Working in the same nominated occupation' },
  { id: 'under45', label: 'Under 45 years of age at time of 186 application' },
  { id: 'english', label: 'Competent English (IELTS 6 or equivalent)' },
  { id: 'employerApproved', label: 'Employer still holds active Standard Business Sponsorship (SBS)' },
]

const faqs = [
  {
    q: 'What is the difference between TRT and Direct Entry streams?',
    a: 'The Temporary Residence Transition (TRT) stream is for applicants who have already held a subclass 482 visa (Core or Specialist) for at least two years with the same employer in the same occupation. The Direct Entry (DE) stream does not require prior 482 experience — instead it requires a positive skills assessment and at least three years of relevant skilled employment. Direct Entry typically takes longer to process due to the skills assessment requirement.',
  },
  {
    q: 'Can I change employers before I apply for the 186?',
    a: 'For the TRT stream, the two-year requirement must be with the same employer. Changing employers resets the clock — your new employer must sponsor you on a 482 and you must work for them for the required period before they can nominate you for a 186. If you have already worked 2+ years with your current employer, do not change jobs before lodging your 186. Seek advice before making any employer changes.',
  },
  {
    q: 'Are there age exemptions for the 186 visa?',
    a: 'Generally you must be under 45 at the time of visa application. There are limited exemptions: academics with a PhD from an Australian institution in certain fields, scientists and researchers with exceptional records, and certain high-value roles. Exemptions are assessed case-by-case and are not guaranteed. If you are 45 or older, get specialist advice before lodging.',
  },
  {
    q: 'Are there English language exemptions?',
    a: 'Some applicants may be exempt from the English requirement if they are a citizen of the UK, USA, Canada, New Zealand, or Ireland, or hold a passport from those countries. Additionally, applicants who have completed at least five years of full-time study where the language of instruction was English may qualify for an exemption. Your migration agent can confirm which exemption applies to you.',
  },
  {
    q: 'How long does the 186 take to process?',
    a: 'Processing times vary. TRT stream applications are typically processed in 3–6 months as the eligibility pathway is straightforward. Direct Entry applications generally take longer — often 9–18 months — because of the skills assessment process and the need to demonstrate overseas work experience. Lodging a complete application with all supporting documents at the outset is the best way to avoid delays.',
  },
  {
    q: 'What happens to my spouse and children when I get the 186?',
    a: 'The subclass 186 is a permanent residence visa. Your spouse or de facto partner and dependent children who are included as secondary applicants receive permanent residence from the day of grant. They can live, work, and study in Australia indefinitely, and are eligible to apply for Australian citizenship after meeting the residency requirements (generally four years, including one as a permanent resident).',
  },
]

const streams186 = [
  {
    key: 'trt',
    label: 'TRT',
    fullLabel: 'Temporary Residence Transition',
    color: GREEN,
    prior482: 'Required (2+ years)',
    skillsAssessment: 'Not usually required',
    processing: '3–6 months typical',
    requirements: ['482 Core or Specialist for 2+ years', 'Same employer throughout', 'Same occupation', 'Under 45, competent English'],
  },
  {
    key: 'direct',
    label: 'Direct Entry',
    fullLabel: 'Direct Entry',
    color: '#2563eb',
    prior482: 'Not required',
    skillsAssessment: 'Required — positive result',
    processing: '9–18 months typical',
    requirements: ['Positive skills assessment', '3 years relevant skilled experience', 'Under 45, competent English', 'Employer nomination still required'],
  },
  {
    key: 'labour',
    label: 'Labour Agreement',
    fullLabel: 'Labour Agreement',
    color: GOLD,
    prior482: 'Sometimes',
    skillsAssessment: 'Varies by agreement',
    processing: 'Varies',
    requirements: ['Employer must hold labour agreement', 'Agreement must provide for 186 pathway', 'Individual requirements set by agreement'],
  },
]

const eligibilityItems = [
  { icon: 'briefcase', title: 'Employer nomination', desc: 'Your employer must nominate the position via an active Standard Business Sponsorship (SBS). The nomination must be approved before or concurrently with your visa application.' },
  { icon: 'clock', title: '2 years on 482 (TRT)', desc: 'For the TRT stream, you must have held a Core or Specialist subclass 482 visa for at least two years, working with the same employer in the same occupation.' },
  { icon: 'file', title: 'Skills assessment (Direct Entry)', desc: 'Direct Entry applicants require a positive skills assessment from the relevant assessing authority and at least three years of skilled employment in the nominated occupation.' },
  { icon: 'user', title: 'Age under 45', desc: 'You must be under 45 years of age at the time of visa application. Limited exemptions exist for academics, researchers, and some specialist roles.' },
  { icon: 'shield', title: 'Competent English', desc: 'Minimum competent English (IELTS 6 overall or equivalent). Exemptions apply to citizens of certain English-speaking countries and those who studied in English.' },
  { icon: 'trending', title: 'Character and health', desc: 'All applicants must satisfy health and character requirements. Criminal history checks and medical examinations are required.' },
]

const steps = [
  { num: '01', title: 'Confirm stream eligibility', desc: 'Determine whether you qualify for TRT (via 482 history) or Direct Entry (via skills assessment). Get advice before lodging.' },
  { num: '02', title: 'Employer lodges nomination', desc: 'Your employer nominates the permanent position with the Department of Home Affairs. SBS must be current and the role must meet market salary requirements.' },
  { num: '03', title: 'Prepare supporting documents', desc: 'Gather payslips, employment contracts, skills assessment results (Direct Entry), English test results, health and character documents.' },
  { num: '04', title: 'Lodge the 186 application', desc: 'Submit the visa application online. Secondary applicants (spouse, children) are included at this stage.' },
  { num: '05', title: 'Visa granted — permanent residence', desc: 'On grant, you and any secondary applicants become Australian permanent residents with no further visa requirements.' },
]

const RELATED: RelatedPage[] = [
  { title: 'Skills in Demand (482)', desc: 'The temporary visa that leads to the 186 via the TRT stream.', icon: 'zap', page: 'skills-in-demand-482', color: GREEN },
  { title: 'Standard Business Sponsorship', desc: 'Your employer must hold SBS before nominating you for the 186.', icon: 'briefcase', page: 'standard-business-sponsorship', color: GREEN },
  { title: '186 Skill Requirements', desc: 'Occupation, skills assessment, and work experience requirements.', icon: 'check', page: '186-skill-requirements', color: GREEN },
  { title: 'English Requirements', desc: 'Competent English requirements and approved tests for the 186.', icon: 'globe', page: 'english-requirements', color: GREEN },
]

export default function EmployerNomination186Page({ navigate }: { navigate: (page: string) => void }) {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [activeStream, setActiveStream] = useState('trt')

  const totalChecked = Object.values(checkedItems).filter(Boolean).length
  const allChecked = totalChecked === trtChecklist.length
  const remaining = trtChecklist.length - totalChecked

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const currentStream = streams186.find(s => s.key === activeStream)!

  const trtChecklistWidget = (
    <div style={{
      background: '#fff',
      border: '1px solid #e8edf6',
      borderRadius: 16,
      padding: 28,
    }}>
      <div style={{ color: GOLD, fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', marginBottom: 6 }}>
        TRT ELIGIBILITY CHECKLIST
      </div>
      <p style={{ color: '#6b7280', fontSize: 14, marginBottom: 20, lineHeight: 1.6 }}>
        Tick each item that applies to you to see whether you are likely eligible for the TRT stream.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
        {trtChecklist.map((item) => {
          const checked = !!checkedItems[item.id]
          return (
            <button
              key={item.id}
              onClick={() => toggleCheck(item.id)}
              style={{
                display: 'flex', alignItems: 'flex-start', gap: 12,
                background: checked ? `${GREEN}10` : '#f8fafc',
                border: checked ? `1.5px solid ${GREEN}40` : '1.5px solid #e8edf6',
                borderRadius: 10,
                padding: '12px 14px',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'inherit',
                transition: 'all 0.15s',
              }}
            >
              <div style={{
                width: 22, height: 22, flexShrink: 0, marginTop: 1,
                borderRadius: 6,
                background: checked ? GREEN : '#e8edf6',
                border: checked ? `2px solid ${GREEN}` : '2px solid #d1d5db',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'all 0.15s',
              }}>
                {checked && <Icon name="check" size={13} color="white" />}
              </div>
              <span style={{
                fontSize: 14, lineHeight: 1.5,
                color: checked ? NAVY : '#6b7280',
              }}>
                {item.label}
              </span>
            </button>
          )
        })}
      </div>

      {/* Result indicator */}
      <div style={{
        borderRadius: 10,
        padding: '14px 18px',
        background: allChecked
          ? `${GREEN}25`
          : totalChecked === 0
            ? '#f8fafc'
            : `${GOLD}12`,
        border: allChecked
          ? `1.5px solid ${GREEN}50`
          : totalChecked === 0
            ? '1.5px solid #e8edf6'
            : `1.5px solid ${GOLD}40`,
        display: 'flex', alignItems: 'center', gap: 12,
      }}>
        <div style={{
          width: 36, height: 36, borderRadius: 10, flexShrink: 0,
          background: allChecked ? GREEN : totalChecked === 0 ? '#e8edf6' : `${GOLD}20`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Icon
            name={allChecked ? 'check' : totalChecked === 0 ? 'list' : 'alert'}
            size={18}
            color={allChecked ? 'white' : totalChecked === 0 ? '#9ca3af' : GOLD}
          />
        </div>
        <div>
          <div style={{
            fontWeight: 700, fontSize: 15,
            color: allChecked ? GREEN : totalChecked === 0 ? '#9ca3af' : GOLD,
          }}>
            {allChecked
              ? 'Likely eligible for TRT'
              : totalChecked === 0
                ? 'Tick items above to check'
                : `${remaining} item${remaining !== 1 ? 's' : ''} remaining`}
          </div>
          <div style={{ fontSize: 13, color: '#9ca3af', marginTop: 2 }}>
            {allChecked
              ? 'Seek confirmation from a registered migration agent.'
              : totalChecked === 0
                ? 'This tool gives a general indication only.'
                : `${totalChecked} of ${trtChecklist.length} criteria met so far.`}
          </div>
        </div>
      </div>
    </div>
  )

  const faqItems: FaqItem[] = faqs.map(f => ({ question: f.q, answer: f.a }))

  React.useEffect(() => {
    document.title = PAGE_META['employer-nomination-scheme'].title
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#f8fafc', minHeight: '100vh' }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Employer Sponsored Visas', url: 'https://www.nanakmigration.com.au/employer-sponsored-visas' },
          { name: 'Employer Nomination Scheme (186)', url: 'https://www.nanakmigration.com.au/employer-nomination-scheme' },
        ]}
        faqs={faqs.map(f => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Employer Nomination Scheme (186 Visa)', description: PAGE_META['employer-nomination-scheme'].metaDescription, url: 'https://www.nanakmigration.com.au/employer-nomination-scheme' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Employer Sponsored' },
          { label: 'Employer Nomination (186)' },
        ]}
        navigate={navigate}
      />

      <PageHero
        variant="flagship"
        eyebrow="Employer Sponsored · Permanent"
        title={<>Employer Nomination Scheme<br /><em style={{ fontStyle: 'italic', color: GOLD }}>Subclass 186</em></>}
        deck="A permanent residence visa for skilled workers sponsored by an approved Australian employer, granted across three streams: TRT, Direct Entry, and Labour Agreement."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Book Free Consultation', page: 'book-consultation' }}
        accent={GREEN}
        rightColumn={trtChecklistWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox>
            The Employer Nomination Scheme (subclass 186) visa is a permanent residence visa for skilled workers nominated by an approved Australian employer, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. It has three streams: Temporary Residence Transition (TRT), Direct Entry, and Labour Agreement. In most cases, applicants must be under 45 years of age and meet competent English requirements, though limited exemptions apply.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* Eligibility Requirements — white background */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Requirements" title="Eligibility Requirements" accent={GREEN} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            Core requirements across all three 186 streams. Additional stream-specific criteria apply.
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

      {/* Application Pathway — GREY_BAND background */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Application" title="Application Pathway" accent={GREEN} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36, lineHeight: 1.7 }}>
            From confirming your stream to receiving permanent residence.
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

      {/* Stream Comparison — white background */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Streams" title="Stream Comparison" accent={GREEN} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 32 }}>
            Select a stream to explore its specific requirements and typical processing time.
          </p>

          {/* Stream tabs */}
          <div style={{ display: 'flex', gap: 10, marginBottom: 24 }}>
            {streams186.map(s => (
              <button
                key={s.key}
                onClick={() => setActiveStream(s.key)}
                style={{
                  padding: '10px 22px',
                  borderRadius: 10,
                  border: activeStream === s.key ? `2px solid ${s.color}` : '2px solid #e2e8f0',
                  background: activeStream === s.key ? `${s.color}12` : 'white',
                  color: activeStream === s.key ? s.color : '#64748b',
                  fontWeight: 700, fontSize: 14, cursor: 'pointer',
                  fontFamily: 'inherit', transition: 'all 0.15s',
                }}
              >
                {s.label}
              </button>
            ))}
          </div>

          <div style={{
            background: 'white', border: '1px solid #e2e8f0',
            borderRadius: 14, padding: 32,
            boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
          }}>
            <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'start' }}>
              <div>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  background: `${currentStream.color}14`,
                  border: `1px solid ${currentStream.color}40`,
                  borderRadius: 8, padding: '4px 12px', marginBottom: 14,
                }}>
                  <span style={{ color: currentStream.color, fontSize: 13, fontWeight: 700 }}>{currentStream.fullLabel}</span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { label: 'Prior 482 required', value: currentStream.prior482, icon: 'refresh' },
                    { label: 'Skills assessment', value: currentStream.skillsAssessment, icon: 'file' },
                    { label: 'Typical processing', value: currentStream.processing, icon: 'clock' },
                  ].map((row, i) => (
                    <div key={i} style={{
                      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                      padding: '10px 14px',
                      background: '#f8fafc',
                      borderRadius: 8,
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, color: '#64748b', fontSize: 14 }}>
                        <Icon name={row.icon} size={14} color="#94a3b8" />
                        {row.label}
                      </div>
                      <span style={{ fontSize: 14, fontWeight: 600, color: NAVY_DARK }}>{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <div style={{ color: '#94a3b8', fontSize: 12, fontWeight: 700, letterSpacing: '0.06em', marginBottom: 12 }}>
                  KEY REQUIREMENTS
                </div>
                {currentStream.requirements.map((req, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 10 }}>
                    <div style={{
                      width: 22, height: 22, borderRadius: 6, flexShrink: 0,
                      background: `${currentStream.color}20`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 1,
                    }}>
                      <Icon name="check" size={12} color={currentStream.color} />
                    </div>
                    <span style={{ color: '#475569', fontSize: 15, lineHeight: 1.55 }}>{req}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — GREY_BAND background */}
      <section style={{ background: GREY_BAND, padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" accent={GREEN} />
          <p style={{ color: '#64748b', fontSize: 16, marginBottom: 36 }}>
            Common questions about the subclass 186 Employer Nomination Scheme.
          </p>
          <FaqAccordion items={faqItems} accent={GREEN} />
        </div>
      </section>

      {/* Related Pages — white background */}
      <section style={{ background: '#ffffff', padding: '64px 24px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <SectionHeading kicker="Related" title="Related Topics" accent={GREEN} />
          <div style={{ marginTop: 32 }}>
            <RelatedPages pages={RELATED} navigate={navigate} />
          </div>
        </div>
      </section>

      <CtaBand
        title={<>Ready to make Australia <em style={{ fontStyle: 'italic', color: GOLD }}>your permanent home?</em></>}
        body="Our registered migration agents will assess your eligibility, guide your employer through the nomination, and build a complete 186 application. Navpreet Aulakh — MARN 2619467."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Skills in Demand (482) →', page: 'skills-in-demand-482' }}
        accent={GREEN}
        footnote="MARA-registered · MARN 2619467 · Permanent residence from day of grant"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
