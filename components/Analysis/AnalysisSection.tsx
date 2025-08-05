import { PokemonDetail } from "@/types/Pokemon"
import { formatStatName } from "@/utils/TextOperations";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { BarChart3, Ruler, Shield, Swords, TrendingUp, Weight, Zap } from "lucide-react";
import { cn } from "@/utils/MergeClassNames"
import { getStatColor } from "@/utils/StatColor";
import CardTitle from "../CardTitle";

interface AnalysisSectionProps {
  pokemon: PokemonDetail;
}

const AnalysisSection = ({ pokemon }: AnalysisSectionProps) => {
  return (
    <Card className="mb-12 overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border-2 border-white/20">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <CardTitle className="text-2xl flex items-center gap-3">
          <TrendingUp className="w-7 h-7" />
          Complete Analysis
        </CardTitle>
      </CardHeader>
      <CardBody className="p-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* All Stats */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
              <BarChart3 className="w-6 h-6 text-blue-600" />
              Battle Statistics
            </h3>
            <div className="space-y-4">
              {pokemon.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-xl p-4 border border-gray-200"
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="font-semibold text-gray-700 capitalize flex items-center gap-2">
                      {stat.stat.name === "hp" && <Shield className="w-4 h-4 text-red-500" />}
                      {stat.stat.name === "attack" && <Swords className="w-4 h-4 text-orange-500" />}
                      {stat.stat.name === "defense" && <Shield className="w-4 h-4 text-blue-500" />}
                      {stat.stat.name === "speed" && <Zap className="w-4 h-4 text-yellow-500" />}
                      {formatStatName(stat.stat.name)}
                    </span>
                    <span className="font-bold text-xl text-gray-900">{stat.base_stat}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className={cn(
                        "h-3 rounded-full transition-all duration-700",
                        getStatColor(stat.base_stat),
                      )}
                      style={{ width: `${Math.min((stat.base_stat / 200) * 100, 100)}%` }}
                    />
                  </div>
                  <div className="text-sm text-gray-600 mt-2 font-medium">
                    {stat.base_stat < 50
                      ? "Below Average"
                      : stat.base_stat < 80
                        ? "Average"
                        : stat.base_stat < 110
                          ? "Above Average"
                          : stat.base_stat < 140
                            ? "Excellent"
                            : "Outstanding"}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Additional Info */}
          <div className="space-y-8">
            {/* Physical Characteristics */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800">Physical Traits</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center border-2 border-blue-200">
                  <Ruler className="w-10 h-10 text-blue-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-blue-800">{pokemon.height / 10}m</div>
                  <div className="text-sm text-blue-600 font-semibold">Height</div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center border-2 border-green-200">
                  <Weight className="w-10 h-10 text-green-600 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-green-800">{pokemon.weight / 10}kg</div>
                  <div className="text-sm text-green-600 font-semibold">Weight</div>
                </div>
              </div>
            </div>

            {/* Abilities */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Special Abilities</h3>
              <div className="space-y-3">
                {pokemon.abilities.map((ability, index) => (
                  <div
                    key={index}
                    className="bg-gradient-to-r from-purple-50 to-pink-50 border-2 border-purple-200 rounded-xl p-4"
                  >
                    <div className="font-bold text-purple-800 capitalize text-lg">
                      {ability.ability.name.replace("-", " ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Total Stats */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-6 border-2 border-orange-300">
              <h4 className="font-bold text-orange-800 mb-3 text-lg">Combat Power Rating</h4>
              <div className="text-4xl font-bold text-orange-900 mb-2">
                {pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0)}
              </div>
              <div className="text-sm text-orange-600 font-semibold">
                {pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0) > 500
                  ? "🏆 Legendary Class"
                  : pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0) > 400
                    ? "⭐ Elite Class"
                    : "🔥 Standard Class"}
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}

export default AnalysisSection;

