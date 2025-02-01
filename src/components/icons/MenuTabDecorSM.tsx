import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const MenuTabDecorSM: FC<CustomSVG> = ({ className }) => {
  return (
    <svg
      width="120"
      height="29"
      viewBox="0 0 120 29"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-simmer-white stroke-black", className)}
    >
      <path
        d="M1 27.065V9.42612C1 4.77166 4.77166 1 9.42612 1H96.9162C99.8394 1 102.553 2.51485 104.089 5.00181L117.691 27.0615L1 27.065Z"
        strokeWidth="2"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default MenuTabDecorSM;
