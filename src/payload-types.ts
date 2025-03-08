/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    projects: Project;
    services: Service;
    'service-categories': ServiceCategory;
    creatives: Creative;
    users: User;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    'service-categories': ServiceCategoriesSelect<false> | ServiceCategoriesSelect<true>;
    creatives: CreativesSelect<false> | CreativesSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    media: MediaSelect<false> | MediaSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: number;
  };
  globals: {
    homepage: Homepage;
  };
  globalsSelect: {
    homepage: HomepageSelect<false> | HomepageSelect<true>;
  };
  locale: null;
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects".
 */
export interface Project {
  id: number;
  /**
   * Only two features projects will be displayed on the works page
   */
  featured: boolean;
  /**
   * Square image
   */
  thumbnail: number | Media;
  /**
   * Landscape image
   */
  cover: number | Media;
  name: string;
  /**
   * URL-friendly name of the project. No spaces or special characters e.g. simmer-studios
   */
  slug: string;
  brand: string;
  project: string;
  year: number;
  description: string;
  featuredServices: string;
  /**
   * Select all applicable services to this project
   */
  services: (number | Service)[];
  websiteUrl?: string | null;
  content?:
    | (
        | {
            /**
             * Landscape image
             */
            image: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'FullWidthImage';
          }
        | {
            /**
             * Square image
             */
            image: number | Media;
            title: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'ImageText';
          }
        | {
            first: {
              /**
               * Square image
               */
              image: number | Media;
              title: string;
              description: string;
            };
            second: {
              /**
               * Square image
               */
              image: number | Media;
              title: string;
              description: string;
            };
            id?: string | null;
            blockName?: string | null;
            blockType: 'TwoImageText';
          }
        | {
            /**
             * Square image
             */
            first: number | Media;
            /**
             * Square image
             */
            second: number | Media;
            /**
             * Square image
             */
            third: number | Media;
            id?: string | null;
            blockName?: string | null;
            blockType: 'ThreeImages';
          }
        | {
            images: (number | Media)[];
            id?: string | null;
            blockName?: string | null;
            blockType: 'Carousel';
          }
        | {
            text: string;
            author: string;
            role?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'Quote';
          }
        | {
            name: string;
            role: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'Creatives';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media".
 */
export interface Media {
  id: number;
  alt?: string | null;
  updatedAt: string;
  createdAt: string;
  url?: string | null;
  thumbnailURL?: string | null;
  filename?: string | null;
  mimeType?: string | null;
  filesize?: number | null;
  width?: number | null;
  height?: number | null;
  focalX?: number | null;
  focalY?: number | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number;
  name: string;
  description?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories".
 */
export interface ServiceCategory {
  id: number;
  name: string;
  services?: (number | Service)[] | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "creatives".
 */
export interface Creative {
  id: number;
  /**
   * Order of the creative in the list
   */
  order?: number | null;
  name: string;
  role: string;
  tagline: string;
  /**
   * Portrait image of the creative
   */
  image: number | Media;
  /**
   * Fun artwork that represents the creative
   */
  avatar?: (number | null) | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: number;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: number;
  document?:
    | ({
        relationTo: 'projects';
        value: number | Project;
      } | null)
    | ({
        relationTo: 'services';
        value: number | Service;
      } | null)
    | ({
        relationTo: 'service-categories';
        value: number | ServiceCategory;
      } | null)
    | ({
        relationTo: 'creatives';
        value: number | Creative;
      } | null)
    | ({
        relationTo: 'users';
        value: number | User;
      } | null)
    | ({
        relationTo: 'media';
        value: number | Media;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: number;
  user: {
    relationTo: 'users';
    value: number | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: number;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "projects_select".
 */
export interface ProjectsSelect<T extends boolean = true> {
  featured?: T;
  thumbnail?: T;
  cover?: T;
  name?: T;
  slug?: T;
  brand?: T;
  project?: T;
  year?: T;
  description?: T;
  featuredServices?: T;
  services?: T;
  websiteUrl?: T;
  content?:
    | T
    | {
        FullWidthImage?:
          | T
          | {
              image?: T;
              id?: T;
              blockName?: T;
            };
        ImageText?:
          | T
          | {
              image?: T;
              title?: T;
              description?: T;
              id?: T;
              blockName?: T;
            };
        TwoImageText?:
          | T
          | {
              first?:
                | T
                | {
                    image?: T;
                    title?: T;
                    description?: T;
                  };
              second?:
                | T
                | {
                    image?: T;
                    title?: T;
                    description?: T;
                  };
              id?: T;
              blockName?: T;
            };
        ThreeImages?:
          | T
          | {
              first?: T;
              second?: T;
              third?: T;
              id?: T;
              blockName?: T;
            };
        Carousel?:
          | T
          | {
              images?: T;
              id?: T;
              blockName?: T;
            };
        Quote?:
          | T
          | {
              text?: T;
              author?: T;
              role?: T;
              id?: T;
              blockName?: T;
            };
        Creatives?:
          | T
          | {
              name?: T;
              role?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services_select".
 */
export interface ServicesSelect<T extends boolean = true> {
  name?: T;
  description?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "service-categories_select".
 */
export interface ServiceCategoriesSelect<T extends boolean = true> {
  name?: T;
  services?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "creatives_select".
 */
export interface CreativesSelect<T extends boolean = true> {
  order?: T;
  name?: T;
  role?: T;
  tagline?: T;
  image?: T;
  avatar?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "media_select".
 */
export interface MediaSelect<T extends boolean = true> {
  alt?: T;
  updatedAt?: T;
  createdAt?: T;
  url?: T;
  thumbnailURL?: T;
  filename?: T;
  mimeType?: T;
  filesize?: T;
  width?: T;
  height?: T;
  focalX?: T;
  focalY?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage".
 */
export interface Homepage {
  id: number;
  intro: {
    first: {
      title: string;
      heading: string;
      description: string;
    };
    second: {
      title: string;
      heading: string;
      description: string;
    };
    third: {
      title: string;
      heading: string;
      description: string;
    };
    fourth: {
      title: string;
      heading: string;
      description: string;
    };
  };
  services: {
    first: {
      title: string;
      appetizers: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      mainCourse: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      desserts: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
    };
    second: {
      title: string;
      appetizers: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      mainCourse: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      desserts: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
    };
    third: {
      title: string;
      appetizers: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      mainCourse: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
      desserts: {
        title?: string | null;
        description?: string | null;
        services: (number | Service)[];
      };
    };
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage_select".
 */
export interface HomepageSelect<T extends boolean = true> {
  intro?:
    | T
    | {
        first?:
          | T
          | {
              title?: T;
              heading?: T;
              description?: T;
            };
        second?:
          | T
          | {
              title?: T;
              heading?: T;
              description?: T;
            };
        third?:
          | T
          | {
              title?: T;
              heading?: T;
              description?: T;
            };
        fourth?:
          | T
          | {
              title?: T;
              heading?: T;
              description?: T;
            };
      };
  services?:
    | T
    | {
        first?:
          | T
          | {
              title?: T;
              appetizers?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              mainCourse?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              desserts?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
            };
        second?:
          | T
          | {
              title?: T;
              appetizers?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              mainCourse?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              desserts?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
            };
        third?:
          | T
          | {
              title?: T;
              appetizers?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              mainCourse?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
              desserts?:
                | T
                | {
                    title?: T;
                    description?: T;
                    services?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  export interface GeneratedTypes extends Config {}
}