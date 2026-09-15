import React, { useState } from "react"
import { Link } from "react-router-dom"
import { submitRefundRequest } from "@/lib/ticketApi"
import { IntakeFormShell, inputStyle, labelStyle } from "@/components/forms/IntakeFormShell"
import { TurnstileField, turnstileConfigured } from "@/components/forms/TurnstileField"
import { NAVY_DARK } from "@/theme"

const METHODS = [
  { value: "stripe", label: "Card / Stripe" },
  { value: "bank", label: "Bank transfer" },
  { value: "cash", label: "Cash" },
  { value: "other", label: "Other" },
  { value: "unknown", label: "Not sure" },
] as const

export default function RefundForm() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [mobile, setMobile] = useState("")
  const [bookingRef, setBookingRef] = useState("")
  const [invoiceRef, setInvoiceRef] = useState("")
  const [amountAud, setAmountAud] = useState("")
  const [paymentMethod, setPaymentMethod] = useState<(typeof METHODS)[number]["value"]>("stripe")
  const [reason, setReason] = useState("")
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
    if (reason.trim().length < 20) return setError("Please explain the refund reason (at least 20 characters).")
    if (!consent) return setError("Please tick the consent box to continue.")
    if (turnstileConfigured() && !turnstileToken) return setError("Please complete the captcha and try again.")

    setLoading(true)
    try {
      const result = await submitRefundRequest({
        company_website: hp,
        turnstileToken: turnstileToken || undefined,
        name: name.trim(),
        email: em,
        mobile: mobile.trim(),
        bookingRef: bookingRef.trim(),
        invoiceRef: invoiceRef.trim(),
        amountAud: amountAud ? Number(amountAud) : 0,
        paymentMethod,
        reason: reason.trim(),
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
        Request a refund
      </h3>
      <p style={{ fontSize: 14, color: "#6b7280", margin: "0 0 24px", lineHeight: 1.6 }}>
        Submit your payment details and reason. Refund eligibility follows our{" "}
        <Link to="/terms" style={{ color: NAVY_DARK, fontWeight: 600 }}>Terms of Use</Link> and any written service agreement.
      </p>

      <IntakeFormShell
        onSubmit={handleSubmit}
        loading={loading}
        error={error}
        success={!!successRef}
        successTitle="Refund request received"
        successMessage={
          successRef && successRef !== "submitted"
            ? `Your reference is ${successRef}. We will review and reply by email.`
            : "Your refund request has been lodged. We will review and reply by email."
        }
        honeypot={hp}
        onHoneypotChange={setHp}
        submitLabel="Submit refund request →"
      >
        <div className="grid-2 form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="ref-name" style={labelStyle}>Full name *</label>
            <input id="ref-name" type="text" required value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} autoComplete="name" />
          </div>
          <div>
            <label htmlFor="ref-mobile" style={labelStyle}>Mobile</label>
            <input id="ref-mobile" type="tel" value={mobile} onChange={(e) => setMobile(e.target.value)} style={inputStyle} autoComplete="tel" />
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="ref-email" style={labelStyle}>Email *</label>
          <input id="ref-email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} style={inputStyle} autoComplete="email" />
        </div>

        <div className="grid-2 form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="ref-booking" style={labelStyle}>Booking reference</label>
            <input id="ref-booking" type="text" value={bookingRef} onChange={(e) => setBookingRef(e.target.value)} style={inputStyle} placeholder="Optional" />
          </div>
          <div>
            <label htmlFor="ref-invoice" style={labelStyle}>Invoice / receipt number</label>
            <input id="ref-invoice" type="text" value={invoiceRef} onChange={(e) => setInvoiceRef(e.target.value)} style={inputStyle} placeholder="Optional" />
          </div>
        </div>

        <div className="grid-2 form-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
          <div>
            <label htmlFor="ref-amount" style={labelStyle}>Amount (AUD)</label>
            <input
              id="ref-amount"
              type="number"
              min={0}
              step="0.01"
              value={amountAud}
              onChange={(e) => setAmountAud(e.target.value)}
              style={inputStyle}
              placeholder="0.00"
            />
          </div>
          <div>
            <label htmlFor="ref-method" style={labelStyle}>Payment method</label>
            <select id="ref-method" value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value as typeof paymentMethod)} style={inputStyle}>
              {METHODS.map((m) => (
                <option key={m.value} value={m.value}>{m.label}</option>
              ))}
            </select>
          </div>
        </div>

        <div style={{ marginBottom: 16 }}>
          <label htmlFor="ref-reason" style={labelStyle}>Reason for refund *</label>
          <textarea
            id="ref-reason"
            required
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            rows={5}
            style={{ ...inputStyle, resize: "vertical" as const }}
            placeholder="Explain why you are requesting a refund and any relevant dates."
          />
        </div>

        <label style={{ display: "flex", gap: 10, alignItems: "flex-start", cursor: "pointer" }}>
          <input type="checkbox" checked={consent} onChange={(e) => setConsent(e.target.checked)} style={{ marginTop: 3, flexShrink: 0 }} />
          <span style={{ fontSize: 13, color: "#6b7280", lineHeight: 1.55 }}>
            I confirm the details above are accurate and consent to Nanak Migration Group contacting me about this request.
            See our <Link to="/privacy" style={{ color: NAVY_DARK, fontWeight: 600 }}>Privacy Policy</Link>.
          </span>
        </label>
        <TurnstileField onToken={setTurnstileToken} />
      </IntakeFormShell>
    </div>
  )
}
