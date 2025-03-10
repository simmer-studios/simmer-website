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
  const [isMobile, setIsMobile] = useState<boolean>(false);

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  const transitionDuration = isMobile ? 1 : 0.13;

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
        transition={{ type: "spring", duration: transitionDuration }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute h-full w-full"
        animate={{ y: isActive ? "-100%" : "0%", opacity: isActive ? 1 : 0 }}
        transition={{ type: "spring", duration: transitionDuration }}
      >
        {transitionElement}
      </motion.div>
    </motion.div>
  );
};

export default HoverTransition;
