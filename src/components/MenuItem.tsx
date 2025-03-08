import { FC, ReactNode } from "react";

import Check from "./icons/Check";

interface MenuItemProps {
  checked: boolean;
  onChangeHandler: (value: boolean) => void;
  children: ReactNode;
}

const MenuItem: FC<MenuItemProps> = ({
  checked,
  onChangeHandler,
  children
}) => {
  return (
    <div className="grid grid-cols-[70px_1fr] divide-x-2 divide-black lg:grid-cols-[100px_1fr]">
      <button
        className="flex items-center justify-center bg-simmer-white hover:brightness-95"
        onClick={() => onChangeHandler(!checked)}
        type="button"
      >
        {checked && (
          <span>
            <Check className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />
          </span>
        )}
      </button>
      {children}
    </div>
  );
};

export default MenuItem;
