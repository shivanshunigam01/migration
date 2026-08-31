import React from 'react'
import { GOLD, NAVY, NAVY_DARK } from '@/theme'

export default function NanakLogo({ size = 36, light = false }: { size?: number; light?: boolean }) {
  const textColor = light ? '#ffffff' : NAVY
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
      <svg width={size} height={size} viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="18" cy="20" r="13" stroke={light ? '#ffffff' : NAVY} strokeWidth="2.2" fill="none" />
        <ellipse cx="18" cy="20" rx="17" ry="7" stroke={GOLD} strokeWidth="1.8" fill="none" strokeDasharray="0" transform="rotate(-18 18 20)" />
        <g transform="translate(3, 5) rotate(-20)">
          <path d="M0 0 L5 -1.5 L5.5 0 L2 1 Z" fill={NAVY_DARK} opacity="0.85" transform="scale(0.9)" />
        </g>
        <path d="M12 27V13L22 25V13" stroke={light ? '#ffffff' : NAVY} strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="21" cy="11" r="2" fill={GOLD} />
        <path d="M18.5 14 L21 13 L23.5 14" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
        <path d="M21 13 L21 17" stroke={GOLD} strokeWidth="1.8" strokeLinecap="round" />
      </svg>
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{
          fontFamily: "'Gilroy', sans-serif",
          fontWeight: 700,
          fontSize: Math.round(size * 0.52),
          color: textColor,
          letterSpacing: '-0.02em',
          whiteSpace: 'nowrap',
        }}>
          Nanak Migration
        </span>
        <span style={{
          fontSize: Math.round(size * 0.27),
          fontWeight: 500,
          letterSpacing: '0.2em',
          color: light ? 'rgba(250,249,255,0.6)' : 'rgba(27,43,94,0.55)',
          textTransform: 'uppercase',
          marginTop: 1,
          paddingLeft: 1,
        }}>
          — Group —
        </span>
      </div>
    </div>
  )
}
