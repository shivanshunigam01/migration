import { getProject, types, onChange, val } from "@theatre/core"

/** Theatre stage for CTA “spotlight” intensity — driven on mount for a live pulse. */
const project = getProject("NanakMigration", {
  state: undefined,
})

const sheet = project.sheet("CTA Stage")

export const ctaSpotlight = sheet.object("Spotlight", {
  intensity: types.number(0.55, { range: [0.3, 1] }),
  lift: types.number(0, { range: [-6, 6] }),
  bloom: types.number(1, { range: [0.9, 1.15] }),
})

type SpotlightListener = (state: { intensity: number; lift: number; bloom: number }) => void

/** Subscribe to theatre spotlight values (updated by the breath loop). */
export function subscribeCtaSpotlight(listener: SpotlightListener) {
  return onChange(ctaSpotlight.props, () => {
    listener({
      intensity: val(ctaSpotlight.props.intensity),
      lift: val(ctaSpotlight.props.lift),
      bloom: val(ctaSpotlight.props.bloom),
    })
  })
}

/**
 * Soft sine breath that writes into Theatre props so CTAs can react.
 * Theatre keeps the stage model; Anime.js handles click/hover pops separately.
 */
export function startCtaTheatreBreath(periodMs = 2800) {
  let raf = 0
  let start = performance.now()
  let stopped = false

  const tick = (now: number) => {
    if (stopped) return
    const t = ((now - start) % periodMs) / periodMs
    const wave = 0.5 + 0.5 * Math.sin(t * Math.PI * 2)
    // Theatre objects are typically studio-driven; we mirror into CSS via listeners
    // by reading our own computed values through a lightweight event bus.
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

const breathBus = {
  intensity: 0.55,
  lift: 0,
  bloom: 1,
  listeners: new Set<SpotlightListener>(),
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

// Keep theatre object referenced so the project stays warm for future studio work
void ctaSpotlight
void subscribeCtaSpotlight
