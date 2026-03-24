const FALLBACK_BASE_URL = "https://heart-filled-tm-website.vercel.app";

const normalizeBaseUrl = (value: string) => {
  const trimmed = value.trim().replace(/\/+$/, "");

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
};

const resolveBaseUrl = () => {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  const vercelPreview = process.env.VERCEL_URL;

  const source = explicit || vercelProduction || vercelPreview || FALLBACK_BASE_URL;
  return normalizeBaseUrl(source);
};

export const siteConfig = {
  name: "Heart Filled Toastmasters",
  email: "heartfilledtoastmaster@gmail.com",
  baseUrl: resolveBaseUrl(),
  location: {
    venue: "St. Mel Parish",
    streetAddress: "20870 Ventura Blvd",
    city: "Woodland Hills",
    region: "CA",
    postalCode: "91364",
    country: "US",
  },
  meeting: {
    day: "Thursday",
    startTime: "19:00",
    endTime: "20:30",
    timezone: "America/Los_Angeles",
  },
  socialProfiles: {
    facebook: "https://www.facebook.com/heartfilledtoastmasters/",
    meetup: "https://www.meetup.com/heart-filled-toastmasters/",
  },
} as const;

export const toAbsoluteUrl = (path: string) => {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.baseUrl}${normalizedPath}`;
};
