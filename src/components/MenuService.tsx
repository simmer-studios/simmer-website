"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ComponentProps, FC, HTMLProps, useState } from "react";

import { cn } from "@/lib/utils";
import { Service } from "@/payload-types";

import Asterisk from "./icons/Asterisk";
import ChevronDown from "./icons/ChevronDown";
import MenuItem from "./MenuItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/Collapsible";

interface MenuServiceProps {
  specialty: Service["specialty"];
  linkTo: Service["linkTo"];
  name: string;
  description: Service["description"];
  checked: boolean;
  onClick: () => void;
}

const buttonLink = {
  snap: { url: "/snap", label: "GO TO SIMMER SNAP" },
  stories: { url: "/stories", label: "GO TO SIMMER STORIES" }
};

const ButtonLink: FC<ComponentProps<typeof Link>> = ({
  children,
  ...props
}) => (
  <motion.div layout="position">
    <Link
      {...props}
      className="whitespace-nowrap rounded-full border-2 border-black bg-simmer-yellow px-3 py-1 font-adelle-mono text-xs tracking-tight sm:py-2 sm:text-base md:py-1 md:text-xs lg:py-2 lg:text-base"
    >
      {children}
    </Link>
  </motion.div>
);

const SpecialtyAsterisk = () => (
  <Asterisk className="absolute left-[-14] top-[45%] h-2 w-2 translate-y-[-50%] rotate-90 md:w-3" />
);

const MenuService: FC<HTMLProps<HTMLDivElement> & MenuServiceProps> = ({
  linkTo,
  specialty,
  description,
  name,
  checked,
  onClick,
  ...props
}) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const renderTitle = (
    <div className="relative flex items-center gap-2">
      {specialty && <SpecialtyAsterisk />}
      <span className="uppercase">{name}</span>
      {description && (
        <ChevronDown
          className={cn("h-3 w-3 transition-all duration-150", {
            "rotate-180": isExpanded
          })}
        />
      )}
    </div>
  );

  const renderLinkButton = linkTo && linkTo !== "none" && (
    <ButtonLink href={buttonLink[linkTo].url}>
      {buttonLink[linkTo].label}
    </ButtonLink>
  );

  return (
    <MenuItem checked={checked} onClick={onClick} {...props}>
      <div className="flex items-center p-5 font-adelle-mono-flex text-xl tracking-tighter sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl">
        {description ? (
          <Collapsible className="w-full space-y-4">
            <CollapsibleTrigger
              className="flex w-full flex-wrap items-center justify-between gap-2"
              onClick={() => setIsExpanded((prev) => !prev)}
            >
              {renderTitle}
              {renderLinkButton}
            </CollapsibleTrigger>
            <CollapsibleContent asChild>
              <p className="font-articulat text-sm leading-tight tracking-normal sm:text-base sm:leading-normal lg:text-lg">
                {description}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <div className="flex w-full items-center justify-between gap-2">
            {renderTitle}
            {renderLinkButton}
          </div>
        )}
      </div>
    </MenuItem>
  );
};

export default MenuService;
