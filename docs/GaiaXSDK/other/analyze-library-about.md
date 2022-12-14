# 方案 - 表达式库包大小治理&Debug开关

### 背景
在GaiaXAnalyze打包过程中，我们发现GaiaXAnalyze.so包大小较大，为此我们针对GaiaXAnalyze库进行了一系列包大小改造。

### 方案

#### 编译选项使用

在GXAnalyzeCore以及GXJniAnalyze的CMakeList中，我们使用了一系列的包大小优化编译选项。

![image.png](https://gw.alicdn.com/imgextra/i2/O1CN01vcNXwo1mNU9OrlXSs_!!6000000004942-2-tps-750-133.png)

这些编译选项是默认打开的，如果开发者需要对代码进行Debug调试，可以注释这部分代码。

#### 动态链接

在GXAnalyze中，我们对libc++_shared.so 进行了动态链接，但是为了保证编译通过，我们注释了build.gradle下的这部分代码。

![image.png](https://gw.alicdn.com/imgextra/i3/O1CN01YcjVLX1vwb3f6mwRQ_!!6000000006237-2-tps-692-128.png)

当为客户端打包时，如果您的Apk中已经有了libc++_shared.so，可以打开这部分代码，可以动态链接libc++_shared.so，减少包大小。
