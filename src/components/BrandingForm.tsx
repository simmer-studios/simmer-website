import { FC, FormEvent, HTMLProps, useState } from "react";
import { ZodError } from "zod";

import { processQuestionnaire } from "@/app/(frontend)/welcome/action";
import {
  QUESTIONNAIRE_CONFIG,
  questionnaireSchema
} from "@/app/(frontend)/welcome/schema";
import { useAnalytics } from "@/hooks/useAnalytics";
import { cn } from "@/lib/utils";

import ArrowDown from "./icons/ArrowDown";
import ScaleInput from "./ScaleInput";

interface BrandingFormProps {
  questions: {
    id?: string | null;
    question: string;
    description: string;
    isRequired?: boolean | null;
  }[];
  sliders: {
    id?: string | null;
    left: string;
    right: string;
  }[];
  onSubmit: () => void;
  onSubmitError: () => void;
  onSuccess: () => void;
}

interface BrandingScaleProps {
  sliders: {
    id?: string | null;
    left: string;
    right: string;
  }[];
}

function getErrors(
  errors: {
    path: (string | number)[];
    message: string;
  }[]
) {
  return errors.reduce(
    (acc, error) => {
      acc[String(error.path[0])] = error.message;
      return acc;
    },
    {} as Record<string, string>
  );
}

const BrandingForm: FC<BrandingFormProps> = ({
  questions,
  sliders,
  onSubmit,
  onSubmitError,
  onSuccess
}) => {
  const { captureEvent } = useAnalytics();
  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors({});

    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const parsedData = await questionnaireSchema.parseAsync(data);

      onSubmit();

      const { success, message, errors } =
        await processQuestionnaire(parsedData);

      if (success) {
        captureEvent("BRAND_QUESTIONNAIRE_SUBMITTED", {
          name: parsedData.name,
          email: parsedData.email,
          brandName: parsedData.brandName
        });
        onSuccess();
      } else {
        console.error(message, errors);
        const reducedErrors = getErrors(errors);
        setErrors(reducedErrors);
        onSubmitError();
        window.alert("You have provided invalid data. Please review the form.");
      }
    } catch (error) {
      console.error(error);
      onSubmitError();

      if (error instanceof ZodError) {
        const reducedErrors = getErrors(error.errors);
        setErrors(reducedErrors);
        window.alert("You have provided invalid data. Please review the form.");
      } else {
        window.alert(
          "There was an error submitting your form. Please try again later."
        );
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auto-fill-none">
      <div className="divide-y-2 divide-simmer-white pb-20">
        <SingleLineFormField
          name="name"
          label="NAME"
          placeholder="Name Here"
          required
          error={errors.name}
          maxLength={QUESTIONNAIRE_CONFIG.string.max}
        />
        <SingleLineFormField
          name="contactNumber"
          label="MOBILE"
          placeholder="+63"
          required
          error={errors.contactNumber}
          maxLength={QUESTIONNAIRE_CONFIG.string.max}
        />
        <SingleLineFormField
          name="email"
          label="EMAIL"
          type="email"
          placeholder="name@brand.com"
          required
          error={errors.email}
          maxLength={QUESTIONNAIRE_CONFIG.string.max}
        />
        <SingleLineFormField
          name="brandName"
          label="BRAND NAME"
          placeholder="Official Brand Name Here"
          required
          error={errors.brandName}
          maxLength={QUESTIONNAIRE_CONFIG.string.max}
        />
        <MultiLineFormField
          name="brandDetails"
          label="ELEVATOR PITCH"
          placeholder="Your brand in 3-5 sentences"
          required
          error={errors.brandDetails}
          maxLength={QUESTIONNAIRE_CONFIG.string.max}
        />
        <BrandingScale sliders={sliders} />
        {questions.map((question) => (
          <MultiLineFormField
            key={question.id}
            name={question.question}
            label={question.question}
            placeholder={question.description}
            required={Boolean(question.isRequired)}
            error={errors[question.question]}
            maxLength={QUESTIONNAIRE_CONFIG.string.max}
          />
        ))}
      </div>
      <div className="flex items-center justify-center py-20">
        <button
          className="rounded-full bg-simmer-white px-10 pb-5 pt-6 font-adelle-mono text-xl text-black hover:bg-simmer-yellow"
          type="submit"
        >
          LET&apos;S GET COOKING
        </button>
      </div>
    </form>
  );
};

interface SingleLineFormFieldProps extends HTMLProps<HTMLInputElement> {
  label: string;
  error?: string;
}

interface MultiLineFormFieldProps extends HTMLProps<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const SingleLineFormField: FC<SingleLineFormFieldProps> = ({
  name,
  label,
  placeholder,
  type = "text",
  required = false,
  defaultValue,
  className,
  error,
  ...props
}) => {
  return (
    <div className={cn("flex flex-col", className)}>
      <div className="px-3 pt-2 md:px-7 md:pt-3 xl:pl-16">
        <span className="text-sm font-bold leading-none text-red-600 sm:text-lg lg:text-xl">
          {error}
        </span>
      </div>
      <div className="flex items-center md:items-end">
        <label
          htmlFor={name}
          className="mt-[-8px] flex min-h-[50px] flex-shrink-0 items-center px-3 py-2.5 text-3xl font-bold leading-none sm:text-5xl md:mt-[-12px] md:px-7 md:py-0 lg:min-h-[95px] lg:text-6xl xl:pl-16"
        >
          <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
            {label.concat(required ? "*" : "")}
          </span>
        </label>
        <input
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className="w-full bg-transparent pt-1 font-fionas text-xl font-semibold text-simmer-yellow placeholder:text-simmer-yellow/60 focus:outline-none sm:text-3xl lg:py-2 lg:text-5xl lg:font-normal xl:pr-16"
          {...props}
        />
      </div>
    </div>
  );
};

const MultiLineFormField: FC<MultiLineFormFieldProps> = ({
  name,
  label,
  placeholder,
  className,
  required,
  error,
  ...props
}) => {
  return (
    <div
      className={cn(
        "grid gap-2 px-3 pb-4 pt-2.5 md:gap-5 md:px-7 md:py-4 xl:px-16",
        className
      )}
    >
      <div className="pt-2">
        <span className="text-sm font-bold leading-none sm:text-lg lg:text-xl">
          {label.concat(required ? "*" : "")}
        </span>
      </div>
      <div className="flex items-end gap-5">
        <div className="w-full">
          <textarea
            name={name}
            placeholder={placeholder}
            required={required}
            rows={5}
            className="w-full bg-transparent pt-1 text-2xl tracking-tight text-simmer-yellow placeholder:leading-[-0.9] placeholder:text-simmer-yellow/60 focus:outline-none sm:text-3xl lg:text-5xl"
            {...props}
          />
          {error && (
            <span className="text-sm font-bold leading-none text-red-600 sm:text-lg lg:text-xl">
              {error}
            </span>
          )}
        </div>
        <ArrowDown className="fill-simmer-white" />
      </div>
    </div>
  );
};

const BrandingScale: FC<BrandingScaleProps> = ({ sliders }) => {
  return (
    <div>
      <div className="flex min-h-[60px] flex-shrink-0 items-center border-b-2 border-simmer-white px-3 py-2.5 text-3xl font-bold leading-none sm:text-5xl md:px-7 md:py-4 lg:min-h-[95px] lg:text-6xl xl:px-16">
        <span className="inline-block translate-y-0.5 font-adelle-mono-flex">
          BRANDING SCALE
        </span>
      </div>
      <div className="space-y-10 px-7 py-5 md:px-16 md:py-10 xl:px-24 xl:py-16">
        {sliders.map((slider) => {
          const name = `Attribute:${slider.left}-${slider.right}`;
          return (
            <ScaleInput
              name={name}
              key={slider.id}
              leftLabel={slider.left}
              rightLabel={slider.right}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BrandingForm;
