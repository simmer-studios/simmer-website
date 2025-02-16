"use client";

import { ComponentProps, FC, HTMLProps, useState } from "react";
import MenuItem from "./MenuItem";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger
} from "./ui/Collapsible";
import ChevronDown from "./icons/ChevronDown";
import Link from "next/link";
import { useCart } from "@/contexts/CartContext";

interface MenuServiceProps {
  link?: {
    label: string;
    url: string;
  };
  serviceId: string;
  serviceName: string;
  description?: string;
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
        {description ? (
          <Collapsible className="w-full space-y-4">
            <CollapsibleTrigger className="flex w-full flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <span>{serviceName}</span>
                <ChevronDown className="h-3 w-3" />
              </div>
              {link && <ButtonLink href={link.url}>{link.label}</ButtonLink>}
            </CollapsibleTrigger>
            <CollapsibleContent>
              <p className="font-articulat text-sm leading-tight tracking-normal sm:text-base sm:leading-normal lg:text-lg">
                {description}
              </p>
            </CollapsibleContent>
          </Collapsible>
        ) : (
          <div className="flex w-full items-center font-adelle-mono-flex text-xl tracking-tighter sm:text-2xl md:text-xl lg:text-3xl xl:text-4xl">
            <div className="flex w-full flex-wrap items-center justify-between gap-2">
              <span>{serviceName}</span>
              {link && <ButtonLink href={link.url}>{link.label}</ButtonLink>}
            </div>
          </div>
        )}
      </div>
    </MenuItem>
  );
};

const ButtonLink: FC<ComponentProps<typeof Link>> = ({
  children,
  ...props
}) => {
  return (
    <Link
      {...props}
      className="whitespace-nowrap rounded-full border-2 border-black bg-simmer-yellow px-3 py-1 font-adelle-mono text-xs tracking-tight sm:py-2 sm:text-base md:py-1 md:text-xs lg:py-2 lg:text-base"
    >
      {children}
    </Link>
  );
};

export default MenuService;
