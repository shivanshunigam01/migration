import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/app/router"
import ScrollToTop from "@/components/layout/ScrollToTop"
import { PageTransition } from "@/components/motion"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <PageTransition>
        <AppRouter />
      </PageTransition>
    </BrowserRouter>
  )
}
