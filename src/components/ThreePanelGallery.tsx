import { FC, HTMLProps } from "react";

import { cn, isValidImage } from "@/lib/utils";
import { Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  firstImage: Media | number;
  secondImage: Media | number;
  thirdImage: Media | number;
}

const ThreePanelGallery: FC<HTMLProps<HTMLDivElement> & Props> = ({
  firstImage,
  secondImage,
  thirdImage,
  className
}) => {
  if (
    typeof firstImage === "number" ||
    typeof secondImage === "number" ||
    typeof thirdImage === "number"
  ) {
    return null;
  }

  return (
    <section className={cn("", className)}>
      <div className="grid grid-cols-1 gap-4 divide-black border-y-2 border-black lg:grid-cols-3 lg:gap-0 lg:divide-x-2">
        <div
          className="relative aspect-[3/4] lg:aspect-square"
          key={firstImage.id}
        >
          <CMSMedia
            media={firstImage}
            className="absolute h-full w-full object-cover"
            controls={false}
          />
        </div>
        <div
          className="relative aspect-[3/4] lg:aspect-square"
          key={secondImage.id}
        >
          <CMSMedia
            media={secondImage}
            className="absolute h-full w-full object-cover"
            controls={false}
          />
        </div>
        <div
          className="relative aspect-[3/4] lg:aspect-square"
          key={thirdImage.id}
        >
          <CMSMedia
            media={thirdImage}
            className="absolute h-full w-full object-cover"
            controls={false}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreePanelGallery;
