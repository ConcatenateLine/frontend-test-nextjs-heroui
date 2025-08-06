import { EvolutionStage } from "@/types/Pokemon";
import { EvolutionConditions } from "./EvolutionConditions";

interface PokemonCardStageProps {
    evolution: EvolutionStage;
}

export function PokemonCardStage({ evolution }: PokemonCardStageProps) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-xl border-3 border-blue-200 hover:border-purple-300 transition-all duration-300 hover:scale-105 hover:shadow-2xl min-w-[200px]">
        <div className="text-center mb-4">
          <div className="w-24 h-24 mx-auto bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center border-4 border-white shadow-lg">
            <img
              src={evolution.sprite || "/placeholder.svg?height=80&width=80&query=pokemon"}
              alt={evolution.name}
              className="w-20 h-20 object-contain"
            />
          </div>
        </div>
        <div className="text-center">
          <h4 className="font-bold capitalize text-lg text-gray-800 mb-1">
            {evolution.name}
          </h4>
          <p className="text-sm text-gray-500 mb-3">
            #{evolution.id.toString().padStart(3, "0")}
          </p>
          <EvolutionConditions conditions={evolution.conditions} />
        </div>
      </div>
    );
}