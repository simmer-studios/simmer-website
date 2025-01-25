import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const ArrowDown: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="24"
      height="51"
      viewBox="0 0 24 51"
      className={cn("fill-black", className)}
      {...props}
    >
      <path d="M10.9393 49.6025C11.5251 50.1882 12.4749 50.1882 13.0607 49.6025L22.6066 40.0565C23.1924 39.4707 23.1924 38.521 22.6066 37.9352C22.0208 37.3494 21.0711 37.3494 20.4853 37.9352L12 46.4205L3.51472 37.9352C2.92893 37.3494 1.97919 37.3494 1.3934 37.9352C0.807614 38.521 0.807614 39.4707 1.3934 40.0565L10.9393 49.6025ZM10.5 6.55671e-08L10.5 48.5418L13.5 48.5418L13.5 -6.55671e-08L10.5 6.55671e-08Z" />
    </svg>
  );
};

export default ArrowDown;
