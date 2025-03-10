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
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <motion.div
      className={cn("relative cursor-pointer overflow-y-hidden", className)}
      onHoverStart={() => setIsActive(true)}
      onHoverEnd={() => setIsActive(false)}
      whileTap={{ scale: 0.98 }}
      onClick={() => setIsActive(!isActive)}
    >
      <motion.div
        animate={{ y: isActive ? "-100%" : "0%", opacity: isActive ? 0 : 1 }}
        transition={{ type: "spring", duration: 0.13 }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute h-full w-full"
        animate={{ y: isActive ? "-100%" : "0%", opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", duration: 0.13 }}
      >
        {transitionElement}
      </motion.div>
    </motion.div>
  );
};

export default HoverTransition;
