# text
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

- 基础用法：
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

- 仅Android:
  - includeFontPadding
  ```json
  // 数据：
  {
    "data": {
      "text_normal": {
        "value": "$data.text",
        "extend": {
          "includeFontPadding": "true"
        }
      }
    }
  }
  ```
  