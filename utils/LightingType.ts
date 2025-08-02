const LightingType: Record<string, string> = {
  fire: 'from-orange-400 to-red-500',
  electric: 'from-yellow-300 to-yellow-500',
  water: 'from-blue-400 to-blue-600',
  grass: 'from-green-400 to-lime-500',
  psychic: 'from-pink-500 to-purple-600',
  ghost: 'from-purple-700 to-indigo-800',
  dragon: 'from-indigo-500 to-violet-600',
  ice: 'from-cyan-300 to-blue-400',
  rock: 'from-yellow-900 to-stone-500',
  fighting: 'from-red-800 to-orange-600',
  dark: 'from-gray-800 to-black',
  fairy: 'from-pink-300 to-fuchsia-400',
  poison: "bg-purple-500",
  ground: "bg-yellow-600",
  flying: "bg-indigo-400",
  bug: "bg-green-400",
  steel: "bg-gray-500",
  // fallback
  default: 'from-indigo-400 to-purple-500',
  normal: "bg-gray-400",
};

export default LightingType;

