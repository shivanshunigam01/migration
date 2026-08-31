import React from 'react'
import navpreetPhoto from '@/imports/navpreet-aulakh.jpg'

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
      <img
        src={navpreetPhoto}
        alt="Navpreet Aulakh"
        style={{ width: 32, height: 32, objectFit: 'cover', objectPosition: 'top center', borderRadius: '50%', flexShrink: 0 }}
      />
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
