# 手动埋点（点击与曝光）

## 模板定义

index.databinding中新增track域，用来设定节点的埋点（点击和曝光）信息，例如：

```json
{
   "track": {
      "nodeId": "$nodeId"
  }
}
```

## 客户端实现

### Android

处理手动埋点（点击与曝光）：

```kotlin

......

templateData.trackListener = object : GXTemplateEngine.GXITrackListener {
    override fun onManualClickTrackEvent(gxTrack: GXTemplateEngine.GXTrack) {
        // 手动处理点击事件
        Log.d(TAG, "onManualClickTrackEvent() called with: gxTrack = $gxTrack")
    }

    override fun onManualExposureTrackEvent(gxTrack: GXTemplateEngine.GXTrack) {
        // 手动处理曝光事件
        Log.d(TAG, "onManualExposureTrackEvent() called with: gxTrack = $gxTrack")
    }
}

......

```

通知视图可见与不可见，告知SDK进行曝光回调：

```kotlin

// 通知视图可见
GXTemplateEngine.instance.onAppear(view)

// 通知视图不可见
GXTemplateEngine.instance.onDisappear(view)

```

### iOS

处理手动埋点（点击与曝光）：

```objectivec
```

通知视图可见与不可见，告知SDK进行曝光回调：

```objectivec
```
