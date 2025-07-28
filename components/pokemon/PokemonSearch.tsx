"use client";

import { PokemonDetail } from '@/types/Pokemon';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Skeleton } from '@heroui/skeleton';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Card } from '@heroui/card';
import lightingType from '@/utils/LightingType';

const PokemonSearch = () => {
  const [query, setQuery] = useState('');
  const [pokemon, setPokemon] = useState<PokemonDetail | null>(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [polemonsList, setPolemonsList] = useState<string[]>([]);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const listRef = useRef<HTMLDivElement[]>([]);

  const suggeestions = query.length > 0
    ? polemonsList.filter((name) => name.includes(query.toLowerCase())).slice(0, 5)
    : [];

  const glowClass = pokemon ? lightingType[pokemon.types[0].type.name] : lightingType.default;

  const handleSearch = async () => {
    if (!query) return;
    setLoading(true);

    try {
      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
      if (!res.ok) throw new Error('Not found');
      const data = await res.json();
      setPokemon(data);
      setError('');
    } catch {
      setPokemon(null);
      setError('Pokémon not found');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchList = async () => {
      const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000');
      const data = await res.json();
      setPolemonsList(data.results.map((p: any) => p.name));
    };

    if (polemonsList.length === 0) {
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

  useEffect(() => {
    if (suggeestions.length > 0) {
      gsap.fromTo(listRef.current,
        { opacity: 0, x: -10 },
        { opacity: 1, x: 0, duration: 0.4, stagger: 0.1 }
      )
    }
  }, [suggeestions]);

  return (
    <div className="max-w-lg mx-auto mt-12 space-y-4">
      <Input
        label="Search Pokémon"
        placeholder="e.g. Charizard"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full"
      />
      <Button onClick={handleSearch} className="w-full bg-indigo-600">
        Search
      </Button>

      {
        suggeestions.map((name, i) => (
          <div key={name}
            ref={el => { if (el) listRef.current[i] = el }}
            className="flex items-center justify-between">
            <p>{name}</p>
            <Button onClick={() => setQuery(name)}>Select</Button>
          </div>
        ))
      }

      {error && <p className="text-red-600">{error}</p>}
      <Skeleton isLoaded={!loading} className='rounded'>
        {pokemon && (
          <Card ref={cardRef} className="p-6 text-center shadow-lg">
            <h2 className="text-xl font-bold capitalize">{pokemon.name}</h2>
            <div className='relative inline-block'>
              <div className={`absolute inset-0 bg-gradient-to-br ${glowClass} rounded-full blur-2xl opacity-40 animate-pulse`} />
              <img src={pokemon.sprites.front_default} alt={pokemon.name}
                className="relative z-10 mx-auto mt-2 hover:animate-pulse transition-all duration-200 hover:scale-105" />
            </div>
            <p className="mt-4 text-sm text-gray-500">
              <strong>Type:</strong> {pokemon.types.map(t => t.type.name).join(', ')}
            </p>
            <p className="text-sm text-gray-500">
              <strong>Base XP:</strong> {pokemon.base_experience}
            </p>
          </Card>
        )}
      </Skeleton>
    </div>
  );
}

export default PokemonSearch;

