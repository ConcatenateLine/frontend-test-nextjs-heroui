"use client";

import { Skeleton } from "@heroui/skeleton";
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from "@heroui/table";

interface PokemonsTableSkeletonProps {
  rows: number
}

const PokemonsTableSkeleton = ({ rows }: PokemonsTableSkeletonProps) => {
  return (
    <Table aria-label="Pokemons table">
      <TableHeader>
        <TableColumn className="w-10">Image</TableColumn>
        <TableColumn className="max-w-4">Name</TableColumn>
        <TableColumn>Url</TableColumn>
      </TableHeader>
      <TableBody>
        {Array.from({ length: rows }).map((_, index) => (
          <TableRow key={index}>
            <TableCell>
              <Skeleton className="h-5 rounded">
              </Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 rounded">
              </Skeleton>
            </TableCell>
            <TableCell>
              <Skeleton className="h-5 rounded">
              </Skeleton>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

export default PokemonsTableSkeleton;

