"use client"

import type { ReactNode } from "react"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { PageTransition } from "@/components/motion"
import { RouteSeoSync } from "@/components/page/RouteSeoSync"
import { CmsPageProvider } from "@/components/page/CmsPageProvider"

/** Client providers — mirrors the old Vite App shell without #root / BrowserRouter. */
export function Providers({ children }: { children: ReactNode }) {
  return (
    <CmsPageProvider>
      <ScrollToTop />
      <RouteSeoSync />
      <PageTransition>
        <main id="main-content">{children}</main>
      </PageTransition>
    </CmsPageProvider>
  )
}
