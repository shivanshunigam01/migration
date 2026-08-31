import { useEffect, useRef } from "react"
import { animate, createTimeline, stagger, utils } from "animejs"

type FloatingParticlesProps = {
  count?: number
  color?: string
  /** gold accents on dark, navy on light */
  tone?: "gold" | "navy" | "mixed"
}

/**
 * Anime.js floating particle field — soft sparkles that drift endlessly.
 */
export function FloatingParticles({
  count = 18,
  tone = "mixed",
}: FloatingParticlesProps) {
  const rootRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const root = rootRef.current
    if (!root) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const dots = Array.from(root.querySelectorAll<HTMLElement>(".nm-particle"))
    const timeline = createTimeline({
      defaults: { ease: "inOutSine", loop: true },
    })

    dots.forEach((dot, i) => {
      const dx = utils.random(-40, 40)
      const dy = utils.random(-50, 50)
      const dur = utils.random(3200, 6200)
      timeline.add(
        dot,
        {
          translateX: [0, dx, 0],
          translateY: [0, dy, 0],
          opacity: [
            { to: utils.random(0.15, 0.45), duration: dur / 2 },
            { to: utils.random(0.05, 0.2), duration: dur / 2 },
          ],
          scale: [
            { to: utils.random(0.7, 1.35), duration: dur / 2 },
            { to: utils.random(0.6, 1), duration: dur / 2 },
          ],
          duration: dur,
          delay: i * 80,
        },
        0,
      )
    })

    return () => {
      timeline.cancel()
    }
  }, [count, tone])

  const colors =
    tone === "gold"
      ? ["rgba(245,161,36,0.9)", "rgba(255,210,120,0.7)"]
      : tone === "navy"
        ? ["rgba(27,43,94,0.55)", "rgba(80,110,180,0.45)"]
        : ["rgba(245,161,36,0.85)", "rgba(27,43,94,0.45)", "rgba(255,255,255,0.55)"]

  return (
    <div
      ref={rootRef}
      aria-hidden
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      {Array.from({ length: count }).map((_, i) => {
        const size = 3 + (i % 5)
        const left = ((i * 37) % 100)
        const top = ((i * 53) % 100)
        return (
          <span
            key={i} className="nm-particle"
            style={{
              position: "absolute",
              left: `${left}%`,
              top: `${top}%`,
              width: size,
              height: size,
              borderRadius: "50%",
              background: colors[i % colors.length],
              boxShadow: `0 0 ${size * 3}px ${colors[i % colors.length]}`,
              opacity: 0.25,
            }}
          />
        )
      })}
    </div>
  )
}

type CountUpProps = {
  value: number | string
  /** Animate only when numeric; strings render as-is with fade */
  duration?: number
  style?: React.CSSProperties
  className?: string
  suffix?: string
}

/** Anime.js count-up for numeric stats; non-numeric values fade in. */
export function CountUp({
  value,
  duration = 1400,
  style,
  className,
  suffix = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const numeric = typeof value === "number" ? value : Number(String(value).replace(/[^\d.]/g, ""))
  const isNumeric = Number.isFinite(numeric) && String(value).match(/^\d/)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`
      return
    }

    if (!isNumeric) {
      animate(el, { opacity: [0, 1], duration: 600, ease: "outQuad" })
      el.textContent = `${value}${suffix}`
      return
    }

    const proxy = { n: 0 }
    const anim = animate(proxy, {
      n: numeric,
      duration,
      ease: "outExpo",
      modifier: utils.round(0),
      onUpdate: () => {
        el.textContent = `${Math.round(proxy.n)}${suffix}`
      },
    })

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          anim.play()
          io.disconnect()
        }
      },
      { threshold: 0.4 },
    )
    anim.pause()
    io.observe(el)
    return () => {
      io.disconnect()
      anim.cancel()
    }
  }, [value, duration, suffix, isNumeric, numeric])

  return (
    <span ref={ref} className={className} style={style}>
      {isNumeric ? `0${suffix}` : `${value}${suffix}`}
    </span>
  )
}

type MagneticProps = {
  children: React.ReactNode
  strength?: number
  style?: React.CSSProperties
  className?: string
  as?: "div" | "span"
}

/** Anime.js magnetic hover — element gently follows the cursor. */
export function Magnetic({
  children,
  strength = 18,
  style,
  className,
  as: Tag = "div",
}: MagneticProps) {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const dx = e.clientX - (rect.left + rect.width / 2)
      const dy = e.clientY - (rect.top + rect.height / 2)
      animate(el, {
        translateX: (dx / rect.width) * strength,
        translateY: (dy / rect.height) * strength,
        duration: 350,
        ease: "outQuad",
      })
    }
    const onLeave = () => {
      animate(el, {
        translateX: 0,
        translateY: 0,
        duration: 500,
        ease: "outElastic(1, 0.5)",
      })
    }

    el.addEventListener("mousemove", onMove)
    el.addEventListener("mouseleave", onLeave)
    return () => {
      el.removeEventListener("mousemove", onMove)
      el.removeEventListener("mouseleave", onLeave)
    }
  }, [strength])

  return (
    // @ts-expect-error polymorphic tag
    <Tag ref={ref} className={className} style={{ display: "inline-block", ...style }}>
      {children}
    </Tag>
  )
}

/** Staggered anime.js entrance for direct DOM children when scrolled into view. */
export function useAnimeStagger(deps: unknown[] = []) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    const kids = el.children
    utils.set(kids, { opacity: 0, translateY: 28 })

    const io = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        animate(kids, {
          opacity: [0, 1],
          translateY: [28, 0],
          delay: stagger(70),
          duration: 700,
          ease: "outExpo",
        })
        io.disconnect()
      },
      { threshold: 0.15 },
    )
    io.observe(el)
    return () => io.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps)

  return ref
}
