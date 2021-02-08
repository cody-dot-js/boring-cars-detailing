export const name = "Boring Cars Detailing & Wash Services LLC";

export const shortName = "Boring Cars Detailing";

export const defaultTitle = "Boring Cars Detailing";

export const defaultDescription = "Website for Boring Cars Detailing";

export const telephoneNumber = "+1 (916) 385-7257";

export const emails = {
  tos: "tos@boringcarsdetailing.com",
  contact: "hello@boringcarsdetailing.com",
  privacyPolicy: "policy@boringcarsdetailing.com",
  support: "support@boringcarsdetailing.com",
};

export const socialIds = {
  facebook: "boringcarsdetailing",
  instagram: "boringcarsdetailing",
  twitter: "boringcarsdeta1",
  personal: {
    facebook: "cem.barandir.3",
    instagram: "cemb35",
  },
};

export const urls = {
  site: "https://www.boringcarsdetailing.com",
  facebook: "https://www.facebook.com/boringcarsdetailing/",
  instagram: "https://www.instagram.com/boringcarsdetailing/",
  twitter: "https://twitter.com/boringcarsdeta1",
  github: "https://github.com/dev-cprice/boring-cars-detailing",
  bugReport: "https://github.com/dev-cprice/boring-cars-detailing/issues/new",
  personal: {
    facebook: "https://www.facebook.com/cem.barandir.3",
    instagram: "https://www.instagram.com/cemb35/",
  },
  stripe: {
    privacyPolicy: "https://stripe.com/privacy",
  },
};

export const routes = {
  about: "/about",
  contact: "/contact",
  gallery: "/gallery",
  home: "/",
  pricing: "/pricing",
  privacyPolicy: "/privacy-policy",
  schedule: "/schedule",
  services: "/services", // TODO(cody): necessary?
  termsOfService: "/tos",
};

function removeTrailingSlashes(path: string) {
  return path.replace(/\/+/g, "");
}

export function fullRoutePath(route: keyof typeof routes) {
  const { site } = urls;
  const path = routes[route];

  return removeTrailingSlashes(`${site}${path}`);
}

const config = {
  name,
  shortName,
  defaultTitle,
  defaultDescription,
  emails,
  urls,
  socialIds,
  telephoneNumber,
  routes,
};

export default config;
