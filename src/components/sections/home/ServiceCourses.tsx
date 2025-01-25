import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import { ComponentProps, FC } from "react";
import AppetizersContent from "./AppetizersContent";
import MainCourseContent from "./MainCourseContent";
import DessertsContent from "./DessertsContent";

const ServiceCourses = () => {
  return (
    <section className="min-h-max pb-5">
      <Tabs defaultValue="account" className="relative flex flex-col">
        <TabsList className="container absolute left-[0] right-[0] top-0 z-10 mx-auto flex justify-center rounded-none px-0 text-simmer-white lg:gap-2 lg:px-10">
          <SimmerTabs value="account">(APPETIZERS)</SimmerTabs>
          <SimmerTabs value="main-course">MAIN COURSE</SimmerTabs>
          <SimmerTabs value="desserts">DESERTS</SimmerTabs>
        </TabsList>
        <SimmerTabsContent value="account">
          <AppetizersContent />
        </SimmerTabsContent>
        <SimmerTabsContent value="main-course">
          <MainCourseContent />
        </SimmerTabsContent>
        <SimmerTabsContent value="desserts">
          <DessertsContent />
        </SimmerTabsContent>
      </Tabs>
    </section>
  );
};

const SimmerTabs: FC<ComponentProps<typeof TabsTrigger>> = ({
  className,
  ...props
}) => {
  return (
    <TabsTrigger
      {...props}
      className={cn(
        "basis-full translate-y-0.5 rounded-none rounded-t-xl border-2 border-simmer-white bg-black py-3 font-adelle-mono text-sm data-[state=active]:bg-simmer-white data-[state=active]:text-black md:text-xl lg:min-h-[100px] lg:rounded-2xl lg:text-2xl xl:text-3xl",
        className
      )}
    >
      {props.children}
    </TabsTrigger>
  );
};

const SimmerTabsContent: FC<ComponentProps<typeof TabsContent>> = ({
  className,
  ...props
}) => {
  return (
    <TabsContent
      className={cn(
        "z-10 min-h-[500px] translate-y-9 bg-simmer-white py-2 lg:translate-y-[3.2rem]",
        className
      )}
      {...props}
    >
      {props.children}
    </TabsContent>
  );
};

export default ServiceCourses;
