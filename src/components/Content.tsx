import { FC } from "react";

import { Project } from "@/payload-types";

import CreditsBlock from "./Credits";
import FullWidthImageHeadingCaption from "./FullWidthImageHeadingCaption";
import FullWidthMedia from "./FullWidthMedia";
import IconHeadingCaptionCombo from "./IconHeadingCaptionCombo";
import QuoteBlock from "./Quote";
import Slideshow from "./Slideshow";
import ThreePanelGallery from "./ThreePanelGallery";
import TwoImageText from "./TwoImageText";

interface Props {
  content: Project["content"];
  name: string;
}

const Content: FC<Props> = ({ content, name }) => {
  return content?.map((c) => {
    if (c.blockType === "FullWidthImage") {
      return <FullWidthMedia key={c.id} media={c.image} />;
    }

    if (c.blockType === "HeadingDescription") {
      return (
        <IconHeadingCaptionCombo
          key={c.id}
          icon={c.icon}
          heading={c.heading}
          caption={c.description}
        />
      );
    }

    if (c.blockType === "ThreeImages") {
      return (
        <ThreePanelGallery
          key={c.id}
          firstImage={c.first}
          secondImage={c.second}
          thirdImage={c.third}
        />
      );
    }

    if (c.blockType === "Carousel") {
      return <Slideshow key={c.id} images={c.images} />;
    }

    if (c.blockType === "Quote") {
      return (
        <QuoteBlock
          key={c.id}
          quote={c.text}
          author={c.author}
          authorDetails={c.role}
        />
      );
    }

    if (c.blockType === "TwoImageText") {
      return <TwoImageText key={c.id} first={c.first} second={c.second} />;
    }

    if (c.blockType === "Creatives") {
      return <CreditsBlock key={c.id} title={name} creatives={c.creatives} />;
    }

    if (c.blockType === "ImageText") {
      return (
        <FullWidthImageHeadingCaption
          key={c.id}
          image={c.image}
          title={c.title}
          description={c.description}
        />
      );
    }
  });
};

export default Content;
