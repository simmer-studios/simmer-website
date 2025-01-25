import { cn } from "@/lib/utils";
import { FC, HTMLProps } from "react";

interface Props {
  title: string;
  people: {
    title: string;
    name: string;
  }[];
}

const CreditsBlock: FC<HTMLProps<HTMLDivElement> & Props> = ({
  title,
  people,
  className,
  ...props
}) => {
  return (
    <section className={cn("px-10", className)} {...props}>
      <div className="container flex max-w-max flex-col items-center justify-center gap-4">
        {/* BRAND NAME */}
        <h2 className="text-center font-adelle-mono text-5xl font-bold leading-none tracking-tight lg:text-6xl xl:text-8xl">
          {title}
        </h2>
        {/* CREDITS */}
        <div className="w-full divide-y-2 divide-black border-y-2 border-black">
          {people &&
            people.length > 0 &&
            people.map((person) => (
              <Credit
                key={person.name}
                title={person.title}
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
