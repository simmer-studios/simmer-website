import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateUrl(value: unknown): string | true {
  if (typeof value !== "string") {
    return "Please enter a valid URL";
  }

  try {
    new URL(value);
    return true;
  } catch (e) {
    return "Please enter a valid URL";
  }
}
