import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { useRef } from "react"
import { pageFade } from "@/components/motion/variants"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()
  const isFirstPaint = useRef(true)

  if (reduce) return <>{children}</>

  // Skip enter animation on first paint so LCP / FCP aren't delayed by opacity: 0.
  if (isFirstPaint.current) {
    isFirstPaint.current = false
    return <div style={{ minHeight: "100%" }}>{children}</div>
  }

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        variants={pageFade}
        initial="initial"
        animate="animate"
        exit="exit"
        style={{ minHeight: "100%" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
