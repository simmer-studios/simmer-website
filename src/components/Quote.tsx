import { FC, HTMLProps } from "react";

import { cn } from "@/lib/utils";

interface Props {
  quote: string;
  author: string;
  authorDetails: string;
}

const QuoteBlock: FC<HTMLProps<HTMLDivElement> & Props> = ({
  quote,
  author,
  authorDetails,
  className,
  ...props
}) => {
  return (
    <section
      className={cn("w-full px-10 font-articulat", className)}
      {...props}
    >
      <div className="container space-y-4 text-center lg:space-y-8">
        <h2 className="mx-auto max-w-[826px] text-pretty text-2xl font-bold lg:text-5xl">
          “{quote}”
        </h2>
        <div className="lg:space-y-1">
          <p className="text-xl font-semibold lg:text-2xl">{author}</p>
          <span className="block font-bold uppercase tracking-widest text-black/50">
            {authorDetails}
          </span>
        </div>
      </div>
    </section>
  );
};

export default QuoteBlock;
