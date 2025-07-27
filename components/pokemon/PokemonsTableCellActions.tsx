"use client";

import Pokemon from "@/types/Pokemon";
import { Tooltip } from "@heroui/tooltip";
import Link from "next/link";

interface PokemonsTableCellActionsProps {
  pokemon: Pokemon;
}

const PokemonsTableCellActions = ({ pokemon }: PokemonsTableCellActionsProps) => {
  return (
    <div className="relative flex items-center gap-2">
      <Tooltip content="Details">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Link href={`/pokemon/${pokemon.name}`}>Go</Link>
        </span>
      </Tooltip>
      <Tooltip content="Edit user">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          E
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Delete user">
        <span className="text-lg text-danger cursor-pointer active:opacity-50">
          Dl
        </span>
      </Tooltip>
    </div>
  );
};

export default PokemonsTableCellActions;

