"use client";

import { motion } from "motion/react";
import { FC, HTMLProps, ReactNode, useEffect, useState } from "react";

import { useAnimation } from "@/contexts/AnimationContext";
import { cn } from "@/lib/utils";

interface Props {
  transitionElement: ReactNode;
  delay?: number;
}

const HoverTransition: FC<HTMLProps<HTMLDivElement> & Props> = ({
  transitionElement,
  className,
  children,
  delay = 0
}) => {
  const [isActive, setIsActive] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const { isPlaying } = useAnimation();

  useEffect(() => {
    setIsMobile("ontouchstart" in window || navigator.maxTouchPoints > 0);
  }, []);

  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setIsActive(true);
      }, delay);
      return () => clearTimeout(timer);
    } else {
      setIsActive(false);
    }
  }, [isPlaying, delay]);

  const transitionDuration = isMobile ? 1 : 0.13;

  return (
    <motion.div
      className={cn("relative cursor-pointer overflow-y-hidden", className)}
      onHoverStart={() => !isPlaying && setIsActive(true)}
      onHoverEnd={() => !isPlaying && setIsActive(false)}
      whileTap={{ scale: 0.98 }}
      onClick={() => !isPlaying && setIsActive(!isActive)}
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
