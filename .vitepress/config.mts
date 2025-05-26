import { defineConfig } from "vitepress"

// https://vitepress.dev/reference/site-config
export default defineConfig({
  // Add this so asset URLs resolve under your GitHub Pages project path:
  base: '/',

  srcDir: 'src',

  title: "bot.wikilicia.com",
  description: "Documentation and setup guide for Wikilicia Bot",

  head: [
    ['link', { rel: "shortcut icon", href: "/favicon.ico"}],
  ],

  cleanUrls: true,

  themeConfig: {
    logo: "logo.png",

    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Add bot", link: "https://discord.com/oauth2/authorize?client_id=975782253961560064&permissions=8&integration_type=0&scope=bot+applications.commands" }
    ],

    search: {
      provider: "local"
    },

    socialLinks: [
      { icon: "discord", link: "https://discord.gg/9vaNGRbWzT" },
      { icon: "instagram", link: "https://www.instagram.com/wikilicia" },
      // { icon: "github", link: "https://github.com/" }
    ],

    sidebar: [
      {
        text: "Introduction",
        items: [
          {
            text: "Get Started",
            link: "/get-started",
          },
        ]
      },
      {
        text: "Core",
        items: [
          {
            text: "Commands",
            items: [
              {
                text: "Standard Commands",
                link: "/core/commands/standard"
              },
              {
                text: "Admin Commands",
                link: "/core/commands/admin"
              }
            ],
            collapsed: true,
          },
        ]
      },
      {
        text: "Modules",
        items: [
          {
            text: "Alicia Tools",
            link: "/modules/aliciatools"
          },
          {
            text: "Fun Activities",
            link: "/modules/funactivity"
          },
          {
            text: "Family",
            link: "/modules/family"
          },
          {
            text: "Giveaway",
            link: "/modules/giveaway"
          },
        ]
      },
    ],

    outline: {
      level: 1,
    },

    footer: {
      message: 'Copyright © 2022-2025 by WIKILICIA'
    },
  },

  sitemap: {
    hostname: 'https://bot.wikilicia.com'
  },

  markdown: {
    container: {
      dangerLabel: '🚨 DANGER'
    }
  }
})