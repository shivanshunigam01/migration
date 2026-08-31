import { motion, useReducedMotion } from "framer-motion"
import {
  fadeUp,
  fadeScale,
  staggerContainer,
  staggerFast,
  viewportOnce,
} from "@/components/motion/variants"

type StaggerProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  fast?: boolean
  itemPreset?: "up" | "scale"
  amount?: number
}

/** Parent that staggers child RevealItem / motion children with variants. */
export function Stagger({
  children,
  className,
  style,
  fast = false,
  amount,
}: StaggerProps) {
  const reduce = useReducedMotion()

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={fast ? staggerFast : staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, amount: amount ?? 0.12 }}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  style,
  preset = "up",
}: {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  preset?: "up" | "scale"
  as?: "div" | "article" | "li"
}) {
  const reduce = useReducedMotion()
  const variants = preset === "scale" ? fadeScale : fadeUp

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    )
  }

  return (
    <motion.div className={className} style={style} variants={variants}>
      {children}
    </motion.div>
  )
}
