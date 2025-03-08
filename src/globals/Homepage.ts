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

const SERVICES_FIELDS: Field[] = [
  {
    name: "title",
    label: "Title",
    type: "text",
    required: true,
    defaultValue: "Title"
  },
  {
    name: "appetizers",
    label: "Appetizers",
    type: "relationship",
    relationTo: "services",
    hasMany: true,
    minRows: 1,
    required: true
  },
  {
    name: "mainCourse",
    label: "Main Course",
    type: "relationship",
    relationTo: "services",
    hasMany: true,
    minRows: 1,
    required: true
  },
  {
    name: "desserts",
    label: "Desserts",
    type: "relationship",
    relationTo: "services",
    hasMany: true,
    minRows: 1,
    required: true
  }
];

const ServicesSection: Field = {
  name: "services",
  label: "Services",
  type: "group",
  fields: [
    {
      name: "first",
      label: "First",
      type: "group",
      fields: SERVICES_FIELDS
    },
    {
      name: "second",
      label: "Second",
      type: "group",
      fields: SERVICES_FIELDS
    },
    {
      name: "third",
      label: "Third",
      type: "group",
      fields: SERVICES_FIELDS
    }
  ]
};

export const Homepage: GlobalConfig = {
  slug: "homepage",
  label: "Homepage",
  fields: [AboutSection, ServicesSection]
};
