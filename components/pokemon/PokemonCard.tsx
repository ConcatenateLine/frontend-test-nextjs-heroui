import { PokemonDetail } from "@/types/Pokemon";
import { getRarity } from "@/utils/PokemonCardOperations";
import RarityType from "@/utils/RarityType";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import lightingType from '@/utils/LightingType';

interface PokemonCardProps {
  pokemon: PokemonDetail;
  onClick?: () => void;
  variant?: "standard" | "holographic" | "rare" | "shiny"
  sx?: HTMLDivElement;
}

const PokemonCard = ({ name, url, pokemon, onClick, variant, sx }: PokemonCardProps) => {
  const glowClass = pokemon ? lightingType[pokemon.types[0].type.name] : lightingType.default;
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)
  const rarity = getRarity(totalStats)
  const rarityType = RarityType[rarity]
  const hpStat = pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || 0

  return (
     <div className="relative group cursor-pointer" onClick={onClick}>
      {/* Card */}
      <div
        className={cn(
          "w-64 h-80 rounded-2xl border-4 relative overflow-hidden transform transition-all duration-300 hover:scale-105 hover:rotate-1",
          "bg-gradient-to-br shadow-2xl",
          rarityStyle.border,
          rarityStyle.bg,
          rarityStyle.glow,
        )}
      >
        {/* Holographic Effect */}
        {(rarity === "rare" || rarity === "legendary") && (
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
        )}

        {/* Energy Symbol */}
        <div className="absolute top-3 right-3 z-20">
          <div
            className={cn(
              "w-8 h-8 rounded-full flex items-center justify-center",
              pokemon.types[0] ? typeColors[pokemon.types[0].type.name] : "bg-gray-400",
            )}
          >
            <Zap className="w-4 h-4 text-white" />
          </div>
        </div>

        {/* Card Header */}
        <div className="relative z-10 p-4 pb-2">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-bold text-gray-800 capitalize truncate">{pokemon.name}</h3>
              <div className="flex gap-1 mt-1">
                {pokemon.types.slice(0, 2).map((type, index) => (
                  <div
                    key={index}
                    className={cn(
                      "px-2 py-0.5 rounded-full text-white text-xs font-semibold",
                      typeColors[type.type.name] || "bg-gray-500",
                    )}
                  >
                    {type.type.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-red-500 text-white px-2 py-1 rounded-lg text-sm font-bold">{hpStat} HP</div>
          </div>
        </div>

        {/* Pokemon Image */}
        <div className="relative z-10 flex justify-center mb-3">
          <div className="w-32 h-32 bg-gradient-to-br from-white/50 to-white/20 rounded-xl border-2 border-white/30 flex items-center justify-center overflow-hidden backdrop-blur-sm">
            <img
              src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-28 h-28 object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Card Number */}
        <div className="absolute top-3 left-3 z-20">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs font-mono">
            #{pokemon.id.toString().padStart(3, "0")}
          </div>
        </div>

        {/* Rarity Stars */}
        <div className="absolute bottom-3 left-3 z-20 flex">
          {Array.from({ length: rarityStyle.stars }, (_, i) => (
            <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
          ))}
        </div>

        {/* Quick Stats */}
        <div className="absolute bottom-3 right-3 z-20">
          <div className="bg-black/70 text-white px-2 py-1 rounded text-xs">BST: {totalStats}</div>
        </div>

        {/* Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
      </div>

      {/* Card Shadow */}
      <div
        className={cn("absolute inset-0 rounded-2xl blur-xl -z-10 transform scale-95 opacity-50", rarityStyle.bg)}
      ></div>
    </div>  );
}

export default PokemonCard;

