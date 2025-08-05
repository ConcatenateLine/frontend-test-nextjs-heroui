import AnalysisSection from "@/components/Analysis/AnalysisSection";
import PokemonCard from "@/components/pokemon/PokemonCard";
import { getPokemon } from "@/controllers/PokemonsController";

const Page = async ({ params, }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const pokemon = await getPokemon(slug);

  return <div className="grid md:grid-cols-2 ">
    <PokemonCard pokemon={pokemon} />
    <div className="text-3xl">
      <AnalysisSection pokemon={pokemon} />
    </div>
    <div className="text-3xl">
      Evolution Tree
    </div>
  </div>
}

export default Page;

