# view
## 介绍
view 组件是最基础的组件。
view 组件是一个支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能的容器。
view 组件在设计上是可以嵌套使用的，也可以有任意多个任意类型的子视图。
## 组件映射关系
| 组件类型 | Android | iOS | 描述 |
| --- | --- | --- | --- |
| view | AbsoluteLayout | UIView | 一个容器，可以包含零个或者多个子视图，例如：text、image、scroll、grid等。其自身也可以拥有背景、圆角等属性。 |

## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |

## 组件
定义：
```json
{
  "id": "view_normal",
  "type": "view"
}
```
样式：
```json
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

### 
