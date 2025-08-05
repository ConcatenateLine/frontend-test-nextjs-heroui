export const getStatColor = (statValue: number) => {
  if (statValue >= 100) return "bg-green-500"
  if (statValue >= 70) return "bg-yellow-500"
  return "bg-red-500"
}
