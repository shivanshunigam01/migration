import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/app/router"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { PageTransition } from "@/components/motion"
import { RouteSeoSync } from "@/components/page/RouteSeoSync"
import { CmsPageProvider } from "@/components/page/CmsPageProvider"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <CmsPageProvider>
        <RouteSeoSync />
        <PageTransition>
          <main id="main-content">
            <AppRouter />
          </main>
        </PageTransition>
      </CmsPageProvider>
    </BrowserRouter>
  )
}
