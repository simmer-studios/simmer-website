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
                {activeFilter.label}
              </span>
            ) : (
              <Image src={FILTER} alt="Filter" width={100} />
            )}
          </div>
        </button>
      )}
      filters={[
        { label: "Featured", id: "featured" },
        { label: "Food & Beverage", id: "food_beverages" },
        {
          label: "Beauty & Lifestyle",
          id: "beauty_lifestyle"
        },
        { label: "Arts", id: "arts" },
        {
          label: "Social Media Focused",
          id: "social_media_focused"
        },
        { label: "Technology", id: "technology" }
      ]}
    />
  );
};

export default SnapsFilterDropdown;
