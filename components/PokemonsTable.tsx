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
      <div className="-translate-y-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl rounded-t-4xl md:p-8 border-2 border-blue-200 overflow-x-auto">
      <Table aria-label="Pokemons table" className="bg-transparent">
        <TableHeader className="bg-transparent">
          {
            columns.map((column) => (
              <TableColumn key={column.key}>{column.label}</TableColumn>
            ))
          }
        </TableHeader>
        <TableBody className="bg-transparent">
          {
            results.map((pokemon) => (
              <TableRow key={pokemon.name}>
                {
                  columns.map((column) => (
                    <TableCell key={column.key} className="bg-transparent">
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
      </div>
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

