import React, { useEffect, useMemo, useState } from 'react'
import {
  createPublicBooking,
  fetchPublicBookingOptions,
  type PublicConsultType,
} from '@/lib/publicBooking'
import './booking.css'

const GOLD = '#f5a124'
const NAVY = '#1B2B5E'

const FALLBACK_TYPES: PublicConsultType[] = [
  { id: 'free', name: 'Quick eligibility call', dur: 15, fee: 0, who: 'Intake desk', desc: 'Free 15 minutes to confirm whether a paid consult is worth your money. No advice given.' },
  { id: 'pr', name: 'PR Pathway Consultation', dur: 45, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: '189 / 190 / 491 and your realistic route to permanent residence.' },
  { id: 'family', name: 'Family Visa – Parent / Partner', dur: 30, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: 'Partner (820/801/309/100) and parent visa options and evidence.' },
  { id: 'temp', name: 'Temporary Residency Visas', dur: 30, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: '485, 482, 407 and other temporary visas — conditions, timing, next steps.' },
  { id: 'student', name: 'Student Visa', dur: 30, fee: 55, who: 'Navpreet Aulakh (RMA)', desc: 'New applications, extensions, course changes and condition questions.' },
  { id: 'visitor', name: 'Visitor Visa – Australia', dur: 30, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: 'Visitor and sponsored family visitor applications.' },
  { id: 'employer', name: 'Employer Sponsored Visa', dur: 30, fee: 0, who: 'Puneet Singh', desc: 'For businesses: sponsorship costs, obligations and timelines. Free discovery call.' },
  { id: 'art', name: 'ART / Tribunal Appeal', dur: 45, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: 'Refusals and cancellations — review options and strict deadlines.' },
  { id: 'other', name: 'Other Migration Services', dur: 30, fee: 75, who: 'Navpreet Aulakh (RMA)', desc: 'Anything not listed — tell us the situation in the notes.' },
]

const FALLBACK_OFFICES = ['Mickleham', 'Truganina', 'Cranbourne', 'Geelong', 'Canning Vale (WA)']
const FALLBACK_HEARD = ['Google', 'TikTok', 'Instagram', 'Facebook', 'YouTube', 'Friend / family', 'Existing client', 'Other']

function fmtTime(ts: number) {
  return new Date(ts).toLocaleTimeString('en-AU', { hour: 'numeric', minute: '2-digit' })
}

function fmtDay(ts: number) {
  return new Date(ts).toLocaleDateString('en-AU', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })
}

function sameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function slotsForDay(day: Date, takenSlots: string[]) {
  const slots: { ts: number; label: string; taken: boolean }[] = []
  for (let h = 9; h < 17; h++) {
    for (const m of [0, 30]) {
      if (h === 9 && m === 0) continue
      const x = new Date(day)
      x.setHours(h, m, 0, 0)
      if (x.getTime() < Date.now() + 60 * 60 * 1000) continue
      const taken = takenSlots.some((iso) => Math.abs(new Date(iso).getTime() - x.getTime()) < 30 * 60 * 1000)
      slots.push({ ts: x.getTime(), label: fmtTime(x.getTime()), taken })
    }
  }
  return slots
}

function toast(msg: string) {
  const el = document.createElement('div')
  el.className = 'nm-book-toast'
  el.textContent = msg
  document.body.appendChild(el)
  window.setTimeout(() => el.remove(), 2800)
}

type Props = { className?: string }

export default function PublicBookingWizard({ className }: Props) {
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState(false)
  const [types, setTypes] = useState<PublicConsultType[]>(FALLBACK_TYPES)
  const [offices, setOffices] = useState(FALLBACK_OFFICES)
  const [heardOpts, setHeardOpts] = useState(FALLBACK_HEARD)
  const [takenSlots, setTakenSlots] = useState<string[]>([])

  const [step, setStep] = useState(1)
  const [typeId, setTypeId] = useState<string | null>(null)
  const [monthOff, setMonthOff] = useState(0)
  const [day, setDay] = useState<Date | null>(null)
  const [slot, setSlot] = useState<number | null>(null)
  const [mode, setMode] = useState<'Video' | 'Phone'>('Video')
  const [office, setOffice] = useState('Truganina')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [topic, setTopic] = useState('')
  const [heard, setHeard] = useState('')
  const [vevo, setVevo] = useState(false)
  const [hp, setHp] = useState('')
  const [pending, setPending] = useState(false)
  const [lastAt, setLastAt] = useState<number | null>(null)
  const [lastType, setLastType] = useState<PublicConsultType | null>(null)

  useEffect(() => {
    let cancelled = false
    ;(async () => {
      try {
        const data = await fetchPublicBookingOptions()
        if (cancelled) return
        if (data.consultTypes?.length) setTypes(data.consultTypes)
        if (data.offices?.length) setOffices(data.offices)
        if (data.heard?.length) setHeardOpts(data.heard)
        setTakenSlots(data.takenSlots ?? [])
      } catch {
        if (!cancelled) setLoadError(true)
      } finally {
        if (!cancelled) setLoading(false)
      }
    })()
    return () => { cancelled = true }
  }, [])

  const t = types.find((x) => x.id === typeId) || null
  const slots = day ? slotsForDay(day, takenSlots) : []

  const cal = useMemo(() => {
    const ref = new Date()
    ref.setDate(1)
    ref.setMonth(ref.getMonth() + monthOff)
    ref.setHours(0, 0, 0, 0)
    const firstDow = (ref.getDay() + 6) % 7
    const dim = new Date(ref.getFullYear(), ref.getMonth() + 1, 0).getDate()
    const cells: { d: number | null; date?: Date; past?: boolean; sun?: boolean; sel?: boolean }[] = []
    for (let i = 0; i < firstDow; i++) cells.push({ d: null })
    for (let d2 = 1; d2 <= dim; d2++) {
      const x = new Date(ref.getFullYear(), ref.getMonth(), d2, 12, 0, 0, 0)
      cells.push({
        d: d2,
        date: x,
        past: x.getTime() < Date.now() - 12 * 60 * 60 * 1000,
        sun: x.getDay() === 0,
        sel: !!day && sameDay(day, x),
      })
    }
    return {
      label: ref.toLocaleDateString('en-AU', { month: 'long', year: 'numeric' }),
      cells,
    }
  }, [monthOff, day])

  function reset() {
    setStep(1)
    setTypeId(null)
    setMonthOff(0)
    setDay(null)
    setSlot(null)
    setMode('Video')
    setOffice('Truganina')
    setName('')
    setEmail('')
    setMobile('')
    setTopic('')
    setHeard('')
    setVevo(false)
    setHp('')
    setLastAt(null)
    setLastType(null)
  }

  async function book() {
    if (!typeId || !slot || !name.trim() || !/^[^@\s]+@[^@\s]+\.[^\s@]+$/.test(email) || !vevo) {
      toast('Add your details and tick the consent box')
      return
    }
    setPending(true)
    try {
      await createPublicBooking({
        name,
        email,
        mobile,
        type: typeId,
        office,
        mode,
        at: new Date(slot).toISOString(),
        topic,
        heard,
        vevo,
        company_website: hp,
      })
      setLastAt(slot)
      setLastType(t)
      setStep(4)
      toast("You're booked — check your email for confirmation")
      // Refresh taken slots
      try {
        const data = await fetchPublicBookingOptions()
        setTakenSlots(data.takenSlots ?? [])
      } catch { /* ignore */ }
    } catch (e) {
      toast(e instanceof Error ? e.message : 'Booking failed')
    } finally {
      setPending(false)
    }
  }

  const stepState = (n: number) => (step === n ? 'on' : step > n ? 'done' : '')

  return (
    <div className={['nm-cw', className].filter(Boolean).join(' ')}>
      <div className="nm-cw-left">
        <div style={{ position: 'relative', zIndex: 1, borderBottom: '1px solid rgba(255,255,255,0.16)', paddingBottom: 12 }}>
          <div style={{ fontSize: 15, fontWeight: 700 }}>Nanak Migration Group</div>
          <div style={{ marginTop: 4, fontSize: 10, letterSpacing: '0.09em', textTransform: 'uppercase', color: GOLD }}>
            Book a consultation · MARN 2619467
          </div>
        </div>
        {t ? (
          <>
            <div style={{ position: 'relative', zIndex: 1, fontSize: 18, fontWeight: 700, lineHeight: 1.3 }}>{t.name}</div>
            <div style={{ position: 'relative', zIndex: 1, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>⏱ {t.dur} min</div>
            <div style={{ position: 'relative', zIndex: 1, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>
              {t.fee ? `💳 $${t.fee} AUD · credited if you engage us` : '🆓 Free'}
            </div>
            <div style={{ position: 'relative', zIndex: 1, fontSize: 12, color: 'rgba(255,255,255,0.85)' }}>📞 {mode} consultation</div>
            {slot && (
              <div style={{ position: 'relative', zIndex: 1, borderRadius: 10, border: '1px solid rgba(245,161,36,0.55)', background: 'rgba(245,161,36,0.15)', padding: '10px 12px', fontSize: 13, fontWeight: 600, lineHeight: 1.45 }}>
                📅 {fmtDay(slot)}
                <br />
                {fmtTime(slot)} AEST
              </div>
            )}
            <div style={{ position: 'relative', zIndex: 1, fontSize: 11, color: 'rgba(255,255,255,0.65)' }}>with {t.who}</div>
          </>
        ) : (
          <div style={{ position: 'relative', zIndex: 1, fontSize: 18, fontWeight: 700, opacity: 0.75 }}>Choose a consultation to begin</div>
        )}
        <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto', borderTop: '1px solid rgba(255,255,255,0.16)', paddingTop: 12, fontSize: 11, color: 'rgba(255,255,255,0.82)', display: 'flex', flexDirection: 'column', gap: 6 }}>
          <div><span style={{ letterSpacing: '0.12em', color: GOLD }}>★★★★★</span> Google-rated migration practice</div>
          <div>✓ Registered Migration Agent</div>
          <div>✓ 5 offices · Punjabi · Hindi · English · Nepali</div>
          <div>✓ Confirmation in seconds, reminders built in</div>
          <div style={{ paddingTop: 8, fontSize: 10, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)' }}>
            Navpreet Aulakh · Registered Migration Agent · MARN 2619467
          </div>
        </div>
      </div>

      <div className="nm-cw-right">
        {loading && <div style={{ padding: '64px 0', textAlign: 'center', fontSize: 14, color: '#6b7280' }}>Loading available times…</div>}

        {loadError && !loading && (
          <div style={{ marginBottom: 12, borderRadius: 8, border: '1px solid #fde68a', background: '#fffbeb', padding: '10px 12px', fontSize: 12, color: '#92400e' }}>
            Live calendar unavailable — you can still request a time; our team will confirm by email.
          </div>
        )}

        {!loading && step < 4 && (
          <div style={{ marginBottom: 16, display: 'flex', alignItems: 'center', gap: 0 }}>
            {[
              [1, 'Service'],
              [2, 'Time'],
              [3, 'Details'],
            ].map(([n, label], i) => {
              const state = stepState(Number(n))
              return (
                <div key={String(n)} style={{ display: 'flex', flex: 1, alignItems: 'center' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: state === 'on' ? NAVY : state === 'done' ? '#059669' : '#9ca3af' }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, fontFamily: 'ui-monospace, monospace',
                      background: state === 'on' ? GOLD : state === 'done' ? '#ecfdf5' : '#f3f4f6',
                      color: state === 'on' ? NAVY : state === 'done' ? '#059669' : '#9ca3af',
                      boxShadow: state === 'on' ? '0 0 0 4px #fdf3df' : 'none',
                    }}>
                      {step > Number(n) ? '✓' : n}
                    </span>
                    {label}
                  </span>
                  {i < 2 && <span style={{ margin: '0 8px', height: 1, flex: 1, background: '#e8eaf0' }} />}
                </div>
              )
            })}
          </div>
        )}

        {!loading && step === 1 && (
          <>
            <div style={{ marginBottom: 14, fontSize: 17, fontWeight: 700, color: NAVY }}>Select a consultation</div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 10 }}>
              {types.map((x) => (
                <button
                  key={x.id}
                  type="button"
                  className="nm-book-type"
                  onClick={() => { setTypeId(x.id); setStep(2) }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, fontSize: 13, fontWeight: 700, color: NAVY, lineHeight: 1.35 }}>
                    {x.name}
                    {x.id === 'pr' && (
                      <span style={{ borderRadius: 999, background: GOLD, padding: '2px 8px', fontSize: 8, fontWeight: 800, textTransform: 'uppercase', color: NAVY }}>Most booked</span>
                    )}
                  </div>
                  <div style={{ marginTop: 4, fontSize: 11, color: '#6b7280', lineHeight: 1.4, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{x.desc}</div>
                  <div style={{ marginTop: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ borderRadius: 6, padding: '4px 8px', fontFamily: 'ui-monospace, monospace', fontSize: 13, fontWeight: 600, background: x.fee ? '#f3f4f6' : '#ecfdf5', color: x.fee ? NAVY : '#059669' }}>
                      {x.fee ? `$${x.fee}` : 'Free'}
                    </span>
                    <span style={{ fontSize: 18, color: '#9ca3af' }}>›</span>
                  </div>
                </button>
              ))}
            </div>
          </>
        )}

        {!loading && step === 2 && (
          <>
            <button type="button" onClick={() => { setStep(1); setSlot(null) }} style={{ marginBottom: 10, borderRadius: 999, border: '1px solid #e8eaf0', padding: '4px 12px', fontSize: 12, color: '#6b7280', background: '#fff', cursor: 'pointer' }}>
              ‹ Back
            </button>
            <div style={{ marginBottom: 14, fontSize: 17, fontWeight: 700, color: NAVY }}>Pick a date & time</div>
            <div style={{ display: 'grid', gap: 20, gridTemplateColumns: 'minmax(0, 1fr) 156px' }} className="nm-book-time-grid">
              <div>
                <div style={{ marginBottom: 8, display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 14, fontWeight: 700, color: NAVY }}>
                  <button type="button" disabled={monthOff <= 0} onClick={() => { setMonthOff((v) => v - 1); setDay(null); setSlot(null) }} style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #e8eaf0', background: '#fff', cursor: 'pointer', opacity: monthOff <= 0 ? 0.3 : 1 }}>‹</button>
                  <span>{cal.label}</span>
                  <button type="button" disabled={monthOff >= 2} onClick={() => { setMonthOff((v) => v + 1); setDay(null); setSlot(null) }} style={{ width: 28, height: 28, borderRadius: '50%', border: '1px solid #e8eaf0', background: '#fff', cursor: 'pointer', opacity: monthOff >= 2 ? 0.3 : 1 }}>›</button>
                </div>
                <div style={{ marginBottom: 6, display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', textAlign: 'center', fontSize: 9, fontWeight: 700, letterSpacing: '0.04em', color: '#9ca3af' }}>
                  {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((d) => <span key={d}>{d}</span>)}
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: 4 }}>
                  {cal.cells.map((c, i) => {
                    const disabled = !c.date || c.past || c.sun
                    return (
                      <button
                        key={i}
                        type="button"
                        disabled={disabled}
                        className={`nm-book-cal-day${c.sel ? ' sel' : ''}`}
                        onClick={() => { if (!c.date) return; setDay(c.date); setSlot(null) }}
                      >
                        {c.d ?? ''}
                      </button>
                    )
                  })}
                </div>
              </div>
              <div style={{ display: 'flex', maxHeight: 310, flexDirection: 'column', gap: 6, overflowY: 'auto' }}>
                {day ? (
                  <>
                    <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.04em', color: '#9ca3af' }}>{fmtDay(day.getTime())}</div>
                    {slots.length ? slots.map((sl) => (
                      <button
                        key={sl.ts}
                        type="button"
                        disabled={sl.taken}
                        className={`nm-book-slot${slot === sl.ts ? ' sel' : ''}`}
                        onClick={() => setSlot(sl.ts)}
                      >
                        {sl.label}
                      </button>
                    )) : (
                      <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af' }}>No times left this day</div>
                    )}
                  </>
                ) : (
                  <div style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', color: '#9ca3af' }}>Select a date</div>
                )}
              </div>
            </div>
            <style>{`@media (max-width: 700px) { .nm-book-time-grid { grid-template-columns: 1fr !important; } }`}</style>
            {slot && (
              <button type="button" className="nm-cw-go" onClick={() => setStep(3)}>
                Confirm {fmtTime(slot)} →
              </button>
            )}
          </>
        )}

        {!loading && step === 3 && (
          <>
            <button type="button" onClick={() => setStep(2)} style={{ marginBottom: 10, borderRadius: 999, border: '1px solid #e8eaf0', padding: '4px 12px', fontSize: 12, color: '#6b7280', background: '#fff', cursor: 'pointer' }}>
              ‹ Back
            </button>
            <div style={{ marginBottom: 14, fontSize: 17, fontWeight: 700, color: NAVY }}>Your details</div>
            <input type="text" name="company_website" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, height: 0, width: 0, opacity: 0 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
                Full name *
                <input className="nm-book-input" value={name} onChange={(e) => setName(e.target.value)} autoComplete="name" />
              </label>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
                Mobile *
                <input className="nm-book-input" value={mobile} onChange={(e) => setMobile(e.target.value)} autoComplete="tel" />
              </label>
            </div>
            <label style={{ display: 'block', marginTop: 10, fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
              Email *
              <input type="email" className="nm-book-input" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" />
            </label>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, marginTop: 10 }}>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
                Phone or video?
                <select className="nm-book-select" value={mode} onChange={(e) => setMode(e.target.value as 'Video' | 'Phone')}>
                  <option>Video</option>
                  <option>Phone</option>
                </select>
              </label>
              <label style={{ display: 'block', fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
                Office to look after you
                <select className="nm-book-select" value={office} onChange={(e) => setOffice(e.target.value)}>
                  {offices.map((o) => <option key={o}>{o}</option>)}
                </select>
              </label>
            </div>
            <label style={{ display: 'block', marginTop: 10, fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
              What is it about?
              <input className="nm-book-input" placeholder="e.g. 485 ending in 3 months" value={topic} onChange={(e) => setTopic(e.target.value)} />
            </label>
            <label style={{ display: 'block', marginTop: 10, fontSize: 12, fontWeight: 600, color: '#6b7280' }}>
              How did you hear about us?
              <select className="nm-book-select" value={heard} onChange={(e) => setHeard(e.target.value)}>
                <option value="">Select…</option>
                {heardOpts.map((h) => <option key={h}>{h}</option>)}
              </select>
            </label>
            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 14, fontSize: 12, lineHeight: 1.55, color: '#1E1E2A' }}>
              <input type="checkbox" style={{ marginTop: 2 }} checked={vevo} onChange={(e) => setVevo(e.target.checked)} />
              I consent to a VEVO check of my visa status before the consultation, and I’ll have my passport, visa grant letter and CV ready. General information only — not migration advice.
            </label>
            <button type="button" className="nm-cw-go" disabled={pending} onClick={book}>
              {pending ? 'Booking…' : t?.fee ? `Book · pay $${t.fee} →` : 'Book my spot →'}
            </button>
            <div style={{ marginTop: 8, fontSize: 11, lineHeight: 1.5, color: '#6b7280' }}>
              Confirmation lands by email, with reminders before your appointment. Registered agent MARN 2619467.
            </div>
          </>
        )}

        {!loading && step === 4 && lastAt && lastType && (
          <>
            <div style={{ marginBottom: 14, fontSize: 17, fontWeight: 700, color: '#059669' }}>✓ You’re booked</div>
            <div style={{ borderRadius: 10, background: '#ecfdf5', padding: '12px 14px', fontFamily: 'ui-monospace, monospace', fontSize: 14, fontWeight: 600, color: '#059669' }}>
              {fmtDay(lastAt)} at {fmtTime(lastAt)} · {mode} · {lastType.name}
            </div>
            <div style={{ marginTop: 14, fontSize: 12, fontWeight: 600, color: '#6b7280' }}>Confirmation</div>
            <div style={{ marginTop: 8, whiteSpace: 'pre-wrap', borderRadius: 9, border: '1px solid #e8eaf0', background: '#f8f9fc', padding: '12px 14px', fontSize: 13, lineHeight: 1.6 }}>
              {`Hi ${name.split(' ')[0] || name}, your ${lastType.name.toLowerCase()} with Nanak Migration is confirmed for ${fmtDay(lastAt)} at ${fmtTime(lastAt)} (${mode}, looked after by our ${office} office).`}
            </div>
            <button type="button" className="nm-cw-go secondary" onClick={reset}>
              Book another appointment
            </button>
            <a
              href="/pre-assessment"
              style={{ display: 'block', marginTop: 12, textAlign: 'center', fontSize: 13, fontWeight: 700, color: NAVY, textDecoration: 'none' }}
            >
              Complete pre-consult assessment →
            </a>
          </>
        )}
      </div>
    </div>
  )
}
