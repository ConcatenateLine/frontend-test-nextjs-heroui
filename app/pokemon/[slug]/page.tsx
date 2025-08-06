import AnalysisSection from "@/components/Analysis/AnalysisSection";
import EvolutionTreeSection from "@/components/EvolutionTree/EvolutionTreeSection";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { getPokemon } from "@/controllers/PokemonsController";

const Page = async ({ params, }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const pokemon = await getPokemon(slug);

  return <div>
    <div className="flex flex-col md:flex-row gap-8">
      <PokemonCard pokemon={pokemon} />
      <AnalysisSection pokemon={pokemon} />
    </div>
    <EvolutionTreeSection pokemon={pokemon} />
  </div>
}

export default Page;

