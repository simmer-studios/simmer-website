"use client";

import { HTMLMotionProps, motion } from "motion/react";
import { FC, HTMLProps } from "react";

import BestOfTheBest from "@/components/icons/BestOfTheBest";
import { cn } from "@/lib/utils";
import { Client } from "@/payload-types";

interface Props {
  clients: Client[];
  description: string;
}

const ClientList: FC<HTMLProps<HTMLDivElement> & Props> = ({
  clients,
  description,
  className
}) => {
  if (!clients || clients.length < 1) return null;

  const featuredClients = clients.filter((client) => client.featured);
  const otherClients = clients.filter((client) => !client.featured);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      variants={container}
      className={cn("space-y-4 py-6 md:space-y-6 md:pt-20", className)}
    >
      <motion.div
        variants={item}
        className="container flex flex-col items-center justify-center gap-5 px-8 md:flex-row md:items-start md:justify-start md:gap-2 lg:justify-start"
      >
        <BestOfTheBest className="block md:pt-2" />
        <h2 className="block text-center font-adelle-mono text-7xl leading-none tracking-tighter md:text-start md:text-6xl">
          CLIENT LIST
        </h2>
      </motion.div>
      <motion.div variants={item} className="container hidden px-8 md:block">
        <p className="md:max-w-[90%] lg:max-w-[70%]">{description}</p>
      </motion.div>
      <div className="container grid grid-cols-2 gap-x-2 gap-y-1.5 px-8 py-5 sm:grid-cols-3 md:grid-cols-4">
        {featuredClients.map((featuredClient) => (
          <ClientName majorClient key={featuredClient.id}>
            {featuredClient.name}
          </ClientName>
        ))}
        {otherClients.map((client) => (
          <ClientName key={client.id}>{client.name}</ClientName>
        ))}
      </div>
      <motion.div
        variants={item}
        className="flex items-center justify-center lg:hidden"
      >
        <button className="rounded-full border-2 border-black bg-simmer-white px-7 py-1 active:bg-simmer-yellow">
          <span className="inline-block pt-1 font-adelle-mono">LOAD MORE</span>
        </button>
      </motion.div>
    </motion.section>
  );
};

interface ClientNameProps {
  majorClient?: boolean;
}

const ClientName: FC<
  Omit<HTMLMotionProps<"p">, keyof ClientNameProps> & ClientNameProps
> = ({ majorClient, className, children, ...props }) => {
  return (
    <motion.p
      variants={{
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0 }
      }}
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
    </motion.p>
  );
};

export default ClientList;
