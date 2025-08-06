export default interface Pokemon {
  name: string;
  url: string;
  image?: string;
  actions?: string;
}

export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

export interface PokemonDetail {
  base_experience: number;
  id: number
  name: string
  sprites: {
    front_default: string
    other: {
      "official-artwork": {
        front_default: string
      }
    }
  }
  types: Array<{
    type: {
      name: string
    }
  }>
  stats: Array<{
    base_stat: number
    stat: {
      name: string
    }
  }>
  height: number
  weight: number
  abilities: Array<{
    ability: {
      name: string
    }
  }>
}

export interface EvolutionChain {
  id: number
  chain: EvolutionChainLink
}

export interface EvolutionChainLink {
  species: {
    name: string
    url: string
  }
  evolution_details: Array<{
    min_level?: number
    item?: {
      name: string
      url: string
    }
    trigger: {
      name: string
      url: string
    }
    time_of_day?: string
    location?: {
      name: string
      url: string
    }
    held_item?: {
      name: string
      url: string
    }
    known_move?: {
      name: string
      url: string
    }
    min_happiness?: number
    min_beauty?: number
    min_affection?: number
    relative_physical_stats?: number
    party_species?: {
      name: string
      url: string
    }
    party_type?: {
      name: string
      url: string
    }
    trade_species?: {
      name: string
      url: string
    }
    needs_overworld_rain?: boolean
    turn_upside_down?: boolean
  }>
  evolves_to: EvolutionChainLink[]
}

export interface EvolutionStage {
  name: string
  id: number
  sprite: string
  conditions: string[]
}