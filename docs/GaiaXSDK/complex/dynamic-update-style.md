# 动态更新样式

**绑定规则**
前面介绍了模板的文件包含index.databinding，负责来描述模板中的数据、事件、动画的绑定关系。 
databinding文件中的data数据模块（databinding -> data -> nodeId）：

- value是对于节点数据内容的绑定
- extend是对于节点样式的动态绑定

**表达式语法**
[https://www.yuque.com/biezhihua/gaiax/skq3ad](https://www.yuque.com/biezhihua/gaiax/skq3ad)
## 绑定示例
支持布局属性
[https://www.yuque.com/biezhihua/gaiax/cogl4s](https://www.yuque.com/biezhihua/gaiax/cogl4s)
支持样式属性
[https://www.yuque.com/biezhihua/gaiax/vga7x2](https://www.yuque.com/biezhihua/gaiax/vga7x2)
### 样式绑定
对于样式和布局的修改，我们通常在databinding对应的nodeId结构中的extend架构进行调整。
```json
{
	"data": {
    "nodeId": {
    	"value": "$data.title",
    	"extend": {
        "color": "'#ffffff'", //取静态值
  		  "background-color": "$data.bgColor", //动态取值
        "width": "$data.title ? '100px' : '200px'" //根据条件取值
      }
    }
  }
}
```
