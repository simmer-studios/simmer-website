import { Field, GlobalConfig } from "payload";

const FIELDS: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true
  },
  {
    name: "heading",
    label: "Heading",
    type: "text",
    required: true
  },
  {
    name: "description",
    label: "Description",
    type: "textarea",
    required: true
  },
  {
    name: "services",
    label: "Services",
    type: "relationship",
    relationTo: "services",
    hasMany: true,
    required: true
  }
];

export const Menu: GlobalConfig = {
  slug: "menu",
  label: "Menu",
  fields: [
    {
      name: "strategy",
      label: "Strategy",
      type: "group",
      fields: FIELDS
    },
    {
      name: "identity",
      label: "Identity",
      type: "group",
      fields: FIELDS
    },
    {
      name: "executions",
      label: "Executions",
      type: "group",
      fields: FIELDS
    },
    {
      name: "chefsChoice",
      label: "Chef's Choice",
      type: "group",
      fields: [
        {
          name: "description",
          label: "Description",
          type: "textarea",
          required: true
        }
      ]
    }
  ]
};
