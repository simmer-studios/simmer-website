import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  access: {
    read: () => true
  },
  fields: [
    {
      name: "alt",
      type: "text"
    }
  ],
  upload: {
    mimeTypes: ["image/*", "video/*"],
    disableLocalStorage: true,
    displayPreview: true
  }
};
