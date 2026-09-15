'use client'

import React, { useEffect } from 'react'
import PublicBookingWizard from '@/components/booking/PublicBookingWizard'

type Props = {
  open: boolean
  onClose: () => void
}

/** Full-screen / centered booking modal — responsive on mobile. */
export default function BookingModal({ open, onClose }: Props) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [open, onClose])

  if (!open) return null

  return (
    <div
      className="nm-book-modal-root"
      role="dialog"
      aria-modal="true"
      aria-label="Book a consultation"
    >
      <button type="button" className="nm-book-modal-backdrop" aria-label="Close booking" onClick={onClose} />
      <div className="nm-book-modal-panel">
        <div className="nm-book-modal-toolbar">
          <div>
            <div className="nm-book-modal-kicker">Book consultation</div>
            <div className="nm-book-modal-title">Choose a service, time and pay securely</div>
          </div>
          <button type="button" className="nm-book-modal-close" onClick={onClose} aria-label="Close">
            ×
          </button>
        </div>
        <div className="nm-book-modal-body">
          <PublicBookingWizard className="nm-book-widget nm-book-modal-wizard" />
        </div>
      </div>
    </div>
  )
}
