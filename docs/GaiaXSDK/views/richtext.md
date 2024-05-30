# richtext

- 实现：
  - Android：TextView
  - iOS：UILabel

- 详情：
  - 一个富文本文字容器，可以用于承载文字内容，支持宽高自适应、纯色颜色、渐变颜色、文字大小、居中对齐等。

- 属性：
  - highlight-tag： 高亮标签
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-tag":"'#'",
        }
    }
  }
  ```
  - highlight-color： 高亮颜色
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-color":"'red'"
        }
    }
  }
  ```
  - highlight-font-size：高亮字体Size
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-font-size":"'12px'",
        }
    }
  }
  ```
  - highlight-font-weight：高亮字体Weight
  ```json
  {
    "title":{
        "value":"$title",
        "extend":{
            "highlight-font-weight":"600"
        }
    }
  }
  ```

::: danger
- 注意事项：
  - highlight-font-weight和highlight-font-size可以共同作用字体。
  - highlight-font-family和highlight-font-size可以共同作用字体。
  - highlight-font-weight和highlight-font-family不能共同使用。
  - 目前暂不支持fit-content属性，会导致宽度计算异常（字体相关）
:::

- 使用：
  ```
  // 定义:
  {
    "id": "rich_text_normal",
    "type": "richtext"
  }
  ```
  ```css
  // 样式：
  .rich_text_normal {
    width:100px;
    text-overflow:ellipsis;
    height:20px;
    font-size:15px;
  }

  ```
  ```json
  // 数据：
  {
    "data": {
      "rich_text_normal": {
        "value": "$data.text",
        "extend":{
          "highlight-color":"'#00ff00' or 'design token'",
          // 例如：主演: ^克里斯汀^·#贝尔/伊迪娜#·$门泽尔$/乔什·盖德/乔纳森·格罗夫/斯特尔林·K·布朗/埃文·蕾切尔·伍德/阿尔弗雷德·莫里纳/玛莎·普林顿/杰森·雷特/圣蒂诺·方塔纳
          "highlight-tag":"'$' or '^' or '*' or 自定义"
        }
      }
    }
  }
  ```
