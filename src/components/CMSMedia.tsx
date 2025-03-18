import Image from "next/image";
import { ComponentProps, FC, HTMLProps } from "react";

import { cn, getAspectRatio, getMediaType, isValidImage } from "@/lib/utils";
import { type Media } from "@/payload-types";

interface Props {
  media: Media | number;
  loading?: ComponentProps<typeof Image>["loading"];
}

const CMSMedia: FC<Omit<HTMLProps<HTMLElement>, "media"> & Props> = ({
  media,
  width,
  height,
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
          width={width ? Number(width) : undefined}
          height={height ? Number(height) : undefined}
          fill={width && height ? false : true}
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
          poster={media.thumbnailURL ?? "/images/img_placeholder.jpg"}
          style={{
            width: width ? Number(width) : undefined,
            height: height ? Number(height) : undefined
          }}
          className={cn(
            { "absolute h-full w-full": !width && !height },
            className
          )}
        />
      );

    default:
      return null;
  }
};

export default CMSMedia;
