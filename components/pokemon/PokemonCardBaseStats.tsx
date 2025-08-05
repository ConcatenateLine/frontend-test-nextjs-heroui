interface PokemonCardBaseStatsProps {
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
}

const PokemonCardBaseStats = ({ stats }: PokemonCardBaseStatsProps) => {
  return (
    <div className="relative z-10 px-4 pb-4">
      <div className="bg-white/90 rounded-xl p-3 shadow-lg">
        <h3 className="text-sm font-bold text-gray-700 mb-2 text-center">BASE STATS</h3>
        <div className="grid grid-cols-2 gap-2 text-xs">
          {stats.slice(0, 4).map((stat, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="font-medium text-gray-600 capitalize">
                {stat.stat.name === "special-attack"
                  ? "Sp.Atk"
                  : stat.stat.name === "special-defense"
                    ? "Sp.Def"
                    : stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}
              </span>
              <span className="font-bold text-gray-800">{stat.base_stat}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PokemonCardBaseStats;

