"use client";

import Image from "next/image";
import { FC, HTMLProps, useEffect } from "react";

import Pause from "@/assets/home/pause.svg";
import Play from "@/assets/home/play.svg";
import A from "@/assets/home/sm_A.svg";
import Branding from "@/assets/home/sm_branding.svg";
import Creative from "@/assets/home/sm_creative.svg";
import DiagonalText from "@/assets/home/sm_diagonal-text.svg";
import Egg from "@/assets/home/sm_egg.svg";
import EggSandwich from "@/assets/home/sm_egg-sandwich.svg";
import Burger from "@/assets/home/sm_hamburger.svg";
import HOVER_Burger from "@/assets/home/sm_hover_burger.svg";
import HOVER_CreativeKitchen from "@/assets/home/sm_hover_creative-kitchen.svg";
import HOVER_Cup from "@/assets/home/sm_hover_cup.svg";
import HOVER_Eggcited from "@/assets/home/sm_hover_eggcited.svg";
import HOVER_Just from "@/assets/home/sm_hover_just.svg";
import HOVER_More from "@/assets/home/sm_hover_more.svg";
import HOVER_SoMuchMore from "@/assets/home/sm_hover_so-much-more.svg";
import HOVER_Than from "@/assets/home/sm_hover_than.svg";
import HOVER_ThinkOutside from "@/assets/home/sm_hover_think-outside.svg";
import HOVER_WeAre from "@/assets/home/sm_hover_we-are.svg";
import Just from "@/assets/home/sm_just.svg";
import More from "@/assets/home/sm_more.svg";
import Studio from "@/assets/home/sm_studio.svg";
import Than from "@/assets/home/sm_than.svg";
import WeAre from "@/assets/home/we-are.svg";
import HoverTransition from "@/components/HoverTransition";
import { useAnimation } from "@/contexts/AnimationContext";

const HeroContentSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  const { isPlaying, setIsPlaying } = useAnimation();

  useEffect(() => {
    // Start playing after 2 seconds
    const playTimeoutId = setTimeout(() => {
      setIsPlaying(true);
    }, 2000);

    // Set timeout to pause after 5 seconds from when play starts
    const pauseTimeoutId = setTimeout(() => {
      setIsPlaying(false);
    }, 7000); // 2000ms initial delay + 5000ms play duration

    // Cleanup timeouts on unmount
    return () => {
      clearTimeout(playTimeoutId);
      clearTimeout(pauseTimeoutId);
    };
  }, []); // Empty dependency array means this runs once on mount

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

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
                delay={0}
              >
                <Image src={WeAre} alt="We are" width={70} />
              </HoverTransition>
            </div>
            <div className="flex items-center justify-center px-5 py-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_More} alt="More" />}
                delay={100}
              >
                <Image src={More} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <HoverTransition
                transitionElement={<Image src={Egg} alt="" width={45} />}
                delay={200}
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
                delay={300}
              >
                <Image src={EggSandwich} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5 py-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_Than} alt="Than" />}
                delay={400}
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
                delay={500}
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
                delay={600}
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
                delay={700}
              >
                <Image src={Creative} alt="" />
              </HoverTransition>
            </div>
            <div className="flex flex-1 items-center justify-start px-5">
              <HoverTransition
                transitionElement={<Image src={HOVER_ThinkOutside} alt="" />}
                delay={800}
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
                delay={900}
              >
                <Image src={Egg} alt="" />
              </HoverTransition>
            </div>
            <div className="flex items-center justify-start px-5 py-5">
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_SoMuchMore} alt="" height={50} />
                }
                delay={1000}
              >
                <Image src={Studio} alt="" height={50} />
              </HoverTransition>
            </div>

            <button
              id="play-button"
              className="flex items-center justify-center bg-simmer-yellow hover:brightness-95"
              onClick={handlePlayClick}
            >
              <Image src={isPlaying ? Pause : Play} alt="" width={70} />
            </button>
            <div className="flex flex-1 border-l-2 border-black"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroContentSM.displayName = "HeroContentSM";

export default HeroContentSM;
