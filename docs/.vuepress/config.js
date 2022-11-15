import { defineUserConfig, defaultTheme } from 'vuepress'
import {
  navbar,
} from './configs/index.js'

export default defineUserConfig({

  base: '/',

  // https://v2.vuepress.vuejs.org/reference/config.html#lang
  lang: 'zh-CN',
  title: 'GaiaX',
  description: 'GaiaX 动态模板引擎',

  // https://v2.vuepress.vuejs.org/guide/theme.html
  theme: defaultTheme({
    // default theme config
    navbar: navbar,
  }),
})

