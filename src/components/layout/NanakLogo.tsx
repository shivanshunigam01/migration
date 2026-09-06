"use client"

import Image from "next/image"

const LOGO_SRC = "/nanak-migration-logo.png"

/**
 * Brand mark — full lockup for light surfaces (navbar / footer).
 * Uses next/image with explicit dimensions for CLS / LCP.
 */
export default function NanakLogo({
  size = 36,
  light: _light = false,
}: {
  size?: number
  light?: boolean
}) {
  const height = Math.max(28, size)
  const width = Math.round(height * (1024 / 240))

  return (
    <Image
      src={LOGO_SRC}
      alt="Nanak Migration Group"
      width={width}
      height={height}
      priority
      style={{
        display: "block",
        height,
        width: "auto",
        maxWidth: Math.min(width, 260),
        objectFit: "contain",
        objectPosition: "left center",
      }}
    />
  )
}
