"use client";

import { FC } from "react";

import { Snap } from "@/payload-types";

import MasonryBlock from "./MasonryBlock";
import MasonryContainer from "./MasonryContainer";

interface MasonrySnapsProps {
  snaps: Snap[];
}

const MasonrySnaps: FC<MasonrySnapsProps> = ({ snaps }) => {
  return (
    <div className="basis-full border-t-2 border-black px-4 py-4">
      <MasonryContainer>
        {snaps
          .map((snap) =>
            typeof snap.thumbnail !== "number" ? (
              <MasonryBlock
                key={snap.id}
                slug={snap.slug}
                name={snap.name}
                media={snap.thumbnail}
              />
            ) : null
          )
          .filter((item) => item !== null)}
      </MasonryContainer>
    </div>
  );
};

export default MasonrySnaps;
