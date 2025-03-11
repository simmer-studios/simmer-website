"use client";

import { useEffect, useState } from "react";

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
      <div className="relative h-32 w-32">
        <div className="absolute h-full w-full animate-[spin_1s_linear_infinite] rounded-full border-4 border-t-4 border-black border-t-transparent"></div>
        <div className="absolute h-full w-full animate-[spin_4.5s_linear_infinite] rounded-full border-4 border-l-4 border-black border-l-transparent"></div>
        <div className="absolute h-full w-full animate-[spin_1.5s_linear_infinite] rounded-full border-4 border-r-4 border-black border-r-transparent"></div>
      </div>
    </div>
  );
}
