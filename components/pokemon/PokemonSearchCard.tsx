import RarityType from "@/utils/RarityType";
import LightingType from "@/utils/LightingType";
import Link from "next/link";
import NextImage from "next/image";
import { PokemonDetail } from "@/types/Pokemon";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Star } from "lucide-react"
import { HyphenToSpace } from "@/utils/TextOperations";
import { Image } from "@heroui/image";
import { cn } from "@/utils/MergeClassNames"
import { forwardRef } from "react";
import { getRarity } from "@/utils/PokemonCardOperations";

interface PokemonCardProps {
  pokemon: PokemonDetail;
  variant?: "standard" | "holographic" | "rare" | "shiny";
  onClear?: () => void;
}

const PokemonSearchCard = forwardRef<HTMLDivElement, PokemonCardProps>(({ pokemon, variant = 'standard', onClear }, ref) => {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)
  const rarity = getRarity(totalStats)
  const rarityType = RarityType[rarity]
  const glowClass = LightingType[pokemon.types[0].type.name] || LightingType.default;
  const pokemonName = HyphenToSpace(pokemon.name);

  const handleClear = () => {
    onClear?.();
  };

  return (
    <div ref={ref} className="flex justify-center mb-8">
      <Link href={`/pokemon/${pokemon.name}`} onClick={handleClear}>
        <Card
          className={cn(
            "w-74 h-65 rounded-2xl border-4 relative overflow-hidden shadow-2xl",
            "bg-gradient-to-br transform hover:scale-105 transition-all duration-300",
            rarityType.border,
            rarityType.bg,
            glowClass,
            variant == 'shiny' && "animate-pulse",
          )}
        >
          {/* Holographic Effect Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-30 animate-pulse"></div>
          <CardHeader className="flex justify-between items-start">
            <div>
              <h2 className="text-xl font-bold text-gray-800 capitalize drop-shadow-sm max-w-5/6">{pokemonName}</h2>
            </div>
            <div className="text-right">
              <div className="bg-white/80 rounded-lg px-2 py-1 shadow-md">
                <div className="text-xs text-gray-600">HP</div>
                <div className="text-xl font-bold text-red-600">
                  {pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || 0}
                </div>
              </div>
            </div>
          </CardHeader>
          <CardBody className="relative z-10 flex flex-row justify-between">
            <div className="w-38 h-38 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <Image as={NextImage}
                src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default}
                alt={pokemon.name} width={176} height={176}
                className="w-44 h-44 object-contain drop-shadow-lg"
              />
            </div>

            <div className="text-xs text-gray-600 text-right w-1/3">
              <div className="flex flex-row text-xs text-gray-600 justify-end">
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
              <div className="flex flex-col gap-1 mt-1">
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
          </CardBody>
          <CardFooter className="absolute bottom-0 flex flex-row-reverse text-xs text-gray-600">
            <div className="rounded px-2 pb-1">
              #{pokemon.id.toString().padStart(3, "0")}
            </div>
          </CardFooter>
        </Card>
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-purple-400/20 rounded-2xl blur-xl -z-10 transform scale-110"></div>
      </Link >
    </div >);
});

export default PokemonSearchCard;

