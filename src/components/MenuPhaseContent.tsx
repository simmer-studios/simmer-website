import { FC, HTMLProps } from "react";
import Check from "./icons/Check";
import Asterisk from "./icons/Asterisk";
import MenuService from "./MenuService";

interface MenuPhaseContentProps {
  phaseNumber: number;
  phaseTitle: string;
}

const MenuPhaseContent: FC<
  HTMLProps<HTMLDivElement> & MenuPhaseContentProps
> = ({ phaseNumber, phaseTitle }) => {
  return (
    <>
      <div className="grid border-b-2 border-black md:grid-cols-[1fr_1.2fr] md:divide-x-2 md:divide-black">
        {/* left */}
        <div className="grid grid-cols-2 gap-8 border-b-2 border-black p-4 md:grid-cols-1 md:border-b-0 md:p-0">
          <div className="flex flex-col space-y-2 md:space-y-0">
            <h2 className="order-1 max-w-[8ch] text-4xl capitalize tracking-tight md:order-2 md:p-10 md:text-6xl lg:text-7xl xl:text-8xl">
              {phaseTitle}
            </h2>
            <div className="order-2 flex items-center gap-2 font-adelle-mono text-[9px] md:order-1 md:gap-4 md:border-b-2 md:border-black md:px-10 md:py-5 md:text-sm lg:text-lg">
              <span className="rounded bg-black px-3 py-0.5 text-simmer-white lg:rounded-lg">
                LEGEND
              </span>
              <div className="inline-flex items-center gap-1 tracking-tighter">
                <Asterisk className="h-2 w-2 rotate-90 md:w-3" />
                CHEF'S CHOICE
              </div>
            </div>
          </div>
          <div className="max-h-max space-y-1 md:space-y-4 md:p-[40px_40px_0_40px]">
            <p className="text-md font-adelle-mono font-bold tracking-tighter sm:text-lg md:text-2xl lg:text-3xl">
              PHASE I
            </p>
            <p className="font-articulat text-[10px] font-semibold sm:text-sm md:text-lg md:font-medium lg:text-xl">
              From start-ups, local, international, personal brands,
              communities, corporations, businesses and government agencies— our
              services has no creative limits.
            </p>
          </div>
        </div>
        {/* right */}
        <div className="min-h-[500px] divide-y-2 divide-black">
          {/* Heading Row */}
          <div className="row grid grid-cols-[70px_1fr] divide-x-2 divide-black lg:grid-cols-[100px_1fr]">
            <div className="flex translate-y-1 items-center justify-center p-5 font-fionas text-5xl font-semibold leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              {phaseNumber}
            </div>
            <div className="flex items-center p-5 text-2xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-5xl">
              Tick your orders.
            </div>
          </div>
          {/* Field Row - Regular */}
          <MenuService defaultChecked={true} serviceName="PRODUCTION" />
          <MenuService
            serviceName="PHOTOGRAPHY"
            link={{ label: "GO TO SIMMER SNAP", url: "#" }}
          />
          <MenuService
            serviceName="VIDEOGRAPHY"
            link={{ label: "GO TO SIMMER SNAP", url: "#" }}
            description="From start-ups, local, international, personal brands,
										communities, corporations, businesses and government
										agencies."
          />
          <MenuService serviceName="SERVICE NAME" />
          <MenuService serviceName="SERVICE NAME" defaultChecked={true} />
          <MenuService serviceName="SERVICE NAME" defaultChecked={true} />
          <MenuService serviceName="SERVICE NAME" />
        </div>
      </div>
      <div className="row grid w-full grid-cols-[70px_1fr] divide-x-2 divide-black border-b-2 border-black lg:grid-cols-[100px_1fr]">
        <button
          className="flex items-center justify-center bg-simmer-white hover:brightness-95"
          type="button"
        >
          <Check className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
        </button>
        <div className="flex items-center p-5 font-articulat text-2xl font-bold tracking-tighter sm:text-4xl md:font-adelle-mono md:text-3xl md:uppercase lg:p-8 lg:text-5xl xl:p-10">
          Chef's choice
        </div>
      </div>{" "}
    </>
  );
};

export default MenuPhaseContent;
