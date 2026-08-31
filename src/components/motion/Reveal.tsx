import { motion, useReducedMotion, type HTMLMotionProps, type Variants } from "framer-motion"
import {
  fadeUp,
  fadeIn,
  fadeScale,
  slideLeft,
  slideRight,
  shieldPop,
  viewportOnce,
} from "@/components/motion/variants"

const PRESETS: Record<string, Variants> = {
  up: fadeUp,
  in: fadeIn,
  scale: fadeScale,
  left: slideLeft,
  right: slideRight,
  shield: shieldPop,
}

export type RevealPreset = keyof typeof PRESETS

type RevealProps = {
  children: React.ReactNode
  preset?: RevealPreset
  delay?: number
  className?: string
  style?: React.CSSProperties
  as?: keyof typeof motion
  amount?: number
  once?: boolean
} & Omit<HTMLMotionProps<"div">, "children" | "variants" | "initial" | "whileInView" | "viewport">

export function Reveal({
  children,
  preset = "up",
  delay = 0,
  className,
  style,
  amount,
  once = true,
  ...rest
}: RevealProps) {
  const reduce = useReducedMotion()
  const variants = PRESETS[preset] ?? fadeUp

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
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ ...viewportOnce, once, amount: amount ?? viewportOnce.amount }}
      transition={delay ? { delay } : undefined}
      custom={delay}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
