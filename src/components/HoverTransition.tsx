"use client";

import { HTMLMotionProps, motion } from "motion/react";
import { FC, PropsWithChildren, ReactNode, useEffect, useState } from "react";

interface Props {
  transitionElement: ReactNode;
}

const HoverTransition: FC<PropsWithChildren<Props>> = ({
  transitionElement,
  children
}) => {
  const [hovered, setHovered] = useState<boolean>(false);

  return (
    <motion.div
      className="relative overflow-hidden"
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <motion.div
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ type: "tween" }}
      >
        {children}
      </motion.div>
      <motion.div
        className="absolute h-full w-full"
        animate={{ y: hovered ? "-100%" : "0%" }}
        transition={{ type: "tween" }}
      >
        {transitionElement}
      </motion.div>
    </motion.div>
  );
};

export default HoverTransition;
