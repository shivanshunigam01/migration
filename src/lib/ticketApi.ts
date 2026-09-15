import { getApiBaseUrl } from "@/lib/apiBase"

const API_BASE = getApiBaseUrl()

export type GovernanceCategory =
  | "complaint"
  | "feedback"
  | "service-quality"
  | "billing"
  | "privacy"
  | "other"

export interface GovernanceSubmitBody {
  name: string
  email: string
  mobile?: string
  category: GovernanceCategory
  subject: string
  details: string
  relatedRef?: string
  consent: boolean
  company_website?: string
  turnstileToken?: string
}

export interface RefundSubmitBody {
  name: string
  email: string
  mobile?: string
  bookingRef?: string
  invoiceRef?: string
  amountAud?: number
  reason: string
  paymentMethod?: "stripe" | "bank" | "cash" | "other" | "unknown"
  consent: boolean
  company_website?: string
  turnstileToken?: string
}

export interface TicketSubmitResponse {
  ok: boolean
  id?: string
  ref?: string
  status?: string
  skipped?: boolean
}

async function postJson<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Request failed (${res.status})`)
  }
  return (json.data ?? json) as T
}

export function submitGovernanceTicket(body: GovernanceSubmitBody) {
  return postJson<TicketSubmitResponse>("/governance", body)
}

export function submitRefundRequest(body: RefundSubmitBody) {
  return postJson<TicketSubmitResponse>("/refund-requests", body)
}
