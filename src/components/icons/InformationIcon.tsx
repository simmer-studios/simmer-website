import { CustomSVG } from "@/lib/types";
import { cn } from "@/lib/utils";
import { FC } from "react";

const InformationIcon: FC<CustomSVG> = ({ className, ...props }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-10 w-10 fill-black", className)}
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0C15.5228 0 20 4.47715 20 10ZM9.77946 3.67798C9.23051 3.67798 8.74561 4.13086 8.74561 4.69811C8.74561 5.26993 9.23051 5.71823 9.77946 5.71823C10.3284 5.71823 10.8133 5.26993 10.8133 4.69811C10.8133 4.12629 10.3284 3.67798 9.77946 3.67798ZM10.6623 7.27359H8.91944V16.2443H10.6623V7.27359Z"
      />
    </svg>
  );
};

export default InformationIcon;
