import Link from "next/link";
import { FC, HTMLProps } from "react";
import { GoArrowUpRight } from "react-icons/go";

import ArrowDown from "@/components/icons/ArrowDown";
import ProjectPrimaryDetails from "@/components/ProjectPrimaryDetails";
import { cn } from "@/lib/utils";
import { Media, Service } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  thumbnail: number | Media;
  cover: number | Media;
  name: string;
  featuredServices: string;
  description: string;
  websiteUrl?: string | null;
  date: string;
  brand: string;
  project: string;
  services: (number | Service)[];
}

const DetailedPageHero: FC<HTMLProps<HTMLElement> & Props> = ({
  thumbnail,
  brand,
  cover,
  date,
  description,
  featuredServices,
  name,
  project,
  services,
  websiteUrl,
  className
}) => {
  return (
    <section
      className={cn("flex flex-col gap-8 md:pb-16 lg:gap-12", className)}
    >
      <div className="row order-1 flex min-h-[400px] gap-10 lg:px-14 lg:pt-14">
        <div className="relative basis-full overflow-hidden border-b-2 border-black lg:aspect-square lg:w-1/2 lg:rounded-[5rem] lg:border-2">
          <CMSMedia
            media={thumbnail}
            className="absolute h-full w-full object-cover"
            controls={false}
          />
        </div>
        <div className="hidden shrink-0 flex-col gap-10 lg:flex lg:w-1/2">
          <div className="relative flex-grow basis-[70%] overflow-hidden border-2 border-black lg:rounded-[3rem]">
            <CMSMedia
              media={cover}
              className="absolute h-full w-full object-cover"
              controls={false}
            />
          </div>
          <div className="flex shrink-0 flex-grow basis-[30%] items-center justify-between rounded-[3rem] bg-black p-8 lg:min-h-max lg:gap-8">
            <span className="inline-block max-w-[10ch] text-wrap font-adelle-mono-flex uppercase text-simmer-white lg:text-5xl xl:text-6xl 2xl:text-7xl min-[1600px]:text-8xl">
              {featuredServices}
            </span>
            <ArrowDown className="h-16 w-10 flex-shrink-0 self-end fill-simmer-white" />
          </div>
        </div>
      </div>
      <div className="row order-2 flex gap-10 px-10 lg:order-3 lg:px-20 xl:px-28">
        {/* Project Name */}
        <div className="flex flex-1 justify-center lg:justify-start">
          <h1 className="max-w-min break-words text-center font-adelle-mono text-7xl font-bold uppercase leading-none tracking-tighter sm:text-8xl lg:text-left lg:text-8xl xl:text-[6.5rem] min-[1440px]:text-[7rem] min-[1600px]:text-[9rem]">
            {name}
          </h1>
        </div>
        <div className="hidden min-w-max flex-1 flex-wrap justify-end lg:flex lg:flex-shrink-0">
          <div className="flex -translate-y-5 items-end gap-4">
            <ArrowDown />
            <p className="translate-y-3 text-nowrap font-articulat tracking-tight lg:text-6xl">
              PEEK HERE
            </p>
          </div>
        </div>
      </div>
      <div className="row order-3 px-14 lg:order-2 lg:px-28">
        {/* Project Details & Description + Link */}
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-24">
          <div className="basis-full justify-center">
            <ProjectPrimaryDetails
              date={date}
              brand={brand}
              project={project}
              services={services}
            />
          </div>
          <div className="basis-full">
            <div className="space-y-3 text-center lg:max-w-prose lg:text-left">
              <p className="xl:text-xl">{description}</p>
              {websiteUrl && (
                <div className="text font-articulat font-bold">
                  <span className="mr-3 hidden sm:inline">WEBSITE</span>
                  <Link
                    href={websiteUrl}
                    target="_blank"
                    className="inline-flex items-center gap-2 border-b-2 border-black font-medium"
                  >
                    {websiteUrl} <GoArrowUpRight size={18} className="mb-1" />
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedPageHero;
