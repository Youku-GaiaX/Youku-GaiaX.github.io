# richtext
## 介绍
richtext 组件是用于承载富文本文字内容的组件，支持文字自适应。
richtext 组件支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能。

## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |
| fit-content | bool | false | 否 | 文字自适应 | - | ```json
{
  "data": {
    "text": {
      "value": "$text",
      "extend": { 
        "fit-content": "true" 
      }
    }
  }
}
```
 |
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
| highlight-tag | string | null | 否 | 高亮标签 |  | ```json
{
  "title":{
      "value":"$title",
      "extend":{
          "highlight-tag":"#",
          "highlight-color":"red"
      }
  }
}
```
 |
| highlight-color | string | null | 否 | 高亮颜色 |  | ```json
{
  "title":{
      "value":"$title",
      "extend":{
          "highlight-tag":"#",
          "highlight-color":"red"
      }
  }
}
```
 |
| highlight-font-size | string | null | 否 | 高亮字体Size |  | ```json
{
  "title":{
      "value":"$title",
      "extend":{
          "highlight-tag":"#",
          "highlight-color":"red",
          "highlight-font-size":"12px",
      }
  }
}
```
 |
| highlight-font-family | string | null | 否 | 高亮字体Family |  | ```json
{
  "title":{
      "value":"$title",
      "extend":{
          "highlight-tag":"#",
          "highlight-color":"red",
          "highlight-font-size":"12px",
          "highlight-font-family":"inherit"
      }
  }
}
```
 |
| highlight-font-weight | string | null | 否 | 高亮字体Weight |  | ```json
{
  "title":{
      "value":"$title",
      "extend":{
          "highlight-tag":"#",
          "highlight-color":"red",
          "highlight-font-size":"12px",
          "highlight-font-weight":"600"
      }
  }
}
```
 |


注意事项：

- highlight-font-weight和highlight-font-size可以共同作用字体。
- highlight-font-family和highlight-font-size可以共同作用字体。
- highlight-font-weight和highlight-font-family不能共同使用。
- 目前暂不支持fit-content属性，会导致宽度计算异常（字体相关）
## 模板描述
定义:
```
{
  "id": "rich_text_normal",
  "type": "richtext"
}
```
样式：
```json
.rich_text_normal {
	width:100px;
	text-overflow:ellipsis;
	height:20px;
	font-size:15px;
  ......
}

```
数据：
```json
{
  "data": {
    "rich_text_normal": {
      "value": "${data.text}",
      "extend":{
         "highlight-color":"#00ff00/design token",
         // 例如：主演: ^克里斯汀^·#贝尔/伊迪娜#·$门泽尔$/乔什·盖德/乔纳森·格罗夫/斯特尔林·K·布朗/埃文·蕾切尔·伍德/阿尔弗雷德·莫里纳/玛莎·普林顿/杰森·雷特/圣蒂诺·方塔纳
         "highlight-tag":"$ / ^ / *等等"
       }
    }
  }
}
```
