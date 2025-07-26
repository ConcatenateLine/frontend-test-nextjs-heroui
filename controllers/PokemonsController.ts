import { Pokemons } from "@/types/Pokemon"

const getPokemons = async ({ offset, limit }: { offset: number, limit: number }): Promise<Pokemons> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  const data = await res.json()
  return data
}

const getPokemon = async ({ id }: { id: number }) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await res.json()
  return data
}

export { getPokemons, getPokemon }

