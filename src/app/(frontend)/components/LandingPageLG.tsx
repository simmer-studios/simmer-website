import Image from "next/image";

import LandingPageIMG from "@/assets/home/Landing-page-LG.png";

export default function LandingPageLG() {
  return (
    <div className="hidden h-screen w-screen md:block">
      <Image
        src={LandingPageIMG}
        alt="Loading"
        fill
        className="object-contain"
        priority
      />
    </div>
  );
}
