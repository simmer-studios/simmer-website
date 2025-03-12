"use client";

import { createContext, useContext, useState } from "react";

interface AnimationContextType {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | undefined>(
  undefined
);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <AnimationContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (context === undefined) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
