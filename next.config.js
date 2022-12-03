const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
  unstable_staticImage: true,
  unstable_defaultShowCopyCode: true,
  unstable_flexsearch: {
    codeblock: false
  },
});

module.exports = withNextra({
  i18n: {
    locales: ["pt-BR"],
    defaultLocale: "pt-BR",
  },
  reactStrictMode: true,
  swcMinify: true
});