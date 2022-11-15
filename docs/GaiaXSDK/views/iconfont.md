# iconfont

## 介绍
iconfont 组件是用于承载文字图标。
iconfont 组件支持 Flexbox 布局、样式、触摸响应、和一些无障碍功能。
## 使用前置条件
在项目工程中实现iconfont字体的加载逻辑：
```kotlin
GXRegisterCenter.instance.registerExtensionFontFamily(object :
    GXRegisterCenter.GXIExtensionFontFamily {
    override fun fontFamily(fontFamilyName: String): Typeface? {
        // 实现IconFont的加载逻辑
        return Typeface.createFromAsset(assets, "$fontFamilyName.ttf")
    }
})
```

iOS端
在项目工程中实现iconfont字体的加载逻辑：
```objectivec
1. 创建类，实现GXBizServiceProtocol中的协议
+ (void)loadIconFont{
    //加载iconfont，确认只调用一次
}

2. 注册到GaiaX中
[[GXRegisterCenter defaultCenter] registerBizServiceImpl:xxx]
```

## 组件
定义:
```
{
  "id": "iconfont_normal",
  "type": "iconfont"
}
```
样式：
```json
#iconfont {
	width:100px;
	text-overflow:ellipsis;
	height:20px;
	font-size:15px;
  ......
}
```
事件：
```
{
  "event": {
    "iconfont": "xxx"
  }
}
```
数据：
```json
{
  "data": {
    "iconfont": {
      "value": "$data.iconfont"
    }
  }
}
```
