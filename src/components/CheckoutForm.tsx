"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AnimatePresence, motion } from "motion/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { FC, HTMLProps, useEffect, useState } from "react";
import { FieldError, useForm } from "react-hook-form";

import { processCheckout } from "@/app/(frontend)/checkout/action";
import { CheckoutData, checkoutSchema } from "@/app/(frontend)/checkout/schema";
import AMPERSAND from "@/assets/checkout/ampersand.svg";
import CheckoutHeaderLG from "@/components/sections/checkout/CheckoutHeaderLG";
import CheckoutHeaderSM from "@/components/sections/checkout/CheckoutHeaderSM";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormField, FormItem } from "./ui/Form";

interface CheckoutFormProps {
  onSubmitSuccess: () => void;
}

const CheckoutItemList = dynamic(() => import("./CheckoutItemList"), {
  ssr: false,
  loading: () => <p>Loading checkout item list...</p>
});

const CheckoutForm = ({ onSubmitSuccess }: CheckoutFormProps) => {
  const [budgetAmount, setBudgetAmount] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { items, isDiscounted, clearCart } = useCart();

  const form = useForm<CheckoutData>({
    mode: "onTouched",
    resolver: zodResolver(checkoutSchema),
    defaultValues: {
      name: "",
      email: "",
      contactNumber: "+63",
      brandName: "",
      brandDetails: "",
      budget: "",
      referralSource: "",
      orders: [],
      isDiscounted: false
    }
  });

  // Sync the orders field with the items in the cart
  useEffect(() => {
    form.setValue("orders", items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [items]);

  // Sync the isDiscounted field with the isDiscounted state
  useEffect(() => {
    form.setValue("isDiscounted", isDiscounted);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDiscounted]);

  useEffect(() => {
    if (isSubmitting) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [isSubmitting]);

  const getFormattedBudget = (value: string) => {
    const rawValue = value.replace(/[^0-9]/g, "");
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return formattedValue ?? "";
  };

  // Only called if the form data is valid
  const handleSubmit = async (data: CheckoutData) => {
    setIsSubmitting(true);
    const { success, message, errors } = await processCheckout(data);
    if (success) {
      clearCart();
      onSubmitSuccess();
    } else {
      console.error(message, errors);
    }
    setIsSubmitting(false);
  };

  const formAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const containerAnimation = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  return (
    <div className="relative min-h-screen">
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

      <CheckoutHeaderSM className="flex lg:hidden" />
      <CheckoutHeaderLG className="hidden lg:flex" />
      <Form {...form}>
        <motion.form
          initial="hidden"
          animate="visible"
          variants={containerAnimation}
          className="auto-fill-none text-simmer-white"
          onSubmit={form.handleSubmit(handleSubmit, (errors) => {
            console.error(errors);
          })}
        >
          {/* full width field */}
          <motion.div
            variants={formAnimation}
            className="relative flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white"
          >
            <label
              htmlFor="name"
              className="px-5 py-3 text-3xl leading-none sm:text-5xl lg:px-7 lg:py-4 lg:text-8xl"
            >
              <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
                NAME*
              </span>
            </label>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem className="flex w-full">
                  <FormControl>
                    <input
                      {...field}
                      type="text"
                      placeholder="Name Here"
                      required
                      className="w-full bg-transparent px-5 pt-1 font-fionas text-xl font-semibold placeholder:leading-[-0.9] placeholder:text-simmer-white focus:outline-none sm:text-3xl lg:text-6xl lg:font-medium"
                    />
                  </FormControl>
                </FormItem>
              )}
            />
          </motion.div>
          {/* grid 1 */}
          <motion.div
            variants={formAnimation}
            className="grid border-b-2 border-simmer-white lg:grid-cols-[1fr_40%] lg:divide-x-2 lg:divide-simmer-white"
          >
            {/* LEFT - field list */}
            <div className="divide-y-2 divide-simmer-white">
              <FormField
                control={form.control}
                name="email"
                render={({ field, fieldState }) => (
                  <FormItem>
                    <FormControl>
                      <SingleLineFormField
                        {...field}
                        label="EMAIL*"
                        type="email"
                        placeholder="name@brand.com"
                        error={fieldState.error}
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="contactNumber"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SingleLineFormField
                        {...field}
                        label="MOBILE*"
                        type="text"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brandName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <SingleLineFormField
                        {...field}
                        label="BRAND*"
                        type="text"
                        placeholder="What's your brand name/field?"
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem className="block lg:hidden">
                    <FormControl>
                      <SingleLineFormField
                        {...field}
                        label="BUDGET"
                        type="text"
                        value={budgetAmount}
                        placeholder="How much is your budget?"
                        onChange={(event) => {
                          const formattedValue = getFormattedBudget(
                            event.currentTarget.value
                          );
                          form.setValue("budget", formattedValue);
                          setBudgetAmount(formattedValue);
                        }}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="brandDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <MultiLineFormField
                        {...field}
                        label="BRAND DETAILS*"
                        placeholder="Tell us something about your brand here."
                        required
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            {/* RIGHT - order list */}
            <div className="flex flex-col border-t-2 border-simmer-white pb-20 lg:border-t-0 lg:pb-0">
              <div className="relative hidden h-[calc(62px*2)] border-b-2 border-simmer-white bg-simmer-yellow lg:flex lg:h-[calc(97px*2)] lg:grid-cols-[auto_1fr] lg:gap-4 lg:p-[0_20px_0px_50px] lg:py-5">
                <span className="inline-block font-adelle-mono font-bold lg:text-2xl xl:text-3xl">
                  BUDGET
                </span>
                <div className="flex max-w-[70%] items-center pt-5">
                  <input
                    type="text"
                    name="budget"
                    className="flex w-full bg-transparent font-fionas text-9xl text-simmer-white placeholder:text-simmer-white focus:outline-none"
                    placeholder="$$$$"
                    value={budgetAmount}
                    onChange={(event) => {
                      const formattedValue = getFormattedBudget(
                        event.currentTarget.value
                      );
                      form.setValue("budget", formattedValue);
                      setBudgetAmount(formattedValue);
                    }}
                  />
                </div>
                <Image
                  src={AMPERSAND}
                  alt=""
                  className="absolute -left-12 top-[50%] translate-y-[-50%]"
                />
              </div>
              <div className="flex min-h-[60px] items-center px-5 py-2.5 text-2xl leading-none sm:text-3xl lg:min-h-[95px] lg:text-6xl">
                <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
                  ORDERS
                </span>
              </div>
              <CheckoutItemList />
            </div>
          </motion.div>
          {/* grid 2 */}
          <motion.div
            variants={formAnimation}
            className="grid lg:grid-cols-[1fr_40%] lg:divide-x-2 lg:divide-simmer-white"
          >
            <div className="grid min-h-[60px] items-center gap-2 text-2xl leading-none sm:text-3xl lg:gap-5 lg:text-xl">
              <span className="block translate-y-0.5 border-b-2 border-simmer-white px-5 py-2.5 font-adelle-mono-flex lg:border-none lg:pb-0 lg:pt-5 lg:font-articulat lg:font-bold">
                WHERE DID YOU FIND US?*
              </span>
              <div className="px-5 pb-16">
                <FormField
                  control={form.control}
                  name="referralSource"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <textarea
                          placeholder="How did you hear about Simmer?"
                          required
                          rows={5}
                          {...field}
                          className="w-full bg-transparent py-2.5 text-2xl tracking-tight text-simmer-yellow placeholder:leading-[-0.9] placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:text-5xl"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
            <div className="flex items-center justify-center bg-simmer-white py-5 lg:bg-black">
              <button
                className="-translate-y-16 rounded-full border-2 border-black bg-simmer-white px-10 pb-5 pt-6 font-adelle-mono text-xl text-black hover:border-simmer-white hover:bg-black hover:text-simmer-white lg:translate-y-0"
                type="submit"
                disabled={isSubmitting}
              >
                LET&apos;S GET COOKING
              </button>
            </div>
          </motion.div>
        </motion.form>
      </Form>
    </div>
  );
};

interface SingleLineFormFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: FieldError | null;
}

const SingleLineFormField: FC<SingleLineFormFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  value,
  error,
  className,
  onChange
}) => {
  return (
    <div className={cn("flex divide-x-2 divide-simmer-white", className)}>
      <label
        htmlFor={name}
        className="flex min-h-[60px] items-center px-5 py-2.5 text-3xl leading-none sm:text-5xl lg:min-h-[95px] lg:px-7 lg:py-4 lg:text-6xl lg:font-bold"
      >
        <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
          {label}
        </span>
      </label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        className={cn(
          "w-full bg-transparent px-5 pt-1 font-fionas text-xl font-semibold text-simmer-yellow placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:pt-2 lg:text-5xl lg:font-normal",
          {
            "text-red-500": error
          }
        )}
      />
    </div>
  );
};

interface MultiLineFormFieldProps extends HTMLProps<HTMLTextAreaElement> {
  error?: FieldError | null;
}

const MultiLineFormField: FC<MultiLineFormFieldProps> = ({
  name,
  label,
  placeholder,
  required,
  value,
  error,
  className,
  onChange
}) => {
  return (
    <div className={cn("grid gap-2 px-5 py-5 lg:gap-5", className)}>
      <div className="">
        <span className="text-sm font-bold leading-none sm:text-lg lg:text-xl">
          {label}
        </span>
      </div>
      <textarea
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        className={cn(
          "w-full bg-transparent pt-1 text-2xl tracking-tight text-simmer-yellow placeholder:leading-[-0.9] placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:text-5xl",
          {
            "text-red-500": error
          }
        )}
      />
    </div>
  );
};

export default CheckoutForm;
