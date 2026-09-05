import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/app/router"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { PageTransition } from "@/components/motion"
import { RouteSeoSync } from "@/components/page/RouteSeoSync"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteSeoSync />
      <PageTransition>
        <main id="main-content">
          <AppRouter />
        </main>
      </PageTransition>
    </BrowserRouter>
  )
}
