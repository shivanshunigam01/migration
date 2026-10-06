/** Single source of truth for visa salary thresholds (audit T01 / Oct 2026 service audit). */
export const THRESHOLDS = {
  effectiveFrom: "2026-07-01",
  CSIT: 79423,
  SSIT: 146576,
  /** 494 regional employer sponsored stream (not 482 Core Skills). */
  TSMIT_494: 79423,
} as const

/** Sitewide content currency stamp — update when a page’s factual content is re-audited. */
export const CONTENT_CURRENT_AS_AT = "October 2026"

export const CSIT_LABEL = `$${THRESHOLDS.CSIT.toLocaleString("en-AU")} p.a.`
export const SSIT_LABEL = `$${THRESHOLDS.SSIT.toLocaleString("en-AU")} p.a.`
export const TSMIT_494_LABEL = `$${THRESHOLDS.TSMIT_494.toLocaleString("en-AU")} p.a.`
/** @deprecated Use TSMIT_494_LABEL for 494; CSIT_LABEL for 482 Core Skills. */
export const TSMIT_LABEL = TSMIT_494_LABEL

export const SID_COMMENCEMENT = "7 December 2024"

export function formatAud(amount: number): string {
  return `$${amount.toLocaleString("en-AU")}`
}

export const CSIT_PLUS = `${formatAud(THRESHOLDS.CSIT)}+`
export const SSIT_PLUS = `${formatAud(THRESHOLDS.SSIT)}+`

/** Subclass 482 visa application charge from 1 July 2026 (main / 18+ / under 18). */
export const VAC_482_MAIN = 4015
export const VAC_482_DEP_18 = 4015
export const VAC_482_DEP_U18 = 1005

export const VAC_482_MAIN_LABEL = formatAud(VAC_482_MAIN)
export const VAC_482_DEP_U18_LABEL = formatAud(VAC_482_DEP_U18)
