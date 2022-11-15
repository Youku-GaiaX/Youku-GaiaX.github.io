# 手动埋点技术方案

## 背景
当前埋点事件的回调时机是在bindData调动的处理过程中，虽然能适应阿里的自动埋点方案，但是无法适应外部主流的手动埋点方案，因此需要扩展当前埋点的技术能力，以适应业务需求。
## 目标
在不影响现有双端Track CallbackrackEvent的为新增回调函数，来用来处理databinding中track域内的埋点信息。

如果为节点设置了track域信息，原有的fun onTrackEvent(gxTrack: GXTrack) {}方法回调则不再执行。
## 方案
### 模板
index.databinding中新增track域，用来设定节点的埋点（点击和曝光）信息，例如：
```json
{
   "track": {
    "nodeId": "$nodeId"
  }
}
```
### SDK
#### 新增手动埋点回调协议
##### 手动点击事件回调
回调时机：
会在事件执行时，SDK内部会回调手动点击事件。
定义：
```kotlin
fun onManualClickTrackEvent(gxTrack: GXTrack) {}
```
##### 手动曝光事件回调
回调时机：
会在业务手动调用onAppear后，SDK内部会回调手动曝光事件
定义：
```kotlin
fun onManualExposureTrackEvent(gxTrack: GXTrack) {}
```
#### 新增可见和不可见事件，接入者需手动调用告知SDK进行曝光回调。
双端新增onAppear和onDisappear方法
```kotlin
fun onAppear(targetView: View) {

}

fun onDisappear(targetView: View) {

}
```
