import React from 'react'
import { NAVY, GOLD } from '@/theme'
import { Reveal } from '@/components/motion'
import { LinkedProse } from '@/components/page/LinkedProse'

export interface AnswerBoxProps {
  children: React.ReactNode
  /** When set, string children are linkified from internal-linking-spec.md §2 */
  routeKey?: string
}

/** Join whitespace-split JSX text nodes so linkify still runs. */
function extractPlainText(children: React.ReactNode): string | null {
  if (typeof children === "string" || typeof children === "number") return String(children)
  if (Array.isArray(children)) {
    const parts: string[] = []
    for (const child of children) {
      if (child == null || child === false || child === true) continue
      if (typeof child === "string" || typeof child === "number") {
        parts.push(String(child))
        continue
      }
      return null
    }
    return parts.length ? parts.join("") : null
  }
  return null
}

export function AnswerBox({ children, routeKey }: AnswerBoxProps) {
  const textChild = extractPlainText(children)

  const content =
    routeKey && textChild != null ? (
      <LinkedProse routeKey={routeKey}>{textChild.trim()}</LinkedProse>
    ) : (
      children
    )

  return (
    <Reveal preset="shield" style={{
      background: 'rgba(27,43,94,0.04)',
      borderLeft: `4px solid ${GOLD}`,
      borderRadius: '0 8px 8px 0',
      padding: '20px 24px',
      margin: '0 0 0 0',
    }}>
      <div style={{
        fontSize: 12,
        fontWeight: 800,
        letterSpacing: '0.12em',
        textTransform: 'uppercase' as const,
        color: GOLD,
        marginBottom: 10,
      }}>Quick Answer</div>
      <div style={{
        fontSize: 17,
        lineHeight: 1.7,
        color: NAVY,
        fontWeight: 400,
      }}>
        {content}
      </div>
    </Reveal>
  )
}
