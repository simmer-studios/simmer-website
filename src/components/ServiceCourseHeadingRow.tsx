import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

import InformationIcon from "./icons/InformationIcon";

interface ServiceCourseHeadingProps {
  mainText: string;
  subText: string;
}

const ServiceCourseHeading: FC<
  HTMLProps<HTMLDivElement> & ServiceCourseHeadingProps
> = ({ mainText, subText, className, ...props }) => {
  return (
    <div
      className={cn(
        "container flex flex-col justify-between px-5 lg:flex-row lg:px-10",
        className
      )}
      {...props}
    >
      <div className="hidden lg:block">
        <span className="font-adelle-mono font-bold leading-none tracking-tight lg:text-4xl">
          {mainText}
        </span>
      </div>
      <div className="flex flex-col gap-2 md:flex-row md:gap-4 lg:gap-5 lg:text-xl">
        <InformationIcon className="w-8" />
        <p className="max-w-[400px] text-pretty font-articulat text-xl font-bold lg:max-w-[200px]">
          {subText}
        </p>
      </div>
    </div>
  );
};

export default ServiceCourseHeading;
