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

  const handleToggleFilter = ({ id, label }: Filter) => {
    if (id === activeFilter?.id) {
      setActiveFilter(null);
    } else {
      setActiveFilter({ id, label });
    }
  };

  /* call the onFilterChange callback when the active filter changes */
  useEffect(() => {
    if (onFilterChange) onFilterChange(activeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  /* if the filters change, reset the active filter */
  useEffect(() => {
    setActiveFilter(null);
  }, [filters]);

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
          ? filters.map(({ id, label }) => (
              <DropdownMenuItem
                key={id}
                onClick={() => handleToggleFilter({ id, label })}
                className={cn(
                  "underline underline-offset-2 hover:text-simmer-yellow",
                  {
                    "text-simmer-yellow": activeFilter?.id === id
                  }
                )}
              >
                {label}
              </DropdownMenuItem>
            ))
          : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomFilterDropdown;
