import { BrowserRouter } from "react-router-dom"
import AppRouter from "@/app/router"
import ScrollToTop from "@/components/layout/ScrollToTop"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AppRouter />
    </BrowserRouter>
  )
}
