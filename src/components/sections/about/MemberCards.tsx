"use client";

import { motion } from "motion/react";
import { FC, HTMLProps } from "react";

import MemberCard from "@/components/MemberCard";
import { cn } from "@/lib/utils";
import { Creative } from "@/payload-types";

interface Props {
  creatives: Creative[];
}

const MemberCards: FC<HTMLProps<HTMLDivElement> & Props> = ({
  creatives,
  className,
  ...props
}) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  return (
    <section className={cn("space-y-10", className)} {...props}>
      <div className="container px-8">
        <h2 className="text-center font-adelle-mono text-7xl font-bold tracking-tighter lg:text-[clamp(1rem,8.5vw,160px)]">
          FLIP.ME — &#91;OVER&#93;
        </h2>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
        variants={container}
        className="container grid grid-cols-2 gap-x-4 gap-y-6 px-8 sm:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-4"
      >
        {creatives.map(({ id, name, role, avatar, tagline, image }, index) => (
          <motion.div key={id} variants={item}>
            <MemberCard
              name={name}
              role={role}
              avatar={avatar}
              photo={image}
              catchPhrase={tagline}
              number={index + 1}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Uncomment if load more is integrated */}
      {/* <div className="flex items-center justify-center hidden">
        <button className="rounded-full border-2 border-black bg-simmer-white px-7 py-1 active:bg-simmer-yellow">
          <span className="inline-block pt-1 font-adelle-mono">LOAD MORE</span>
        </button>
      </div> */}
    </section>
  );
};

export default MemberCards;
