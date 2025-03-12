"use client";

import { useEffect, useState } from "react";

import LandingPageLG from "./components/LandingPageLG";
import LandingPageSM from "./components/LandingPageSM";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoading(false);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-simmer-white transition-transform duration-1000 ${
        !isLoading ? "-translate-y-full" : ""
      }`}
    >
      {/* <LandingPageLG /> */}
      {/* <LandingPageSM /> */}
    </div>
  );
}
