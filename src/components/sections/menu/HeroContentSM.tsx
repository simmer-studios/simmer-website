import { cn } from "@/lib/utils";
import Image from "next/image";
import { FC, HTMLProps } from "react";

import AREYOU from "@/assets/menu/sm_areyou.svg";
import CRAVING from "@/assets/menu/sm_craving.svg";
import FOR from "@/assets/menu/sm_for.svg";
import MENU from "@/assets/menu/sm_menu.svg";
import QUESTIONMARK from "@/assets/menu/sm_question-mark.svg";
import WHAT from "@/assets/menu/sm_what.svg";

const HeroContentSM: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <div className={cn("divide-y-2 divide-simmer-white", className)} {...props}>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <div className="px-8 py-8">
              <Image src={WHAT} alt="What" />
            </div>
            <div className="flex-1"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <div className="flex flex-1 items-center justify-center px-8 py-8">
              <Image src={AREYOU} alt="Are You" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex">
            <div className="flex items-center justify-center px-8 py-8">
              <Image src={CRAVING} alt="Craving" />
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="container">
          <div className="flex divide-x-2 divide-simmer-white">
            <div className="flex w-[15%] items-end justify-center py-8">
              <Image src={MENU} alt="Menu" />
            </div>
            <div className="flex flex-1 items-center px-8 py-8">
              <Image src={FOR} alt="For" />
            </div>
            <div className="flex w-[20%] items-end justify-center py-8">
              <Image src={QUESTIONMARK} alt="?" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroContentSM;
