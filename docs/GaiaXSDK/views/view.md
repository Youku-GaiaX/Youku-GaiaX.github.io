# view

## 介绍

view 组件是最基础的组件。
view 组件是一个支持 FlexBox 布局、样式、触摸响应、和一些无障碍功能的容器。
view 组件在设计上是可以嵌套使用的，也可以有任意多个任意类型的子视图。

## 组件

定义：
```json
{
  "id": "view_normal",
  "type": "view"
}
```
样式：
```css
#view_normal {
	width:100px;
	height:100px;
	background-color:#e4e4e4;
  ......
}
```
事件：
```json
{
  "event": {
    "view_normal": "${}"
  }
}
```

