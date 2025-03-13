"use client";

import { motion } from "motion/react";

import ContentWrapper from "@/components/ContentWrapper";
import PortfolioFeatured from "@/components/PortfolioFeatured";
import Hero from "@/components/sections/works/Hero";
import PortfolioGrid from "@/components/sections/works/PortfolioGrid";
import StickySidebar from "@/components/StickySidebar";
import { Project } from "@/payload-types";

interface AnimatedContentProps {
  projects: Project[];
  featuredProjects: Project[];
}

export default function AnimatedContent({
  projects,
  featuredProjects
}: AnimatedContentProps) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero className="border-b-2 border-black" />
      <ContentWrapper className="border-b-2 border-black">
        <StickySidebar theme="dark" className="border-0" />
        <div className="basis-full">
          {featuredProjects.length >= 2 && (
            <section>
              <PortfolioFeatured
                featuredProject1={featuredProjects[0]}
                featuredProject2={featuredProjects[1]}
              />
            </section>
          )}
          <PortfolioGrid projects={projects} />
        </div>
      </ContentWrapper>
    </motion.main>
  );
}
