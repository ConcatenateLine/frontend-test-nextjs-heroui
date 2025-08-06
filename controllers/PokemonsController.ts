import { EvolutionChain, EvolutionChainLink, EvolutionStage, PokemonDetail, Pokemons } from "@/types/Pokemon"

const getPokemons = async ({ offset, limit }: { offset: number, limit: number }): Promise<Pokemons> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`)
  const data = await res.json()
  return data
}

const getAllPokemons = async (): Promise<Pokemons> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000`)
  const data = await res.json()
  return data
}

const getPokemon = async (slug: string): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${slug}`)
  const data = await res.json()
  return data
}

const getPokemonByName = async (name: string): Promise<PokemonDetail> => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
  if (!res.ok) throw new Error('Not found');
  const data = await res.json();
  return data;
}

const getEvolutionChain = async (pokemonData: PokemonDetail): Promise<EvolutionChainLink | null> => {
  try {
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonData.name}`)
    if (!speciesResponse.ok) throw new Error('Not found');
    const speciesData = await speciesResponse.json()

    const evolutionResponse = await fetch(speciesData.evolution_chain.url)
    if (!evolutionResponse.ok) throw new Error('Not found');
    const evolutionData: EvolutionChain = await evolutionResponse.json()

    return evolutionData.chain
  } catch (error) {
    return null
  }
}

const parseEvolutionChain = async (chain: EvolutionChainLink | null): Promise<EvolutionStage[][]> => {
  if (!chain) return []

  const stages: EvolutionStage[][] = []

  const processChain = async (currentChain: EvolutionChainLink, stage = 0) => {
    if (!stages[stage]) {
      stages[stage] = []
    }

    // Get Pokemon data for sprite
    try {
      const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentChain.species.name}`)
      const pokemonData = await pokemonResponse.json()

      // Format evolution conditions
      const conditions: string[] = []
      if (currentChain.evolution_details && currentChain.evolution_details.length > 0) {
        currentChain.evolution_details.forEach((detail) => {
          if (detail.min_level) {
            conditions.push(`Level ${detail.min_level}`)
          }
          if (detail.item) {
            conditions.push(detail.item.name.replace("-", " "))
          }
          if (detail.trigger.name === "trade") {
            conditions.push("Trade")
          }
          if (detail.time_of_day) {
            conditions.push(`${detail.time_of_day} time`)
          }
          if (detail.location) {
            conditions.push(`At ${detail.location.name.replace("-", " ")}`)
          }
          if (detail.held_item) {
            conditions.push(`Hold ${detail.held_item.name.replace("-", " ")}`)
          }
          if (detail.known_move) {
            conditions.push(`Know ${detail.known_move.name.replace("-", " ")}`)
          }
          if (detail.min_happiness) {
            conditions.push(`Happiness ${detail.min_happiness}+`)
          }
          if (detail.min_affection) {
            conditions.push(`Affection ${detail.min_affection}+`)
          }
          if (detail.relative_physical_stats !== undefined) {
            if (detail.relative_physical_stats > 0) {
              conditions.push("Attack > Defense")
            } else if (detail.relative_physical_stats < 0) {
              conditions.push("Defense > Attack")
            } else {
              conditions.push("Attack = Defense")
            }
          }
        })
      }

      stages[stage].push({
        name: currentChain.species.name,
        id: pokemonData.id,
        sprite: pokemonData.sprites.front_default,
        conditions,
      })
    } catch (error) {
      console.error(`Failed to fetch data for ${currentChain.species.name}:`, error)
    }

    // Process evolutions
    if (currentChain.evolves_to && currentChain.evolves_to.length > 0) {
      for (const evolution of currentChain.evolves_to) {
        await processChain(evolution, stage + 1)
      }
    }
  }

  await processChain(chain)
  return stages.filter((stage) => stage.length > 0)
}

export { getPokemons, getPokemon, getAllPokemons, getPokemonByName, getEvolutionChain, parseEvolutionChain }
