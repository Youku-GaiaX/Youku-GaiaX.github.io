# 快速开始

## 使用模板Studio进行可视化搭建

为了简化模板UI的构建过程，优酷动态模板引擎技术方案开发了配套的模板可视化搭建工具Studio，通过该工具平台，可以让开发者像操作XCode或AndroidStudio一样，通过拖拽、点选的方式完成模板构建的全过程。接下来我们通过一个简单的模板搭建来介绍一下整个流程。

### 流程示意

-  第一步：下载安装[模板可视化搭建工具Studio](https://dl-oss-wanju.youku.com/gaia-opensource/gaia-studio/mac/Gaia%20Studio-0.1.8.dmg)

- 第二步：创建模板 

![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01K30S6z1ludCMlxpx8_!!6000000004879-2-tps-750-532.png)

-  第三步：创建模板中节点信息 

![image.png](https://gw.alicdn.com/imgextra/i2/O1CN016g3JA31DQgMaqfRHg_!!6000000000211-2-tps-750-532.png)

-  第四步：修改节点对应的样式和属性信息 

![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01VchP1m1SUXwZrwthw_!!6000000002250-2-tps-750-555.png)

-  第五步：对模板进行数据和事件绑定 

![910EA8E7-FF46-42C1-B680-3124DEBEF8CB.png](https://gw.alicdn.com/imgextra/i1/O1CN01eEPKox1Ws8o2iHdny_!!6000000002843-2-tps-1194-650.png)
### 模板内容

通过Studio完成模板搭建，最终生成的模板文件如下：

- 层级关系（index.json）

```json
{
  "id": "HelloWorld",
  "uid": "2c78a1b6fddd22097e99188be51e3cfa",
  "type": "gaia-template",
  "package": {
    "id": "HelloWorld",
    "version": "0.0.1",
    "modify-timestamp": "Mon Feb 14 2022 14:48:25 GMT+0800 (中国标准时间)",
    "constraint-size": {
      "width": 375,
      "height": 240,
      "zoom": 1
    }
  },
  "layers": [
    {
      "id": "text",
      "uid": "51382fcf22589aeb7f07d7342eaac75f",
      "type": "text"
    }
  ]
}
```

- 布局/样式 （index.css）

```css
#HelloWorld {
  width: 100%;
  height: 240px;
  align-items: center;
  background-color: green;
}

#text {
  width: 100%;
  height: 30px;
  color: #ff0303;
  font-size: 25px;
  font-weight: 700;
  line-height:30px;
  text-align: center;
  text-overflow: ellipsis;
}
```

- 数据/事件绑定关系（index.databinding）

```json
{
	"data": {
		"text": {
			"value": "'Hello World'"
		}
	}
}
```

## 使用DemoApp扫码预览验证模板

1. 运行安装DemoApp到手机上。
2. 启动Demo App
3. 点击Fast Preview Button进入实时预览页面。
4. 对Studio扫码建立预览关系。
5. Demo App上显示Studio模板的UI样式。

![image.png](https://gw.alicdn.com/imgextra/i1/O1CN018UbM291OGZOQXHtqW_!!6000000001678-2-tps-750-555.png)

## 模板内置
### iOS:
在iOS的工程或者frameWork中添加.bundle文件，将Studio搭建模板导出之后，拖入到对应的bundle目录下即可。
### Android:
从Studio搭建的模板需要导出后，放置到assets目录下的业务文件夹下，以方便渲染时索引模板。

例如：业务ID是template-biz-id，模板ID是template-mock-id，那么在assets的下的结构如下：
```json
- src
	- main
		- assets // 资源根目录
			- template-biz-id // 业务模板目录
				- template-mock-id  // 业务模板
	- java
	- res
```

## 工程依赖
### iOS:
在Podfile添加GaiaX对应的依赖
```json
pod GaiaXiOS
```
### Android:
```json
implementation 'com.alibaba.gaiax:GaiaX:0.0.1'
```

## 项目初始化
### iOS:
在合适的时机进行模板的注册，以及SDK的初始化
```objectivec
1. 模板注册：
[TheGXRegisterCenter registerTemplateServiceWithBizId:@"Test" templateBundle:@"GaiaXiOSTests.bundle"];

2. SDK初始化
[GXTemplateEngine sharedInstance]
```
### Android:
在合适的时机调用SDK初始化方法
```json
GXTemplateEngine.instance.init(activity or application)
```

## 模板渲染
### iOS:
```objectivec
// SDK使用方式

// 引入头文件
#import <GaiaXiOS/GaiaXiOS.h>

// 构建模板参数     - 模板信息
// templateBiz    - 业务Id
// templateId     - 模板Id
GXTemplateItem *item = [[GXTemplateItem alloc] init];
item.templateId = templateId;
item.bizId = templateBiz;

// 构建模板参数     - 视口大小(模板绘制尺寸)
CGSize size = CGSizeMake(375, NAN);

// 构建模板参数     - 模板数据
GXTemplateData *data = [[GXTemplateData alloc] init];
data.data = @{@"xxx": @"xxx"};

// 创建模板视图     - 根据模板参数创建出一个原生View
UIView *view = [TheGXTemplateEngine creatViewByTemplateItem:item measureSize:size];

// 视图绑定数据
[TheGXTemplateEngine bindData:data onView:view];

// 将插入模板插入到容器中进行渲染
[self.view addSubview:view];
```
### Android:
```kotlin
// 构建模板参数     - 模板信息
// templateBiz    - 业务Id
// templateId     - 模板Id
val params = GXTemplateEngine.GXTemplateItem(activity, templateBiz, templateId)

// 构建模板参数     - 视口大小(模板绘制尺寸)
val size = GXTemplateEngine.GXMeasureSize(screenWidth, null)

// 构建模板参数     - 模板数据
val templateData = GXTemplateEngine.GXTemplateData(JSONObject().apply{
		// datas
})

// 创建模板视图     - 根据模板参数创建出一个原生View
val view = GXTemplateEngine.instance.createView(params, size)

// 视图绑定数据
GXTemplateEngine.instance.bindData(view, templateData)

// 将插入模板插入到容器中进行渲染
findViewById<LinearLayoutCompat>(R.id.template_1).addView(view, 0)
```

## 视觉效果

基于前面介绍的三个模板文件，最终渲染的UI视图如下：

![image.png](https://gw.alicdn.com/imgextra/i3/O1CN01qRwJsJ1gLkxkPOVkg_!!6000000004126-2-tps-1284-718.png)
