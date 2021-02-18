export const name = "Boring Cars Detailing & Wash Services LLC";

export const shortName = "Boring Cars Detailing";

export const defaultTitle = "Boring Cars Detailing";

export const defaultDescription = `Website for ${shortName}`;

export const telephoneNumber = "+1 (916) 385-7257";

export const siteDomain = "boringcarsdetailing.com";

export const repoName = "boring-cars-detailing";

export const emails = {
  tos: `tos@${siteDomain}`,
  contact: `hello@${siteDomain}`,
  privacyPolicy: `policy@${siteDomain}`,
  support: `support@${siteDomain}`,
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
  site: `https://www.${siteDomain}`,
  facebook: `https://www.facebook.com/${socialIds.facebook}/`,
  instagram: `https://www.instagram.com/${socialIds.instagram}/`,
  twitter: `https://twitter.com/${socialIds.twitter}`,
  github: `https://github.com/dev-cprice/${repoName}`,
  bugReport: `https://github.com/dev-cprice/${repoName}/issues/new`,
  personal: {
    facebook: `https://www.facebook.com/${socialIds.personal.facebook}`,
    instagram: `https://www.instagram.com/${socialIds.personal.instagram}`,
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
  defaultDescription,
  defaultTitle,
  emails,
  name,
  repoName,
  routes,
  shortName,
  siteDomain,
  socialIds,
  telephoneNumber,
  urls,
};

export default config;
