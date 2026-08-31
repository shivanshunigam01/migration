import { motion, useReducedMotion } from "framer-motion"

type ShieldGlowProps = {
  /** navy | gold | soft white */
  tone?: "navy" | "gold" | "soft"
  size?: number
  top?: string | number
  left?: string | number
  right?: string | number
  bottom?: string | number
  opacity?: number
  pulse?: boolean
  style?: React.CSSProperties
}

const TONES = {
  navy: "radial-gradient(circle, rgba(27,43,94,0.14) 0%, rgba(27,43,94,0.04) 40%, transparent 68%)",
  gold: "radial-gradient(circle, rgba(245,161,36,0.22) 0%, rgba(245,161,36,0.06) 42%, transparent 70%)",
  soft: "radial-gradient(circle, rgba(255,255,255,0.85) 0%, rgba(255,255,255,0.2) 45%, transparent 70%)",
}

/** Soft atmospheric “shield” blob — subtle pulse for depth behind sections. */
export function ShieldGlow({
  tone = "navy",
  size = 520,
  top,
  left,
  right,
  bottom,
  opacity = 1,
  pulse = true,
  style,
}: ShieldGlowProps) {
  const reduce = useReducedMotion()

  return (
    <motion.div
      aria-hidden
      style={{
        position: "absolute",
        width: size,
        height: size,
        borderRadius: "50%",
        background: TONES[tone],
        pointerEvents: "none",
        zIndex: 0,
        top,
        left,
        right,
        bottom,
        opacity,
        ...style,
      }}
      initial={reduce ? false : { scale: 0.85, opacity: 0 }}
      whileInView={reduce ? undefined : { scale: 1, opacity }}
      viewport={{ once: true, amount: 0.1 }}
      animate={
        reduce || !pulse
          ? undefined
          : {
              scale: [1, 1.06, 1],
              opacity: [opacity * 0.85, opacity, opacity * 0.85],
            }
      }
      transition={
        pulse && !reduce
          ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
          : { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
      }
    />
  )
}
