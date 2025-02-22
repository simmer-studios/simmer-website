import { Field, GlobalConfig } from "payload";

const AboutSection: Field = {
  name: "about",
  label: "About",
  type: "group",
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
      required: true
    }
  ]
};

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  fields: [AboutSection]
};
