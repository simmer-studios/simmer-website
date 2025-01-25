import { FC, HTMLProps } from "react";

import WHAT from "@/assets/portfolio/what.svg";
import WEVE from "@/assets/portfolio/weve.svg";
import SERVED from "@/assets/portfolio/served.svg";
import DESIGNBRANDING from "@/assets/portfolio/design-branding.svg";
import SOFAR from "@/assets/portfolio/so-far.svg";
import PORTFOLIO from "@/assets/portfolio/portfolio.svg";
import OURWORKS from "@/assets/portfolio/our-works.svg";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HeroContentLG: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-black", className)} {...props}>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="px-8 py-8">
              <Image src={WHAT} alt="What" />
            </div>
            <div className="px-8 py-8">
              <Image src={WEVE} alt="We've" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex">
            <div className="flex items-center border-r-2 border-black px-8">
              <Image src={SERVED} alt="Served" />
            </div>
            <div className="">
              <Image src={DESIGNBRANDING} alt="Design & Branding" />
            </div>
            <div className="flex basis-[15%] items-end justify-end px-8 py-8">
              <Image src={OURWORKS} alt="Our Works" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex">
            <div className="basis-[8%]"></div>
            <div className="basis-[65%] border-l-2 border-black px-8 py-8">
              <Image src={SOFAR} alt="So Far" />
            </div>
            <div className="border-r-2 border-black px-8 py-8">
              <Image src={PORTFOLIO} alt="Portfolio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentLG;
