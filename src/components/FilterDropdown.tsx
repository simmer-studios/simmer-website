"use client";

import { FC, useEffect, useState } from "react";

import ChevronDown from "./icons/ChevronDown";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/DropdownMenu";

type Filter = {
  filterId: string;
  filterLabel: string;
};

interface Props {
  items: Filter[];
  onFilterChange?: (filter: Filter | null) => void;
}

const FilterDropdown: FC<Props> = ({ items, onFilterChange }) => {
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);

  useEffect(() => {
    if (onFilterChange) onFilterChange(activeFilter);
  }, [activeFilter, onFilterChange]);

  return (
    <div className="inline-flex items-center gap-2">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex items-center gap-3 rounded-xl bg-black px-3 py-1.5 text-simmer-white">
          <span className="inline-block font-adelle-mono uppercase">
            {activeFilter ? activeFilter.filterLabel : "FILTERS"}
          </span>
          <ChevronDown className="aspect-square w-4 fill-simmer-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          avoidCollisions={true}
          collisionPadding={16}
          align="end"
          sideOffset={8}
          className="rounded-xl border-none bg-black px-5 py-8 font-adelle-mono tracking-normal text-simmer-white"
        >
          {items
            ? items.map(({ filterId, filterLabel }) => (
                <DropdownMenuItem
                  key={filterId}
                  onClick={() => setActiveFilter({ filterId, filterLabel })}
                  className="underline underline-offset-2 hover:text-simmer-yellow"
                >
                  {filterLabel}
                </DropdownMenuItem>
              ))
            : null}
        </DropdownMenuContent>
      </DropdownMenu>
      {activeFilter ? (
        <button
          className="rounded-xl border-2 border-black px-2 py-1 font-adelle-mono font-bold decoration-2 hover:bg-simmer-yellow"
          onClick={() => setActiveFilter(null)}
        >
          CLEAR
        </button>
      ) : null}
    </div>
  );
};

export default FilterDropdown;
