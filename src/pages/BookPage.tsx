import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import PublicBookingWizard from '@/components/booking/PublicBookingWizard'
import NanakLogo from '@/components/layout/NanakLogo'
import { PAGE_META } from '@/data/pageMeta'
import '@/components/booking/booking.css'

/**
 * Shareable public booking page — posts to the same admin Bookings module
 * via POST /api/public/bookings (no login required).
 */
export default function BookPage({ navigate: _navigate }: { navigate: (page: string) => void }) {
  const meta = PAGE_META['book'] || PAGE_META['book-consultation']

  useEffect(() => {
const content = meta.metaDescription
    let el = document.querySelector('meta[name="description"]')
    if (el) el.setAttribute('content', content)
    else {
      el = document.createElement('meta')
      el.setAttribute('name', 'description')
      el.setAttribute('content', content)
      document.head.appendChild(el)
    }
  }, [meta])

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
              <div className="nm-book-marn">MARA-registered · MARN 2619467</div>
            </div>
          </div>
          <Link className="nm-book-site-link" to="/">
            Back to website
          </Link>
        </div>
      </header>

      <main className="nm-book-main">
        <div style={{ marginBottom: 28, maxWidth: 640 }}>
          <p style={{ margin: '0 0 10px', fontSize: 12, fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#e8a017' }}>
            Self-serve booking
          </p>
          <h1 style={{ margin: '0 0 12px', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700, lineHeight: 1.15, letterSpacing: '-0.03em', color: '#152448' }}>
            Book your consultation <span style={{ color: '#e8a017' }}>in a few steps</span>
          </h1>
          <p style={{ margin: 0, fontSize: 16, lineHeight: 1.65, color: '#3f4b5f' }}>
            Pick a service, choose a time, and tell us a little about your situation. You’ll get confirmation by email —
            no account required. Bookings appear instantly in our admin schedule.
          </p>
        </div>

        <PublicBookingWizard className="nm-book-widget" />

        <p style={{ margin: '28px 0 0', maxWidth: 720, fontSize: 12, lineHeight: 1.6, color: '#6b7280' }}>
          This booking form collects your details so Nanak Migration Group can arrange a consultation. Information
          provided is general only and is not immigration assistance or legal advice. Registered Migration Agent Navpreet
          Aulakh · MARN 2619467.
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
