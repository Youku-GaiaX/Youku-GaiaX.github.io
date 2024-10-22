# slider

## 实现：
- Android：ViewPager
- iOS：

## 详情：
- 一个轮播容器，可用于承载其他子模板。

## 属性：
 
 在index.json中配置

- slider-scroll-time-interval：
  - 详情：自动滚动时间间隔，单位毫秒，当值小于等于 0 时，不自动滚动
  - 默认值：`3000`
- slider-has-indicator：
  - 详情：是否有指示器
  - 默认值：`true`
- slider-infinity-scroll：
  - 详情：是否无限滚
  - 默认值：`true`
- slider-selected-index:
  - 详情：选中位置
  - 默认值：`0`
- slider-indicator-selected-color:
  - 详情：指示器选中颜色
  - 默认值：`#FFFFFF`
- slider-indicator-unselected-color:
  - 详情：指示器未选中颜色
  - 默认值：`#BBBBBB`
- slider-indicator-margin:
  - 详情：指示器 margin
  - 默认值：`{0,0,0,0}`
- slider-indicator-position:
  - 详情：指示器位置
  - 可选值：`top-left`, `top-center`, `top-right`, `bottom-left`, `bottom-center`, `bottom-right`
  - 默认值：`bottom-right`
- slider-indicator-class-android:
  - 详情：安卓自定义指示器类名，自定义类需要继承 `com.alibaba.gaiax.render.view.container.slider.GXSliderBaseIndicatorView`
  - 默认值：无定义，使用默认指示器样式
- slider-indicator-class-ios:
  - 详情：指示器实现类
  - 默认值：

## 扩展属性

在`databinding.json`中的节点`extend`中配置生效。


  - item-type: 指定数据使用的坑位类型
  ```json
  {
    "data":{
        "gaia_template_slider":{
            // 绑定容器数据源
            "value":"$nodes",

            "extend":{
                // 指定数据使用的坑位类型
                "item-type":{
                    // path计算的结果用于在config中进行匹配，然后取模板
                    "path":"$type",
                    "config":{
                        "h":"'gx-mutable-slider-item1'",
                        "v":"'gx-mutable-slider-item2'"
                    }
                }
            }
        }
    }
  }

- 基础用法：
  ```json
  // 定义：
  {
    "id": "gx-slider",
    "type": "gaia-template",
    "sub-type": "slider",
    "slider-scroll-time-interval": 6000,
    "slider-has-indicator": true,
    "slider-infinity-scroll": true,
    "slider-indicator-selected-color": "#FFFFFF",
    "slider-indicator-unselected-color": "#BBBBBB",
    "slider-indicator-margin": "{10,10,10,10}",
    "slider-indicator-position": "right-bottom",
    "slider-indicator-class-android": "com.example.customIndicatorView",
    "layers": [
      {
        "id": "gx-slider-item",
        "type": "gaia-template",
        "sub-type": "custom"
      }
    ]
  }
  ```
  ```css
  // 样式：
  #gx-slider {
    width: 100%;
    height: 150px;
  }
  ```
  ```json
  // 数据绑定：
  {
    "data":{
      "gx-slider":{
        "value":"$nodes",
        "extend": {
          "slider-scroll-time-interval": 3000,
          "slider-infinity-scroll": true,
          "slider-has-indicator": true,
          "slider-selected-index": 1,
          "slider-indicator-selected-color": "'#FFFFFF'",
          "slider-indicator-unselected-color": "'#BBBBBB'"
        }
      }
    }
  }
  ```
  ```json
  // Mock数据：
  {
    "nodes": [
      {
        "image": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "第一个标题"
      },
      {
        "image": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "第二个标题"
      }
    ]
  }
  ```
- 事件回调：
  设置事件回调，在onScrollEvent中接收Slider的滚动事件
  参数说明：
    - type: onPageSelected, 代表slider的滚动事件
    - position: 代表slider当前滚动的位置
  ```kotlin
  val templateData = GXTemplateEngine.GXTemplateData(AssetsUtils.parseAssets(activity, "assets_data_source/data/gx-slider-multi-type-data.json"))
  templateData.eventListener = object : GXTemplateEngine.GXIEventListener {
      override fun onGestureEvent(gxGesture: GXTemplateEngine.GXGesture) {
          super.onGestureEvent(gxGesture)
      }

      override fun onScrollEvent(gxScroll: GXTemplateEngine.GXScroll) {
          super.onScrollEvent(gxScroll)
          Log.d(TAG, "onScrollEvent() called with: gxScroll type=${gxScroll.type} position=${gxScroll.position}")
      }

      override fun onAnimationEvent(gxAnimation: GXTemplateEngine.GXAnimation) {
          super.onAnimationEvent(gxAnimation)
      }
  }
  ```

  日志
  ```text
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=2
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=3
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=0
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=1
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=2
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=3
  com.alibaba.gaiax.demo               D  onScrollEvent() called with: gxScroll type=onPageSelected position=0
  ```


- scrollTo滚动
  - 通过databinding的extend配置指定字段，让scroll滚动到指定位置
  - 参数说明：
    - holding-offset: 重新绑定数据时是否scroll不变化， true/false
    - scroll-index: 仅在holding-offset为true时生效，滚动到指定为止
    - scroll-animated: 仅在holding-offset为true时生效， 滚动动画，true/false

```json
{
    "data":{
        "gaia_template_slider":{
            "value":"$nodes",
            "extend": {
              "holding-offset":true,
              "scroll-index": 2,
              "scroll-animated": true
            }
        }
    }
}
```