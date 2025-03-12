"use client";

import { motion } from "motion/react";
import Image from "next/image";
import { FC, ReactNode, useState } from "react";

import { Homepage } from "@/payload-types";

interface Props {
  intro: Homepage["intro"];
}

export type TabKey = keyof Homepage["intro"];

const CompanyDescription: FC<Props> = ({ intro }) => {
  const [selectedTab, setSelectedTab] = useState<TabKey>("first");

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="mx-auto mb-[24.82px] bg-black px-10 @container/cards-section md:px-20 xl:mb-8 xl:max-w-[1837px]"
    >
      <div className="flex flex-col gap-6 @[75rem]/cards-section:flex-row">
        {/* card 1 */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-b-2xl bg-[url('/images/img_wavy-card.svg')] bg-cover bg-top md:min-w-[544px] md:rounded-b-[20px] lg:pt-10"
        >
          <div className="flex justify-between gap-5 pt-[28px]">
            <div className="flex items-center rounded-r-full bg-black px-8 py-2 md:px-16 md:py-4">
              <p className="font-adelle-mono-flex leading-none text-simmer-white md:text-[1.5rem]">
                EXPLORE
              </p>
            </div>
            <div className="mr-8 flex items-center">
              <span className="font-adelle-mono leading-none md:hidden">
                TAP &<br />
                KNOW MORE
              </span>
              <span className="hidden font-adelle-mono leading-none md:inline-block md:text-[1.5rem]">
                CLICK &<br />
                KNOW MORE
              </span>
            </div>
          </div>
          <div className="px-[24px] pb-[42px] pt-[48px] font-adelle-mono text-[2rem] leading-none md:px-[64px] md:pt-[9px] md:text-[4rem] md:leading-tight">
            <TabTitle
              active={selectedTab === "first"}
              onClick={() => setSelectedTab("first")}
            >
              {intro.first.title}
            </TabTitle>
            <TabTitle
              active={selectedTab === "second"}
              onClick={() => setSelectedTab("second")}
            >
              {intro.second.title}
            </TabTitle>
            <TabTitle
              active={selectedTab === "third"}
              onClick={() => setSelectedTab("third")}
            >
              {intro.third.title}
            </TabTitle>
            <TabTitle
              active={selectedTab === "fourth"}
              onClick={() => setSelectedTab("fourth")}
            >
              {intro.fourth.title}
            </TabTitle>
          </div>
        </motion.div>
        {/* card 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="w-full space-y-8 rounded-tr-[100px] bg-simmer-white px-[24px] py-[42px] @container/card-2 @[1400px]/cards-section:rounded-tr-[420px] md:relative md:flex md:min-h-[641px] md:flex-col md:justify-between md:px-[64px] md:pb-[64px] md:pt-[74px]"
        >
          <h2 className="max-w-[16ch] font-articulat text-[2rem] font-bold leading-none md:text-[4rem]">
            {intro[selectedTab].heading}
          </h2>
          <div className="right-0 top-0 flex justify-center @[850px]/card-2:absolute">
            <div className="relative aspect-video w-full @[850px]/card-2:h-[263.71px] @[850px]/card-2:w-[402px]">
              <Image
                src="/images/img_wine-glass.svg"
                className="object-contain"
                alt=""
                fill
              />
            </div>
          </div>
          <p className="line-clamp-6 text-pretty font-articulat text-[0.937rem] font-bold leading-[1.47rem] md:text-[2rem] md:leading-[2.5rem]">
            {intro[selectedTab].description}
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

interface TabTitleProps {
  active: boolean;
  onClick: () => void;
  children: ReactNode;
}

const TabTitle: FC<TabTitleProps> = ({ active, onClick, children }) => {
  return (
    <div className="group flex items-center gap-5 border-b-2 border-black py-5">
      <span
        className="inline-block cursor-pointer font-adelle-mono leading-none hover:text-black/80"
        onClick={onClick}
      >
        {children}
      </span>
      {active && (
        <span className="inline-block h-[20px] w-[20px] rounded-full bg-simmer-yellow content-[''] md:h-[30px] md:w-[30px]" />
      )}
    </div>
  );
};

export default CompanyDescription;
