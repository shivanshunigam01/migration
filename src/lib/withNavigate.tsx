import type { ComponentType } from "react"
import { useAppNavigate } from "@/lib/navigation"
import type { PageProps } from "@/types/navigation"

export function withNavigate<P extends PageProps>(
  Component: ComponentType<P>,
): ComponentType {
  return function PageWithNavigate() {
    const navigate = useAppNavigate()
    return <Component {...({ navigate } as P)} />
  }
}
