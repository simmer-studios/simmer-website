import Image from "next/image";
import { FC, HTMLProps } from "react";

import A from "@/assets/home/sm_A.svg";
import BRANDING from "@/assets/home/sm_branding.svg";
import CREATIVE from "@/assets/home/sm_creative.svg";
import DIAGONALTEXT from "@/assets/home/sm_diagonal-text.svg";
import EGG from "@/assets/home/sm_egg.svg";
import EGGSANDWICH from "@/assets/home/sm_egg-sandwich.svg";
import HAMBURGER from "@/assets/home/sm_hamburger.svg";
import JUST from "@/assets/home/sm_just.svg";
import MORE from "@/assets/home/sm_more.svg";
import STUDIO from "@/assets/home/sm_studio.svg";
import THAN from "@/assets/home/sm_than.svg";
import WEARE from "@/assets/home/sm_we-are.svg";
import { cn } from "@/lib/utils";

const HeroContentSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={className} {...props}>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex flex-1 justify-end px-5">
              <Image src={WEARE} alt="We are" />
            </div>
            <div className="flex items-center justify-center px-5 py-5">
              <Image src={MORE} alt="More" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <Image src={HAMBURGER} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex basis-[44%] justify-end px-5">
              <Image src={EGGSANDWICH} alt="" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <Image src={THAN} alt="Than" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex flex-1 items-center justify-end px-5 py-5">
              <Image src={JUST} alt="Just" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <Image src={A} alt="A" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex-1"></div>
            <div className="px-5 py-5">
              <Image src={CREATIVE} alt="Creative" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <Image src={DIAGONALTEXT} alt="MADE-FOR-ALL-KINDS-OF-BRANDS" />
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex items-center justify-center px-5 py-5">
            <Image src={BRANDING} alt="Branding" />
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex basis-[37%] items-center justify-end px-5">
              <Image src={EGG} alt="" />
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <Image src={STUDIO} alt="Studio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSM;
