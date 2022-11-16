# 方案 - 模板表达式版本切换

## 背景
优酷内准备支持开源版本的表达式编写方式。
## 目标
不影响现有逻辑的情况下支持**模板级别**的**表达式解析能力切换**。
## 方案
### 模板
在index.json中新增"exp-version"字段。

该可支持的值有"V1;V2"。

V1代表该模板使用优酷版本的表达式逻辑解析。
V2代表该模板使用开源版本的表达式逻辑解析。

```json
{
  "id": "gx-content-uper-grid",
  "type": "gaia-template",
  "exp-version": "V1/V2",
}

```
```json
{
  "id": "gx-content-uper-grid",
  "type": "gaia-template"
}
```
### SDK
在开源版本中，exp-version字段默认值为V2，可默认不设置。
在优酷版本中，exp-version字段默认值为V1，可默认不设置。

### Studio
在优酷版本的Studio中新增"exp-version"字段下拉选择框：V1、V2，默认值为V1。
