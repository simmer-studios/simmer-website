import { cn } from "@/lib/utils";

import Slider from "./ui/Slider";

interface Props {
  name: string;
  leftLabel: string;
  rightLabel: string;
}

const ScaleInput: React.FC<Props & React.HTMLAttributes<HTMLDivElement>> = ({
  name,
  className,
  leftLabel,
  rightLabel
}) => {
  return (
    <div className={cn("space-y-2", className)}>
      <div className="flex h-[2rem] items-center md:min-h-[4rem]">
        <Slider step={1} max={10} min={0} defaultValue={[5]} name={name} />
      </div>
      <div className="flex justify-between sm:text-lg md:text-xl lg:text-2xl">
        <p className="font-bold uppercase">{leftLabel}</p>
        <p className="font-bold uppercase">{rightLabel}</p>
      </div>
    </div>
  );
};

export default ScaleInput;
