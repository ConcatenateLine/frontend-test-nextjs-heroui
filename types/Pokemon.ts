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
}
