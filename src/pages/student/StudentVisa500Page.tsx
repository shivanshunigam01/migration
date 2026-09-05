import React, { useState } from 'react'
import { GOLD, NAVY, NAVY_DARK, CAT_STUDENT, GREY_BAND } from '@/theme'
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

const AMBER = CAT_STUDENT
const ACCENT = AMBER


const STATS = [
  { label: 'Work rights (semester)', value: '48 hrs/fn', icon: 'briefcase', desc: 'per fortnight during semester' },
  { label: 'Health cover', value: 'OSHC req.', icon: 'shield', desc: 'for full visa duration' },
  { label: 'Provider requirement', value: 'CRICOS', icon: 'file', desc: 'registered education provider' },
  { label: 'Graduate pathway', value: '500→485', icon: 'trending', desc: 'for degree-level graduates' },
]

const GTE_QUESTIONS = [
  { q: 'Do you have strong ties to your home country (family, job, property, assets)?' },
  { q: 'Are you studying a course that is relevant to your current or planned career?' },
  { q: 'Do you have sufficient funds documented to cover tuition and living costs?' },
  { q: 'Do you have no prior visa refusals from Australia or similar countries?' },
  { q: 'Do you have no history of overstaying a visa in any country?' },
]

const FAQS = [
  {
    q: 'What is the Genuine Student (GS) requirement?',
    a: "The Genuine Student (GS) requirement was introduced on 23 March 2024, replacing the former Genuine Temporary Entrant (GTE) test. The GS requirement is applied by the Department of Home Affairs to assess whether you genuinely intend to study in Australia. It is not a single document — it is an overall assessment of your circumstances. Officers consider your ties to your home country, your immigration history, the value of the course to your future, and your personal and financial situation. A student who appears to be using study as a backdoor to permanent residence is likely to fail the GS requirement.",
  },
  {
    q: 'Can my partner or spouse work on my student visa?',
    a: "Yes. Secondary visa holders (your spouse or de facto partner, and dependent children over 18) who are included in your student visa application receive work rights. For partners, work rights generally mirror your own — 48 hours per fortnight during semester and unlimited during scheduled breaks. This is subject to the education level of your course; partners of students in masters or doctoral programs may receive unlimited work rights.",
  },
  {
    q: 'Can I change my course or education provider?',
    a: "Yes, but there are rules. If you want to transfer to a different education provider within the first six months of your principal course, you generally need a letter of release from your current provider or a valid reason for transfer. After six months, you can generally transfer without a release. Changing courses significantly from what was assessed on your visa may trigger a GTE reassessment. Always check with your provider and a registered migration agent before switching.",
  },
  {
    q: 'Can I work full time on a student visa?',
    a: "No. During semester, you are limited to 48 hours per fortnight (approximately 24 hours per week). During scheduled course breaks — such as semester breaks or holiday periods published in your academic calendar — there is no cap and you can work unlimited hours. Working more than 48 hours during semester is a condition breach and can result in visa cancellation, even if unintentional.",
  },
  {
    q: 'How does Overseas Student Health Cover (OSHC) work?',
    a: "OSHC is mandatory health insurance for international students studying in Australia on a student visa. You must purchase OSHC before your visa is granted and maintain it for the full duration of your visa. It covers doctor visits, hospital treatment, ambulance, and some pharmaceuticals. Your education provider will usually require evidence of OSHC before enrolment. Approved OSHC providers include Allianz, Medibank, Bupa, and others registered with the government.",
  },
  {
    q: 'Is the Student 500 a pathway to permanent residence?',
    a: "Indirectly, yes. The Student 500 is a temporary visa and does not directly lead to permanent residence. However, completing a bachelor degree or higher at an Australian institution makes you eligible for the Temporary Graduate visa (subclass 485), which in turn gives you Australian work experience. That experience can then be used to qualify for skilled migration pathways such as the Skilled Independent (189), Employer Sponsored (482/186), or state-nominated (190/491) visas. The 500 → 485 → skilled migration route is the most common pathway.",
  },
]

const STREAMS = [
  { name: 'Higher Education', desc: 'Bachelor, graduate certificate, graduate diploma, masters, doctoral degrees at universities.' },
  { name: 'Vocational Education & Training', desc: 'Certificate, diploma and advanced diploma courses at TAFE or registered private providers.' },
  { name: 'Schools', desc: 'Primary and secondary school enrolments (subclass 500 covers school-age students).' },
  { name: 'ELICOS', desc: 'English Language Intensive Courses for Overseas Students — English language programs.' },
  { name: 'Non-Award', desc: 'Non-award studies — exchange, audit, or foundation programs not leading to a formal qualification.' },
  { name: 'Foreign Affairs / Defence', desc: 'Sponsored by the Australian Government through DFAT or the Department of Defence.' },
]

const REFUSAL_REASONS = [
  { icon: 'alert', color: '#dc2626', label: 'GS failure', desc: 'Case officer not satisfied you meet the Genuine Student (GS) requirement.' },
  { icon: 'dollar', color: AMBER, label: 'Insufficient funds', desc: 'Cannot demonstrate enough funds for tuition and living expenses.' },
  { icon: 'globe', color: '#4f46e5', label: 'English level', desc: 'IELTS or equivalent score does not meet the required threshold.' },
  { icon: 'shield', color: '#2563eb', label: 'Missing OSHC', desc: 'No evidence of Overseas Student Health Cover provided.' },
  { icon: 'file', color: '#64748b', label: 'Prior visa issues', desc: 'History of visa refusals, overstays, or condition breaches.' },
]

const RELATED: RelatedPage[] = [
  { title: 'Temporary Graduate (485)', desc: 'The post-study work visa for degree-level graduates — the next step after subclass 500.', icon: 'trending', page: 'temporary-graduate-485', color: ACCENT },
  { title: 'Genuine Student Requirement', desc: 'How the GS requirement works and how to build a strong case.', icon: 'check', page: 'genuine-student-requirement', color: ACCENT },
  { title: 'English Requirements', desc: 'English language requirements for student visa applicants.', icon: 'globe', page: 'english-requirements', color: ACCENT },
  { title: 'Student to PR Pathways', desc: 'From subclass 500 to permanent residence — the common routes.', icon: 'shield', page: 'student-to-pr', color: ACCENT },
]

export default function StudentVisa500Page({ navigate }: { navigate: (page: string) => void }) {
  const [gteAnswers, setGteAnswers] = useState<Record<number, boolean | null>>({})

  const answeredCount = Object.values(gteAnswers).filter((v) => v !== null).length
  const yesCount = Object.values(gteAnswers).filter((v) => v === true).length
  const allAnswered = answeredCount === GTE_QUESTIONS.length

  const gteResult = allAnswered
    ? yesCount === 5
      ? { label: 'GTE looks strong', color: '#f5a124', bg: 'rgba(245,161,36,0.08)', border: 'rgba(245,161,36,0.4)', icon: 'check' }
      : yesCount >= 3
      ? { label: 'Some risk factors — get advice', color: '#f5a124', bg: 'rgba(245,161,36,0.08)', border: 'rgba(245,161,36,0.5)', icon: 'alert' }
      : { label: 'High GTE risk — professional advice essential', color: '#dc2626', bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.4)', icon: 'x' }
    : null

  function toggleAnswer(i: number, val: boolean) {
    setGteAnswers((prev) => ({ ...prev, [i]: prev[i] === val ? null : val }))
  }

  const gsWidget = (
    <div id="gte" style={{
      background: '#fff',
      border: '1px solid #e8edf6', borderRadius: 16, padding: 28,
    }}>
      <h3 style={{ fontFamily: "'Gilroy', sans-serif", color: NAVY, fontSize: 19, margin: '0 0 6px' }}>
        GS Self-Assessment
      </h3>
      <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 20px', lineHeight: 1.5 }}>
        Answer honestly — this mirrors how a case officer assesses your application.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 20 }}>
        {GTE_QUESTIONS.map((item, i) => (
          <div key={i} style={{
            background: '#f8fafc', borderRadius: 10,
            border: '1px solid #e8edf6', padding: '12px 14px',
          }}>
            <p style={{ color: NAVY, fontSize: 14, margin: '0 0 10px', lineHeight: 1.5 }}>{item.q}</p>
            <div style={{ display: 'flex', gap: 8 }}>
              <button
                onClick={() => toggleAnswer(i, true)}
                style={{
                  flex: 1, padding: '6px 0', borderRadius: 6, border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
                  background: gteAnswers[i] === true ? '#f5a124' : '#e8edf6',
                  color: gteAnswers[i] === true ? 'white' : '#6b7280',
                  transition: 'background 0.15s',
                }}
              >
                Yes
              </button>
              <button
                onClick={() => toggleAnswer(i, false)}
                style={{
                  flex: 1, padding: '6px 0', borderRadius: 6, border: 'none', cursor: 'pointer',
                  fontFamily: 'inherit', fontSize: 13, fontWeight: 600,
                  background: gteAnswers[i] === false ? '#dc2626' : '#e8edf6',
                  color: gteAnswers[i] === false ? 'white' : '#6b7280',
                  transition: 'background 0.15s',
                }}
              >
                No
              </button>
            </div>
          </div>
        ))}
      </div>

      {gteResult ? (
        <div style={{
          background: gteResult.bg, border: `1.5px solid ${gteResult.border}`,
          borderRadius: 10, padding: '14px 16px',
          display: 'flex', alignItems: 'flex-start', gap: 10,
        }}>
          <Icon name={gteResult.icon} size={18} color={gteResult.color} />
          <span style={{ color: gteResult.color, fontSize: 15, fontWeight: 700, lineHeight: 1.4 }}>
            {gteResult.label}
          </span>
        </div>
      ) : (
        <div style={{
          background: '#f8fafc', border: '1px solid #e8edf6',
          borderRadius: 10, padding: '12px 16px', textAlign: 'center',
          color: '#9ca3af', fontSize: 14,
        }}>
          Answer all {GTE_QUESTIONS.length} questions to see your assessment
          {answeredCount > 0 && ` (${answeredCount}/${GTE_QUESTIONS.length})`}
        </div>
      )}
    </div>
  )

  const faqItems: FaqItem[] = FAQS.map(f => ({ question: f.q, answer: f.a }))
  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#f4f6fb', minHeight: '100vh', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Student Visas', url: 'https://www.nanakmigration.com.au/student-visas' },
          { name: 'Student Visa (500)', url: 'https://www.nanakmigration.com.au/student-visa-500' },
        ]}
        faqs={FAQS.map((f: { q: string; a: string }) => ({ question: f.q, answer: f.a }))}
        service={{ name: 'Student Visa (Subclass 500)', description: PAGE_META['student-visa-500'].metaDescription, url: 'https://www.nanakmigration.com.au/student-visa-500' }}
      
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <Breadcrumbs
        items={[
          { label: 'Home', page: 'home' },
          { label: 'Student' },
          { label: 'Student Visa (500)' },
        ]}
        navigate={navigate}
      />

      <PageHero
        variant="flagship"
        eyebrow="Student Visas · Subclass 500"
        title={<>Student Visa{' '}<em style={{ fontStyle: 'italic', color: GOLD }}>500</em><br />Complete Guide</>}
        deck="Everything international students need to know about the subclass 500 — eligibility, work rights, OSHC, the Genuine Student requirement, and the pathway to the 485."
        maraBadge
        currentAsAt={CURRENT_AS_AT}
        primaryCta={{ label: 'Check your GS', page: 'genuine-student-requirement' }}
        secondaryCta={{ label: 'Get advice', page: 'book-consultation' }}
        accent={ACCENT}
        rightColumn={gsWidget}
        navigate={navigate}
      />

      <section style={{ background: '#ffffff', padding: '32px 32px 0' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <AnswerBox routeKey="student-visa-500">
            The Student visa (subclass 500) lets you study full-time in Australia if you meet the Genuine Student requirement and other criteria, as Nanak Migration Group, a registered migration agent (MARN 2619467), explains. See student visas for the full program, English requirements for language evidence, and Temporary Graduate (subclass 485) plus the student to PR pathway for post-study options.
          </AnswerBox>
          <ReviewedBy />
        </div>
      </section>

      {/* Key Info */}
      <section style={{ background: '#ffffff', padding: '64px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <SectionHeading kicker="Key Information" title="Key Visa Information" accent={ACCENT} />
          <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 40, paddingLeft: 16 }}>
            Core facts every student visa applicant should understand before applying.
          </p>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {[
              { icon: 'clock', color: GOLD, title: 'Visa duration', body: 'Granted for the length of your registered course plus 2 months (up to 5 years). If your course is extended, you must apply for a new student visa.' },
              { icon: 'briefcase', color: '#2563eb', title: 'Work rights', body: '48 hours per fortnight during semester. Unlimited during scheduled course breaks. Work rights also extend to secondary holders (your partner and dependants over 18).' },
              { icon: 'shield', color: '#f5a124', title: 'OSHC requirement', body: 'Overseas Student Health Cover is mandatory for the full visa duration. You must purchase it before your visa is granted and maintain it until you leave Australia or your visa expires.' },
              { icon: 'file', color: AMBER, title: 'CRICOS provider', body: 'Your education provider must be registered on the Commonwealth Register of Institutions and Courses for Overseas Students (CRICOS). Studying at a non-CRICOS provider breaches your visa conditions.' },
              { icon: 'trending', color: '#4f46e5', title: '500 → 485 pathway', body: "After completing a bachelor's degree or higher from an Australian provider, you may be eligible for the Temporary Graduate (485) visa, giving you 2–4 years of work rights in Australia." },
              { icon: 'users', color: '#2563eb', title: 'Secondary applicants', body: 'Your spouse/partner and dependent children can be included as secondary applicants on your student visa application, allowing them to live, work, and study in Australia with you.' },
            ].map((item) => (
              <div key={item.title} style={{
                background: 'white', borderRadius: 14, padding: '24px 28px',
                border: '1px solid #e8ecf5', boxShadow: '0 2px 12px rgba(27,43,94,0.06)',
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: 10, marginBottom: 14,
                  background: `${item.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={item.icon} size={20} color={item.color} />
                </div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 8px' }}>{item.title}</h3>
                <p style={{ color: '#6b7a99', fontSize: 15, margin: 0, lineHeight: 1.65 }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education streams */}
      <section style={{ background: GREY_BAND, padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <SectionHeading kicker="Streams" title="Education Streams" accent={ACCENT} />
          <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
            The subclass 500 covers all levels of study at CRICOS-registered providers.
          </p>
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
            {STREAMS.map((stream, i) => (
              <div key={i} style={{
                background: 'white', borderRadius: 12, padding: '18px 22px',
                border: '1px solid #e8ecf5', boxShadow: '0 1px 6px rgba(27,43,94,0.04)',
                display: 'flex', gap: 12, alignItems: 'flex-start',
              }}>
                <div style={{
                  width: 8, height: 8, borderRadius: '50%', background: GOLD,
                  marginTop: 6, flexShrink: 0,
                }} />
                <div>
                  <div style={{ color: NAVY, fontWeight: 700, fontSize: 15, marginBottom: 4 }}>{stream.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: 14, lineHeight: 1.55 }}>{stream.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common refusal reasons */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <SectionHeading kicker="Refusals" title="Common Refusal Reasons" accent={ACCENT} />
          <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
            Understanding why applications fail helps you build a stronger case.
          </p>
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 14 }}>
            {REFUSAL_REASONS.map((r) => (
              <div key={r.label} style={{
                background: 'white', borderRadius: 12, padding: '20px 18px',
                border: '1px solid #e8ecf5', boxShadow: '0 1px 6px rgba(27,43,94,0.04)',
                textAlign: 'center',
              }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10, margin: '0 auto 12px',
                  background: `${r.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon name={r.icon} size={18} color={r.color} />
                </div>
                <div style={{ color: NAVY, fontWeight: 700, fontSize: 14, marginBottom: 6 }}>{r.label}</div>
                <div style={{ color: '#94a3b8', fontSize: 13, lineHeight: 1.5 }}>{r.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: GREY_BAND, padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <SectionHeading kicker="FAQ" title="Frequently Asked Questions" accent={ACCENT} />
          <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
            Common questions about the student visa 500 answered.
          </p>
          <FaqAccordion items={faqItems} accent={ACCENT} />
        </div>
      </section>

      {/* Related Pages */}
      <section style={{ background: '#ffffff', padding: '56px 32px 64px' }}>
        <div style={{ maxWidth: 1120, margin: '0 auto' }}>
          <RelatedPages pages={RELATED} navigate={navigate} />
        </div>
      </section>

      <CtaBand
        title={<>Ready to start your <em style={{ fontStyle: 'italic', color: GOLD }}>study journey?</em></>}
        body="A student visa refusal can set your plans back by months. Our registered migration agents help you build a compelling Genuine Student (GS) case, gather the right documents, and submit a clean application. Navpreet Aulakh — MARN 2619467."
        primaryCta={{ label: 'Book a free consultation', page: 'book-consultation' }}
        secondaryCta={{ label: 'Genuine Student Requirement →', page: 'genuine-student-requirement' }}
        accent={ACCENT}
        footnote="MARA-registered · MARN 2619467 · General information only"
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt={CURRENT_AS_AT} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
