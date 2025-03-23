"use client";

import { AnimatePresence } from "motion/react";
import { Metadata } from "next";
import { useState } from "react";

import CheckoutForm from "@/components/CheckoutForm";
import ContentWrapper from "@/components/ContentWrapper";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import CheckoutSuccess from "@/components/sections/checkout/CheckoutSuccess";
import StickySidebar from "@/components/StickySidebar";

export const metadata: Metadata = {
  title: "Checkout | Simmer Studios"
};

/* CHECKOUT PAGE */
export default function CheckoutPage() {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
    <>
      <Header theme="dark" disableLogoBorder />
      <main>
        <ContentWrapper className="bg-black">
          <StickySidebar theme="dark" className="border-t-0" />
          <div className="basis-full" id="checkout-body">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <CheckoutForm
                  onSubmitSuccess={() => {
                    setIsSuccess(true);
                  }}
                />
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
