import { FC } from "react";

import ServiceCourseHeading from "@/components/ServiceCourseHeadingRow";
import ServiceCourseList from "@/components/ServiceCourseList";
import ServiceCourseListItem from "@/components/ServiceCourseListItem";
import { Homepage, Service } from "@/payload-types";

import { ServiceCategoryKey, ServiceTabKey } from "./Services";

interface Props {
  serviceTab: Homepage["services"][ServiceCategoryKey][ServiceTabKey];
}

const ServiceCourseContent: FC<Props> = ({ serviceTab }) => {
  return (
    <div className="border-b-2 border-black pt-5 md:py-10">
      {/* heading row */}
      <ServiceCourseHeading
        mainText={serviceTab.title}
        subText={serviceTab.description}
      />
      {/* services row */}
      <ServiceCourseList className="mt-5 lg:mt-10">
        {serviceTab.services.map(
          (service, index) =>
            typeof service !== "number" && (
              <ServiceCourseListItem
                key={service.id}
                text={service.name}
                number={index + 1}
                variant={index % 2 === 0 ? "bold" : "thin-italic"}
              />
            )
        )}
      </ServiceCourseList>
    </div>
  );
};

export default ServiceCourseContent;
