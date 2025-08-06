"use client";

import Pokemon from "@/types/Pokemon"
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import NextImage from "next/image";
import PokemonsTableCellActions from "./PokemonsTableCellActions";

interface PokemonTableCellsProps {
  pokemon: Pokemon;
  columnKey: keyof Pokemon;
}

const PokemonTableCells = ({ pokemon, columnKey }: PokemonTableCellsProps) => {
  const cellValue = pokemon[columnKey];

  switch (columnKey) {
    case "image":
      return (
        <Image
          as={NextImage}
          isZoomed
          fallbackSrc="https://via.placeholder.com/300x200"
          alt="HeroUI Fruit Image with Zoom"
          src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
          width={40}
          height={40}
          aria-label={`${pokemon.name} sprite`}
        />
      );
    case "url":
      return (
        <div className="flex flex-col">
          <p className="text-bold text-sm capitalize">{cellValue}</p>
          <p className="text-bold text-sm capitalize text-default-400">go to</p>
        </div>
      );
    case "name":
      return (
        <Chip className="capitalize" color="default" size="sm" variant="flat">
          {cellValue}
        </Chip>
      );
    case "actions":
      return <PokemonsTableCellActions pokemon={pokemon} />;
    default:
      return cellValue;
  }
}

export default PokemonTableCells;

