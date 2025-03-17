"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, HTMLProps } from "react";

import PEEKHERE from "@/assets/about/peek-here.svg";
import ArrowDown from "@/components/icons/ArrowDown";
import { cn, isValidImage } from "@/lib/utils";
import { Media } from "@/payload-types";

interface Props {
  banner: number | Media;
  thumbnail: number | Media;
  cover: number | Media;
  tagline: string;
  description: string;
}

const Hero: FC<HTMLProps<HTMLDivElement> & Props> = ({
  banner,
  thumbnail,
  cover,
  tagline,
  description,
  className
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const imageContainer = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const imageItem = {
    hidden: { opacity: 0, scale: 0.95 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      animate="show"
      variants={container}
      className={cn(
        "flex min-h-screen flex-col bg-[url(/images/dash-lines.svg)] bg-bottom bg-repeat-x lg:bg-none",
        className
      )}
    >
      <motion.div
        variants={item}
        className="relative aspect-[9/16] h-dvh border-b-2 border-black lg:order-2 lg:h-dvh lg:border-y-2"
      >
        <Image
          src={
            isValidImage(banner) ? banner.url : "/images/img_placeholder.jpg"
          }
          alt={(isValidImage(banner) && banner.alt) || ""}
          fill
          className="object-cover"
        />
      </motion.div>
      <div className="mx-auto grid max-w-[1920px] lg:order-1 lg:grid-cols-[1fr_40%] lg:gap-8 lg:px-16">
        <motion.div
          variants={item}
          className="flex items-center justify-center px-5 py-5 lg:items-start lg:justify-start lg:px-0 lg:py-16"
        >
          <h1 className="max-w-[8ch] text-center font-adelle-mono text-6xl font-bold tracking-tighter min-[425px]:text-7xl sm:text-8xl lg:text-left lg:text-[clamp(1rem,9vw,200px)]">
            CREATIVE CHEFS
          </h1>
        </motion.div>
        <motion.div
          variants={item}
          className="border-y-2 border-black px-8 py-8 lg:flex lg:flex-col lg:justify-between lg:gap-10 lg:border-y-0 lg:py-16"
        >
          <div className="hidden lg:flex lg:justify-end">
            <Image
              src={PEEKHERE}
              alt="Peek here"
              className="lg:w-[80%] lg:pt-2 xl:w-[67%] min-[1440px]:w-[60%] min-[1920px]:w-[58%]"
            />
          </div>
          <div className="space-y-2">
            <p className="font-bold lg:text-[clamp(1rem,1vw,20px)]">
              SOMETHING ABOUT
            </p>
            <p className="text-pretty lg:text-lg lg:leading-snug xl:text-xl xl:leading-[clamp(1rem,1.8vw,40px)] min-[1440px]:text-[clamp(1rem,1.1vw,25px)]">
              {description}
            </p>
          </div>
        </motion.div>
      </div>
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={imageContainer}
        className="container order-3 grid gap-8 border-black px-8 py-12 md:grid-cols-2 lg:bg-none lg:py-14"
      >
        <motion.div
          variants={imageItem}
          className="relative aspect-square overflow-hidden rounded-2xl border-2 border-black md:rounded-3xl"
        >
          <Image
            src={
              isValidImage(thumbnail)
                ? thumbnail.url
                : "/images/img_placeholder.jpg"
            }
            alt={(isValidImage(thumbnail) && thumbnail.alt) || ""}
            fill
            className="object-cover"
          />
        </motion.div>
        <div className="flex flex-col gap-8">
          <motion.div
            variants={imageItem}
            className="order-1 flex items-end justify-between rounded-2xl bg-black px-5 py-5 md:order-2 md:max-h-max md:rounded-3xl xl:px-8 xl:py-8"
          >
            <span className="inline-block max-w-[11ch] font-adelle-mono-flex text-3xl uppercase leading-none text-simmer-white sm:text-4xl md:text-3xl lg:text-4xl xl:text-5xl">
              {tagline}
            </span>
            <ArrowDown className="fill-simmer-white xl:h-20 xl:w-8" />
          </motion.div>
          <motion.div
            variants={imageItem}
            className="relative order-2 aspect-square flex-1 overflow-hidden rounded-2xl border-2 border-black md:order-1 md:aspect-auto md:rounded-3xl"
          >
            <Image
              src={
                isValidImage(cover) ? cover.url : "/images/img_placeholder.jpg"
              }
              alt={(isValidImage(cover) && cover.alt) || ""}
              fill
              className="object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
