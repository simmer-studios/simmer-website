"use client";

import { FC } from "react";

import { useCart } from "@/contexts/CartContext";
import { Menu } from "@/payload-types";

import Check from "./icons/Check";

interface Props {
  description: Menu["chefsChoice"]["description"];
}

const SERVICE_NAME = "Chef's Choice";

const ChefChoiceCheckbox: FC<Props> = ({ description }) => {
  const { items, addItem, removeItem } = useCart();

  const toggleChefsChoice = () => {
    if (items.includes(SERVICE_NAME)) {
      removeItem(SERVICE_NAME);
    } else {
      addItem(SERVICE_NAME);
    }
  };

  return (
    <div className="row grid w-full grid-cols-[70px_1fr] divide-x-2 divide-black border-b-2 border-black lg:grid-cols-[100px_1fr]">
      <button
        className="flex items-center justify-center bg-simmer-white hover:brightness-95"
        type="button"
        onClick={toggleChefsChoice}
      >
        {items.includes(SERVICE_NAME) && (
          <Check className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
        )}
      </button>
      <div className="flex items-center p-5 font-articulat text-2xl font-bold tracking-tighter sm:text-4xl md:font-adelle-mono md:text-3xl md:uppercase lg:p-8 lg:text-5xl xl:p-10">
        <div className="w-full space-y-4">
          <div className="flex cursor-pointer select-none items-center gap-2">
            <span>{SERVICE_NAME}</span>
          </div>
          <p className="font-articulat text-sm font-normal normal-case leading-tight tracking-normal sm:text-base sm:leading-normal lg:text-lg">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChefChoiceCheckbox;
