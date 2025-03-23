import { FC, FormEvent, HTMLProps } from "react";

import { processQuestionnaire } from "@/app/(frontend)/welcome/action";
import { questionnaireSchema } from "@/app/(frontend)/welcome/schema";
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
  onSubmit: () => Promise<void>;
}

interface BrandingScaleProps {
  sliders: {
    id?: string | null;
    left: string;
    right: string;
  }[];
}

const BrandingForm: FC<BrandingFormProps> = ({
  questions,
  sliders,
  onSubmit
}) => {
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const data = Object.fromEntries(formData.entries());
      const parsedData = await questionnaireSchema.parseAsync(data);
      await processQuestionnaire(parsedData);
      onSubmit();
    } catch (error) {
      console.error(error);
      window.alert("There was an error submitting your form");
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
        />
        <SingleLineFormField
          name="contactNumber"
          label="MOBILE"
          placeholder="+63"
          required
        />
        <SingleLineFormField
          name="email"
          label="EMAIL"
          type="email"
          placeholder="name@brand.com"
          required
        />
        <SingleLineFormField
          name="brandName"
          label="BRAND NAME"
          placeholder="Official Brand Name Here"
          required
        />
        <MultiLineFormField
          name="brandDetails"
          label="ELEVATOR PITCH"
          placeholder="Your brand in 3-5 sentences"
          required
        />
        <BrandingScale sliders={sliders} />
        {questions.map((question) => (
          <MultiLineFormField
            key={question.id}
            name={question.question}
            label={question.question}
            placeholder={question.description}
            required={Boolean(question.isRequired)}
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
    <div className={cn("flex", className)}>
      <label
        htmlFor={name}
        className="flex min-h-[60px] flex-shrink-0 items-center px-3 py-2.5 text-3xl font-bold leading-none sm:text-5xl md:px-7 md:py-4 lg:min-h-[95px] lg:text-6xl xl:pl-16"
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
        className="w-full bg-transparent pt-1 font-fionas text-xl font-semibold text-simmer-yellow placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:pt-2 lg:text-5xl lg:font-normal xl:pr-16"
      />
    </div>
  );
};

const MultiLineFormField: FC<HTMLProps<HTMLInputElement>> = ({
  name,
  label,
  placeholder,
  className,
  required,
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
          {label?.concat(required ? "*" : "")}
        </span>
      </div>
      <div className="flex items-end gap-5">
        <textarea
          name={name}
          placeholder={placeholder}
          required={required}
          rows={5}
          className="w-full bg-transparent pt-1 text-2xl tracking-tight text-simmer-yellow placeholder:leading-[-0.9] placeholder:text-simmer-yellow focus:outline-none sm:text-3xl lg:text-5xl"
        />
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
