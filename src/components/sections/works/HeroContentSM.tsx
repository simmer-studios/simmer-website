import Image from "next/image";
import { FC, HTMLProps } from "react";

import OURWORKS from "@/assets/works/sm_our-works.svg";
import PORTFOLIO from "@/assets/works/sm_portfolio.svg";
import SERVED from "@/assets/works/sm_served.svg";
import SOFAR from "@/assets/works/sm_so-far.svg";
import WEVE from "@/assets/works/sm_weve.svg";
import WHAT from "@/assets/works/sm_what.svg";
import { cn } from "@/lib/utils";

const HeroContentSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("", className)} {...props}>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex flex-1 justify-end px-5 py-5">
              <Image src={WHAT} alt="What" />
            </div>
            <div className="flex-shrink-0 basis-[11%]"></div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex min-w-max flex-shrink-0 basis-[11%] items-center justify-center px-5 py-5">
              <Image src={OURWORKS} alt="Our Works" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <Image src={WEVE} alt="We've" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex flex-1 items-center justify-center px-5 py-5">
              <Image src={SERVED} alt="Served" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex min-w-max flex-shrink-0 basis-[11%] items-center justify-center px-5 py-5">
              <Image src={PORTFOLIO} alt="Portfolio" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <Image src={SOFAR} alt="So Far" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSM;
