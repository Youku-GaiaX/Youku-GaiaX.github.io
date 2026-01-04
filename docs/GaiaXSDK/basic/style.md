# 样式

## 介绍

样式支持 CSS 的子集以及部分扩展属性，包含静态样式属性和动态样式属性两个部分：
- 静态属性：写在 `index.css` 文件中的固定样式。
- 动态属性：写在 `index.databinding` 的 `extend` 中，根据数据和表达式动态修改样式（可用的 key 与 `index.css` 基本一致，详见数据绑定文档）。

GaiaX 的样式系统基于 FlexBox 布局和自定义渲染引擎实现，**只解析有限的一组属性和取值**，其它标准 CSS 属性会被忽略。

## 选择器与基本格式

- **选择器形式**：
  - 仅支持 **`#节点 id`** 形式的选择器，对应 `index.json` 中的 `id` 字段。
  - 示例：
    ```css
    #HelloWorld {
      width: 100%;
      height: 240px;
      background-color: green;
    }

    #text {
      width: 100%;
      height: 30px;
      color: #ff0303;
      font-size: 25px;
    }
    ```
  - 不支持标签选择器、后代选择器、并列选择器、伪类/伪元素等复杂选择器。

- **语法限制**：
  - 一条属性一行或多行均可，分号 `;` 结尾。
  - 不支持 `!important`、`calc()` 等高级语法。
  - 同一属性后写多次时，**后写的会覆盖前面的值**。

## 值与单位

### 尺寸与长度

- **支持的尺寸单位**（对应 `GXTemplateKey` 中的说明）：
  - `px`：像素（推荐）
  - `pt`：点
  - `%`：百分比
  - `auto`：自动
- **典型用法**：
  - `width: 100px;`
  - `height: 50%;`
  - `min-width: 100px;`
  - `flex-basis: 50%;`

> 除部分特殊属性（如 `lines`、`flex-grow`、`flex-shrink`、`opacity` 等）外，尺寸相关属性值都建议显式带单位。

### 颜色取值

GaiaX 颜色支持多种写法（Android / iOS 一致）：

- **十六进制**
  - 详情：`#rrggbb` / `#rrggbbaa`，其中 `aa` 为 alpha 通道值。

- **RGB / RGBA**
  - 详情：`rgb(255, 255, 255)` 或 `rgba(255, 255, 255, 0.5)`

- **普通色名**
  - 详情：`white` `black` `gray` `red` `green` `blue` `yellow` `cyan` `transparent`

- **DesignToken / 业务自定义值**
  - 详情：由业务实现的 DesignToken 字符串，如：
    ```css
    #template_design_token_color {
      background-color: gaiax_color;   /* 颜色 Token */
    }

    #template_design_token_dimen {
      height: gaiax_dimen;             /* 尺寸 Token */
    }
    ```
  - 具体解析逻辑由端上 `DesignToken` 实现（如 iOS 侧的 `GXBizServiceProtocol.colorFromDesignToken:` 等）决定。

## 文本相关样式

对应 `GXTemplateKey` 中的文本样式：

- **`font-size`**
  - 作用：字体大小。
  - 取值：`<number>px` / `<number>pt` / DesignToken   （如 `14px`、`16pt`、`gaiax_font`）。

- **`font-family`**
  - 作用：字体族。
  - 取值：系统字体名或 DesignToken 对应的字体名（如 `PingFangSC-Regular` 或业务 Token）。

- **`font-weight`**
  - 作用：字重。
  - 取值：
    - 关键字：`normal` / `bold` / `medium`
    - 数字字符串：`"100"` / `"200"` / `"300"` / `"400"` / `"500"` / `"600"` / `"700"`
  - 映射：
    - `bold`、`medium`、`500`、`600`、`700` → 粗体
    - `normal`、`100`、`200`、`300`、`400` → 常规体

- **`color`**
  - 作用：文字颜色。
  - 取值：同前文「颜色取值」。

- **`lines`**（`STYLE_FONT_LINES`）
  - 作用：文本显示行数。
  - 取值：
    - `1`：单行（等同于 `setSingleLine(true)`）。
    - `0`：不限制行数。
    - `>=2`：最多显示对应行数，超过时按 `text-overflow` 截断。

- **`line-height`**（`STYLE_FONT_LINE_HEIGHT`）
  - 作用：行高，单位同尺寸属性（如 `20px`）。

- **`text-align`**（`STYLE_FONT_TEXT_ALIGN`）
  - 作用：水平对齐。
  - 取值：`left` / `center` / `right`。

- **`text-overflow`**（`STYLE_FONT_TEXT_OVERFLOW`）
  - 作用：文本溢出时截断方式。
  - 取值：
    - `ellipsis`：尾部省略号（默认行为）。
    - `clip`：裁剪，具体行为可通过扩展点自定义（见 `GXRegisterCenter.GXIExtensionStaticProperty`）。
    - `middle`：中间省略号（Android 部分实现）。

- **`text-decoration`**（`STYLE_FONT_TEXT_DECORATION`）
  - 作用：文字装饰线。
  - 取值：
    - `line-through`：删除线。
    - `underline`：下划线。

- **`fit-content`**（`STYLE_FIT_CONTENT`）
  - 作用：文字尺寸自适应。
  - 取值：`true` / `false`。
  - 注意：在部分场景（尤其富文本 `richtext`）下，开启 `fit-content` 可能导致宽度计算异常，建议按组件文档说明谨慎使用。

## 视图与背景相关样式

- **`background-color`**（`STYLE_BACKGROUND_COLOR`）
  - 作用：视图背景色。
  - 取值：同「颜色取值」。

- **`background-image`**（`STYLE_BACKGROUND_IMAGE`）
  - 作用：支持纯图片或线性渐变，常用于文字渐变色等效果。
  - 推荐写法（线性渐变）：
    ```css
    #nodeId {
      background-image: linear-gradient(to right, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to bottom, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to left, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to top, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to bottom right, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to bottom left, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to top right, #000000 0%, #ffffff 100%);
      background-image: linear-gradient(to top left, #000000 0%, #ffffff 100%);
    }
    ```

- **`opacity`**（`STYLE_OPACITY`）
  - 作用：透明度。
  - 取值：`0.0` ~ `1.0` 的浮点数（字符串形式，如 `"0.5"`）。

- **`hidden`**（`STYLE_HIDDEN`）
  - 作用：控制视图可见性（不影响布局）。
  - 取值：
    - `"true"`：不可见（`View.INVISIBLE`）。
    - `"false"`：可见。

- **`box-shadow`**（`STYLE_BOX_SHADOW`）
  - 作用：视图阴影（Android / iOS 支持）。
  - 取值格式：
    ```css
    box-shadow: <x-offset> <y-offset> <blur-radius> <spread-radius> <color>;
    ```
    例如：
    ```css
    box-shadow: 0px 5px 5px 5px #ff0000;
    ```
  - 需要同时设置 `overflow: visible;` 才能完整展示阴影（参见 `view` 组件文档）。

- **`backdrop-filter`**（`STYLE_BACKDROP_FILTER`）
  - 作用：背景模糊等效果，语义对齐标准 CSS `backdrop-filter`。
  - 实际支持情况依各端实现而定，使用前请在目标端验证效果。

## 边框与圆角

- **`border-width`**（`STYLE_BORDER_WIDTH`）
  - 作用：统一设置四个边的边框宽度。
  - 取值：尺寸（`px` / `pt` / `%`）。

- **`border-color`**（`STYLE_BORDER_COLOR`）
  - 作用：统一设置四个边的边框颜色。
  - 取值：同「颜色取值」。

- **`border-radius`**（`STYLE_BORDER_RADIUS`）
  - 作用：统一设置四个角的圆角半径。
  - 取值：尺寸；可配合 DesignToken 使用。

- **单独圆角**：
  - `border-top-left-radius`
  - `border-top-right-radius`
  - `border-bottom-left-radius`
  - `border-bottom-right-radius`
  - 取值：尺寸（如 `4px`、`8px`）。

## 布局相关样式（FlexBox）

以下属性对应 `GXFlexBox` 与 Stretch 布局引擎，用于控制布局行为：

- **`display`**（`FLEXBOX_DISPLAY`）
  - 取值：`flex` / `none`。
  - `none` 用于隐藏节点并参与重新布局。

- **`direction`**（`FLEXBOX_DIRECTION`）
  - 取值：`ltr` / `rtl` / `inherit`。
  - 一般保持默认 `inherit` 即可。

- **`flex-direction`**（`FLEXBOX_FLEX_DIRECTION`）
  - 取值：`row` / `row-reverse` / `column` / `column-reverse`。

- **`flex-wrap`**（`FLEXBOX_FLEX_WRAP`）
  - 取值：`nowrap` / `wrap` / `wrap-reverse`。

- **`justify-content`**（`FLEXBOX_JUSTIFY_CONTENT`）
  - 取值：`flex-start` / `flex-end` / `center` / `space-between` / `space-around` / `space-evenly`。

- **`align-items`**（`FLEXBOX_ALIGN_ITEMS`）
  - 取值：`flex-start` / `flex-end` / `center` / `baseline` / `stretch`。

- **`align-self`**（`FLEXBOX_ALIGN_SELF`）
  - 取值：`auto` / `flex-start` / `flex-end` / `center` / `baseline` / `stretch`。

- **`align-content`**（`FLEXBOX_ALIGN_CONTENT`）
  - 取值：`flex-start` / `flex-end` / `center` / `space-between` / `space-around` / `stretch`。

- **`overflow`**（`FLEXBOX_OVERFLOW`）
  - 取值：
    - 布局引擎：`visible` / `hidden` / `scroll`。
    - 样式层（文字等）：主要使用 `visible` / `hidden`；`visible` 时才能完整显示阴影等。

- **定位与边距**：
  - 位置类型 `position`（`FLEXBOX_POSITION_TYPE`）：`relative` / `absolute`。
  - 位置：`left` / `top` / `right` / `bottom`，取值为尺寸。
  - 外边距：
    - `margin` / `margin-left` / `margin-top` / `margin-right` / `margin-bottom`。
  - 内边距：
    - `padding` / `padding-left` / `padding-top` / `padding-right` / `padding-bottom`。
  - 以上边距/内边距均支持 `px` / `pt` / `%` / `auto` 以及 DesignToken 尺寸。

- **边框（布局维度）**：
  - `border` / `border-left` / `border-top` / `border-right` / `border-bottom`。
  - 取值：边框厚度尺寸（与样式层 `border-width` 区分，二者共同影响最终效果）。

- **尺寸与约束**：
  - 宽高：`width` / `height`。
  - 最小尺寸：`min-width` / `min-height`。
  - 最大尺寸：`max-width` / `max-height`。
  - 综合尺寸字段：`size` / `min-size` / `max-size`（一般由工具或引擎生成，手写时推荐直接使用 `width` / `height` 系列）。

- **Flex 属性**：
  - `flex-grow`：扩展比率，浮点数字符串，如 `"0"`、`"1"`。
  - `flex-shrink`：收缩比率，浮点数字符串，如 `"1"`。
  - `flex-basis`：基础尺寸，值为尺寸或百分比，如 `"100px"`、`"50%"`。

- **`aspect-ratio`**（`FLEXBOX_ASPECT_RATIO`）
  - 作用：宽高比，取值为浮点数字符串，如 `"1.7778"`。

## 注意事项

- **只解析支持的属性**：
  - 未在上述列表中的 CSS 属性，大多数会被忽略且不报错，建议避免在 `index.css` 中混杂无效属性。

- **选择器限制**：
  - 当前仅支持 `#节点 id` 形式的选择器，不支持复杂选择器和层叠规则；请通过拆分节点实现复杂样式。

- **单位规范**：
  - 尽量为尺寸带上单位（如 `px`、`pt`、`%`），避免只写纯数字导致解析歧义。

- **跨端一致性**：
  - 部分属性在不同端的支持度和默认值略有差异（例如 `text-overflow: clip`、`fit-content` 等），使用前建议在 Android / iOS 上分别验证效果。

- **动态样式与扩展**：
  - 通过 `index.databinding` 的 `extend` 字段可以设置与 `index.css` 相同的样式 key，并可结合表达式做动态计算，具体示例见 `databinding` 文档。
  - 高亮相关样式（如 `highlight-color` 等）主要用于 `richtext`，详见对应组件文档。
