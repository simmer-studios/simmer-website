"use client";

import dynamic from "next/dynamic";
import { FC, HTMLProps } from "react";

import { useCart } from "@/contexts/CartContext";
import { Service } from "@/payload-types";

import Asterisk from "./icons/Asterisk";

const MenuService = dynamic(() => import("./MenuService"), {
  ssr: false
});

interface MenuPhaseContentProps {
  phaseNumber: number;
  phaseTitle: string;
  heading: string;
  description: string;
  fields: Service[];
}

const MenuPhaseContent: FC<
  HTMLProps<HTMLDivElement> & MenuPhaseContentProps
> = ({ phaseNumber, phaseTitle, heading, description, fields }) => {
  const { items, addItem, removeItem } = useCart();

  const services = fields.map((field) => ({
    id: String(field.id),
    name: field.name,
    description: field.description,
    linkTo: field.linkTo,
    specialty: field.specialty
  }));

  const updateCartItems = (item: string) => {
    if (items.includes(item)) {
      removeItem(item);
    } else {
      addItem(item);
    }
  };

  return (
    <>
      <div className="grid border-black md:grid-cols-[1fr_1.2fr] md:divide-x-2 md:divide-black md:border-b-2">
        {/* left */}
        <div className="grid grid-cols-2 border-b-2 border-black p-4 md:flex md:flex-col md:justify-between md:border-b-0 md:p-0">
          <div className="flex flex-col space-y-2 md:space-y-0">
            <h2 className="order-1 max-w-[8ch] text-4xl capitalize tracking-tight md:order-2 md:p-10 md:text-6xl lg:text-7xl xl:text-8xl">
              {phaseTitle}
            </h2>
            <div className="order-2 flex items-center gap-2 font-adelle-mono text-[9px] md:order-1 md:gap-4 md:border-b-2 md:border-black md:px-10 md:py-5 md:text-sm lg:text-lg">
              <span className="rounded bg-black px-3 py-0.5 text-simmer-white lg:rounded-lg">
                LEGEND
              </span>
              <div className="inline-flex items-center gap-2 tracking-tighter">
                <Asterisk className="h-2 w-2 rotate-90 md:w-3" />
                SPECIALTY
              </div>
            </div>
          </div>
          <div className="max-h-max space-y-1 md:space-y-4 md:p-[40px]">
            <p className="text-md font-adelle-mono font-bold tracking-tighter sm:text-lg md:text-2xl lg:text-3xl">
              {heading}
            </p>
            <p className="font-articulat text-[10px] font-semibold sm:text-sm md:text-lg md:font-medium lg:text-xl">
              {description}
            </p>
          </div>
        </div>
        {/* right */}
        <div className="">
          {/* Heading Row */}
          <div className="row grid grid-cols-[70px_1fr] divide-x-2 divide-black border-b-2 border-black lg:grid-cols-[100px_1fr]">
            <div className="flex translate-y-1 items-center justify-center p-5 font-fionas text-5xl font-semibold leading-none sm:text-6xl md:text-7xl lg:text-8xl">
              {phaseNumber}
            </div>
            <div className="flex items-center p-5 text-2xl font-bold tracking-tighter sm:text-4xl md:text-3xl lg:text-5xl">
              Tick your orders.
            </div>
          </div>
          {services && services.length > 0
            ? services.map(({ id, name, description, linkTo, specialty }) => (
                <MenuService
                  key={id}
                  name={name}
                  description={description}
                  linkTo={linkTo}
                  specialty={specialty}
                  checked={items.includes(name)}
                  onClick={() => updateCartItems(name)}
                />
              ))
            : null}
          <div className="hidden min-h-[80px] md:block"></div>
        </div>
      </div>
    </>
  );
};

export default MenuPhaseContent;
