import { FC } from "react";

import { type Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  media: Media | number;
}

const FullWidthMedia: FC<Props> = ({ media }) => {
  return (
    <section className="relative aspect-video w-full overflow-hidden bg-black">
      <CMSMedia media={media} className="object-contain" />
    </section>
  );
};

export default FullWidthMedia;
