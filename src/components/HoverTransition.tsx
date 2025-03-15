"use client";

import { motion } from "motion/react";
import { FC, HTMLProps, memo, ReactNode, useEffect, useState } from "react";

import { useAnimation } from "@/contexts/AnimationContext";
import { cn } from "@/lib/utils";

interface Props {
  transitionElement: ReactNode;
  delay?: number;
}

const HoverTransition: FC<HTMLProps<HTMLDivElement> & Props> = memo(
  ({ transitionElement, className, children, delay = 0 }) => {
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
        return () => {
          clearTimeout(timer);
        };
      } else {
        setIsActive(false);
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isPlaying]);

    const transitionDuration = isMobile ? 0.2 : 0.13;

    return (
      <motion.div
        className={cn(
          "relative transform-gpu cursor-pointer overflow-y-hidden will-change-transform",
          className
        )}
        onHoverStart={() => !isPlaying && setIsActive(true)}
        onHoverEnd={() => !isPlaying && setIsActive(false)}
        whileTap={{ scale: 0.98 }}
        onClick={() => !isPlaying && setIsActive(!isActive)}
        style={{ backfaceVisibility: "hidden" }}
      >
        <motion.div
          className={cn(
            "relative transform-gpu cursor-pointer overflow-y-visible will-change-transform",
            className
          )}
          onHoverStart={() => !isPlaying && setIsActive(true)}
          onHoverEnd={() => !isPlaying && setIsActive(false)}
          whileTap={{ scale: 0.98 }}
          onClick={() => !isPlaying && setIsActive(!isActive)}
          animate={{
            y: isActive ? "-100%" : "0%"
          }}
          transition={{ type: "spring", duration: transitionDuration }}
        >
          <motion.div
            animate={{
              opacity: isActive ? 0 : 1
            }}
          >
            {children}
          </motion.div>
          <motion.div
            className="absolute flex h-full w-full items-center"
            animate={{
              opacity: isActive ? 1 : 0
            }}
          >
            {transitionElement}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

HoverTransition.displayName = "HoverTransition";

export default HoverTransition;
