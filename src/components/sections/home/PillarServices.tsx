import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

const PillarServices = () => {
  return (
    <section className="py-10 lg:py-16">
      {/* descoration + link row */}
      <div
        className={cn(
          "container mx-auto hidden pl-28 pr-20 lg:flex lg:items-center lg:justify-between xl:max-w-[1700px]"
        )}
      >
        <span className="inline-block aspect-square h-[48px] rounded-full bg-simmer-yellow"></span>
        <button className="h-[50px] rounded-full bg-simmer-white px-10 font-adelle-mono text-[1.12rem] text-black">
          CLICK TO KNOW
        </button>
      </div>
      {/* pillars row */}
      <ServiceList>
        <Row text="BRANDING" number="01" />
        <Row text="IDENTITY" number="02" variant="thin-italic" />
        <Row text="EXECUTIONS" number="03" />
      </ServiceList>
    </section>
  );
};

const ServiceList: FC<PropsWithChildren> = ({ children }) => {
  return <div className="divide-y-2 divide-simmer-white">{children}</div>;
};

interface RowProps {
  text: string;
  number: string;
  variant?: "bold" | "thin-italic";
  className?: HTMLProps<HTMLDivElement>["className"];
}

const Row: FC<RowProps> = ({ text, number, variant = "bold", className }) => {
  return (
    <div className={cn("", className)}>
      <div className="container mx-auto flex gap-5 px-8 pb-10 pt-12 text-simmer-white sm:justify-between lg:px-20 lg:pt-12">
        {/* numbering */}
        <div className="order-1 sm:order-2">
          <span className="font-adelle-mono-flex min-[500px]:text-lg sm:text-xl md:text-3xl xl:text-4xl">
            {number}
          </span>
        </div>
        {/* text */}
        <div className="order-2 sm:order-1">
          <ServiceText variant={variant}>{text}</ServiceText>
        </div>
      </div>
    </div>
  );
};

interface ServiceTextProps {
  variant: RowProps["variant"];
}

const ServiceText: FC<PropsWithChildren<ServiceTextProps>> = ({
  variant,
  children
}) => {
  return (
    <p
      className={cn(
        "font-articulat text-[3rem] font-bold leading-none min-[500px]:text-[3.8rem] sm:text-[5rem] md:text-[5.8rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9.5rem]",
        {
          "font-medium italic": variant === "thin-italic"
        }
      )}
    >
      {children}
    </p>
  );
};

export default PillarServices;
