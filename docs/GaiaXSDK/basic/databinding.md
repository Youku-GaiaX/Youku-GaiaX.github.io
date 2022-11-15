# 数据绑定

## 数据绑定规则
前面介绍了模板的文件包含index.databinding，负责来描述模板中的数据、事件、动画的绑定关系。 
databinding文件中的data数据模块（databinding -> data -> nodeId）：

- value是对于节点数据内容的绑定
- extend是对于节点样式的动态绑定

数据结构示例：
```json
{
	"data": {
    "nodeId": {
    	"value": "$data.title",
    	"extend": {
      	//用于动态更新样式
        "background-color": "'red'"
      }
    }
  }
}
```

## 数据绑定
在取值时，支持设置静态内容的绑定，也可以支持动态内容的绑定。
### 取值绑定

1. 静态内容
```json
{
	"nodeId"：{
		"value": "'这是一个静态文本'"
	}
}
```

2. 动态内容
```json
// 直接取值
{
	"nodeId"：{
		"value": "$data.title"
	}
}

// 通过条件表达式取值

{
	"nodeId"：{
		"value": "$data.title != null ?: '默认文本'"
	}
}
```
### 样式绑定
对于样式和布局的修改，我们通常在databinding对应的nodeId结构中的extend架构进行调整。
```json
{
	"nodeId"：{
		"value": "$data.title",
 	  "extend":{
  		"color": "'#ffffff'", //取静态值
  		"backgroud-color": "$data.bgColor", //动态取值
  		"width": "$data.title != null ? '100px' : '200px'" //根据条件取值
		}
	}
}
```

## 示例
```json
{
	"data": {
    "nodeId": {
    	"value": "$data.title",
    	"extend": {
      	//用于动态更新样式
        "background-color": "red",
        "color": "@$data.title != null ? 'red' : 'green'"
      }
    }
  }
}
```