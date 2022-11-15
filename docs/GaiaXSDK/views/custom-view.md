# custom view
## 介绍
custom view 组件是用于开发者自定义的组件。
custom view 组件可以一个支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能的组件（需要开发者实现）。

注意事项：

- 自定义组件必须实现如下接口：
   - 数据绑定接口:
      - Android: com.alibaba.gaiax.GXTemplateEngine.GXICustomViewBindData
      - iOS: - (void)gx_bindData:(id)data
- Android - 自定义组件必须添加Keep注解，防止被混淆。
- 在index.json中，新增节点类型“custom”值类型，用来表明该节点是自定义view。
   - 在同级节点增加“view-class-ios”代表ios节点的节点映射的自定义View。
   - 在同级节点增加“view-class-android”代表anroid节点的节点映射的自定义View。
## 属性
| **属性** | **类型** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- |

## 组件
定义：
```json
{
	"id": "custom_view",
	"type": "custom",
  "view-class-andriod":"com.xxx.xxx.MyCustomLayout",
  "view-class-ios":"xxx"
}
```
样式：
```json
#custom_view {
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
    "custom_view": "$a.b"
  }
}
```
数据：
```json
{
  "data": {
    "custom_view": {
      "value": "$data"
    }
  }
}
```
