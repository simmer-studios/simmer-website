import { cn } from "@/lib/utils";
import { FC, HTMLProps, PropsWithChildren } from "react";

const ServiceCourseList: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-black", className)} {...props}>
      {children}
    </div>
  );
};

export default ServiceCourseList;
