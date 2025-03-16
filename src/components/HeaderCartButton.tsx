"use client";

import { FC, HTMLProps } from "react";

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
            "group relative flex h-full w-[70px] items-center justify-center bg-simmer-white hover:brightness-95 lg:flex lg:w-[140px] lg:border-x-2 lg:border-black lg:px-0",
            {
              "bg-transparent lg:border-simmer-white lg:hover:bg-simmer-white":
                theme === "dark"
            }
          )}
        >
          <ItemCountBadge
            className="absolute right-1 top-5 z-10 sm:right-1 sm:top-7 lg:right-7 lg:top-9"
            count={cartItems.length}
          />
          <FoodDome
            className={cn("h-[30px] -translate-y-0.5 lg:h-[50px]", {
              "fill-simmer-white group-hover:fill-simmer-yellow lg:group-hover:fill-black":
                theme === "dark"
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

interface ItemCountBadgeProps extends HTMLProps<HTMLSpanElement> {
  count: number;
}

const ItemCountBadge: FC<ItemCountBadgeProps> = ({ count, className }) => {
  if (count > 0) {
    return (
      <span
        className={cn(
          "inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-red-600 text-sm text-white",
          className
        )}
      >
        {count}
      </span>
    );
  }

  return null;
};

export default HeaderCartButton;
