# 数据绑定

## 数据绑定规则

前面介绍了模板的文件包含index.databinding，负责来描述模板中的数据、事件、动画的绑定关系。 

databinding文件中的data数据模块可用于为节点绑定数据和样式：
- value是对于节点数据内容的绑定
- extend是对于节点样式的绑定

```json
{
	"data": {
		"nodeId": {
			"value": "$data.title",
			"extend": {
				"background-color": "'red'"
			}
		}
  }
}
```

## 数据绑定

### 取值绑定

对于节点内容的修改，我们通常在databinding对应的nodeId结构中的value字段中进行调整。

```json
{
	"nodeId": {
		// 静态值 - 静态文本
		"value": "'这是一个静态文本'",
		// 动态值 - 直接取值
		"value": "$data.title",
		// 动态值 - 通过条件表达式取值
		"value": "$data.title != null ?: '默认文本'"
	}
}
```
### 样式绑定

对于样式和布局的修改，我们通常在databinding对应的nodeId结构中的extend结构进行调整。

```json
{
	"extend":{
		// 静态值 - 静态文本
		"color": "'#ffffff'", 
		// 动态值 - 直接取值
		"background-color": "$data.bgColor", 
		// 动态值 - 通过条件表达式取值
		"width": "$data.title != null ? '100px' : '200px'" 
	}
}
```
