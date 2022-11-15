# grid
## 介绍
grid 组件是创建多行或者多列的组件，其可以包含单个类型的子模板。
grid 组件是一个支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能的容器。
## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |
| edge-insets | string | {0, 0, 0, 0} | 否 | 内边距 | - | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "grid",
  "edge-insets": "{0,0,0,0}"
}
```
 |
| item-spacing | number | 0 | 否 | 坑位间距 |  | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "grid",
  "item-spacing": 9
}
```
 |
| row-spacing | number | 0 | 否 | 与坑位间距垂直的间距（上下） |  | ```json
{
  "id": "template_scroll_width_auto",
  "type": "gaia-template",
  "sub-type": "grid",
  "row-spacing": 9
}
```
 |

## 组件
定义：
```json
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
样式：
```json
#gx-content-uper-grid {
  width:100%;
}

```
数据：
```json
{
    "data": {
        "gx-content-uper-grid":{
            "value":"$nodes"
        }
    }
}

```
Mock数据：
```json
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
    ......
  ]
}

```
### 

