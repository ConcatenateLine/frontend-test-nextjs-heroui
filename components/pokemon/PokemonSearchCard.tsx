import { PokemonDetail } from "@/types/Pokemon";
import { getRarity } from "@/utils/PokemonCardOperations";
import RarityType from "@/utils/RarityType";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { cn } from "@/utils/MergeClassNames"
import LightingType from "@/utils/LightingType";
import { Star } from "lucide-react"
import { forwardRef } from "react";
import Link from "next/link";

interface PokemonCardProps {
  pokemon: PokemonDetail;
  variant?: "standard" | "holographic" | "rare" | "shiny"
}

const PokemonSearchCard = forwardRef<HTMLDivElement, PokemonCardProps>(({ pokemon, variant = 'standard' }, ref) => {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)
  const rarity = getRarity(totalStats)
  const rarityType = RarityType[rarity]
  const glowClass = LightingType[pokemon.types[0].type.name] || LightingType.default;

  return (
    <div ref={ref} className="flex justify-center mb-8">
      <Link href={`/pokemon/${pokemon.name}`}>
        <div className="relative">
          {/* Card Container */}
          <div
            className={cn(
              "w-64 h-80 rounded-2xl border-4 relative overflow-hidden shadow-2xl",
              "bg-gradient-to-br transform hover:scale-105 transition-all duration-300",
              rarityType.border,
              rarityType.bg,
              glowClass,
              variant == 'shiny' && "animate-pulse",
            )}
          >
            {/* Holographic Effect Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-30 animate-pulse"></div>

            {/* Card Header */}
            <div className="relative z-10 p-4 pb-2">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h2 className="text-2xl font-bold text-gray-800 capitalize drop-shadow-sm">{pokemon.name}</h2>
                  <div className="flex gap-1 mt-1">
                    {pokemon.types.map((type, index) => (
                      <div
                        key={index}
                        className={cn(
                          "brightness-[0.6] px-3 py-1 rounded-full text-white text-sm font-semibold shadow-md capitalize",
                          LightingType[type.type.name] || "bg-gray-500",
                        )}
                      >
                        {type.type.name}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/80 rounded-lg px-2 py-1 shadow-md">
                    <div className="text-xs text-gray-600">HP</div>
                    <div className="text-xl font-bold text-red-600">
                      {pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || 0}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pokemon Image */}
            <div className="relative z-10 flex justify-center">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
                <img
                  src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default}
                  alt={pokemon.name}
                  className="w-44 h-44 object-contain drop-shadow-lg"
                />
              </div>
            </div>
            {/* Card Footer */}
            <div className="absolute bottom-2 left-4 right-4 z-10">
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="flex justify-between items-center text-xs text-gray-600">
                  {Array.from(
                    {
                      length: Math.min(
                        5,
                        Math.floor(pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0) / 100),
                      ),
                    },
                    (_, i) => (
                      <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                    ),
                  )}
                </div>

                <div className="rounded px-2 py-1">
                  <div>
                    #{pokemon.id.toString().padStart(3, "0")}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Card Shadow/Glow Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-2xl blur-xl -z-10 transform scale-110"></div>
        </div>
      </Link>
    </div>);
});

export default PokemonSearchCard;

