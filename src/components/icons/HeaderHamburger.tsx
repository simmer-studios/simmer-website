import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const HeaderHamburger: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="56"
      height="24"
      viewBox="0 0 56 24"
      fill="none"
      className={cn("stroke-black", className)}
      {...props}
    >
      <path d="M0 0.727539H56" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M0 12.0037H56" strokeWidth="2" strokeMiterlimit="10" />
      <path d="M0 23.2725H56" strokeWidth="2" strokeMiterlimit="10" />
    </svg>
  );
};

export default HeaderHamburger;
