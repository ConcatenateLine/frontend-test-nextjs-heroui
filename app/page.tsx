import { getPokemons } from "@/controllers/PokemonsController";
import PokemonsTable from "@/components/PokemonsTable";
import { Suspense } from "react";
import PokemonsTableSkeleton from "@/components/pokemon/PokemonsTableSkeleton";
import HeroSection from "@/components/HeroSection";

export default async function Home({ searchParams }: { searchParams: { offset: number, limit: number } }) {
  const { offset = 0, limit = 10 } = await searchParams;
  const pokemonsList = getPokemons({ offset: offset, limit: limit });

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      <HeroSection />
      <Suspense fallback={<PokemonsTableSkeleton rows={limit} />}>
        <PokemonsTable pokemons={pokemonsList} currentPage={offset / limit} limit={limit} />
      </Suspense>
    </section>
  );
}

