import Image from "next/image";
import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

import BuildingTheBrand from "./icons/BuildingTheBrand";

const FullWidthImageHeadingCaption: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn("", className)} {...props}>
      <div className="grid divide-black border-black lg:grid-cols-2 lg:divide-x-2 lg:border-y-2">
        <div className="relative aspect-square lg:aspect-auto">
          <Image
            src="/images/img_placeholder.jpg"
            alt=""
            fill
            className="object-cover"
          />
        </div>
        <div className="flex items-center justify-center px-10 pt-10 lg:aspect-square lg:p-20">
          <div className="max-h-max space-y-4 lg:space-y-8">
            <BuildingTheBrand />
            <h2 className="text-pretty text-4xl font-bold tracking-tight lg:text-6xl">
              Building the Brand For The Dapper Bro
            </h2>
            <p className="text-lg">
              The Bourbon Bros combines premium quality with a fun and
              approachable personality, making it an excellent choice for those
              looking for a high-quality bourbon that doesn&apos;t take itself
              too seriously. The Bourbon Bros combines premium quality with a
              fun and approachable personality, making it an excellent choice
              for those looking for a high-quality bourbon that doesn&apos;t
              take itself too seriously.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FullWidthImageHeadingCaption;
