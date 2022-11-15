# 属性动画

## 属性：
| **属性** | **类型** | **取值** | **默认值** | **必填** | **说明** | **最低版本** | **示例** |
| --- | --- | --- | --- | --- | --- | --- | --- |
| type | string | lottie 
prop | 无 | 是 | 动画类型 |  |  |
| trigger | bool | true：手动触发，需要和state配合使用。

false：自动触发 | false | 否 | 是否为手动触发动画 |  |  |
| state | bool | true：不需要

false: 需要 | false | 否 | 是否需要触发动画 |  |  |
| propAnimatorSet.ordering | string | together：同时执行
 sequentially：串行执行 | together | 否 | 动画集合执行模式 |  |  |
| propAnimatorSet.animators |  | propAnimator | 空 | 否 | 动画集合 |  |  |
| propAnimator.delay | int | [0, Int.MaxValue] | 0 | 否 | 启动首次启动动画的延迟时间 |  |  |
| propAnimator.loopCount | int | [0, Int.MaxValue] | 0 | 否 | 动画播放循环次数 |  |  |
| propAnimator.loopMode | string | reset 不需要自动翻转 
例如: [0,1] -> [0,1] -> [0,1]

reverse 需要自动翻转 
例如：[0,1][1,0] -> [0,1][1,0] | reset | 否 | 动画循环播放模式 |  |  |
| propAnimator.duration | int | [0, Int.MaxValue]
单位：毫秒 | 300 | 否 | 动画执行持续时间 |  |  |
| propAnimator.valueType | string | intType
floatType
colorType | 无 | 是 | 动画值类型 |  |  |
| propAnimator.valueFrom | string | Int
Float
Color(十六进制) | 无 | 是 | 动画值起始点 |  |  |
| propAnimator.valueTo | string | Int
Float
Color(十六进制) | 无 | 是 | 动画值结束点 |  |  |
| propAnimator.propName | string | 名：positionX 
含义：视图X轴位置偏移
取值：[-Int.MaxValue, Int.MaxValue]
                           
名：positionY 
含义：视图Y轴位置偏移
取值：[-Int.MaxValue, Int.MaxValue]

名：opacity
含义：视图透明度
取值：[0, 1]

名：scale 
含义：视图X轴、Y轴缩放
取值：[-Int.MaxValue, Int.MaxValue]

名：ration 
含义：视图旋转角度
取值：[0，360]
                            名：renderColor
含义：视图渲染颜色，支持视图背景色
取值：#RGBA | 无 | 是 | 属性名 |  |  |
| propAnimator.interpolator | string |  linear 
accelerate 
decelerate 
standard
anticipate
 overshoot
spring
bounce
cosine
                            | standard | 否 | 插值器 |  |  |

## 注意事项：

- **组合动画不支持嵌套**
```json
{
    "animation":{
        "viewId":{
          
            // 动画类型
            // 不支持表达式
            "type":"prop",
          
            // 是否为手动触发
            // true是手动触发；false是自动触发；
            // 不支持表达式
            "trigger":true,
          
            // 动画是需要被触发，与trigger配合使用，需要业务方传值
            // 支持表达式
            "state":"true/false",
          
            // 属性动画集合
            // 不支持表达式赋值
            "propAnimatorSet":{            
	              // ordering: together 同时执行
                // ordering: sequentially 串行执行
                // 非必传， 默认together
                "ordering":"together",
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
                            // reset 不需要自动翻转 例如: [0,1] -> [0,1] -> [0,1]
                            // reverse 需要自动翻转 例如：[0,1][1,0] -> [0,1][1,0]
                            // 默认reset
                          	"loopMode":"reset/reverse",
                          
                            // 动画执行持续时间
                            // 非必传 默认300
                            "duration":1000,
                          
                            // 动画过渡值类型
                            // 必传
                            "valueType":"intType/floatType/colorType",
                          
                            // 动画值起始点
                            // 支持 整形 浮点型 十六进制（后两位为Alpha通道）
                            // 必传
                            // rotation [0,360*n]
                            // 
                            "valueFrom":"0/0.0/#000000",
                          
                            // 动画值结束点
                            // 支持 整形 浮点型 十六进制（后两位为Alpha通道）
                            // 必传
                            "valueTo":"100/100.0/#FFFFFF",
                          
                            // 属性名
                            // positionX 视图X轴位置偏移
                            // positionY 视图Y轴位置偏移
                            // opacity 视图透明度
                            // scale 视图X轴、Y轴缩放
                            // rotation 视图旋转角度0~360
                            // renderColor 视图渲染颜色，支持视图背景色
                            // 必传
                            "propName":"positionX/positionY/opacity/scaleX/scaleY/ratationX/rotation/renderColor",
                          
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
                            "interpolator":"standard"
                        },
                    }
                    
                ]
            }
        }
    }
}
```
# 示例：
## 位移动画（positionX/positionY）

配置信息：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506073377-d848109b-d7fc-4a9c-a15b-97e2ab52456f.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=411&id=Ms4AK&margin=%5Bobject%20Object%5D&name=image.png&originHeight=822&originWidth=1058&originalType=binary&ratio=1&rotation=0&showTitle=false&size=181956&status=done&style=none&taskId=ue968f48e-bc5f-44e9-84ae-07146b7fe05&title=&width=529)
```json
{
	"animation": {
    "cover-img": {
      "type": "prop",
      "propAnimatorSet": {
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 10,
              "loopMode": "reverse",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "positionX",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "200"
            }
          }
        ]
      }
    }
  }
}
```

## 透明动画（opacity）

配置信息：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506072963-ac84e5ca-e9aa-4fce-b25f-e5ad78e5513d.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=412&id=sQ72d&margin=%5Bobject%20Object%5D&name=image.png&originHeight=824&originWidth=1060&originalType=binary&ratio=1&rotation=0&showTitle=false&size=183537&status=done&style=none&taskId=u906a8a56-6c56-4c6f-8fc5-4616a7d7bf3&title=&width=530)
```json
{
  "animation": {
    "cover-img": {
      "type": "prop",
      "propAnimatorSet": {
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 10,
              "loopMode": "reset",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "opacity",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "1"
            }
          }
        ]
      }
    }
}
```
## 缩放动画（scale）

配置信息:
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506074555-7943d9eb-28f4-4d00-8c9c-b659efa571b6.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=413&id=rNrjy&margin=%5Bobject%20Object%5D&name=image.png&originHeight=826&originWidth=1058&originalType=binary&ratio=1&rotation=0&showTitle=false&size=179358&status=done&style=none&taskId=ub7d32acc-65bc-4d59-bd78-d0ed24b7530&title=&width=529)

```json
{
  "animation": {
    "cover-img": {
      "type": "prop",
      "propAnimatorSet": {
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 3,
              "loopMode": "reverse",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "scale",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "1"
            }
          }
        ]
      }
    }
}
```
## 旋转动画（rotation）

配置信息：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506074222-53a701e3-3cb6-4855-820e-60f2eb47a89c.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=413&id=lWz3a&margin=%5Bobject%20Object%5D&name=image.png&originHeight=826&originWidth=1062&originalType=binary&ratio=1&rotation=0&showTitle=false&size=180425&status=done&style=none&taskId=u1ecc297b-80ac-4adb-b70f-a32668d1f6f&title=&width=531)
```json
{
  "animation": {
    "cover-img": {
      "type": "prop",
      "propAnimatorSet": {
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 3,
              "loopMode": "reset",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "rotation",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "360"
            }
          }
        ]
      }
    }
}
```
## 颜色动画（renderColor）

配置信息：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506074178-2baef45c-bceb-4c6a-a226-c6b4bb21cd02.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=413&id=T9YVn&margin=%5Bobject%20Object%5D&name=image.png&originHeight=826&originWidth=1064&originalType=binary&ratio=1&rotation=0&showTitle=false&size=187776&status=done&style=none&taskId=ubb76a046-25a4-4f81-89d6-a056df44263&title=&width=532)
```json
{
  "animation": {
    "text-area": {
      "type": "prop",
      "propAnimatorSet": {
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reset",
              "duration": 3000,
              "valueType": "colorType",
              "propName": "renderColor",
              "interpolator": "standard",
              "valueFrom": "#00FF00",
              "valueTo": "#0000FF"
            }
          }
        ]
      }
    }
  }
}
```
## 组合动画（renderColor）

配置信息：
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506075941-f9b5b3bc-7b0d-47d5-b096-45b462bc0403.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=685&id=V3r6l&margin=%5Bobject%20Object%5D&name=image.png&originHeight=685&originWidth=530&originalType=binary&ratio=1&rotation=0&showTitle=false&size=129386&status=done&style=none&taskId=u7c197c07-85d5-4880-8961-e6903a8de7c&title=&width=530)
![image.png](https://cdn.nlark.com/yuque/0/2022/png/100538/1647506076173-acd75987-4161-4287-94e4-e375a15970fc.png#clientId=u8313ba8c-57d9-4&crop=0&crop=0&crop=1&crop=1&height=605&id=j9um1&margin=%5Bobject%20Object%5D&name=image.png&originHeight=605&originWidth=534&originalType=binary&ratio=1&rotation=0&showTitle=false&size=130124&status=done&style=none&taskId=uc6149ed3-2c25-4688-9934-5539c508c11&title=&width=534)
```json
{
  "animation": {
    "cover-img": {
      "type": "prop",
      "propAnimatorSet": {
        "ordering": "sequentially",
        "animators": [
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reset",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "positionX",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "500"
            }
          },
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reverse",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "opacity",
              "interpolator": "standard",
              "valueFrom": "1",
              "valueTo": "0"
            }
          },
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reverse",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "scale",
              "interpolator": "standard",
              "valueFrom": "1",
              "valueTo": "0"
            }
          },
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reset",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "rotation",
              "interpolator": "standard",
              "valueFrom": "0",
              "valueTo": "360"
            }
          },
          {
            "propAnimator": {
              "delay": 0,
              "loopCount": 0,
              "loopMode": "reset",
              "duration": 1000,
              "valueType": "floatType",
              "propName": "positionX",
              "interpolator": "standard",
              "valueFrom": "500",
              "valueTo": "0"
            }
          }
        ]
      }
    }
  }
}
```

