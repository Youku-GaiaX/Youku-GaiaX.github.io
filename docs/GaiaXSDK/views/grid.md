# grid
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

- 基础用法：
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
