# 布局

## 介绍

采用FlexBox的布局模型，支持css的子集以及部分扩展属性，包含静态布局属性和动态布局属性两个部分：
- 静态属性：写在index.css文件中固定样式。
- 动态属性：写在index.databinding文件中，根据数据和表达式可以动态修改的样式。

## 扩展的布局属性

### aspect-ratio
- 默认值: `null`
- 详情: 用于设置组件的宽高比（宽 / 高），忽略主轴和交叉轴，不再代表纵横比。

## 单位说明

### px
- 详情：Android上表现为dp；iOS表现为pt。

### pt 
- 详情：pt = px  * （当前屏幕宽度 / 375.F）。

### %
- 详情：使用外层元素的容纳区块的百分比定义。

### auto
- 详情：能为弹性布局指明更合理的默认表现。

## 参考资料

- [CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
- [Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
