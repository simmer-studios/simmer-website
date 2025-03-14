import { FC, HTMLProps } from "react";

import HeroAside from "@/components/HeroAside";
import { Filter } from "@/lib/types";
import { cn } from "@/lib/utils";
import { SnapsGlobal } from "@/payload-types";

import HeroContentLG from "./HeroContentLG";
import HeroContentSM from "./HeroContentSM";

interface Props {
  pageData: SnapsGlobal;
}

const Hero: FC<HTMLProps<HTMLDivElement> & Props> = ({
  pageData,
  className
}) => {
  return (
    <section className={cn("bg-simmer-white", className)}>
      <div className="grid divide-black xl:grid-cols-[max(222px)_1fr] xl:divide-x-2">
        <div className="hidden xl:block">
          <HeroAside variant="portfolio" />
        </div>
        <HeroContentLG
          className="hidden lg:block"
          productCategories={pageData.productCategories}
          portraitCategories={pageData.portraitCategories}
        />
        <HeroContentSM className="block lg:hidden" />
      </div>
    </section>
  );
};

export default Hero;
