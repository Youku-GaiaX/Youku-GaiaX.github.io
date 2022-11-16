# 方案 - M1模拟器编译报错（iOS）

## 错误描述 & 原因

### 错误描述

building for iOS Simulator-arm64 but attempting to link with file built for iOS 

### 错误原因

真机架构为：arm64，模拟器架构为：x86。

Xcode12之后模拟器已经用arm架构来编译项目了，而link链接的还是x86架构，导致找不到对应的架构。

## 解决方案1

1. Finder -> 应用程序 -> Xcode -> 显示简介 -> 勾选 “使用Rosetta打开” 
2. 重启Xcode，重新打开项目

## 解决方案2:

1. 在Excluded Architecture设置针对模拟器设置排除 arm64

![lALPJtuZYvU4xeDMh80B5A_484_135.png](https://gw.alicdn.com/imgextra/i3/O1CN01xNGsHt1jQk7UGOA8v_!!6000000004543-2-tps-484-135.png)

2.  在Podfile最后添加下面这段代码，避免被pod中的设置覆盖
```objectivec
post_install do |installer|
  installer.pods_project.build_configurations.each do |config|
    config.build_settings["EXCLUDED_ARCHS[sdk=iphonesimulator*]"] = "arm64"
  end
end
```
