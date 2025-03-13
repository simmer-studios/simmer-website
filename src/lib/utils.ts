import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

import { Media } from "@/payload-types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function validateUrl(value: unknown): string | true {
  if (!value) {
    return true;
  }

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

export function getMediaType(mimeType: Media["mimeType"]) {
  if (mimeType?.startsWith("image")) {
    return "image";
  }

  if (mimeType?.startsWith("video")) {
    return "video";
  }

  return null;
}

interface MediaWithURL extends Media {
  url: string;
}

export function isValidImage(image?: Media | number): image is MediaWithURL {
  if (!image || typeof image === "number" || !image.url) {
    return false;
  }

  if (getMediaType(image.mimeType) !== "image") {
    return false;
  }

  return true;
}
