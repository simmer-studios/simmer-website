"use client";

import { createContext, useContext, useMemo, useState } from "react";

interface AnimationContextType {
  isPlaying: boolean;
  setIsPlaying: (value: boolean) => void;
}

const AnimationContext = createContext<AnimationContextType | null>(null);

export function AnimationProvider({ children }: { children: React.ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  const memoizedValue = useMemo(
    () => ({
      isPlaying,
      setIsPlaying
    }),
    [isPlaying]
  );

  return (
    <AnimationContext.Provider value={memoizedValue}>
      {children}
    </AnimationContext.Provider>
  );
}

export function useAnimation() {
  const context = useContext(AnimationContext);
  if (!context) {
    throw new Error("useAnimation must be used within an AnimationProvider");
  }
  return context;
}
