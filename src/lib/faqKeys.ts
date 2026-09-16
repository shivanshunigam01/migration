/** Alias CMS keys so homepage works as both `home` (SEO) and `homepage` (legacy FAQ). */
export function faqPageKeys(routeKey: string): string[] {
  const key = routeKey.replace(/^\/+|\/+$/g, "").toLowerCase() || "home"
  if (key === "home" || key === "homepage") return ["homepage", "home"]
  return [key]
}
