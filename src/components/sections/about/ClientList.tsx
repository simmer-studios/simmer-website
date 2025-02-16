import { FC, HTMLProps } from "react";

import BestOfTheBest from "@/components/icons/BestOfTheBest";
import { cn } from "@/lib/utils";

const ClientList: FC<HTMLProps<HTMLDivElement>> = ({ className }) => {
  return (
    <section className={cn("space-y-4 py-6 md:space-y-6 md:pt-20", className)}>
      <div className="container flex flex-col items-center justify-center gap-5 px-8 md:flex-row md:items-start md:justify-start md:gap-2 lg:justify-start">
        <BestOfTheBest className="block md:pt-2" />
        <h2 className="block text-center font-adelle-mono text-7xl leading-none tracking-tighter md:text-start md:text-6xl">
          CLIENT LIST
        </h2>
      </div>
      <div className="container hidden px-8 md:block">
        <p className="md:max-w-[90%] lg:max-w-[70%]">
          The Bourbon Bros combines premium quality with a fun and approachable
          personality, making it an excellent choice for those looking for a
          high-quality bourbon that doesn&apos;t take itself too seriously. The
          Bourbon Bros combines premium quality with a fun and approachable
          personality, making it an excellent choice for those looking for a
          high-quality bourbon that doesn&apos;t take itself too seriously.
        </p>
      </div>
      <div className="container grid grid-cols-2 gap-x-2 gap-y-1.5 px-8 py-5 sm:grid-cols-3 md:grid-cols-4">
        {Array.from({ length: 16 }).map((_, i) => (
          <ClientName majorClient key={i}>
            Client Name Here
          </ClientName>
        ))}
        {Array.from({ length: 16 }).map((_, i) => (
          <ClientName key={i}>Client Name Here</ClientName>
        ))}
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <button className="rounded-full border-2 border-black bg-simmer-white px-7 py-1 active:bg-simmer-yellow">
          <span className="inline-block pt-1 font-adelle-mono">LOAD MORE</span>
        </button>
      </div>
    </section>
  );
};

interface ClientNameProps {
  majorClient?: boolean;
}

const ClientName: FC<HTMLProps<HTMLParagraphElement> & ClientNameProps> = ({
  majorClient,
  className,
  children,
  ...props
}) => {
  return (
    <p
      className={cn(
        "text-center font-normal tracking-tight sm:text-start xl:text-xl",
        {
          "font-semibold": majorClient
        },
        className
      )}
      {...props}
    >
      {children}
    </p>
  );
};

export default ClientList;
