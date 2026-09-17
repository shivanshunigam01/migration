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
  type MouseEvent,
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

function normalizePath(path: string): string {
  const base = path.split("#")[0]?.split("?")[0] ?? "/"
  return base.replace(/\/+$/, "") || "/"
}

export const Link = forwardRef<
  HTMLAnchorElement,
  AnchorHTMLAttributes<HTMLAnchorElement> & { to: To; replace?: boolean }
>(function Link({ to, replace, children, onClick, ...rest }, ref) {
  const router = useRouter()
  const pathname = usePathname() || "/"
  const href = toHref(to)

  const handleClick = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      onClick?.(e)
      if (e.defaultPrevented) return
      if (
        href.startsWith("http") ||
        href.startsWith("mailto:") ||
        href.startsWith("tel:") ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey ||
        e.button !== 0
      ) {
        return
      }

      const targetPath = normalizePath(href)
      const currentPath = normalizePath(pathname)
      if (targetPath === currentPath && !href.includes("#")) return

      e.preventDefault()
      if (replace) router.replace(href)
      else router.push(href)

      // Leaving `/` used to stay on the home segment; hard-nav if soft routing stalls.
      if (currentPath === "/") {
        window.setTimeout(() => {
          const live = normalizePath(window.location.pathname)
          if (live === "/" && targetPath !== "/") {
            window.location.assign(href)
          }
        }, 120)
      }
    },
    [href, onClick, pathname, replace, router],
  )

  return (
    <NextLink
      ref={ref}
      href={href}
      replace={replace}
      scroll={!href.includes("#")}
      onClick={handleClick}
      {...rest}
    >
      {children}
    </NextLink>
  )
})

export function NavLink(props: AnchorHTMLAttributes<HTMLAnchorElement> & { to: To }) {
  return <Link {...props} />
}

export function useNavigate() {
  const router = useRouter()
  const pathname = usePathname() || "/"

  return useCallback(
    (to: To | number, opts?: { replace?: boolean }) => {
      if (typeof to === "number") {
        if (to < 0) router.back()
        else router.forward()
        return
      }
      const href = toHref(to)
      const targetPath = normalizePath(href)
      const currentPath = normalizePath(pathname)

      if (opts?.replace) router.replace(href)
      else router.push(href)

      if (currentPath === "/" && targetPath !== "/") {
        window.setTimeout(() => {
          const live = normalizePath(window.location.pathname)
          if (live === "/" && targetPath !== "/") {
            window.location.assign(href)
          }
        }, 120)
      }
    },
    [pathname, router],
  )
}

export function useLocation() {
  const pathname = usePathname() || "/"
  const search =
    typeof window !== "undefined" && window.location.search ? window.location.search : ""
  const hash =
    typeof window !== "undefined" && window.location.hash ? window.location.hash : ""
  return useMemo(
    () => ({
      pathname,
      search,
      hash,
      state: null,
      key: pathname,
    }),
    [pathname, search, hash],
  )
}

export function useParams<T extends Record<string, string | string[]> = Record<string, string>>() {
  const params = useNextParams()
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

  return [params, setSearchParams] as const
}

export function useSearchParamsRR() {
  return useSearchParams()
}
