"use client";

import Pokemon, { PokemonDetail } from '@/types/Pokemon';
import { Skeleton } from '@heroui/skeleton';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SearchIcon } from '../icons';
import {
  Autocomplete,
  AutocompleteItem
} from "@heroui/autocomplete";
import { getAllPokemons, getPokemonByName } from '@/controllers/PokemonsController';
import PokemonSearchCard from './PokemonSearchCard';

const PokemonSearch = () => {
  const [loading, setLoading] = useState(false);
  const [suggestionsOpen, setSuggestionsOpen] = useState(false);

  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  const cardRef = useRef<HTMLDivElement | null>(null);

  const suggestions = (textValue: string, inputValue: string) => {
    if (!inputValue || inputValue.length === 0) {
      return false;
    }

    textValue = textValue.normalize("NFC").toLocaleLowerCase();
    inputValue = inputValue.normalize("NFC").toLocaleLowerCase();

    return textValue.slice(0, inputValue.length) === inputValue;
  }

  const handleSearch = async (pokemonName: string) => {
    if (!pokemonName || loading) return;
    setLoading(true);

    try {
      const data = await getPokemonByName(pokemonName);
      setPokemon(data);
    } catch {
      setPokemon(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSuggestionClick = (name: string) => {
    handleSearch(name);
  };

  const handleClear = () => {
    setPokemon(null);
    setSuggestionsOpen(false);
  };

  useEffect(() => {
    const fetchList = async () => {
      const response = await getAllPokemons();
      setPokemons(response.results);
    };

    if (pokemons.length === 0) {
      fetchList();
    }
  }, []);

  useEffect(() => {
    if (pokemon && cardRef.current) {
      const tl = gsap.timeline();
      tl.set(cardRef.current, { opacity: 0, scale: 0.8 });
      tl.to(cardRef.current,
        { opacity: 1, scale: 1.05, duration: 0.6, ease: "power3.out" }
      ).to(cardRef.current,
        { scale: 1, duration: 0.3, ease: "power3.out" });
    }
  }, [pokemon]);

  return (
    <div className="max-w-lg">
      <Autocomplete
        isVirtualized
        size='sm'
        menuTrigger='input'
        className="max-w-xs"
        placeholder="Search for a Pokémon"
        variant="bordered"
        startContent={
          <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
        }
        listboxProps={{
          emptyContent: "No Pokémon found.",
        }}
        defaultItems={pokemons}
        onValueChange={(value) => {
          if (value.length < 1) {
            handleClear();
          } else {
            setSuggestionsOpen(true);
            handleSearch(value);
          }
        }}
        onSelectionChange={(value) => handleSuggestionClick(value?.toString() || "")}
        onClear={handleClear}
        defaultFilter={suggestions}
      >
        {(item) => <AutocompleteItem key={item.name}>{item.name}</AutocompleteItem>}
      </Autocomplete>

      <div className="absolute w-full m-1">
        <Skeleton isLoaded={!loading} className='rounded'>
          {pokemon && (
            <PokemonSearchCard
              ref={cardRef}
              pokemon={pokemon}
            />
          )}
        </Skeleton>
      </div>
    </div>
  );
}

export default PokemonSearch;

