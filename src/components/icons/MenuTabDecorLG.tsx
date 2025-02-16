import { FC } from "react";

import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";

const MenuTabDecorLG: FC<CustomSVG> = ({ className }) => {
  return (
    <svg
      width="344"
      height="79"
      viewBox="0 0 344 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("fill-simmer-white stroke-black", className)}
    >
      <path
        d="M2 77.88V26.53C2 12.98 12.98 2 26.53 2H281.23C289.74 2 297.64 6.41 302.11 13.65L341.71 77.87L171.855 77.875L2 77.88Z"
        strokeWidth="2.18"
        strokeMiterlimit="10"
      />
    </svg>
  );
};

export default MenuTabDecorLG;
