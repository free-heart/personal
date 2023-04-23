import { defineConfig } from "vitepress"
import nav from "./nav"
import sidebar from "./sidebar"

export default defineConfig({
  appearance: true, // 是否启用 "暗模式"
  base: '/personal/',
  title: '个人空间',
  description: '个人空间',
  head: [
    ['link', { rel: 'shortcut icon', href: 'favicon.ico', type: 'image/x-icon' }]
  ],
  ignoreDeadLinks: true,
  lastUpdated: true,

  themeConfig: {
    nav: nav,
    sidebar: sidebar,
    socialLinks: [
      {  icon: 'github', link: 'https://github.com/' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: '编辑'
    },
    outlineTitle: '本页目录',
    lastUpdatedText: '上次更新',
    docFooter: {
      prev: 'Previous',
      next: 'Next',
    },
    algolia: {
      appId: 'D9NS4SDV3F',
      apiKey: '4fca37e03c6e1bbb145d7871bb8e060c',
      indexName: 'test'
    },
  },

  markdown: {
    // lineNumbers: true
  }
})