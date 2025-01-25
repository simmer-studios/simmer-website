"use client";

import { useState } from "react";
import FoodDome from "./icons/FoodDome";
import { cn } from "@/lib/utils";

const InteractiveFooterButtons = () => {
  const [shouldSwitch, setShouldSwitch] = useState<boolean>(false);

  return (
    <div className="flex max-w-min select-none overflow-hidden rounded-2xl border-2 border-simmer-white font-adelle-mono text-[2rem] font-bold sm:text-[3rem]">
      <button
        className={cn(
          "order-1 flex flex-1 items-center gap-2 bg-simmer-white px-7 py-2 text-black",
          {
            "order-2": shouldSwitch
          }
        )}
        onClick={() => alert("she said yes!")}
      >
        <FoodDome className="block w-[55px]" />
        <span className="tracking-tighter">YES</span>
      </button>
      <button
        className={cn(
          "order-2 flex flex-1 items-center justify-center px-7 py-2",
          {
            "order-1": shouldSwitch
          }
        )}
        onMouseOver={() => setShouldSwitch((prev) => !prev)}
        onClick={() => setShouldSwitch((prev) => !prev)}
      >
        <span onClick={() => setShouldSwitch((prev) => !prev)}>NOOO!</span>
      </button>
    </div>
  );
};

export default InteractiveFooterButtons;
