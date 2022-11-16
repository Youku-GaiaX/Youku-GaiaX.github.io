# 样式

## 介绍

样式支持CSS的子集以及部分扩展属性，包含静态样式属性和动态样式属性两个部分：
- 静态属性：写在index.css文件中固定样式。
- 动态属性：写在index.databinding文件中，根据数据和表达式可以动态修改的样式。

## 支持的颜色取值

### 十六进制
- 详情：`#rrggbb``#rrggbbaa`，其中`#rrggbbaa`中后两位代表对应的alpha值

### RGB / RGBA

- 详情：`rgb(255, 255, 255)` 或者 `rgba(255, 255, 255, 0.5)`

### 普通色
- 详情：`white` `black` `gray` `red` `green` `blue` `yellow` `cyan` `transparent` 