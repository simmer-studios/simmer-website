"use client";

import { motion, useInView } from "motion/react";
import { FC, HTMLProps, useRef } from "react";

import PortfolioItem from "@/components/PortfolioItem";
import { cn } from "@/lib/utils";
import { Media, Project } from "@/payload-types";

interface Props {
  projects: Project[];
}

const PortfolioGrid: FC<HTMLProps<HTMLDivElement> & Props> = ({
  projects,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className={cn("border-t-2 border-black", className)} {...props}>
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={isInView ? "show" : "hidden"}
        className="group/portfolio-grid grid grid-cols-1 gap-0.5 bg-black text-white md:grid-cols-2 lg:grid-cols-3"
      >
        {projects &&
          projects.map((project) => (
            <motion.div key={project.id} variants={item}>
              <PortfolioItem
                slug={project.slug}
                name={project.name}
                category={project.project}
                image={project.thumbnail}
              />
            </motion.div>
          ))}
      </motion.div>
    </section>
  );
};

export default PortfolioGrid;
