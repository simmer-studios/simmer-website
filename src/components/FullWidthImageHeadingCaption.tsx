import Image from "next/image";
import { FC, HTMLProps } from "react";

import { cn, isValidImage } from "@/lib/utils";
import { Media } from "@/payload-types";

import BuildingTheBrand from "./icons/BuildingTheBrand";

interface Props {
  image: number | Media;
  title: string;
  description: string;
}

const FullWidthImageHeadingCaption: FC<HTMLProps<HTMLDivElement> & Props> = ({
  image,
  title,
  description,
  className,
  ...props
}) => {
  if (!isValidImage(image)) {
    return null;
  }

  return (
    <section className={cn("", className)} {...props}>
      <div className="grid divide-black border-black lg:grid-cols-2 lg:divide-x-2 lg:border-y-2">
        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src={image.url}
            alt={image.alt || ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-10 pt-10 lg:aspect-square lg:p-20">
          <div className="max-h-max space-y-4 lg:space-y-8">
            <BuildingTheBrand />
            <h2 className="text-pretty text-4xl font-bold tracking-tight lg:text-6xl">
              {title}
            </h2>
            <p className="text-lg">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImageHeadingCaption;
