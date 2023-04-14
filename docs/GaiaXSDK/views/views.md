# 视图

## gaia-template
- 实现：
  - Android：AbsoluteLayout
  - iOS：UIView/ScrollView

- 详情：作为根模板的标识；对业务透明。

## view

- 实现：
  - Android：AbsoluteLayout
  - iOS：UIView

- 详情：
  - 一个容器，可以包含零个或者多个子视图，例如：text、image、scroll、grid等。其自身也可以拥有背景、圆角等属性。

- 无障碍：
  - accessibilityEnable：
    - 取值：`true`/`false`
    - 描述：否支持无障碍
  - accessibilityTraits：
    - 取值：`'button'`/`'image'`/`'text'`/`'none'`
    - 描述：无障碍控件属性
  - accessibilityDesc：
    - 取值：string
    - 描述：无障碍内容
  ```json
  // 无障碍
  {
    "data": {
      "viewId":{
          // 无障碍朗读文案
          "accessibilityDesc":"'无障碍文案'",
          // 是否可以朗读
          // 优先级高于accessibilityDesc，默认值是true
          "accessibilityEnable": true/false,
          //无障碍控件属性
          "accessibilityTraits": "'button'"
      }
    }
  }
  ```

- 阴影：
  - 在非**根**节点上设置阴影
  ```css
  box-shadow: 10px 5px 5px 5px #ff0000;
  ```
  - 设置溢出裁剪逻辑为不裁剪 (可在Studio上设置视图的样式中设置：溢出裁剪 - 不裁剪)
  ```css
  overflow: visible;
  ```

- 基础使用：
  ```json
  // 定义：
  {
    "id": "view_normal",
    "type": "view"
  }
  ```
  ```css
  // 样式：
  #view_normal {
    width:100px;
    height:100px;
    background-color:#e4e4e4;
  }
  ```
  ```json
  // 事件：
  {
    "event": {
      "view_normal": "${}"
    }
  }
  ```

## text
- 实现：
  - Android：TextView
  - iOS：UILabel

- 详情：
  - 一个文字容器，可以用于承载文字内容，支持宽高自适应、纯色颜色、渐变颜色、文字大小、居中对齐等。

- 无障碍：
  - accessibilityEnable：
    - 取值：`true`/`false`
    - 描述：否支持无障碍
  - accessibilityTraits：
    - 取值：`'button'`/`'image'`/`'text'`/`'none'`
    - 描述：无障碍控件属性
  - accessibilityDesc：
    - 取值：string
    - 描述：无障碍内容
  ```json
  // 无障碍
  {
    "data": {
      "viewId":{
          // 无障碍朗读文案
          "accessibilityDesc": "'无障碍文案'",
          // 是否可以朗读
          // 优先级高于accessibilityDesc，默认值是true
          "accessibilityEnable": true/false,
          //无障碍控件属性
          "accessibilityTraits": "'button'"
      }
    }
  }
  ```

- 基础使用：
  ```json
  // 定义：
  {
    "id": "text_normal",
    "type": "text"
  }
  ```
  ```css
  // 样式：
  #text_normal {
    width:100px;
    text-overflow:ellipsis;
    height:20px;
    font-size:15px;
  }
  ```
  ```json
  // 事件：
  {
    "event": {
      "text_normal": ""
    }
  }
  ```
  ```json
  // 数据：
  {
    "data": {
      "text_normal": {
        "value": "$data.text"
      }
    }
  }
  ```


## richtext

- 实现：
  - Android：TextView
  - iOS：UILabel

- 详情：
  - 一个富文本文字容器，可以用于承载文字内容，支持宽高自适应、纯色颜色、渐变颜色、文字大小、居中对齐等。

- 属性：
  - highlight-tag： 高亮标签
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-tag":"'#'",
        }
    }
  }
  ```
  - highlight-color： 高亮颜色
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-color":"'red'"
        }
    }
  }
  ```
  - highlight-font-size：高亮字体Size
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-font-size":"'12px'",
        }
    }
  }
  ```
  - highlight-font-weight：高亮字体Weight
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-font-weight":"600"
        }
    }
  }
  ```

::: danger
- 注意事项：
  - highlight-font-weight和highlight-font-size可以共同作用字体。
  - highlight-font-family和highlight-font-size可以共同作用字体。
  - highlight-font-weight和highlight-font-family不能共同使用。
  - 目前暂不支持fit-content属性，会导致宽度计算异常（字体相关）
:::

- 使用：
  ```
  // 定义:
  {
    "id": "rich_text_normal",
    "type": "richtext"
  }
  ```
  ```css
  // 样式：
  .rich_text_normal {
    width:100px;
    text-overflow:ellipsis;
    height:20px;
    font-size:15px;
  }

  ```
  ```json
  // 数据：
  {
    "data": {
      "rich_text_normal": {
        "value": "$data.text",
        "extend":{
          "highlight-color":"'#00ff00' or 'design token'",
          // 例如：主演: ^克里斯汀^·#贝尔/伊迪娜#·$门泽尔$/乔什·盖德/乔纳森·格罗夫/斯特尔林·K·布朗/埃文·蕾切尔·伍德/阿尔弗雷德·莫里纳/玛莎·普林顿/杰森·雷特/圣蒂诺·方塔纳
          "highlight-tag":"'$' or '^' or '*' or 自定义"
        }
      }
    }
  }
  ```

## image
- 实现：
  - Android：ImageView
  - iOS：UIImageGifView

- 详情：
  - 一个图片容器，可用于承载图片内容，支持本地资源图片、网络资源图片等。

- 属性值：
  - value:
    - 本地资源：local:xxxx（local代表本地资源；xxx代表资源名）
    - 网络资源：http://xxxx.png 
  - mode
    - 值：`'scaleToFill'` `'aspectFill'` `'aspectFit'` `'top'` `'bottom'` `'left'` `'right'`
    - 默认值：`'scaleToFill'`
    - 详情：
        - scaleToFill：不保持宽高比进行缩放，使图片的宽高完全拉伸至填满 
        - aspectFill：保持图片宽高比进行缩放，使图片的长边能完全显示出来
        - aspectFit：保持图片宽高比进行缩放，是图片的短边完全铺满
  - mode-type
    - 可取值：`'crop'` `'scale'`
    - 默认值：`null`
    - 详情：
        - crop：裁剪模式
            - top:      保持纵横比缩放图片，保证短边显示满，截取顶部区域。
            - bottom:   保持纵横比缩放图片，保证短边显示满，截取底部区域。
            - left:     保持纵横比缩放图片，保证短边显示满，截取左部区域。
            - right:    保持纵横比缩放图片，保证短边显示满，截取右部区域。
        - scale：缩放模式 
            - top:      保持纵横比缩放图片，保证长边显示满，将图片挪到视图的顶部区域。
            - bottom:   保持纵横比缩放图片，保证长边显示满，将图片挪到视图的底部区域。
            - left:     保持纵横比缩放图片，保证长边显示满，将图片挪到视图的左部区域。
            - right:    保持纵横比缩放图片，保证长边显示满，将图片挪到视图的右部区域。
  - placeholder: 网络图片占位图
    - `'local:xxxx'` （local代表本地资源；xxx代表资源名） 

- 无障碍：
  - accessibilityEnable：
    - 取值：`true`/`false`
    - 描述：否支持无障碍
  - accessibilityTraits：
    - 取值：`'button'`/`'image'`/`'text'`/`'none'`
    - 描述：无障碍控件属性
  - accessibilityDesc：
    - 取值：string
    - 描述：无障碍内容
  ```json
  // 无障碍
  {
    "data": {
      "viewId":{
          // 无障碍朗读文案
          "accessibilityDesc":"'无障碍文案'",
          // 是否可以朗读
          // 优先级高于accessibilityDesc，默认值是true
          "accessibilityEnable":true/false,
          //无障碍控件属性
          "accessibilityTraits": "'button'"
      }
    }
  }
  ```

- 基础使用：
  ```json
  // 定义：
  {
      "id":"image_view",
      "type":"image"
  }
  ```
  ```css
  // 样式：
  #image_view {
    width:100px;
    height:100px;
    background-color:#e4e4e4;
    ......
  }
  ```
  ```json
  // 事件：
  {
    "event": {
      "image_view": "$url"
    }
  }
  ```
  ```json
  // 数据：
  {
    "data": {
      "image_view": {
        "value": "$data.image",
        "mode":"'scaleToFill'",
        "mode-type":"'crop'",
        "placeholder":"'local:img'"
      }
    }
  }
  ```
  ```json
  // Mock数据:
  {
    "data": {
      "image": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF"
    }
  }

  ```

## iconfont

- 实现：
  - Android：TextView
  - iOS：UILabel

- 详情：
  - 一个文字图片容器，可用于承载文字图片，例如：[iconfont.cn](https://www.iconfont.cn/)网站下的资源。 

- 无障碍：
  - accessibilityEnable：
    - 取值：`true`/`false`
    - 描述：否支持无障碍
  - accessibilityTraits：
    - 取值：`'button'`/`'image'`/`'text'`/`'none'`
    - 描述：无障碍控件属性
  - accessibilityDesc：
    - 取值：string
    - 描述：无障碍内容
  ```json
  // 无障碍
  {
    "data": {
      "viewId":{
          // 无障碍朗读文案
          "accessibilityDesc":"'无障碍文案'",
          // 是否可以朗读
          // 优先级高于accessibilityDesc，默认值是true
          "accessibilityEnable":true/false,
          //无障碍控件属性
          "accessibilityTraits": "'button'"
      }
    }
  }
  ```

- 基础使用：
  - 使用前置条件
    - Android端，在项目工程中实现iconfont字体的加载逻辑。
    ```kotlin
    GXRegisterCenter.instance.registerExtensionFontFamily(object :
        GXRegisterCenter.GXIExtensionFontFamily {
        override fun fontFamily(fontFamilyName: String): Typeface? {
            // 实现IconFont的加载逻辑
            return Typeface.createFromAsset(assets, "$fontFamilyName.ttf")
        }
    })
    ```
    - iOS端，在项目工程中实现iconfont字体的加载逻辑。
    ```objectivec
    1. 创建类，实现GXBizServiceProtocol中的协议
    + (void)loadIconFont{
        //加载iconfont，确认只调用一次
    }

    2. 注册到GaiaX中
    [[GXRegisterCenter defaultCenter] registerBizServiceImpl:xxx]
    ```
  - 使用
  ```json
  // 定义：
  {
    "id": "iconfont_normal",
    "type": "iconfont"
  }
  ```
  ```css
  // 样式：
  #iconfont {
    width:100px;
    text-overflow:ellipsis;
    height:20px;
    font-size:15px;
    ......
  }
  ```
  ```json
  // 事件
  {
    "event": {
      "iconfont": "xxx"
    }
  }
  ```
  ```json
  // 数据：
  {
    "data": {
      "iconfont": {
        "value": "$data.iconfont"
      }
    }
  }
  ```

## scroll
- 实现：
  - Android：RecyclerView
  - iOS：UICollectionView

- 详情：
  - 一个单列横滑容器或者竖滑容器，可承载单类型子模板。具备边距、间距等属性。

- 属性值：
  - edge-insets: 内边距
    - 默认值：`{0,0,0,0}`
  - item-spacing: 坑位间距
    - 默认值：`0`
  - direction: 容器方向
    - 可取值：`horizontal` `vertical`
    - 默认值：`horizontal`
  - item-type: 指定数据使用的坑位类型
  ```json
  {
    "data":{
        "gaia_template_scroll":{
            // 绑定容器数据源
            "value":"$nodes",

            "extend":{
                // 指定数据使用的坑位类型
                "item-type":{
                    "path":"$type", // type = h or v
                    "config":{
                        "h":"'gx-mutable-scroll-item1'",
                        "v":"'gx-mutable-scroll-item2'"
                    }
                }
            }
        }
    }
  }
  ```

- 基础使用：
  ```json
  // 定义：
  {
    "id": "gaia_template_scroll",
    "type": "gaia-template",
    "sub-type": "scroll",
    "direction": "horizontal",
    "edge-insets": "{0,18,0,18}",
    "item-spacing": 7,
    "row-spacing": 0,
    "layers": [
      {
        "id": "gaia_template_scroll_item1",
        "type": "gaia-template",
        "sub-type": "custom"
      },
      {
        "id": "gaia_template_scroll_item2",
        "type": "gaia-template",
        "sub-type": "custom"
      }
    ]
  }

  ```
  ```css
  // 样式：
  #gaia_template_scroll {
    width:100%;
    height:100%;
    background-color:primaryBackground;
    ......
  }
  ```
  ```json
  // 数据：
  {
      "data":{
          "gaia_template_scroll":{
              "value":"$nodes"
          }
      }
  }

  ```
  ```json
  // mock数据：
  {
    "nodes": [
      {
        "img": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "我是标题",
        "subtitle": "我是副标题",
        "type": "v"
      },
      {
        "img": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "我是标题",
        "subtitle": "我是副标题",
        "type": "h"
      },
    ]
  }

  ```

## grid
- 实现：
  - Android：RecyclerView
  - iOS：UICollectionView

- 详情：
  - 一个多列横滑容器或者竖滑容器，可承载单类型子模板。具备行数、列数、边距、间距等属性。

- 属性值：
  - edge-insets: 内边距
    - 默认值：`{0,0,0,0}`
  - item-spacing: 坑位间距
    - 默认值：`0`  
  - row-spacing: 与坑位间距垂直的间距（上下）
    - 默认值：`0`
  - direction: 容器方向
    - 可取值：`horizontal` `vertical`
    - 默认值：`vertical`

- 基础使用：
  ```json
  // 定义:
  {
    "edge-insets": "{0,18,0,18}",
    "id": "gx-content-uper-grid",
    "item-spacing": 9,
    "row-spacing": 9,
    "column": 2,
    "sub-type": "grid",
    "type": "gaia-template",
    "layers": [
      {
        "type": "gaia-template",
        "id": "gx-content-uper-grid-item",
        "sub-type": "custom"
      }
    ]
  }
  ```
  ```css
  // 样式：
  #gx-content-uper-grid {
    width:100%;
  }

  ```
  ```json
  // 数据绑定：
  {
      "data": {
          "gx-content-uper-grid":{
              "value":"$nodes"
          }
      }
  }
  ```
  ```json
  // Mock数据：
  {
    "nodes": [
      {
        "img": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "我是标题",
        "subtitle": "我是副标题",
      },
      {
        "img": "https://t7.baidu.com/it/u=376303577,3502948048&fm=193&f=GIF",
        "title": "我是标题",
        "subtitle": "我是副标题",
      },
    ]
  }

  ```

## slider
- 实现：
  - Android：ViewPager
  - iOS：

- 详情：
  - 一个轮播容器，可用于承载其他子模板。

- 属性：
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
    - 详情：
    - 默认值：

- 基础使用：
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

## lottie
- 实现：
  - Android：LottieAnimationView
  - iOS：LotAnimationView

- 详情：
  - 一个Lottie动画容器，可用于承载动画。 支持本地资源和网络资源。

## custom view

- 实现：
  - 自定义视图必须实现如下接口：
    - 数据绑定接口:
        - Android: `com.alibaba.gaiax.GXTemplateEngine.GXICustomViewBindData`
        - iOS: `- (void)gx_bindData:(id)data`
  - 在index.json中，新增节点类型“custom”值类型，用来表明该节点是自定义view。
    - 在同级节点增加`view-class-ios`代表ios节点的节点映射的自定义View。
    - 在同级节点增加`view-class-android`代表android节点的节点映射的自定义View。

::: danger
Android - 自定义视图必须添加Keep注解，防止被混淆。
:::

- 详情：
  - 一个自定义视图的容器，可以用于承载原生视图。

- 基础使用：
  ```json
  // 定义：
  {
    "id": "custom_view",
    "type": "custom",
    "view-class-android":"com.xxx.xxx.MyCustomLayout",
    "view-class-ios":"xxx"
  }
  ```
  ```css
  // 样式：
  #custom_view {
    width:100px;
    height:100px;
    background-color:#e4e4e4;
  }
  ```
  ```json
  // 事件：
  {
    "event": {
      "custom_view": "$a.b"
    }
  }
  ```
  ```json
  // 数据绑定：
  {
    "data": {
      "custom_view": {
        "value": "$data"
      }
    }
  }
  ```
