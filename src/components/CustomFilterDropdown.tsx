"use client";

import { FC, HTMLProps, ReactNode, useEffect, useState } from "react";

import { Filter } from "@/lib/types";
import { cn } from "@/lib/utils";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/DropdownMenu";

interface Props extends HTMLProps<HTMLDivElement> {
  filters: Filter[];
  onFilterChange?: (filter: Filter | null) => void;
  trigger: (activeFilter: Filter | null) => ReactNode;
}

const CustomFilterDropdown: FC<Props> = ({
  filters,
  onFilterChange,
  className,
  trigger
}) => {
  const [activeFilter, setActiveFilter] = useState<Filter | null>(null);

  const handleToggleFilter = ({ filterId, filterLabel }: Filter) => {
    if (filterId === activeFilter?.filterId) {
      setActiveFilter(null);
    } else {
      setActiveFilter({ filterId, filterLabel });
    }
  };

  useEffect(() => {
    if (onFilterChange) onFilterChange(activeFilter);
  }, [activeFilter, onFilterChange]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>{trigger(activeFilter)}</DropdownMenuTrigger>
      <DropdownMenuContent
        avoidCollisions={true}
        collisionPadding={16}
        align="end"
        sideOffset={8}
        className="rounded-xl border-none bg-black px-5 py-8 font-adelle-mono tracking-normal text-simmer-white"
      >
        {filters
          ? filters.map(({ filterId, filterLabel }) => (
              <DropdownMenuItem
                key={filterId}
                onClick={() => handleToggleFilter({ filterId, filterLabel })}
                className={cn(
                  "underline underline-offset-2 hover:text-simmer-yellow",
                  {
                    "text-simmer-yellow": activeFilter?.filterId === filterId
                  }
                )}
              >
                {filterLabel}
              </DropdownMenuItem>
            ))
          : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomFilterDropdown;
