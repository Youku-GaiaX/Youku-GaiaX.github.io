# 表达式语法

## 简介

为了能够实现动态模板中databinding的数据取值和计算逻辑，我们提了一系列供系列的表达式规则。

## 基础类型

-  布尔类型 
   - iOS端 对应 `NSNumber`类型，Android端 对应 `Boolean`类型
   - 值只能为 `true` 和 `false`
-  数字类型 
   - 支持`Float`类型以及`Long`类型
   - iOS端 对应 `NSNumber`，Andriod 对应 `Number`
   - 值为：`1`，`1.0`，`1.001`，`0.001`
   - 当数值带小数点如`1.0`时，识别为`Float`类型，当数值不带小数点如`1`时，识别为`Long`类型
-  字符串类型 
   -  iOS端 对应 `NSString`，Andriod端 对应 `String` 
   -  在表达式中必须使用单引号标识出来，'string' 
   - 当使用形如#000000等16进制颜色值时，需要使用单引号`'`把颜色值括起来，否则不生效。
## 表达式语法

#### 支持的格式

```json
//获取原始数据源
$$ 
//常量字符串
"'hello world'"
//取值表达式
$a.b
//三元表达式
a ? b : c
a ?: c
//条件判断 (&&，||，==，>，>=，<，<=)
$a == 'b'
$a.c && $a.b
//计算表达式 (+,-,*,/,%)
$a.string + 'string'
$a.num + 100
$a.num - 100
$a.num * 100
$a.num / 100
$a.num % 100
//环境变量
env('appVersion')
//数据有效判断，支持string，array，dictionary，返回int
size($a)
```

## 表达式类型
### 取值表达式

最常用的就是取值表达式了，这里的取值的**值**特指外部传入的数据（Android: JSONObject iOS: NSDictionary）。

```json
// 语法格式与含义：
$$ 											//获取原始数据
$title 							    //字符串
$data[0]	 							//数组
$data.title	 						//字典
$data.items[0].title	 	//字典和数组嵌套
```

### 条件表达式

条件表达式，一般特质三元表达式，通过`?:`的形势，判断真假，并返回一个结果。

**可作为真值或假值的条件**

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
支持的运算符：`+、-、*、/、%`

左值与右值支持如下：
- 取值表达式
- 数字值 (0/1/2/3....)
- 字符值 ('A，'ABC'，'ABCD')

```json
// 语法格式与含义：
'字符串1' + $data.title 								//字符串拼接
'字符串1' + $data.title + '字符串2' 		//字符串拼接
'字符串1' + $data.title + $data.desc  	//字符串拼接
100 + $data.num												//数值加法
100 - $data.num												//数值减法
100 * $data.num												//数值乘法
100 / $data.num												//数值除法（分母不能为0）
100 % $data.num												//数值取余
```

### 环境变量

依赖于业务实现和扩展。

```json
//环境变量(依赖于业务实现： env() -> 返回值Any
定义：
	env('isIOS')
返回值：
	Android: true/false iOS: 1/0

//是否android
定义：
	env('isAndroid')
返回值：
	Android: true/false iOS: 1/0

//平台信息
定义：
	env('platform')
返回值：
	"andriod / ios"

//app版本信息
定义：
	env('appVersion')
返回值：
	"9.11.x"

//屏幕宽度
定义：
	env('screenWidth') / env('screenHeight')
返回值：
	GaiaX中的px单位值。
	Android中则是DP值。
	iOS则是px值。
```

### 数据有效性判断

判断字符串，数组，字典是否为有效数据
注：目前函数方法中的参数不支持除直接传值和取值表达式外的其他运算。

```json
//获取数组/字典的count/字符串:  size() -> int
size(string)
size(array)
size(dict)

//例子
size($data.nodes)
```
### 
 
