/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Farrow',
  tagline: 'Type-safe asymptotic TypeScript full-stack framework',
  url: 'https://github.com/Lucifier129/farrow-docs',
  baseUrl: '/farrow-docs/build/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'farrow-js',
  projectName: 'farrow', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Farrow',
      logo: {
        alt: 'Farrow Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          label: 'Docs',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left'
        },
        {
          href: 'https://github.com/Lucifier129/farrow',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'localeDropdown',
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
              label: 'Introduction',
              to: 'docs/',
            },
            {
              label: 'Quick Start',
              to: 'docs/quick-start',
            },
            {
              label: 'Tutorial',
              to: 'docs/tutorial/01-install-and-start',
            },
            {
              label: 'API',
              to: 'docs/api',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Lucifier129/farrow',
            },
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
              label: 'Blog',
              href: 'https://farrow-js.github.io/farrow-docs/build/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Farrow team.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/Lucifier129/farrow-docs/',
        },
        blog: {
          path: 'blog',
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Lucifier129/farrow-docs/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-cn'],
  }
};
