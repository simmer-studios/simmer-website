"use client";

import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedMainProps {
  children: ReactNode;
}

const AnimatedMain = ({ children }: AnimatedMainProps) => (
  <motion.main
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: "easeOut" }}
  >
    {children}
  </motion.main>
);

export default AnimatedMain;
