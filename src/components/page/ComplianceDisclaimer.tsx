export interface ComplianceDisclaimerProps {
  currentAsAt?: string
  pageNote?: string
}

export function ComplianceDisclaimer({
  currentAsAt = 'July 2026',
  pageNote,
}: ComplianceDisclaimerProps) {
  const microHeading: React.CSSProperties = {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.12em',
    textTransform: 'uppercase',
    color: '#64748b',
    marginBottom: 8,
    margin: '0 0 8px 0',
  }
  const bodyText: React.CSSProperties = {
    fontSize: 13,
    color: '#475569',
    lineHeight: 1.65,
    maxWidth: '75ch',
    margin: 0,
  }

  return (
    <section
      aria-label="General information disclaimer"
      style={{
        background: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: 12,
        padding: '28px 32px',
        margin: '0 0 0 0',
      }}
    >
      {/* Header row */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: '50%',
            background: 'rgba(245,161,36,0.12)',
            border: '1.5px solid rgba(245,161,36,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path
              d="M8 1.5L1 14h14L8 1.5z"
              stroke="#f5a124"
              strokeWidth="1.5"
              strokeLinejoin="round"
              fill="none"
            />
            <line x1="8" y1="6.5" x2="8" y2="9.5" stroke="#f5a124" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="8" cy="11.5" r="0.75" fill="#f5a124" />
          </svg>
        </div>
        <span style={{ fontSize: 15, fontWeight: 700, color: '#1B2B5E', letterSpacing: '0.01em' }}>
          General information only — not immigration advice
        </span>
      </div>

      {/* Three-column grid */}
      <div className="compliance-grid">
        <div>
          <div style={microHeading}>About this information</div>
          <p style={bodyText}>
            This information is general in nature and does not constitute immigration assistance or legal advice for any individual situation. Requirements including occupation lists, fees and processing criteria change without notice.
          </p>
        </div>
        <div>
          <div style={microHeading}>No outcome representation</div>
          <p style={bodyText}>
            Nanak Migration Group Pty Ltd makes no representation that information on this site is complete, current or applicable to your circumstances. Nothing here guarantees, implies or represents any visa outcome, approval likelihood or processing time.
          </p>
        </div>
        <div>
          <div style={microHeading}>Get personal advice</div>
          <p style={bodyText}>
            Obtain advice tailored to your situation from a registered migration agent or Australian legal practitioner. Navpreet Aulakh, MARN 2619467, is registered with the Office of the Migration Agents Registration Authority.
          </p>
        </div>
      </div>

      {/* Optional page-specific note */}
      {pageNote && (
        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: 16, marginTop: 4 }}>
          <div style={microHeading}>About this page</div>
          <p style={bodyText}>{pageNote}</p>
        </div>
      )}

      {/* Footer line */}
      <p
        style={{
          borderTop: '1px solid #e2e8f0',
          paddingTop: 12,
          marginTop: pageNote ? 16 : 4,
          fontSize: 12,
          color: '#94a3b8',
          fontStyle: 'italic',
          margin: `${pageNote ? 16 : 4}px 0 0`,
        }}
      >
        Information current as at {currentAsAt}. Verify all requirements with the Department of Home Affairs (immi.homeaffairs.gov.au) before lodging any application.
      </p>
    </section>
  )
}
