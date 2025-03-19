import { motion, Variants } from "motion/react";
import { FC, PropsWithChildren } from "react";

const container: Variants = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const MasonryContainer: FC<PropsWithChildren> = ({ children }) => {
  return (
    <motion.div
      variants={container}
      initial="show"
      className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4"
      id="masonry-snaps"
    >
      {children}
    </motion.div>
  );
};

export default MasonryContainer;
