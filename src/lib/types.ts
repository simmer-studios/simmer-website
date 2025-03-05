import { SVGProps } from "react";

export type CustomSVG = SVGProps<SVGSVGElement>;

export type Theme = "dark" | "light";

export type Filter = {
  filterId: string;
  filterLabel: string;
};
