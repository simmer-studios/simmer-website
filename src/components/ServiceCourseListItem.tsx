import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import Asterisk from "./icons/Asterisk";

interface RowProps {
  text: string;
  number: string;
  variant?: "bold" | "thin-italic";
  className?: HTMLProps<HTMLDivElement>["className"];
}

interface ServiceTextProps {
  variant: RowProps["variant"];
}

const ServiceCourseListItem: FC<RowProps> = ({
  text,
  number,
  variant = "bold",
  className
}) => {
  return (
    <div className={cn("", className)}>
      <div className="container mx-auto flex gap-5 px-5 pb-10 pt-12 lg:gap-8 lg:px-10 lg:pt-12">
        {/* numbering */}
        <div className="order-1">
          <span className="font-adelle-mono-flex min-[500px]:text-lg sm:text-xl md:text-3xl xl:text-4xl">
            {number}
          </span>
        </div>
        {/* text */}
        <div className="order-2 flex-1">
          <ServiceText variant={variant}>{text}</ServiceText>
        </div>
        <div className="order-3 hidden items-end lg:flex">
          <Asterisk className="w-6" />
        </div>
      </div>
    </div>
  );
};

const ServiceText: FC<PropsWithChildren<ServiceTextProps>> = ({
  variant,
  children
}) => {
  return (
    <p
      className={cn(
        "max-w-[15ch] font-articulat text-[2rem] font-bold leading-none min-[500px]:text-[3.8rem] sm:text-[4rem] md:text-[4.5rem] lg:text-[5rem] xl:text-[6rem]",
        {
          "font-medium italic": variant === "thin-italic"
        }
      )}
    >
      {children}
    </p>
  );
};

export default ServiceCourseListItem;
