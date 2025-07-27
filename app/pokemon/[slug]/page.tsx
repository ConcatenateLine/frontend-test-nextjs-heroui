import { getPokemon } from "@/controllers/PokemonsController";
import { Image } from "@heroui/image";
import NextImage from "next/image";

const Page = async ({ params, }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const pokemon = await getPokemon(slug);

  return <div>
    <div> My pokemon: {pokemon.name}</div>
    <Image as={NextImage} src={pokemon.sprites.front_default} alt={pokemon.name} width={200} height={200} />

  </div>
}

export default Page;

