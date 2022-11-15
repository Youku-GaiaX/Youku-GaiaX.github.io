# 样式

### 背景颜色
| 样式 | 取值/描述 |
| --- | --- |
| background-color | 背景色：`red` / `#ffffff` / `#ffffff00` / `rgb(255, 255, 255)`  / `rgba(255, 185, 185, 0.5)` |


### 渐变色：
| 样式 | 取值/描述 |
| --- | --- |
| background-image | 渐变背景色：
`background-image:linear-gradient(to right, #FF8B9D, #FF1E42)` |


### 透明度
| 样式 | 取值/描述 |
| --- | --- |
| opacity | 透明度：0 / 0.5 / 1，默认为1 |


### 越界显示
| 样式 | 取值/描述 |
| --- | --- |
| overflow | 是否可以越界显示，默认为`hidden`
`hidden`：越界截断
`visible`：越界展示 |


### 边框
| 样式 | 取值/描述 |
| --- | --- |
| border-width | 边框的宽度，默认为0px |
| border-color | 边框颜色，默认为透明 |


### 圆角
| 样式 | 取值/描述 |
| --- | --- |
| border-radius | 规则圆角 |
| border-top-left-radius
border-top-right-radius
border-bottom-left-radius
border-bottom-right-radius | 不规则圆角，与border-radius互斥，优先级高 |


### 颜色（color）
支持以下几种颜色格式：

| 样式 | 取值/描述 |
| --- | --- |
| 十六进制 | `#rrggbb``#rrggbbaa`，其中#rrggbbaa中后两位代表对应的alpha值 |
| RGB / RGBA | `rgb(255, 255, 255)`
`rgba(255, 255, 255, 0.5)` |
| 其他颜色 | `white`
`black`
`gray`
`red`
`green`
`blue`
`yellow`
`cyan`
`transparent` |


### 文字相关属性（font）
| 样式 | 取值/描述 |
| --- | --- |
| font-size | 文字的大小，15px |
| font-family | 自定义字体 |
| color | 文字颜色 |
| lines | 文字行数，默认为1 |
| line-height | 文字的行高 |
| text-align | 文字对齐方式，默认为left
`left`：居左
`right`：居右
`center`：居中 |
| text-overflow | 文字溢出显示方式，默认为ellipsis
`ellipsis`：省略模式
`clip`：裁剪模式 |
| background-image | 文字的渐变色，优先级高于color，
`linear-gradient(to bottom,#000000,#ffffff)`; |
| text-decoration | 文字特殊格式
`underline`：下划线
`line-through`：横线; |
| fit-content | 文本自适应，默认为false |


### 图片缩放/裁剪属性（image）
| 样式 | 取值/描述 |
| --- | --- |
| mode | scaleToFill：不保持宽高比进行缩放，使图片的宽高完全拉伸至填满 
aspectFill：保持图片宽高比进行缩放，使图片的长边能完全显示出来
aspectFit：保持图片宽高比进行缩放，是图片的短边完全铺满
top  / left / bottom / right：见下方使用说明 |
| mode-type | 仅在mode属性为top  / left / bottom / right时生效
crop：裁剪模式
scale：缩放模式 |


mode-type属性使用说明：

```css
crop:
    - top:      保持纵横比缩放图片，保证短边显示满，截取顶部区域。
    - bottom:   保持纵横比缩放图片，保证短边显示满，截取底部区域。
    - left:     保持纵横比缩放图片，保证短边显示满，截取左部区域。
    - right:    保持纵横比缩放图片，保证短边显示满，截取右部区域。

scale:
    - top:      保持纵横比缩放图片，保证长边显示满，将图片挪到视图的顶部区域。
    - bottom:   保持纵横比缩放图片，保证长边显示满，将图片挪到视图的底部区域。
    - left:     保持纵横比缩放图片，保证长边显示满，将图片挪到视图的左部区域。
    - right:    保持纵横比缩放图片，保证长边显示满，将图片挪到视图的右部区域。
```
