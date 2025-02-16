import { FC, HTMLProps } from "react";
import Check from "./icons/Check";

interface MenuItemProps {
  checked: boolean;
  onChangeHandler: (value: boolean) => void;
}

const MenuItem: FC<HTMLProps<HTMLDivElement> & MenuItemProps> = ({
  checked,
  onChangeHandler,
  children,
  ...props
}) => {
  return (
    <div
      {...props}
      className="row grid grid-cols-[70px_1fr] divide-x-2 divide-black lg:grid-cols-[100px_1fr]"
    >
      <button
        className="flex items-center justify-center bg-simmer-white hover:brightness-95"
        onClick={() => onChangeHandler(!checked)}
        type="button"
      >
        {checked && <Check className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8" />}
      </button>
      {children}
    </div>
  );
};

export default MenuItem;
