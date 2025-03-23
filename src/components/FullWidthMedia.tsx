import { FC } from "react";

import { getAspectRatio, isValidMedia } from "@/lib/utils";
import { type Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  media: Media | number;
}

const FullWidthMedia: FC<Props> = ({ media }) => {
  if (!isValidMedia(media)) {
    return null;
  }

  /* use original aspect ratio of image/video when width and height are defined, else use default (16:9) */
  const aspectRatio = getAspectRatio(media.width, media.height);

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{
        aspectRatio: aspectRatio ? aspectRatio : "16 / 9"
      }}
    >
      <CMSMedia media={media} className="object-contain md:object-cover" />
    </section>
  );
};

export default FullWidthMedia;
