# view

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

- 基础用法：
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


- 使用表达式动态更新属性值：
  ```json
  {
    // 数据域
    "data": {

      // 节点ID
      "view_id": {

         // 扩展属性
         "extend": {

            // 动态更新display值，display值可为flex和none
            // display的value域是表达式逻辑，其编写方式需要符合表达式语法
            // 字符串要加''

            // 设置节点是否显示
            "display": " $type == 0 ? 'flex' : 'none' ",

            // 设置节点的背景色
            "background-color": " $type == 1 ? '#00ff00' : '#ff00ff' "

         }
      }
    }
  }
  ```
