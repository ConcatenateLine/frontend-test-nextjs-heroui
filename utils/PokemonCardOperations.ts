export const getRarity = (totalStats: number) => {
  if (totalStats > 600) return "legendary"
  if (totalStats > 500) return "rare"
  if (totalStats > 400) return "uncommon"
  return "common"
}
