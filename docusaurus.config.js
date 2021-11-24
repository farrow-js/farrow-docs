// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Farrow',
  tagline: 'Type-safe asymptotic TypeScript full-stack framework',
  url: 'https://farrow-js.github.io',
  baseUrl: '/farrow-docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'farrow-js', // Usually your GitHub org/user name.
  projectName: 'farrow-docs', // Usually your repo name.
  deploymentBranch: "release",

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/farrow-js/farrow-docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/farrow-js/farrow-docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Farrow',
        logo: {
          alt: 'Farrow Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'quick-start',
            position: 'right',
            label: 'Quick Start',
          },
          {to: '/docs/tutorial', label: 'Tutorial', position: 'right'},
          {to: '/docs/guide', label: 'Guide', position: 'right'},
          {to: '/docs/api', label: 'API', position: 'right'},
          {to: '/docs/design', label: 'Design Philosophy', position: 'right'},
          {to: '/blog', label: 'Blog', position: 'right'},
          {
            type: 'localeDropdown',
            position: 'right',
          },
          {
            href: 'https://github.com/farrow-js/farrow',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Quick Start',
                to: '/docs/quick-start',
              },
              {
                label: 'Tutorial',
                to: '/docs/tutorial',
              },
              {
                label: 'Guide',
                to: '/docs/guide',
              },
              {
                label: 'API',
                to: '/docs/api',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/farrow',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/guyingjie129',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/Lucifier129/farrow',
              },
              {
                label: 'Blog',
                href: 'https://farrow-js.github.io/farrow-docs/build/blog',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Farrow Team.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
