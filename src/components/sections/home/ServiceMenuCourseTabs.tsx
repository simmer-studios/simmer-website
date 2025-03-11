import { AnimatePresence, motion } from "framer-motion";
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
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Tabs defaultValue="appetizers" className="relative flex flex-col">
        <TabsList className="z-1 container absolute left-[0] right-[0] top-0 mx-auto flex justify-center rounded-none px-0 text-simmer-white lg:gap-2 lg:px-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="basis-full"
          >
            <CourseTitleTab value="appetizers">(APPETIZERS)</CourseTitleTab>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="basis-full"
          >
            <CourseTitleTab value="main-course">MAIN COURSE</CourseTitleTab>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
            className="basis-full"
          >
            <CourseTitleTab value="desserts">DESERTS</CourseTitleTab>
          </motion.div>
        </TabsList>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <CourseTabContent value="appetizers">
            <ServiceCourseContent serviceTab={category.appetizers} />
          </CourseTabContent>
          <CourseTabContent value="main-course">
            <ServiceCourseContent serviceTab={category.mainCourse} />
          </CourseTabContent>
          <CourseTabContent value="desserts">
            <ServiceCourseContent serviceTab={category.desserts} />
          </CourseTabContent>
        </motion.div>
      </Tabs>
    </motion.div>
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
        "w-full translate-y-0.5 rounded-none rounded-t-xl border-2 border-simmer-white bg-black py-3 font-adelle-mono text-sm data-[state=active]:bg-simmer-white data-[state=active]:text-black md:text-xl lg:min-h-[100px] lg:rounded-t-2xl lg:text-2xl xl:text-3xl",
        className
      )}
    >
      {props.children}
    </TabsTrigger>
  );
};

const tabContentVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
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
      <motion.div
        variants={tabContentVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        transition={{ duration: 0.4 }}
      >
        {props.children}
      </motion.div>
    </TabsContent>
  );
};

export default ServiceMenuCourseTabs;
