import Image from "next/image";
import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

const BuildingTheBrand: FC<HTMLProps<HTMLImageElement>> = ({ className }) => {
  return (
    <Image
      src="/images/img_building-the-brand.svg"
      alt="Building the Brand"
      width={32.93}
      height={82.05}
      className={cn("w-20 lg:w-24", className)}
    />
  );
};

export default BuildingTheBrand;
