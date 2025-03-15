"use client";

import { HTMLMotionProps, motion } from "motion/react";
import Image from "next/image";
import { FC } from "react";

import AREYOU from "@/assets/menu/sm_areyou.svg";
import CRAVING from "@/assets/menu/sm_craving.svg";
import FOR from "@/assets/menu/sm_for.svg";
import MENU from "@/assets/menu/sm_menu.svg";
import QUESTIONMARK from "@/assets/menu/sm_question-mark.svg";
import WHAT from "@/assets/menu/sm_what.svg";
import { cn } from "@/lib/utils";

const HeroContentSM: FC<HTMLMotionProps<"div">> = ({ className, ...props }) => {
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
            <div className="flex-1"></div>
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
              className="flex flex-1 items-center justify-center px-8 py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
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
          <div className="flex">
            <motion.div
              className="flex items-center justify-center px-8 py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={CRAVING} alt="Craving" />
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
              className="flex w-[15%] items-end justify-center py-8"
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { opacity: 1, x: 0 }
              }}
            >
              <Image src={MENU} alt="Menu" />
            </motion.div>
            <motion.div
              className="flex flex-1 items-center px-8 py-8"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              <Image src={FOR} alt="For" />
            </motion.div>
            <motion.div
              className="flex w-[20%] items-end justify-center py-8"
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

export default HeroContentSM;
