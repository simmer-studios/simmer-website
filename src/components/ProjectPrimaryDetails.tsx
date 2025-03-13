import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";
import { Service } from "@/payload-types";

import ProjectPrimaryDetailsRow from "./ProjectPrimaryDetailsRow";

interface Props {
  date: string;
  brand: string;
  project: string;
  services: (number | Service)[];
}

const ProjectPrimaryDetails: FC<HTMLProps<HTMLUListElement> & Props> = ({
  date,
  brand,
  project,
  services,
  className
}) => {
  const validServices = services.filter(
    (service) => typeof service !== "number"
  );

  return (
    <ul
      className={cn(
        "divide-y-2 divide-black border-y-2 border-black font-articulat font-medium lg:text-lg",
        className
      )}
    >
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>YEAR</LabelCell>
          <span>{new Date(date).getFullYear()}</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>BRAND</LabelCell>
          <span>{brand}</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>PROJECT</LabelCell>
          <span>{project}</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>SERVICES</LabelCell>
          <ul className="text-right">
            {validServices.map((service) => (
              <li key={service.id}>{service.name}</li>
            ))}
          </ul>
        </ProjectPrimaryDetailsRow>
      </li>
    </ul>
  );
};

const LabelCell: FC<PropsWithChildren<HTMLProps<HTMLSpanElement>>> = ({
  children
}) => {
  return <span className="font-adelle-mono font-bold">{children}</span>;
};

export default ProjectPrimaryDetails;
