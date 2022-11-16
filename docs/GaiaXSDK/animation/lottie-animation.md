# Lottie动画

## 属性

### type
- 类型：`string`
- 可取值：`lottie` `prop`
- 描述：动画类型

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

### lottieAnimator.value
- 类型：`string`
- 描述：

    lottie动画本地资源名称

### lottieAnimator.url
- 类型：`string`
- 描述：

    lottie动画远程URL

### lottieAnimator.loop
- 类型：`bool`
- 可取值： 
    
    `true`：需要。
    
    `false`：不需要。

- 默认值：`false`
- 描述：

    动画是否循环播放

### lottieAnimator.bundle
- 类型：`string`
- 描述：

    lottie动画的bundle（只针对有资源的lottie，iOS有效）


## 实现：

### Android实现

不需要接入方实现

### iOS实现

iOS在使用lottie动画需要根据业务使用的版本，需要根据lottie的动画协议，将lottie对应的动画实现类进行注册进来。

Lottie动画协议 (业务实现)。

```objectivec
// lottie动画协议
GXLottieAniamtionProtocal

// animationInfo: {"isLocal": "true", "lottieUrl": "xxx", "loopCount": "-1"}
- (void)gx_playAnimation:(NSDictionary *)animationInfo completion:(void (^ __nullable)(BOOL finished))completion;

- (BOOL)gx_isAnimationPlaying;

- (void)gx_stop;
```

实现Lottie动画协议之后，通过GXRegisterCenter将实现注册进来。

```objectivec
// 注册类
GXRegisterCenter

// lottie协议类
@property (nonatomic, readonly) Class <GXLottieAniamtionProtocal> lottieViewClass

// lottie注册方法
- (void)registerLottieViewClass:(Class <GXLottieAniamtionProtocal>)aClass;


//调用示例
[[GXRegisterCenter defaultCenter] registerLottieViewClass:[xxxx class]];
```

## 示例
```json
{
    "data": {
        //数据绑定
    },
    "event": {
        //事件绑定
    },
    //动画定义
    "animation": {
        //动画对应的nodeId
        "like-animation": {
            
            //动画类型
            "type": "lottie",
            
            //是否为手动触发
            // true是手动触发；false是自动触发；
            "trigger": true,
            
            //动画是否正在被触发，与trigger配合使用，需要业务方传值
            "state": true,

          	"lottieAnimator": {
									//动画是否循环播放（只对自动播放动画生效）
			            "loop":true, 
              
                        //lottie动画的bundle（只针对有资源的lottie，iOS有效）
            			"bundle":"gaiax.bundle",
            
            			// 动画的本地资源名称
            			"value": "feed_like_cancel_20200601_data",
            
            			// 动画的远程URL
            			"url":"http://xxx",
              
              		    // 动画的本地资源名称
           				"value": "feed_like_cancel_20200601_data",
            }
        }
    }
}
```
