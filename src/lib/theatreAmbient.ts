import theatre from "@theatre/core"
import ambientState from "@/lib/theatreAmbientState"

const { getProject, types } = theatre

export type AmbientValues = {
  opacity: number
  scale: number
  x: number
  y: number
}

const project = getProject("Nanak Migration", { state: ambientState as object })
const sheet = project.sheet("Ambient")

export const glowA = sheet.object("GlowA", {
  opacity: types.number(0.35, { range: [0, 1] }),
  scale: types.number(1, { range: [0.5, 1.5] }),
  x: types.number(0, { range: [-60, 60] }),
  y: types.number(0, { range: [-60, 60] }),
})

export const glowB = sheet.object("GlowB", {
  opacity: types.number(0.55, { range: [0, 1] }),
  scale: types.number(1.1, { range: [0.5, 1.5] }),
  x: types.number(0, { range: [-60, 60] }),
  y: types.number(0, { range: [-60, 60] }),
})

let started = false

/** Start the looping Theatre ambient sequence once. */
export async function playAmbientSequence() {
  if (started) return
  started = true
  await project.ready
  sheet.sequence.play({
    iterationCount: Infinity,
    range: [0, 8],
  })
}

export function pauseAmbientSequence() {
  sheet.sequence.pause()
  started = false
}

export { project, sheet }
