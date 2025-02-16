import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const Cross: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("stroke-black", className)}
      {...props}
    >
      <path d="M1 16.9548L16.9099 1.04493" strokeWidth="2" />
      <path d="M1.20508 1.04492L17.115 16.9548" strokeWidth="2" />
    </svg>
  );
};

export default Cross;
