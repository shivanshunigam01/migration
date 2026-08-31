import React from 'react'
import Icon from '@/components/ui/Icon'
import { NAVY } from '@/theme'
import { Reveal } from '@/components/motion'

export type CalloutVariant = 'note' | 'warning' | 'danger' | 'tip'

const VARIANT_MAP: Record<CalloutVariant, { bg: string; border: string; iconColor: string; iconName: string; labelColor: string }> = {
  note:    { bg: 'rgba(14,116,144,0.08)', border: 'rgba(14,116,144,0.4)', iconColor: '#2563eb', iconName: 'info',  labelColor: '#1B2B5E' },
  warning: { bg: 'rgba(245,161,36,0.08)', border: 'rgba(245,161,36,0.5)', iconColor: '#f5a124', iconName: 'alert', labelColor: '#0d1632' },
  danger:  { bg: 'rgba(220,38,38,0.08)', border: 'rgba(220,38,38,0.4)', iconColor: '#e11d48', iconName: 'x',     labelColor: '#0d1632' },
  tip:     { bg: 'rgba(245,161,36,0.08)', border: 'rgba(245,161,36,0.4)', iconColor: '#f5a124', iconName: 'check', labelColor: '#0d1632' },
}

export interface CalloutProps {
  variant: CalloutVariant
  title?: string
  children: React.ReactNode
  /** Renders with a coloured left-border style (wider panel) */
  panel?: boolean
  borderWidth?: number
}

export function Callout({ variant, title, children, panel = false, borderWidth = 2 }: CalloutProps) {
  const v = VARIANT_MAP[variant]
  const baseStyle: React.CSSProperties = {
    background: v.bg,
    border: `${borderWidth}px solid ${v.border}`,
    borderRadius: 16,
    padding: '20px 28px',
  }
  const panelStyle: React.CSSProperties = {
    ...baseStyle,
    display: 'flex',
    gap: 16,
    alignItems: 'flex-start',
  }
  const inlineStyle: React.CSSProperties = {
    ...baseStyle,
    display: 'flex',
    gap: 10,
    alignItems: 'flex-start',
    borderRadius: 10,
    padding: '12px 16px',
  }

  if (panel) {
    return (
      <Reveal preset="scale" style={panelStyle}>
        <div style={{ width: 40, height: 40, borderRadius: 10, background: `${v.iconColor}20`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
          <Icon name={v.iconName} size={18} color={v.iconColor} />
        </div>
        <div style={{ flex: 1 }}>
          {title && <div style={{ fontSize: 18, fontWeight: 700, color: NAVY, marginBottom: 12 }}>{title}</div>}
          <div style={{ fontSize: 14, color: '#374151', lineHeight: 1.75 }}>{children}</div>
        </div>
      </Reveal>
    )
  }

  return (
    <Reveal preset="up" style={inlineStyle}>
      <Icon name={v.iconName} size={15} color={v.iconColor} />
      <div style={{ fontSize: 13, color: v.labelColor, lineHeight: 1.65 }}>{children}</div>
    </Reveal>
  )
}
