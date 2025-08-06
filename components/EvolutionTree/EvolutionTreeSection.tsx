import CardTitle from "../CardTitle";
import { Card, CardBody, CardHeader } from "@heroui/card";
import { PokemonDetail } from "@/types/Pokemon";
import { getEvolutionChain, parseEvolutionChain } from "@/controllers/PokemonsController";
import { PokemonCardStage } from "./PokemonCardStage";
import { EvolutionConnector } from "./EvolutionConnector";
import { TreeLegend } from "./TreeLegend";

function StageLabel({ stageNumber }: { stageNumber: number }) {
    return (
        <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-full font-bold text-sm shadow-lg">
                <div className="w-2 h-2 bg-white rounded-full" />
                Stage {stageNumber}
                <div className="w-2 h-2 bg-white rounded-full" />
            </div>
        </div>
    );
}

interface EvolutionTreeSectionProps {
    pokemon: PokemonDetail;
}

const EvolutionTreeSection = async ({ pokemon }: EvolutionTreeSectionProps) => {
    const evolutionChainLink = await getEvolutionChain(pokemon);
    const evolutionChain = await parseEvolutionChain(evolutionChainLink);

    if (!evolutionChain.length) {
        return null;
    }

    return (
        <Card className="mb-12 overflow-hidden shadow-2xl bg-white/80 backdrop-blur-sm border-2 border-white/20">
            <CardHeader className="bg-gradient-to-r from-green-600 to-blue-700 text-white">
                <CardTitle className="text-2xl flex items-center gap-3">
                    <div className="w-7 h-7 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full" />
                    Evolution Tree
                </CardTitle>
            </CardHeader>
            <CardBody className="p-8">
                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 overflow-x-auto">
                    <div className="w-full">
                        <div className="flex flex-col md:flex-row items-center space-y-12 md:space-y-0 md:items-start">
                            {evolutionChain.map((stage, stageIndex) => (
                                <div key={stageIndex} className="relative md:w-full md:flex md:flex-row">
                                    <div>
                                        <StageLabel stageNumber={stageIndex + 1} />
                                        <div className="flex items-center justify-center gap-8 flex-col">
                                            {stage.map((evolution, evolutionIndex) => (
                                                <div key={evolution.id} className="relative">
                                                    <PokemonCardStage evolution={evolution} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    {stageIndex < evolutionChain.length - 1 && (
                                        <EvolutionConnector type="vertical" />
                                    )}
                                </div>
                            ))}
                        </div>
                        <TreeLegend />
                    </div>
                </div>
            </CardBody>
        </Card>
    );
}

export default EvolutionTreeSection;
