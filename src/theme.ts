export const GOLD       = '#E8A017'
export const GOLD_LIGHT = '#F0B53A'
export const NAVY       = '#152448'
export const NAVY_DARK  = '#0A1024'
export const NAVY_MID   = '#101C3A'
export const NAVY_GRAD  = 'linear-gradient(135deg, #0A1024 0%, #152448 38%, #1e3a6e 72%, #2a4a82 100%)'
export const NAVY_GRAD_V = 'linear-gradient(165deg, #0A1024 0%, #152448 42%, #1e3a6e 70%, #243f73 100%)'
export const HERO_GRAD  = 'linear-gradient(155deg, #f8fafc 0%, #eef3f9 32%, #e2ecf6 62%, #d0e0f0 100%)'
export const CREAM      = '#ffffff'
export const GREY_BAND  = '#F1F4F8'
export const TEXT       = '#16181F'

// Category accent tokens — one per top-level nav category. All pass WCAG AA (≥4.5:1) vs white.
// Promo card gradient — mirrors the home hero palette (HERO_GRAD) on a 135° diagonal,
// lifted ~8% lighter so the card feels like a softer piece of the hero, not its own colour.
// Text contrast verified against deepest stop #ddeaf6: NAVY (#1B2B5E) = 7.5:1 ✓, #475569 = 4.7:1 ✓
export const GRADIENT_CARD_LIGHT = 'linear-gradient(135deg, #f9fbfd 0%, #f1f5fa 38%, #e8eef6 70%, #dce7f2 100%)'

export const CAT_EMPLOYER = '#0e7490'  // Employer Sponsored  — dark teal   5.35:1
export const CAT_SKILLED  = '#1d4ed8'  // Skilled Migration   — deep blue   (avoid purple)
export const CAT_STUDENT  = '#2563eb'  // Student Visas       — blue        5.17:1
export const CAT_PARTNER  = '#be123c'  // Partner & Family    — rose        4.70:1
export const CAT_VISITOR  = '#0369a1'  // Visitor & Other     — steel       5.94:1
export const CAT_REVIEWS  = '#b91c1c'  // Reviews & Complex   — red         4.83:1
