import { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import type { NavigateFn } from "@/types/navigation"
import { LEGACY_ROUTE_REDIRECTS } from "@/data/legacyRedirects"

export { LEGACY_ROUTE_REDIRECTS }

export function resolveRoute(page: string): string {
  if (page === "home" || page === "") return "/"
  if (page === "contact") return "/contact"
  if (page === "book" || page === "book-consultation" || page === "pre-assessment") {
    if (page === "book") return "/book"
    if (page === "pre-assessment") return "/pre-assessment"
    return "/book-consultation"
  }
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
