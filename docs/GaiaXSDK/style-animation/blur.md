# 样式 - 高斯模糊

- 可配置的视图：
  - `view`

- 使用方式：
  - 为视图设置高斯模糊样式，`backdrop-filter:blur(10px)`。

::: warning
`backdrop-filter`的`value`值，仅支持配置固定数值`blur(10px)`，不支持其他配置效果。
:::

```css
#blur_view {
  backdrop-filter:blur(10px);
  ....
}
```

- 双端效果：

<img src="https://gw.alicdn.com/imgextra/i2/O1CN01KCYGxe1QGEKv9PC4O_!!6000000001948-2-tps-930-2032.png" width="300">
<img src="https://gw.alicdn.com/imgextra/i4/O1CN01n4O8ce1eqKAcS1hpv_!!6000000003922-2-tps-952-2008.png" width="300">

