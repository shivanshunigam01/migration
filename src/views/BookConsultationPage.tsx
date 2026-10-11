import React, { useEffect, useRef, useState } from 'react'
import SiteHeader from '@/components/layout/SiteHeader'
import SiteFooter from '@/components/layout/SiteFooter'
import PublicBookingWizard from '@/components/booking/PublicBookingWizard'
import { FaqAccordion } from '@/components/page'
import type { FaqItem } from '@/components/page'
import { NAV_ITEMS } from '@/data/navItems'
import { GOLD, NAVY } from '@/theme'
import { GlowButton } from '@/components/ui/GlowButton'
import { PAGE_META } from '@/data/pageMeta'
import StructuredData from '@/components/page/StructuredData'
import { cancelPendingBooking, confirmPublicPayment } from '@/lib/publicBooking'
import '@/components/booking/booking.css'
import '@/components/booking/book-consultation-page.css'

type SuccessInfo = {
  name: string
  at: string
  mode: string
  office: string
  consultName: string
  amountCents?: number
  paid?: boolean
}

const HOW_IT_WORKS = [
  {
    title: 'Book and pay',
    body: 'Pick a consult and a time. Paid consults are secured by Stripe and confirmed by email straight away.',
  },
  {
    title: 'We check your visa',
    body: 'With your consent, we check your current visa status on VEVO before the call so no time is wasted.',
  },
  {
    title: 'Your consult',
    body: 'A registered agent reviews your situation, explains your realistic options and the risks, by video or phone.',
  },
  {
    title: 'Fixed-fee quote',
    body: 'If you want us to act, you get a fixed professional fee. Your consult fee is credited if you engage us.',
  },
]

const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What happens to my consult fee if I go ahead?',
    answer: 'It is credited to your matter. You pay the consult fee once, and it comes off your professional fee when you engage us.',
  },
  {
    question: 'What is the free 15-minute call for?',
    answer: 'It confirms whether a paid consult is worth your money and which one to book. It is general information only, so no migration advice is given on that call.',
  },
  {
    question: 'Can I have the consult in Punjabi, Hindi or Nepali?',
    answer: 'Yes. Our team works in English, Hindi, Punjabi and Nepali. Mention your preferred language in the booking notes.',
  },
  {
    question: 'Is it by phone, video or in person?',
    answer: 'Consults run by video or phone. Choose the office closest to you when you book and that team will look after your matter.',
  },
  {
    question: "I'm in Perth. Which times apply to me?",
    answer: 'Times are shown in Australian eastern time in the booking flow. Your confirmation email states the appointment time — contact us if you need help with your local time zone.',
  },
  {
    question: 'Can I cancel or reschedule?',
    answer: 'Yes. Our Refund Policy sets out how cancellations and refunds work.',
  },
  {
    question: 'How do I know you are registered?',
    answer: 'Search MARN 2619467 on the OMARA Register of Migration Agents. Registered agents must follow the Code of Conduct.',
  },
]

const PREP_ITEMS = [
  'Passport',
  'Current visa grant notice',
  'CV or work history',
  'English test results, if you have them',
  'Skills assessment outcome, if you have one',
  'Any refusal or tribunal letters, with dates',
]

export default function BookConsultationPage({ navigate }: { navigate: (page: string) => void }) {
  const bookRef = useRef<HTMLDivElement>(null)
  const [success, setSuccess] = useState<SuccessInfo | null>(null)
  const [confirming, setConfirming] = useState(false)
  const [banner, setBanner] = useState<string | null>(null)

  const scrollToBook = () => {
    bookRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  useEffect(() => {
    if (typeof window === 'undefined') return
    const scrollIfHash = () => {
      const h = window.location.hash
      if (h === '#book' || h === '#payment') {
        window.setTimeout(scrollToBook, 80)
      }
    }
    scrollIfHash()
    window.addEventListener('hashchange', scrollIfHash)
    return () => window.removeEventListener('hashchange', scrollIfHash)
  }, [])

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
      window.history.replaceState({}, '', url.pathname + url.hash)
    }

    if (booking === 'cancelled') {
      if (bookingId) cancelPendingBooking(bookingId).catch(() => {})
      setBanner('Payment was cancelled. You can choose another time below.')
      cleanUrl()
      window.setTimeout(scrollToBook, 300)
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
          window.scrollTo({ top: 0, behavior: 'smooth' })
        })
        .catch((e) => {
          setBanner(e instanceof Error ? e.message : 'Could not confirm payment. Contact us if you were charged.')
          scrollToBook()
        })
        .finally(() => {
          setConfirming(false)
          cleanUrl()
        })
    }
  }, [])

  const faqWithRefundLink: FaqItem[] = FAQ_ITEMS.map((item) =>
    item.question === 'Can I cancel or reschedule?'
      ? {
          ...item,
          answer: (
            <>
              Yes. Our{' '}
              <button type="button" className="nm-bc-link" onClick={() => navigate('refund-request')}>
                Refund Policy
              </button>{' '}
              sets out how cancellations and refunds work.
            </>
          ),
        }
      : item
  )

  return (
    <div className="nm-bc-page" style={{ fontFamily: "'Gilroy', sans-serif" }}>
      <StructuredData
        breadcrumbs={[
          { name: 'Home', url: 'https://www.nanakmigration.com.au' },
          { name: 'Book Consultation', url: 'https://www.nanakmigration.com.au/book-consultation' },
        ]}
        service={{
          name: 'Book a Migration Consultation',
          description: PAGE_META['book-consultation'].metaDescription,
          url: 'https://www.nanakmigration.com.au/book-consultation',
        }}
        faqs={FAQ_ITEMS}
        reviewedBy={true}
      />
      <SiteHeader navigate={navigate} navItems={NAV_ITEMS} />

      <div className="breadcrumb-bar" style={{ background: '#f8f9fc', borderBottom: '1px solid #e8eaf0', padding: '10px 32px' }}>
        <div style={{ maxWidth: 1180, margin: '0 auto', display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, color: '#9ca3af' }}>
          <button
            type="button"
            onClick={() => navigate('home')}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#6b7280', fontSize: 13, padding: 0, fontFamily: "'Gilroy', sans-serif" }}
          >
            Home
          </button>
          <span>›</span>
          <span style={{ color: NAVY, fontWeight: 500 }}>Book Consultation</span>
        </div>
      </div>

      <header className="nm-bc-hero">
        <div className="nm-bc-hero-inner">
          <div>
            <div className="nm-bc-eyebrow">Registered Migration Agent · MARN 2619467</div>
            <h1>
              Talk to a registered migration agent <em>this week</em>
            </h1>
            <p className="nm-bc-hero-sub">
              Choose your consult, pick a time and pay securely. If you go ahead with us, your consult fee is credited to your matter.
            </p>
            <div className="nm-bc-chips">
              <span className="nm-bc-chip">OMARA registered</span>
              <span className="nm-bc-chip">English · Hindi · Punjabi · Nepali</span>
              <span className="nm-bc-chip">5 offices · VIC &amp; WA</span>
              <span className="nm-bc-chip">Video or phone</span>
            </div>
          </div>
          <aside className="nm-bc-agent" aria-label="Your migration agent">
            <div className="nm-bc-monogram" aria-hidden="true">NA</div>
            <div>
              <h3>Navpreet Aulakh</h3>
              <p>Registered Migration Agent. Paid consults are with Navpreet.</p>
            </div>
            <div className="nm-bc-marn-row">
              <span>MARN 2619467</span>
              <a href="https://portal.mara.gov.au/search-the-register-of-migration-agents/" target="_blank" rel="noopener noreferrer">
                Check the OMARA register ↗
              </a>
            </div>
          </aside>
        </div>
      </header>

      <p className="nm-bc-pref-talk">
        <strong>Prefer to talk first?</strong> Call{' '}
        <a href="tel:1300644728">1300 644 728</a> or email{' '}
        <a href="mailto:visa@nanakmigration.com.au">visa@nanakmigration.com.au</a>. Not sure which consult fits? Book the free 15-minute call below.
      </p>

      {(confirming || banner) && (
        <div className="nm-bc-banner">
          <div className={`nm-bc-banner-inner ${confirming ? 'info' : 'warn'}`}>
            {confirming ? 'Confirming your Stripe payment…' : banner}
          </div>
        </div>
      )}

      {success && (
        <div className="nm-bc-success">
          <div className="nm-bc-success-card">
            <div style={{ fontSize: 12, fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#059669', marginBottom: 8 }}>
              {success.paid ? 'Payment successful · booked' : 'Booked'}
            </div>
            <h2 style={{ margin: '0 0 10px', fontSize: 22, color: NAVY }}>You&apos;re confirmed, {success.name.split(' ')[0] || success.name}</h2>
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
            <p style={{ margin: '0 0 16px', fontSize: 14, color: '#6b7280', lineHeight: 1.55 }}>
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
                  scrollToBook()
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
        </div>
      )}

      <section className="nm-bc-desk" id="book" ref={bookRef} aria-labelledby="nm-bc-book-heading">
        <div className="nm-bc-desk-head" id="payment">
          <h2 id="nm-bc-book-heading">Book, pay &amp; confirm</h2>
          <p>Choose a consult and time, then enter your details. Paid consults continue to secure Stripe checkout.</p>
        </div>
        <div className="nm-bc-inline-wrap">
          <PublicBookingWizard className="nm-book-widget nm-book-inline-wizard" />
        </div>
      </section>

      <section className="nm-bc-section alt">
        <div className="nm-bc-kicker">How it works</div>
        <h2>From booking to a clear plan</h2>
        <p className="nm-bc-section-lede">
          Every paid consult follows the same four steps, so you know what you are paying for before you book.
        </p>
        <div className="nm-bc-steps">
          {HOW_IT_WORKS.map((step, i) => (
            <article key={step.title} className="nm-bc-step">
              <div className="nm-bc-step-num">{i + 1}</div>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="nm-bc-section">
        <div className="nm-bc-kicker">Questions</div>
        <h2>Before you book</h2>
        <FaqAccordion items={faqWithRefundLink} accent={GOLD} />
      </section>

      <section className="nm-bc-section alt">
        <div className="nm-bc-kicker">Get the most from your consult</div>
        <h2>Have these ready</h2>
        <ul className="nm-bc-prep-list">
          {PREP_ITEMS.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
        <p className="nm-bc-warn">
          <strong>Had a refusal?</strong> Tribunal deadlines are strict. Book the review consult as early as you can.
        </p>
      </section>

      <section className="nm-bc-cta-band">
        <h2>Ready when you are</h2>
        <p>Paid consults from $55. Fee credited if you engage us.</p>
        <GlowButton as="button" size="md" variant="gold" onClick={scrollToBook}>
          Choose a consult
        </GlowButton>
      </section>

      <p style={{ maxWidth: 1180, margin: '0 auto', padding: '20px 24px 0', fontSize: 13, color: '#9ca3af', lineHeight: 1.6, textAlign: 'center' }}>
        General information only. Not legal or migration advice. Consult a registered migration agent before acting.
        Payments are processed securely by Stripe.
      </p>

      <SiteFooter navigate={navigate} />
    </div>
  )
}
