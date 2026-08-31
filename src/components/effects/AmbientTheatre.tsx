import { useEffect, useRef, useState } from "react"
import theatre from "@theatre/core"
import {
  glowA,
  glowB,
  playAmbientSequence,
  type AmbientValues,
} from "@/lib/theatreAmbient"

const { onChange, val } = theatre

function useGlow(obj: typeof glowA) {
  const [values, setValues] = useState<AmbientValues>(() => ({
    opacity: val(obj.props.opacity),
    scale: val(obj.props.scale),
    x: val(obj.props.x),
    y: val(obj.props.y),
  }))

  useEffect(() => {
    return onChange(obj, () => {
      setValues({
        opacity: val(obj.props.opacity),
        scale: val(obj.props.scale),
        x: val(obj.props.x),
        y: val(obj.props.y),
      })
    })
  }, [obj])

  return values
}

type AmbientTheatreProps = {
  className?: string
  style?: React.CSSProperties
}

/**
 * Theatre.js-driven ambient shield layers — soft drifting gold/navy glows.
 * Production uses @theatre/core only (studio never ships).
 */
export function AmbientTheatre({ className, style }: AmbientTheatreProps) {
  const a = useGlow(glowA)
  const b = useGlow(glowB)
  const reduced = useRef(
    typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  )

  useEffect(() => {
    if (reduced.current) return
    void playAmbientSequence()
  }, [])

  if (reduced.current) return null

  return (
    <div
      aria-hidden className={className}
      style={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
        ...style,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "8%",
          right: "6%",
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(245,161,36,0.28) 0%, rgba(245,161,36,0.08) 42%, transparent 70%)",
          opacity: a.opacity,
          transform: `translate(${a.x}px, ${a.y}px) scale(${a.scale})`,
          willChange: "transform, opacity",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "4%",
          width: 480,
          height: 480,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(27,43,94,0.18) 0%, rgba(27,43,94,0.06) 45%, transparent 70%)",
          opacity: b.opacity,
          transform: `translate(${b.x}px, ${b.y}px) scale(${b.scale})`,
          willChange: "transform, opacity",
        }}
      />
    </div>
  )
}
