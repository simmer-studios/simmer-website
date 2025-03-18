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
        <h2 className="text-center font-adelle-mono text-5xl font-bold uppercase leading-none tracking-tight lg:text-6xl xl:text-8xl">
          {title}
        </h2>
        {/* CREDITS */}
        <div className="w-full divide-y-2 divide-black border-y-2 border-black lg:max-w-xl">
          {creatives &&
            creatives.length > 0 &&
            creatives.map((person) => (
              <Credit
                key={person.name}
                title={person.role}
                name={person.name}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

const Credit = ({ title, name }: { title: string; name: string }) => {
  return (
    <div className="flex justify-between py-2 text-lg">
      <p className="font-adelle-mono font-bold uppercase">{title}</p>
      <p className="font-articulat font-medium">{name}</p>
    </div>
  );
};

export default CreditsBlock;
