# 事件处理

## 事件绑定规则

前面介绍了模板的文件包含index.databinding，负责来描述模板中的数据、事件、动画的绑定关系。 
我们可以在databinding文件中的event数据模块，对模板中的所有元素都可以进行绑定事件，

## 事件类型

事件类型由事件结构中的type来决定，目前支持以下两种类型，默认为tap类型:

```json
"nodeId": {
  "type": "tap",
  "params": "$data.action"
}
```

```json
"nodeId": {
  "type": "longpress",
  "params": "$data.action"
}
```

## 示例

### 客户端实现

iOS端实现示例

```objectivec
//iOS端

//templateItem
GXTemplateItem *templateItem = [[GXTemplateItem alloc] init];
templateItem.templateId = @"xxx";
templateItem.bizId = @"xxx";

//创建视图
UIView *view = [TheGXTemplateEngine creatViewByTemplateItem:templateItem
                                                measureSize:CGSizeMake(100, NAN)];


//设置代理
GXTemplateData *data = [[GXTemplateData alloc] init];
data.data = @{};//设置数据源

//设置相关的代理 & 监听
data.eventListener = self;
data.trackListener = self;

//通过bindData触发
[TheGXTemplateEngine bindData:_data onView:_view];


//实现GXEventProtocal事件协议
- (void)gx_onGestureEvent:(GXEvent *)event{
    NSdictionary *params = event.eventParams;
    //to do
}

```
