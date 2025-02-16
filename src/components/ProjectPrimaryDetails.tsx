import { FC, HTMLProps, PropsWithChildren } from "react";

import { cn } from "@/lib/utils";

import ProjectPrimaryDetailsRow from "./ProjectPrimaryDetailsRow";

const ProjectPrimaryDetails: FC<HTMLProps<HTMLUListElement>> = ({
  className
}) => {
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
          <span>2022</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>BRAND</LabelCell>
          <span>Liquor Industry</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>PROJECT</LabelCell>
          <span>Rebranding</span>
        </ProjectPrimaryDetailsRow>
      </li>
      <li>
        <ProjectPrimaryDetailsRow>
          <LabelCell>SERVICES</LabelCell>
          <ul className="text-right">
            <li>Logo Creation</li>
            <li>Packaging</li>
            <li>Website design</li>
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
