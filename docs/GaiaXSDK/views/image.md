# image
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
