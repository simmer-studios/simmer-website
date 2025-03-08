import { ComponentProps, FC } from "react";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { cn } from "@/lib/utils";
import { Homepage } from "@/payload-types";

import ServiceCourseContent from "./ServiceCourseContent";

interface CourseTabContentProps {
  category: Homepage["services"]["first"];
}

const ServiceMenuCourseTabs: FC<CourseTabContentProps> = ({ category }) => {
  return (
    <section className="min-h-max pb-5">
      <Tabs defaultValue="appetizers" className="relative flex flex-col">
        <TabsList className="container absolute left-[0] right-[0] top-0 z-10 mx-auto flex justify-center rounded-none px-0 text-simmer-white lg:gap-2 lg:px-10">
          <CourseTitleTab value="appetizers">(APPETIZERS)</CourseTitleTab>
          <CourseTitleTab value="main-course">MAIN COURSE</CourseTitleTab>
          <CourseTitleTab value="desserts">DESERTS</CourseTitleTab>
        </TabsList>
        <CourseTabContent value="appetizers">
          <ServiceCourseContent serviceTab={category.appetizers} />
        </CourseTabContent>
        <CourseTabContent value="main-course">
          <ServiceCourseContent serviceTab={category.mainCourse} />
        </CourseTabContent>
        <CourseTabContent value="desserts">
          <ServiceCourseContent serviceTab={category.desserts} />
        </CourseTabContent>
      </Tabs>
    </section>
  );
};

const CourseTitleTab: FC<ComponentProps<typeof TabsTrigger>> = ({
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

const CourseTabContent: FC<ComponentProps<typeof TabsContent>> = ({
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

export default ServiceMenuCourseTabs;
