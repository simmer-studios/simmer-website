"use client";

import { ComponentProps, FC, HTMLProps } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/Tabs";
import { cn } from "@/lib/utils";
import Asterisk from "./icons/Asterisk";

const MenuForm: FC<HTMLProps<HTMLFormElement>> = () => {
  return (
    <form action="">
      <Tabs
        defaultValue="STRATEGY"
        className="relative flex flex-col divide-y-2 divide-black border-t-2 border-black"
      >
        <TabsList className="grid h-full grid-cols-3 divide-x-2 divide-black p-0">
          {/* <SimmerTabs value="account">(APPETIZERS)</SimmerTabs> */}
          {/* <SimmerTabs value="main-course">MAIN COURSE</SimmerTabs> */}
          {/* <SimmerTabs value="desserts">DESERTS</SimmerTabs> */}

          <MenuFormTab value="STRATEGY">STRATEGY</MenuFormTab>
          <MenuFormTab value="IDENTITY">IDENTITY</MenuFormTab>
          <MenuFormTab value="EXECUTIONS">EXECUTIONS</MenuFormTab>
        </TabsList>
        <MenuTabContent value="STRATEGY">
          <div className="grid md:grid-cols-[1fr_1.2fr] md:divide-x-2 md:divide-black">
            {/* left */}
            <div className="grid grid-cols-2 gap-8 p-4 md:grid-cols-1 md:p-0">
              <div className="flex flex-col space-y-2 md:space-y-0">
                <h2 className="order-1 max-w-[8ch] text-5xl tracking-tight md:order-2 md:p-10 md:text-6xl lg:text-7xl">
                  Brand Strategy
                </h2>
                <div className="order-2 flex items-center gap-2 font-adelle-mono text-[9px] md:order-1 md:gap-4 md:border-b-2 md:border-black md:px-10 md:py-3 md:text-sm lg:text-lg">
                  <span className="rounded bg-black px-3 py-0.5 text-simmer-white lg:rounded-lg">
                    LEGEND
                  </span>
                  <div className="inline-flex items-center gap-1 tracking-tighter">
                    <Asterisk className="h-2 w-2 rotate-90 md:w-3" />
                    CHEF'S CHOICE
                  </div>
                </div>
              </div>
              <div className="space-y-1 md:p-10">
                <p className="text-md font-adelle-mono font-bold tracking-tighter sm:text-lg">
                  PHASE I
                </p>
                <p className="font-articulat text-[10px] font-semibold sm:text-sm md:font-medium">
                  From start-ups, local, international, personal brands,
                  communities, corporations, businesses and government agencies—
                  our services has no creative limits.
                </p>
              </div>
            </div>
            {/* right */}
            <div className="debug-outline min-h-[500px]"></div>
          </div>
        </MenuTabContent>
        <MenuTabContent value="IDENTITY"></MenuTabContent>
        <MenuTabContent value="EXECUTIONS"></MenuTabContent>
      </Tabs>
    </form>
  );
};

const MenuFormTab: FC<ComponentProps<typeof TabsTrigger>> = ({
  className,
  children,
  ...props
}) => {
  return (
    <TabsTrigger
      className={cn(
        "flex min-h-[80px] flex-1 items-start justify-start bg-simmer-white py-3 text-xl font-medium uppercase tracking-tighter duration-0 data-[state=active]:bg-simmer-yellow",
        className
      )}
      {...props}
    >
      {children}
    </TabsTrigger>
  );
};

const MenuTabContent: FC<ComponentProps<typeof TabsContent>> = ({
  className,
  ...props
}) => {
  return (
    <TabsContent
      className={cn("mt-0 min-h-[500px] bg-simmer-white", className)}
      {...props}
    >
      {props.children}
    </TabsContent>
  );
};

export default MenuForm;
