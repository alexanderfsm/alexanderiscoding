import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span className="logo-name">Alexanderiscoding</span>,
  project: {
    link: "https://github.com/alexanderfsm/alexanderiscoding",
  },
  docsRepositoryBase: "https://github.com/alexanderfsm/alexanderiscoding",
  head: (
    <>
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#000000" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="Content-Language" content="pt-br" />
      <meta name="description" content="Repositório de documentação sobre desenvolvimento" />
      <meta name="og:description" content="Repositório de documentação sobre desenvolvimento" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="https://alexanderiscoding.com/og.png" />
      <meta name="twitter:site:domain" content="alexanderiscoding.com" />
      <meta name="twitter:url" content="https://alexanderiscoding.com" />
      <meta name="og:title" content="Alexanderiscoding" />
      <meta name="og:description" content="Repositório de documentação sobre desenvolvimento" />
      <meta name="og:image" content="https://alexanderiscoding.com/og.png" />
      <meta name="apple-mobile-web-app-title" content="Alexanderiscoding" />
      <link rel="apple-touch-icon" sizes="180x180" href="https://alexanderiscoding.com/apple-icon-180x180.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="https://alexanderiscoding.com/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="https://alexanderiscoding.com/favicon-96x96.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="https://alexanderiscoding.com/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="https://alexanderiscoding.com/favicon-16x16.png" />
      <meta name="msapplication-TileImage" content="https://alexanderiscoding.com/ms-icon-144x144.png" />
    </>
  ),
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Alexanderiscoding",
    };
  },
  footer: {
    text: <span>MIT {new Date().getFullYear()} © Alexanderiscoding - Repositório de documentação sobre desenvolvimento.</span>,
  },
  nextThemes: {
    defaultTheme: "system",
    storageKey: "theme",
  },
  navigation: true,
  gitTimestamp: ({ timestamp }) => <>Ultima atualização em {timestamp.toLocaleDateString("pt-BR", { day: "numeric", month: "long", year: "numeric" })}</>,
  search: {
    emptyResult: <span className="nx-block nx-select-none nx-p-8 nx-text-center nx-text-sm nx-text-gray-400">Nenhum resultado encontrado.</span>,
    placeholder: "Procurar...",
    loading: "Procurando...",
  },
  i18n: [
    { locale: "pt-BR", text: "Português Brasileiro" },
    { locale: "en-US", text: "English" },
    { locale: "ko", text: "한국어" },
    { locale: "ja", text: "日本語" },
    { locale: "zh-CN", text: "简体中文" },
  ],
  notFound: {
    content: "Envie um problema sobre link quebrado →",
    labels: "notfound",
  },
  serverSideError: {
    content: "Envie um problema sobre esse erro →",
    labels: "error",
  },
  feedback: {
    content: "Dúvidas? Nos dê feedback →",
    labels: "feedback",
  },
  editLink: {
    text: "Edite essa página no GitHub →",
  },
};

export default config;
