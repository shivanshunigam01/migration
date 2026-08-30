import React from 'react'
import { NAVY } from '@/theme'
import nanakLogo from '/src/imports/nanak-facebook-profile.png'

interface ReviewedByProps {
  lastReviewed?: string
}

export default function ReviewedBy({ lastReviewed = 'July 2026' }: ReviewedByProps) {
  return (
    <div style={{
      background: 'rgba(27,43,94,0.03)',
      border: '1px solid rgba(27,43,94,0.08)',
      borderRadius: 8,
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      margin: '16px 0 0 0',
    }}>
      <div style={{
        width: 32,
        height: 32,
        borderRadius: '50%',
        background: NAVY,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
      }}>
        <img src={nanakLogo} alt="Navpreet Aulakh" style={{ width: 22, height: 22, objectFit: 'contain', borderRadius: '50%' }} />
      </div>
      <div>
        <div style={{ fontSize: 12, color: '#374151', lineHeight: 1.4 }}>
          Reviewed by <strong style={{ fontWeight: 700 }}>Navpreet Aulakh</strong>, Registered Migration Agent (MARN 2619467)
        </div>
        <div style={{ fontSize: 11, color: '#9ca3af', marginTop: 2 }}>
          Last reviewed: {lastReviewed}
        </div>
      </div>
    </div>
  )
}
