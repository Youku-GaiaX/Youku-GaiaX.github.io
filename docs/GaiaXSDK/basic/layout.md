# 布局

## 布局介绍
优酷动态模板引擎是采用FlexBox的布局模型，支持css的子集以及部分扩展属性，包含静态布局属性和动态布局属性两个部分：

- 静态属性：写在index.css文件中固定样式。
- 动态属性：写在index.databinding文件中，根据数据和表达式可以动态修改的样式
## 支持的布局属性：
### width/height
`width/height`用于设置组件的宽高，其表现与CSS中的类似<[width - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/width)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| width / height | 100px / 100pt / 20% / auto | atuo |

### max-width/max-height
`max-width/max-height`用于设置组件的最大宽度/最大高度限制，其表现与CSS中类似<[max-width - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| max-width / max-height | 100px / 100pt / 20% / auto | atuo |

### min-width/min-height
`min-width/min-height`用于设置组件的最小宽度/最小高度限制，其表现与CSS中类似<[max-width - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/max-width)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| min-width / min-height | 100px / 100pt / 20% / auto | atuo |

### padding
设置组件的内边距，其表现与CSS中类似<[padding - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)>
##### padding
设置`padding`相当于同时设置了`padding-top`、 `padding-left`、`padding-bottom`、`padding-right`四个属性。
##### padding-top | padding-left | padding-bottom | padding-right
`margin-top`用于设置组件顶部内边距，`margin-left`用于设置组件左边内边距，`margin-bottom`用于设置组件底部内边距，`margin-right`用于设置组件右边的边距。

| 属性 | 取值示例 | 默认值 |
| --- | --- | --- |
| padding | 100px / 100pt | undefine |
| padding-top &#124; padding-left &#124; padding-bottom &#124; padding-right | 100px / 100pt | undefine |

### margin
设置组件的，其表现与CSS中类似<[padding - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)>
##### margin
设置`margin`相同于同时设置`margin-top`、`margin-left`、`margin-bottom`、`margin-right`四个属性。
##### margin-top | margin-left | margin-bottom | margin-right
`margin-top`用于设置组件距离上元素外边距，`margin-left`用于设置组件距离左边元素距离，`margin-bottom`用于设置组件距离底部元素外边距，`margin-right`用于设置组件距离右边元素的外边距。

| 属性 | 取值示例 | 默认值 |
| --- | --- | --- |
| margin | 100px / 100pt | undefine |
| margin-top &#124; margin-left &#124; margin-bottom &#124; margin-right | 100px / 100pt | undefine |

### position
`position`用于设置组件的相对父视图布局方式，只支持'relative'和'absolute'两种方式，默认的布局方式是relative。

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| position | relative / absolute | relative |

##### direction
`direction`指定组件布局方向顺序。`ltr`表示 left to right，即从左往右。反之`rtl`为从右往左。默认值为`inherit`。

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| direction | ltr / rtl / inherit | inherit |

##### top | left | bottom | right
`top`用于设置组件到顶部距离，`left`用于设置组件到左边距离，`bottom`用于设置组件到底部距离，`right`用于设置组件到右边距离。

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| margin | 100px / 100pt | undefine |
| top &#124; left &#124;bottom &#124;right | 100px / 100pt | undefine |

### flex-direction
`direction`指定组件布局方向顺序

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| flex-direction | row / column / row-reverse / column-reverse | row |

### display
`display`设置组件的显示类型。可用于元素的显示和隐藏。只支持'flex'和'none'两个值，默认值是'flex'。

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| display | flex / none | Flex |

### justify-content
`justifyContent` 需设置在父元素上，决定子元素在主轴方向的对齐方式，其表现与CSS中类似<[justify-content - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| Justify-content | flex-start / flex-end / center / stretch / space-between / space-around | flex-start |

### align-items
`align-items`需设置在父元素上，决定了子元素在交叉轴方向的对齐方式，其表现与CSS中类似<[align-items - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| align-items | flex-start / flex-end / center / baseline / stretch | stretch |

### align-self
`align-self`需设置在子元素上，决定了元素在父元素的交叉轴方向的对齐方式，其值会覆盖父元素的`align-items`的值，其表现与CSS中类似<[align-self - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self)>

| 属性 | 取值 | 默认值 |
| --- | --- | --- |
| align-self | flex-start / flex-end / center / baseline / stretch / auto | atuo |

### flex-basis
`flex-basis`属性定义了在分配多余空间之前，项目占据的主轴空间，它的默认值为`auto`，即项目的本来大小其表现与CSS中类似<[flex-basis - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis)>
### flex-shrink
`flex-shrink`定义了项目的缩小比例，默认为1，即如果空间不足该项目将缩小，其表现与CSS中类似<[flex-shrink - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-shrink)>
### flex-grow
`flex-grow`属性定义项目的放大比例，默认为`0`，即如果存在剩余空间也不撑开，其表现与CSS中类似<[flex-grow - CSS: Cascading Style Sheets | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow)>
### aspect-ratio
`aspect-ratio`用于设置组件的宽高比（宽 / 高），忽略主轴和交叉轴，不再代表纵横比。

## 单位说明
布局属性值设置

| 取值类型 | 说明 |
| --- | --- |
| px / pt | 使用绝对值定义宽度，pt = px  * （当前屏幕宽度 / 375.f） |
| percent | 使用外层元素的容纳区块宽度（the containing block's width）的百分比定义宽度 |
| auto | `auto`
能为弹性布局指明更合理的默认表现。 |


## 参考资料
[CSS（层叠样式表） | MDN (mozilla.org)](https://developer.mozilla.org/zh-CN/docs/Web/CSS)
[Flex 布局教程：语法篇 - 阮一峰的网络日志 (ruanyifeng.com)](https://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)
