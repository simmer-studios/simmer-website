import Image from "next/image";

import LandingPageIMG from "@/assets/home/Landing-page-SM.png";

export default function LandingPageSM() {
  return (
    <div className="h-screen w-screen md:hidden">
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
