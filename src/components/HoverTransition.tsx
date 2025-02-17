"use client";

import { HTMLMotionProps, motion } from "motion/react";
import {
  FC,
  HTMLProps,
  PropsWithChildren,
  ReactNode,
  useEffect,
  useState
} from "react";

import { cn } from "@/lib/utils";

interface Props {
  transitionElement: ReactNode;
}

const HoverTransition: FC<HTMLProps<HTMLDivElement> & Props> = ({
  transitionElement,
  className,
  children
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      className={cn("relative overflow-y-hidden", className)}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? "-100%" : "0%", opacity: hovered ? 0 : 1 }}
        transition={{ type: "spring", duration: 0.13 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute h-full w-full"
        animate={{ y: hovered ? "-100%" : "0%", opacity: hovered ? 1 : 0 }}
        transition={{ type: "spring", duration: 0.13 }}
      >
        {transitionElement}
      </motion.div>
    </motion.div>
  );
};

export default HoverTransition;
