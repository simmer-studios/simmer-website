import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const ChevronDown: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="22"
      height="12"
      viewBox="0 0 22 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("inline-block fill-black", className)}
      {...props}
    >
      <path
        d="M3.1877 0.75H18.6715C20.9469 0.75 22.1857 2.72923 20.7315 4.04199L13.2454 10.8077C12.1952 11.757 10.2699 11.7772 9.17926 10.8582L1.18154 4.10258C-0.353374 2.79992 0.871865 0.75 3.1877 0.75Z"
        strokeWidth="0.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ChevronDown;
