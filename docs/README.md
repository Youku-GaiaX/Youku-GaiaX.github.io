---
home: true
title: Home
actions:
  - text: 开始
    link: /gaiaxsdk/quick-start.html
    type: primary
  - text: 介绍
    link: /gaiaxsdk/introduce.html
    type: secondary
features:
  - title: 适配双端
    details: 一套模板、多端渲染，通过多种技术手段来保证极致的渲染效率和逼近原生的性能体验。
  - title: 可视化搭建
    details: 可视化的搭建工具，快速完成模板的搭建、编辑、预览、调试，以开发者熟悉的操作方式进行设计，学习成本降至最低。
  - title: 实时预览
    details: 通过实时预览的能力，在真机上实现秒级的模板更新和预览，从此不再等待工程构建、编译和安装。
footer: Apache-2.0 license | Copyright©2022 优酷 youku.com 版权所有
---

### 简单、还是简单！

<CodeGroup>
  <CodeGroupItem title="Android" active>

```kotlin
// Initialization - Initializes the SDK
GXTemplateEngine.instance.init(activity)

// Template information
val item = GXTemplateEngine.GXTemplateItem(activity, "templateBiz", "templateId")

val size = GXTemplateEngine.GXMeasureSize(100F.dpToPx(), null)

// Template data
val dataJson = AssetsUtils.parseAssets(activity, "template-data.json")
val data = GXTemplateEngine.GXTemplateData(dataJson)

// Create template View
val view = GXTemplateEngine.instance.createView(item, size)

// Bind the view data
GXTemplateEngine.instance.bindData(view, data)

// Insert the template into the container for rendering
findViewById<ViewGroup>(R.id.template_container).addView(view, 0)
```

  </CodeGroupItem>

  <CodeGroupItem title="iOS">
  
```objc
// register template service
[TheGXRegisterCenter registerTemplateServiceWithBizId:bizId templateBundle:@"xxx.bundle"];

// Build template parameters - Template information
GXTemplateItem *item = [[GXTemplateItem alloc] init];
item.templateId = templateId;
item.bizId = templateBiz;

CGSize size = CGSizeMake(1080, NAN);

// Template data
GXTemplateData *data = [[GXTemplateData alloc] init];
data.data = @{@"xxx": @"xxx"};

// Creates a native View based on template parameters
UIView *view = [TheGXTemplateEngine creatViewByTemplateItem:item measureSize:size];

// Bind the view data
[TheGXTemplateEngine bindData:data onView:view];

// Insert the template into the container for rendering
[self.view addSubview:view];
```

  </CodeGroupItem>
</CodeGroup>
