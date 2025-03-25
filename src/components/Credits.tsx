import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

interface Props {
  title: string;
  creatives?:
    | {
        name: string;
        role: string;
        id?: string | null;
      }[]
    | null;
}

const CreditsBlock: FC<HTMLProps<HTMLDivElement> & Props> = ({
  title,
  creatives,
  className,
  ...props
}) => {
  return (
    <section className={cn("px-10", className)} {...props}>
      <div className="container flex max-w-max flex-col items-center justify-center gap-4">
        {/* BRAND NAME */}
        <h2 className="max-w-[20ch] text-center font-adelle-mono text-5xl font-bold uppercase leading-none tracking-tight lg:text-6xl xl:text-8xl">
          {title}
        </h2>
        {/* CREDITS */}
        <div className="w-full divide-y-2 divide-black border-y-2 border-black lg:max-w-2xl">
          {creatives &&
            creatives.length > 0 &&
            creatives.map((person) => (
              <Credit key={person.id} title={person.role} name={person.name} />
            ))}
        </div>
      </div>
    </section>
  );
};

const Credit = ({ title, name }: { title: string; name: string }) => {
  return (
    <div className="flex justify-between gap-8 py-2 text-lg">
      <p className="font-adelle-mono font-bold uppercase leading-tight">
        {title}
      </p>
      <p className="text-right font-articulat font-medium leading-tight">
        {name}
      </p>
    </div>
  );
};

export default CreditsBlock;
