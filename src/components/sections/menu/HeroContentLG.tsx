"use client";

import { HTMLMotionProps, motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

import AREYOU from "@/assets/menu/areyou.svg";
import CRAVING from "@/assets/menu/craving.svg";
import FOR from "@/assets/menu/for.svg";
import MENU from "@/assets/menu/menu.svg";
import OURSIMMERSPECIALS from "@/assets/menu/our-simmer-specials.svg";
import QUESTIONMARK from "@/assets/menu/question-mark.svg";
import WHAT from "@/assets/menu/what.svg";
import { cn } from "@/lib/utils";

const HeroContentLG: FC<HTMLMotionProps<"div">> = ({ className, ...props }) => {
  return (
    <motion.div
      className={cn("divide-y-2 divide-simmer-white", className)}
      {...props}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1
          }
        }
      }}
    >
      <motion.div
        className="row"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <motion.div
              className="px-8 py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={WHAT} alt="What" />
            </motion.div>
            <motion.div
              className="px-8 py-8"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={AREYOU} alt="Are You" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="row"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <motion.div
              className="flex-1 px-8 py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={CRAVING} alt="Craving" />
            </motion.div>
            <motion.div
              className="flex w-[20%] items-center justify-center px-12"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={OURSIMMERSPECIALS} alt="Our Simmer Specials" />
            </motion.div>
          </div>
        </div>
      </motion.div>
      <motion.div
        className="row"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 }
        }}
      >
        <div className="container">
          <div className="flex">
            <div className="aspect-square w-[10%]"></div>
            <motion.div
              className="flex-1 border-l-2 border-simmer-white px-16 py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={FOR} alt="For" />
            </motion.div>
            <motion.div
              className="border-r-2 border-simmer-white px-16 py-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              <Image src={MENU} alt="Menu" />
            </motion.div>
            <motion.div
              className="flex aspect-square w-[16%] items-center justify-center px-16 py-8"
              variants={{
                hidden: { opacity: 0, x: 20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={QUESTIONMARK} alt="?" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContentLG;
