import MemberCard from "@/components/MemberCard";
import { cn } from "@/lib/utils";
import { FC, HTMLProps } from "react";

const MemberCards: FC<HTMLProps<HTMLDivElement>> = ({
  className,
  ...props
}) => {
  return (
    <section className={cn("space-y-10", className)} {...props}>
      <div className="container px-8">
        <h2 className="text-center font-adelle-mono text-7xl font-bold tracking-tighter lg:text-[clamp(1rem,8.5vw,160px)]">
          FLIP.ME — &#91;OVER&#93;
        </h2>
      </div>
      <div className="container grid grid-cols-2 gap-x-4 gap-y-6 px-8 sm:grid-cols-3 md:gap-x-8 md:gap-y-12 lg:grid-cols-4">
        <MemberCard
          name="RK"
          role="Head Chef"
          avatar="/images/sample_avatar-dimsum.svg"
          number={1}
        />
        <MemberCard
          name="SJ"
          role="Head Chef"
          avatar="/images/sample_avatar-dimsum.svg"
          number={2}
        />
        <MemberCard
          name="MICA"
          role="Jr. Art Director"
          avatar="/images/sample_avatar-dimsum.svg"
          number={3}
        />
        <MemberCard
          name="MOLIN"
          role="Hybrid Chef"
          avatar="/images/sample_avatar-dimsum.svg"
          number={4}
        />
        <MemberCard
          name="CHESCA"
          role="Writer & Strategist"
          avatar="/images/sample_avatar-dimsum.svg"
          number={5}
        />
      </div>
      <div className="flex items-center justify-center lg:hidden">
        <button className="rounded-full border-2 border-black bg-simmer-white px-7 py-1 active:bg-simmer-yellow">
          <span className="inline-block pt-1 font-adelle-mono">LOAD MORE</span>
        </button>
      </div>
    </section>
  );
};

export default MemberCards;
