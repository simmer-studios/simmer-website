"use client";

import Image from "next/image";
import { FC, useEffect, useState } from "react";

const secretWord = "Simmering Ideas";

interface Props {
  hasRevealed: () => void;
}

const MagicInput: FC<Props> = ({ hasRevealed }) => {
  const [revealedText, setRevealedText] = useState<string>("");

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const commandKeys = ["Control", "Alt", "Meta", "Shift"];

    if (commandKeys.includes(event.key)) {
      // Allow command keys to pass through
      return;
    }

    if (event.key === "Backspace") {
      event.preventDefault();
      // Remove the last character on Backspace
      setRevealedText(revealedText.slice(0, -1));
      return;
    }

    event.preventDefault();

    if (revealedText.length < secretWord.length) {
      setRevealedText(secretWord.slice(0, revealedText.length + 1));
    }
  };

  useEffect(() => {
    if (revealedText === secretWord) {
      hasRevealed();
    }
  }, [revealedText, hasRevealed]);

  return (
    <div className="relative overflow-hidden rounded-xl border-2 border-black lg:rounded-3xl xl:rounded-[3rem]">
      <input
        type="text"
        value={revealedText}
        onKeyDown={handleKeyDown}
        onChange={() => {}} // Prevent user from manually editing
        className="min-w-[500px]:text-6xl placeholder:-leading-[0.7] w-full bg-simmer-white px-3 py-4 font-fionas text-4xl font-medium placeholder:text-black focus:outline-none sm:px-6 sm:py-5 sm:text-5xl md:px-8 md:py-6 md:text-6xl lg:px-9 lg:py-7 lg:text-8xl xl:px-11 xl:text-9xl"
        placeholder="Click"
      />
      <div className="absolute bottom-[50%] right-2 top-[50%] z-10 aspect-square h-16 -translate-y-[50%] sm:h-20 md:h-24 lg:h-32 xl:h-36">
        <Image
          src="/images/img_sauce-bottles.svg"
          alt="Sauce Bottles"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default MagicInput;
