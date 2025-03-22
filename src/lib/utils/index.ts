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

type CommonMedia = number | Media | null | undefined;

export function isValidMedia(
  media: CommonMedia | CommonMedia[]
): media is Media | Media[] {
  if (Array.isArray(media)) {
    return media.every((item) => {
      if (!item || typeof item === "number") {
        return false;
      }

      if (item.url && item.mimeType) {
        return true;
      }

      return false;
    });
  }

  if (!media || typeof media === "number") {
    return false;
  }

  if (media.url && media.mimeType) {
    return true;
  }

  return false;
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

export function isValidImage(
  image?: Media | number | null
): image is MediaWithURL {
  if (!image || typeof image === "number" || !image.url) {
    return false;
  }

  if (getMediaType(image.mimeType) !== "image") {
    return false;
  }

  return true;
}

export function getAspectRatio(width?: number | null, height?: number | null) {
  if (!width || !height) {
    return undefined;
  }

  return `${width} / ${height}`;
}
