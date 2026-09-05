import React from 'react'

const LOGO_SRC = '/nanak-migration-logo.png?v=3'

/**
 * Brand mark — full lockup (icon + wordmark) for light surfaces (navbar / footer #EBEDE9).
 * The `light` prop is kept for call-site compatibility but always uses the dark lockup.
 */
export default function NanakLogo({
  size = 36,
  light: _light = false,
}: {
  size?: number
  light?: boolean
}) {
  const height = Math.max(28, size)
  const width = Math.round(height * (520 / 123))

  return (
    <img
      src={LOGO_SRC}
      alt="Nanak Migration Group"
      width={width}
      height={height}
      decoding="async"
      fetchPriority="high"
      style={{
        display: 'block',
        height,
        width: 'auto',
        maxWidth: Math.min(width, 220),
        objectFit: 'contain',
        objectPosition: 'left center',
      }}
    />
  )
}
