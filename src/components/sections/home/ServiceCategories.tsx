import { HTMLMotionProps, motion } from "motion/react";
import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import { TabKey } from "./Services";

interface ServiceCategoriesProps {
  firstLabel: string;
  secondLabel: string;
  thirdLabel: string;
  activeTab: TabKey;
  onLabelClick: (tab: TabKey) => void;
}

const ServiceCategories: FC<
  Omit<HTMLMotionProps<"section">, keyof ServiceCategoriesProps> &
    ServiceCategoriesProps
> = ({
  firstLabel,
  secondLabel,
  thirdLabel,
  activeTab,
  onLabelClick,
  ...props
}) => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-10 lg:py-16"
      {...props}
    >
      {/* decoration + link row */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className={cn(
          "container mx-auto hidden pl-28 pr-20 lg:flex lg:items-center lg:justify-between xl:max-w-[1700px]"
        )}
      >
        <span className="inline-block h-[50px] content-center rounded-full bg-simmer-white px-10 font-adelle-mono text-[1.12rem] text-black">
          CLICK TO KNOW
        </span>
      </motion.div>
      {/* pillars row */}
      <CategoryList>
        <Row
          text={firstLabel}
          number="01"
          onClick={() => onLabelClick("appetizers")}
          active={activeTab === "appetizers"}
        />
        <Row
          text={secondLabel}
          number="02"
          variant="thin-italic"
          onClick={() => onLabelClick("mainCourse")}
          active={activeTab === "mainCourse"}
        />
        <Row
          text={thirdLabel}
          number="03"
          onClick={() => onLabelClick("desserts")}
          active={activeTab === "desserts"}
        />
      </CategoryList>
    </motion.section>
  );
};

const CategoryList: FC<PropsWithChildren> = ({ children }) => {
  return <div className="divide-y-2 divide-simmer-white">{children}</div>;
};

interface RowProps {
  active: boolean;
  text: string;
  number: string;
  variant?: "bold" | "thin-italic";
  className?: HTMLProps<HTMLDivElement>["className"];
  onClick: () => void;
}

const Row: FC<RowProps> = ({
  active,
  text,
  number,
  variant = "bold",
  className,
  onClick
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={cn("block w-full", className)}
    >
      <motion.button
        // whileHover={{ scale: 1.02 }}
        // whileTap={{ scale: 0.98 }}
        className="container relative mx-auto flex gap-5 px-10 pb-10 pt-12 text-simmer-white sm:justify-between lg:px-20 lg:pt-12"
        onClick={onClick}
      >
        {active && (
          <motion.span
            layoutId="activeIndicator"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.8 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="absolute right-2 top-0 inline-block aspect-square h-[20px] translate-y-4 rounded-full bg-simmer-yellow sm:left-2 md:left-5 md:h-[25px] lg:top-4"
          />
        )}
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
      </motion.button>
    </motion.div>
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
        "font-articulat text-[3rem] font-bold leading-none min-[500px]:text-[3.3rem] sm:text-[5rem] md:text-[5.8rem] lg:text-[6.5rem] xl:text-[8rem] 2xl:text-[9.5rem]",
        {
          "font-medium italic": variant === "thin-italic"
        }
      )}
    >
      {children}
    </p>
  );
};

export default ServiceCategories;
