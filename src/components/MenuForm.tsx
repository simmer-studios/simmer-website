"use client";

import { cn } from "@/lib/utils";
import { ComponentProps, FC, HTMLProps } from "react";
import MenuPhaseContent from "./MenuPhaseContent";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import MenuTabDecorSM from "./icons/MenuTabDecorSM";
import MenuTabDecorLG from "./icons/MenuTabDecorLG";

const MenuForm: FC<HTMLProps<HTMLFormElement>> = () => {
  return (
    <form action="">
      <Tabs
        defaultValue="STRATEGY"
        className="relative flex flex-col divide-y-2 divide-black border-t-2 border-black"
      >
        <TabsList className="grid h-full grid-cols-3 divide-x-2 divide-black p-0">
          <MenuFormTab value="STRATEGY" alias="APPETIZERS">
            STRATEGY
          </MenuFormTab>
          <MenuFormTab value="IDENTITY" alias="MAIN COURSE">
            *IDENTITY
          </MenuFormTab>
          <MenuFormTab value="EXECUTIONS" alias="DESSERTS">
            EXECUTIONS
          </MenuFormTab>
        </TabsList>
        <MenuTabContent value="STRATEGY">
          <MenuPhaseContent phaseNumber={1} phaseTitle="Brand Strategy" />
        </MenuTabContent>
        <MenuTabContent value="IDENTITY">
          <MenuPhaseContent phaseNumber={2} phaseTitle="Identity" />
        </MenuTabContent>
        <MenuTabContent value="EXECUTIONS">
          <MenuPhaseContent phaseNumber={3} phaseTitle="Executions" />
        </MenuTabContent>
      </Tabs>
      <div className="flex items-center justify-center p-10 lg:py-16">
        <button
          className="rounded-full border-2 border-black px-10 py-2 font-adelle-mono hover:bg-simmer-yellow sm:px-10 sm:py-4 sm:text-2xl md:px-14 md:py-8 lg:px-20 lg:py-12 lg:text-4xl"
          type="submit"
        >
          LET'S WRAP IT UP
        </button>
      </div>
    </form>
  );
};

interface MenuFormTabProps {
  alias: string;
}

const MenuFormTab: FC<
  ComponentProps<typeof TabsTrigger> & MenuFormTabProps
> = ({ alias, className, children, ...props }) => {
  return (
    <TabsTrigger
      className={cn(
        "group relative flex min-h-[100px] flex-1 items-start justify-start bg-simmer-white p-3 text-xl font-medium uppercase tracking-tighter duration-0 data-[state=active]:bg-simmer-yellow sm:min-h-[120px] sm:text-3xl md:min-h-[150px] md:p-4 md:text-4xl lg:min-h-[200px] lg:p-6 lg:text-5xl lg:font-normal xl:min-h-[250px] xl:p-7 xl:text-6xl",
        className
      )}
      {...props}
    >
      {children}
      <div className="aspect-[4:1] absolute bottom-0 left-0 flex w-[80%] -translate-x-0.5 translate-y-[3.2px] items-center overflow-hidden text-xs normal-case tracking-normal md:translate-y-0.5 lg:translate-x-4 xl:w-[60%] 2xl:w-[50%]">
        <MenuTabDecorSM className="block h-full w-full fill-black group-data-[state=active]:fill-transparent md:hidden" />
        <MenuTabDecorLG className="hidden h-full w-full fill-black group-data-[state=active]:fill-transparent md:block" />
        <span className="absolute px-3 font-adelle-mono uppercase text-simmer-white group-data-[state=active]:text-black sm:px-4 sm:text-lg md:px-5 md:text-xl lg:px-6 lg:text-2xl xl:px-8">
          {alias}
        </span>
      </div>
      <span className="invisible absolute bottom-2 right-2 aspect-square h-4 rounded-full bg-black group-data-[state=active]:visible sm:h-5 lg:h-6 xl:h-7"></span>
    </TabsTrigger>
  );
};

const MenuTabContent: FC<ComponentProps<typeof TabsContent>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <TabsContent
      className={cn("mt-0 min-h-[500px] bg-simmer-white", className)}
      {...props}
    >
      {children}
    </TabsContent>
  );
};

export default MenuForm;
