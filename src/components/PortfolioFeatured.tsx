import Image from "next/image";
import Link from "next/link";
import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import ArrowDown from "./icons/ArrowDown";
import ArrowRight from "./icons/ArrowRight";
import Play from "./icons/Play";

const PortfolioFeatured = () => {
  return (
    <div className="grid grid-cols-1 gap-0.5 bg-black lg:grid-cols-2">
      <Heading className="col-span-full bg-simmer-white">
        FEATURED <Play className="w-10 -translate-y-2 lg:translate-y-3" />
      </Heading>
      <FeaturedProjectBlock>
        <FeaturedImage />
        <CaptionBlock
          heading="24 Chicken"
          caption="24 Chicken is one of Philippine's Chicken Joint. Rebranded by Simmer."
          year="2022"
        />
        <Heading className="hidden lg:flex">FAVORITES</Heading>
      </FeaturedProjectBlock>
      <FeaturedProjectBlock className="lg:flex-col-reverse lg:divide-y-reverse">
        <FeaturedImage />
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
      <ArrowDown className="h-12 lg:h-20" />
      <div className="flex flex-grow translate-y-1.5 justify-between text-6xl uppercase lg:text-8xl">
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

const FeaturedImage = () => {
  return (
    <Link
      href={"/"}
      className="relative block aspect-square flex-1 bg-gray-100 transition duration-300 ease-in-out hover:brightness-90"
    >
      <Image
        className="object-cover"
        src={"/images/img_placeholder.jpg"}
        alt=""
        fill
      />
    </Link>
  );
};

export default PortfolioFeatured;
