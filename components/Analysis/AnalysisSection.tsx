import { PokemonDetail } from "@/types/Pokemon";
import { Card, CardHeader, CardBody } from "@heroui/card";
import { BarChart3, TrendingUp } from "lucide-react";
import CardTitle from "../CardTitle";
import StatItem from "./StatItem";
import PhysicalTraits from "./PhysicalTraits";
import AbilitiesList from "./AbilitiesList";
import CombatRating from "./CombatRating";

interface AnalysisSectionProps {
  pokemon: PokemonDetail;
}

const AnalysisSection = ({ pokemon }: AnalysisSectionProps): JSX.Element => {
  const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return (
    <Card className="w-full mb-12 overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border-2 border-white/20">
      <CardHeader className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white">
        <CardTitle className="text-2xl flex items-center gap-3">
          <TrendingUp className="w-7 h-7" />
          Complete Analysis
        </CardTitle>
      </CardHeader>
      <CardBody className="p-8">
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 overflow-x-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left Column - Stats */}
            <div>
              <h3 className="text-xl font-bold mb-6 text-gray-800 flex items-center gap-2">
                <BarChart3 className="w-6 h-6 text-blue-600" />
                Battle Statistics
              </h3>
              <div className="space-y-4">
                {pokemon.stats.map((stat, index) => (
                  <StatItem key={`${stat.stat.name}-${index}`} stat={stat} />
                ))}
              </div>
            </div>

            {/* Right Column - Additional Info */}
            <div className="space-y-8">
              <PhysicalTraits
                height={pokemon.height}
                weight={pokemon.weight}
              />

              <AbilitiesList
                abilities={pokemon.abilities}
              />

              <CombatRating
                totalStats={totalStats}
              />
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default AnalysisSection;
