import Image from "next/image";
import { FC, HTMLProps, ReactNode } from "react";

import { cn, getMediaType, isValidImage } from "@/lib/utils";
import { Media } from "@/payload-types";

interface Props {
  heading?: string;
  caption?: string;
  icon: Media | number;
}

const IconHeadingCaptionCombo: FC<HTMLProps<HTMLDivElement> & Props> = ({
  heading,
  caption,
  icon,
  className,
  ...props
}) => {
  if (!isValidImage(icon)) {
    return null;
  }

  return (
    <section className={cn("w-full px-10", className)} {...props}>
      <div className="container flex flex-col gap-4 font-articulat lg:flex-row lg:gap-10">
        <div className="flex-shrink-0">
          <Image
            src={icon.url}
            alt={icon.alt || ""}
            width={32.93}
            height={82.05}
            className="w-20 lg:w-24"
          />
        </div>
        <h2 className="text-pretty text-4xl font-bold tracking-tight lg:basis-full lg:text-6xl">
          {heading}
        </h2>
        <p className="basis-full text-lg">{caption}</p>
      </div>
    </section>
  );
};

export default IconHeadingCaptionCombo;
