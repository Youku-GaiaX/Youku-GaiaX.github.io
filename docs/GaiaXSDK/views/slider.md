# slider

## 介绍
slider 是一个轮播图组件，其可以包含单个子模板。
slider 组件是一个支持 Flexbox 布局、样式、触摸响应的容器。
## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |
| slider-scroll-time-interval | number | 3000 | 否 | 自动滚动时间间隔，单位毫秒，当值小于等于 0 时，不自动滚动 | - | ```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-scroll-time-interval": 6000
}
```
 |
| slider-has-indicator | boolean | true | 否 | 是否有指示器 |  | ```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-has-indicator": true
}
```
 |
| slider-infinity-scroll | boolean | true | 否 | 是否无限滚 |  | ```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-infinity-scroll": true
}
```
 |
| slider-selected-index | number | 0 | 否 | 选中位置 |  | ```json
{
  "data":{
    "gx-slider":{
      "value":"$nodes",
      "extend": {
        "slider-scroll-time-interval": 3000,
        "slider-infinity-scroll": true,
        "slider-has-indicator": true,
        "slider-selected-index": 1
      }
    }
  }
}
```
 |
| slider-indicator-selected-color | hex color | #FFFFFF | 否 | 指示器选中颜色 |  | ```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-indicator-selected-color": "#FFFFFF"
}
```
```json
{
  "data":{
    "gx-slider":{
      "value":"$nodes",
      "extend": {
        "slider-indicator-selected-color": "'#FFFFFF'"
      }
    }
  }
}
```
 |
| slider-indicator-unselected-color | hex color | #BBBBBB | 否 | 指示器未选中颜色 |  | ```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-indicator-unselected-color": "#BBBBBB"
}
```
```json
{
  "data":{
    "gx-slider":{
      "value":"$nodes",
      "extend": {
        "slider-indicator-unselected-color": "'#BBBBBB'"
      }
    }
  }
}
```
 |

## 组件
定义：
```json
{
  "id": "gx-slider",
  "type": "gaia-template",
  "sub-type": "slider",
  "slider-scroll-time-interval": 6000,
  "slider-has-indicator": true,
  "slider-infinity-scroll": true,
  "slider-indicator-selected-color": "#FFFFFF",
  "slider-indicator-unselected-color": "#BBBBBB",
  "layers": [
    {
      "id": "gx-slider-item",
      "type": "gaia-template",
      "sub-type": "custom"
    }
  ]
}
```
样式：
```json
#gx-slider {
  width: 100%;
  height: 150px;
  ...
}
```
数据：
```json
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
### Mock数据：
```json
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
    ...
  ]
}
```
### 

