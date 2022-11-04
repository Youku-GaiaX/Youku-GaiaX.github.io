import React from "react"
import "./studio.css"
import { Image } from "antd"
import studio from "../../static/gif_studio.webp"

export default () => (
  <div className="root-studio">
    <div className="studio-container">
      <div className="studio-title-div">
        <p className="studio-title-main">模板可视化搭建IDE</p>
        <p className="studio-title-sub">
          GaiaX Studio是GaiaX团队开发的模板DSL可视化搭建IDE。你可以使用GaiaX
          Studio，通过拖拽、点击、选择、导入等LowCode的方式快速完成模板的搭建、编辑、预览调试，避免了直接编写模板源码的过程。
          <br />
          GaiaX Studio
          以开发者最熟悉的交互方式进行工具的设计，让Flexbox模板DSL的构建和学习成本降至最低。
        </p>
      </div>
      <Image className="studio-img" src={studio}></Image>
    </div>
  </div>
)
