"use client";

import { FC, HTMLProps, useState } from "react";

import { Homepage } from "@/payload-types";

import ServiceCategories from "./ServiceCategories";
import ServiceMenuCourseTabs from "./ServiceMenuCourseTabs";

export type ServiceCategoryKey = keyof Homepage["services"];
export type ServiceTabKey = keyof Omit<
  Homepage["services"][ServiceCategoryKey],
  "title"
>;

interface ServicesProps {
  services: Homepage["services"];
}

const Services: FC<ServicesProps> = ({ services }) => {
  /* uses number as the unique selector of each service category */
  const [selectedServiceCategory, setSelectedServiceCategory] =
    useState<ServiceCategoryKey>("first");

  const updateSelectedServiceCategory = (category: ServiceCategoryKey) => {
    setSelectedServiceCategory(category);
  };

  return (
    <>
      <ServiceCategories
        categories={services}
        onCategoryClick={updateSelectedServiceCategory}
        selectedCategory={selectedServiceCategory}
      />
      <ServiceMenuCourseTabs category={services[selectedServiceCategory]} />
    </>
  );
};

export default Services;
