import { defineUserConfig, defaultTheme } from 'vuepress'
import {
  navbar,
  sidebar
} from './configs/index.js'

export default defineUserConfig({
  base: '/',
  // https://v2.vuepress.vuejs.org/reference/config.html#lang
  lang: 'zh-CN',
  title: 'GaiaX',
  description: 'GaiaX 动态模板引擎是一套轻量级的纯原生动态化卡片跨端解决方案',
  // https://v2.vuepress.vuejs.org/guide/theme.html
  theme: defaultTheme({
    logo: '/images/logo.png',
    repo: '/alibaba/GaiaX',
    docsRepo: 'Youku-GaiaX/Youku-GaiaX.github.io',
    docsBranch: 'main',
    docsDir: 'docs',
    lastUpdated: true,
    contributors: true,
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    editLinkText: '在 GitHub 上编辑此页',
    tip: '提示',
    warning: '注意',
    danger: '警告',
    backToHome: '返回首页',
    openInNewWindow: '在新窗口打开',
    toggleDarkMode: '切换夜间模式',
    toggleSidebar: '切换侧边栏',
    notFound: [
      '这里什么都没有',
      '我们怎么到这来了？',
      '这是一个 404 页面',
      '看起来我们进入了错误的链接',
    ],
    navbar: navbar,
    sidebar: sidebar,
  }),
  plugins: [
  ],
})

