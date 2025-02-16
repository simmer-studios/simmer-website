import Image from "next/image";
import { FC, HTMLProps } from "react";

import HeroAside from "@/components/HeroAside";
import { cn } from "@/lib/utils";

import HeroContentLG from "./HeroContentLG";
import HeroContentSM from "./HeroContentSM";

const Hero: FC<HTMLProps<HTMLDivElement>> = ({ className, ...props }) => {
  return (
    <section className={cn("bg-black", className)} {...props}>
      <div className="grid divide-simmer-white xl:grid-cols-[max(222px)_1fr] xl:divide-x-2">
        <div className="hidden xl:block">
          <HeroAside variant="menu" />
        </div>
        <HeroContentSM className="block md:hidden" />
        <HeroContentLG className="hidden md:block" />
      </div>
    </section>
  );
};

export default Hero;
