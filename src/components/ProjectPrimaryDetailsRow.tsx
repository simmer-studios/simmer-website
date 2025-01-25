import { FC, HTMLProps, PropsWithChildren } from "react";

const ProjectPrimaryDetailsRow: FC<
  PropsWithChildren<HTMLProps<HTMLDivElement>>
> = ({ children }) => {
  return <div className="flex justify-between py-1">{children}</div>;
};

export default ProjectPrimaryDetailsRow;
