import { Metadata } from "next";

import { DEFAULT_METADATA_IMAGE } from "@/constants";
import { Media } from "@/payload-types";

import { isValidImage } from "./index";

interface Params {
  title: string;
  description: string;
  image?: Media | number | null;
}

export function getMetadata({ title, description, image }: Params): Metadata {
  const images = isValidImage(image)
    ? [
        {
          url: image.url,
          width: image.width ?? "",
          height: image.height ?? "",
          alt: image.alt ?? ""
        }
      ]
    : [DEFAULT_METADATA_IMAGE];

  return {
    title,
    description,
    openGraph: {
      siteName: "Simmer Studios",
      type: "website",
      title,
      description,
      images
    }
  };
}
