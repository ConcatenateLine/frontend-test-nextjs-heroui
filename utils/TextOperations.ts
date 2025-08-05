export function HyphenToSpace(str: string): string {
  return str.replace(/-/g, " ");
}

export const formatStatName = (statName: string) => {
  return statName
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ")
}
