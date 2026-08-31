import React, { useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import { NAV_ITEMS } from '@/data/navItems'

import { GOLD, NAVY, NAVY_DARK, HERO_GRAD, CAT_PARTNER } from '@/theme'
import Icon from '@/components/ui/Icon'
const ROSE = CAT_PARTNER
const ACCENT = CAT_PARTNER


const STATS = [
  { label: 'Contributory cost', value: '~$47k', icon: 'dollar', desc: 'per applicant in govt charges' },
  { label: 'Contributory wait', value: '3–5 yrs', icon: 'clock', desc: 'typical processing time' },
  { label: 'Standard queue', value: '20–30 yrs', icon: 'trending', desc: 'for visa 103/804' },
  { label: 'Balance of family', value: 'Test req.', icon: 'users', desc: 'children in Australia' },
]

const FAQS = [
  {
    q: 'What is the balance of family test?',
    a: "The balance of family test requires that more of the applicant's children live permanently in Australia than in any other single country, OR that at least half of all children live permanently in Australia. Step-children and adopted children count. This test must be met at time of application and at time of decision.",
  },
  {
    q: 'Can a parent work once their visa is granted?',
    a: "Yes. Permanent parent visas (103, 143, 804, 864) grant full unrestricted work rights in Australia. There is no condition limiting employment. The parent may also study and access Medicare once granted.",
  },
  {
    q: 'What are the health requirements?',
    a: "Applicants must meet Australian health requirements, which generally involves a medical examination by an approved panel physician, a chest x-ray (for applicants 11 years and over), and may include additional testing. The primary concern is that the applicant's health condition does not pose a significant cost to the Australian health system.",
  },
  {
    q: 'Can I sponsor both of my parents?',
    a: "Yes, you can sponsor both parents, but each parent is a separate applicant and each application incurs the full government charges. For the Contributory pathways, this means approximately $47,000 per parent. Each parent must independently meet health and character requirements.",
  },
  {
    q: 'What is the difference between onshore (804/864) and offshore (103/143) applications?',
    a: "Onshore applicants (804 and 864) must be in Australia when they apply and can remain lawfully in Australia throughout the processing period, usually on a bridging visa. Offshore applicants (103 and 143) must be outside Australia at the time of visa grant. If your parent is already in Australia and wants to remain, the onshore stream is the appropriate pathway.",
  },
  {
    q: 'What happens if a parent visa is refused?',
    a: "If a parent visa is refused, the applicant generally has a right of merits review at the Administrative Review Tribunal (ART). The ART replaced the Administrative Appeals Tribunal (AAT) on 14 October 2024. The outcome depends on the specific refusal reason. Common grounds include failure to meet the balance of family test, health requirements, or character requirements. A migration agent can advise whether review is appropriate.",
  },
]

const COMPARE_ROWS = [
  { label: 'Cost (govt charges)', standard: 'Stage 1 ~$5,400 + Stage 2 ~$2,800', contributory: '~$47,000 total (two stages)' },
  { label: 'Processing time', standard: '20–30+ years', contributory: '3–5 years' },
  { label: 'Onshore option', standard: '804 (aged only)', contributory: '864 (aged only)' },
  { label: 'Aged stream available', standard: 'Yes (804)', contributory: 'Yes (864)' },
  { label: 'Sponsor requirement', standard: 'Child/step-child/adopted child who is Citizen, PR, or eligible NZ citizen', contributory: 'Same as standard' },
]

const ELIGIBILITY = [
  { icon: 'users', title: 'Balance of family test', desc: 'More children permanently settled in Australia than any other single country, OR at least half of all children in Australia.' },
  { icon: 'user', title: 'Eligible sponsor', desc: 'Must be sponsored by an Australian citizen, permanent resident, or eligible New Zealand citizen who is your child, step-child, or adopted child.' },
  { icon: 'shield', title: 'Health requirements', desc: 'Medical examination by an approved panel physician. Must not pose undue cost to Australian health or community services.' },
  { icon: 'file', title: 'Character requirements', desc: 'Must be of good character. Police clearances from countries of residence may be required.' },
]

export default function ParentVisaPage({ navigate }: { navigate: (page: string) => void }) {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", background: '#f4f6fb', minHeight: '100vh', color: NAVY }}>
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />
      <div style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button onClick={() => navigate('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}>Home</button>
          <span>›</span>
          <span>Partner &amp; Family</span>
          <span>›</span>
          <span style={{ color: '#1B2B5E', fontWeight: 500 }}>Parent Visas</span>
        </div>
      </div>

      {/* Hero */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        background: HERO_GRAD,
        padding: '64px 32px 72px',
      }}>

        <div style={{ position: 'relative', maxWidth: 1120, margin: '0 auto' }}>
          <div className="hero-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 48, alignItems: 'start' }}>
            {/* Left */}
            <div>
              {/* Pill badge */}
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: 6,
                background: `${ACCENT}15`, border: `1px solid ${ACCENT}30`,
                color: GOLD, borderRadius: 999, padding: '5px 14px',
                fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
                textTransform: 'uppercase', marginBottom: 20,
              }}>
                <Icon name="users" size={13} color={GOLD} />
                Parent &amp; Family Visas
              </span>

              {/* H1 */}
              <h1 style={{
                fontFamily: "'Gilroy', sans-serif", fontSize: 48, fontWeight: 700,
                color: NAVY, lineHeight: 1.1, marginBottom: 24,
              }}>
                Australian{' '}
                <span style={{ color: GOLD, fontStyle: 'italic' }}>Parent Visas</span>
                <br />Explained
              </h1>

              {/* Answer-first card */}
              <div style={{
                background: '#fff',
                borderLeft: `4px solid ${GOLD}`,
                borderRadius: 12, padding: '20px 24px', marginBottom: 36,
              }}>
                <p style={{ color: '#374151', fontSize: 16, lineHeight: 1.7, margin: 0 }}>
                  Parent visas allow Australian citizens and permanent residents to sponsor parents to live in Australia permanently.
                  The <strong style={{ color: NAVY }}>Contributory Parent (143/864)</strong> is significantly faster than the standard pathway —
                  processing in <strong style={{ color: GOLD }}>3–5 years</strong> versus <strong style={{ color: ROSE }}>20–30 years</strong> — but costs
                  approximately <strong style={{ color: GOLD }}>$47,000 per applicant</strong> in government charges.
                </p>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <a href="#eligibility" style={{
                  background: GOLD, color: NAVY_DARK, borderRadius: 8,
                  padding: '12px 24px', fontSize: 16, fontWeight: 700,
                  textDecoration: 'none', fontFamily: 'inherit',
                }}>
                  Check eligibility
                </a>
                <a href="#contact" style={{
                  background: 'transparent', color: NAVY,
                  border: `2px solid ${NAVY}30`,
                  borderRadius: 8, padding: '12px 24px', fontSize: 16, fontWeight: 600,
                  textDecoration: 'none', fontFamily: 'inherit',
                }}>
                  Get advice
                </a>
              </div>

              {/* Stats row */}
              <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 48 }}>
                {STATS.map((st) => (
                  <div key={st.label} style={{
                    background: '#fff', borderRadius: 10,
                    border: '1px solid rgba(27,43,94,0.1)', padding: '14px 16px',
                  }}>
                    <Icon name={st.icon} size={18} color={GOLD} />
                    <div style={{ color: NAVY, fontSize: 23, fontWeight: 700, marginTop: 8, fontFamily: "'Gilroy', sans-serif" }}>{st.value}</div>
                    <div style={{ color: '#6b7280', fontSize: 12, marginTop: 2, lineHeight: 1.4 }}>{st.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: comparison widget */}
            <div style={{
              background: '#fff',
              border: '1px solid #e8edf6', borderRadius: 16, padding: 28,
            }}>
              <h3 style={{ fontFamily: "'Gilroy', sans-serif", color: NAVY, fontSize: 19, marginBottom: 20, margin: '0 0 20px' }}>
                Standard vs Contributory
              </h3>
              <div style={{ overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 14 }}>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left', color: '#6b7280', fontWeight: 600, paddingBottom: 10, borderBottom: '1px solid rgba(27,43,94,0.1)', paddingRight: 12 }}>Feature</th>
                      <th style={{ textAlign: 'center', color: NAVY, fontWeight: 600, paddingBottom: 10, borderBottom: '1px solid rgba(27,43,94,0.1)', paddingRight: 8 }}>Standard<br /><span style={{ color: '#9ca3af', fontWeight: 400 }}>103 / 804</span></th>
                      <th style={{ textAlign: 'center', color: GOLD, fontWeight: 600, paddingBottom: 10, borderBottom: `1px solid ${GOLD}44` }}>Contributory<br /><span style={{ color: `${GOLD}99`, fontWeight: 400 }}>143 / 864</span></th>
                    </tr>
                  </thead>
                  <tbody>
                    {COMPARE_ROWS.map((row, i) => (
                      <tr key={i}>
                        <td style={{ color: '#6b7280', padding: '10px 12px 10px 0', borderBottom: '1px solid rgba(27,43,94,0.06)', fontSize: 13, lineHeight: 1.4 }}>{row.label}</td>
                        <td style={{ color: NAVY, padding: '10px 8px', borderBottom: '1px solid rgba(27,43,94,0.06)', textAlign: 'center', fontSize: 13, lineHeight: 1.4 }}>{row.standard}</td>
                        <td style={{ color: GOLD, padding: '10px 0 10px 8px', borderBottom: '1px solid rgba(27,43,94,0.06)', textAlign: 'center', fontSize: 13, lineHeight: 1.4, fontWeight: 600 }}>{row.contributory}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div style={{
                marginTop: 20, background: `${GOLD}15`, border: `1px solid ${GOLD}30`,
                borderRadius: 8, padding: '10px 14px', fontSize: 13,
                color: '#374151', lineHeight: 1.5,
              }}>
                <Icon name="info" size={14} color={GOLD} />
                <span style={{ marginLeft: 6 }}>Both pathways lead to permanent residence. The right choice depends on your timeline, budget, and whether your parent is already in Australia.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility */}
      <section id="eligibility" style={{ maxWidth: 1120, margin: '0 auto', padding: '64px 32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: GOLD, borderRadius: 2 }} />
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 30, fontWeight: 700, color: NAVY, margin: 0 }}>Eligibility Requirements</h2>
        </div>
        <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 40, paddingLeft: 16 }}>
          All parent visa applicants must meet the following core requirements regardless of visa subclass.
        </p>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {ELIGIBILITY.map((item) => (
            <div key={item.title} style={{
              background: 'white', borderRadius: 14, padding: '24px 28px',
              border: '1px solid #e8ecf5', display: 'flex', gap: 18, alignItems: 'flex-start',
              boxShadow: '0 2px 12px rgba(27,43,94,0.06)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: `${GOLD}18`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <Icon name={item.icon} size={20} color={GOLD} />
              </div>
              <div>
                <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 18, fontWeight: 700, color: NAVY, margin: '0 0 6px' }}>{item.title}</h3>
                <p style={{ color: '#6b7a99', fontSize: 15, margin: 0, lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Visa options */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: GOLD, borderRadius: 2 }} />
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 30, fontWeight: 700, color: NAVY, margin: 0 }}>Parent Visa Options</h2>
        </div>
        <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
          Four main subclasses cover different circumstances. Offshore and onshore streams are available.
        </p>
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
          {[
            {
              code: '103', name: 'Migrant Parent', type: 'Offshore', cost: 'Stage 1 ~$405 + Stage 2 ~$2,800', wait: '20–30+ years',
              badge: 'Standard', badgeColor: '#64748b',
              points: ['No age requirement', 'No contributory payment', 'Very long processing queue', 'Must be offshore at grant'],
            },
            {
              code: '143', name: 'Contributory Parent', type: 'Offshore', cost: '~$47,000 total (two stages)', wait: '3–5 years',
              badge: 'Contributory', badgeColor: GOLD,
              points: ['No age requirement', 'Two-stage payment required', 'Significantly faster processing', 'Must be offshore at grant'],
            },
            {
              code: '804', name: 'Aged Parent (Onshore)', type: 'Onshore', cost: 'Stage 1 ~$405 + Stage 2 ~$2,800', wait: '20–30+ years',
              badge: 'Standard · Aged', badgeColor: '#64748b',
              points: ['Must be of pensionable age', 'Can remain in Australia throughout', 'Very long processing queue', 'Bridging visa applies while waiting'],
            },
            {
              code: '864', name: 'Contributory Aged Parent', type: 'Onshore', cost: '~$47,000 total (two stages)', wait: '3–5 years',
              badge: 'Contributory · Aged', badgeColor: GOLD,
              points: ['Must be of pensionable age', 'Two-stage payment required', 'Faster processing than 804', 'Can remain in Australia throughout'],
            },
          ].map((v) => (
            <div key={v.code} style={{
              background: 'white', borderRadius: 14, padding: '24px 28px',
              border: '1px solid #e8ecf5', boxShadow: '0 2px 12px rgba(27,43,94,0.06)',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 14 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                    <span style={{
                      fontFamily: "'Gilroy', sans-serif", fontSize: 29, fontWeight: 800, color: NAVY,
                    }}>
                      {v.code}
                    </span>
                    <span style={{
                      background: v.badgeColor === GOLD ? `${GOLD}22` : '#f1f5f9',
                      color: v.badgeColor, border: `1px solid ${v.badgeColor}44`,
                      borderRadius: 999, padding: '3px 10px', fontSize: 12, fontWeight: 700,
                      letterSpacing: '0.05em', textTransform: 'uppercase',
                    }}>{v.badge}</span>
                  </div>
                  <div style={{ color: NAVY, fontWeight: 600, fontSize: 16 }}>{v.name}</div>
                  <div style={{ color: '#94a3b8', fontSize: 13, marginTop: 2 }}>{v.type} · Permanent</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 16, marginBottom: 16 }}>
                <div style={{ flex: 1, background: '#f8fafd', borderRadius: 8, padding: '10px 14px' }}>
                  <div style={{ color: '#94a3b8', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Cost</div>
                  <div style={{ color: NAVY, fontSize: 14, fontWeight: 600, marginTop: 3 }}>{v.cost}</div>
                </div>
                <div style={{ flex: 1, background: '#f8fafd', borderRadius: 8, padding: '10px 14px' }}>
                  <div style={{ color: '#94a3b8', fontSize: 12, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Wait</div>
                  <div style={{ color: NAVY, fontSize: 14, fontWeight: 600, marginTop: 3 }}>{v.wait}</div>
                </div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {v.points.map((pt) => (
                  <li key={pt} style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginBottom: 6, fontSize: 14, color: '#4b5578', lineHeight: 1.5 }}>
                    <Icon name="check" size={14} color={GOLD} />
                    {pt}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Considerations */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: ROSE, borderRadius: 2 }} />
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 30, fontWeight: 700, color: NAVY, margin: 0 }}>Key Considerations</h2>
        </div>
        <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
          Important factors to understand before lodging a parent visa application.
        </p>
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
          {[
            { icon: 'alert', color: ROSE, title: 'Two-stage payment (Contributory)', body: 'The ~$47,000 contributory fee is paid in two stages. Stage 1 is paid on application; Stage 2 (the larger amount) is paid before the visa is granted. Failure to pay Stage 2 on time results in refusal.' },
            { icon: 'shield', color: GOLD, title: 'Assurance of support', body: 'Some parent visa subclasses require an Assurance of Support — a bond lodged with the government that can be drawn on if the parent accesses certain social security payments. The bond is typically held for 10 years.' },
            { icon: 'clock', color: '#2563eb', title: 'Queue dates and priority', body: 'Parent visas operate on a strict lodgement queue. The date your application is received determines your place. You cannot pay to move up the standard queue — only the Contributory pathway offers faster access to a separate queue.' },
          ].map((c) => (
            <div key={c.title} style={{
              background: 'white', borderRadius: 14, padding: '24px 28px',
              border: '1px solid #e8ecf5', boxShadow: '0 2px 12px rgba(27,43,94,0.06)',
            }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10, marginBottom: 16,
                background: `${c.color}18`, display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <Icon name={c.icon} size={20} color={c.color} />
              </div>
              <h3 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 17, fontWeight: 700, color: NAVY, margin: '0 0 10px' }}>{c.title}</h3>
              <p style={{ color: '#6b7a99', fontSize: 15, margin: 0, lineHeight: 1.65 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ maxWidth: 1120, margin: '0 auto', padding: '56px 32px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
          <div style={{ width: 4, height: 32, background: GOLD, borderRadius: 2 }} />
          <h2 style={{ fontFamily: "'Gilroy', sans-serif", fontSize: 30, fontWeight: 700, color: NAVY, margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        <p style={{ color: '#6b7a99', fontSize: 16, marginBottom: 36, paddingLeft: 16 }}>
          Common questions about Australian parent visas answered.
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{
              background: 'white', borderRadius: 12,
              border: openFaq === i ? `1.5px solid ${GOLD}` : '1px solid #e8ecf5',
              overflow: 'hidden', boxShadow: '0 2px 8px rgba(27,43,94,0.05)',
              transition: 'border-color 0.15s',
            }}>
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                style={{
                  width: '100%', textAlign: 'left', background: 'none', border: 'none',
                  padding: '18px 24px', cursor: 'pointer', fontFamily: 'inherit',
                  display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16,
                }}
              >
                <span style={{ fontWeight: 600, color: NAVY, fontSize: 16 }}>{faq.q}</span>
                <span style={{ flexShrink: 0 }}>
                  <Icon name={openFaq === i ? 'minus' : 'plus'} size={18} color={GOLD} />
                </span>
              </button>
              {openFaq === i && (
                <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${GOLD}33` }}>
                  <p style={{ margin: 0, color: '#4b5578', fontSize: 15, lineHeight: 1.75 }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA footer */}
      <section id="contact" style={{
        background: NAVY_DARK, borderTop: `4px solid ${GOLD}`,
        marginTop: 72, padding: '64px 32px',
      }}>
        <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: `${GOLD}22`, border: `1px solid ${GOLD}55`,
            color: GOLD, borderRadius: 999, padding: '5px 16px',
            fontSize: 13, fontWeight: 600, letterSpacing: '0.06em',
            textTransform: 'uppercase', marginBottom: 24,
          }}>
            <Icon name="star" size={13} color={GOLD} />
            Registered Migration Agents
          </div>
          <h2 style={{
            fontFamily: "'Gilroy', sans-serif", fontSize: 37, fontWeight: 700,
            color: 'white', marginBottom: 16, lineHeight: 1.2,
          }}>
            Ready to sponsor your parents?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: 17, marginBottom: 36, lineHeight: 1.7 }}>
            Parent visa applications are complex and queue-sensitive. A registered migration agent can help you choose the right pathway,
            prepare a strong application, and avoid costly mistakes.
          </p>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              background: GOLD, color: NAVY_DARK, border: 'none', borderRadius: 8,
              padding: '14px 32px', fontSize: 17, fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Book a free consultation
            </button>
            <button style={{
              background: 'transparent', color: 'white',
              border: '1.5px solid rgba(255,255,255,0.25)',
              borderRadius: 8, padding: '14px 32px', fontSize: 17, fontWeight: 600,
              cursor: 'pointer', fontFamily: 'inherit',
            }}>
              Call us now
            </button>
          </div>
        </div>
      </section>
      <SiteFooter navigate={navigate} />
    </div>
  )
}
