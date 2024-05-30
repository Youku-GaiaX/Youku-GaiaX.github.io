# scroll

- 实现：
  - Android：RecyclerView
  - iOS：UICollectionView

- 详情：
  - 一个单列横滑容器，可承载单类型子模板。具备边距、间距等属性。

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
  - item-footer-type: 指定加载更多使用的坑位类型
  ```json
  {
    "data":{
        "template_scroll_load_more": {
            "value":"$nodes",
            "extend": {
                "item-footer-type": {
                    "id": "'template_scroll_load_more_item_load_more'",
                    "hasMore": "$isHasMore"
                }
            }
        }
    }
  }
  ```

- 基础用法：
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
