"use client";

import {
  FC,
  HTMLProps,
  memo,
  ReactNode,
  useEffect,
  useMemo,
  useState
} from "react";
import { set } from "zod";

import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from "./ui/DropdownMenu";

interface Props extends Omit<HTMLProps<HTMLDivElement>, "data"> {
  data: Category[];
  onFilterChange?: (filter: Category | null) => void;
  trigger: (activeFilter: Category | null) => ReactNode;
}

const CustomFilterDropdown: FC<Props> = ({
  data: filters,
  onFilterChange,
  className,
  trigger
}) => {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null);

  const handleToggleFilter = (category: Category) => {
    if (category.id === activeFilter?.id) {
      setActiveFilter(null);
    } else {
      setActiveFilter(category);
    }
  };

  /* call the onFilterChange callback when the active filter changes */
  useEffect(() => {
    if (onFilterChange) onFilterChange(activeFilter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeFilter]);

  /* reset active filter when filters change */
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
          ? filters.map((filter) => (
              <DropdownMenuItem
                key={filter.id}
                onClick={() => handleToggleFilter(filter)}
                className={cn(
                  "underline underline-offset-2 hover:text-simmer-yellow",
                  {
                    "text-simmer-yellow": activeFilter?.name === filter.name
                  }
                )}
              >
                {filter.name}
              </DropdownMenuItem>
            ))
          : null}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default CustomFilterDropdown;
