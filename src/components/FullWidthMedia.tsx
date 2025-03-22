import { FC } from "react";

import { type Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  media: Media | number;
}

const FullWidthMedia: FC<Props> = ({ media }) => {
  return (
    <section className="relative aspect-video w-full overflow-hidden">
      <CMSMedia media={media} className="object-cover" />
    </section>
  );
};

export default FullWidthMedia;
