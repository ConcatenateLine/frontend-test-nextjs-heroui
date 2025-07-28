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
  id: number;
  name: string;
  height: number;
  weight: number;
  types: {
    type: {
      name: string;
    }
  }[];
  sprites: {
    front_default: string;
  };
  base_experience: number;
}
