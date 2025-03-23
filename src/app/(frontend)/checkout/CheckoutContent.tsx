"use client";

import { AnimatePresence } from "motion/react";
import { useState } from "react";

import CheckoutForm from "@/components/CheckoutForm";
import CheckoutSuccess from "@/components/sections/checkout/CheckoutSuccess";

export const CheckoutContent = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  return (
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
  );
};
