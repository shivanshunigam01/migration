import { createContext, useContext, type ReactNode } from "react"

const RouteKeyContext = createContext<string | null>(null)

export function RouteKeyProvider({
  routeKey,
  children,
}: {
  routeKey: string
  children: ReactNode
}) {
  const key = routeKey.replace(/^\/+|\/+$/g, "") || "home"
  return <RouteKeyContext.Provider value={key}>{children}</RouteKeyContext.Provider>
}

export function useRouteKey(): string | null {
  return useContext(RouteKeyContext)
}
