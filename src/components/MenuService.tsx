"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ComponentProps, FC, HTMLProps, useState } from "react";

import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

import ChevronDown from "./icons/ChevronDown";
import MenuItem from "./MenuItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/Collapsible";

interface MenuServiceProps {
  link?: {
    label: string;
    url: string;
  };
  serviceId: string;
  serviceName: string;
  description: string;
  defaultChecked?: boolean;
}

const MenuService: FC<HTMLProps<HTMLDivElement> & MenuServiceProps> = ({
  link,
  description,
  serviceId,
  serviceName,
  defaultChecked = false,
  ...props
}) => {
  const [checked, setChecked] = useState(defaultChecked || false);
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { addItem, removeItem } = useCart();

  const handleOnTick = (value: boolean) => {
    /* set checkmark visibility */
    setChecked((prev) => !prev);
    /* add or remove to cart */
    if (value === true) {
      addItem({
        id: serviceId,
        name: serviceName
      });
    } else {
      removeItem(serviceId);
    }
  };

  return (
    <MenuItem checked={checked} onChangeHandler={handleOnTick} {...props}>
      <div className="flex items-center p-5 font-adelle-mono-flex text-xl tracking-tighter sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl">
        <Collapsible className="w-full space-y-4">
          <CollapsibleTrigger
            className="flex w-full flex-wrap items-center justify-between gap-2"
            onClick={() => setIsExpanded((prev) => !prev)}
          >
            <div className="flex items-center gap-2">
              <span>{serviceName}</span>
              <ChevronDown
                className={cn("h-3 w-3 transition-all duration-150", {
                  "rotate-180": isExpanded
                })}
              />
            </div>
            {link && <ButtonLink href={link.url}>{link.label}</ButtonLink>}
          </CollapsibleTrigger>
          <CollapsibleContent asChild>
            <p className="font-articulat text-sm leading-tight tracking-normal sm:text-base sm:leading-normal lg:text-lg">
              {description}
            </p>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </MenuItem>
  );
};

const ButtonLink: FC<ComponentProps<typeof Link>> = ({
  children,
  ...props
}) => {
  return (
    <motion.div layout="position">
      <Link
        {...props}
        className="whitespace-nowrap rounded-full border-2 border-black bg-simmer-yellow px-3 py-1 font-adelle-mono text-xs tracking-tight sm:py-2 sm:text-base md:py-1 md:text-xs lg:py-2 lg:text-base"
      >
        {children}
      </Link>
    </motion.div>
  );
};

export default MenuService;
