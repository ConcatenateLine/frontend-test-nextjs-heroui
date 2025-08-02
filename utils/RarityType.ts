export interface Rarity {
  border: string;
  bg: string;
  glow: string;
  stars: number;
}

const RarityType: Record<string, Rarity> = {
  legendary: {
    border: "border-yellow-400",
    bg: "from-yellow-100 via-orange-50 to-yellow-100",
    glow: "shadow-yellow-400/50",
    stars: 5,
  },
  rare: {
    border: "border-purple-400",
    bg: "from-purple-100 via-pink-50 to-purple-100",
    glow: "shadow-purple-400/50",
    stars: 4,
  },
  uncommon: {
    border: "border-blue-400",
    bg: "from-blue-100 via-cyan-50 to-blue-100",
    glow: "shadow-blue-400/50",
    stars: 3,
  },
  common: {
    border: "border-gray-300",
    bg: "from-gray-100 via-white to-gray-100",
    glow: "shadow-gray-400/30",
    stars: 2,
  },
};

export default RarityType;

