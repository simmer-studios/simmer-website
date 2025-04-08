"use client";

import Image from "next/image";
import { FC } from "react";

import FILTER from "@/assets/snap/filter.svg";
import { cn } from "@/lib/utils";
import { Category } from "@/payload-types";

import CustomFilterDropdown from "./CustomFilterDropdown";

interface Props {
  filters: Category[];
}

const SnapsFilterDropdown: FC<Props> = ({ filters }) => {
  return (
    <CustomFilterDropdown
      trigger={(activeFilter) => (
        <button
          className={cn(
            "flex basis-[20%] border-x-2 border-simmer-white bg-black",
            {
              "border-black bg-simmer-yellow": activeFilter
            }
          )}
        >
          <div className="flex px-5 py-5">
            {activeFilter ? (
              <span className="text-start font-articulat text-xl font-bold uppercase text-black">
                {activeFilter.name}
              </span>
            ) : (
              <Image src={FILTER} alt="Filter" width={100} />
            )}
          </div>
        </button>
      )}
      data={filters}
    />
  );
};

export default SnapsFilterDropdown;
