# 表达式

## 简介

为了实现弱逻辑动态性，我们定义了表达式语法，可以在databinding文件中使用。

## 基础类型

-  布尔类型 `bool`
	- 可取值：`true` `false`
	- 描述：
		
		iOS端 对应 `NSNumber`类型，Android端 对应 `Boolean`类型。

-  数字类型 `number`
	- 示例：`1`，`1.0`，`1.001`，`0.001`
	- 描述：
		
		支持`Float`类型以及`Long`类型。
		
		iOS端 对应 `NSNumber`，Android 对应 `Number`。
   		
		当数值带小数点如`1.0`时，识别为`Float`类型，当数值不带小数点如`1`时，识别为`Long`类型。
   
-  字符串类型 `string`
	- 描述：

   		iOS端 对应 `NSString`，Android端 对应 `String` 

	- 注意事项：

   		在表达式中必须使用单引号标识出来，例如：'string' 

   		当使用形如#000000等16进制颜色值时，也需要使用单引号`'`把颜色值括起来，否则不生效。

## 语法

### 支持的语法格式

- 获取原始数据源
```json
$$ 
```

- 常量字符串
```json
"'hello world'"
```

- 取值表达式
```json
$a.b
```

- 三元表达式
```json
a ? b : c
a ?: c
```

- 条件判断 (&&，||，==，>，>=，<，<=)
```json
$a == 'b'
$a.c && $a.b
```

- 计算表达式 (+,-,*,/,%)
```json
$a.string + 'string'
$a.num + 100
$a.num - 100
$a.num * 100
$a.num / 100
$a.num % 100
```
- 环境变量
```json
env('appVersion')
```

- 函数
```json
// 数据有效判断，支持string，array，dictionary，返回int
size($a)
```

## 表达式类型

### 取值表达式

- 详情：
	
	最常用的就是取值表达式了，这里的取值的**值**特指外部传入的数据。

	Android: JSONObject iOS: NSDictionary。

```json
// 语法格式与含义：
$$ 											//获取原始数据
$title 							    //字符串
$data[0]	 							//数组
$data.title	 						//字典
$data.items[0].title	 	//字典和数组嵌套
```

### 条件表达式

- 详情：
	
	条件表达式，一般特质三元表达式，通过`?:`的形势，判断真假，并返回一个结果。

- 注意事项：
	
	嵌套使用条件表达式时，务必使用`()`对嵌套的三元表达式做好优先级划分。
	
	条件的结算结果需要为真值或假值:
	
	真值：`"true"` `true` `1`
	
	假值：`"false"` `false` `0`

```json
// 语法格式：
// 形式1
a ? b : c
$data.title ? 'flex' : 'none'
$data.backgroundColor ? $data.backgroundColor : 'green'

// 形式2
a ?: b
$data.backgroundColor ?: 'green'
$data.title ?: $data.nodes[0].title
```

### 判断表达式
- 详情：
	
	判断表达式结果为bool类型，通常作为条件，配合三元表达式来使用

	支持的运算符：`==、!=、>、>=、<、<=、&&、||`

	左值与右值支持如下：
	- 取值表达式
	- 条件表达式
	- 布尔值 (true / false)
	- 数字值 (0/1/2/3....)
	- 字符值 ('A，'ABC'，'ABCD')

```json
// 语法格式与含义： 
$data.title == 0 //为数字时，同时还支持以下运算符 >、>=、<、<=、!=
$data.title == 'string'//为字符串时，同时支持一下运算符 != ，&&， ||
$data.title == $data.subtitle//为对象时，同时支持一下运算符 != ，&&， ||
$data.title && $data.show

//结合三元表达式
$data.title == '' ? 'none' : 'flex'
或
($data.title == '') ? 'none' : 'flex'
```

### 计算表达式

- 详情：

	支持的运算符：`+、-、*、/、%`

	左值与右值支持如下：
	- 取值表达式
	- 数字值 (0/1/2/3....)
	- 字符值 ('A，'ABC'，'ABCD')

```json
// 语法格式与含义：
'字符串1' + $data.title 				   //字符串拼接
'字符串1' + $data.title + '字符串2' 		//字符串拼接
'字符串1' + $data.title + $data.desc  	//字符串拼接
100 + $data.num							//数值加法
100 - $data.num							//数值减法
100 * $data.num							//数值乘法
100 / $data.num							//数值除法（分母不能为0）
100 % $data.num							//数值取余
```
### 函数表达式

#### env

- 详情：
	
	依赖于业务实现和扩展。啊

**已实现：**
```json
//环境变量(依赖于业务实现： env() -> 返回值Any
定义：
	env('isiOS')
返回值：
	Android: true/false iOS: 1/0

//是否android 
定义：
	env('isAndroid')
返回值：
	Android: true/false iOS: 1/0

```

####  size

- 详情：
	
	判断字符串，数组，字典是否为有效数据
	
- 注意事项：
	
	目前函数方法中的参数不支持除直接传值和取值表达式外的其他运算。

```json
//获取数组/字典的count/字符串:  size() -> int
size(string)
size(array)
size(dict)

//例子
size($data.nodes)
```
 
#### 自定义函数

- 详情：

	接入方可以通过扩展能力为GaiaX提供自定义的函数处理能力

- 扩展函数：

```swift
GXRegisterCenter.default().registerFunctionExpression(...)
```

```kotlin
GXRegisterCenter.instance.registerExtensionFunctionExpression(...)
```

- 案例：

iOS可以参考：<https://github.com/alibaba/GaiaX/blob/main/GaiaXiOS/GaiaXiOSTests/TestCase/GXExpressionExtendTest.swift>

Android可以参考：<https://github.com/alibaba/GaiaX/blob/main/GaiaXAndroid/src/androidTest/java/com/alibaba/gaiax/GXCommonExpressionTest.kt>