import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLProps } from "react";

interface Props {
  items: {
    id: number;
    subtext: string;
    description: string;
  }[];
}

const TwoImageText: FC<HTMLProps<HTMLDivElement> & Props> = ({
  items,
  className
}) => {
  return (
    <section className={cn("px-10 lg:px-20", className)}>
      <div className="container grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-20 lg:gap-32">
        {items &&
          items.map((item) => (
            <div key={item.id}>
              <div className="relative aspect-square w-full overflow-hidden rounded-2xl border-2 border-black">
                <Image
                  src="/images/img_placeholder.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-4 py-5 font-articulat">
                <p className="font-adelle-mono text-xl">[{item.subtext}]</p>
                <p className="text-xl">
                  {item.description}
                  {/* We make sure to create all assets from scratch. Simmer enjoys
                creating and producing key visuals that would match all the
                brands materials. */}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default TwoImageText;
