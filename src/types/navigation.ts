export type NavigateFn = (page: string) => void

export interface PageProps {
  navigate: NavigateFn
}
