# custom view

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

- 基础用法：
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
