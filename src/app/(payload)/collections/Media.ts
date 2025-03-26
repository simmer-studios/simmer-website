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
    displayPreview: true,
    adminThumbnail: "square",
    imageSizes: [
      {
        name: "square",
        width: 500,
        height: 500,
        fit: "cover",
        withoutEnlargement: true,
        generateImageName: ({ originalName, sizeName, extension }) => {
          return `${originalName}-${sizeName}.${extension}`;
        }
      },
      {
        name: "landscape",
        width: 1080,
        height: 1920,
        fit: "cover",
        withoutEnlargement: true,
        generateImageName: ({ originalName, sizeName, extension }) => {
          return `${originalName}-${sizeName}.${extension}`;
        }
      }
    ]
  }
};
