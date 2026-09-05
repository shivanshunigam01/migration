import React from 'react'

const LOGO_SRC = '/nanak-migration-logo.png?v=2'
const LOGO_LIGHT_SRC = '/nanak-migration-logo-light.png?v=2'

/**
 * Brand mark — full lockup (icon + wordmark) from the official Nanak Migration Group logo.
 * Dark lockup for light surfaces (navbar #EBEDE9); light lockup for dark surfaces (footer).
 */
export default function NanakLogo({
  size = 36,
  light = false,
}: {
  size?: number
  light?: boolean
}) {
  const height = Math.max(28, size)
  const width = Math.round(height * (520 / 123))

  return (
    <img
      src={light ? LOGO_LIGHT_SRC : LOGO_SRC}
      alt="Nanak Migration Group"
      width={width}
      height={height}
      decoding="async"
      fetchPriority={light ? 'low' : 'high'}
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
