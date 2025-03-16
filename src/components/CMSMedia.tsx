import Image from "next/image";
import { ComponentProps, FC, HTMLProps } from "react";

import { getMediaType, isValidImage } from "@/lib/utils";
import { type Media } from "@/payload-types";

interface Props {
  media: Media | number;
  loading?: ComponentProps<typeof Image>["loading"];
}

const CMSMedia: FC<Omit<HTMLProps<HTMLElement>, "media"> & Props> = ({
  media,
  loading,
  className,
  ...props
}) => {
  if (typeof media === "number" || !media.url || !media.mimeType) {
    return null;
  }

  switch (getMediaType(media.mimeType)) {
    case "image":
      if (!isValidImage(media)) {
        return null;
      }

      return (
        <Image
          src={media.url}
          alt={media.alt || ""}
          loading={loading}
          fill
          className={className}
        />
      );

    case "video":
      return (
        <video
          src={media.url}
          autoPlay
          loop
          muted
          controls={props.controls ?? true}
          poster="/images/img_placeholder.jpg"
          className={className}
        />
      );

    default:
      return null;
  }
};

export default CMSMedia;
