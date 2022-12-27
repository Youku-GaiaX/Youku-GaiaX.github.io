# 动画 - Property

## 属性

### type
- 类型：`string`
- 可取值： `lottie` `prop`
- 描述：

    动画类型

### trigger
- 类型：`bool`
- 可取值： 
    
    `true`：手动触发，需要和state配合使用。
    
    `false`：自动触发

- 默认值：`false`
- 描述：

    是否手动触发动画


### state
- 类型：`bool`
- 可取值： 
    
    `true`：需要。
    
    `false`：不需要。

- 默认值：`false`
- 描述：

    是否需要触发动画


### propAnimatorSet.ordering
- 类型：`string`
- 可取值： 
    
    `together`：同时执行。
    
    `sequentially`：串行执行。

- 默认值：`together`
- 描述：

    动画集合执行模式

### propAnimatorSet.delay
- 类型：`number`
- 可取值： `[0, Int.MaxValue]`
- 默认值：`0`
- 描述：

    动画播放的延迟时间

### propAnimatorSet.loopCount
- 类型：`number`
- 可取值： `[0, Int.MaxValue]`
- 默认值：`0`
- 描述：

    动画播放的循环次数

### propAnimatorSet.loopMode
- 类型：`string`
- 可取值： 
    `reset`：不需要自动翻转，例如：[0,1] -> [0,1] -> [0,1]。
    `reverse`：需要自动翻转：例如：[0,1][1,0] -> [0,1][1,0]]。

- 默认值：`reset`
- 描述：

    动画循环播放模式

### propAnimatorSet.duration
- 类型：`number`
- 可取值：`[0, Int.MaxValue]`
- 默认值：`300`
- 单位：ms
- 描述：

    动画执行持续时间

### propAnimatorSet.valueType
- 类型：`string`
- 可取值：`intType` `floatType` `colorType`
- 描述：

    动画值类型

### propAnimatorSet.valueFrom
- 类型：`string`
- 可取值：`number` `color`
- 描述：

    动画值起始点

### propAnimatorSet.valueTo
- 类型：`string`
- 可取值：`number` `color`
- 描述：

    动画值结束点

### propAnimatorSet.propName
- 类型：`string`
- 可取值：
  `positionX`：视图X轴位置偏移，`[-Int.MaxValue, Int.MaxValue]`。
  
  `positionY`：视图Y轴位置偏移，`[-Int.MaxValue, Int.MaxValue]`。
  
  `opacity`：视图透明度，`[0, 1]`。

  `scale`：视图X轴、Y轴缩放，`[-Int.MaxValue, Int.MaxValue]`。

  `ration`：视图旋转角度，`[0，360]`。  
  
  `renderColor`：视图渲染颜色，支持视图背景色，`#RGBA`。

- 描述：

    属性名

### propAnimatorSet.interpolator
- 类型：`string`
- 可取值：`accelerate` `standard` `decelerate` `anticipate` `overshoot` `spring` `bounce` `cosine`
- 默认值：`standard`
- 描述：

    插值器


## 示例

### 代码示例
```json
{
    "animation":{
        "viewId":{
          
            // 动画类型
            // 不支持表达式
            "type":"'prop'",
          
            // 是否为手动触发
            // true是手动触发；false是自动触发；
            // 不支持表达式
            "trigger":true,
          
            // 动画是需要被触发，与trigger配合使用，需要业务方传值
            // 支持表达式
            "state":true / false,
          
            // 属性动画集合
            // 不支持表达式赋值
            "propAnimatorSet":{            
	        // ordering：together 同时执行
                // ordering：sequentially 串行执行
                // 非必传， 默认together
                "ordering":"'together'",
             	// 动画组合
                "animators":[
                    {
                        // 属性动画描述信息
                        // 注意：动画播放完成后会保持在动画终态
                        // 这里需要注意和loopMode的组合关系，
                        // 在reverse状态下，如果from=0，to=1，那么终态是0；
                        // 在reset状态下，如果from=0，to=1，那么终态是1；
                        "propAnimator":{
                          
                            // 启动首次启动动画的延迟时间
                            // 非必传，默认0
                            "delay":0,
                          
                            // 循环次数
            		    // 不支持表达式
                            // 默认值0
            		    "loopCount":0, 
                          	
                            // 动画循环播放模式
                            // reset 不需要自动翻转 例如：[0,1] -> [0,1] -> [0,1]
                            // reverse 需要自动翻转 例如：[0,1][1,0] -> [0,1][1,0]
                            // 默认reset
                            "loopMode":"'reset/reverse'",
                          
                            // 动画执行持续时间
                            // 非必传 默认300
                            "duration":1000,
                          
                            // 动画过渡值类型
                            // 必传
                            "valueType":"'intType/floatType/colorType'",
                          
                            // 动画值起始点
                            // 支持 整形 浮点型 十六进制（后两位为Alpha通道）
                            // 必传
                            // rotation [0,360*n]
                            // 
                            "valueFrom":"'0/0.0/#000000'",
                          
                            // 动画值结束点
                            // 支持 整形 浮点型 十六进制（后两位为Alpha通道）
                            // 必传
                            "valueTo":"'100/100.0/#FFFFFF'",
                          
                            // 属性名
                            // positionX 视图X轴位置偏移
                            // positionY 视图Y轴位置偏移
                            // opacity 视图透明度
                            // scale 视图X轴、Y轴缩放
                            // rotation 视图旋转角度0~360
                            // renderColor 视图渲染颜色，支持视图背景色
                            // 必传
                            "propName":"'positionX/positionY/opacity/scaleX/scaleY/ratationX/rotation/renderColor'",
                          
                            // 插值器
                            // 非必传，默认standard
                            // https://yuque.antfin-inc.com/yk_vip/nkx2wn/oi375o
                            // linear iOS：MCXCurveTypeLinear；Android：MotionCurveXLinearInterpolator
                            // accelerate iOS：MCXCurveTypeAccelerate；Android：MotionCurveXAccelerateInterpolator
                            // decelerate iOS：MCXCurveTypeDecelerate；Android：MotionCurveXDecelerateInterpolator
                            // standard iOS：MCXCurveTypeStandard；Android：MotionCurveXStandardInterpolator
                            // anticipate iOS：MCXCurveTypeAnticipate；Android：MotionCurveXAnticipateInterpolator
                            // overshoot iOS：MCXCurveTypeOvershoot；Android：MotionCurveXOvershootInterpolator
                            // spring iOS：MCXCurveTypeSpring；Android：MotionCurveXSpringInterpolator
                            // bounce iOS：MCXCurveTypeBounce；Android：MotionCurveXBounceInterpolator
                            // cosine iOS：MCXCurveTypeCosine；Android：MotionCurveXCosineInterpolator
                            "interpolator":"'standard'"
                        },
                    }
                    
                ]
            }
        }
    }
}
```
### 位移动画（positionX/positionY）

```json
{
"animation": {
    "cover-img":{
      "type":"'prop'",
      "propAnimatorSet":{
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":10,
              "loopMode":"'reverse'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'positionX'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":200
            }
          }
        ]
      }
    }
  }
}
```

### 透明动画（opacity）

```json
{
  "animation":{
    "cover-img":{
      "type":"'prop'",
      "propAnimatorSet":{
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":10,
              "loopMode":"reset",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'opacity'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":1
            }
          }
        ]
      }
    }
}
```
### 缩放动画（scale）

```json
{
  "animation":{
    "cover-img":{
      "type":"'prop'",
      "propAnimatorSet":{
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":3,
              "loopMode":"'reverse'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'scale'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":1
            }
          }
        ]
      }
    }
}
```
### 旋转动画（rotation）

```json
{
  "animation":{
    "cover-img":{
      "type":"'prop'",
      "propAnimatorSet":{
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":3,
              "loopMode":"'reset'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'rotation'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":360
            }
          }
        ]
      }
    }
}
```
### 颜色动画（renderColor）

```json
{
  "animation":{
    "text-area":{
      "type":"'prop'",
      "propAnimatorSet":{
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reset'",
              "duration":3000,
              "valueType":"'colorType'",
              "propName":"'renderColor'",
              "interpolator":"'standard'",
              "valueFrom":"'#00FF00'",
              "valueTo":"'#0000FF'"
            }
          }
        ]
      }
    }
  }
}
```
### 组合动画（renderColor）

```json
{
  "animation":{
    "cover-img":{
      "type":"'prop'",
      "propAnimatorSet":{
        "ordering":"'sequentially'",
        "animators":[
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reset'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'positionX'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":500
            }
          },
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reverse'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'opacity'",
              "interpolator":"'standard'",
              "valueFrom":1,
              "valueTo":0
            }
          },
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reverse'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'scale'",
              "interpolator":"'standard'",
              "valueFrom":1,
              "valueTo":0
            }
          },
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reset'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'rotation'",
              "interpolator":"'standard'",
              "valueFrom":0,
              "valueTo":360
            }
          },
          {
            "propAnimator":{
              "delay":0,
              "loopCount":0,
              "loopMode":"'reset'",
              "duration":1000,
              "valueType":"'floatType'",
              "propName":"'positionX'",
              "interpolator":"'standard'",
              "valueFrom":500,
              "valueTo":0
            }
          }
        ]
      }
    }
  }
}
```

