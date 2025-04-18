"use client";

import { ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useMemo, useState } from "react";

import ContentWrapper from "@/components/ContentWrapper";
import CustomFilterDropdown from "@/components/CustomFilterDropdown";
import ArrowDown from "@/components/icons/ArrowDown";
import PortfolioFeatured from "@/components/PortfolioFeatured";
import Hero from "@/components/sections/works/Hero";
import PortfolioGrid from "@/components/sections/works/PortfolioGrid";
import StickySidebar from "@/components/StickySidebar";
import { Category, Project, WorksGlobal } from "@/payload-types";

interface AnimatedContentProps {
  projects: Project[];
  featuredProjects: Project[];
  categories: WorksGlobal["categories"];
}

export default function AnimatedContent({
  projects,
  featuredProjects,
  categories
}: AnimatedContentProps) {
  const [activeFilter, setActiveFilter] = useState<Category | null>(null);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  const filters = useMemo(
    () => categories.filter((category) => typeof category !== "number"),
    [categories]
  );

  /* filter the projects based on the active filter */
  useEffect(() => {
    if (activeFilter) {
      setFilteredProjects(
        projects.filter((project) =>
          project.categories.some((category) => {
            if (typeof category === "number") {
              return false;
            }

            if (category.name === activeFilter.name) {
              return true;
            }

            return false;
          })
        )
      );
    } else {
      setFilteredProjects(projects);
    }
  }, [activeFilter, projects]);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <Hero className="border-b-2 border-black" />
      <ContentWrapper className="border-b-2 border-black">
        <StickySidebar theme="dark" className="border-0" />
        <div className="basis-full divide-y-2 divide-black bg-black">
          <div className="flex flex-col items-start gap-3 bg-simmer-white px-4 py-4 md:flex-row md:items-center lg:col-span-2 lg:items-center lg:justify-between lg:px-16">
            <div className="inline-flex items-center gap-2 lg:gap-5">
              <ArrowDown className="aspect-[0.4/1] h-10 w-5 flex-shrink-0 lg:h-20 lg:w-8" />
              <span className="translate-y-1.5 text-5xl uppercase lg:text-8xl">
                FEATURED
              </span>
            </div>
            <CustomFilterDropdown
              trigger={(activeFilter) => (
                <button className="flex items-center gap-3 rounded-xl bg-black px-3 py-1.5 text-simmer-white">
                  <span className="inline-block font-adelle-mono uppercase">
                    {activeFilter ? activeFilter.name : "FILTERS"}
                  </span>
                  <ChevronDown className="aspect-square w-4 fill-simmer-white" />
                </button>
              )}
              data={filters}
              onFilterChange={setActiveFilter}
            />
          </div>
          {!activeFilter && featuredProjects.length >= 2 && (
            <PortfolioFeatured
              featuredProject1={featuredProjects[0]}
              featuredProject2={featuredProjects[1]}
            />
          )}
          {filteredProjects.length > 0 && (
            <PortfolioGrid projects={filteredProjects} />
          )}
        </div>
      </ContentWrapper>
    </motion.main>
  );
}
