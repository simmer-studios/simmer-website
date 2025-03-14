"use client";

import { FC, useState } from "react";

import { Homepage } from "@/payload-types";

import ServiceCategories from "./ServiceCategories";
import ServiceMenuCourseTabs from "./ServiceMenuCourseTabs";

export type TabKey = "appetizers" | "mainCourse" | "desserts";

interface ServicesProps {
  servicesSection: Homepage["services"];
}

const Services: FC<ServicesProps> = ({ servicesSection }) => {
  const [activeTab, setActiveTab] = useState<TabKey>("appetizers");

  const updateActiveTab = (tab: TabKey) => {
    setActiveTab(tab);
  };

  return (
    <>
      <ServiceCategories
        firstLabel={servicesSection.firstLabel}
        secondLabel={servicesSection.secondLabel}
        thirdLabel={servicesSection.thirdLabel}
        activeTab={activeTab}
        onLabelClick={updateActiveTab}
      />
      <ServiceMenuCourseTabs
        activeTab={activeTab}
        appetizers={servicesSection.appetizers}
        mainCourse={servicesSection.mainCourse}
        desserts={servicesSection.desserts}
        onTabClick={updateActiveTab}
      />
    </>
  );
};

export default Services;
