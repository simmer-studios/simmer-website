"use client";

import { motion } from "motion/react";
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
import HOVER_Just from "@/assets/home/hover_just.svg";
import HOVER_More from "@/assets/home/hover_more.svg";
import HOVER_Than from "@/assets/home/hover_than.svg";
import HOVER_WeAre from "@/assets/home/hover_we-are.svg";
import Just from "@/assets/home/just.svg";
import More from "@/assets/home/more.svg";
import Naruto from "@/assets/home/naruto.svg";
import Play from "@/assets/home/play.svg";
import Ramen from "@/assets/home/ramen.svg";
import Studio from "@/assets/home/studio.svg";
import Than from "@/assets/home/than.svg";
import WeAre from "@/assets/home/we-are.svg";
import HoverTransition from "@/components/HoverTransition";
import { cn } from "@/lib/utils";

const HeroContentLG: FC<HTMLProps<HTMLDivElement>> = (props) => {
  return (
    <div {...props}>
      {/* WE ARE MORE THAN */}
      <div className="row flex border-b-2 border-black">
        <div className="container h-full">
          <div className="flex items-center justify-center gap-[2vw] px-8 py-8">
            <HoverTransition
              transitionElement={<Image src={HOVER_WeAre} alt="We are" fill />}
            >
              <Image src={WeAre} alt="We are" height={160} />
            </HoverTransition>
            <div className="">
              <HoverTransition
                transitionElement={<Image src={HOVER_More} alt="More" fill />}
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
              >
                <Image src={Than} alt="Than" height={160} />
              </HoverTransition>
            </div>
          </div>
        </div>
        <VerticalLinks href="#">STRATEGY</VerticalLinks>
      </div>
      {/* JUST A */}
      <div className="row flex border-b-2 border-black">
        <div className="container h-full">
          <div className="flex items-center justify-center divide-x-2 divide-black">
            <div className="px-8 py-8">
              <HoverTransition
                transitionElement={
                  <Image src={HOVER_Burger} alt="" className="scale-120" fill />
                }
              >
                <Image src={EggSandwich} alt="" height={160} />
              </HoverTransition>
            </div>
            <div className="px-8 py-8">
              <HoverTransition
                transitionElement={<Image src={HOVER_Just} alt="Just" fill />}
              >
                <Image src={Just} alt="Just" height={160} />
              </HoverTransition>
            </div>
            <div className="px-8 py-8">
              <Image src={A} alt="" height={160} />
            </div>
            <div className="px-8 py-8">
              <Image
                src={DiagonalText}
                alt=""
                height={160}
                className="aspect-square"
              />
            </div>
          </div>
        </div>
        <VerticalLinks href="#">IDENTITY</VerticalLinks>
      </div>
      {/* CREATIVE & BRANDING */}
      <div className="row flex border-b-2 border-black">
        <div className="container h-full">
          <div className="flex items-center justify-center">
            <div className="px-5 py-5">
              <Image src={Creative} alt="" height={160} />
            </div>
            <Image
              src={Ampersand}
              alt=""
              height={160}
              width={100}
              className="h-full"
            />
            <div className="px-10 py-5">
              <Image src={Branding} alt="" height={160} />
            </div>
          </div>
        </div>
        <VerticalLinks href="#">EXECUTION</VerticalLinks>
      </div>
      {/* STUDIO */}
      <div className="row flex border-b-2 border-black">
        <div className="flex-1 px-8"></div>
        <div className="container flex h-full justify-center">
          <div className="flex items-center justify-center divide-x-2 divide-black">
            <div className="bg-simmer-white px-8 py-8">
              <Image src={Naruto} alt="" height={160} />
            </div>
            <div className="bg-simmer-white px-8 py-8">
              <Image src={Studio} alt="" height={160} />
            </div>
            <div className="bg-simmer-white px-8 py-8">
              <Image src={Egg} alt="" height={160} />
            </div>
          </div>
          <Link
            href="#"
            className="content-center items-center border-l-2 border-black bg-simmer-yellow hover:brightness-95"
          >
            <Image src={Play} alt="" className="" height={200} />
          </Link>
        </div>
        <div className="flex-1 border-l-0 border-black px-8 xl:px-0"></div>
        <VerticalLinks href="#">CLICK ME</VerticalLinks>
      </div>
    </div>
  );
};

const VerticalLinks: FC<ComponentProps<typeof Link>> = ({
  href,
  className,
  children,
  ...props
}) => {
  return (
    <Link
      href={href}
      className={cn(
        "hidden min-w-[82px] items-center justify-center border-l-2 border-black bg-simmer-white font-adelle-mono text-2xl uppercase hover:brightness-95 lg:flex",
        className
      )}
      style={{ writingMode: "vertical-lr" }}
      {...props}
    >
      {children}
    </Link>
  );
};

export default HeroContentLG;
