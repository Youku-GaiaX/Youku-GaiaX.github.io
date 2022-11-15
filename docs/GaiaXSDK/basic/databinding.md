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
## 表达式语法
[https://yuque.antfin-inc.com/gaia/document/pv5k64](https://yuque.antfin-inc.com/gaia/document/pv5k64)

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
# 模板数据源传递案例和注意事项
## 普通模板嵌套容器模板
### 数据源：
```json
{
  "data": {
    "text": "uper text",
    "id": "uper id",
    "nodes":[
      {
        "data":{
          "text": "item1 text",
          "id": "item1 id"
        }
      },
      {
        "data":{
          "text": "item2 text",
          "id": "item2 id"
        }
      }
    ]
  }
}
```
### 模板：

![image.png](https://gw.alicdn.com/imgextra/i4/O1CN01zr6ZTt1RILmLuI9bg_!!6000000002088-2-tps-718-558.png)

其中，**gx-template-uper**为普通模板，嵌套容器模板**gx-template-uper-grid**，容器的item为**gx-template-uper-item**。
### 数据绑定
顶层的模板是直接设定数据源的，所以不需要手动赋予数据源，可以直接写取值逻辑，如**uper**；而对于模板的节点，则需要手动赋予数据源。
在例子中，我们将 **$data.nodes **传递给**grid**模板，那么当我们在**grid**模板中使用**$$**取数据源的时候，返回的结果是**$data.nodes**，即**uper**传入的数据。
要注意的是，在使用Grid或Scroll这类模板的时候，给item传入的不能是Object，而应该是包含多个Object的数组，即样例中的**$data.nodes**，其中包含多个item的数据。
```json
# 此处可传$data.nodes 或 $$
# 若传$$，则需在grid模板中给item传$data.nodes
# gx-template-uper：
{
  "data":{
    "gx-template-uper-grid":{
      "value": "$data.nodes"
    }
  }
}

# gx-template-uper-grid：
{
  "data":{
    "gx-template-uper-item":{
      "value": "$$"
    }
  }
}

# gx-template-uper-item：
{
  "data":{
    "gx-template-uper-item-text":{
      "value": "$data.text"
    },
    "gx-template-uper-item-id":{
      "value": "$data.id"
    }
  }
}
```
## 普通模板嵌套普通模板
### 数据源：
```json
{
  "data": {
    "text": "uper text",
    "id": "uper id",
    "nodes":[
      {
        "data":{
          "text": "item1 text",
          "id": "item1 id"
        }
      }
    ]
  }
}
```
### 模板：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26768431/1650960447541-53aa8f3a-4265-45a6-98b7-800c8c2fa3c8.png#clientId=u1ad69152-29c5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=279&id=uf3ca3394&name=image.png&originHeight=558&originWidth=718&originalType=binary&ratio=1&rotation=0&showTitle=false&size=110329&status=done&style=none&taskId=u826e3fc3-021e-42db-972c-af3c1a7d944&title=&width=359)
本例子中，**gx-template-uper**模板嵌套一个普通模板**gx-template-uper-item**。
### 数据绑定：
```json
# gx-template-uper：
{
  "data":{
    "gx-template-uper-text":{
      "value": "$data.text"
    },
    "gx-template-uper-item":{
      "value": "$data.nodes[0]"
    }
  }
}

# gx-template-uper-item：
{
  "data":{
    "gx-template-uper-item-text":{
      "value": "$data.text"
    },
    "gx-template-uper-item-id":{
      "value": "$data.id"
    }
  }
}
```
## 注意事项
#### 一、数据源传递
除了最上层的模板可以直接获取数据源外，其余所有的子模板均需要手动传递数据源，组件均需要手动配置对应的值。
```json
{
  "data": {
    "gx-template": {
      "value": "$data.nodes"  
    }
  }
}
```
在例子中，**$data.nodes**即为上层模板传递给**gx-template**的数据，也就是说，在**gx-template**的DataBinding中，通过**$$**取得的数据源为我们传入的**$data.nodes**。
#### 二、容器模板数据传递
如：Scroll和Grid类型的模板，在传递数据源时，需要传递的数据类型应为Object数组，即所需要展示的item数组，如：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26768431/1650960447586-2cad07b7-ce3d-4b95-867f-ad8eba52e3d6.png#clientId=u1ad69152-29c5-4&crop=0&crop=0&crop=1&crop=1&from=paste&height=73&id=u1b158c99&margin=%5Bobject%20Object%5D&name=image.png&originHeight=146&originWidth=656&originalType=binary&ratio=1&rotation=0&showTitle=false&size=30221&status=done&style=none&taskId=uf4ce1e8b-fe18-4a02-8454-4b010df5de7&title=&width=328)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/26768431/1650960447657-f933b3f2-f627-4938-96ce-f64c80740333.png#clientId=u1ad69152-29c5-4&crop=0.0118&crop=0&crop=1&crop=1&from=paste&height=103&id=u90e55b32&margin=%5Bobject%20Object%5D&name=image.png&originHeight=208&originWidth=676&originalType=binary&ratio=1&rotation=0&showTitle=false&size=49535&status=done&style=none&taskId=uc88f3c8f-8e4b-4b24-b6f4-9debb73448f&title=&width=334)
```json
# gx-template-scroll
{
  "data": {
    "gx-template": {
      "value": "$data.nodes"  
    }
  }
}
# gx-template-scroll-item
{
  "data":{
    "gx-template-scroll-item-text":{
      "value": "$data.text"
    },
    "gx-template-scroll-item-id":{
      "value": "$data.id"
    }
  }
}
```
在使用Scroll或Grid类型的模板时，我们只需要给模板设定对应的item，并且对item的DataBinding进行对应坑位的配置，然后在上层模板传递item数组作为数据源即可。
