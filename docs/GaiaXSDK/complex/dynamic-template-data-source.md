# 模板动态化与扩展数据源

要实现GaiaX的模板动态化，需要三个环节来配合：

1. 需要客户端接入方，扩展数据源（用于存储服务端下发的模板数据）提供给GaiaXSDK。这部分需要投入双端客户端人员，编写接口调用、数据同步等逻辑。
```kotlin
GXRegisterCenter.instance
    .registerExtensionTemplateSource(object :GXRegisterCenter.GXIExtensionTemplateSource{
        override fun getTemplate(gxTemplateItem: GXTemplateEngine.GXTemplateItem): GXTemplate? {
            return null
        }

}, priority)
```

```objectivec
// ---------- 创建 -----------
// 建外部数据源类XXX，遵循GXTemplateSourceProtocal的数据源协议

// 实现以下两个协议方法
// 1、实现优先级的方法
- (NSInteger)priority{
    //[0,99]，数字越大，优先级越高
    return 99;
}

// 2、实现数据源读取方法，返回对应的模板信息
- (NSDictionary *)getTemplateInfoWithTemplateItem:(GXTemplateItem *)templateItem{
    NSDictionary *resultDict = nil;
    return resultDict;
}


// ----------- 使用 -----------

// 在使用之前注册到GaiaX中
id <GXTemplateSourceProtocal> source = [[XXX alloc] init];
[TheGXRegisterCenter registerTemplateSource:_previewTemplateSource];
```

2. 需要GaiaStudio能够开放出来一部分API，用于上传、发布、灰度等等功能，用来和接入业务方的同学进行对接。这部分需要接入方投入服务端资源。（目前GaiaStudio的功能正在开发中）
3. 需要服务端接入方，提供存储模板、管理模板、下发模板等API接口给客户端和GaiaStudio
