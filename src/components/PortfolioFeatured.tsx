"use client";

import Image from "next/image";
import Link from "next/link";
import { FC, HTMLProps, PropsWithChildren } from "react";

import { useMagneticHover } from "@/hooks/useMagneticHover";
import { cn } from "@/lib/utils";

import CustomFilterDropdown from "./CustomFilterDropdown";
import ArrowDown from "./icons/ArrowDown";
import ArrowRight from "./icons/ArrowRight";
import ChevronDown from "./icons/ChevronDown";

interface FeaturedImageProps {
  heading: string;
  url: string;
}

const FeaturedImage: FC<FeaturedImageProps> = ({ heading, url }) => {
  const magneticRef = useMagneticHover(100);

  return (
    <Link
      href={"/"}
      className="group relative block aspect-square flex-1 overflow-hidden bg-gray-100 transition duration-300 ease-in-out"
    >
      <Image
        className="object-cover transition-all duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-90"
        src={url}
        alt={heading}
        fill
      />
      <div
        ref={magneticRef}
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 border-[3px] border-black bg-simmer-white px-14 py-6 text-center transition-all duration-300 ease-out will-change-transform"
      >
        <span className="pointer-events-none block w-min font-adelle-mono text-2xl font-bold uppercase tracking-tight">
          {heading}
        </span>
      </div>
    </Link>
  );
};

const PortfolioFeatured = () => {
  return (
    <div className="grid grid-cols-1 gap-0.5 bg-black lg:grid-cols-2">
      <div className="col-span-1 flex flex-col items-start gap-3 bg-simmer-white px-4 py-4 md:flex-row md:items-center lg:col-span-2 lg:items-center lg:justify-between lg:px-16">
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
                {activeFilter ? activeFilter.filterLabel : "FILTERS"}
              </span>
              <ChevronDown className="aspect-square w-4 fill-simmer-white" />
            </button>
          )}
          filters={[
            { filterLabel: "Featured", filterId: "featured" },
            { filterLabel: "Food & Beverage", filterId: "food_beverages" },
            { filterLabel: "Beauty & Lifestyle", filterId: "beauty_lifestyle" },
            { filterLabel: "Arts", filterId: "arts" },
            {
              filterLabel: "Social Media Focused",
              filterId: "social_media_focused"
            },
            { filterLabel: "Technology", filterId: "technology" }
          ]}
        />
      </div>
      <FeaturedProjectBlock>
        <FeaturedImage
          heading="Rebranding"
          url="/images/works/24-chicken.png"
        />
        <CaptionBlock
          heading="24 Chicken"
          caption="24 Chicken is one of Philippine's Chicken Joint. Rebranded by Simmer."
          year="2022"
        />
        <Heading className="hidden lg:flex">FAVORITES</Heading>
      </FeaturedProjectBlock>
      <FeaturedProjectBlock className="lg:flex-col-reverse lg:divide-y-reverse">
        <FeaturedImage
          heading="Johnnie Walker"
          url="/images/works/johnnie-walker.png"
        />
        <CaptionBlock
          heading="Johnnie Walker"
          caption="Appetizers - what you need before you start anything."
          year="2022"
        />
        <Heading className="lg:hidden">FAVORITES</Heading>
      </FeaturedProjectBlock>
    </div>
  );
};

const Heading: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        "flex items-center gap-3 bg-simmer-white px-4 py-4 lg:px-16",
        className
      )}
      {...props}
    >
      <ArrowDown className="aspect-[0.4/1] h-10 w-5 flex-shrink-0 lg:h-20 lg:w-8" />
      <div className="flex flex-grow translate-y-1.5 justify-between text-5xl uppercase lg:text-8xl">
        {children}
      </div>
    </div>
  );
};

const FeaturedProjectBlock: FC<
  PropsWithChildren<HTMLProps<HTMLDivElement>>
> = ({ children, className }) => {
  return (
    <div
      className={cn(
        "flex flex-col divide-y-2 divide-black bg-simmer-white",
        className
      )}
    >
      {children}
    </div>
  );
};

interface CaptionBlockProps {
  heading?: string;
  caption?: string;
  year?: string;
}

const CaptionBlock: FC<CaptionBlockProps> = ({ heading, caption, year }) => {
  return (
    <Link
      href={"#"}
      className="min-h-[150px] space-y-4 p-6 font-articulat lg:p-10"
    >
      {heading && (
        <h3 className="text-4xl font-medium tracking-tighter lg:text-6xl">
          {heading}
        </h3>
      )}
      {caption && (
        <p className="text-pretty text-lg font-medium leading-tight lg:max-w-[80%] lg:text-3xl lg:font-semibold">
          {caption}
        </p>
      )}
      <div className="flex items-center justify-between lg:hidden">
        {year && (
          <div className="inline-block border-[2.5px] border-black px-2">
            <span className="inline-block translate-y-[1px] font-adelle-mono">
              {year}
            </span>
          </div>
        )}
        <ArrowRight className="h-5" />
      </div>
    </Link>
  );
};

export default PortfolioFeatured;
