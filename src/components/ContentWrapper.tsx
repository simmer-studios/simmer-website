import { FC, HTMLProps, PropsWithChildren } from "react";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import StickySidebar from "./StickySidebar";

const ContentWrapper: FC<PropsWithChildren<HTMLProps<HTMLDivElement>>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <div className={cn("flex", className)} {...props}>
      {children}
    </div>
  );
};

export default ContentWrapper;
