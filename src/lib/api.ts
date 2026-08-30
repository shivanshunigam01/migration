import { useCallback, useState } from "react"

const API_BASE = (
  import.meta.env.VITE_API_BASE_URL || "http://localhost:5001/api"
).replace(/\/$/, "")

export interface IntakeLead {
  name?: string
  email?: string
  mobile?: string
  phone?: string
  goal?: string
  occupation?: string
  location?: string
  subclass?: string
  source?: string
  article?: string
  consent?: { email?: boolean; sms?: boolean; wa?: boolean }
}

export interface IntakeBody {
  widget: string
  page?: string
  company_website?: string
  lead?: IntakeLead
  result?: { summary?: string; ref?: string; code?: string; title?: string; urgent?: boolean }
  fields?: Record<string, unknown>
}

export interface IntakeResponse {
  ok: boolean
  created?: boolean
  skipped?: boolean
}

export function intakeRefNumber(): string {
  const d = new Date()
  const yy = d.getFullYear().toString().slice(2)
  const mm = String(d.getMonth() + 1).padStart(2, "0")
  const rand = Math.floor(1000 + Math.random() * 9000)
  return `NMG-${yy}${mm}-${rand}`
}

export async function submitIntake(body: IntakeBody): Promise<IntakeResponse> {
  const res = await fetch(`${API_BASE}/intake`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      ...body,
      page: body.page ?? (typeof window !== "undefined" ? window.location.pathname : "/"),
    }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Request failed (${res.status})`)
  }
  return (json.data ?? json) as IntakeResponse
}

export function useIntakeSubmit(widget: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState(false)

  const submit = useCallback(
    async (body: Omit<IntakeBody, "widget">) => {
      setLoading(true)
      setError(null)
      try {
        const result = await submitIntake({ widget, ...body })
        setSuccess(true)
        return result
      } catch (err) {
        const message = err instanceof Error ? err.message : "Something went wrong. Please try again."
        setError(message)
        throw err
      } finally {
        setLoading(false)
      }
    },
    [widget],
  )

  const reset = useCallback(() => {
    setLoading(false)
    setError(null)
    setSuccess(false)
  }, [])

  return { submit, loading, error, success, reset }
}
