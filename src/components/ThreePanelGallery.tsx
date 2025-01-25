import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLProps } from "react";

interface Props {
  items: {
    id: string;
    url: string;
    altText: string;
  }[];
}

const ThreePanelGallery: FC<HTMLProps<HTMLDivElement> & Props> = ({
  items,
  className
}) => {
  return (
    <section className={cn("", className)}>
      <div className="grid grid-cols-1 gap-4 divide-black border-y-2 border-black lg:grid-cols-3 lg:gap-0 lg:divide-x-2">
        {Array.from({ length: 3 }).map((image, i) => (
          <div className="relative aspect-[3/4] lg:aspect-square" key={i}>
            <Image
              src={"/images/img_placeholder.jpg"}
              alt=""
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThreePanelGallery;
