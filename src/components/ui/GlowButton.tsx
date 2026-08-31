import React, { useEffect, useRef } from "react"
import { animate } from "animejs"
import { subscribeBreath, startCtaTheatreBreath } from "@/lib/theatreCta"
import "@/components/ui/glowButton.css"

type GlowVariant = "gold" | "navy" | "outline"
type GlowSize = "sm" | "md" | "lg"

type CommonProps = {
  children: React.ReactNode
  variant?: GlowVariant
  size?: GlowSize
  block?: boolean
  className?: string
  style?: React.CSSProperties
  glow?: boolean
  /** Sync with Theatre-driven breath pulse */
  breathe?: boolean
}

type ButtonProps = CommonProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className" | "style"> & {
    as?: "button"
  }

type AnchorProps = CommonProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "children" | "className" | "style"> & {
    as: "a"
  }

export type GlowButtonProps = ButtonProps | AnchorProps

let breathStarted = false

function ensureBreath() {
  if (breathStarted || typeof window === "undefined") return
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
  breathStarted = true
  startCtaTheatreBreath()
}

export function GlowButton(props: GlowButtonProps) {
  const {
    children,
    variant = "gold",
    size = "md",
    block = false,
    className = "",
    style,
    glow = true,
    breathe = true,
    as,
    ...rest
  } = props

  const ref = useRef<HTMLButtonElement | HTMLAnchorElement>(null)
  const reduce =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches

  useEffect(() => {
    if (!breathe || reduce || !glow) return
    ensureBreath()
    const el = ref.current
    if (!el) return
    return subscribeBreath(({ intensity, bloom }) => {
      el.style.setProperty("--glow-opacity", String(intensity))
      el.style.setProperty("--glow-scale", String(bloom))
    })
  }, [breathe, glow, reduce])

  useEffect(() => {
    const el = ref.current
    if (!el || reduce) return

    // Mount pop — Anime.js
    animate(el, {
      scale: [0.92, 1],
      opacity: [0, 1],
      translateY: [10, 0],
      ease: "out(3)",
      duration: 520,
    })
  }, [reduce])

  function popIn() {
    const el = ref.current
    if (!el || reduce) return
    animate(el, {
      scale: 1.045,
      translateY: -4,
      duration: 280,
      ease: "out(3)",
    })
  }

  function popOut() {
    const el = ref.current
    if (!el || reduce) return
    animate(el, {
      scale: 1,
      translateY: 0,
      duration: 320,
      ease: "out(3)",
    })
  }

  function press() {
    const el = ref.current
    if (!el || reduce) return
    animate(el, {
      scale: 0.97,
      duration: 120,
      ease: "in(2)",
    })
  }

  const classes = [
    "glow-cta",
    `glow-cta--${variant}`,
    `glow-cta--${size}`,
    block ? "glow-cta--block" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ")

  const content = (
    <>
      {glow && <span className="glow-cta__shield" aria-hidden />}
      {glow && <span className="glow-cta__ring" aria-hidden />}
      <span className="glow-cta__shine" aria-hidden />
      <span className="glow-cta__inner">{children}</span>
    </>
  )

  if (as === "a") {
    const anchorRest = rest as Omit<
      React.AnchorHTMLAttributes<HTMLAnchorElement>,
      "children" | "className" | "style"
    >
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        className={classes}
        style={style}
        onMouseEnter={(e) => {
          popIn()
          anchorRest.onMouseEnter?.(e)
        }}
        onMouseLeave={(e) => {
          popOut()
          anchorRest.onMouseLeave?.(e)
        }}
        onMouseDown={(e) => {
          press()
          anchorRest.onMouseDown?.(e)
        }}
        onMouseUp={(e) => {
          popIn()
          anchorRest.onMouseUp?.(e)
        }}
        {...anchorRest}
      >
        {content}
      </a>
    )
  }

  const buttonRest = rest as Omit<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    "children" | "className" | "style"
  >
  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={buttonRest.type ?? "button"}
      className={classes}
      style={style}
      onMouseEnter={(e) => {
        popIn()
        buttonRest.onMouseEnter?.(e)
      }}
      onMouseLeave={(e) => {
        popOut()
        buttonRest.onMouseLeave?.(e)
      }}
      onMouseDown={(e) => {
        press()
        buttonRest.onMouseDown?.(e)
      }}
      onMouseUp={(e) => {
        popIn()
        buttonRest.onMouseUp?.(e)
      }}
      {...buttonRest}
    >
      {content}
    </button>
  )
}
