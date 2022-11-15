
# 简介

## 动态模板引擎是什么

动态模板引擎是阿里巴巴优酷技术团队研发的一套轻量级的纯Native动态化卡片跨端解决方案。

除了客户端渲染SDK，还提供了配套的模板可视化搭建工具和详情的功能Demo（模板示例，以及扫码预览），支持从模板搭建/编辑、真机调试/预览等研发链路技术支撑，优酷动态模板引擎的目标是在保证Native体验性能的同时，帮助客户端开发领域实现低代码。
## 方案特点

- **可视化工具模板搭建**
提供Sketch插件、模板可视化搭建Studio两个配套研发工具，通过可视化的方案快速完成模板导出、搭建、编辑等工作，同时配合扫码预览工具快速完成模板预演，以及视觉验收等工作。 
-  **FlexBox布局**
基于StretchKit实现FlexBox来作为引擎的布局方式，底层采用rust语言保证了整体方案的高性能和跨平台特性。 
-  **跨端解决方案**
保证多端技术体验一致性，实现一套模板、多端渲染，全面提升研发效能 
-  **纯Native渲染，保证客户端体验**
保证客户端渲染成功率，通过视图拍平等优化提升页面的滚动帧率 

## 核心概念
![image.png](https://gw.alicdn.com/imgextra/i1/O1CN01eKpSub1U1oK6Ju0Tl_!!6000000002458-2-tps-1754-1082.png)

动态模板引擎技术方案将组件抽象为四类数据模型，如上图所示的布局、样式、数据、事件响应，通过这四类数据的有机组合，我们可以完成对一个组件从UI渲染到逻辑处理的全部描述。 在物理层面，模板由三个文件单元构成，分别为index.json，index.css，index.databinding，具体功能如下：

#### 层级关系（index.json）

-  描述模板的视图类型，以及视图的层级与嵌套关系。 
-  描述模板的package关系，包含模板的版本，依赖，以及创建修改信息等。 
-  示例：  
```json
{
	"type": "gaia-template",
	"id": "HelloWorld",
	"layers": [
		{
      "type": "text",
			"id": "text",
			"uid": "01cd18053f2337792b154d7d707ccc07"
		}
	],
	"package": {
		"engines": {
			"gaiax": ">=0.0.1"
		},
		"id": "HelloWorld",
		"version": "0",
		"priority": "0",
		"modify-timestamp": "Thu Jul 02 2020 11:33:51 GMT+0800 (中国标准时间)",
		"dependencies": {}
	}
}
```

#### 布局/样式 (index.css)

-  描述模板的布局和样式信息。 
-  采用的是FlexBox布局（子集），并在此基础上进行部分扩展。 
-  示例：  
```css
#HelloWorld {
  width:100%;
  height:240px;
  background-color:green;
}

#text {
  width:100%;
  height:30px;
  color: red;
  font-size:25px;
  font-weight:700;
  line-height:25px;
  text-align:center;
  align-self:center;
}
```

#### 数据事件 (index.databinding)

-  用来描述模板中的数据、事件、动画的绑定关系。 
-  支持通过表达式来进行动态的修改数据，样式等。 
-  支持设置无障碍内容。 
-  示例：  
```json
{
	"data": {
		"text": {
			"value": "Hello World"
		}
	}
}
```

## UI示例

基于前面介绍的三个模板文件，最终渲染的UI视图如下：

![image.png](https://gw.alicdn.com/imgextra/i3/O1CN01qRwJsJ1gLkxkPOVkg_!!6000000004126-2-tps-1284-718.png)
