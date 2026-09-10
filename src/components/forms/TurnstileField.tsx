"use client"

import { useEffect, useRef, useCallback } from "react"

declare global {
  interface Window {
    turnstile?: {
      render: (
        el: HTMLElement,
        opts: {
          sitekey: string
          callback: (token: string) => void
          "expired-callback"?: () => void
          "error-callback"?: () => void
          size?: "normal" | "compact" | "flexible" | "invisible"
          appearance?: "always" | "execute" | "interaction-only"
        },
      ) => string
      reset: (widgetId: string) => void
      remove: (widgetId: string) => void
    }
  }
}

const SITE_KEY = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || ""

type Props = {
  onToken: (token: string | null) => void
}

/** Invisible Cloudflare Turnstile — no-ops until NEXT_PUBLIC_TURNSTILE_SITE_KEY is set. */
export function TurnstileField({ onToken }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const widgetId = useRef<string | null>(null)
  const onTokenRef = useRef(onToken)
  onTokenRef.current = onToken

  const renderWidget = useCallback(() => {
    if (!SITE_KEY || !ref.current || !window.turnstile) return
    if (widgetId.current) {
      try {
        window.turnstile.remove(widgetId.current)
      } catch {
        /* ignore */
      }
    }
    widgetId.current = window.turnstile.render(ref.current, {
      sitekey: SITE_KEY,
      size: "invisible",
      callback: (token) => onTokenRef.current(token),
      "expired-callback": () => onTokenRef.current(null),
      "error-callback": () => onTokenRef.current(null),
    })
  }, [])

  useEffect(() => {
    if (!SITE_KEY) {
      onTokenRef.current(null)
      return
    }
    const existing = document.querySelector('script[data-turnstile]')
    if (existing) {
      if (window.turnstile) renderWidget()
      else existing.addEventListener("load", renderWidget)
      return
    }
    const script = document.createElement("script")
    script.src = "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
    script.async = true
    script.dataset.turnstile = "1"
    script.onload = () => renderWidget()
    document.head.appendChild(script)
    return () => {
      if (widgetId.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetId.current)
        } catch {
          /* ignore */
        }
      }
    }
  }, [renderWidget])

  if (!SITE_KEY) return null
  return <div ref={ref} style={{ minHeight: 0 }} />
}

export function turnstileConfigured() {
  return Boolean(SITE_KEY)
}
