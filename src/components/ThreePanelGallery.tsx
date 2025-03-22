import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";
import { Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  firstImage: Media | number;
  secondImage: Media | number;
  thirdImage: Media | number;
}

const ImageBlockStyles = cn("relative aspect-square bg-black");

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
      <div className="grid grid-cols-1 divide-black border-black sm:grid-cols-3 sm:divide-x-2 sm:border-y-2">
        <div key={firstImage.id} className={ImageBlockStyles}>
          <CMSMedia
            media={firstImage}
            controls={false}
            className="object-contain"
          />
        </div>
        <div key={secondImage.id} className={ImageBlockStyles}>
          <CMSMedia
            media={secondImage}
            controls={false}
            className="object-contain"
          />
        </div>
        <div key={thirdImage.id} className={ImageBlockStyles}>
          <CMSMedia
            media={thirdImage}
            controls={false}
            className="object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreePanelGallery;
