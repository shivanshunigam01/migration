/** Production API — used for Vercel/public site builds. */
export const PRODUCTION_API_BASE_URL = "https://api.nanakmigration.com.au/api"

/** Resolve backend API base URL for dev vs production builds. */
export function getApiBaseUrl(): string {
  const fromEnv = import.meta.env.VITE_API_BASE_URL?.trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")

  if (import.meta.env.DEV) return "http://localhost:5001/api"

  return PRODUCTION_API_BASE_URL
}
