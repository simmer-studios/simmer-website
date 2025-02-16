import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

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
