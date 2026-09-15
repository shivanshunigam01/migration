import { getApiBaseUrl } from '@/lib/apiBase'

export type PublicConsultType = {
  id: string
  name: string
  dur: number
  fee: number
  who: string
  desc: string
}

export type PublicBookingOptions = {
  consultTypes: PublicConsultType[]
  offices: string[]
  heard: string[]
  takenSlots: string[]
}

export type PendingOafBooking = {
  id: string
  at: string
  type: string
  mode: string
  office: string
  name: string
  consultType: PublicConsultType
  oafStatus: string
}

export async function fetchPublicBookingOptions(): Promise<PublicBookingOptions> {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/options`)
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Could not load booking options (${res.status})`)
  }
  return json.data as PublicBookingOptions
}

export async function createPublicBooking(body: Record<string, unknown>) {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Booking failed (${res.status})`)
  }
  return json.data as {
    id: string
    at: string
    type: string
    mode: string
    office: string
    consultType: PublicConsultType
    ok: boolean
    skipped?: boolean
  }
}

export async function createPublicCheckout(body: Record<string, unknown>) {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/checkout`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Checkout failed (${res.status})`)
  }
  return json.data as {
    ok: boolean
    bookingId: string
    sessionId: string
    url: string
    amountCents: number
    consultType: PublicConsultType
  }
}

export async function confirmPublicPayment(sessionId: string) {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/confirm-payment`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ sessionId }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Payment confirmation failed (${res.status})`)
  }
  return json.data as {
    ok: boolean
    paid: boolean
    id: string
    at: string
    type: string
    mode: string
    office: string
    name: string
    consultType: PublicConsultType
    payment?: { status: string; amountCents: number; paidAt?: string }
  }
}

export async function cancelPendingBooking(bookingId: string) {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/cancel-pending`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ bookingId }),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Cancel failed (${res.status})`)
  }
  return json.data as { ok: boolean }
}

export async function fetchPendingOafBookings(email: string): Promise<PendingOafBooking[]> {
  const q = new URLSearchParams({ email: email.trim().toLowerCase() })
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/pending-oaf?${q}`)
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Could not find bookings (${res.status})`)
  }
  return (json.data?.bookings ?? []) as PendingOafBooking[]
}

export async function submitPublicOaf(body: Record<string, unknown>) {
  const res = await fetch(`${getApiBaseUrl()}/public/bookings/oaf`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const json = await res.json().catch(() => ({}))
  if (!res.ok || json.success === false) {
    throw new Error(json.message || `Assessment failed (${res.status})`)
  }
  return json.data as {
    ok: boolean
    bookingId: string
    at: string
    consultType: PublicConsultType
    name: string
    leadUpdated: boolean
    skipped?: boolean
  }
}
