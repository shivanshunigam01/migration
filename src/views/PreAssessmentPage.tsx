import React, { useEffect, useMemo, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import NanakLogo from '@/components/layout/NanakLogo'
import { PAGE_META } from '@/data/pageMeta'
import {
  fetchPendingOafBookings,
  submitPublicOaf,
  type PendingOafBooking,
} from '@/lib/publicBooking'
import '@/components/booking/booking.css'

const NAVY = '#1B2B5E'
const GOLD = '#f5a124'

function fmtWhen(iso: string) {
  const d = new Date(iso)
  return d.toLocaleString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  })
}

/**
 * Shareable pre-consult assessment form.
 * Submissions attach to the client's booking (OAF) and show in admin Bookings.
 */
export default function PreAssessmentPage({ navigate }: { navigate: (page: string) => void }) {
  const meta = PAGE_META['pre-assessment']
  const [params] = useSearchParams()
  const bookingFromUrl = params.get('booking') || ''

  const [step, setStep] = useState<'email' | 'form' | 'done'>('email')
  const [email, setEmail] = useState('')
  const [pending, setPending] = useState(false)
  const [error, setError] = useState('')
  const [bookings, setBookings] = useState<PendingOafBooking[]>([])
  const [bookingId, setBookingId] = useState(bookingFromUrl)
  const [hp, setHp] = useState('')
  const [doneAt, setDoneAt] = useState('')
  const [doneType, setDoneType] = useState('')

  const [form, setForm] = useState({
    subclass: '',
    expiry: '',
    goal: '',
    occ: '',
    eng: '',
    score: '',
    family: 'Just me',
    refusal: 'No',
    refdet: '',
    history: '',
    docs: false,
  })

  useEffect(() => {
let el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', meta.metaDescription)
    else {
      el = document.createElement('meta')
      el.setAttribute('name', 'description')
      el.setAttribute('content', meta.metaDescription)
      document.head.appendChild(el)
    }
  }, [meta])

  const selected = useMemo(
    () => bookings.find((b) => b.id === bookingId) || null,
    [bookings, bookingId],
  )

  async function lookup(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!/^[^@\s]+@[^@\s]+\.[^\s@]+$/.test(email.trim())) {
      setError('Enter the email you used when booking.')
      return
    }
    setPending(true)
    try {
      const list = await fetchPendingOafBookings(email.trim())
      if (!list.length) {
        setError('No upcoming booking found for this email. Book a consultation first, then return here.')
        setBookings([])
        return
      }
      setBookings(list)
      const pick = bookingFromUrl && list.some((b) => b.id === bookingFromUrl)
        ? bookingFromUrl
        : list[0].id
      setBookingId(pick)
      setStep('form')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Could not look up your booking')
    } finally {
      setPending(false)
    }
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    if (!form.subclass || !form.refusal || !form.docs) {
      setError('Complete the required fields and confirm your documents.')
      return
    }
    setPending(true)
    try {
      const data = await submitPublicOaf({
        email: email.trim().toLowerCase(),
        bookingId: bookingId || undefined,
        ...form,
        company_website: hp,
      })
      setDoneAt(data.at)
      setDoneType(data.consultType?.name || '')
      setStep('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Submission failed')
    } finally {
      setPending(false)
    }
  }

  return (
    <div className="nm-book-page">
      <header className="nm-book-header">
        <div className="nm-book-header-inner">
          <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
            <div style={{ background: '#EBEDE9', borderRadius: 10, padding: '6px 10px' }}>
              <NanakLogo size={34} />
            </div>
            <div>
              <div className="nm-book-brand">Nanak Migration Group</div>
              <div className="nm-book-marn">Pre-consult assessment · MARN 2619467</div>
            </div>
          </div>
          <Link className="nm-book-site-link" to="/book">
            Book a consultation
          </Link>
        </div>
      </header>

      <main className="nm-book-main" style={{ maxWidth: 640 }}>
        <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: GOLD }}>
          Before your appointment
        </p>
        <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700, lineHeight: 1.15, color: NAVY }}>
          Pre-consult assessment
        </h1>
        <p style={{ margin: '0 0 28px', fontSize: 16, lineHeight: 1.65, color: '#3f4b5f' }}>
          About 2 minutes. This briefs your agent for the consultation — no advice is given on this form.
          Your answers attach to your booking in our schedule.
        </p>

        {step === 'email' && (
          <form onSubmit={lookup} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 8px 28px rgba(16,28,85,0.1)', border: '1px solid #e8eaf0' }}>
            <label style={{ display: 'block', fontSize: 13, fontWeight: 700, color: NAVY, marginBottom: 8 }}>
              Email used for your booking
            </label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="nm-book-input"
              style={{ marginTop: 0 }}
            />
            <p style={{ fontSize: 13, color: '#6b7280', margin: '12px 0 0', lineHeight: 1.55 }}>
              We&apos;ll match this to your upcoming consultation. Don&apos;t have a booking yet?{' '}
              <button type="button" onClick={() => navigate('book')} style={{ background: 'none', border: 'none', color: GOLD, fontWeight: 700, cursor: 'pointer', padding: 0, fontSize: 13 }}>
                Book here first →
              </button>
            </p>
            {error && <p style={{ color: '#b91c1c', fontSize: 13, marginTop: 12 }}>{error}</p>}
            <button type="submit" className="nm-cw-go" disabled={pending} style={{ marginTop: 20 }}>
              {pending ? 'Looking up…' : 'Continue →'}
            </button>
          </form>
        )}

        {step === 'form' && (
          <form onSubmit={submit} style={{ background: '#fff', borderRadius: 16, padding: 28, boxShadow: '0 8px 28px rgba(16,28,85,0.1)', border: '1px solid #e8eaf0' }}>
            <input type="text" name="company_website" value={hp} onChange={(e) => setHp(e.target.value)} tabIndex={-1} autoComplete="off" aria-hidden="true" style={{ position: 'absolute', left: -9999, opacity: 0, height: 0, width: 0 }} />

            {bookings.length > 1 && (
              <label style={{ display: 'block', fontSize: 12, fontWeight: 700, color: '#6b7280', marginBottom: 16 }}>
                Which booking is this for?
                <select className="nm-book-select" value={bookingId} onChange={(e) => setBookingId(e.target.value)}>
                  {bookings.map((b) => (
                    <option key={b.id} value={b.id}>
                      {b.consultType?.name || b.type} · {fmtWhen(b.at)}
                    </option>
                  ))}
                </select>
              </label>
            )}

            {selected && (
              <div style={{ marginBottom: 20, padding: '12px 14px', borderRadius: 10, background: '#f8faff', border: '1px solid #e8edf6', fontSize: 13, color: NAVY }}>
                <strong>{selected.consultType?.name || selected.type}</strong>
                <div style={{ color: '#6b7280', marginTop: 4 }}>{fmtWhen(selected.at)} · {selected.mode} · {selected.office}</div>
              </div>
            )}

            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Current visa subclass *
                <select className="nm-book-select" required value={form.subclass} onChange={(e) => setForm({ ...form, subclass: e.target.value })}>
                  <option value="">Select…</option>
                  {['500', '485', '482', '820', '600', 'none'].map((v) => (
                    <option key={v} value={v}>{v === 'none' ? 'No current visa' : v}</option>
                  ))}
                </select>
              </label>

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Visa expiry
                <input type="date" className="nm-book-input" value={form.expiry} onChange={(e) => setForm({ ...form, expiry: e.target.value })} />
              </label>

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Goal visa
                <input className="nm-book-input" placeholder="e.g. 190" value={form.goal} onChange={(e) => setForm({ ...form, goal: e.target.value })} />
              </label>

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Occupation
                <input className="nm-book-input" value={form.occ} onChange={(e) => setForm({ ...form, occ: e.target.value })} />
              </label>

              <div className="nm-book-form-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                  English test
                  <select className="nm-book-select" value={form.eng} onChange={(e) => setForm({ ...form, eng: e.target.value })}>
                    <option value="">Select…</option>
                    {['IELTS', 'PTE', 'TOEFL', 'OET', 'None yet'].map((v) => <option key={v}>{v}</option>)}
                  </select>
                </label>
                <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                  Score (if any)
                  <input className="nm-book-input" value={form.score} onChange={(e) => setForm({ ...form, score: e.target.value })} placeholder="e.g. 7.0" />
                </label>
              </div>

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Who is applying?
                <select className="nm-book-select" value={form.family} onChange={(e) => setForm({ ...form, family: e.target.value })}>
                  {['Just me', 'Me + partner', 'Me + family'].map((v) => <option key={v}>{v}</option>)}
                </select>
              </label>

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Prior refusal or cancellation? *
                <select className="nm-book-select" value={form.refusal} onChange={(e) => setForm({ ...form, refusal: e.target.value })}>
                  <option value="No">No</option>
                  <option value="Yes">Yes</option>
                </select>
              </label>

              {form.refusal === 'Yes' && (
                <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                  Refusal details
                  <textarea
                    className="nm-book-input"
                    rows={2}
                    value={form.refdet}
                    onChange={(e) => setForm({ ...form, refdet: e.target.value })}
                    style={{ resize: 'vertical', minHeight: 64 }}
                  />
                </label>
              )}

              <label style={{ fontSize: 12, fontWeight: 700, color: '#6b7280' }}>
                Brief history
                <textarea
                  className="nm-book-input"
                  rows={3}
                  value={form.history}
                  onChange={(e) => setForm({ ...form, history: e.target.value })}
                  placeholder="When you arrived, studies/work, what you need help with…"
                  style={{ resize: 'vertical', minHeight: 88 }}
                />
              </label>

              <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: 13, color: '#1E1E2A', lineHeight: 1.5 }}>
                <input type="checkbox" checked={form.docs} onChange={(e) => setForm({ ...form, docs: e.target.checked })} style={{ marginTop: 3 }} />
                I will bring passport, visa grant letter and CV to the consultation *
              </label>
            </div>

            {error && <p style={{ color: '#b91c1c', fontSize: 13, marginTop: 14 }}>{error}</p>}

            <div style={{ display: 'flex', gap: 10, marginTop: 20, flexWrap: 'wrap' }}>
              <button type="button" onClick={() => { setStep('email'); setError('') }} style={{ borderRadius: 10, border: '1.5px solid #e8eaf0', padding: '12px 18px', background: '#fff', cursor: 'pointer', fontWeight: 600, color: NAVY }}>
                ‹ Back
              </button>
              <button type="submit" className="nm-cw-go" disabled={pending} style={{ marginTop: 0, flex: 1 }}>
                {pending ? 'Submitting…' : 'Submit assessment →'}
              </button>
            </div>
          </form>
        )}

        {step === 'done' && (
          <div style={{ background: '#fff', borderRadius: 16, padding: 32, boxShadow: '0 8px 28px rgba(16,28,85,0.1)', border: '1px solid #e8eaf0', textAlign: 'center' }}>
            <div style={{ fontSize: 28, marginBottom: 12 }}>✓</div>
            <h2 style={{ margin: '0 0 10px', color: '#059669', fontSize: 22 }}>Assessment received</h2>
            <p style={{ margin: '0 0 8px', color: '#374151', lineHeight: 1.6 }}>
              Thanks — your agent will review this before your consultation
              {doneType ? ` (${doneType})` : ''}.
            </p>
            {doneAt && (
              <p style={{ margin: 0, fontSize: 13, color: '#6b7280' }}>
                Appointment: {fmtWhen(doneAt)}
              </p>
            )}
            <div style={{ marginTop: 24, display: 'flex', gap: 10, justifyContent: 'center', flexWrap: 'wrap' }}>
              <Link to="/" style={{ padding: '12px 20px', borderRadius: 10, background: NAVY, color: '#fff', textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                Back to website
              </Link>
              <Link to="/book" style={{ padding: '12px 20px', borderRadius: 10, border: `1.5px solid ${NAVY}`, color: NAVY, textDecoration: 'none', fontWeight: 700, fontSize: 14 }}>
                Book another time
              </Link>
            </div>
          </div>
        )}

        <p style={{ marginTop: 28, fontSize: 12, lineHeight: 1.6, color: '#6b7280' }}>
          General information only — not migration advice. Registered Migration Agent Navpreet Aulakh · MARN 2619467.
        </p>
      </main>

      <footer className="nm-book-footer">
        <span>© {new Date().getFullYear()} Nanak Migration Group</span>
        <a href="mailto:visa@nanakmigration.com.au">visa@nanakmigration.com.au</a>
        <a href="tel:1300644728">1300 644 728</a>
      </footer>
    </div>
  )
}
