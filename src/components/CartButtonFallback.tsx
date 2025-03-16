import { FC } from "react";

import { Theme } from "@/lib/types";
import { cn } from "@/lib/utils";

import FoodDome from "./icons/FoodDome";

interface Props {
  theme: Theme;
}

const CartButtonFallback: FC<Props> = ({ theme }) => {
  return (
    <div
      className={cn(
        "group relative h-full items-center justify-center bg-simmer-white px-5 hover:brightness-95 lg:flex lg:w-[140px] lg:border-x-2 lg:border-black lg:px-0",
        {
          "bg-black hover:bg-simmer-white lg:border-simmer-white":
            theme === "dark"
        }
      )}
    >
      <FoodDome
        className={cn("h-[50px]", {
          "fill-simmer-white group-hover:fill-black": theme === "dark"
        })}
      />
    </div>
  );
};

export default CartButtonFallback;
