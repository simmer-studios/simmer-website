import Image from "next/image";
import { FC, HTMLProps } from "react";

import { cn, isValidImage } from "@/lib/utils";
import { Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  first: {
    image: number | Media;
    title: string;
    description: string;
  };
  second: {
    image: number | Media;
    title: string;
    description: string;
  };
}

const TwoImageText: FC<HTMLProps<HTMLDivElement> & Props> = ({
  first,
  second,
  className
}) => {
  return (
    <section className={cn("px-10 lg:px-20", className)}>
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:gap-32">
        {/* first image - left */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black">
            <CMSMedia
              media={first.image}
              className="absolute h-full w-full object-cover"
              controls={false}
            />
          </div>
          <div className="space-y-4 py-5 font-articulat">
            <p className="font-adelle-mono text-xl">[{first.title}]</p>
            <p className="text-xl">{first.description}</p>
          </div>
        </div>
        {/* second image - right */}
        <div>
          <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black">
            <CMSMedia
              media={second.image}
              className="absolute h-full w-full object-cover"
              controls={false}
            />
          </div>
          <div className="space-y-4 py-5 font-articulat">
            <p className="font-adelle-mono text-xl">[{second.title}]</p>
            <p className="text-xl">{second.description}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TwoImageText;
