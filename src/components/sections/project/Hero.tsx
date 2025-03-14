import Image from "next/image";
import Link from "next/link";
import { FC, HTMLProps, PropsWithChildren } from "react";
import { GoArrowUpRight } from "react-icons/go";

import ArrowDown from "@/components/icons/ArrowDown";
import ProjectPrimaryDetails from "@/components/ProjectPrimaryDetails";
import { cn, isValidImage } from "@/lib/utils";
import { Media, Service } from "@/payload-types";

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

const Hero: FC<HTMLProps<HTMLElement> & Props> = ({
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
      className={cn(
        "flex min-h-dvh flex-col gap-8 md:pb-16 lg:gap-12",
        className
      )}
    >
      <div className="row order-1 flex gap-10 lg:px-14 lg:pt-14">
        <div className="relative aspect-[3/4] basis-full overflow-hidden border-b-2 border-black lg:aspect-auto lg:rounded-[5rem] lg:border-2">
          <Image
            src={
              isValidImage(thumbnail)
                ? thumbnail.url
                : "/images/img_placeholder.jpg"
            }
            alt={(isValidImage(thumbnail) && thumbnail.alt) || ""}
            fill
            className="object-cover"
          />
        </div>
        <div className="hidden basis-full flex-col gap-10 lg:flex">
          <div className="relative aspect-video overflow-hidden border-2 border-black lg:min-h-[150px] lg:rounded-[3rem]">
            <Image
              src={
                isValidImage(cover) ? cover.url : "/images/img_placeholder.jpg"
              }
              alt={(isValidImage(cover) && cover.alt) || ""}
              fill
              className="object-cover"
            />
          </div>
          <div className="flex items-end justify-between rounded-[3rem] bg-black p-8 lg:min-h-max">
            <span className="font-adelle-mono-flex text-6xl uppercase text-simmer-white lg:text-7xl xl:text-[5.4rem] 2xl:text-9xl">
              {featuredServices}
            </span>
            <ArrowDown className="h-16 w-10 flex-shrink-0 fill-simmer-white" />
          </div>
        </div>
      </div>
      <div className="row order-2 flex px-10 lg:order-3 lg:px-20 xl:px-28">
        {/* Project Name */}
        <div className="flex-1">
          <h1 className="text-center font-adelle-mono text-7xl font-bold uppercase leading-none tracking-tighter sm:text-8xl lg:text-left lg:text-9xl xl:text-[10rem] min-[1440px]:text-[13rem]">
            {name}
          </h1>
        </div>
        <div className="hidden min-w-max flex-1 flex-wrap justify-end lg:flex lg:flex-shrink-0">
          <div className="flex items-end gap-4">
            <ArrowDown />
            <p className="translate-y-1.5 text-nowrap font-articulat tracking-tight lg:text-6xl">
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

export default Hero;
