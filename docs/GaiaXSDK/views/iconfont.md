# iconfont

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
    - 取值：`'button'`/`'image'`/`'text'`/`'none'/'header'`
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

- 基础用法：
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
