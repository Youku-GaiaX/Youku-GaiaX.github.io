# text

## 介绍

text 组件是用于承载文字内容的组件，支持文字自适应。
text 组件支持 FlexBox 布局、样式、触摸响应、和一些无障碍功能。

## 组件
定义：
```json
{
  "id": "text_normal",
  "type": "text"
}
```
样式：
```css
#text_normal {
	width:100px;
	text-overflow:ellipsis;
	height:20px;
	font-size:15px;
}

```
事件：
```json
{
  "event": {
    "text_normal": ""
  }
}
```
数据：
```json
{
  "data": {
    "text_normal": {
      "value": "$data.text"
    }
  }
}
```
