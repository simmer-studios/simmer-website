import { FC, HTMLProps } from "react";

import MemberCard from "@/components/MemberCard";
import { cn } from "@/lib/utils";
import { Media } from "@/payload-types";

interface Props {
  members: Array<{
    id: string;
    name: string;
    role: string;
    avatar: Media;
    photo: Media;
    catchPhrase: string;
  }>;
}

const MemberCards: FC<HTMLProps<HTMLDivElement> & Props> = ({
  members,
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
        {members &&
          members.map(
            ({ id, name, role, avatar, photo, catchPhrase }, index) => (
              <MemberCard
                key={id}
                name={name}
                role={role}
                avatar={avatar}
                photo={photo}
                catchPhrase={catchPhrase}
                number={index + 1}
              />
            )
          )}
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
