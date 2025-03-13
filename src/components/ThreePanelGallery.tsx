import Image from "next/image";
import { FC, HTMLProps } from "react";

import { cn, getMediaType, isValidImage } from "@/lib/utils";
import { Media, Project } from "@/payload-types";

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
    !isValidImage(firstImage) ||
    !isValidImage(secondImage) ||
    !isValidImage(thirdImage)
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
          <Image
            src={firstImage.url}
            alt={firstImage.alt || ""}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative aspect-[3/4] lg:aspect-square"
          key={secondImage.id}
        >
          <Image
            src={secondImage.url}
            alt={secondImage.alt || ""}
            fill
            className="object-cover"
          />
        </div>
        <div
          className="relative aspect-[3/4] lg:aspect-square"
          key={thirdImage.id}
        >
          <Image
            src={thirdImage.url}
            alt={thirdImage.alt || ""}
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ThreePanelGallery;
