import Link from "next/link";
import { FC } from "react";
import { FaCaretRight } from "react-icons/fa";

interface Props {
  path?: string;
}

const ReturnHomeLink: FC<Props> = ({ path }) => {
  return (
    <div className="basis-full lg:px-9">
      <div className="hidden h-full items-center sm:flex">
        {path === "/" ? (
          <div className="flex items-center gap-1">
            <FaCaretRight className="h-[28px]" />
            <span className="uppercase">HOME</span>
          </div>
        ) : (
          <Link
            href="/"
            className="flex items-center gap-1 hover:underline hover:underline-offset-2"
          >
            <FaCaretRight className="h-[28px]" />
            <span className="uppercase">BACK TO HOME</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ReturnHomeLink;
