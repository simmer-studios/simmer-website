import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const RemoveOrderIcon: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="39"
      height="39"
      viewBox="0 0 39 39"
      className={cn("h-6 w-6 fill-simmer-yellow", className)}
      {...props}
    >
      <path d="M39 19.5C39 30.2696 30.2696 39 19.5 39C8.73045 39 0 30.2696 0 19.5C0 8.73045 8.73045 0 19.5 0C30.2696 0 39 8.73045 39 19.5Z" />
      <path
        d="M9.66296 31L17.4196 18.8678L10.0607 7.00079H13.4418L19.2428 16.6469L25.3089 7.00079H28.5905L20.9002 19.0004L28.7894 31H25.342L19.077 21.3208L12.9778 31H9.66296Z"
        fill="black"
      />
    </svg>
  );
};

export default RemoveOrderIcon;
