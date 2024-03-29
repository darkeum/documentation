// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Darklyy',
  tagline: 'FRAMEWORK',
  url: 'https://darklyy.ru',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
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
        title: 'Darklyy',
        // logo: {
        //   alt: 'Darklyy framework logo',
        //   src: 'img/logo.svg',
        // },
        items: [
          {
            to: 'docs/',
            activeBasePath: 'docs',
            position: 'left',
            label: 'Документация',
          },
         
          {
            href: 'https://github.com/darkeum/ATRIENERGO',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Документация',
            items: [
              {
                label: 'Быстрый старт',
                to: '/docs/',
              },
            ],
          },
          {
            title: 'Сообщество',
            items: [
              // {
              //   label: 'Stack Overflow',
              //   href: 'http://darklyy.ru',
              // },
              // {
              //   label: 'Discord',
              //   href: 'http://darklyy.ru',
              // },
              // {
              //   label: 'Twitter',
              //   href: 'http://darklyy.ru',
              // },
            ],
          },
          {
            title: 'Еще',
            items: [
             
              {
                label: 'GitHub',
                href: 'https://github.com/darkeum/ATRIENERGO',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darklyy Framework, Inc. Built with Docusaurus.`,
      },
      prism: {
        additionalLanguages: ['php'],
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
