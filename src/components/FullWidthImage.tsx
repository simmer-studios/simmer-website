import Image from "next/image";
import { ComponentProps, FC } from "react";

import { cn, getMediaType } from "@/lib/utils";
import { Media } from "@/payload-types";

interface Props {
  media: Media | number;
}

const FullWidthMedia: FC<Props> = ({ media }) => {
  if (
    typeof media === "number" ||
    !media.url ||
    getMediaType(media.mimeType) !== "image"
  ) {
    return null;
  }

  return (
    <section className="relative min-h-screen overflow-hidden">
      <Image
        src={media.url}
        alt={media.alt || ""}
        fill
        className="object-cover"
      />
    </section>
  );
};

export default FullWidthMedia;
