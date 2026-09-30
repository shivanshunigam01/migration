/** Single source of truth for visa salary thresholds (audit T01). */
export const THRESHOLDS = {
  effectiveFrom: "2026-07-01",
  CSIT: 79423,
  SSIT: 146576,
  /** From 1 Jul 2026 the TSMIT aligns with CSIT for Core Skills stream nominations. */
  TSMIT: 79423,
} as const

export const CSIT_LABEL = `$${THRESHOLDS.CSIT.toLocaleString("en-AU")} p.a.`
export const SSIT_LABEL = `$${THRESHOLDS.SSIT.toLocaleString("en-AU")} p.a.`
export const TSMIT_LABEL = `$${THRESHOLDS.TSMIT.toLocaleString("en-AU")} p.a.`

export const SID_COMMENCEMENT = "7 December 2024"

export function formatAud(amount: number): string {
  return `$${amount.toLocaleString("en-AU")}`
}

export const CSIT_PLUS = `${formatAud(THRESHOLDS.CSIT)}+`
export const SSIT_PLUS = `${formatAud(THRESHOLDS.SSIT)}+`
