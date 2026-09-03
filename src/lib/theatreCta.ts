/**
 * Soft CTA “breath” pulse — CSS custom properties only.
 * Theatre.js was previously used here with an empty project state, which
 * threw in production; the breath bus alone drives GlowButton intensity.
 */

type SpotlightListener = (state: { intensity: number; lift: number; bloom: number }) => void

const breathBus = {
  intensity: 0.55,
  lift: 0,
  bloom: 1,
  listeners: new Set<SpotlightListener>(),
}

/** Soft sine breath that updates CTA glow intensity. */
export function startCtaTheatreBreath(periodMs = 2800) {
  let raf = 0
  let start = performance.now()
  let stopped = false

  const tick = (now: number) => {
    if (stopped) return
    const t = ((now - start) % periodMs) / periodMs
    const wave = 0.5 + 0.5 * Math.sin(t * Math.PI * 2)
    breathBus.intensity = 0.4 + wave * 0.45
    breathBus.lift = -wave * 2.5
    breathBus.bloom = 0.96 + wave * 0.1
    breathBus.listeners.forEach((fn) =>
      fn({ intensity: breathBus.intensity, lift: breathBus.lift, bloom: breathBus.bloom }),
    )
    raf = requestAnimationFrame(tick)
  }

  raf = requestAnimationFrame(tick)
  return () => {
    stopped = true
    cancelAnimationFrame(raf)
  }
}

export function subscribeBreath(listener: SpotlightListener) {
  breathBus.listeners.add(listener)
  listener({
    intensity: breathBus.intensity,
    lift: breathBus.lift,
    bloom: breathBus.bloom,
  })
  return () => {
    breathBus.listeners.delete(listener)
  }
}
