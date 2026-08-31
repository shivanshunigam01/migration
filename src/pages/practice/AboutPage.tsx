import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { NAVPREET_PHOTO, MARA_BADGE, QEAC_LOGO } from '@/lib/siteAssets'
import Icon from '@/components/ui/Icon'
import { GlowButton } from '@/components/ui/GlowButton'

const GOLD = '#f5a124'
const NAVY = '#1B2B5E'
const NAVY_DARK = '#0d1632'
const HERO_GRAD = 'linear-gradient(160deg, #f5f8fd 0%, #edf2f9 30%, #e2ecf7 60%, #d8e6f4 100%)'


const TIMELINE = [
  {
    period: '2013 – 2016',
    role: 'Legal Practice — Australian Law Firm',
    org: 'Sydney, NSW',
    detail: 'Began professional career within an Australian immigration law firm, gaining direct exposure to complex visa matters, refusal cases and tribunal strategy. Worked across skilled migration, employer sponsorship and family visa streams. Developed an early understanding that most migration failures trace back to decisions made at the start of a case, not at the end.',
    color: '#6b7280',
    icon: 'scale',
  },
  {
    period: '2016 – 2019',
    role: 'Senior Migration Caseworker',
    org: 'National Migration Practice',
    detail: 'Managed a caseload spanning employer-sponsored visas (482, 186, 494), family reunification and student pathways. Led complex employer sponsorship cases for clients in healthcare, trades and IT — building the pattern recognition that now informs the practice\'s casework model. Mentored junior staff on DHA compliance and case strategy.',
    color: '#2563eb',
    icon: 'briefcase',
  },
  {
    period: '2019 – 2022',
    role: 'Registered Migration Agent',
    org: 'MARN 2619467 · Independent Practice',
    detail: 'Obtained registration as a Registered Migration Agent with the Office of the Migration Agents Registration Authority (OMARA). Established an independent practice with a focus on employer sponsorship, skilled migration and the Punjabi and Hindi-speaking diaspora communities in Victoria and Western Australia.',
    color: GOLD,
    icon: 'award',
    highlight: true,
  },
  {
    period: '2022 – Present',
    role: 'Founder — Nanak Migration Group',
    org: 'Operating alongside Nanak Accountants & Associates',
    detail: 'Founded Nanak Migration Group to bring migration and accounting under one roof — a deliberate structure for clients who need both employer sponsorship compliance and business advisory in the same firm. The practice operates from offices across Victoria, Western Australia and New South Wales, advising in English, Hindi and Punjabi.',
    color: NAVY,
    icon: 'building',
    highlight: false,
  },
]

const SERVICE_AREAS = [
  { label: 'Employer Sponsorship', icon: 'briefcase', desc: '482, 186, 494 — SBS, SAF levy, obligations and the pathway to permanence.', color: '#2563eb' },
  { label: 'Skilled Migration', icon: 'trending', desc: 'Points-tested visas — 189, 190, 491 — EOI strategy and expiry planning.', color: '#4f46e5' },
  { label: 'Partner & Family', icon: 'users', desc: '820/801, 309/100, parent visas — evidence strategy and 100-stage management.', color: '#e11d48' },
  { label: 'Student Pathways', icon: 'book', desc: '500, 485, skills assessment — the full 500 to PR sequence mapped at enrolment.', color: '#0e7490' },
  { label: 'Reviews & Complex', icon: 'scale', desc: 'ART review, visa cancellations, ministerial intervention and s48 bars.', color: '#dc2626' },
]

export default function AboutPage({ navigate }: { navigate: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>

      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <div style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}>Home</button>
          <span>›</span>
          <span style={{ color: '#1B2B5E', fontWeight: 500 }}>About the Practice</span>
        </div>
      </div>

      {/* ── HERO — two column ── */}
      <div style={{ background: HERO_GRAD, padding: '72px 32px 0', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 72, alignItems: 'end' }}>

          {/* Left — copy */}
          <div style={{ paddingBottom: 60 }}>
            {/* Entity quotable block — AEO anchor */}
            <div style={{ background: '#fff', border: `1px solid ${GOLD}30`, borderLeft: `4px solid ${GOLD}`, borderRadius: '0 12px 12px 0', padding: '18px 22px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.06)', maxWidth: 560 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>About Nanak Migration</div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Nanak Migration Group is an Australian migration practice led by <strong style={{ color: NAVY }}>Registered Migration Agent Navpreet Aulakh (MARN 2619467)</strong>, operating alongside Nanak Accountants & Associates. The firm provides regulated migration advice in English, Hindi and Punjabi, with offices across Victoria, Western Australia and New South Wales.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <img src={NAVPREET_PHOTO} alt="Navpreet Aulakh" style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: `2px solid ${GOLD}40` }} />
              <div>
                <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>Founded by</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: NAVY }}>Nanak Migration Group</div>
              </div>
            </div>

            <h1 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 'clamp(34px, 8vw, 54px)', fontWeight: 700, color: NAVY, lineHeight: 1.08, margin: '0 0 6px' }}>
              Navpreet Aulakh
            </h1>
            <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 27, fontWeight: 400, color: GOLD, margin: '0 0 20px', lineHeight: 1.3 }}>
              Founder · Registered Migration Agent
            </div>

            {/* MARN — plain HTML text near top for E-E-A-T */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${NAVY}08`, border: `1.5px solid ${NAVY}20`, borderRadius: 10, padding: '8px 16px' }}>
                <Icon name="shield" size={15} color={NAVY} />
                <span style={{ fontSize: 14, fontWeight: 700, color: NAVY }}>MARN 2619467</span>
                <span style={{ width: 1, height: 14, background: '#d1d5db' }} />
                <a href="https://www.mara.gov.au/search-the-register" target="_blank" rel="noopener noreferrer"
                  style={{ fontSize: 13, color: GOLD, fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: 4 }}>
                  Verify on OMARA register <Icon name="external" size={11} color={GOLD} />
                </a>
              </div>
            </div>

            <p style={{ fontSize: 18, color: '#374151', lineHeight: 1.75, maxWidth: 520, margin: '0 0 28px' }}>
              More than a decade working inside Australian immigration law and migration practice — first in a Sydney law firm, then building an independent practice now operating across three states. Navpreet's focus is employer sponsorship, skilled migration, and the Punjabi and Hindi-speaking diaspora communities that most practices serve only in English.
            </p>

            {/* Language and location pills */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {[
                { label: 'Consultations in English', icon: 'globe' },
                { label: 'ਪੰਜਾਬੀ ਵਿੱਚ ਸਲਾਹ', icon: 'message' },
                { label: 'हिंदी में परामर्श', icon: 'message' },
                { label: 'Victoria', icon: 'mappin' },
                { label: 'Western Australia', icon: 'mappin' },
                { label: 'New South Wales', icon: 'mappin' },
              ].map(pill => (
                <span key={pill.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: '1px solid #e0e4ef', borderRadius: 20, padding: '6px 14px', fontSize: 14, color: '#374151', boxShadow: '0 1px 4px rgba(27,43,94,0.06)' }}>
                  <Icon name={pill.icon} size={13} color={GOLD} />
                  {pill.label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12 }}>
              <GlowButton as="a" href="#contact" size="lg" variant="gold">Book a Consultation</GlowButton>
              <a href="#career" style={{ backgroundColor: 'transparent', color: NAVY, border: `2px solid ${NAVY}30`, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>Career & Experience →</a>
            </div>
          </div>

          {/* Right — photo */}
          <div style={{ position: 'relative', alignSelf: 'end', height: 520 }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `linear-gradient(135deg, ${NAVY}08 0%, ${GOLD}12 100%)`,
              borderRadius: '24px 24px 0 0',
            }} />
            <img
              className="img-cover"
              src={NAVPREET_PHOTO}
              alt="Navpreet Aulakh — Registered Migration Agent, Nanak Migration Group"
              style={{ position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)', height: '110%', maxWidth: 'none', objectFit: 'cover', objectPosition: 'top center' }}
            />
            {/* Credential card */}
            <div style={{ position: 'absolute', bottom: 32, left: -28, background: '#fff', borderRadius: 14, padding: '14px 18px', boxShadow: '0 8px 32px rgba(27,43,94,0.18)', border: `1px solid ${GOLD}30`, minWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 5 }}>Registered · OMARA</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: NAVY }}>MARN 2619467</div>
              <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>Navpreet Aulakh</div>
              <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', gap: 6 }}>
                <img className="img-contain" src={MARA_BADGE} alt="MARA Badge" style={{ height: 32, objectFit: 'contain' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── STATS BAND ── */}
      <div style={{ background: NAVY, padding: '32px' }}>
        <div className="grid-5" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 0, borderRadius: 16, overflow: 'hidden' }}>
          {[
            { num: '10+', label: 'Years in migration law & practice', icon: 'briefcase' },
            { num: '3', label: 'State offices — VIC, WA, NSW', icon: 'mappin' },
            { num: '3', label: 'Consultation languages', icon: 'globe' },
            { num: 'MARN', label: '2619467 — OMARA registered', icon: 'shield' },
            { num: 'ABN', label: '47 648 226 804 · Nanak Accountants', icon: 'hash' },
          ].map((stat, i) => (
            <div key={i} style={{ padding: '24px 20px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none', textAlign: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon name={stat.icon} size={16} color={GOLD} />
              </div>
              <div style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 23, fontWeight: 800, color: GOLD, marginBottom: 4 }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CAREER TIMELINE ── */}
      <div id="career" style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Experience</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Career & Professional History</h2>
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>From Australian law firm practice to building an independent multi-state migration group.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Timeline spine */}
            <div style={{ position: 'absolute', left: 28, top: 20, bottom: 20, width: 2, background: 'linear-gradient(180deg, #6b7280 0%, #2563eb 33%, #f5a124 66%, #1B2B5E 100%)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
              {TIMELINE.map((item, i) => (
                <div key={i} style={{ display: 'flex', gap: 28 }}>
                  {/* Dot */}
                  <div style={{ flexShrink: 0, width: 58, display: 'flex', justifyContent: 'center', paddingTop: 26 }}>
                    <div style={{ width: 20, height: 20, borderRadius: '50%', border: `3px solid ${item.color}`, background: item.highlight ? item.color : '#fff', zIndex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {item.highlight && <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#fff' }} />}
                    </div>
                  </div>

                  {/* Card */}
                  <div style={{ flex: 1, background: '#fff', border: `1.5px solid ${item.highlight ? item.color + '30' : '#e8edf6'}`, borderRadius: 16, padding: '24px 28px', marginBottom: 12, boxShadow: item.highlight ? '0 4px 24px rgba(27,43,94,0.1)' : '0 1px 6px rgba(27,43,94,0.04)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, marginBottom: 12 }}>
                      <div>
                        <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: item.color, marginBottom: 5 }}>{item.period}</div>
                        <div style={{ fontSize: 19, fontWeight: 700, color: NAVY, lineHeight: 1.2, marginBottom: 3 }}>{item.role}</div>
                        <div style={{ fontSize: 14, color: '#6b7280', fontStyle: 'italic' }}>{item.org}</div>
                      </div>
                      <div style={{ width: 40, height: 40, borderRadius: 12, background: `${item.color}12`, border: `1px solid ${item.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Icon name={item.icon} size={18} color={item.color} />
                      </div>
                    </div>
                    <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, margin: 0 }}>{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── WHY INDEPENDENT ADVICE ── */}
      <div style={{ background: NAVY, padding: '80px 32px' }}>
        <div className="grid-2" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>The Practice Philosophy</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 700, color: '#fff', margin: '0 0 20px', lineHeight: 1.2 }}>
              Migration and accounting<br />under one roof — by design.
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.8, margin: '0 0 24px' }}>
              The most common employer sponsorship failures aren't visa failures — they're compliance failures that surface months later: payroll records that don't match the nominated salary, SAF levy errors, record-keeping gaps. Operating alongside Nanak Accountants & Associates means the accounting and the migration work talk to each other from the start.
            </p>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: 16, lineHeight: 1.8, margin: 0 }}>
              For individual clients, the same logic applies. Most people who need a migration agent also have tax, business or financial questions that intersect with their visa status. Having both disciplines available — without needing a referral network — is the structural advantage of a combined practice.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { title: 'Regulated advice only', body: 'All migration advice is provided by or under the supervision of a Registered Migration Agent. No para-professional advice; no disclaimers about "general information only" when specific advice is what you need.', icon: 'shield' },
              { title: 'Law-firm-trained case strategy', body: 'Ten years of exposure to tribunal cases, refusal grounds and DHA compliance patterns before founding an independent practice. The difference shows in complex cases.', icon: 'scale' },
              { title: 'Community-first language access', body: 'Consultations in English, Hindi and Punjabi — not as a differentiator but as a baseline. Clients should be able to discuss the most consequential decisions of their immigration journey in their own language.', icon: 'globe' },
              { title: 'Employer and individual capability', body: 'Most migration firms serve either employers or individuals well. The sponsorship caseload and the skilled-individual caseload inform each other — understanding what employers look for shapes advice to candidates.', icon: 'briefcase' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, padding: '18px 20px', display: 'flex', gap: 14 }}>
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${GOLD}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                  <Icon name={item.icon} size={16} color={GOLD} />
                </div>
                <div>
                  <div style={{ fontSize: 15, fontWeight: 700, color: '#fff', marginBottom: 5 }}>{item.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.65 }}>{item.body}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICE AREAS ── */}
      <div style={{ background: '#fff', padding: '80px 32px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Practice Areas</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: 0 }}>What We Advise On</h2>
          </div>
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {SERVICE_AREAS.map((area, i) => (
              <div key={i} style={{ background: '#fafbfe', border: `1.5px solid ${area.color}20`, borderRadius: 16, padding: '22px 20px', textAlign: 'center' }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: `${area.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 14px' }}>
                  <Icon name={area.icon} size={20} color={area.color} />
                </div>
                <div style={{ fontSize: 15, fontWeight: 700, color: NAVY, marginBottom: 8, lineHeight: 1.3 }}>{area.label}</div>
                <div style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.6 }}>{area.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CREDENTIALS & REGISTRATION ── */}
      <div style={{ background: '#fafbfe', padding: '72px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>E-E-A-T</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Credentials & Registration</h2>
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Every person giving migration advice in Australia must be registered. Here is everything you need to verify ours.</p>
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            {/* OMARA registration card */}
            <div style={{ background: '#fff', border: `2px solid ${GOLD}25`, borderRadius: 20, padding: '28px 28px', boxShadow: '0 4px 24px rgba(27,43,94,0.08)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                <img className="img-contain" src={MARA_BADGE} alt="OMARA Registration Badge" style={{ height: 56, objectFit: 'contain' }} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: GOLD, marginBottom: 3 }}>OMARA Registered</div>
                  <div style={{ fontSize: 21, fontWeight: 800, color: NAVY }}>MARN 2619467</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 20 }}>
                {[
                  { label: 'Registered name', val: 'Navpreet Aulakh' },
                  { label: 'Registration number', val: 'MARN 2619467' },
                  { label: 'Practice', val: 'Nanak Migration Group' },
                  { label: 'Associated entity', val: 'Nanak Accountants & Associates' },
                  { label: 'ABN', val: '47 648 226 804' },
                  { label: 'Offices', val: 'VIC · WA · NSW' },
                ].map((row, i) => (
                  <div key={i} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: i < 5 ? '1px solid #f0f2f8' : 'none' }}>
                    <span style={{ fontSize: 13, color: '#6b7280', flex: '0 0 160px' }}>{row.label}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: NAVY }}>{row.val}</span>
                  </div>
                ))}
              </div>
              <a href="https://www.mara.gov.au/search-the-register" target="_blank" rel="noopener noreferrer"
                style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: NAVY, color: '#fff', padding: '12px 18px', borderRadius: 10, textDecoration: 'none', fontSize: 14, fontWeight: 700 }}>
                <Icon name="external" size={14} color="#fff" />
                Verify MARN 2619467 on the OMARA register
              </a>
            </div>

            {/* Qualifications & accreditations */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Professional Qualifications</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { item: 'Graduate Diploma in Migration Law and Practice', note: 'Registered qualification — OMARA' },
                    { item: 'Legal Practice Experience — Australian Law Firm (2013–2016)', note: 'Immigration law · tribunal strategy · complex cases' },
                    { item: 'Continuing Professional Development', note: 'Annual CPD requirement maintained' },
                    { item: 'Qualified Education Agent Counsellor (QEAC)', note: 'Student visa and education pathway advisory' },
                  ].map((q, i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: i < 3 ? '1px solid #f0f2f8' : 'none' }}>
                      <div style={{ width: 22, height: 22, borderRadius: 6, background: `${GOLD}15`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 1 }}>
                        <Icon name="check" size={11} color={GOLD} />
                      </div>
                      <div>
                        <div style={{ fontSize: 14, fontWeight: 600, color: NAVY, lineHeight: 1.3 }}>{q.item}</div>
                        <div style={{ fontSize: 12, color: '#9ca3af', marginTop: 2 }}>{q.note}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Logos & Accreditations</div>
                <div style={{ display: 'flex', gap: 20, alignItems: 'center', flexWrap: 'wrap' }}>
                  <img className="img-contain" src={MARA_BADGE} alt="MARA Registration Badge" style={{ height: 52, objectFit: 'contain' }} />
                  <img className="img-contain" src={QEAC_LOGO} alt="QEAC — Qualified Education Agent Counsellors" style={{ height: 52, objectFit: 'contain' }} />
                </div>
              </div>

              <div style={{ background: `${GOLD}08`, border: `1px solid ${GOLD}25`, borderRadius: 16, padding: '20px 22px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 8, display: 'flex', alignItems: 'center', gap: 8 }}>
                  <Icon name="shield" size={15} color={GOLD} /> Why registration matters
                </div>
                <div style={{ fontSize: 14, color: '#4b5563', lineHeight: 1.7 }}>
                  Under Australian law, only Registered Migration Agents, legal practitioners and certain exempt persons may give migration advice for a fee. Unregistered advice — however well-intentioned — is illegal and uninsured. MARN 2619467 is on the public register and carries professional indemnity insurance.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── COMMUNITY ── */}
      <div style={{ background: NAVY, padding: '64px 32px' }}>
        <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Language Access</div>
            <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 34, fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
              Migration advice in English,<br />Hindi and Punjabi
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.8, margin: '0 0 20px' }}>
              Immigration is one of the highest-stakes legal domains most people will ever navigate. Nanak Migration Group was built from the start to serve South Asian communities in their own language — not as a translation service, but because Navpreet's background is in these communities and the nuances of the cases that come from them.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['English', 'ਪੰਜਾਬੀ — Punjabi', 'हिंदी — Hindi'].map(lang => (
                <span key={lang} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '7px 16px', fontSize: 14, color: '#fff', fontWeight: 500 }}>{lang}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { q: 'Can I book a consultation in Hindi or Punjabi?', a: 'Yes — all consultations are available in English, Hindi or Punjabi. Let us know your preference when booking.' },
              { q: 'Do you advise clients overseas as well as in Australia?', a: 'Yes. We advise clients who are currently overseas on offshore partner visas, student pathways and employer sponsorship arrangements. Initial consultations happen by video call.' },
              { q: 'Do I need to be in one of your office states?', a: 'No. While offices are in VIC, WA and NSW, clients are advised across Australia and from overseas. Your migration journey does not have to start where you are standing.' },
            ].map((item, i) => (
              <div key={i} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, overflow: 'hidden' }}>
                <button onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 12, padding: '14px 18px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                  <span style={{ flex: 1, fontSize: 14, fontWeight: 600, color: '#fff', lineHeight: 1.4 }}>{item.q}</span>
                  <span style={{ width: 24, height: 24, borderRadius: '50%', background: openFaq === i ? GOLD : 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.15s' }}>
                    <Icon name={openFaq === i ? 'minus' : 'plus'} size={12} color={openFaq === i ? NAVY_DARK : '#fff'} />
                  </span>
                </button>
                {openFaq === i && (
                  <div style={{ padding: '0 18px 14px', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                    <div style={{ paddingTop: 12, fontSize: 14, color: 'rgba(255,255,255,0.6)', lineHeight: 1.7 }}>{item.a}</div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ background: `linear-gradient(135deg, ${NAVY} 0%, ${NAVY_DARK} 100%)`, padding: '72px 32px', borderTop: `4px solid ${GOLD}` }}>
        <div style={{ maxWidth: 820, margin: '0 auto', textAlign: 'center' }}>
          <img src={NAVPREET_PHOTO} alt="Navpreet Aulakh" style={{ width: 64, height: 64, borderRadius: '50%', objectFit: 'cover', objectPosition: 'top center', border: `3px solid ${GOLD}50`, marginBottom: 24 }} />
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 42, fontWeight: 700, color: '#fff', margin: '0 0 14px', lineHeight: 1.15 }}>
            Regulated advice.<br />
            <span style={{ color: GOLD }}>Real language. Real outcomes.</span>
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, lineHeight: 1.7, maxWidth: 520, margin: '0 auto 32px' }}>
            Book a consultation with Navpreet Aulakh — Registered Migration Agent MARN 2619467 — in English, Hindi or Punjabi.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <GlowButton as="a" href="#contact" size="lg" variant="gold">
              Book a Consultation
            </GlowButton>
            <GlowButton as="a" href="https://www.mara.gov.au/search-the-register" size="lg" variant="outline" target="_blank" rel="noopener noreferrer">
              <Icon name="external" size={15} color="#fff" />
              Verify MARN 2619467
            </GlowButton>
          </div>
          <div style={{ marginTop: 20, fontSize: 13, color: 'rgba(255,255,255,0.3)' }}>
            Nanak Migration Group · ABN 47 648 226 804 · www.nanakmigration.com.au
          </div>
        </div>
      </div>

      <SiteFooter navigate={navigate} />
    </div>
  )
}
