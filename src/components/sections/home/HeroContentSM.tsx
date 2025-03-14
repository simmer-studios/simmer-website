import Image from "next/image";
import { FC, HTMLProps } from "react";

import HOVER_Burger from "@/assets/home/hover_burger.svg";
import HOVER_CreativeKitchen from "@/assets/home/hover_creative-kitchen.svg";
import HOVER_Cup from "@/assets/home/hover_cup.svg";
import HOVER_Eggcited from "@/assets/home/hover_eggcited.svg";
import HOVER_Just from "@/assets/home/hover_just.svg";
import HOVER_More from "@/assets/home/hover_more.svg";
import HOVER_SoMuchMore from "@/assets/home/hover_so-much-more.svg";
import HOVER_Than from "@/assets/home/hover_than.svg";
import HOVER_ThinkOutside from "@/assets/home/hover_think-outside.svg";
import HOVER_WeAre from "@/assets/home/hover_we-are.svg";
import A from "@/assets/home/sm_A.svg";
import Branding from "@/assets/home/sm_branding.svg";
import Creative from "@/assets/home/sm_creative.svg";
import DiagonalText from "@/assets/home/sm_diagonal-text.svg";
import Egg from "@/assets/home/sm_egg.svg";
import EggSandwich from "@/assets/home/sm_egg-sandwich.svg";
import Burger from "@/assets/home/sm_hamburger.svg";
import Just from "@/assets/home/sm_just.svg";
import More from "@/assets/home/sm_more.svg";
import Studio from "@/assets/home/sm_studio.svg";
import Than from "@/assets/home/sm_than.svg";
import WeAre from "@/assets/home/we-are.svg";
import HoverTransition from "@/components/HoverTransition";
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
            <div className="flex flex-1 justify-end px-5 py-5">
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_WeAre} alt="We are" width={65} />
                }
              >
                <Image src={WeAre} alt="We are" width={70} />
              </HoverTransition>
            </div>
            <div className="flex items-center justify-center px-5 py-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_More} alt="More" />}
              >
                <Image src={More} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <HoverTransition
                className="overflow-y-hidden"
                transitionElement={<Image src={Egg} alt="" />}
              >
                <Image src={Burger} alt="" />
              </HoverTransition>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex basis-[44%] justify-end px-5">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={<Image src={HOVER_Burger} alt="" />}
              >
                <Image src={EggSandwich} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_Than} alt="Than" />}
              >
                <Image src={Than} alt="Than" />
              </HoverTransition>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex flex-1 items-center justify-end px-5 py-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_Just} alt="Just" />}
              >
                <Image src={Just} alt="Just" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image src={HOVER_Cup} alt="" className="scale-150" />
                }
              >
                <Image src={A} alt="" />
              </HoverTransition>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex-1"></div>
            <div className="px-5 py-5">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image
                    src={HOVER_CreativeKitchen}
                    alt=""
                    className="-mt-2.5"
                  />
                }
              >
                <Image src={Creative} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_ThinkOutside} alt="" />}
              >
                <Image src={DiagonalText} alt="" className="aspect-square" />
              </HoverTransition>
            </div>
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex items-center justify-center px-5 py-5">
            <Image src={Branding} alt="Branding" />
          </div>
        </div>
      </div>
      <div className="row border-b-2 border-black">
        <div className="container">
          <div className="flex divide-x-2 divide-black">
            <div className="flex basis-[37%] items-center justify-end px-5">
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_Eggcited} alt="" width={45} />
                }
              >
                <Image src={Egg} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <Image src={Studio} alt="Studio" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSM;
