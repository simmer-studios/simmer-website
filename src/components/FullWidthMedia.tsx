import { FC } from "react";

import { type Media } from "@/payload-types";

import CMSMedia from "./CMSMedia";

interface Props {
  media: Media | number;
}

const FullWidthMedia: FC<Props> = ({ media }) => {
  return (
    <section className="relative min-h-dvh overflow-hidden">
      <CMSMedia media={media} className="absolute h-full w-full object-cover" />
    </section>
  );
};

export default FullWidthMedia;
