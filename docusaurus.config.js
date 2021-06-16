/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Farrow',
  tagline: '类型安全的渐近式 TypeScript 全栈框架',
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
          label: '文档',
          position: 'left',
        },
        {
          to: '/blog',
          label: '日志',
          position: 'left'
        },
        {
          to: 'docs/case/',
          label: '案例',
          position: 'left'
        },
        {
          href: 'https://github.com/Lucifier129/farrow',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '快速开始',
              to: 'docs/',
            },
          ],
        },
        {
          title: '社区',
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
          title: '更多',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/Lucifier129/farrow',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Farrow team. Built with Docusaurus.`,
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
