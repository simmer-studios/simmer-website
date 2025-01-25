"use client";

import Image from "next/image";
import Link from "next/link";

interface Props {
  slug: string;
  name: string;
  category: string;
}

const PortfolioItem: React.FC<Props> = ({ slug, name, category }) => {
  return (
    <Link
      href={`/portfolio/${slug}`}
      className="group/portfolio-item bg-simmer-white transition duration-300 ease-in-out hover:brightness-90"
    >
      <div className="relative min-h-max">
        {/* image */}
        <div className="relative aspect-square w-full overflow-hidden">
          <Image
            className="object-cover object-center transition duration-300 ease-in-out group-hover/portfolio-item:scale-110"
            src={"/images/img_placeholder.jpg"}
            alt=""
            fill
          />
        </div>
        {/* project name and category */}
        <div className="space-y-3 bg-black px-10 py-6 text-simmer-white lg:hidden">
          <p className="font-articulat text-4xl">{name}</p>
          <span className="inline-block border-[2.5px] border-simmer-white px-2 py-1 font-adelle-mono text-xs uppercase">
            {category}
          </span>
        </div>
        {/* hover info */}
        {/* <div className="absolute left-0 top-0 hidden max-h-max min-w-max max-w-max border-2 border-black bg-simmer-white p-2 text-center text-black lg:block">
          <p className="font-adelle-mono text-xl font-bold uppercase tracking-tight">
            {name}
          </p>
          <span className="text-md font-adelle-mono font-bold uppercase tracking-tight">
            {category}
          </span>
        </div> */}
      </div>
    </Link>
  );
};

export default PortfolioItem;
