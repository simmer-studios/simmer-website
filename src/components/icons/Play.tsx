import { cn } from "@/lib/utils";
import { FC, SVGProps } from "react";

const Play: FC<SVGProps<SVGSVGElement>> = ({ className }) => {
  return (
    <svg
      width="65"
      height="90"
      viewBox="0 0 65 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-16 w-16 fill-black", className)}
    >
      <path d="M63.6969 43.3681C64.8219 44.1652 64.8219 45.8348 63.6969 46.6319L3.15629 89.5289C1.8318 90.4674 3.32293e-06 89.5203 3.39389e-06 87.8971L7.14407e-06 2.10294C7.21503e-06 0.479666 1.83181 -0.467419 3.1563 0.471068L63.6969 43.3681Z" />
    </svg>
  );
};

export default Play;
