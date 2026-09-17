"use client"

import { usePathname } from "next/navigation"

/** Key page content by route so soft navigations always swap the tree (incl. leaving `/`). */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname() || "/"
  return (
    <div key={pathname} style={{ minHeight: "100%" }}>
      {children}
    </div>
  )
}
