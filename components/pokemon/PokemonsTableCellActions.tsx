"use client";

import Pokemon from "@/types/Pokemon";
import { Tooltip } from "@heroui/tooltip";
import { Edit, IdCardLanyard, Trash } from "lucide-react";
import Link from "next/link";

interface PokemonsTableCellActionsProps {
  pokemon: Pokemon;
}

const PokemonsTableCellActions = ({ pokemon }: PokemonsTableCellActionsProps) => {
  return (
    <div className="relative flex items-center gap-2">
      <Tooltip content="Details">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Link href={`/pokemon/${pokemon.name}`}>
            <IdCardLanyard />
          </Link>
        </span>
      </Tooltip>
      <Tooltip content="Edit">
        <span className="text-lg text-default-400 cursor-pointer active:opacity-50">
          <Edit />
        </span>
      </Tooltip>
      <Tooltip color="danger" content="Delete">
        <span className="text-lg text-danger cursor-pointer active:opacity-50">
          <Trash />
        </span>
      </Tooltip>
    </div>
  );
};

export default PokemonsTableCellActions;

