import React, { useState } from "react"
import { useIntakeSubmit } from "@/lib/api"
import { IntakeFormShell, inputStyle, labelStyle } from "@/components/forms/IntakeFormShell"
import { NAVY_DARK } from "@/theme"

export default function BookConsultationForm() {
  const { submit, loading, error, success } = useIntakeSubmit("book-consultation")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [topic, setTopic] = useState("")
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
        goal: topic.trim() || "Book consultation",
        consent: { email: true, sms: !!mobile.trim(), wa: false },
      },
    })
  }

  return (
    <IntakeFormShell
      onSubmit={handleSubmit}
      loading={loading}
      error={localError || error}
      success={success}
      successTitle="Consultation request received"
      successMessage="Our team will contact you to confirm a time with a registered migration agent."
      honeypot={hp}
      onHoneypotChange={setHp}
      submitLabel="Request consultation →"
    >
      <div style={{ marginBottom: 16 }}>
        <label htmlFor="book-name" style={labelStyle}>Full name *</label>
        <input
          id="book-name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={inputStyle}
          autoComplete="name"
        />
      </div>

      <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        <div>
          <label htmlFor="book-email" style={labelStyle}>Email *</label>
          <input
            id="book-email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
            autoComplete="email"
          />
        </div>
        <div>
          <label htmlFor="book-mobile" style={labelStyle}>Mobile *</label>
          <input
            id="book-mobile"
            type="tel"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            style={inputStyle}
            autoComplete="tel"
          />
        </div>
      </div>

      <div style={{ marginBottom: 16 }}>
        <label htmlFor="book-topic" style={labelStyle}>What would you like to discuss?</label>
        <textarea
          id="book-topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          rows={3}
          placeholder="e.g. 482 visa sponsorship, partner visa, points test…"
          style={{ ...inputStyle, resize: "vertical" as const, color: NAVY_DARK }}
        />
      </div>

      <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
          style={{ marginTop: 3, flexShrink: 0 }}
        />
        <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>
          I consent to Nanak Migration Group contacting me by email or phone to arrange a consultation. General information only — not legal or migration advice.
        </span>
      </label>
    </IntakeFormShell>
  )
}
