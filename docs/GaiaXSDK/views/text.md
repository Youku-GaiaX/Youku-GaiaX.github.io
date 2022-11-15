# text

## 介绍
text 组件是用于承载文字内容的组件，支持文字自适应。
text 组件支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能。
## 组件映射关系

| 组件类型 | Android | iOS | 描述 |
| --- | --- | --- | --- |
| text | TextView | UILabel | 一个文字容器，可以用于承载文字内容，支持宽高自适应、纯色颜色、渐变颜色、文字大小、居中对齐等。 |

## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |
| fit-content | bool | false | 否 | 文字自适应 | - |  |
| lines | number | null | 否 | 文字行数
- lines: null/1   	- 单行
- lines: 0 			- 不限制行数
- lines: number	- 指定行数
 |  | ```json
#text {
  width: 100%;
  height: 100px;
  lines:1;
}
```
 |

## 组件
定义：
```
{
  "id": "text_normal",
  "type": "text"
}
```
样式：
```json
#text_normal {
	width:100px;
	text-overflow:ellipsis;
	height:20px;
	font-size:15px;
  ......
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
