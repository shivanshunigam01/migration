import React from "react"
import { GOLD, NAVY, NAVY_DARK } from "@/theme"
import { GlowButton } from "@/components/ui/GlowButton"

const BORDER = "#e8edf6"

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "12px 14px",
  fontSize: 14,
  border: `1.5px solid ${BORDER}`,
  borderRadius: 8,
  outline: "none",
  color: NAVY_DARK,
  background: "#fff",
  fontFamily: "'Gilroy', sans-serif",
  boxSizing: "border-box",
}

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 12,
  fontWeight: 600,
  color: NAVY,
  marginBottom: 6,
}

export interface IntakeFormShellProps {
  onSubmit: (e: React.FormEvent) => void
  loading?: boolean
  error?: string | null
  success?: boolean
  successTitle?: string
  successMessage?: string
  submitLabel?: string
  children: React.ReactNode
  honeypot?: string
  onHoneypotChange?: (value: string) => void
}

export function IntakeFormShell({
  onSubmit,
  loading = false,
  error = null,
  success = false,
  successTitle = "Thank you — we received your enquiry",
  successMessage = "A registered migration agent will be in touch shortly.",
  submitLabel = "Send enquiry →",
  children,
  honeypot = "",
  onHoneypotChange,
}: IntakeFormShellProps) {
  if (success) {
    return (
      <div
        style={{
          background: "rgba(245,161,36,0.08)",
          border: "1px solid rgba(245,161,36,0.35)",
          borderRadius: 12,
          padding: "24px 28px",
        }}
      >
        <div style={{ fontSize: 16, fontWeight: 700, color: NAVY, marginBottom: 8 }}>{successTitle}</div>
        <div style={{ fontSize: 14, color: "#6b7280", lineHeight: 1.6 }}>{successMessage}</div>
      </div>
    )
  }

  return (
    <form onSubmit={onSubmit} noValidate>
      {children}

      {onHoneypotChange && (
        <input
          type="text"
          name="company_website"
          value={honeypot}
          onChange={(e) => onHoneypotChange(e.target.value)}
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
          style={{ position: "absolute", left: -9999, opacity: 0, height: 0, width: 0 }}
        />
      )}

      {error && (
        <div
          role="alert"
          style={{
            marginTop: 16,
            padding: "12px 14px",
            background: "rgba(220,38,38,0.08)",
            border: "1px solid rgba(220,38,38,0.35)",
            borderRadius: 8,
            fontSize: 13,
            color: "#dc2626",
            lineHeight: 1.5,
          }}
        >
          {error}
        </div>
      )}

      <GlowButton
        type="submit"
        disabled={loading}
        block
        size="lg"
        variant="navy"
        style={{ marginTop: 20, minHeight: 48 }}
      >
        {loading ? "Sending…" : submitLabel}
      </GlowButton>
    </form>
  )
}

export { inputStyle, labelStyle }
