"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import CheckoutForm from "@/components/CheckoutForm";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CheckoutSuccess from "@/components/sections/checkout/CheckoutSuccess";
import StickySidebar from "@/components/StickySidebar";

/* CHECKOUT PAGE */
export default function CheckoutPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async () => {
    setIsSubmitting(true);
    // Simulate form submission delay
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSuccess(true);
  };

  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main>
        <ContentWrapper className="bg-black">
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full" id="checkout-body">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.div
                  key="checkout-form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CheckoutForm onSubmit={handleSubmit} />
                </motion.div>
              ) : (
                <CheckoutSuccess key="success" />
              )}
            </AnimatePresence>
          </div>
        </ContentWrapper>
      </main>
      <Footer />
    </>
  );
}
