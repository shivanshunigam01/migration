"use client"

/**
 * Compatibility shim so existing react-router-dom imports work under Next.js App Router.
 * Link uses `to` (RR API) mapped to Next `href`.
 */
import NextLink from "next/link"
import {
  useRouter,
  usePathname,
  useParams as useNextParams,
  useSearchParams as useSearchParamsNext,
} from "next/navigation"
import {
  forwardRef,
  useCallback,
  useEffect,
  useMemo,
  type AnchorHTMLAttributes,
  type ReactNode,
} from "react"

export function BrowserRouter({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Routes({ children }: { children?: ReactNode }) {
  return <>{children}</>
}

export function Route(_props: Record<string, unknown>) {
  return null
}

type To = string | { pathname?: string; search?: string; hash?: string }

function toHref(to: To): string {
  if (typeof to === "string") return to
  const path = to.pathname || "/"
  const search = to.search || ""
  const hash = to.hash || ""
  return `${path}${search}${hash}`
}

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & { to: To; replace?: boolean }
>(function Link({ to, replace, children, ...rest }, ref) {
  return (
    <NextLink ref={ref} href={toHref(to)} replace={replace} {...rest}>
      {children}
    </NextLink>
  )
})

export function NavLink(props: AnchorHTMLAttributes<HTMLAnchorElement> & { to: To }) {
  return <Link {...props} />
}

export function useNavigate() {
  const router = useRouter()
  return useCallback(
    (to: To | number, opts?: { replace?: boolean }) => {
      if (typeof to === "number") {
        if (to < 0) router.back()
        else router.forward()
        return
      }
      const href = toHref(to)
      if (opts?.replace) router.replace(href)
      else router.push(href)
    },
    [router],
  )
}

export function useLocation() {
  const pathname = usePathname() || "/"
  const searchParams = useSearchParamsNext()
  const search = searchParams?.toString() ? `?${searchParams.toString()}` : ""
  return useMemo(
    () => ({
      pathname,
      search,
      hash: typeof window !== "undefined" ? window.location.hash : "",
      state: null,
      key: pathname,
    }),
    [pathname, search],
  )
}

export function useParams<T extends Record<string, string | string[]> = Record<string, string>>() {
  const params = useNextParams()
  // Next catch-all gives string[]; blog/[slug] gives string — normalize slug to string when array of 1
  const out: Record<string, string> = {}
  for (const [k, v] of Object.entries(params || {})) {
    if (Array.isArray(v)) out[k] = v[v.length - 1] || v.join("/")
    else if (v != null) out[k] = String(v)
  }
  return out as T
}

export function Navigate({
  to,
  replace = false,
}: {
  to: To
  replace?: boolean
}) {
  const router = useRouter()
  useEffect(() => {
    const href = toHref(to)
    if (replace) router.replace(href)
    else router.push(href)
  }, [to, replace, router])
  return null
}

export function Outlet() {
  return null
}

export function useSearchParams() {
  const params = useSearchParamsNext()
  const router = useRouter()
  const pathname = usePathname() || "/"

  const setSearchParams = useCallback(
    (
      nextInit: URLSearchParams | Record<string, string> | string,
      _opts?: { replace?: boolean },
    ) => {
      let sp: URLSearchParams
      if (typeof nextInit === "string") sp = new URLSearchParams(nextInit)
      else if (nextInit instanceof URLSearchParams) sp = nextInit
      else sp = new URLSearchParams(nextInit)
      const qs = sp.toString()
      const href = qs ? `${pathname}?${qs}` : pathname
      if (_opts?.replace) router.replace(href)
      else router.push(href)
    },
    [pathname, router],
  )

  // Match react-router-dom tuple API: const [params] = useSearchParams()
  return [params, setSearchParams] as const
}

export function useSearchParamsRR() {
  return useSearchParams()
}
