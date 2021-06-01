const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    disable: process.env.NODE_ENV === "development",
  },
  images: {
    domains: ["www.placehold.it"],
  },
  future: {
    webpack5: true,
  },
});
