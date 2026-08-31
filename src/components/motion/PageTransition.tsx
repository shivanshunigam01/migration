import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { useLocation } from "react-router-dom"
import { pageFade } from "@/components/motion/variants"

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation()
  const reduce = useReducedMotion()

  if (reduce) return <>{children}</>

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
