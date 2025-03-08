const WEBSITE_URL = process.env.WEBSITE_URL as string;

if (!WEBSITE_URL) {
  throw new Error("Environment variable WEBSITE_URL is not set");
}

if (!WEBSITE_URL.startsWith("https://")) {
  throw new Error("WEBSITE_URL must start with https://");
}

const DOMAIN_NAME = WEBSITE_URL.replace("https://", "");

if (!DOMAIN_NAME) {
  throw new Error("Invalid WEBSITE_URL. No domain name found.");
}

export { DOMAIN_NAME, WEBSITE_URL };
