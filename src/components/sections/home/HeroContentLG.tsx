"use client";

import Image from "next/image";
import Link from "next/link";
import { ComponentProps, FC, HTMLProps } from "react";

import A from "@/assets/home/A.svg";
import Ampersand from "@/assets/home/ampersand.svg";
import Branding from "@/assets/home/branding.svg";
import Creative from "@/assets/home/creative.svg";
import DiagonalText from "@/assets/home/diagonal-text.svg";
import Egg from "@/assets/home/egg.svg";
import EggSandwich from "@/assets/home/egg-sandwich.svg";
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
import Just from "@/assets/home/just.svg";
import More from "@/assets/home/more.svg";
import Naruto from "@/assets/home/naruto.svg";
import Pause from "@/assets/home/pause.svg";
import Play from "@/assets/home/play.svg";
import Ramen from "@/assets/home/ramen.svg";
import Studio from "@/assets/home/studio.svg";
import Than from "@/assets/home/than.svg";
import WeAre from "@/assets/home/we-are.svg";
import HoverTransition from "@/components/HoverTransition";
import { useAnimation } from "@/context/AnimationContext";
import { cn } from "@/lib/utils";

const HeroContentLG: FC<HTMLProps<HTMLDivElement>> = (props) => {
  const { isPlaying, setIsPlaying } = useAnimation();

  const handlePlayClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsPlaying(!isPlaying);
  };

  return (
    <div {...props}>
      {/* WE ARE MORE THAN */}
      <div className="row flex border-b-2 border-black">
        <div className="container h-full">
          <div className="flex items-center justify-center gap-[2vw] px-8 py-8">
            <div>
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_WeAre} alt="We are" fill />
                }
                delay={0}
              >
                <Image src={WeAre} alt="We are" height={160} />
              </HoverTransition>
            </div>
            <div className="">
              <HoverTransition
                transitionElement={<Image src={HOVER_More} alt="More" fill />}
                delay={100}
              >
                <Image src={More} alt="" height={160} />
              </HoverTransition>
            </div>
            <div className="-translate-y-12">
              <Image
                src={Ramen}
                alt=""
                height={160}
                className="translate-x-10 scale-[2]"
              />
            </div>
            <div className="">
              <HoverTransition
                transitionElement={<Image src={HOVER_Than} alt="Than" fill />}
                delay={200}
              >
                <Image src={Than} alt="Than" height={160} />
              </HoverTransition>
            </div>
          </div>
        </div>
        <VerticalText>STRATEGY</VerticalText>
      </div>
      {/* JUST A */}
      <div className="row flex overflow-y-hidden border-b-2 border-black">
        <div className="container h-full">
          <div className="flex items-center justify-center divide-x-2 divide-black">
            <div className="px-8 py-8">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image src={HOVER_Burger} alt="" className="scale-125" fill />
                }
                delay={300}
              >
                <Image src={EggSandwich} alt="" height={160} />
              </HoverTransition>
            </div>
            <div className="px-8 py-8">
              <HoverTransition
                transitionElement={<Image src={HOVER_Just} alt="Just" fill />}
                delay={400}
              >
                <Image src={Just} alt="Just" height={160} />
              </HoverTransition>
            </div>
            <div className="px-8 py-8">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image
                    src={HOVER_Cup}
                    alt=""
                    fill
                    className="-translate-x-5 scale-[1.7]"
                  />
                }
                delay={500}
              >
                <Image src={A} alt="" height={160} />
              </HoverTransition>
            </div>
            <div className="px-8 py-8">
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_ThinkOutside} alt="" fill />
                }
                delay={600}
              >
                <Image
                  src={DiagonalText}
                  alt=""
                  height={160}
                  className="aspect-square"
                />
              </HoverTransition>
            </div>
          </div>
        </div>
        <VerticalText>IDENTITY</VerticalText>
      </div>
      {/* CREATIVE & BRANDING */}
      <div className="row flex border-b-2 border-black">
        <div className="container h-full overflow-y-hidden">
          <div className="flex items-center justify-center">
            <div className="px-5 py-5">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image
                    src={HOVER_CreativeKitchen}
                    alt=""
                    className="scale-125"
                    fill
                  />
                }
                delay={700}
              >
                <Image src={Creative} alt="" height={160} />
              </HoverTransition>
            </div>
            <Image src={Ampersand} alt="" height={160} width={90} />
            <div className="px-10 py-5">
              <Image src={Branding} alt="" height={160} />
            </div>
          </div>
        </div>
        <VerticalText>EXECUTION</VerticalText>
      </div>
      {/* STUDIO */}
      <div className="row flex border-b-2 border-black">
        <div className="flex-1 px-8"></div>
        <div className="container flex h-full justify-center overflow-hidden">
          <div className="flex items-center justify-center divide-x-2 divide-black">
            <div className="bg-simmer-white px-8 py-8">
              <Image src={Naruto} alt="" height={160} className="scale-110" />
            </div>
            <div className="bg-simmer-white px-8 py-8">
              <HoverTransition
                className="overflow-y-visible"
                transitionElement={
                  <Image
                    src={HOVER_SoMuchMore}
                    alt=""
                    className="scale-110"
                    fill
                  />
                }
                delay={800}
              >
                <Image src={Studio} alt="" height={160} />
              </HoverTransition>
            </div>
            <div className="bg-simmer-white px-8 py-8">
              <HoverTransition
                transitionElement={<Image src={HOVER_Eggcited} alt="" fill />}
                delay={900}
              >
                <Image src={Egg} alt="" height={160} />
              </HoverTransition>
            </div>
          </div>
          <button
            id="play-button"
            className="content-center items-center border-l-2 border-black bg-simmer-yellow hover:brightness-95"
            onClick={handlePlayClick}
          >
            <Image src={isPlaying ? Pause : Play} alt="" height={200} />
          </button>
        </div>
        <div
          id="play-button-pseudo"
          className="flex-1 border-l-0 border-black px-8 xl:px-0"
        ></div>
        <VerticalText>CLICK ME</VerticalText>
      </div>
    </div>
  );
};

const VerticalText: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "hidden min-w-[82px] items-center justify-center border-l-2 border-black bg-simmer-white font-adelle-mono text-2xl uppercase hover:brightness-95 lg:flex",
        className
      )}
      style={{ writingMode: "vertical-lr" }}
      {...props}
    >
      {children}
    </div>
  );
};

export default HeroContentLG;
