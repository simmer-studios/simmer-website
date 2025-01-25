import HeroAside from "@/components/HeroAside";
import { cn } from "@/lib/utils";
import { FC, HTMLProps } from "react";

import HeroContentLG from "./HeroContentLG";
import HeroContentSM from "./HeroContentSM";

const Hero: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <section className={cn("bg-simmer-white", className)}>
      <div className="grid divide-black xl:grid-cols-[max(222px)_1fr] xl:divide-x-2">
        <div className="hidden xl:block">
          <HeroAside variant="portfolio" />
        </div>
        <HeroContentLG className="hidden lg:block" />
        <HeroContentSM className="block lg:hidden" />
      </div>
    </section>
  );
};

export default Hero;
