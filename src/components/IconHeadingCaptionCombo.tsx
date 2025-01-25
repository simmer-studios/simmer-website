import { cn } from "@/lib/utils";
import { FC, HTMLProps, ReactNode } from "react";

interface Props {
  heading?: string;
  caption?: string;
  icon?: ReactNode;
}

const IconHeadingCaptionCombo: FC<HTMLProps<HTMLDivElement> & Props> = ({
  heading,
  caption,
  icon,
  className,
  ...props
}) => {
  return (
    <section className={cn("w-full px-10", className)} {...props}>
      <div className="container flex flex-col gap-4 font-articulat lg:flex-row lg:gap-10">
        <div className="flex-shrink-0">{icon}</div>
        <h2 className="text-pretty text-4xl font-bold tracking-tight lg:basis-full lg:text-6xl">
          {heading}
        </h2>
        <p className="basis-full text-lg">{caption}</p>
      </div>
    </section>
  );
};

export default IconHeadingCaptionCombo;
