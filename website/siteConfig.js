/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const users = [
  {
    caption: "Swiss Life",
    image: "/img/logo_sl_oss.svg",
    infoLink: "https://SwissLife-OSS.github.io",
    pinned: true
  }
];

const repoUrl = "https://github.com/SwissLife-OSS/magnet";
const organizationUrl = "https://swissLife-oss.github.io";
const examplesUrl =
  "https://github.com/SwissLife-OSS/magnet/tree/master/samples";
const blogUrl = organizationUrl + "/blog";

const siteConfig = {
  title: "magnet", // Title for your website.
  tagline: "Simplify receiving emails and SMS in tests.",
  url: "https://swisslife-oss.github.io", // Your website URL
  baseUrl: "/magnet/", // Base URL for your project */

  // DocSearch
  algolia: {
    apiKey: "39489e5eb0c1a936be6ed354c0358c41",
    indexName: "swisslife-oss"
  },

  // Used for publishing and more
  projectName: "magnet",
  realProjectName: "magnet",
  organizationName: "swisslife-oss",
  organizationTitle: "SwissLife-OSS",
  organizationUrl,
  headerLinks: [
    {
      doc: "introduction",
      href: "/docs",
      label: "Docs"
    },
    {
      href: examplesUrl,
      label: "Examples",
      external: true
    },
    {
      href: blogUrl,
      blog: true,
      label: "Blog",
      external: true
    },
    {
      href: repoUrl,
      label: "GitHub",
      external: true
    },
    { search: true }
  ],

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: "img/logo_sl_magnet.svg",
  footerIcon: "img/logo_sl_oss.svg",
  favicon: "img/favicon.png",

  /* Colors for website */
  colors: {
    primaryColor: "#000000",
    secondaryColor: "#ffffff"
  },

  /* Custom fonts for website */
  /*
  fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },
  */

  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Swiss Life Developer`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: "tomorrow-night"
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ["https://buttons.github.io/buttons.js"],

  // On page navigation for the current documentation page.
  onPageNav: "separate",
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: "img/logo_sl_mongo_extensions.png",
  twitterImage: "img/logo_sl_mongo_extensions.png",

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // direct editing of docs
  editUrl: "https://github.com/SwissLife-OSS/magnet-docs/edit/master/docs/",

  repoUrl
};

module.exports = siteConfig;
