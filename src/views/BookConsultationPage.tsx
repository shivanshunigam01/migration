import React, { useEffect, useRef, useState, useCallback } from 'react'
import { createTimeline } from 'animejs'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import BookingModal from '@/components/booking/BookingModal'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY, NAVY_DARK, HERO_GRAD } from '@/theme'
import { ShieldGlow } from '@/components/motion'
import { GlowButton } from '@/components/ui/GlowButton'
import { startCtaTheatreBreath } from '@/lib/theatreCta'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import { cancelPendingBooking, confirmPublicPayment } from '@/lib/publicBooking'
import '@/components/booking/booking.css'

type SuccessInfo = {
  name: string
  at: string
  mode: string
  office: string
  consultName: string
  amountCents?: number
  paid?: boolean
}

export default function BookConsultationPage({ navigate }: { navigate: (page: string) => void }) {
  const headingRef = useRef<HTMLDivElement>(null)
  const [modalOpen, setModalOpen] = useState(false)
  const [success, setSuccess] = useState<SuccessInfo | null>(null)
  const [confirming, setConfirming] = useState(false)
  const [banner, setBanner] = useState<string | null>(null)

  const openModal = useCallback(() => setModalOpen(true), [])
  const closeModal = useCallback(() => setModalOpen(false), [])

  useEffect(() => {
    const stopBreath = startCtaTheatreBreath(2600)
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce) return () => stopBreath()

    const tl = createTimeline({ defaults: { ease: 'out(3)' } })
    if (headingRef.current) {
      tl.add(headingRef.current, {
        opacity: [0, 1],
        translateY: [28, 0],
        duration: 650,
      }, 0)
    }

    return () => {
      stopBreath()
      tl.cancel()
    }
  }, [])

  // Handle Stripe return (?booking=success&session_id=… or cancelled)
  useEffect(() => {
    if (typeof window === 'undefined') return
    const params = new URLSearchParams(window.location.search)
    const booking = params.get('booking')
    const sessionId = params.get('session_id')
    const bookingId = params.get('booking_id')

    const cleanUrl = () => {
      const url = new URL(window.location.href)
      url.searchParams.delete('booking')
      url.searchParams.delete('session_id')
      url.searchParams.delete('booking_id')
      window.history.replaceState({}, '', url.pathname)
    }

    if (booking === 'cancelled') {
      if (bookingId) {
        cancelPendingBooking(bookingId).catch(() => {})
      }
      setBanner('Payment was cancelled. You can start booking again whenever you are ready.')
      setModalOpen(true)
      cleanUrl()
      return
    }

    if (booking === 'success' && sessionId) {
      setConfirming(true)
      confirmPublicPayment(sessionId)
        .then((data) => {
          setSuccess({
            name: data.name,
            at: data.at,
            mode: data.mode,
            office: data.office,
            consultName: data.consultType?.name || 'Consultation',
            amountCents: data.payment?.amountCents,
            paid: true,
          })
          setModalOpen(false)
        })
        .catch((e) => {
          setBanner(e instanceof Error ? e.message : 'Could not confirm payment. Contact us if you were charged.')
          setModalOpen(true)
        })
        .finally(() => {
          setConfirming(false)
          cleanUrl()
        })
    }
  }, [])

  return (
    <div style={{ fontFamily: "'Gilroy', sans-serif", backgroundColor: '#ffffff', color: NAVY }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Book Consultation', url: 'https://www.nanakmigration.com.au/book-consultation' },
        ]}
        service={{ name: 'Book a Migration Consultation', description: PAGE_META['book-consultation'].metaDescription, url: 'https://www.nanakmigration.com.au/book-consultation' }}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <div className="breadcrumb-bar" style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button
            onClick={() => navigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}
          >
            Home
          </button>
          <span>›</span>
          <span style={{ color: NAVY, fontWeight: 500 }}>Book Consultation</span>
        </div>
      </div>

      <section className="section-pad-mobile" style={{ background: HERO_GRAD, padding: '48px 24px 80px', position: 'relative', overflow: 'hidden' }}>
        <ShieldGlow tone="gold" size={520} top="-15%" left="55%" opacity={0.45} />
        <ShieldGlow tone="navy" size={420} bottom="-20%" left="-8%" opacity={0.35} />

        <div style={{ maxWidth: 720, margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <div ref={headingRef} style={{ textAlign: 'center', marginBottom: 28, opacity: 0 }}>
            <div style={{ fontSize: 12, fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: GOLD, marginBottom: 12 }}>
              Registered Migration Agent · MARN 2619467
            </div>
            <h1
              style={{
                fontFamily: "'Gilroy', sans-serif",
                fontSize: 'clamp(30px, 4vw, 44px)',
                fontWeight: 700,
                color: NAVY_DARK,
                margin: '0 0 16px',
                letterSpacing: '-0.02em',
                lineHeight: 1.15,
              }}
            >
              Book a consultation
            </h1>
            <p style={{ fontSize: 16, color: '#6b7280', lineHeight: 1.65, maxWidth: 560, margin: '0 auto 22px' }}>
              Choose a service and time in a quick popup. Paid consults are secured with Stripe — you&apos;ll get email confirmation straight after.
            </p>

            {confirming && (
              <div style={{ marginBottom: 18, borderRadius: 12, background: '#eff6ff', border: '1px solid #bfdbfe', padding: '14px 16px', color: NAVY, fontWeight: 600 }}>
                Confirming your Stripe payment…
              </div>
            )}

            {banner && (
              <div style={{ marginBottom: 18, borderRadius: 12, background: '#fff7ed', border: '1px solid #fed7aa', padding: '14px 16px', color: '#9a3412', fontSize: 14, lineHeight: 1.55 }}>
                {banner}
              </div>
            )}

            {success ? (
              <div
                style={{
                  textAlign: 'left',
                  borderRadius: 16,
                  background: '#ecfdf5',
                  border: '1px solid #a7f3d0',
                  padding: '22px 24px',
                  boxShadow: '0 12px 40px rgba(16,185,129,0.12)',
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669', marginBottom: 8 }}>
                  {success.paid ? 'Payment successful · booked' : 'Booked'}
                </div>
                <h2 style={{ margin: '0 0 10px', fontSize: 22, color: NAVY_DARK }}>You&apos;re confirmed, {success.name.split(' ')[0] || success.name}</h2>
                <p style={{ margin: '0 0 8px', fontSize: 15, color: '#065f46', lineHeight: 1.6 }}>
                  <strong>{success.consultName}</strong>
                  {' · '}
                  {new Date(success.at).toLocaleString('en-AU', {
                    weekday: 'short',
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric',
                    hour: 'numeric',
                    minute: '2-digit',
                  })}
                  {' · '}
                  {success.mode}
                  {' · '}
                  {success.office}
                </p>
                {success.paid && success.amountCents != null && (
                  <p style={{ margin: '0 0 14px', fontSize: 14, color: '#047857' }}>
                    Paid ${(success.amountCents / 100).toFixed(0)} AUD via Stripe
                  </p>
                )}
                <p style={{ margin: '0 0 18px', fontSize: 14, color: '#6b7280', lineHeight: 1.55 }}>
                  A confirmation email is on its way. Complete a pre-assessment before your appointment so your agent is briefed.
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
                  <GlowButton as="button" size="md" variant="gold" onClick={() => navigate('pre-assessment')}>
                    Pre-assessment →
                  </GlowButton>
                  <button
                    type="button"
                    onClick={() => {
                      setSuccess(null)
                      openModal()
                    }}
                    style={{
                      borderRadius: 10,
                      border: '1.5px solid #e8eaf0',
                      background: '#fff',
                      padding: '12px 18px',
                      fontWeight: 700,
                      color: NAVY,
                      cursor: 'pointer',
                      fontFamily: 'inherit',
                    }}
                  >
                    Book another
                  </button>
                </div>
              </div>
            ) : (
              <>
                <GlowButton as="button" size="md" variant="gold" onClick={openModal}>
                  Start booking →
                </GlowButton>
                <p style={{ fontSize: 14, color: '#6b7280', margin: '18px 0 0', lineHeight: 1.55 }}>
                  Prefer to share details first?{' '}
                  <button
                    type="button"
                    onClick={() => navigate('pre-assessment')}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      color: NAVY,
                      fontWeight: 700,
                      textDecoration: 'underline',
                      cursor: 'pointer',
                      fontSize: 14,
                      fontFamily: "'Gilroy', sans-serif",
                    }}
                  >
                    Complete a pre-assessment
                  </button>
                  {' '}before you book.
                </p>
              </>
            )}
          </div>

          <p style={{ fontSize: 13, color: '#9ca3af', textAlign: 'center', marginTop: 24, lineHeight: 1.6 }}>
            General information only. Not legal or migration advice. Consult a registered migration agent before acting.
            Paid consults are processed securely by Stripe.
          </p>
        </div>
      </section>

      <BookingModal open={modalOpen} onClose={closeModal} />
      <SiteFooter navigate={navigate} />
    </div>
  )
}
