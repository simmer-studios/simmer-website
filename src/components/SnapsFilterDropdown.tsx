"use client";

import Image from "next/image";

import FILTER from "@/assets/snap/filter.svg";
import { cn } from "@/lib/utils";

import CustomFilterDropdown from "./CustomFilterDropdown";

const SnapsFilterDropdown = () => {
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
                {activeFilter.filterLabel}
              </span>
            ) : (
              <Image src={FILTER} alt="Filter" width={100} />
            )}
          </div>
        </button>
      )}
      filters={[
        { filterLabel: "Featured", filterId: "featured" },
        { filterLabel: "Food & Beverage", filterId: "food_beverages" },
        {
          filterLabel: "Beauty & Lifestyle",
          filterId: "beauty_lifestyle"
        },
        { filterLabel: "Arts", filterId: "arts" },
        {
          filterLabel: "Social Media Focused",
          filterId: "social_media_focused"
        },
        { filterLabel: "Technology", filterId: "technology" }
      ]}
    />
  );
};

export default SnapsFilterDropdown;
