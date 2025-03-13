"use client";

import { FC } from "react";

import { useCart } from "@/contexts/CartContext";
import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import Cart from "./Cart";
import FoodDome from "./icons/FoodDome";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/Popover";

interface Props {
  theme: Theme;
}

const HeaderCartButton: FC<Props> = ({ theme }) => {
  const { items: cartItems } = useCart();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <button
          className={cn(
            "group relative h-full items-center justify-center bg-simmer-white px-5 hover:brightness-95 lg:flex lg:w-[140px] lg:border-x-2 lg:border-black lg:px-0",
            {
              "bg-black hover:bg-simmer-white lg:border-simmer-white":
                theme === "dark"
            }
          )}
        >
          {cartItems && cartItems.length > 0 && (
            <span className="absolute right-8 top-9 inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-600 text-sm text-white">
              {cartItems.length}
            </span>
          )}
          <FoodDome
            className={cn("h-[50px]", {
              "fill-simmer-white group-hover:fill-black": theme === "dark"
            })}
          />
        </button>
      </PopoverTrigger>
      <PopoverContent
        align="end"
        className="relative rounded-3xl border-2 border-black bg-simmer-yellow p-0 shadow-lg outline-none"
      >
        <div className="absolute -top-[20px] right-9 h-5 w-16 bg-[url(/images/img_cart-decoration.svg)] bg-cover bg-center"></div>
        <Cart />
      </PopoverContent>
    </Popover>
  );
};

export default HeaderCartButton;
