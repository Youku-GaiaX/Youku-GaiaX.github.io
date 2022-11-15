export const navbar = [
  {
    text: 'GaiaXSDK',
    children: [
      '/gaiaxsdk/introduce.md',
      '/gaiaxsdk/quick-start.md',
      {
        text: '基础',
        children: [
          '/gaiaxsdk/basic/layout.md',
          '/gaiaxsdk/basic/style.md',
          '/gaiaxsdk/basic/databinding.md',
          '/gaiaxsdk/basic/event.md',
        ],
      },
      {
        text: '表达式',
        children: [
          '/gaiaxsdk/expression/expression-syntax.md'
        ],
      },
      {
        text: '视图',
        children: [
          '/gaiaxsdk/views/view-mapping-relation.md',
          '/gaiaxsdk/views/view.md',
          '/gaiaxsdk/views/text.md',
          '/gaiaxsdk/views/iconfont.md',
          '/gaiaxsdk/views/image.md',
          '/gaiaxsdk/views/richtext.md',
          '/gaiaxsdk/views/scroll.md',
          '/gaiaxsdk/views/grid.md',
          '/gaiaxsdk/views/slider.md',
          '/gaiaxsdk/views/custom-view.md',
        ],
      },
      {
        text: '动画',
        children: [
          '/gaiaxsdk/animation/lottie-animation.md',
          '/gaiaxsdk/animation/property-animation.md',
        ],
      },
      {
        text: '高级',
        children: [
          '/gaiaxsdk/complex/dynamic-template-data-source.md',
          '/gaiaxsdk/complex/dynamic-update-style.md',
        ],
      }, 
      {
        text: '其他',
        children: [
          '/gaiaxsdk/other/analyze-library-about.md',
          '/gaiaxsdk/other/expression-version-switch.md',
          '/gaiaxsdk/other/ios-m1-simulator-compile-error.md',
          '/gaiaxsdk/other/manual-track.md',
        ],
      },
    ]
  }
]
