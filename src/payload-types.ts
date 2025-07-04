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
  | 'Australia/Brisbane'
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
    snaps: Snap;
    services: Service;
    categories: Category;
    creatives: Creative;
    clients: Client;
    users: User;
    media: Media;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    projects: ProjectsSelect<false> | ProjectsSelect<true>;
    snaps: SnapsSelect<false> | SnapsSelect<true>;
    services: ServicesSelect<false> | ServicesSelect<true>;
    categories: CategoriesSelect<false> | CategoriesSelect<true>;
    creatives: CreativesSelect<false> | CreativesSelect<true>;
    clients: ClientsSelect<false> | ClientsSelect<true>;
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
    'works-global': WorksGlobal;
    'snaps-global': SnapsGlobal;
    menu: Menu;
    about: About;
    checkout: Checkout;
    'brand-questionnaire': BrandQuestionnaire;
  };
  globalsSelect: {
    homepage: HomepageSelect<false> | HomepageSelect<true>;
    'works-global': WorksGlobalSelect<false> | WorksGlobalSelect<true>;
    'snaps-global': SnapsGlobalSelect<false> | SnapsGlobalSelect<true>;
    menu: MenuSelect<false> | MenuSelect<true>;
    about: AboutSelect<false> | AboutSelect<true>;
    checkout: CheckoutSelect<false> | CheckoutSelect<true>;
    'brand-questionnaire': BrandQuestionnaireSelect<false> | BrandQuestionnaireSelect<true>;
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
   * Only two featured projects will be displayed on the works page
   */
  featured?: boolean | null;
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
  date: string;
  description: string;
  featuredServices: string;
  /**
   * Select all applicable services to this project
   */
  services: (number | Service)[];
  /**
   * Select the categories this Project will show up on when filtered
   */
  categories: (number | Category)[];
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
            icon: number | Media;
            heading: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'HeadingDescription';
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
            creatives?:
              | {
                  name: string;
                  role: string;
                  id?: string | null;
                }[]
              | null;
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
  sizes?: {
    square?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
    landscape?: {
      url?: string | null;
      width?: number | null;
      height?: number | null;
      mimeType?: string | null;
      filesize?: number | null;
      filename?: string | null;
    };
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "services".
 */
export interface Service {
  id: number;
  /**
   * Mark this service as a specialty on the menu
   */
  specialty: boolean;
  name: string;
  description?: string | null;
  linkTo?: ('none' | 'snap' | 'stories') | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories".
 */
export interface Category {
  id: number;
  name: string;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "snaps".
 */
export interface Snap {
  id: number;
  /**
   * Square image
   */
  thumbnail: number | Media;
  /**
   * Landscape image
   */
  cover: number | Media;
  type: 'product' | 'portrait';
  name: string;
  /**
   * URL-friendly name of the project. No spaces or special characters e.g. simmer-studios
   */
  slug: string;
  brand: string;
  project: string;
  date: string;
  description: string;
  featuredServices: string;
  /**
   * Select all applicable services to this project
   */
  services: (number | Service)[];
  /**
   * Select the categories this Snap will show up on when filtered
   */
  categories: (number | Category)[];
  /**
   * Link to their website or social media
   */
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
            icon: number | Media;
            heading: string;
            description: string;
            id?: string | null;
            blockName?: string | null;
            blockType: 'HeadingDescription';
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
            creatives?:
              | {
                  name: string;
                  role: string;
                  id?: string | null;
                }[]
              | null;
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
  avatar: number | Media;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "clients".
 */
export interface Client {
  id: number;
  /**
   * Highlight this client on the about page
   */
  featured: boolean;
  name: string;
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
        relationTo: 'snaps';
        value: number | Snap;
      } | null)
    | ({
        relationTo: 'services';
        value: number | Service;
      } | null)
    | ({
        relationTo: 'categories';
        value: number | Category;
      } | null)
    | ({
        relationTo: 'creatives';
        value: number | Creative;
      } | null)
    | ({
        relationTo: 'clients';
        value: number | Client;
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
  date?: T;
  description?: T;
  featuredServices?: T;
  services?: T;
  categories?: T;
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
        HeadingDescription?:
          | T
          | {
              icon?: T;
              heading?: T;
              description?: T;
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
              creatives?:
                | T
                | {
                    name?: T;
                    role?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "snaps_select".
 */
export interface SnapsSelect<T extends boolean = true> {
  thumbnail?: T;
  cover?: T;
  type?: T;
  name?: T;
  slug?: T;
  brand?: T;
  project?: T;
  date?: T;
  description?: T;
  featuredServices?: T;
  services?: T;
  categories?: T;
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
        HeadingDescription?:
          | T
          | {
              icon?: T;
              heading?: T;
              description?: T;
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
              creatives?:
                | T
                | {
                    name?: T;
                    role?: T;
                    id?: T;
                  };
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
  specialty?: T;
  name?: T;
  description?: T;
  linkTo?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "categories_select".
 */
export interface CategoriesSelect<T extends boolean = true> {
  name?: T;
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
 * via the `definition` "clients_select".
 */
export interface ClientsSelect<T extends boolean = true> {
  featured?: T;
  name?: T;
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
  sizes?:
    | T
    | {
        square?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
        landscape?:
          | T
          | {
              url?: T;
              width?: T;
              height?: T;
              mimeType?: T;
              filesize?: T;
              filename?: T;
            };
      };
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
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
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
    firstLabel: string;
    secondLabel: string;
    thirdLabel: string;
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
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "works-global".
 */
export interface WorksGlobal {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  /**
   * Select the projects to show as featured on Works page
   */
  featuredProjects?: (number | Project)[] | null;
  /**
   * Select the categories to show as filters on Works page
   */
  categories: (number | Category)[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "snaps-global".
 */
export interface SnapsGlobal {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  /**
   * Select the categories to show as filters when Products are selected
   */
  productCategories: (number | Category)[];
  /**
   * Select the categories to show as filters when Portraits are selected
   */
  portraitCategories: (number | Category)[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu".
 */
export interface Menu {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  strategy: {
    title: string;
    heading: string;
    description: string;
    services: (number | Service)[];
  };
  identity: {
    title: string;
    heading: string;
    description: string;
    services: (number | Service)[];
  };
  executions: {
    title: string;
    heading: string;
    description: string;
    services: (number | Service)[];
  };
  chefsChoice: {
    description: string;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about".
 */
export interface About {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  /**
   * Landscape image
   */
  banner: number | Media;
  /**
   * Square image
   */
  thumbnail: number | Media;
  /**
   * Landscape image
   */
  cover: number | Media;
  tagline: string;
  description: string;
  clientsDescription: string;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "checkout".
 */
export interface Checkout {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brand-questionnaire".
 */
export interface BrandQuestionnaire {
  id: number;
  seo: {
    title: string;
    description: string;
    /**
     * Must be 1200x630 (1.91:1 aspect ratio). This will be displayed when the page is shared on social media.
     */
    image?: (number | null) | Media;
  };
  description: string;
  brandAttributes: {
    left: string;
    right: string;
    id?: string | null;
  }[];
  questions: {
    isRequired?: boolean | null;
    question: string;
    description: string;
    id?: string | null;
  }[];
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "homepage_select".
 */
export interface HomepageSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
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
        firstLabel?: T;
        secondLabel?: T;
        thirdLabel?: T;
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
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "works-global_select".
 */
export interface WorksGlobalSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  featuredProjects?: T;
  categories?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "snaps-global_select".
 */
export interface SnapsGlobalSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  productCategories?: T;
  portraitCategories?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "menu_select".
 */
export interface MenuSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  strategy?:
    | T
    | {
        title?: T;
        heading?: T;
        description?: T;
        services?: T;
      };
  identity?:
    | T
    | {
        title?: T;
        heading?: T;
        description?: T;
        services?: T;
      };
  executions?:
    | T
    | {
        title?: T;
        heading?: T;
        description?: T;
        services?: T;
      };
  chefsChoice?:
    | T
    | {
        description?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "about_select".
 */
export interface AboutSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  banner?: T;
  thumbnail?: T;
  cover?: T;
  tagline?: T;
  description?: T;
  clientsDescription?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "checkout_select".
 */
export interface CheckoutSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "brand-questionnaire_select".
 */
export interface BrandQuestionnaireSelect<T extends boolean = true> {
  seo?:
    | T
    | {
        title?: T;
        description?: T;
        image?: T;
      };
  description?: T;
  brandAttributes?:
    | T
    | {
        left?: T;
        right?: T;
        id?: T;
      };
  questions?:
    | T
    | {
        isRequired?: T;
        question?: T;
        description?: T;
        id?: T;
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