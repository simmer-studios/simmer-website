import Asterisk from "@/components/icons/Asterisk";
import InformationIcon from "@/components/icons/InformationIcon";
import ServiceCourseHeading from "@/components/ServiceCourseHeadingRow";
import ServiceCourseList from "@/components/ServiceCourseList";
import ServiceCourseListItem from "@/components/ServiceCourseListItem";
import { cn } from "@/lib/utils";
import { FC, HTMLProps, PropsWithChildren } from "react";

const AppetizersContent = () => {
  return (
    <div className="border-b-2 border-black pt-5 md:py-10">
      {/* heading row */}
      <ServiceCourseHeading
        mainText="BRAND NAME"
        subText="Appetizers - what you need before you start anything."
      />
      {/* services row */}
      <ServiceCourseList className="mt-5 lg:mt-10">
        <ServiceCourseListItem text="BRAND STRATEGY" number="01" />
        <ServiceCourseListItem
          text="BRAND NAMING"
          number="02"
          variant="thin-italic"
        />
        <ServiceCourseListItem text="BRAND DISCOVERY" number="03" />
      </ServiceCourseList>
    </div>
  );
};

export default AppetizersContent;
