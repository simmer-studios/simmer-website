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
        <div className="flex h-[32px] w-[32px] flex-shrink-0 items-start justify-start lg:h-[40px]">
          <Image
            src={icon.url}
            alt={icon.alt || ""}
            width={32.93}
            height={82.05}
            className="h-full w-full object-scale-down"
          />
        </div>
        <h2 className="w-full text-pretty text-4xl font-bold tracking-tight lg:min-w-[5ch] lg:max-w-[20ch] lg:text-6xl">
          {heading}
        </h2>
        <p className="basis-full text-lg">{caption}</p>
      </div>
    </section>
  );
};

export default IconHeadingCaptionCombo;
