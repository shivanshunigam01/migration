import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'
import { NAVPREET_PHOTO, MARA_BADGE, QEAC_LOGO } from '@/lib/siteAssets'
import { CtaBand, ComplianceDisclaimer } from '@/components/page'
import Icon from '@/components/ui/Icon'
import { GlowButton } from '@/components/ui/GlowButton'

const GOLD = '#f5a124'
const NAVY = '#1B2B5E'
const NAVY_DARK = '#0d1632'
const HERO_GRAD = 'linear-gradient(160deg, #f5f8fd 0%, #edf2f9 30%, #e2ecf7 60%, #d8e6f4 100%)'
const NANAK_LOGO = '/nanak-migration-logo.png'

/* ── Founder journey steps ─────────────────────────────────────────── */
const JOURNEY_STEPS = [
  {
    icon: 'graduationcap',
    title: 'International student',
    body: "Came to Australia as an international student and completed a Master of Information Technology — gaining first-hand experience of the student visa system and the challenges that bring many clients to our door.",
  },
  {
    icon: 'hash',
    title: 'Senior accountant',
    body: "Built a career as a senior accountant in a reputed Australian accounting practice. That discipline — meticulous records, methodical file preparation, and a nose for errors before they become problems — now shapes how every migration application is prepared.",
  },
  {
    icon: 'bookopen',
    title: 'Graduate diploma in migration law',
    body: 'Completed a graduate diploma in migration law and practice — the formal qualification pathway for Registered Migration Agents in Australia under OMARA.',
  },
  {
    icon: 'scale',
    title: 'Trained on complex migration cases',
    body: 'Worked under a highly reputed migration lawyer, preparing and running complex migration matters — refusals, tribunal cases, employer compliance. Learned how difficult cases are built, argued, and where possible, won.',
  },
  {
    icon: 'building',
    title: 'Founded Nanak Migration Group',
    body: "Founded Nanak Migration Group to bring accountant's precision and lawyer-trained case strategy together — helping people pursue their Australian dreams with honestly prepared, professionally built applications. The practice advises in English, Hindi, Punjabi and Nepali.",
  },
]

/* ── Why clients choose us ─────────────────────────────────────────── */
const WHY_CARDS = [
  {
    icon: 'hash',
    title: "Accountant's precision",
    body: "Every application is prepared with the same discipline as a financial audit. Records match. Evidence is complete. Inconsistencies are identified before the Department finds them. This approach comes from building a career in a reputed accounting practice before entering migration law.",
    color: '#2563eb',
  },
  {
    icon: 'scale',
    title: 'Lawyer-trained case strategy',
    body: 'Trained working on complex migration matters under a highly reputed migration lawyer. Refusals, ART reviews, tribunal cases and employer compliance situations receive the same serious preparation as straightforward lodgements.',
    color: GOLD,
  },
  {
    icon: 'globe',
    title: 'Four languages',
    body: 'English, Hindi, Punjabi and Nepali — not as a differentiator but as a baseline. Clients should be able to discuss the most consequential decisions of their immigration journey in their own language, without relying on a family member to translate.',
    color: '#0e7490',
  },
  {
    icon: 'check',
    title: 'Straight answers',
    body: 'Registered agents cannot guarantee outcomes, and we do not. What we provide is a frank assessment of your position, a realistic view of the options available, and what preparation gives your application the best chance.',
    color: '#059669',
  },
]

/* ── Service areas ─────────────────────────────────────────────────── */
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

      {/* ── Breadcrumb ── */}
      <div className="breadcrumb-bar" style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}>Home</button>
          <span>›</span>
          <span style={{ color: NAVY, fontWeight: 500 }}>About the Practice</span>
        </div>
      </div>

      {/* ── HERO ── */}
      <div className="section-pad-mobile" style={{ background: HERO_GRAD, padding: '72px 32px 0', overflow: 'hidden' }}>
        <div className="hero-grid" style={{ maxWidth: 1200, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 420px', gap: 72, alignItems: 'end' }}>

          <div style={{ paddingBottom: 60 }}>
            <div style={{ background: '#fff', border: `1px solid ${GOLD}30`, borderLeft: `4px solid ${GOLD}`, borderRadius: '0 12px 12px 0', padding: '18px 22px', marginBottom: 32, boxShadow: '0 2px 16px rgba(27,43,94,0.06)', maxWidth: 560 }}>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 8 }}>About Nanak Migration</div>
              <p style={{ fontSize: 15, color: '#374151', lineHeight: 1.75, margin: 0 }}>
                Nanak Migration Group is an Australian migration practice led by <strong style={{ color: NAVY }}>Registered Migration Agent Navpreet Aulakh (MARN 2619467)</strong>, operating alongside Nanak Accountants & Associates. The firm provides regulated migration advice in English, Hindi, Punjabi and Nepali, with offices across Victoria, Western Australia and New South Wales.
              </p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
              <img
                src={NANAK_LOGO}
                alt="Nanak Migration Group"
                style={{ width: 52, height: 52, borderRadius: '50%', objectFit: 'contain', background: '#fff', border: `2px solid ${GOLD}40`, padding: 4 }}
              />
              <div>
                <div style={{ fontSize: 13, color: '#6b7280', fontWeight: 500 }}>Founded by</div>
                <div style={{ fontSize: 17, fontWeight: 700, color: NAVY }}>Nanak Migration Group</div>
              </div>
            </div>

            <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 'clamp(34px, 8vw, 54px)', fontWeight: 700, color: NAVY, lineHeight: 1.08, margin: '0 0 6px' }}>
              Navpreet Aulakh
            </h1>
            <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 27, fontWeight: 400, color: GOLD, margin: '0 0 20px', lineHeight: 1.3 }}>
              Founder · Registered Migration Agent
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 24 }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: `${NAVY}08`, border: `1.5px solid ${NAVY}20`, borderRadius: 10, padding: '8px 16px', flexWrap: 'wrap' }}>
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
              An accountant&apos;s precision applied to migration law. A founder who came to Australia as an international student, built a career in a reputed accounting firm, completed a graduate diploma in migration law, and trained under a highly reputed migration lawyer before founding this practice.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 32 }}>
              {[
                { label: 'English', icon: 'globe' },
                { label: 'ਪੰਜਾਬੀ — Punjabi', icon: 'globe' },
                { label: 'हिंदी — Hindi', icon: 'globe' },
                { label: 'नेपाली — Nepali', icon: 'globe' },
              ].map((pill) => (
                <span key={pill.label} style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: '#fff', border: `1.5px solid ${GOLD}40`, borderRadius: 20, padding: '6px 14px', fontSize: 14, color: NAVY, fontWeight: 600, boxShadow: '0 1px 4px rgba(27,43,94,0.06)' }}>
                  <Icon name={pill.icon} size={13} color={GOLD} />
                  {pill.label}
                </span>
              ))}
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <GlowButton
                as="a"
                href="/book-consultation"
                size="lg"
                variant="gold"
                onClick={(e) => { e.preventDefault(); navigate('book-consultation') }}
              >
                Book a Consultation
              </GlowButton>
              <a href="#journey" style={{ backgroundColor: 'transparent', color: NAVY, border: `2px solid ${NAVY}30`, padding: '14px 28px', borderRadius: 10, textDecoration: 'none', fontSize: 16, fontWeight: 600 }}>
                The founder&apos;s journey
              </a>
            </div>
          </div>

          <div style={{ position: 'relative', alignSelf: 'end', height: 520 }} className="about-hero-photo">
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
            <div className="about-hero-badge" style={{ position: 'absolute', bottom: 32, left: -28, background: '#fff', borderRadius: 14, padding: '14px 18px', boxShadow: '0 8px 32px rgba(27,43,94,0.18)', border: `1px solid ${GOLD}30`, minWidth: 200 }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: GOLD, marginBottom: 5 }}>Registered · OMARA</div>
              <div style={{ fontSize: 16, fontWeight: 800, color: NAVY }}>MARN 2619467</div>
              <div style={{ fontSize: 13, color: '#6b7280', marginTop: 2 }}>Navpreet Aulakh</div>
              <div style={{ marginTop: 8 }}>
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
            { num: '4', label: 'Consultation languages — EN, HI, PA, NE', icon: 'globe' },
            { num: '3', label: 'State offices — VIC, WA, NSW', icon: 'mappin' },
            { num: 'QEAC', label: 'Qualified Education Agent Counsellor', icon: 'graduationcap' },
            { num: 'MARN', label: '2619467 — OMARA registered', icon: 'shield' },
            { num: 'ABN', label: '47 648 226 804 · Nanak Accountants', icon: 'hash' },
          ].map((stat, i) => (
            <div key={stat.label} style={{ padding: '24px 20px', borderRight: i < 4 ? '1px solid rgba(255,255,255,0.08)' : 'none', textAlign: 'center' }}>
              <div style={{ width: 36, height: 36, borderRadius: 10, background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                <Icon name={stat.icon} size={16} color={GOLD} />
              </div>
              <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 23, fontWeight: 800, color: GOLD, marginBottom: 4 }}>{stat.num}</div>
              <div style={{ fontSize: 13, color: 'rgba(255,255,255,0.55)', lineHeight: 1.4 }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOUNDER JOURNEY ── */}
      <div id="journey" style={{ background: '#fafbfe', padding: '80px 32px' }}>
        <div style={{ maxWidth: 860, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>The founder&apos;s story</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>The founder&apos;s journey</h2>
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 520, margin: '0 auto' }}>From international student to Registered Migration Agent — the path that shapes how we prepare applications.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {JOURNEY_STEPS.map((step, i) => (
              <div key={step.title} style={{ display: 'flex', gap: 0, position: 'relative' }}>
                {i < JOURNEY_STEPS.length - 1 && (
                  <div style={{ position: 'absolute', left: 27, top: 56, bottom: -24, width: 2, background: `linear-gradient(180deg, ${GOLD}60 0%, ${GOLD}10 100%)`, zIndex: 0 }} />
                )}
                <div style={{ flexShrink: 0, width: 56, display: 'flex', justifyContent: 'center', paddingTop: 22, zIndex: 1 }}>
                  <div style={{ width: 40, height: 40, borderRadius: 12, background: i === JOURNEY_STEPS.length - 1 ? NAVY : '#fff', border: `2px solid ${i === JOURNEY_STEPS.length - 1 ? NAVY : GOLD}`, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 10px rgba(27,43,94,0.1)' }}>
                    <Icon name={step.icon} size={18} color={GOLD} />
                  </div>
                </div>
                <div style={{ flex: 1, background: '#fff', border: `1.5px solid ${i === JOURNEY_STEPS.length - 1 ? `${NAVY}20` : '#e8edf6'}`, borderRadius: 16, padding: '22px 26px', marginBottom: 24, marginLeft: 16, boxShadow: i === JOURNEY_STEPS.length - 1 ? '0 4px 24px rgba(27,43,94,0.1)' : '0 1px 6px rgba(27,43,94,0.04)' }}>
                  <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Step {i + 1}</div>
                  <div style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 19, fontWeight: 700, color: NAVY, marginBottom: 10, lineHeight: 1.25 }}>{step.title}</div>
                  <p style={{ fontSize: 15, color: '#4b5563', lineHeight: 1.75, margin: 0 }}>{step.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── WHY CLIENTS CHOOSE US ── */}
      <div style={{ background: NAVY, padding: '80px 32px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>Why clients choose us</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 700, color: '#fff', margin: '0 0 12px' }}>What we bring to every case</h2>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Four things that shape every piece of advice and every application we prepare.</p>
          </div>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 16 }}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 16, padding: '26px 28px', display: 'flex', gap: 18 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: `${GOLD}18`, border: `1px solid ${GOLD}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: 2 }}>
                  <Icon name={card.icon} size={19} color={GOLD} />
                </div>
                <div>
                  <div style={{ fontSize: 17, fontWeight: 700, color: '#fff', marginBottom: 8, fontFamily: "'Fraunces', Georgia, serif" }}>{card.title}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>{card.body}</div>
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
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: 0 }}>What We Advise On</h2>
          </div>
          <div className="grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 16 }}>
            {SERVICE_AREAS.map((area) => (
              <div key={area.label} style={{ background: '#fafbfe', border: `1.5px solid ${area.color}20`, borderRadius: 16, padding: '22px 20px', textAlign: 'center' }}>
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

      {/* ── CREDENTIALS ── */}
      <div style={{ background: '#fafbfe', padding: '72px 32px' }}>
        <div style={{ maxWidth: 900, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 10 }}>E-E-A-T</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 38, fontWeight: 700, color: NAVY, margin: '0 0 12px' }}>Credentials & Registration</h2>
            <p style={{ color: '#6b7280', fontSize: 17, maxWidth: 480, margin: '0 auto' }}>Every person giving migration advice in Australia must be registered. Here is everything you need to verify ours.</p>
          </div>

          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
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
                  <div key={row.label} style={{ display: 'flex', gap: 12, padding: '8px 0', borderBottom: i < 5 ? '1px solid #f0f2f8' : 'none' }}>
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

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={{ background: '#fff', border: '1px solid #e8edf6', borderRadius: 16, padding: '22px 24px' }}>
                <div style={{ fontSize: 14, fontWeight: 700, color: NAVY, marginBottom: 14 }}>Professional Qualifications</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {[
                    { item: 'Master of Information Technology', note: 'Australian university — completed as an international student' },
                    { item: 'Graduate Diploma in Migration Law and Practice', note: 'Registered qualification — OMARA' },
                    { item: 'Law firm training — complex migration cases', note: 'Immigration law · tribunal strategy · refusal matters' },
                    { item: 'Continuing Professional Development', note: 'Annual CPD requirement maintained' },
                    { item: 'Qualified Education Agent Counsellor (QEAC)', note: 'Student visa and education pathway advisory' },
                  ].map((q, i) => (
                    <div key={q.item} style={{ display: 'flex', gap: 10, padding: '10px 0', borderBottom: i < 4 ? '1px solid #f0f2f8' : 'none' }}>
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

      {/* ── LANGUAGE ACCESS ── */}
      <div style={{ background: NAVY, padding: '64px 32px' }}>
        <div className="grid-2" style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <div>
            <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>Language Access</div>
            <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: 34, fontWeight: 700, color: '#fff', margin: '0 0 16px', lineHeight: 1.2 }}>
              Migration advice in English,<br />Hindi, Punjabi and Nepali
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: 16, lineHeight: 1.8, margin: '0 0 20px' }}>
              Immigration is one of the highest-stakes legal decisions most people will ever make. Nanak Migration Group was founded by someone who navigated Australia as an international student and understands — from personal experience — the value of being advised in your own language.
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {['English', 'ਪੰਜਾਬੀ — Punjabi', 'हिंदी — Hindi', 'नेपाली — Nepali'].map((lang) => (
                <span key={lang} style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)', borderRadius: 20, padding: '7px 16px', fontSize: 14, color: '#fff', fontWeight: 500 }}>{lang}</span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
              { q: 'Can I book a consultation in Hindi, Punjabi or Nepali?', a: 'Yes — all consultations are available in English, Hindi, Punjabi or Nepali. Let us know your preference when booking.' },
              { q: 'Do you advise clients overseas as well as in Australia?', a: 'Yes. We advise clients who are currently overseas on offshore partner visas, student pathways and employer sponsorship arrangements. Initial consultations happen by video call.' },
              { q: 'Do I need to be in one of your office states?', a: 'No. While offices are in VIC, WA and NSW, clients are advised across Australia and from overseas. Your migration journey does not have to start where you are standing.' },
            ].map((item, i) => (
              <div key={item.q} style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 14, overflow: 'hidden' }}>
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

      <CtaBand
        title="Regulated advice. Real language."
        body="Book a consultation with Navpreet Aulakh — Registered Migration Agent MARN 2619467 — in English, Hindi, Punjabi or Nepali."
        primaryCta={{ label: 'Book a Consultation', page: 'book-consultation' }}
        navigate={navigate}
      />

      <ComplianceDisclaimer currentAsAt="September 2026" />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
