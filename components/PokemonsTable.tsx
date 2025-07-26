"use client";

import { Pokemons } from "@/types/Pokemon";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@heroui/table";

const columns = [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "url",
    label: "Url",
  },
];

interface PokemonsTableProps {
  pokemons: Pokemons
}

const PokemonsTable = ({ pokemons }: PokemonsTableProps) => {
  return (
    <Table aria-label="Pokemons table">
      <TableHeader>
        {
          columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>        
          ))} 
      </TableHeader>
      <TableBody>
        {
          pokemons.results.map((pokemon) => (
            <TableRow key={pokemon.name}>
              {
                columns.map((column) => (
                  <TableCell key={column.key}>
                    {getKeyValue(pokemon, column.key)}
                  </TableCell>
                ))
              }
            </TableRow>
          ))
        }
      </TableBody>
    </Table>
  );
};

export default PokemonsTable;

