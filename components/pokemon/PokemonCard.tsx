import LightingType from "@/utils/LightingType";
import NextImage from "next/image";
import PokemonCardBaseStats from "./PokemonCardBaseStats";
import { PokemonDetail } from "@/types/Pokemon";
import { Card, CardBody, CardFooter, CardHeader } from "@heroui/card";
import { Star } from "lucide-react"
import { HyphenToSpace } from "@/utils/TextOperations";
import { Image } from "@heroui/image";
import { cn } from "@/utils/MergeClassNames"
import { forwardRef } from "react";

interface PokemonCardProps {
  pokemon: PokemonDetail;
}

const PokemonCard = forwardRef<HTMLDivElement, PokemonCardProps>(({ pokemon }, ref) => {
  const pokemonName = HyphenToSpace(pokemon.name);

  return (
    <div ref={ref} className="flex justify-center mb-8">
      <Card className="w-80 h-[28rem] bg-gradient-to-br from-yellow-200 via-yellow-100 to-yellow-50 rounded-2xl shadow-2xl border-8 border-yellow-400 relative overflow-hidden transform hover:scale-105 transition-all duration-300 hover:rotate-1">
        {/* Holographic Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/20 to-transparent opacity-30 animate-pulse"></div>

        <CardHeader className="relative z-10 p-4 pb-2 flex justify-between items-start">
          <div>
            <h2 className="text-xl font-bold text-gray-800 capitalize drop-shadow-sm">{pokemonName}</h2>
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

          <div className="text-right bg-white/80 rounded-lg px-2 py-1 shadow-md">
            <div className="text-xs text-gray-600">HP</div>
            <div className="text-xl font-bold text-red-600">
              {pokemon.stats.find((s) => s.stat.name === "hp")?.base_stat || 0}
            </div>
          </div>
        </CardHeader>

        <CardBody>
          <div className="relative z-10 flex justify-center mb-4">
            <div className="w-48 h-48 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl border-4 border-white shadow-lg flex items-center justify-center overflow-hidden">
              <Image as={NextImage}
                src={pokemon.sprites.other["official-artwork"].front_default || pokemon.sprites.front_default}
                alt={pokemon.name} width={200} height={200}
                className="w-44 h-44 object-contain drop-shadow-lg"
              />
            </div>
          </div>

          <PokemonCardBaseStats stats={pokemon.stats} />
        </CardBody>

        <CardFooter>
          <div className="absolute bottom-1 left-4 right-4 z-10">
            <div className="flex justify-between items-center text-xs text-gray-600">
              <div className="flex justify-between items-center text-xs text-gray-600">
                <div className="bg-white/80 rounded px-2 py-1">
                  <span className="font-medium">{pokemon.height / 10}m</span>
                </div>
                <div className="bg-white/80 rounded px-2 py-1">
                  <span className="font-medium">{pokemon.weight / 10}kg</span>
                </div>
              </div>

              <div className="rounded px-2 py-1">
                <div>
                  #{pokemon.id.toString().padStart(3, "0")}
                </div>
              </div>
            </div>
          </div>
        </CardFooter>

        <div className="absolute top-1 left-4 z-20 flex">
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
      </Card>
    </div>);
});

export default PokemonCard;

