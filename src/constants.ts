const WEBSITE_URL = process.env.NEXT_PUBLIC_WEBSITE_URL as string;
const DOMAIN_NAME = process.env.NEXT_PUBLIC_DOMAIN_NAME as string;

if (!WEBSITE_URL) {
  throw new Error("Environment variable WEBSITE_URL is not set");
}

if (!WEBSITE_URL.startsWith("https://")) {
  throw new Error("WEBSITE_URL must start with https://");
}

if (!DOMAIN_NAME) {
  throw new Error("Environment variable DOMAIN_NAME is not set");
}

export { DOMAIN_NAME, WEBSITE_URL };
