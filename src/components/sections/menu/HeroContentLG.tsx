import Image from "next/image";
import { FC, HTMLProps } from "react";

import AREYOU from "@/assets/menu/areyou.svg";
import CRAVING from "@/assets/menu/craving.svg";
import FOR from "@/assets/menu/for.svg";
import MENU from "@/assets/menu/menu.svg";
import OURSIMMERSPECIALS from "@/assets/menu/our-simmer-specials.svg";
import QUESTIONMARK from "@/assets/menu/question-mark.svg";
import WHAT from "@/assets/menu/what.svg";
import { cn } from "@/lib/utils";

const HeroContentLG: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-simmer-white", className)} {...props}>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <div className="px-8 py-8">
              <Image src={WHAT} alt="What" />
            </div>
            <div className="px-8 py-8">
              <Image src={AREYOU} alt="Are You" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <div className="flex-1 px-8 py-8">
              <Image src={CRAVING} alt="Craving" />
            </div>
            <div className="flex w-[20%] items-center justify-center px-12">
              <Image src={OURSIMMERSPECIALS} alt="Our Simmer Specials" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex">
            <div className="aspect-square w-[10%]"></div>
            <div className="flex-1 border-l-2 border-simmer-white px-16 py-8">
              <Image src={FOR} alt="For" />
            </div>
            <div className="border-r-2 border-simmer-white px-16 py-8">
              <Image src={MENU} alt="For" />
            </div>
            <div className="flex aspect-square w-[16%] items-center justify-center px-16 py-8">
              <Image src={QUESTIONMARK} alt="?" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentLG;
