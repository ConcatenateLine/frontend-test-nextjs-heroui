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
          src="https://heroui.com/images/fruit-1.jpeg"
          width={40}
          height={40}
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

