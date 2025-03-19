import Image from "next/image";
import { ComponentProps, FC, HTMLProps } from "react";

import { cn, getMediaType, isValidImage } from "@/lib/utils";
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

  const mediaType = getMediaType(media.mimeType);

  if (mediaType === "image") {
    if (!isValidImage(media)) {
      return null;
    }

    const hasWidthAndHeight = Boolean(width && height);

    return (
      <Image
        src={media.url}
        alt={media.alt ?? ""}
        loading={loading}
        width={hasWidthAndHeight ? Number(width) : undefined}
        height={hasWidthAndHeight ? Number(height) : undefined}
        fill={!hasWidthAndHeight}
        className={className}
      />
    );
  }

  if (mediaType === "video") {
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
  }

  return null;
};

export default CMSMedia;
