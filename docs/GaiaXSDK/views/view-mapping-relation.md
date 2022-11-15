# 视图映射关系
| 组件类型 | Android | iOS | 描述 |
| --- | --- | --- | --- |
| gaia-template | AbsoluteLayout | UIView/ScrollView | 作为根模板的标识；对业务透明。 |
| view | AbsoluteLayout | UIView | 一个容器，可以包含零个或者多个子视图，例如：text、image、scroll、grid等。其自身也可以拥有背景、圆角等属性。 |
| text | TextView | UILabel | 一个文字容器，可以用于承载文字内容，支持宽高自适应、纯色颜色、渐变颜色、文字大小、居中对齐等。 |
| image | ImageView | UIImageGifView | 一个图片容器，可用于承载图片内容，支持本地资源图片、网络资源图片等。 |
| iconfont | TextView | UILabel | 一个文字图片容器，可用于承载文字图片，例如：[https://www.iconfont.cn/](https://www.iconfont.cn/)网站下的资源。 |
| scroll | RecyclerView | UICollectionView | 一个单列横滑容器或者竖滑容器，可承载单类型子模板。具备边距、间距等属性。 |
| grid | RecyclerView | UICollectionView | 一个多列横滑容器或者竖滑容器，可承载单类型子模板。具备行数、列数、边距、间距等属性。 |
| lottie | LottieAnimationView | LotAnimationView | 一个Lottie动画容器，可用于承载动画。 支持本地资源和网络资源。 |


