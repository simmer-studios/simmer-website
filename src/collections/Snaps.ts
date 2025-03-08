import type { CollectionConfig } from "payload";

import { Carousel } from "@/blocks/Carousel";
import { Creatives } from "@/blocks/Creatives";
import { FullWidthImage } from "@/blocks/FullWidthImage";
import { ImageText } from "@/blocks/ImageText";
import { Quote } from "@/blocks/Quote";
import { ThreeImages } from "@/blocks/ThreeImages";
import { TwoImageText } from "@/blocks/TwoImageText";

export const Snaps: CollectionConfig = {
  slug: "snaps",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      type: "row",
      fields: [
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Square image"
          }
        },
        {
          name: "cover",
          label: "Cover Image",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: {
            description: "Landscape image"
          }
        }
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "name",
          type: "text",
          required: true
        },
        {
          name: "slug",
          type: "text",
          required: true,
          validate: (value: unknown) => {
            const matcher = /[a-zA-Z\-_0-9]+/;
            if (typeof value !== "string" || !matcher.test(value)) {
              return "Please enter a valid slug";
            } else {
              return true;
            }
          },
          admin: {
            width: "50%",
            description:
              "URL-friendly name of the project. No spaces or special characters e.g. simmer-studios"
          }
        }
      ]
    },
    {
      type: "row",
      fields: [
        {
          name: "brand",
          type: "text",
          required: true
        },
        {
          name: "project",
          type: "text",
          required: true
        },
        {
          name: "year",
          type: "number",
          required: true
        }
      ]
    },
    {
      name: "description",
      type: "textarea",
      required: true
    },
    {
      name: "featuredServices",
      label: "Featured Services",
      type: "text",
      required: true
    },
    {
      name: "services",
      type: "relationship",
      relationTo: "services",
      hasMany: true,
      required: true,
      admin: {
        description: "Select all applicable services to this project"
      }
    },
    {
      name: "websiteUrl",
      label: "Website URL",
      type: "text",
      validate: (value: unknown) => {
        if (typeof value !== "string") {
          return "Please enter a valid URL";
        }

        try {
          new URL(value);
          return true;
        } catch (e) {
          return "Please enter a valid URL";
        }
      },
      admin: {
        width: "50%"
      }
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        FullWidthImage,
        ImageText,
        TwoImageText,
        ThreeImages,
        Carousel,
        Quote,
        Creatives
      ]
    }
  ]
};
