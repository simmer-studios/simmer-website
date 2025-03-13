import type { CollectionConfig } from "payload";

export const Services: CollectionConfig = {
  slug: "services",
  admin: {
    useAsTitle: "name"
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
      unique: true
    },
    {
      name: "description",
      type: "textarea"
    },
    {
      name: "linkTo",
      label: "Link to",
      type: "radio",
      options: [
        {
          label: "None",
          value: "none"
        },
        {
          label: "Snap",
          value: "snap"
        },
        {
          label: "Simmer Stories",
          value: "stories"
        }
      ]
    }
  ]
};
