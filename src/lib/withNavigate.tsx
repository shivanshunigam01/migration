import type { ComponentType } from "react"
import { useAppNavigate } from "@/lib/navigation"
import type { PageProps } from "@/types/navigation"

export function withNavigate<P extends PageProps>(
  Component: ComponentType<P>,
): ComponentType<Omit<P, "navigate">> {
  return function PageWithNavigate(props: Omit<P, "navigate">) {
    const navigate = useAppNavigate()
    return <Component {...({ ...props, navigate } as P)} />
  }
}
