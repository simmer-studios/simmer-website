/* HOMEPAGE SERO SECTION */

import { FC, HTMLProps } from "react";

import HeroAside from "@/components/HeroAside";
import { cn } from "@/lib/utils";

import HeroContentLG from "./HeroContentLG";
import HeroContentSM from "./HeroContentSM";

const Hero: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <section className={cn("bg-simmer-white", className)} {...props}>
      <div className="grid divide-black xl:grid-cols-[max(222px)_1fr] xl:divide-x-2">
        <div className="hidden xl:block">
          <HeroAside />
        </div>
        <HeroContentSM className="block min-h-[80dvh] pb-[50vw] lg:hidden" />
        <HeroContentLG className="hidden pb-[21vw] lg:block" />
      </div>
    </section>
  );
};

export default Hero;
