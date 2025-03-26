"use client";

import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";

import DIGIN from "@/assets/branding/dig-in.svg";
import BrandingForm from "@/components/BrandingForm";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import BrandingSuccess from "@/components/sections/welcome/BrandingSuccess";
import StickySidebar from "@/components/StickySidebar";
import { BrandQuestionnaire } from "@/payload-types";

interface WelcomePageProps {
  brandingPage: BrandQuestionnaire;
}

export default function WelcomePage({ brandingPage }: WelcomePageProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (isSubmitting) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitting]);

  const handleSubmit = async () => {
    setIsSubmitting(true);
  };

  const handleSuccess = () => {
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  const handleSubmitError = () => {
    setIsSubmitting(false);
  };

  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main className="bg-black">
        <ContentWrapper>
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full divide-y-2 divide-simmer-white text-simmer-white">
            <AnimatePresence>
              {isSubmitting && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 z-10 flex min-h-screen items-center justify-center overflow-hidden bg-black/80 p-5"
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      rotate: [0, -2, 2, -1, 1, 0]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    style={{
                      transformOrigin: "bottom center",
                      width: 778,
                      height: 778
                    }}
                    className="relative"
                  >
                    <Image
                      src="/images/checkout.svg"
                      alt="Loading"
                      className="absolute object-cover"
                      width={778}
                      height={778}
                    />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="branding-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="bg-simmer-yellow px-5 py-5 text-black lg:px-16 lg:py-10">
                    <Image src={DIGIN} alt="Dig In" />
                  </div>
                  <div className="grid items-end gap-5 px-5 py-5 lg:grid-cols-[1fr_40%] lg:px-16 lg:py-10">
                    <div>
                      <p className="text-sm tracking-wide sm:text-lg lg:text-xl">
                        {brandingPage.description}
                      </p>
                    </div>
                    <div className="flex h-full items-end lg:justify-end">
                      <span className="inline-block text-lg font-bold leading-none lg:text-2xl">
                        WELCOME TO
                        <br />
                        SIMMER STUDIOS
                      </span>
                    </div>
                  </div>
                  <BrandingForm
                    questions={brandingPage.questions}
                    sliders={brandingPage.brandAttributes}
                    onSubmit={handleSubmit}
                    onSuccess={handleSuccess}
                    onSubmitError={handleSubmitError}
                  />
                </motion.div>
              ) : (
                <BrandingSuccess key="success" />
              )}
            </AnimatePresence>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
