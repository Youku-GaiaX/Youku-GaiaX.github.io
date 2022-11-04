import React from "react"
import "./expression.css"
import expression from "../../static/carbon.webp"

export default () => (
  <div className="root-expression">
    <div className="expression-card">
      <div className="expression-top-div">
        <p className="expression-top-title">表达式</p>
        <p className="expression-top-title03">03</p>
      </div>
      <div className="expression-mid-div">
        <div className="expression-mid-img-div">
          <img className="expression-mid-img" src={expression}></img>
        </div>
        <div className="expression-mid-title-div">
          <p className="expression-mid-title">通过表达式动态驱动模板UI</p>
          <p className="expression-mid-sub">
            GaiaX的表达式是逻辑动态化的基础，目前的语法规范支持3元、取值、关系、基础数学运算等能力。通过表达式，你可以对模板中的所有视觉元素实现动态化的数据驱动。
          </p>
        </div>
      </div>
    </div>
  </div>
)
