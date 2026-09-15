import React, { useState } from "react"
import { Link } from "react-router-dom"
import { submitGovernanceTicket, type GovernanceCategory } from "@/lib/ticketApi"
import { IntakeFormShell, inputStyle, labelStyle } from "@/components/forms/IntakeFormShell"
import { TurnstileField, turnstileConfigured } from "@/components/forms/TurnstileField"
import { NAVY_DARK } from "@/theme"

const CATEGORIES: { value: GovernanceCategory; label: string }[] = [
  { value: "complaint", label: "Complaint" },
  { value: "feedback", label: "Feedback" },
  { value: "service-quality", label: "Service quality" },
  { value: "billing", label: "Billing / fees" },
  { value: "privacy", label: "Privacy" },
  { value: "other", label: "Other" },
]

export default function GovernanceForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [category, setCategory] = useState<GovernanceCategory>("complaint")
  const [subject, setSubject] = useState("")
  const [details, setDetails] = useState("")
  const [relatedRef, setRelatedRef] = useState("")
  const [consent, setConsent] = useState(false)
  const [hp, setHp] = useState("")
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [successRef, setSuccessRef] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const em = email.trim()
    if (!name.trim()) return setError("Please enter your name.")
    if (!em || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(em)) return setError("Please enter a valid email address.")
    if (!subject.trim()) return setError("Please enter a subject.")
    if (details.trim().length < 20) return setError("Please provide more detail (at least 20 characters).")
    if (!consent) return setError("Please tick the consent box to continue.")
    if (turnstileConfigured() && !turnstileToken) return setError("Please complete the captcha and try again.")

    setLoading(true)
    try {
      const result = await submitGovernanceTicket({
        company_website: hp,
        turnstileToken: turnstileToken || undefined,
        name: name.trim(),
        email: em,
        mobile: mobile.trim(),
        category,
        subject: subject.trim(),
        details: details.trim(),
        relatedRef: relatedRef.trim(),
        consent: true,
      })
      setSuccessRef(result.ref || "submitted")
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
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
          fontSize: 23,
          fontWeight: 600,
          color: NAVY_DARK,
          margin: "0 0 6px",
        }}
      >
        Raise a governance ticket
      </h3>
      <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px", lineHeight: 1.6 }}>
        Use this form for complaints, feedback or service concerns. We aim to acknowledge tickets within two business days.
      </p>

      <IntakeFormShell
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        success={!!successRef}
        successTitle="Ticket received"
        successMessage={
          successRef && successRef !== "submitted"
            ? `Your reference is ${successRef}. Keep this number for follow-up.`
            : "Your governance ticket has been lodged. We will follow up by email."
        }
        honeypot={hp}
        onHoneypotChange={setHp}
        submitLabel="Submit ticket →"
      >
        <div className="grid-2 form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="gov-name" style={labelStyle}>Full name *</label>
            <input id="gov-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="gov-mobile" style={labelStyle}>Mobile</label>
            <input id="gov-mobile" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} autoComplete="tel" />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="gov-email" style={labelStyle}>Email *</label>
          <input id="gov-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} autoComplete="email" />
        </div>

        <div className="grid-2 form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="gov-category" style={labelStyle}>Category *</label>
            <select id="gov-category" value={category} onChange={(e) => setCategory(e.target.value as GovernanceCategory)} style={inputStyle}>
              {CATEGORIES.map((c) => (
                <option key={c.value} value={c.value}>{c.label}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="gov-related" style={labelStyle}>Related booking / matter ref</label>
            <input id="gov-related" type="text" value={relatedRef} onChange={(e) => setRelatedRef(e.target.value)} style={inputStyle} placeholder="Optional" />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="gov-subject" style={labelStyle}>Subject *</label>
          <input id="gov-subject" type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} style={inputStyle} />
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="gov-details" style={labelStyle}>Details *</label>
          <textarea
            id="gov-details"
            required
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            rows={5}
            style={{ ...inputStyle, resize: "vertical" as const }}
            placeholder="Describe what happened, when, and what outcome you are seeking."
          />
        </div>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>
            I consent to Nanak Migration Group contacting me about this ticket. See our{" "}
            <Link to="/privacy" style={{ color: NAVY_DARK, fontWeight: 600 }}>Privacy Policy</Link>.
          </span>
        </label>
        <TurnstileField onToken={setTurnstileToken} />
      </IntakeFormShell>
    </div>
  )
}
