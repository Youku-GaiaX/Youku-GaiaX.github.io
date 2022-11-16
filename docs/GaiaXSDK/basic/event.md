# 事件处理

## 事件绑定规则

前面介绍了模板的文件包含index.databinding，负责来描述模板中的数据、事件、动画的绑定关系。 
我们可以在databinding文件中的event数据模块，对模板中的所有元素都可以进行绑定事件，

## 事件类型
- 可取值：`tap` `longpress`
- 默认值：`tap`
- 详情：事件类型由事件结构中的type来决定。

```json
{
  "nodeId": {
    "type": "tap",
    "params": "$data.action"
  }
}
```

```json
{
  "nodeId": {
    "type": "longpress",
    "params": "$data.action"
  }
}
```

## 事件客户端实现

事件的响应（俗称路由）需要客户端代码的处理。

- Android端示例

```kotlin

// 初始化
GXTemplateEngine.instance.init(activity)

// 模板参数
val params = GXTemplateEngine.GXTemplateItem(activity, "biz", "id")

// 模板绘制尺寸
val size = GXTemplateEngine.GXMeasureSize(GXScreenUtils.getScreenWidthPx(this), null)

// 模板数据
val data = AssetsUtils.parseAssets(activity, "data.json")
val templateData = GXTemplateEngine.GXTemplateData(data)

// 创建模板View
val view = GXTemplateEngine.instance.createView(params, size)!!

templateData.eventListener = object : GXTemplateEngine.GXIEventListener {

    override fun onGestureEvent(gxGesture: GXTemplateEngine.GXGesture) {
        super.onGestureEvent(gxGesture)
        // 处理事件
    }
}

// 绑定数据
GXTemplateEngine.instance.bindData(view, templateData)
```
- iOS端示例

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
