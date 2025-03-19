import { Field } from "payload";

export const SEOField: Field = {
  name: "seo",
  label: "SEO",
  type: "group",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: "Default title. Please replace.",
      maxLength: 60
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      defaultValue: "Default description. Please replace.",
      maxLength: 160
    },
    {
      name: "image",
      type: "upload",
      admin: {
        description:
          "Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media."
      },
      relationTo: "media",
      filterOptions: {
        mimeType: {
          contains: "image"
        }
      }
    }
  ]
};
