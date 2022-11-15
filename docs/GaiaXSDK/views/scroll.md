# scroll

## 介绍
scroll 组件是创建横滑或者竖滑容器的组件，其可以包含单个或多个类型的子模板。
scroll 组件是一个支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能的容器。
## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |
| edge-insets | string | {0, 0, 0, 0} | 否 | 内边距 | - | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "scroll",
  "edge-insets": "{0,0,0,0}"
}
```
 |
| item-spacing | number | 0 | 否 | 坑位间距 |  | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "scroll",
  "item-spacing": 9
}
```
 |
| direction | string | horizontal | 否 | 容器方向
horizontal / vertical |  | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "scroll",
  "direction":"horizontal"
}
```
 |
| item-type | json | null | 否 | 指定数据使用的坑位类型 |  | ```json
{
    "data":{
        "gaia_template_scroll":{
            // 绑定容器数据源
            "value":"$nodes",

            "extend":{
              	// 指定数据使用的坑位类型
                "item-type":{
                    "path":"$type",
                    "config":{
                        "h":"gx-mutable-scroll-item1",
                        "v":"gx-mutable-scroll-item2"
                    }
                }
            }
        }
    }
}
```
 |

## 模板
#### 模板定义
定义：
```json
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
样式：
```json
 #gaia_template_scroll {
	width:100%;
	height:100%;
	background-color:primaryBackground;
  ......
}
```
数据：
```json
{
    "data":{
        "gaia_template_scroll":{
            "value":"$nodes"
        }
    }
}

```
#### mock数据：
```json
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
    ......
  ]
}

```
### 

