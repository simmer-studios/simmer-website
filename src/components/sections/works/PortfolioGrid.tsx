import { FC, HTMLProps } from "react";

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
  return (
    <section className={cn("border-t-2 border-black", className)} {...props}>
      <div className="group/portfolio-grid grid grid-cols-1 gap-0.5 bg-black text-white md:grid-cols-2 lg:grid-cols-3">
        {projects &&
          projects.map((project) => (
            <PortfolioItem
              key={project.id}
              slug={project.slug}
              name={project.name}
              category={project.name}
              image={project.thumbnail as Media}
            />
          ))}
      </div>
    </section>
  );
};

export default PortfolioGrid;
