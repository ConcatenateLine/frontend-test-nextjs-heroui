"use client";

import { Pokemons } from "@/types/Pokemon";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
} from "@heroui/table";
import { use } from "react";
import PokemonTableCells from "./pokemon/PokemonsTableCells";
import { Pagination } from "@heroui/pagination";
import Link from "next/link";

const columns = [
  {
    key: "image",
    label: "Image",
  },
  {
    key: "name",
    label: "Name",
  },
  {
    key: "url",
    label: "Url",
  },
  {
    key: "actions",
    label: "Actions",
  },
];

interface PokemonsTableProps {
  pokemons: Promise<Pokemons>;
  currentPage: number;
  limit: number;
}

const PokemonsTable = ({ pokemons, currentPage = 0, limit = 10 }: PokemonsTableProps) => {
  const { results, count } = use(pokemons);

  return (
    <section className="flex flex-col w-full gap-4">
      <Table aria-label="Pokemons table">
        <TableHeader>
          {
            columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))
          }
        </TableHeader>
        <TableBody>
          {
            results.map((pokemon) => (
              <TableRow key={pokemon.name}>
                {
                  columns.map((column) => (
                    <TableCell key={column.key}>
                      {
                        PokemonTableCells({
                          pokemon,
                          columnKey: column.key as keyof typeof pokemon,
                        })
                      }
                    </TableCell>
                  ))
                }
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
      <Pagination 
        total={Math.ceil(count/limit)} 
        page={currentPage + 1} 
        renderItem={
         ({page,activePage, index}) =>(
         <Link key={index} href={`?offset=${(page-1)*10}&limit=${limit}`} 
         className={ page === activePage ? "bg-primary-500 w-6 h-6 rounded text-center m-1" : "w-6 h-6 rounded text-center m-1"}>{page}</Link>  
         ) 
        }
      />
    </section>
  );
};

export default PokemonsTable;

