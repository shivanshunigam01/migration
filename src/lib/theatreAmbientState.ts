/**
 * Minimal Theatre.js project state — looping ambient glow choreography.
 * Authored for production playback with @theatre/core only (no studio in bundle).
 */
const projectState = {
  sheetsById: {
    Ambient: {
      staticOverrides: { byObject: {} },
      sequence: {
        subUnitsPerUnit: 30,
        length: 8,
        type: "Pointer",
        tracksByObject: {
          GlowA: {
            trackData: {
              opaA: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowA","opacity"]',
                keyframes: [
                  { id: "a0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.35 },
                  { id: "a1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.7 },
                  { id: "a2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.35 },
                ],
              },
              sclA: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowA","scale"]',
                keyframes: [
                  { id: "s0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 1 },
                  { id: "s1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 1.18 },
                  { id: "s2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 1 },
                ],
              },
              xA: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowA","x"]',
                keyframes: [
                  { id: "x0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                  { id: "x1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 28 },
                  { id: "x2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                ],
              },
              yA: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowA","y"]',
                keyframes: [
                  { id: "y0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                  { id: "y1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: -22 },
                  { id: "y2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                ],
              },
            },
            trackIdByPropPath: {
              '["opacity"]': "opaA",
              '["scale"]': "sclA",
              '["x"]': "xA",
              '["y"]': "yA",
            },
          },
          GlowB: {
            trackData: {
              opaB: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowB","opacity"]',
                keyframes: [
                  { id: "b0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.55 },
                  { id: "b1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.28 },
                  { id: "b2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.55 },
                ],
              },
              sclB: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowB","scale"]',
                keyframes: [
                  { id: "bs0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 1.1 },
                  { id: "bs1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0.92 },
                  { id: "bs2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 1.1 },
                ],
              },
              xB: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowB","x"]',
                keyframes: [
                  { id: "bx0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                  { id: "bx1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: -32 },
                  { id: "bx2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                ],
              },
              yB: {
                type: "BasicKeyframedTrack",
                __debugName: '["GlowB","y"]',
                keyframes: [
                  { id: "by0", position: 0, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                  { id: "by1", position: 4, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 26 },
                  { id: "by2", position: 8, connectedRight: true, handles: [0.5, 1, 0.5, 0], value: 0 },
                ],
              },
            },
            trackIdByPropPath: {
              '["opacity"]': "opaB",
              '["scale"]': "sclB",
              '["x"]': "xB",
              '["y"]': "yB",
            },
          },
        },
      },
    },
  },
  definitionVersion: "0.4.0",
  revisionHistory: ["nanak-ambient-v1"],
} as const

export default projectState
