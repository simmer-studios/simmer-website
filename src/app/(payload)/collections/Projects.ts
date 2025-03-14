import type { CollectionConfig } from "payload";

import { Carousel } from "@/app/(payload)/blocks/Carousel";
import { Creatives } from "@/app/(payload)/blocks/Creatives";
import { FullWidthMedia } from "@/app/(payload)/blocks/FullWidthMedia";
import { ImageText } from "@/app/(payload)/blocks/ImageText";
import { Quote } from "@/app/(payload)/blocks/Quote";
import { ThreeImages } from "@/app/(payload)/blocks/ThreeImages";
import { TwoImageText } from "@/app/(payload)/blocks/TwoImageText";
import { validateUrl } from "@/lib/utils";

import { HeadingDescription } from "../blocks/HeadingDescription";

export const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "name",
    preview: ({ slug }) => `/works/${slug}`,
    livePreview: {
      url: ({ data }) => `/works/${data.slug}`
    }
  },
  fields: [
    {
      type: "checkbox",
      name: "featured",
      label: "Featured",
      required: true,
      defaultValue: false,
      admin: {
        width: "50%",
        description:
          "Only two features projects will be displayed on the works page"
      }
    },
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
            const matcher = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
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
          name: "date",
          type: "date",
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
      name: "categories",
      type: "relationship",
      relationTo: "categories",
      hasMany: true,
      required: true,
      admin: {
        description:
          "Select the categories this Project will show up on when filtered"
      }
    },
    {
      name: "websiteUrl",
      label: "Link to their website or social media",
      type: "text",
      validate: validateUrl,
      admin: {
        width: "50%"
      }
    },
    {
      name: "content",
      type: "blocks",
      blocks: [
        FullWidthMedia,
        HeadingDescription,
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
