import { FC } from "react";

import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";

const ArrowRight: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="51"
      height="23"
      viewBox="0 0 51 23"
      fill="none"
      className={cn("fill-black", className)}
      {...props}
    >
      <path d="M50.3317 12.3314C50.9175 11.7456 50.9175 10.7959 50.3317 10.2101L40.7858 0.66415C40.2 0.0783638 39.2502 0.0783638 38.6644 0.66415C38.0787 1.24994 38.0787 2.19968 38.6644 2.78547L47.1497 11.2708L38.6644 19.756C38.0787 20.3418 38.0787 21.2916 38.6644 21.8774C39.2502 22.4631 40.2 22.4631 40.7858 21.8774L50.3317 12.3314ZM0.729248 12.7708L49.271 12.7708V9.77075L0.729248 9.77075L0.729248 12.7708Z" />
    </svg>
  );
};

export default ArrowRight;
