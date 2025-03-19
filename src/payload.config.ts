// storage-adapter-import-placeholder
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { s3Storage } from "@payloadcms/storage-s3";
import path from "path";
import { buildConfig } from "payload";
import sharp from "sharp";
import { fileURLToPath } from "url";

import { Categories } from "./app/(payload)/collections/Categories";
import { Clients } from "./app/(payload)/collections/Clients";
import { Creatives } from "./app/(payload)/collections/Creatives";
import { Media } from "./app/(payload)/collections/Media";
import { Projects } from "./app/(payload)/collections/Projects";
import { Services } from "./app/(payload)/collections/Services";
import { Snaps } from "./app/(payload)/collections/Snaps";
import { Users } from "./app/(payload)/collections/Users";
import { About } from "./app/(payload)/globals/About";
import { BrandQuestionnaire } from "./app/(payload)/globals/BrandQuestionnaire";
import { Homepage } from "./app/(payload)/globals/Homepage";
import { Menu } from "./app/(payload)/globals/Menu";
import { SnapsGlobal } from "./app/(payload)/globals/SnapsGlobal";
import { WorksGlobal } from "./app/(payload)/globals/WorksGlobal";
import { WEBSITE_URL } from "./constants";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

const isDevelopment = process.env.NODE_ENV === "development";

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    }
  },
  serverURL: !isDevelopment ? WEBSITE_URL : undefined,
  csrf: !isDevelopment ? [WEBSITE_URL] : undefined,
  cors: !isDevelopment ? [WEBSITE_URL] : undefined,
  graphQL: {
    disable: true,
    disablePlaygroundInProduction: true
  },
  collections: [
    Projects,
    Snaps,
    Services,
    Categories,
    Creatives,
    Clients,
    Users,
    Media
  ],
  globals: [
    Homepage,
    WorksGlobal,
    SnapsGlobal,
    Menu,
    About,
    BrandQuestionnaire
  ],
  editor: lexicalEditor(),
  secret: process.env.PAYLOAD_SECRET ?? "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI ?? ""
    }
  }),
  sharp,
  upload: {
    limits: {
      fileSize: 100_000_000 // 100 MB,
    }
  },
  plugins: [
    s3Storage({
      clientUploads: true,
      collections: {
        media: true
      },
      bucket: process.env.DO_SPACE_BUCKET ?? "",
      config: {
        credentials: {
          accessKeyId: process.env.DO_SPACE_ACCESS_KEY ?? "",
          secretAccessKey: process.env.DO_SPACE_SECRET_KEY ?? ""
        },
        region: process.env.DO_SPACE_REGION ?? "",
        endpoint: process.env.DO_SPACE_ENDPOINT
      }
    })
  ]
});
