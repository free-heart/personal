import { defineConfig } from "vitepress"
import nav from "./nav"
import sidebar from "./sidebar"
import { SearchPlugin } from "vitepress-plugin-search"
import { chineseSearchOptimize, pagefindPlugin } from 'vitepress-plugin-pagefind'

export default defineConfig({
  appearance: true, // 是否启用 "暗模式"
  // lang: 'zh-cn',
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
      {  icon: 'github', link: 'https://github.com/free-heart/personal' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present'
    },
    editLink: {
      pattern: ({ relativePath }) => {
        return `https://github.com/free-heart/personal/tree/main/docs/${relativePath}`
      },
      text: '编辑'
    },
    outlineTitle: '本页目录',
    lastUpdatedText: '最后更新时间',
    docFooter: {
      prev: '上一页',
      next: '下一页',
    }
  },

  markdown: {
    // lineNumbers: true
  },
  vite: {
    plugins:[
      // pagefindPlugin({
      //   customSearchQuery: chineseSearchOptimize,
      //   btnPlaceholder: '搜索',
      //   placeholder: '搜索文档',
      //   emptyText: '空空如也',
      //   heading: '共: {{searchResult}} 条结果'
      // }),
      SearchPlugin({
        // previewLength: 62,
        // buttonLabel: "Search",
        // placeholder: "Search docs",
        // allow: [],
        // ignore: [],
      })
    ],
  }
})