"use client";

import { motion } from "motion/react";
import Image from "next/image";

import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/sections/snaps/Hero";
import HeroContentSM from "@/components/sections/snaps/HeroContentSM";
import StickySidebar from "@/components/StickySidebar";

export default function SimmerSnapsPage() {
  const container = {
    show: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
        bounce: 0.3
      }
    }
  };

  return (
    <>
      <Header theme="light" />
      <main className="bg-simmer-white">
        <Hero />
        <ContentWrapper className="border-b-2 border-black">
          <StickySidebar className="border-0" theme="dark" />
          <div className="basis-full border-t-2 border-black">
            <motion.div
              variants={container}
              initial="show"
              className="columns-1 gap-4 space-y-4 md:columns-2 lg:columns-3 xl:columns-4"
              id="masonry-snaps"
            >
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 11.png"
                  width={461}
                  height={643}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 8.png"
                  width={463}
                  height={463}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 9.png"
                  width={462}
                  height={438}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 5.png"
                  width={462}
                  height={344}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 10.png"
                  width={462}
                  height={273}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4.png"
                  width={463}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 7.png"
                  width={462}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4-1.png"
                  width={461}
                  height={249}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 11.png"
                  width={461}
                  height={643}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 8.png"
                  width={463}
                  height={463}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 9.png"
                  width={462}
                  height={438}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 5.png"
                  width={462}
                  height={344}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 10.png"
                  width={462}
                  height={273}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4.png"
                  width={463}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 7.png"
                  width={462}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4-1.png"
                  width={461}
                  height={249}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 11.png"
                  width={461}
                  height={643}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 8.png"
                  width={463}
                  height={463}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 9.png"
                  width={462}
                  height={438}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 5.png"
                  width={462}
                  height={344}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 10.png"
                  width={462}
                  height={273}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4.png"
                  width={463}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 7.png"
                  width={462}
                  height={261}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
              <motion.div
                variants={item}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="relative break-inside-avoid"
              >
                <Image
                  alt="Simmer Studios Snap"
                  src="/images/snaps/image 4-1.png"
                  width={461}
                  height={249}
                  className="w-full border-2 border-black object-cover"
                  loading="lazy"
                />
              </motion.div>
            </motion.div>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
