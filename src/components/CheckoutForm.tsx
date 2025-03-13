"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ChangeEvent, FC, HTMLProps, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import AMPERSAND from "@/assets/checkout/ampersand.svg";
import { cn } from "@/lib/utils";

import { Form, FormControl, FormField, FormItem } from "./ui/Form";

const CheckoutItemList = dynamic(() => import("./CheckoutItemList"), {
  ssr: false,
  loading: () => <p>Loading checkout item list...</p>
});

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  mobile: z.string().min(11, "Mobile number is required"),
  brand: z.string().min(1, "Brand name is required"),
  // budget: z.string().min(1, "Budget is required"),
  // orders: z.array(z.object({ serviceName: z.string(), serviceId: z.string() })),
  brandDescription: z.string().min(1, "Brand description is required"),
  referralSource: z.string().min(1, "Referral source is required")
});

const CheckoutForm: FC<HTMLProps<HTMLFormElement>> = ({
  className,
  ...props
}) => {
  const [budgetAmount, setBudgetAmount] = useState<string>("$$$$");

  const handleOnBudgetChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value.replace(/[^0-9]/g, "");
    const formattedValue = rawValue.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    setBudgetAmount(formattedValue ? `${formattedValue}` : "");
  };

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      mobile: "",
      brand: "",
      brandDescription: "",
      // budget: "",
      // orders: [],
      referralSource: ""
    }
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log(values);
  };

  return (
    <Form {...form}>
      <form
        id="checkout-form"
        className="text-simmer-white"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* full width field */}
        <div className="relative flex divide-x-2 divide-simmer-white border-b-2 border-simmer-white">
          <label
            htmlFor="name"
            className="px-5 py-3 text-3xl leading-none sm:text-5xl lg:px-7 lg:py-4 lg:text-8xl"
          >
            <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
              NAME
            </span>
          </label>
          <FormField
            control={form.control}
            name="name"
            render={({ field, fieldState }) => (
              <FormItem className="flex w-full px-5 pt-1">
                <FormControl>
                  <input
                    type="text"
                    placeholder="Name Here"
                    required
                    {...field}
                    className="bg-transparent font-fionas text-xl font-semibold placeholder:leading-[-0.9] placeholder:text-simmer-white focus:outline-none sm:text-3xl lg:text-6xl lg:font-medium"
                  />
                </FormControl>
              </FormItem>
            )}
          />
        </div>
        {/* grid 1 */}
        <div className="grid border-b-2 border-simmer-white lg:grid-cols-[1fr_40%] lg:divide-x-2 lg:divide-simmer-white">
          {/* LEFT - field list */}
          <div className="divide-y-2 divide-simmer-white">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SingleLineFormField
                      label="EMAIL"
                      type="email"
                      placeholder="name@brand.com"
                      required
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="mobile"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SingleLineFormField
                      label="MOBILE"
                      type="text"
                      defaultValue="+63"
                      {...field}
                      required
                    />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="brand"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <SingleLineFormField
                      label="BRAND"
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
              name="brandDescription"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <MultiLineFormField
                      label="REQUIRED FIELD"
                      required
                      {...field}
                      placeholder="Tell us something about your brand here."
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
                  onChange={handleOnBudgetChange}
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
        </div>
        {/* grid 2 */}
        <div className="grid lg:grid-cols-[1fr_40%] lg:divide-x-2 lg:divide-simmer-white">
          <div className="grid min-h-[60px] items-center gap-2 text-2xl leading-none sm:text-3xl lg:gap-5 lg:text-xl">
            <span className="block translate-y-0.5 border-b-2 border-simmer-white px-5 py-2.5 font-adelle-mono-flex lg:border-none lg:pb-0 lg:pt-5 lg:font-articulat lg:font-bold">
              WHERE DID YOU FIND US?
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
              className="-translate-y-16 rounded-full border-2 border-black bg-simmer-white px-10 pb-5 pt-6 font-adelle-mono text-xl text-black lg:translate-y-0"
              type="submit"
            >
              LET&apos;S GET COOKING
            </button>
          </div>
        </div>
      </form>
    </Form>
  );
};

interface SingleLineFormFieldProps {
  label: string;
}

const SingleLineFormField: FC<
  HTMLProps<HTMLInputElement> & SingleLineFormFieldProps
> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  defaultValue,
  className,
  ...props
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
        type={type}
        placeholder={placeholder}
        required={required}
        defaultValue={defaultValue}
        className="w-full bg-transparent px-5 pt-1 font-fionas text-xl font-semibold text-simmer-yellow placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:pt-2 lg:text-5xl lg:font-normal"
      />
    </div>
  );
};

const MultiLineFormField: FC<HTMLProps<HTMLInputElement>> = ({
  label,
  placeholder,
  className,
  ...props
}) => {
  return (
    <div className={cn("grid gap-2 px-5 py-5 lg:gap-5", className)}>
      <div className="">
        <span className="text-sm font-bold leading-none sm:text-lg lg:text-xl">
          {label}
        </span>
      </div>
      <textarea
        placeholder={placeholder}
        required
        rows={5}
        className="w-full bg-transparent pt-1 text-2xl tracking-tight text-simmer-yellow placeholder:leading-[-0.9] placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:text-5xl"
      />
    </div>
  );
};

export default CheckoutForm;
