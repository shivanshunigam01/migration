import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import type { NavigateFn } from "@/types/navigation"

// Legacy route redirects — serve these as permanent 301s in production.
export const LEGACY_ROUTE_REDIRECTS: Record<string, string> = {
  "employer-sponsorship": "employer-sponsored-visas",
  "enomination-186": "employer-nomination-scheme",
  "skills-482": "skills-in-demand-visa",
  sbs: "standard-business-sponsorship",
  "skilled-189": "skilled-independent-189",
  "graduate-485": "temporary-graduate-485",
  "student-500": "student-visa-500",
  "student-to-pr": "student-to-pr-pathway",
  "partner-family": "partner-family-visas",
  "partner-820": "partner-visa-820-801",
  "partner-309": "partner-visa-309-100",
}

export function resolveRoute(page: string): string {
  if (page === "home" || page === "") return "/"
  if (page === "contact") return "/contact"
  if (page === "book-consultation") return "/book-consultation"
  if (page === "privacy") return "/privacy"
  if (page === "terms") return "/terms"
  if (page === "accessibility") return "/accessibility"
  if (page === "sitemap") return "/sitemap.xml"
  if (page.startsWith("#") || page.startsWith("http")) return page
  const canonical = LEGACY_ROUTE_REDIRECTS[page] ?? page
  return `/${canonical}`
}

export function useAppNavigate(): NavigateFn {
  const navigate = useNavigate()

  return useCallback(
    (page: string) => {
      if (page.startsWith("#")) {
        if (window.location.pathname !== "/") {
          navigate(`/${page}`)
          return
        }
        document.querySelector(page)?.scrollIntoView({ behavior: "smooth" })
        return
      }

      if (page === "contact") {
        navigate("/contact")
        window.scrollTo({ top: 0, behavior: "smooth" })
        return
      }

      const path = resolveRoute(page)
      if (path.startsWith("http")) {
        window.location.href = path
        return
      }

      if (path.endsWith(".xml")) {
        window.location.href = path
        return
      }

      navigate(path)
      window.scrollTo({ top: 0, behavior: "smooth" })
    },
    [navigate],
  )
}
