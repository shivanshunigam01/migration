import React, { useState } from "react"
import { useIntakeSubmit } from "@/lib/api"
import { IntakeFormShell, inputStyle, labelStyle } from "@/components/forms/IntakeFormShell"
import { NAVY_DARK } from "@/theme"

export default function ContactForm() {
  const { submit, loading, error, success } = useIntakeSubmit("contact")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [message, setMessage] = useState("")
  const [consent, setConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [localError, setLocalError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setLocalError(null)
    const em = email.trim()
    if (!name.trim()) {
      setLocalError("Please enter your name.")
      return
    }
    if (!em && !mobile.trim()) {
      setLocalError("Please enter your email or mobile number.")
      return
    }
    if (em && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) {
      setLocalError("Please enter a valid email address.")
      return
    }
    if (!consent) {
      setLocalError("Please tick the consent box to continue.")
      return
    }

    await submit({
      company_website: hp,
      lead: {
        name: name.trim(),
        email: em,
        mobile: mobile.trim(),
        goal: message.trim() || "General enquiry",
        consent: { email: true, sms: !!mobile.trim(), wa: false },
      },
    })
  }

  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        padding: "32px 36px",
        boxShadow: "0 8px 40px rgba(13,22,50,0.10)",
        border: "1px solid #e8eaf0",
      }}
    >
      <h3
        style={{
          fontFamily: "'Gilroy', sans-serif",
          fontSize: 22,
          fontWeight: 600,
          color: NAVY_DARK,
          margin: "0 0 6px",
        }}
      >
        Send us a message
      </h3>
      <p style={{ fontSize: 13, color: "#6b7280", margin: "0 0 24px", lineHeight: 1.6 }}>
        Tell us about your situation and a registered migration agent will respond.
      </p>

      <IntakeFormShell
        onSubmit={handleSubmit}
        loading={loading}
        error={localError || error}
        success={success}
        honeypot={hp}
        onHoneypotChange={setHp}
        submitLabel="Send message →"
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="contact-name" style={labelStyle}>Full name *</label>
            <input
              id="contact-name"
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={inputStyle}
              autoComplete="name"
            />
          </div>
          <div>
            <label htmlFor="contact-mobile" style={labelStyle}>Mobile</label>
            <input
              id="contact-mobile"
              type="tel"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
              style={inputStyle}
              autoComplete="tel"
            />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="contact-email" style={labelStyle}>Email *</label>
          <input
            id="contact-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            autoComplete="email"
          />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="contact-message" style={labelStyle}>How can we help?</label>
          <textarea
            id="contact-message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            style={{ ...inputStyle, resize: "vertical" as const }}
          />
        </div>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ marginTop: 3, flexShrink: 0 }}
          />
          <span style={{ fontSize: 12, color: "#6b7280", lineHeight: 1.55 }}>
            I consent to Nanak Migration Group contacting me by email about my enquiry. General information only — not legal or migration advice.
          </span>
        </label>
      </IntakeFormShell>
    </div>
  )
}
