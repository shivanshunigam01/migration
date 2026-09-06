/** Resolve backend API base URL for Next.js (server + client). */
export const PRODUCTION_API_BASE_URL = "https://api.nanakmigration.com.au/api"

export function getApiBaseUrl(): string {
  const fromEnv = (
    process.env.NEXT_PUBLIC_API_BASE_URL ||
    process.env.VITE_API_BASE_URL ||
    ""
  ).trim()
  if (fromEnv) return fromEnv.replace(/\/$/, "")

  if (process.env.NODE_ENV === "development") return "http://localhost:5001/api"

  return PRODUCTION_API_BASE_URL
}
