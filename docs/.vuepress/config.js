import { defineUserConfig, defaultTheme } from 'vuepress'
import {
  navbar,
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
    // default theme config
    navbar: navbar,
  }),
})

